# 在 WorkBuddy 中开始

采用主 Skill：`solo-to-team-workbuddy`。本包载荷为 `0.1.0-rc.5 / adapter.5`。

[下载 WorkBuddy 完整包](https://github.com/dabingfy-dot/solo-to-team-skills/releases/download/v0.2.0/Solo-to-Team-workbuddy-bundle1.zip) · [完整包原始入口](/generated/platforms/workbuddy/start)

## 1. 先核已有技能和作用范围

此前本机核到的是**用户级 Skill**，同一用户的其他任务可能发现它；单独建一个项目不构成技能隔离。先在技能列表核 `solo-to-team-workbuddy` 的实际版本。同版可用就复用，更新不同版前保留旧内容。

## 2. 首次采用：上传内层 ZIP

解压完整包，找到 `platform/solo-to-team-workbuddy.zip`。这份**内层 ZIP 保持压缩状态**，在 WorkBuddy 的“添加技能 → 上传技能”中选择它；不要上传整个完整包。

核名称、安全检查提示和实际安装／启用结果。有同名冲突时先停下来核版本，安全检查通过不等于已更新。

已有同名不同版的更新路径另见[原生采用说明](/generated/platforms/workbuddy/adopt)。其中“已安装技能卡 → 更多 → 编辑”只在本机 WorkBuddy 5.9.3 核过；不同界面按实际入口核清，不照猜，也不覆盖整个技能库。

## 3. 核实际读取，再做一单

提供 `TASK-MATERIALS.zip` 普通附件或解压目录，使用[开工文本](/generated/platforms/workbuddy/prompt)，请求调用 `solo-to-team-workbuddy`。核实际安装位置的 `SKILL.md`、本单适用的 `references/roles.zh.md` 与 `references/groups.zh.md`，以及所需基础 Skills。

包内团队 JSON 是建议数据，不会自动注册专家团。沿用已有适用团队；成员分别核材料，不把安装卡显示当成全员已加载。用[第一份小任务](/guide/first-task)收回可打开的成果。

[首次使用核对表](/generated/platforms/workbuddy/first-check) · [已验证范围](/guide/verification)
