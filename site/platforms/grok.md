# 在 Grok Bot 中开始

采用主 Skill：`solo-to-team-grok`。本包载荷为 `design2-doc1 / adapter.5`。

[下载 Grok 完整包](https://github.com/dabingfy-dot/solo-to-team-skills/releases/download/v0.2.0/Solo-to-Team-grok-bundle1.zip) · [完整包原始入口](/generated/platforms/grok/start)

## 1. 先核账号范围与已有版本

Grok 的技能库是**账号共享范围**，不是只属于某个 Bot；多建一个 Bot 不等于隔离。先确认目标账号和采用范围，不为试包改动现役团队。同名同版已核可用就复用；不同版更新前保留可恢复的旧正文和对象标识。

## 2. 给原生入口正确的单技能包

解压完整包，找到：

```text
platform/solo-to-team-grok/solo-to-team-grok_design-2-doc-1_仅上传.zip
```

首次采用时，在目标对话输入区点 `+` → `Attach files`，附上**这份内层 ZIP**。不要把外层完整包当作单技能 ZIP。

使用同目录 `可复制安装请求.txt`：先核材料、同名技能和预期保存内容，再按实际确认范围保存。正文采用包内 `body.md` 全文，不自行缩写或补头信息。更新旧技能时保留原对象，不能把更新当成重复新建；具体步骤见[原生采用说明](/generated/platforms/grok/adopt)。

保存后应核实际保存的正文与资料，不能只凭一句“已保存”。平台现有头部与正文核对分开记录；实际入口不同，就保留提示核清，不猜权限或工具字段。

## 3. 提供资料，调用并收件

将 `TASK-MATERIALS.zip` 作为普通任务附件，或提供解压后的可读目录；参考资料不因上传而自动成为私有技能附件库。在同一对话调用 `solo-to-team-grok`，使用[开工文本](/generated/platforms/grok/prompt)，按本单读取基础 Skills。

先完成[第一份小任务](/guide/first-task)，检查实际制作、独立审核和原入口交回。不要把旧版双 Bot 测试当成当前完整包已验。

[首次使用核对表](/generated/platforms/grok/first-check) · [已验证范围](/guide/verification)
