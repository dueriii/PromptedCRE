from __future__ import annotations


def currency(value: float | int | None) -> str:
    if value is None:
        return 'Not provided'
    return f"${value:,.2f}" if isinstance(value, float) and not float(value).is_integer() else f"${int(value):,}"


def pct(value: int | float | None) -> str:
    if value is None:
        return 'Not provided'
    return f"{value}%"


def yes_no(value: bool) -> str:
    return 'Yes' if value else 'No'


def sf_range(size_sf: dict[str, int]) -> str:
    if not size_sf:
        return 'Not provided'
    low = size_sf.get('min')
    high = size_sf.get('max')
    if low and high:
        return f"{low:,} - {high:,} SF"
    if low:
        return f"{low:,}+ SF"
    if high:
        return f"Up to {high:,} SF"
    return 'Not provided'
