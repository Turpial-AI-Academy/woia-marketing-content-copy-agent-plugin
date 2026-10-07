---
name: marketing-content-copy
description: Create, adapt, or review marketing content and copy against approved objective, audience, brand/project overlays, factual-claim evidence, and channel constraints.
license: MIT
metadata:
  author: Turpial AI Academy
  version: "0.5.1"
---

# Marketing Content & Copy

Use for channel-ready copy/content drafting, adaptation, review, or bounded revision.

## Inputs

Use approved objective/strategy, audience context, source facts, brand/project overlays, channel/format constraints and existing healthy copy when revising.

## Workflow

1. Preserve all factual claims from supplied evidence; never invent proof, prices, availability, results or guarantees.
2. Apply Project overlays for brand voice/approved phrases without editing this base plugin.
3. Draft the smallest deliverable set needed by the Task.
4. Map each deliverable to channel, audience, objective and CTA.
5. Validate deterministic constraints with the bundled script when limits/forbidden terms are provided.
6. Mark variants as alternatives rather than silently replacing approved copy.
7. Return content plus constraint/evidence notes for independent Audit.

## Deterministic constraint tool

Use `scripts/check-copy-constraints.mjs` for stable mechanical checks:

`node scripts/check-copy-constraints.mjs --file <path> [--max-chars N] [--max-words N] [--forbid term]`

Multiple `--forbid` flags are allowed. The tool outputs JSON and exits non-zero on violations.

## Effects

Drafting itself has no external effect. Publication/communication belongs to the Channel Execution capability and its authority boundary.

## Marketing and Ads consumers

Marketing and Ads may use this same draft/review capability. Ads-specific variants remain alternatives subject to independent review; they do not transfer Marketing outcome ownership or authorize paid effects. Use the [consumer contract](references/consumer-contract.md) and `scripts/check-copy-request.mjs` for deterministic eligibility checks. The existing constraint CLI remains unchanged.

No direct person messaging, scheduling, channel publication, campaign configuration or spend is executed here. Marketing owns authorized non-person public execution; Ads owns paid effects; Communications/Customer Service owns external person contact. UNKNOWN facts must remain UNKNOWN and never become copy claims.
