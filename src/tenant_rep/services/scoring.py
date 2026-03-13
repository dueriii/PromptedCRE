from __future__ import annotations

from tenant_rep.models.schemas import PropertyRecord, Requirement


def _match(value: bool) -> int:
    return 1 if value else 0


def score_property(requirement: Requirement, prop: PropertyRecord) -> dict[str, int]:
    location = 0
    pricing = 0
    functionality = 0

    if requirement.submarket_preferences:
        location += 10 if prop.submarket in requirement.submarket_preferences else 4
    else:
        location += 7

    if requirement.budget.get('lease_rate_max') is not None and prop.lease_rate is not None:
        pricing += 10 if prop.lease_rate <= requirement.budget['lease_rate_max'] else 4
    else:
        pricing += 7

    if requirement.clear_height_min is not None and prop.clear_height is not None:
        functionality += 10 if prop.clear_height >= requirement.clear_height_min else 4
    else:
        functionality += 7

    if requirement.yard_required:
        functionality += 10 if prop.yard else 2
    else:
        functionality += 7

    if requirement.office_percent_max is not None and prop.office_percent is not None:
        functionality += 8 if prop.office_percent <= requirement.office_percent_max else 3
    else:
        functionality += 5

    if requirement.lease_or_buy:
        availability_match = any(x in prop.availability_type for x in requirement.lease_or_buy)
        pricing += 8 if availability_match else 2

    return {
        'location': location,
        'pricing': pricing,
        'functionality': functionality,
        'total': location + pricing + functionality,
    }
