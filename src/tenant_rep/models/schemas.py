from __future__ import annotations

from dataclasses import asdict, dataclass, field
from typing import Any


@dataclass
class Requirement:
    company_name: str
    market: str
    submarket_preferences: list[str] = field(default_factory=list)
    size_sf: dict[str, int] = field(default_factory=dict)
    use_description: str = ""
    lease_or_buy: list[str] = field(default_factory=list)
    budget: dict[str, float] = field(default_factory=dict)
    timing: str = ""
    power: str = ""
    loading: dict[str, Any] = field(default_factory=dict)
    clear_height_min: int | None = None
    office_percent_max: int | None = None
    yard_required: bool = False
    parking_required: bool = False
    special_requirements: list[str] = field(default_factory=list)
    buildout_requirements: list[str] = field(default_factory=list)
    location_priorities: list[str] = field(default_factory=list)
    pricing_priorities: list[str] = field(default_factory=list)
    functionality_priorities: list[str] = field(default_factory=list)
    notes: str = ""

    @classmethod
    def from_dict(cls, raw: dict[str, Any]) -> "Requirement":
        return cls(**raw)

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)


@dataclass
class PropertyRecord:
    name: str
    address: str
    availability_type: list[str] = field(default_factory=list)
    size_sf: int | None = None
    site_acres: float | None = None
    lease_rate: float | None = None
    opex: float | None = None
    sale_price: float | None = None
    clear_height: int | None = None
    loading: dict[str, Any] = field(default_factory=dict)
    power: str = ""
    office_percent: int | None = None
    yard: bool = False
    parking_notes: str = ""
    construction_notes: str = ""
    broker_comments: str = ""
    submarket: str = ""
    landlord_work_possible: str = ""
    notes: str = ""

    @classmethod
    def from_dict(cls, raw: dict[str, Any]) -> "PropertyRecord":
        return cls(**raw)

    def to_dict(self) -> dict[str, Any]:
        return asdict(self)
