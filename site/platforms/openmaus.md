# 在 Open Master Bot 中开始

采用主 Skill：`solo-to-team-openmaus`。本包载荷为 `0.1.0-rc.5-om.4 / adapter.5`。公开名称是 **Open Master Bot**；`openmaus` 及历史 OpenMausBot 名称保留在原生文件和证据里，指向同一平台路线。

[下载 Open Master Bot 完整包](https://github.com/dabingfy-dot/solo-to-team-skills/releases/download/v0.2.0/Solo-to-Team-openmaus-bundle1.zip) · [完整包原始入口](/generated/platforms/openmaus/start)

## 1. 准备目标 Bot 可读的材料

先核目标 Bot 已有技能与版本。同版可用就复用；更新前保留可恢复的旧正文与对象信息。采用一个 Bot 的 Skill 不代表自动装给所有成员，也不证明记忆、连接器或项目已经隔离。

解压完整包，再解压：

```text
platform/solo-to-team-openmaus-0.1.0-rc.5-om.4-candidate.zip
```

得到实际的 `solo-to-team-openmaus/` 目录，并确认目标 Bot 能读到它。只报 ZIP 名称或本机路径不等于对方取得文件；接收仓库／网址的导入框也不是本路线的本地 ZIP 入口。

## 2. 由目标 Bot 通过 /learn 采用

按平台目录里的 `给Bot读的安装指令.txt`，让目标 Bot 使用原生 `/learn`，实际读取：

- `SKILL.md`
- `references/roles-part-1.md`
- `references/roles-part-2.md`
- `references/groups.md`

核原生返回状态：`pending` 不能算已经生效。保存后读回的是**原生保存的四份正文**，不能拿解压来源文件代替，然后调用 `/solo-to-team-openmaus`。完整步骤见[原生采用说明](/generated/platforms/openmaus/adopt)。

## 3. 让协作成果回到原对话

提供 `TASK-MATERIALS.zip` 普通任务资料或解压目录，使用[开工文本](/generated/platforms/openmaus/prompt)。跨席制作文件并由首席交回附件时，需要合适的项目对话：优先复用已有项目；确需新建时按允许范围使用“在工作文件夹中新建对话…”选真实项目目录，各成员分别核目录和审批范围。纯文字咨询不必为此新建项目。

制作、审核成员各自取得适用角色卡与材料，最终成果要作为实际附件交回原对话并能下载。先完成[第一份小任务](/guide/first-task)，不以文件路径代替收件。

[首次使用核对表](/generated/platforms/openmaus/first-check) · [已验证范围](/guide/verification)
