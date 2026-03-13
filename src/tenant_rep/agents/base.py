from __future__ import annotations

from dataclasses import dataclass, field
from typing import Any


@dataclass
class AgentOutput:
    title: str
    executive: list[str]
    internal: list[str] = field(default_factory=list)
    data: dict[str, Any] = field(default_factory=dict)

    def render(self) -> str:
        parts = [f"# {self.title}", "", "## Executive Summary"]
        parts.extend([f"- {line}" for line in self.executive])
        if self.internal:
            parts.extend(["", "## Internal Notes"])
            parts.extend([f"- {line}" for line in self.internal])
        if self.data:
            import json
            parts.extend(["", "## Structured Data", "```json", json.dumps(self.data, indent=2), "```"])
        return "\n".join(parts) + "\n"
