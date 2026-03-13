from __future__ import annotations

from tenant_rep.agents.base import AgentOutput
from tenant_rep.models.schemas import PropertyRecord, Requirement
from tenant_rep.services.scoring import score_property


class CompareAgent:
    name = 'compare_agent'

    def run(self, requirement: Requirement | None, properties: list[PropertyRecord]) -> AgentOutput:
        scored = []
        executive = []
        internal = ['The comparison is meant to frame tradeoffs, not force a single answer.']
        for prop in properties:
            scores = score_property(requirement, prop) if requirement else {'location': 0, 'pricing': 0, 'functionality': 0, 'total': 0}
            pros = []
            cons = []
            if prop.yard:
                pros.append('Has yard / outside storage')
            else:
                cons.append('No yard or yard not confirmed')
            if prop.clear_height and requirement and requirement.clear_height_min and prop.clear_height >= requirement.clear_height_min:
                pros.append('Meets clear height target')
            elif requirement and requirement.clear_height_min:
                cons.append('Below target clear height')
            if prop.lease_rate and requirement and requirement.budget.get('lease_rate_max') and prop.lease_rate <= requirement.budget['lease_rate_max']:
                pros.append('Within target asking rent')
            elif requirement and requirement.budget.get('lease_rate_max'):
                cons.append('Above target asking rent')
            executive.append(f"{prop.name}: total score {scores['total']} | Pros: {', '.join(pros) or 'None noted'} | Cons: {', '.join(cons) or 'None noted'}.")
            scored.append({'property': prop.name, 'scores': scores, 'pros': pros, 'cons': cons})
        if scored:
            ranked = sorted(scored, key=lambda x: x['scores']['total'], reverse=True)
            internal.append('Suggested order by current score: ' + ' > '.join(item['property'] for item in ranked))
        return AgentOutput(title='Property Comparison', executive=executive, internal=internal, data={'results': scored})
