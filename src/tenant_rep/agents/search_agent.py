from __future__ import annotations

from tenant_rep.agents.base import AgentOutput
from tenant_rep.models.schemas import Requirement
from tenant_rep.utils.formatting import sf_range


class SearchAgent:
    name = 'search_agent'

    def run(self, requirement: Requirement) -> AgentOutput:
        filters = {
            'market': requirement.market,
            'submarkets': requirement.submarket_preferences,
            'size_sf': requirement.size_sf,
            'availability': requirement.lease_or_buy,
            'clear_height_min': requirement.clear_height_min,
            'yard_required': requirement.yard_required,
            'parking_required': requirement.parking_required,
        }
        executive = [
            f"Search target: {sf_range(requirement.size_sf)} in {requirement.market}.",
            f"Primary listing types to search: {', '.join(requirement.lease_or_buy) if requirement.lease_or_buy else 'lease and sale'}.",
            f"Start with submarkets: {', '.join(requirement.submarket_preferences) if requirement.submarket_preferences else 'all viable submarkets'}.",
            'Use a broad first-pass search, then tighten based on clear height, loading, yard, office percentage, and pricing.',
        ]
        internal = [
            'CoStar / LoopNet / Crexi filter order: market → submarket → size → lease/sale → clear height → loading → office % → yard / IOS → price.',
            f"Use the free-form use description to refine keyword search terms: {requirement.use_description or 'industrial'}.",
            'In browser-assisted mode, show the model live listing pages and ask it which filter should be widened or tightened next.',
            'Do not rely on headline rent alone; compare NNN / OPEX, TI needs, and landlord work together.',
        ]
        return AgentOutput(title='Search Filters', executive=executive, internal=internal, data=filters)
