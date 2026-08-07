---
版本：v2.0.0
最后更新：2026-08-07
变更记录：
- v2.0.0 (2026-08-07): 重定位为面向学生的工具与资源索引；删除申报材料段（已在 application-form-draft.md）、方法论溯源段（已在 reference-analysis.md）、国外同类课程对标段（已在 reference-analysis.md）、Awesome 索引、推荐技术栈、推荐资源类别的课堂要求、备课清单与课堂案例（移至 lessons/备课规划.md）
- v1.0.0 (2026-07-29): 初版资源索引
---

# 资源索引

工具会快速变化，授课时应按当学期情况更新具体工具版本；课程要求固定在科研动作、可验证产出和个人 Agent Workflow 的评价上。OpenCode 从第 1 课起作为主要课堂工作平台，但课程不以安装、记忆或调用现成 Skills 为目标。

## 课程内已有参考

- 面向 16 次课的实际选读见 [逐课参考阅读清单](./reading-list.md)。该清单采用“正式书目 + 课堂案例”双层结构：经典书籍选章、同行评议论文、共识报告和正式规范构成主干；GitHub、厂商文章、协议文档、大学课程讲义、演讲稿和转载讲义只作版本化案例。每课控制在 3-4 项，通常只要求 1 项核心阅读。
- 英文原典配中文阅读范围、术语和问题。课程鼓励学生用 AI 快速建立阅读地图，但必须回到原文定位证据、审计偏差并人工定稿；AI 摘要和未核验引文不构成课程证据。

## 外部参考链接

- Karpathy AutoResearch: <https://github.com/karpathy/autoresearch>
- Sakana AI Scientist: <https://github.com/sakanaai/ai-scientist>
- Sakana AI Scientist-v2: <https://github.com/sakanaai/ai-scientist-v2>
- Berkeley RDI LLM Agents / Agentic AI: <https://rdi.berkeley.edu/llm-agents/f24>
- MIT AI Agents and Agentic Web: <https://aiforimpact.github.io/>
- AI for Science community: <https://ai4sciencecommunity.github.io/>
- Orchestra Research AI Research Skills: <https://github.com/Orchestra-Research/AI-research-SKILLs>

## GitHub 项目索引与借鉴点

工具和项目会快速变化，以下索引用于备课参考和学生自学。课程不把任何单一项目设为必修依赖。

### AutoResearch 核心项目

| 项目 | 核心特色 | 课程借鉴点 |
| --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 三文件系统（prepare.py + train.py + program.md）、固定评估预算、单一指标、Git 回滚决策 | 第 11 课 agentic loop 标准案例：固定预算 + 单一指标 + 二元决策 |
| [sakanaai/ai-scientist](https://github.com/sakanaai/ai-scientist) | 端到端自动科研（构思→文献→实验→论文→评审）、模板驱动 | 模板驱动教学设计；评审模拟环节 |
| [sakanaai/ai-scientist-v2](https://github.com/sakanaai/ai-scientist-v2) | 无模板、最佳优先树搜索（BFTS）、通用化跨 ML 领域 | 树搜索思维；v1 vs v2 对比作“模板驱动 vs 自由探索”案例 |
| [Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs) | 模块化技能库、双循环架构（内循环优化 + 外循环综合）、代理原生研究工件（ARA） | 技能分类体系；ARA 与课程工件状态追踪思路对齐 |

### 评估基准库

用于课程项目评估参考和学生自测：

| 基准 | 来源 | 内容 | 适用场景 |
| --- | --- | --- | --- |
| MLAgentBench | ICML 2024 | 13 个 ML 任务 | 评估 AI 代理的 ML 实验能力 |
| MLE-Bench | OpenAI | ML 工程基准 | 评估端到端 ML 工程能力 |
| MLR-Bench | 2024 | 201 个开放式研究任务 | 评估开放式研究能力 |
| AgentBench | ICLR 2024 | 8 个环境 | 评估代理在多环境中的通用能力 |

## Research Agent 工具与能力栈

工具会快速变化，课程不把以下任一工具设为必修依赖。授课时可选择当学期可用、合规、可审计的工具做演示。

### 工具示例

- OpenAI Codex / Codex CLI：<https://openai.com/codex>，<https://github.com/openai/codex>
- Claude Code 与 Skills：<https://code.claude.com/docs/en/overview>，<https://code.claude.com/docs/en/skills>
- OpenCode 与 Skills：<https://opencode.ai/docs/>，<https://opencode.ai/docs/skills/>
- Model Context Protocol：<https://modelcontextprotocol.io/docs/learn/architecture>
- OpenAI Evals：<https://github.com/openai/evals>

### 能力栈

Agent 能力按 [课程大纲](./syllabus.md) 的三主线组织：**可用性**（Prompt、Context、RAG、Memory、Skill、工具调用、MCP）、**可信性**（Grounding、引用核验、Evals、实验日志、版本记录、人工 review）、**可控性**（工具权限、沙箱、预算上限、自动优化边界、prompt injection 防护、伦理合规）。课程要求学生围绕自己的科研动作，设计、实现并评价一个可审计的 Agent Workflow，覆盖这三条主线；具体评分细则见 [考核方案](./assessment.md)。
