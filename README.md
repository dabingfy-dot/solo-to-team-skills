# 一人成队 · Solo to Team

**一个人统筹 AI 团队：任务有人接，成果有人核，交接有据可查。**

一人成队是一套依托现有 AI 平台运行的多智能体协作系统（MAS）工具包。你决定目标，选择真实执行者；首席统筹，执行席制作，另一位审核者打开同版成果检查，修订后交回原入口。岗位卡、建队台、四平台专用 Skill 和接续工具帮助把这条链落实到文件与记录。

[在线文档](https://dabingfy-dot.github.io/solo-to-team-skills/) · [English](README.en.md) · [16页项目介绍与组织图](bundles/bundle1/pdf/一人成队_MAS工程与组织设计_v3_完整包与配置.pdf) · [参与和反馈](CONTRIBUTING.md)

[![观看项目演示](docs/media/solo-to-team-cover.png)](https://github.com/dabingfy-dot/solo-to-team-skills/releases/tag/v0.2.0#video)

[播放完整演示 · 中文 · 1080p · 9.38 MB](https://github.com/dabingfy-dot/solo-to-team-skills/releases/tag/v0.2.0#video)。演示说明产品方法，不代表四端业务全部通过。

## 选你正在使用的平台

每个平台包都包含 **1款平台协作 Skill＋4款完整基础 Skills**，以及岗位与群规、模板、示例、离线建队台、接续工具和配置清单。只需选一个平台；四款基础 Skills 不必另找下载。

| 平台 | 完整 ZIP | 先读说明 |
|---|---|---|
| Grok Bot | [下载 · 3.40 MB](bundles/bundle1/packages/Solo-to-Team-grok-bundle1.zip?raw=true) | [START-HERE](bundles/bundle1/packages/Solo-to-Team-grok-bundle1/START-HERE.md) |
| WorkBuddy | [下载 · 3.34 MB](bundles/bundle1/packages/Solo-to-Team-workbuddy-bundle1.zip?raw=true) | [START-HERE](bundles/bundle1/packages/Solo-to-Team-workbuddy-bundle1/START-HERE.md) |
| DeepSeek Harness | [下载 · 3.39 MB](bundles/bundle1/packages/Solo-to-Team-deepseek-bundle1.zip?raw=true) | [START-HERE](bundles/bundle1/packages/Solo-to-Team-deepseek-bundle1/START-HERE.md) |
| Open Master Bot | [下载 · 3.32 MB](bundles/bundle1/packages/Solo-to-Team-openmaus-bundle1.zip?raw=true) | [START-HERE](bundles/bundle1/packages/Solo-to-Team-openmaus-bundle1/START-HERE.md) |

Open Master Bot保留`openmaus`与`solo-to-team-openmaus`兼容标识，原生调用名不改。

1. 下载并解压对应完整包，打开`START-HERE.md`。
2. 按该平台说明采用主Skill；把`TASK-MATERIALS.zip`作为普通任务资料提供，按任务读取基础Skills与配置。**外层完整包和任务资料包都不是单技能上传包。**
3. 先做一件范围清楚的小任务，核实际执行者、同版成果、独立审核与原入口收件。已有同版可用对象直接复用；不同版按授权更新原对象，保留旧件。

基础Skills完整随包，不等于五个原生技能对象已自动注册或全员加载。平台账号、模型与权限仍由你的环境提供。

## 分工怎样接得上

16席、6个建议群和26条建议入群关系提供可调整的责任模板，按任务启用，不要求全员开工。选用制作与复核流程时：

**用户定目标 → 首席确定执行席 → 执行席制件 → 独立审核 → 局部退修或原入口交回。**

- 首席统筹与接回，不改写审核结论；退修回原执行席。
- 督查检查承诺与交接，不取代审核，也不新增审批或放行关口。
- 技术改后由有能力且非原执行者独核；专属委托与私密直接路线按岗位卡保留。
- 群成员身份不扩大权限；角色名称不等于独立执行上下文或资料隔离。

## 已有 MAS 继续保留

新增四包是加法：原四款核心Skills、完整MAS、建队台、带底稿开工、团队更新与历史任务证据继续保留。

- [完整MAS工作台与原工具](mas/README.md) · [adapter.5完整组合及维护源码](mas/releases/rc15-skills-rc5-grok-design2-doc1-adapter5/README.zh.md)
- [四款原核心Skills的独立采用指南](SKILLS.zh.md) · [免模型验件练习](mas/downloads/quick-review.zip?raw=true)
- [四平台配置使用清单](bundles/bundle1/配置使用清单.md) · [四包打包源码](bundles/bundle1/Solo-to-Team-bundle1-packaging-source.zip?raw=true) · [重建说明](bundles/bundle1/source/README.md)

## 版本与验证范围

本次发布编号 **v0.2.0**；四包包装为 **bundle.1**，平台载荷沿用 **adapter.5**：WorkBuddy/DeepSeek为rc5，Open Master Bot为rc5-om4，Grok为design2-doc1。四基础Skill沿用核心规则v2。

已核四包文件、配置、引用、指纹及空目录重建；这些不是新五技能组合在四端的完整原生验收。Grok当前正文保存读回与manifest已逐字核同、旧头部保留；按名调用与五份资料可读仍为对端自报，没有独立原始工具轨迹。旧design2有限任务及人工双Bot独审仅归旧版；其他平台保留各自有限证据。

**尚未证明**：bundle.1四端完整真实采用、全16席长期稳定运行、自动跨平台调度、同Bot新聊天自动接续或陌生用户普遍安装成功。不承诺统一一键建队，现役团队未用于本包试装。

[版本说明与已知限制](bundles/bundle1/RELEASE-NOTES.md) · [当前Grok证据](mas/evidence/grok-doc1-readback.md) · [校验值](bundles/bundle1/SHA256SUMS.txt)

项目自制材料按[MIT及例外](NOTICE)使用，保留[许可](LICENSE)与署名。展示头像、私人材料及平台软件不随本包授权。反馈与改进见[CONTRIBUTING.md](CONTRIBUTING.md)。

本次公开整合与冻结候选说明的关系见[发布说明](RELEASE-NOTES.md)。
