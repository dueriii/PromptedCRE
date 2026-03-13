from __future__ import annotations

from tenant_rep.agents.base import AgentOutput
from tenant_rep.models.schemas import Requirement
from tenant_rep.utils.formatting import sf_range, yes_no, pct, currency


class IntakeAgent:
    name = 'intake_agent'

    def run(self, requirement: Requirement) -> AgentOutput:
        executive = [
            f"{requirement.company_name} is searching in {requirement.market} with a target size of {sf_range(requirement.size_sf)}.",
            f"Primary use: {requirement.use_description or 'Industrial operations'}.",
            f"Lease / buy preference: {', '.join(requirement.lease_or_buy) if requirement.lease_or_buy else 'Open-ended'}.",
            f"Timing: {requirement.timing or 'Not provided'}.",
            f"Power / loading focus: {requirement.power or 'Not provided'}; loading needs: {requirement.loading or 'Not provided'}.",
        ]
        internal = [
            f"Submarket priorities: {', '.join(requirement.submarket_preferences) if requirement.submarket_preferences else 'None listed'}.",
            f"Budget ceiling: lease rate max {currency(requirement.budget.get('lease_rate_max'))}; all-in monthly max {currency(requirement.budget.get('all_in_monthly_max'))}.",
            f"Clear height minimum: {requirement.clear_height_min or 'Not provided'} ft.",
            f"Office max: {pct(requirement.office_percent_max)}. Yard required: {yes_no(requirement.yard_required)}. Parking required: {yes_no(requirement.parking_required)}.",
            f"Buildout needs: {', '.join(requirement.buildout_requirements) if requirement.buildout_requirements else 'None listed'}.",
            f"Special requirements: {', '.join(requirement.special_requirements) if requirement.special_requirements else 'None listed'}.",
        ]
        return AgentOutput(title='Requirement Summary', executive=executive, internal=internal, data=requirement.to_dict())
