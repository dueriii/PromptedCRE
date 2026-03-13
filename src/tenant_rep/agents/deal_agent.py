from __future__ import annotations

from tenant_rep.agents.base import AgentOutput
from tenant_rep.models.schemas import PropertyRecord, Requirement
from tenant_rep.utils.formatting import currency


class DealAgent:
    name = 'deal_agent'

    def run(self, requirement: Requirement | None, prop: PropertyRecord) -> AgentOutput:
        executive = [
            'Lead with economics and functionality together, not economics in isolation.',
            'Frame TI, free rent, landlord work, delivery timing, and use flexibility as part of the same business case.',
            f"Current headline economics: lease {currency(prop.lease_rate)} + OPEX {currency(prop.opex)}; sale {currency(prop.sale_price)}.",
        ]
        internal = [
            'If the space is imperfect, convert the gap into economics: TI, landlord work, rent abatement, or a lower rate.',
            'Separate must-haves from nice-to-haves before proposing LOI points.',
            'If both lease and sale are possible, preserve optionality until the client narrows its preferred path.',
        ]
        if requirement:
            internal.append(f"Client objective: {', '.join(requirement.lease_or_buy) if requirement.lease_or_buy else 'flexible'} in {requirement.market}.")
        return AgentOutput(title=f'Deal Guidance for {prop.name}', executive=executive, internal=internal)
