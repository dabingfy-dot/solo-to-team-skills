# 在 DeepSeek Harness 中开始

采用主 Skill：`solo-to-team-deepseek`。本包载荷为 `0.1.0-rc.5 / adapter.5`，适用于 **DeepSeek Harness（DSH）**，不是 DS Bot。

[下载 DeepSeek 完整包](https://github.com/dabingfy-dot/solo-to-team-skills/releases/download/v0.2.0/Solo-to-Team-deepseek-bundle1.zip) · [完整包原始入口](/generated/platforms/deepseek/start)

## 1. 选定真实项目根

这条路径是**项目级采用**。已核 DSH 版本按会话工作目录发现项目；在 Git 仓库里，最近的 `.git` 祖先目录才是项目根，不能随意选更深的子目录。

先核项目根 `.dsh/skills/` 中有无同名技能。同版可用就复用；不同版更新前只备份这一技能目录，保留其他技能和原有 `solo-to-team`。

## 2. 放入正确的技能目录

解压完整包，再将 `platform/solo-to-team-deepseek-project.zip` 解到临时位置。找到其中的 `.dsh/skills/solo-to-team-deepseek/`，只把这个技能目录放到目标项目的 `.dsh/skills/` 下。

最终应能找到：

```text
项目根/.dsh/skills/solo-to-team-deepseek/SKILL.md
```

同目录保留 `references/`、`assets/` 和 `LICENSE`。Mac 访达中可按 Command＋Shift＋句点显示隐藏文件夹；不要连解压时额外套的一层目录一起放进去。本路线使用 `…-project.zip`，不是同目录另一个通用 ZIP。

## 3. 在目标项目调用

在 DSH 打开该项目，于 `/` 菜单选 `solo-to-team-deepseek`，或输入 `/solo-to-team-deepseek`。旧会话可能缓存菜单，以目标项目**新会话实际发现、读取的版本**为准。

提供 `TASK-MATERIALS.zip` 或解压后的允许读取目录，再使用[开工文本](/generated/platforms/deepseek/prompt)。子任务可能使用不同工作目录，每个实际成员分别核材料。先做[第一份小任务](/guide/first-task)；放入项目文件夹不会注册永久 16 席或原生群。

[完整采用与恢复步骤](/generated/platforms/deepseek/adopt) · [首次使用核对表](/generated/platforms/deepseek/first-check) · [已验证范围](/guide/verification)
