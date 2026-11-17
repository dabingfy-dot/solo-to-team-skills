# Solo to Team · 一人成队

**One person leads an AI team: tasks have owners, outputs get reviewed, and handoffs leave evidence.**

Solo to Team is a human-led multi-agent system (MAS) toolkit for existing AI platforms. You set the goal and choose real executors. A lead coordinates, a producer makes the artifact, a separate reviewer opens the same version, and the result returns to the original conversation. Role cards, a team builder, platform Skills and continuation tools support that workflow.

[Documentation (Chinese)](https://dabingfy-dot.github.io/solo-to-team-skills/) · [中文](README.md) · [Illustrated project guide, 16 pages, Chinese](bundles/bundle1/pdf/一人成队_MAS工程与组织设计_v3_完整包与配置.pdf) · [Contributing and feedback](CONTRIBUTING.md)

[![Watch the project overview](docs/media/solo-to-team-cover.png)](https://github.com/dabingfy-dot/solo-to-team-skills/releases/tag/v0.2.0#video)

[Watch the full overview · Chinese · 1080p · 9.38 MB](https://github.com/dabingfy-dot/solo-to-team-skills/releases/tag/v0.2.0#video). It illustrates the method; it is not proof that every platform passed business testing.

## Choose your platform

Every bundle contains **one platform-specific collaboration Skill plus all four foundation Skills**, role/group guidance, templates, examples, an offline builder, continuation tools and a configuration checklist. Choose one platform; no separate foundation-Skill download is needed.

| Platform | Complete ZIP | Start here |
|---|---|---|
| Grok Bot | [Download · 3.40 MB](bundles/bundle1/packages/Solo-to-Team-grok-bundle1.zip?raw=true) | [Guide](bundles/bundle1/packages/Solo-to-Team-grok-bundle1/START-HERE.md) |
| WorkBuddy | [Download · 3.34 MB](bundles/bundle1/packages/Solo-to-Team-workbuddy-bundle1.zip?raw=true) | [Guide](bundles/bundle1/packages/Solo-to-Team-workbuddy-bundle1/START-HERE.md) |
| DeepSeek Harness | [Download · 3.39 MB](bundles/bundle1/packages/Solo-to-Team-deepseek-bundle1.zip?raw=true) | [Guide](bundles/bundle1/packages/Solo-to-Team-deepseek-bundle1/START-HERE.md) |
| Open Master Bot | [Download · 3.32 MB](bundles/bundle1/packages/Solo-to-Team-openmaus-bundle1.zip?raw=true) | [Guide](bundles/bundle1/packages/Solo-to-Team-openmaus-bundle1/START-HERE.md) |

Open Master Bot retains the compatibility identifiers `openmaus` and `solo-to-team-openmaus`; native invocation names are unchanged. Adoption guides and the PDF are currently in Chinese.

1. Extract your complete bundle and open `START-HERE.md`.
2. Adopt the main Skill using that platform's guide. Supply `TASK-MATERIALS.zip` as ordinary task material, and read the relevant foundation Skills and configuration for the task. **Neither the outer bundle nor the task-material ZIP is a single-Skill upload archive.**
3. Start with one bounded task. Check real executors, matching artifact versions, independent review and delivery to the original conversation. Reuse a verified identical installation; update an existing object only within authorization, retaining a backup.

Included Skills are not automatically registered as five native objects or loaded for every member. Your environment supplies platform accounts, models and permissions.

## How the team works

The adjustable template has 16 roles, six suggested groups and 26 suggested memberships. Activate roles for the task, not all at once. When choosing the production-and-review flow:

**User sets the goal → lead assigns an executor → executor produces → independent reviewer checks → targeted revision or delivery to the original conversation.**

- The lead coordinates and receives work, without rewriting the review verdict. Revisions return to the original executor.
- Oversight checks commitments and handoffs; it does not replace review or add an approval gate.
- Technical changes receive a capable reviewer who did not perform them. Specialist delegation and private direct-report routes retain their role-card boundaries.
- Group membership grants no extra authority. Role names alone prove neither independent execution contexts nor data isolation.

## The existing MAS remains

These four bundles are additions. The original four core Skills, full MAS, team builder, work-from-draft tools, team updates and historical task evidence remain available.

- [Full MAS and original tools](mas/README.en.md) · [Complete adapter.5 package and maintainer source](mas/releases/rc15-skills-rc5-grok-design2-doc1-adapter5/README.en.md)
- [Standalone adoption guide for the original four Skills](SKILLS.en.md) · [Free offline review exercise](mas/downloads/quick-review.zip?raw=true)
- [Configuration checklist](bundles/bundle1/配置使用清单.md) · [Bundle packaging source](bundles/bundle1/Solo-to-Team-bundle1-packaging-source.zip?raw=true) · [Rebuild guide](bundles/bundle1/source/README.md)

## Versions and evidence

Release **v0.2.0** uses packaging **bundle.1**, with platform payloads from **adapter.5**: rc5 for WorkBuddy/DeepSeek, rc5-om4 for Open Master Bot, and design2-doc1 for Grok. Foundation Skills retain core-rules-v2.

Bundle files, configuration, references, hashes and clean rebuilds were checked. Those checks do not establish complete native acceptance of the new five-Skill combination on all four platforms. The returned saved Grok body and manifest match byte for byte with the old header preserved. Named invocation and five readable references remain self-reported, without independent raw tool traces. Earlier design2 bounded task and manual two-Bot review evidence remains historical; the other platforms retain their own bounded evidence.

**Not established:** complete native adoption of bundle.1 across all four platforms, long-term operation of all 16 roles, automatic cross-platform orchestration, automatic same-Bot fresh-chat continuation, or general first-time installation success. No universal one-click team creation is promised. The production team was not used to test this bundle.

[Release notes and known limits](bundles/bundle1/RELEASE-NOTES.md) · [Current Grok evidence](mas/evidence/grok-doc1-readback.md) · [Checksums](bundles/bundle1/SHA256SUMS.txt)

Project-authored materials use [MIT within the stated scope and exclusions](NOTICE); retain the [license](LICENSE) and attribution. Private display avatars, personal material and platform software are excluded. See [CONTRIBUTING.md](CONTRIBUTING.md) for feedback and improvements.

See the [release notes](RELEASE-NOTES.md) for how this public integration relates to frozen candidate labels.
