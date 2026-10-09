# woia-marketing-content-copy

WOIA Marketing v0.5.7 provider for `marketing.content-copy`.

- Primary skill: `$marketing-content-copy`
- Authoring profile: thin
- Origin: WOIA-native

Capability-owned tools/templates live in this plugin. Generic certification/release tooling lives in `woia-ecosystem`.

Marketing and Ads consume draft/review semantics only. Ad-specific copy variants do not authorize publication, contact, targeting or spend. Source-grounded claims remain subject to competent acceptance. No new hard dependency.

Validation: central Ecosystem `mise run plugin:certify-thin --repo <path>`.

## Maintenance

Edit only this canonical repository. Keep `plugin.json`, `package.json` and `dev.woia/manifest.json` versions aligned. From the canonical WOIA Ecosystem repository, run `mise run plugin:certify-thin --repo <absolute-plugin-repository>`, then use its release preparation/publication tasks. Install and update consumers from immutable published artifacts; keep Project personalization in overlays.
