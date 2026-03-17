"""Premium boot-up banner for PromptedCRE CLI."""
from __future__ import annotations

from rich.console import Console
from rich.panel import Panel
from rich.table import Table
from rich.text import Text
from rich import box

try:
    import pyfiglet
except ImportError:
    pyfiglet = None

VERSION = "0.2.0"


def _ascii_banner() -> str:
    if pyfiglet is not None:
        return pyfiglet.figlet_format("PromptedCRE", font="slant").rstrip()
    return "PromptedCRE"


def show_banner(console: Console | None = None) -> None:
    """Display the full boot-up sequence: banner + dashboard."""
    c = console or Console()

    # ── Welcome bar ──────────────────────────────────────────
    c.print()
    c.print(
        Panel(
            f"[bold]Welcome to PromptedCRE v{VERSION}[/bold]",
            style="blue",
            box=box.HEAVY,
            expand=False,
        )
    )

    # ── ASCII art banner ─────────────────────────────────────
    banner = _ascii_banner()
    c.print(Text(banner, style="bold blue"))
    c.print(
        "[dim]Free AI agent for industrial real estate[/dim]"
    )
    c.print(
        "[dim]You make physical things. We handle the real estate.[/dim]"
    )
    c.print()

    # ── How it works ─────────────────────────────────────────
    steps_table = Table(
        box=box.SIMPLE_HEAVY,
        show_header=False,
        padding=(0, 2),
        expand=True,
    )
    steps_table.add_column("step", style="bold cyan", width=6)
    steps_table.add_column("title", style="bold white", width=22)
    steps_table.add_column("desc", style="dim")
    steps_table.add_row("01", "Tell it what you need", "Space, power, docks, clear height, timeline")
    steps_table.add_row("02", "Search the market", "Drop-in params for CoStar, LoopNet, Crexi")
    steps_table.add_row("03", "Compare and decide", "Score buildings. Lease vs. buy. A vs. B")
    steps_table.add_row("04", "Bring in the humans", "Industrial brokers on standby")

    c.print(
        Panel(
            steps_table,
            title="[bold]HOW IT WORKS[/bold]",
            title_align="left",
            border_style="blue",
            box=box.ROUNDED,
        )
    )

    # ── 8 Workflows ──────────────────────────────────────────
    wf_table = Table(
        box=box.SIMPLE,
        show_header=False,
        padding=(0, 1),
        expand=False,
    )
    wf_table.add_column("cmd", style="bold cyan", no_wrap=True)
    wf_table.add_column("desc", style="dim", no_wrap=True)

    workflows = [
        ("promptedcre intake", "Capture space, power, docks, clear height, timeline"),
        ("promptedcre filters", "Drop-in parameters for CoStar, LoopNet, Crexi"),
        ("promptedcre add-property", "Normalize and ingest a listing"),
        ("promptedcre survey", "Score every building against your real criteria"),
        ("promptedcre compare", "Lease vs. buy. Building A vs. Building B"),
        ("promptedcre tour", "Pre-tour checklist and walk agenda"),
        ("promptedcre questions", "40+ questions that surface hidden problems"),
        ("promptedcre deal", "LOI structure and negotiation strategy"),
        ("promptedcre memo", "Executive decision memos for your team"),
    ]
    for cmd, desc in workflows:
        wf_table.add_row(cmd, desc)

    c.print(
        Panel(
            wf_table,
            title="[bold]8 WORKFLOWS[/bold]",
            subtitle="[dim]everything you need, nothing you don't[/dim]",
            title_align="left",
            subtitle_align="right",
            border_style="blue",
            box=box.ROUNDED,
        )
    )

    # ── Quick start ──────────────────────────────────────────
    quickstart = Text.from_markup(
        "[bold white]Quick start[/bold white]\n"
        "[dim]─────────────[/dim]\n"
        "[cyan]→[/cyan] [white]promptedcre intake --input requirement.json[/white]\n"
        "[cyan]→[/cyan] [white]promptedcre filters --input requirement.json[/white]\n"
        "[cyan]→[/cyan] [white]promptedcre compare --properties ./props/ --requirement requirement.json[/white]\n"
        "\n"
        "[bold white]Need a human?[/bold white]\n"
        "[dim]─────────────[/dim]\n"
        "[cyan]→[/cyan] [white]Book a free call:[/white] [underline blue]calendly.com/admin-promptedcre[/underline blue]\n"
        "[cyan]→[/cyan] [dim]Representation is free to you (landlord pays broker fees)[/dim]"
    )

    c.print(
        Panel(
            quickstart,
            border_style="dim",
            box=box.ROUNDED,
        )
    )

    c.print()
