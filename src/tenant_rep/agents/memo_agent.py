from __future__ import annotations

from tenant_rep.agents.base import AgentOutput
from tenant_rep.models.schemas import PropertyRecord, Requirement
from tenant_rep.services.scoring import score_property


class MemoAgent:
    name = 'memo_agent'

    def run(self, requirement: Requirement | None, properties: list[PropertyRecord]) -> AgentOutput:
        executive = []
        internal = ['This memo is structured to read like a client-facing survey with broker judgment underneath.']
        for prop in properties:
            scores = score_property(requirement, prop) if requirement else {'total': 0}
            executive.append(
                f"{prop.name} | {prop.address} | {'/'.join(prop.availability_type) if prop.availability_type else 'n/a'} | score {scores['total']}. "
                f"Comments: {prop.broker_comments or 'No broker comments entered.'}"
            )
            notes = []
            if prop.yard:
                notes.append('yard works')
            if prop.clear_height:
                notes.append(f'clear height {prop.clear_height} ft')
            if prop.lease_rate:
                notes.append(f'lease rate {prop.lease_rate}')
            internal.append(f"{prop.name}: {'; '.join(notes) if notes else 'Needs more diligence.'}")
        if requirement:
            internal.append(f"Requirement anchor: {requirement.company_name} needs {requirement.use_description or 'industrial space'} in {requirement.market}.")
        return AgentOutput(title='Client Memo', executive=executive, internal=internal)
