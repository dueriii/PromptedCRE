from tenant_rep.agents.compare_agent import CompareAgent
from tenant_rep.agents.intake_agent import IntakeAgent
from tenant_rep.agents.search_agent import SearchAgent
from tenant_rep.models.schemas import PropertyRecord, Requirement


def sample_requirement() -> Requirement:
    return Requirement(
        company_name='Example Robotics',
        market='Houston',
        submarket_preferences=['Northwest'],
        size_sf={'min': 20000, 'max': 40000},
        use_description='Light assembly and prototype testing',
        lease_or_buy=['lease', 'buy'],
        budget={'lease_rate_max': 14.5, 'all_in_monthly_max': 45000},
        clear_height_min=24,
        office_percent_max=15,
        yard_required=True,
    )


def test_intake_and_filters_render():
    req = sample_requirement()
    assert 'Requirement Summary' in IntakeAgent().run(req).render()
    assert 'Search Filters' in SearchAgent().run(req).render()


def test_compare_ranks_property():
    req = sample_requirement()
    a = PropertyRecord(name='A', address='1 Test', availability_type=['lease'], lease_rate=13.5, clear_height=24, yard=True, office_percent=10, submarket='Northwest')
    b = PropertyRecord(name='B', address='2 Test', availability_type=['lease'], lease_rate=16.0, clear_height=20, yard=False, office_percent=20, submarket='Southwest')
    rendered = CompareAgent().run(req, [a, b]).render()
    assert 'A: total score' in rendered
    assert 'B: total score' in rendered
