from __future__ import annotations

from tenant_rep.agents.base import AgentOutput
from tenant_rep.models.schemas import PropertyRecord
from tenant_rep.utils.formatting import currency, pct


class PropertyAgent:
    name = 'property_agent'

    def run(self, prop: PropertyRecord) -> AgentOutput:
        normalized = prop.to_dict()
        executive = [
            f"{prop.name} at {prop.address} is available for {', '.join(prop.availability_type) if prop.availability_type else 'unspecified availability'}.",
            f"Size: {f'{prop.size_sf:,} SF' if prop.size_sf else 'Not provided'}. Pricing: lease {currency(prop.lease_rate)} + OPEX {currency(prop.opex)}; sale {currency(prop.sale_price)}.",
            f"Functionality highlights: clear height {prop.clear_height or 'Not provided'} ft, power {prop.power or 'Not provided'}, yard {'yes' if prop.yard else 'no'}.",
        ]
        internal = [
            f"Office percentage: {pct(prop.office_percent)}. Loading: {prop.loading or 'Not provided'}.",
            f"Parking notes: {prop.parking_notes or 'None listed'}.",
            f"Landlord work possible: {prop.landlord_work_possible or 'Unknown'}.",
            f"Broker comments: {prop.broker_comments or 'None listed'}.",
        ]
        return AgentOutput(title='Normalized Property', executive=executive, internal=internal, data=normalized)
