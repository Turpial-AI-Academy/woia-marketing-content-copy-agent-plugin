# Content Copy consumer contract

Source: WOIA Real Estate docs/21 (Content Copy consumer extension), docs/22 (source authority), docs/24 (effect authority), docs/25 (engineering/evidence gates).

Eligible consumers: Marketing and Ads. Actions: draft and review only. This is a provider, not an orchestrator or authority service. Preserve objective/audience/brand/source and channel constraints. Ads variants may suggest alternatives but cannot publish, contact, schedule, configure targeting or spend. Skill draft outputs remain unapproved until the competent owner accepts them. A source reference identifies evidence, not acceptance authority.

The request guard accepts consumer, action, optional external_effect=false, and optional claims. Every claim needs a nonempty source_ref and accepted=true with certainty=KNOWN; otherwise fail closed rather than turn inference, unavailable or stale evidence into a claim. The guard validates supplied attestations; it does not establish source authority, legal applicability, current availability or competent acceptance. Resolve these upstream using organization policy and approved source authority. Empty claims means no factual claims are proposed. Existing free-form drafting and the constraint-check CLI are retained.

No DBMS, vendors, private policy, organization accounts or new hard dependencies are selected. No paid adapter is qualified here.
