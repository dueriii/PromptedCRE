from __future__ import annotations

from tenant_rep.agents.base import AgentOutput
from tenant_rep.models.schemas import PropertyRecord, Requirement


class TourAgent:
    name = 'tour_agent'

    def run(self, requirement: Requirement | None, properties: list[PropertyRecord]) -> AgentOutput:
        executive = ['Tour each property with a consistent walk sequence: exterior/site, truck flow, warehouse, office, utilities, then landlord work items.']
        for prop in properties:
            executive.append(f"{prop.name}: verify loading, power, clear height, office ratio, parking, yard usability, and any buildout assumptions.")
        internal = [
            'Photograph the truck court, loading positions, office condition, electrical service, and any deferred maintenance.',
            'Confirm what is existing versus what the landlord would actually deliver.',
            'Push on timing, TI structure, landlord scope, and any use restrictions during the tour or immediately after.',
        ]
        if requirement:
            internal.append(f"Requirement-specific focus: {requirement.use_description or 'industrial use'}, plus buildout needs: {', '.join(requirement.buildout_requirements) if requirement.buildout_requirements else 'none listed'}.")
        return AgentOutput(title='Tour Plan', executive=executive, internal=internal)
