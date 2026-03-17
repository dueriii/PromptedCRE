from __future__ import annotations

import argparse
import sys
from pathlib import Path

from tenant_rep.agents.compare_agent import CompareAgent
from tenant_rep.agents.deal_agent import DealAgent
from tenant_rep.agents.intake_agent import IntakeAgent
from tenant_rep.agents.memo_agent import MemoAgent
from tenant_rep.agents.property_agent import PropertyAgent
from tenant_rep.agents.questions_agent import QuestionsAgent
from tenant_rep.agents.search_agent import SearchAgent
from tenant_rep.agents.tour_agent import TourAgent
from tenant_rep.models.schemas import PropertyRecord, Requirement
from tenant_rep.utils.banner import show_banner
from tenant_rep.utils.io import list_property_files, load_json, save_json, save_text


def _load_requirement(path: str | None) -> Requirement | None:
    if not path:
        return None
    return Requirement.from_dict(load_json(path))


def _load_properties(path: str) -> list[PropertyRecord]:
    files = list_property_files(path)
    return [PropertyRecord.from_dict(load_json(file)) for file in files]


def _emit(rendered: str, output: str | None) -> None:
    if output:
        save_text(output, rendered)
        print(f'Saved output to {Path(output).resolve()}')
    else:
        print(rendered)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(prog='promptedcre', description='Free AI agent for industrial real estate')
    sub = parser.add_subparsers(dest='command', required=True)

    p = sub.add_parser('intake')
    p.add_argument('--input', required=True)
    p.add_argument('--output')

    p = sub.add_parser('filters')
    p.add_argument('--input', required=True)
    p.add_argument('--output')

    p = sub.add_parser('add-property')
    p.add_argument('--input', required=True)
    p.add_argument('--save-json')
    p.add_argument('--output')

    p = sub.add_parser('survey')
    p.add_argument('--properties', required=True)
    p.add_argument('--requirement')
    p.add_argument('--output')

    p = sub.add_parser('compare')
    p.add_argument('--properties', required=True)
    p.add_argument('--requirement')
    p.add_argument('--output')

    p = sub.add_parser('tour')
    p.add_argument('--properties', required=True)
    p.add_argument('--requirement')
    p.add_argument('--output')

    p = sub.add_parser('questions')
    p.add_argument('--property', required=True)
    p.add_argument('--requirement')
    p.add_argument('--output')

    p = sub.add_parser('deal')
    p.add_argument('--property', required=True)
    p.add_argument('--requirement')
    p.add_argument('--output')

    p = sub.add_parser('memo')
    p.add_argument('--properties', required=True)
    p.add_argument('--requirement')
    p.add_argument('--output')

    return parser


def main() -> None:
    # Show the dashboard when run with no arguments
    if len(sys.argv) == 1:
        show_banner()
        return

    args = build_parser().parse_args()

    if args.command == 'intake':
        req = Requirement.from_dict(load_json(args.input))
        rendered = IntakeAgent().run(req).render()
        _emit(rendered, args.output)
        return

    if args.command == 'filters':
        req = Requirement.from_dict(load_json(args.input))
        rendered = SearchAgent().run(req).render()
        _emit(rendered, args.output)
        return

    if args.command == 'add-property':
        prop = PropertyRecord.from_dict(load_json(args.input))
        rendered = PropertyAgent().run(prop).render()
        if args.save_json:
            save_json(args.save_json, prop.to_dict())
        _emit(rendered, args.output)
        return

    if args.command == 'survey':
        props = _load_properties(args.properties)
        req = _load_requirement(args.requirement)
        rendered = MemoAgent().run(req, props).render()
        _emit(rendered, args.output)
        return

    if args.command == 'compare':
        props = _load_properties(args.properties)
        req = _load_requirement(args.requirement)
        rendered = CompareAgent().run(req, props).render()
        _emit(rendered, args.output)
        return

    if args.command == 'tour':
        props = _load_properties(args.properties)
        req = _load_requirement(args.requirement)
        rendered = TourAgent().run(req, props).render()
        _emit(rendered, args.output)
        return

    if args.command == 'questions':
        prop = PropertyRecord.from_dict(load_json(args.property))
        req = _load_requirement(args.requirement)
        rendered = QuestionsAgent().run(req, prop).render()
        _emit(rendered, args.output)
        return

    if args.command == 'deal':
        prop = PropertyRecord.from_dict(load_json(args.property))
        req = _load_requirement(args.requirement)
        rendered = DealAgent().run(req, prop).render()
        _emit(rendered, args.output)
        return

    if args.command == 'memo':
        props = _load_properties(args.properties)
        req = _load_requirement(args.requirement)
        rendered = MemoAgent().run(req, props).render()
        _emit(rendered, args.output)
        return


if __name__ == '__main__':
    main()
