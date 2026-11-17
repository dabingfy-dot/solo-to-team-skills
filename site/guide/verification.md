# 已验证什么，还有什么没验证

**发布的是有明确边界的 MAS 工具包。文件完整、原生保存、实际运行和完整业务验收，分别记账。** 文档站整理阅读入口，不新增平台测试成绩。

## 先分清版本

| 层次 | 本次公开文件采用的版本 | 代表什么 |
| --- | --- | --- |
| GitHub 发布 | `v0.2.0` | 当前这组公开下载入口 |
| 四平台完整包 | `bundle.1` | 主 Skill、四基础 Skills 和资料的完整包装 |
| 平台载荷集合 | `adapter.5` | 保留各平台自己的原生载荷版本 |
| 基础规则 | 核心规则 v2 | 包内四基础 Skills 的规则基线 |
| Grok Bot | `design2-doc1` | 本平台采用正文及参考版本 |
| WorkBuddy / DeepSeek Harness | `0.1.0-rc.5` | 两个平台分别保存的 Skill 版本 |
| Open Master Bot | `0.1.0-rc.5-om.4` | 原生标识仍为 `openmaus` |

冻结的包内资料可能写着“候选”或“未正式发布”。这些字样保留当时的记录，不覆盖当前 Release 的发布状态；其中的验证范围仍须按原版本理解。

## 有证据支持的范围

| 层次或平台 | 已保留的证据 | 不能据此推定 |
| --- | --- | --- |
| `bundle.1` 完整包 | 文件完整性、路径、配置、指纹及空目录重建检查 | 新五技能组合已经在四个平台完整跑通 |
| Grok Bot 当前载荷 | 已保存正文、清单的字节核对；命名调用和五份参考可读为对端自述 | 有独立原始工具记录证明全部加载；旧 `design2` 的有限任务和手动双 Bot 审核也不能代证当前包全流程 |
| WorkBuddy 当前载荷 | 本机 5.9.3 原生保存及一份规则样本，保留首稿和局部纠正稿 | 全员自动加载、跨机安装成功或全 16 席业务通过 |
| DeepSeek Harness 当前载荷 | 项目级新版本及一份有限规则样本 | 账号全局安装、多席业务或所有工作目录都能取得材料 |
| Open Master Bot 当前载荷 | 四份原生保存正文核对；新对话读取通则和运营群条文 | 六群全部运行、全 16 席完整业务或通用撤回能力 |

原有 rc3、rc4 和其他早期记录保留原版本范围。没有为了新包装把已完成的旧测试重新命名为新测试。

## 仍未证明的事情

- `bundle.1` 的五技能组合在四个平台完成整条真实采用与业务流程。
- 全 16 席长期稳定运行、自动跨平台编排。
- 同一个 Bot 换全新聊天后自动接续，以及普遍适用的新用户安装成功率。
- 各平台新版统一可用的退出、恢复或卸载路径。

## 你自己的验收怎样才算数？

实际读到选定版本 → 真实成员制作 → 独立上下文审核同版 → 该改的改好 → 原入口收到并打开成果。用[第一份小任务](/guide/first-task)走一遍，缺哪个环节就记录哪个环节，不用“安装完成”代替。

逐平台原始采用说明：[Grok Bot](/generated/platforms/grok/adopt) · [WorkBuddy](/generated/platforms/workbuddy/adopt) · [DeepSeek Harness](/generated/platforms/deepseek/adopt) · [Open Master Bot](/generated/platforms/openmaus/adopt)

公开版本依据：[bundle.1 发布说明](https://github.com/dabingfy-dot/solo-to-team-skills/blob/main/bundles/bundle1/RELEASE-NOTES.md) · [现有发布下载](https://github.com/dabingfy-dot/solo-to-team-skills/releases/tag/v0.2.0)
