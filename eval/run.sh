#!/usr/bin/env bash
set -euo pipefail

# PromptedCRE Eval Loop
# Usage: ./run.sh <skill-name> [iterations]
# Example: ./run.sh intake 10

SKILL_NAME="${1:?Usage: ./run.sh <skill-name> [iterations]}"
ITERATIONS="${2:-10}"

EVAL_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_DIR="$(dirname "$EVAL_DIR")"
SKILL_SOURCE="$REPO_DIR/agent/playbook/skills/$SKILL_NAME/SKILL.md"
WORKSPACE="$EVAL_DIR/workspace"
LOGS_DIR="$EVAL_DIR/logs"
WORKING_SKILL="$WORKSPACE/SKILL.md"

# Verify skill exists
if [ ! -f "$SKILL_SOURCE" ]; then
    echo "ERROR: Skill not found at $SKILL_SOURCE"
    echo "Available skills:"
    ls "$REPO_DIR/agent/playbook/skills/"
    exit 1
fi

# Setup workspace
mkdir -p "$WORKSPACE" "$LOGS_DIR"
cp "$SKILL_SOURCE" "$WORKING_SKILL"
echo "Copied $SKILL_NAME skill to workspace"

# Read locked files
RUBRIC=$(cat "$EVAL_DIR/rubric.md")
SCENARIO=$(cat "$EVAL_DIR/scenario-protech.md")
PROGRAM=$(cat "$EVAL_DIR/program.md")

# Track scores
BASELINE_SCORE=""
BEST_SCORE=""
IMPROVEMENTS_KEPT=0

echo ""
echo "=== STARTING EVAL LOOP ==="
echo "Skill: $SKILL_NAME"
echo "Iterations: $ITERATIONS"
echo ""

for i in $(seq 1 "$ITERATIONS"); do
    TIMESTAMP=$(date +"%Y-%m-%d-%H-%M")
    LOG_FILE="$LOGS_DIR/${TIMESTAMP}-${SKILL_NAME}-iter${i}.md"
    CURRENT_SKILL=$(cat "$WORKING_SKILL")

    echo "--- Iteration $i/$ITERATIONS ---"

    # Build the prompt
    PROMPT="$(cat <<HEREDOC
You are running iteration $i of the PromptedCRE skill improvement loop.

## Program (your instructions)

$PROGRAM

## Current SKILL.md

$CURRENT_SKILL

## Scenario (LOCKED — do not modify)

$SCENARIO

## Rubric (LOCKED — do not modify)

$RUBRIC

Now execute the program: score the skill, hypothesize one improvement, rewrite, re-score, and output the verdict.
HEREDOC
)"

    # Run Claude
    RESULT=$(claude --print -p "$PROMPT" --model sonnet 2>&1) || {
        echo "  ERROR: Claude invocation failed. Skipping iteration."
        echo "# Iteration $i — ERROR" > "$LOG_FILE"
        echo "" >> "$LOG_FILE"
        echo "Claude invocation failed." >> "$LOG_FILE"
        continue
    }

    # Parse scores
    BASELINE=$(echo "$RESULT" | grep -A1 "BASELINE_SCORES:" | tail -1 || true)
    NEW_TOTAL=$(echo "$RESULT" | grep "weighted_total:" | tail -1 | grep -oE '[0-9]+\.[0-9]+' || true)
    VERDICT=$(echo "$RESULT" | grep "^VERDICT:" | head -1 | awk '{print $2}' || true)
    DELTA=$(echo "$RESULT" | grep "^DELTA:" | head -1 | grep -oE '[+-]?[0-9]+\.[0-9]+' || true)
    HYPOTHESIS=$(echo "$RESULT" | grep "^HYPOTHESIS:" | head -1 | sed 's/^HYPOTHESIS: //' || true)

    # Get baseline on first iteration
    if [ "$i" -eq 1 ]; then
        BASELINE_SCORE=$(echo "$RESULT" | grep "weighted_total:" | head -1 | grep -oE '[0-9]+\.[0-9]+' || echo "?")
        BEST_SCORE="$BASELINE_SCORE"
        echo "  Baseline score: $BASELINE_SCORE"
    fi

    echo "  Hypothesis: ${HYPOTHESIS:-unknown}"
    echo "  New score: ${NEW_TOTAL:-unknown}"
    echo "  Verdict: ${VERDICT:-unknown} (Δ ${DELTA:-?})"

    # Extract and apply the improved skill if KEEP
    if [ "$VERDICT" = "KEEP" ]; then
        # Extract skill between markers
        EXTRACTED=$(echo "$RESULT" | sed -n '/===SKILL_START===/,/===SKILL_END===/p' | sed '1d;$d')
        if [ -n "$EXTRACTED" ]; then
            echo "$EXTRACTED" > "$WORKING_SKILL"
            IMPROVEMENTS_KEPT=$((IMPROVEMENTS_KEPT + 1))
            if [ -n "$NEW_TOTAL" ]; then
                # Update best score (basic comparison)
                BEST_SCORE="$NEW_TOTAL"
            fi
            echo "  ✓ Improvement applied"
        else
            echo "  ⚠ KEEP verdict but could not extract skill — skipping"
        fi
    else
        echo "  ✗ Reverted"
    fi

    # Write log
    cat > "$LOG_FILE" <<EOF
# Iteration $i — $SKILL_NAME

**Timestamp:** $TIMESTAMP
**Verdict:** ${VERDICT:-ERROR}
**Delta:** ${DELTA:-?}
**Hypothesis:** ${HYPOTHESIS:-unknown}
**New Score:** ${NEW_TOTAL:-unknown}

## Full Output

$RESULT
EOF

    echo ""
done

# Summary
echo "=== EVAL COMPLETE ==="
echo "Skill: $SKILL_NAME"
echo "Iterations: $ITERATIONS"
echo "Improvements kept: $IMPROVEMENTS_KEPT/$ITERATIONS"
echo "Baseline score: ${BASELINE_SCORE:-unknown}"
echo "Best score: ${BEST_SCORE:-unknown}"

if [ -n "$BASELINE_SCORE" ] && [ -n "$BEST_SCORE" ] && [ "$BASELINE_SCORE" != "?" ] && [ "$BEST_SCORE" != "?" ]; then
    TOTAL_DELTA=$(echo "$BEST_SCORE - $BASELINE_SCORE" | bc 2>/dev/null || echo "?")
    echo "Delta: +${TOTAL_DELTA}"
fi

echo ""
echo "Logs: $LOGS_DIR/"
echo "Improved skill: $WORKING_SKILL"
echo ""
echo "To apply the improved skill back to the repo:"
echo "  cp $WORKING_SKILL $SKILL_SOURCE"
