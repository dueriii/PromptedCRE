from __future__ import annotations

from tenant_rep.agents.base import AgentOutput
from tenant_rep.models.schemas import PropertyRecord, Requirement


class QuestionsAgent:
    name = 'questions_agent'

    def run(self, requirement: Requirement | None, prop: PropertyRecord) -> AgentOutput:
        executive = [
            'Confirm the exact availability status and whether the property can be leased, purchased, or both.',
            'Ask what landlord work is possible and what TI allowance could be offered based on term.',
            'Confirm utilities, power service, loading count, parking ratio, and any outside storage restrictions.',
            'Ask about zoning, deed restrictions, use restrictions, and environmental issues relevant to the tenant use.',
        ]
        internal = [
            'Request prior tenant improvements, roof/HVAC/electrical ages, and any known deferred maintenance.',
            'Ask for a full estimate of operating expenses, not just the asking rent.',
            'Clarify expansion rights, contraction rights, and exclusivity if those matter to the requirement.',
        ]
        if requirement:
            internal.append(f"Tie questions back to use and buildout: {requirement.use_description or 'industrial use'}; buildout needs: {', '.join(requirement.buildout_requirements) if requirement.buildout_requirements else 'none listed'}.")
        return AgentOutput(title=f'Questions for {prop.name}', executive=executive, internal=internal)
