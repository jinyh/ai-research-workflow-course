# 资源索引

本页用于组织课程资源。工具会快速变化，授课时应按当学期情况更新具体工具版本；课程要求固定在科研动作和可验证产出上。

## 课程内已有参考

当前目录的 [../ref/AutoResearch.md](../ref/AutoResearch.md) 已收集若干 AutoResearch、AI Scientist 和 Agentic AI 课程链接，可作为备课入口。

## 可写入申请表的课程资源

中文表述：

> 课程采用自编讲义、课堂案例和项目模板。参考资源包括 Karpathy AutoResearch、Sakana AI Scientist / AI Scientist-v2、Berkeley RDI LLM Agents / Agentic AI 课程、University of Nebraska-Lincoln Agentic AI for Workflow Automation、MIT AI Agents and Agentic Web、Johns Hopkins Agentic AI Certificate、eCornell Agentic AI Architecture、Coursera AI for Scientific Research，以及文献检索、LLM 辅助阅读、Research Agent 与 coding agent、MCP、评估工具、实验追踪、配置管理、agent workflow、科研伦理和负责任 AI 相关资料。课程每轮开课前根据最新研究进展更新论文和技术报告。

English version:

> The course uses instructor-prepared lecture notes, classroom cases, and project templates. Reference resources include Karpathy AutoResearch, Sakana AI Scientist / AI Scientist-v2, Berkeley RDI LLM Agents / Agentic AI courses, University of Nebraska-Lincoln Agentic AI for Workflow Automation, MIT AI Agents and Agentic Web, Johns Hopkins Agentic AI Certificate, eCornell Agentic AI Architecture, Coursera AI for Scientific Research, and resources on literature search, LLM-assisted reading, Research Agent and coding agent tools, MCP, evaluation tools, experiment tracking, configuration management, agent workflow tools, research ethics, and responsible AI. Research papers and technical reports will be updated before each offering.

## 研究方法论参考

课程引入的结构化研究方法论框架来自以下参考：

- **Harness Research 项目**：本项目提供了八阶段研究链路、研究工件协议、评审门、证据三角验证和追踪规则的完整方法论体系。课程从中提取核心思想并进行通用化适配，其中证据三角验证在本课程中降级为证据分级与多源核验。详见本课程的 `reference-analysis.md` 第 4 节。
- **BMAD Method**（Build More Architect Dreams）：结构化软件开发方法论，Harness Research 借鉴了其阶段化工作流、工件标准化和质量门机制，并将其适配为学术研究工作流。BMAD 原项目：<https://github.com/bmad-code-org/BMAD-METHOD>

课程适配说明：

- 八阶段研究链路保留但通用化（去掉 thin-harness-thick-skill 等领域特有概念）
- 证据三角验证降级为证据分级与多源核验，不强制固定证据组合
- 工件 ID 体系简化为中文名称工件
- Gate 1-7 简化为课程四门（问题门、判断门、验证门、论证门）
- 三路径产出（SV/BP/ID）和空白驱动工作流变体不引入（过于复杂）

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

| 项目 | 关注度 | 核心特色 | 课程借鉴点 |
| --- | --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 授课前更新 | 三文件系统（prepare.py + train.py + program.md）、固定评估预算、单一指标、Git 回滚决策 | 第 12 周"agentic loop"标准案例；方法论提炼：固定预算 + 单一指标 + 二元决策 |
| [sakanaai/ai-scientist](https://github.com/sakanaai/ai-scientist) | 授课前更新 | 端到端自动科研（构思→文献→实验→论文→评审）、模板驱动、Semantic Scholar 集成 | 模板驱动教学设计；评审模拟环节；成本可控的教学场景 |
| [sakanaai/ai-scientist-v2](https://github.com/sakanaai/ai-scientist-v2) | 授课前更新 | 无模板、最佳优先树搜索（BFTS）、通用化跨 ML 领域、已有 AI 生成论文被 ICLR 2025 Workshop 接收 | 树搜索思维（研究不是线性的）；v1 vs v2 对比作为"模板驱动 vs 自由探索"教学案例 |
| [Orchestra-Research/AI-research-SKILLs](https://github.com/Orchestra-Research/AI-research-SKILLs) | 授课前更新 | 模块化技能库、双循环架构（内循环优化 + 外循环综合）、代理原生研究工件（ARA） | 技能分类体系；ARA 与课程工件状态追踪思路对齐；双循环架构写入方法论 |

### Awesome 系列索引

| 项目 | 关注度 | 核心特色 | 课程借鉴点 |
| --- | --- | --- | --- |
| [alvinreal/awesome-autoresearch](https://github.com/alvinreal/awesome-autoresearch) | 授课前更新 | 通用衍生项目、研究代理系统、评估基准（MLAgentBench、MLE-Bench、MLR-Bench） | 完整研究生命周期映射；评估基准库 |
| [WecoAI/awesome-autoresearch](https://github.com/WecoAI/awesome-autoresearch) | 授课前更新 | 每个用例含优化轨迹链接；跨领域验证案例 | 跨领域案例库；实验轨迹可视化教学 |
| [yibie/awesome-autoresearch](https://github.com/yibie/awesome-autoresearch) | 授课前更新 | 跨行业用例；明确收录标准 | 跨领域应用展示；收录标准可用于学生项目验收 |
| [handsome-rich/Awesome-Auto-Research-Tools](https://github.com/handsome-rich/Awesome-Auto-Research-Tools) | 授课前更新 | 按研究生命周期组织工具（文献搜索→论文阅读→实验管理→代码生成） | 工具分类体系；映射到实验前阶段 |
| [ResearAI/Awesome-AI-Scientist](https://github.com/ResearAI/Awesome-AI-Scientist) | 授课前更新 | 论文分类索引；研究自动化堆栈（知识构建→想法生成→实验→写作→评审） | 课程阅读材料来源；工具生态全景图 |

### 评估基准库

用于课程项目评估参考和学生自测：

| 基准 | 来源 | 内容 | 适用场景 |
| --- | --- | --- | --- |
| MLAgentBench | alvinreal/awesome-autoresearch | 13 个 ML 任务 | 评估 AI 代理的 ML 实验能力 |
| MLE-Bench | OpenAI | ML 工程基准 | 评估端到端 ML 工程能力 |
| MLR-Bench | alvinreal/awesome-autoresearch | 201 个开放式研究任务 | 评估开放式研究能力 |
| AgentBench | ICLR 2024 | 8 个环境 | 评估代理在多环境中的通用能力 |

### 推荐技术栈

课程不强制使用特定工具，但以下技术栈在国外同类课程中被广泛采用，可作为学生实践参考：

**代理框架**：
- LangChain / LangGraph：工作流编排和多代理协作
- AutoGen（Microsoft）：多代理对话和协作
- CrewAI：角色化多代理系统
- DSPy：结构化提示工程和优化

**实验追踪与 MLOps**：
- Weights & Biases：实验追踪、可视化
- MLflow：实验管理、模型注册
- TensorBoard：训练可视化

**文献与知识管理**：
- Semantic Scholar API / OpenAlex：文献搜索和引用网络
- Elicit / Consensus / SciSpace：AI 辅助文献分析

**评估与可观测性**：
- lm-eval-harness：LLM 评估
- LangSmith / Phoenix：代理可观测性

## 国外同类课程参考

以下课程可作为备课参考和课程定位对标：

| 课程 | 机构 | 特色 | 与本课程的关系 |
| --- | --- | --- | --- |
| CS294/194-196 LLM Agents | UC Berkeley | MOOC 形式、25,000+ 学习者、12 讲座覆盖推理/规划/代码/多代理/科学发现 | 理论深度参考；进阶路径设计 |
| Agentic AI Certificate | Johns Hopkins | 16 周在线证书、渐进式（Python→LLM→Agent→项目）、四大能力框架（感知-规划-学习-行动） | 渐进式设计参考；能力框架互补 |
| Agentic AI Architecture | eCornell | 模块化证书、非开发者友好、深度使用 Claude Code 和 LangGraph | 模块化设计参考；降低门槛策略 |
| MAS.664 AI Agents and Agentic Web | MIT | 项目驱动、六大主题（身份/信任/声誉/支付/评估/协调）、"Internet of Agents" | 前瞻性主题参考；项目制模式 |
| AGST 492/892 Agentic AI for Workflow Automation | UNL | 零门槛、跨学科、伦理贯穿、应用到学生自己的专业领域 | 伦理贯穿模式参考；跨学科设计 |

本课程与上述课程的差异化定位：国外课程多为技术/应用导向，强调 Agentic AI 的理论、架构、工作流和项目实践；本课程以研究方法论为骨架，训练研究者用 AI 支撑可审查、可追溯、负责任的科研链路，具备八阶段研究链路、四个研究门、证据充分性检查、工件状态追踪和科研伦理贯穿等独特设计。

## Research Agent 工具与能力栈

工具会快速变化，课程不把以下任一工具设为必修依赖。授课时可选择当学期可用、合规、可审计的工具做演示。

### 工具示例

- OpenAI Codex / Codex CLI：<https://openai.com/codex>，<https://github.com/openai/codex>，<https://help.openai.com/en/articles/11096431>
- Claude Code 与 Skills：<https://code.claude.com/docs/en/overview>，<https://code.claude.com/docs/en/skills>
- OpenCode 与 Skills：<https://opencode.ai/docs/>，<https://opencode.ai/docs/skills/>
- Model Context Protocol：<https://modelcontextprotocol.io/docs/learn/architecture>
- OpenAI Evals：<https://github.com/openai/evals>

### 能力栈

**任务表达层**：

- Prompt、任务拆分、rubric、输出格式和禁止事项。
- 要求学生记录关键 prompt，不接受无法复盘的“让 AI 帮我写一下”。

**上下文与知识层**：

- Context、RAG、Memory、证据地图、引用 grounding。
- Memory 优先落实为项目中的可审计工件，而不是依赖模型“记住”。

**工具与执行层**：

- Research Agent、coding agent、MCP、文件、代码、数据库、文献库和实验系统接入。
- 工具权限默认最小化；优先演示只读工具或受限执行环境。

**实验与优化层**：

- 实验队列、超参搜索、prompt 优化、自动结果汇总和自动失败分类。
- 自动优化必须有固定指标、预算上限、日志、失败记录和人工审核点。

**评估与审计层**：

- Evals、人工复核、运行日志、版本记录、traceability 和误导案例。
- 对 agent 输出的判断应绑定证据、实验 ID 或人工 review 记录。

**伦理与安全层**：

- 数据治理、版权许可、隐私、prompt injection、工具误调用、双重用途和 AI 使用披露。
- 不允许 agent 自行扩大数据访问范围、修改评价协议或只保留成功结果。

## 推荐资源类别

### 文献检索与管理

用途：

- 关键词扩展
- 论文发现
- 引文追踪
- 文献分组
- 阅读记录管理

课堂要求：

- 不能只依赖 AI 总结。
- 所有关键观点必须回到原文核验。
- 相关工作矩阵必须记录任务、方法、设置、结论和局限。

### AI 辅助阅读与综述

用途：

- 提取论文结构
- 对比方法差异
- 生成阅读问题
- 检查综述逻辑缺口

风险：

- 模型可能编造论文贡献或引用。
- 模型可能忽略实验设置差异。
- 模型倾向于把弱相关工作写成强相关。

课堂要求：

- 论文卡片必须标注页码、章节或表格来源。
- 对模型总结至少抽查关键结论。

### 代码生成与调试

用途：

- 快速生成 baseline 脚手架
- 改写数据处理脚本
- 解释错误日志
- 增加测试和断言
- 使用 coding agent 处理受限代码任务

风险：

- 代码可能隐式改变实验设定。
- 修 bug 可能引入数据泄漏。
- 自动优化可能让 baseline 不公平。

课堂要求：

- AI 生成代码必须经过人工 review。
- 关键实验逻辑要有最小测试或 sanity check。
- 调试记录中说明错误根因，而不只记录“已修复”。
- 记录 agent 可访问的文件、命令、网络和数据权限。
- 不允许 agent 擅自修改数据划分、评价指标或 baseline 公平性设定。

### 实验追踪与自动化

用途：

- 配置管理
- 参数扫描
- 多实验队列
- 结果聚合
- 可视化对比

建议能力：

- 每个实验有唯一 ID。
- 每个结果能追溯到配置、代码版本、数据和运行日志。
- 失败实验不删除，保留原因分类。

### Agentic Research / AutoResearch

用途：

- 自动提出下一步实验
- 自动执行受限实验队列
- 自动总结实验结果
- 自动生成错误定位建议

课程边界：

- agent 只能建议或执行受限任务。
- 研究假设、实验公平性和最终结论必须人工确认。
- agent 运行日志必须作为提交物的一部分。
- 使用 MCP 或外部工具时，必须说明数据源、工具权限、可写范围和人工确认点。
- 自动优化只允许在固定评价指标、预算上限和可复现实验配置下执行。
- Research Agent 输出的结论必须通过 evidence map、experiment ID 或 review record 追溯。

### 科研伦理与负责任 AI

用途：

- 判断数据、模型、代码和论文材料是否可合法合规使用
- 识别隐私、知情同意、版权许可、署名贡献和潜在误用风险
- 形成 AI 使用披露、人工核验和责任边界说明
- 支持项目是否适合作为课程题目的前置判断

课堂要求：

- 每个项目必须提交科研伦理与合规说明。
- 涉及个人隐私、敏感数据、人类受试者或高风险用途的项目，必须限定为公开、脱敏、低风险材料；无法降低风险的题目不适合作为课程项目。
- AI 生成文本、代码、实验建议和审稿意见都必须披露用途与人工核验方式。

## 备课清单

授课前建议准备：

- 一个小型、可在课堂演示的 ML 任务
- 一个带有明显局限的 baseline
- 一组可快速运行的实验配置
- 一个 AI 错误总结或错误代码示例
- 一个正确但不充分的实验结论示例
- 一个含有编造引用或错误归因的负面案例
- 一个数据隐私、版权许可或 AI 使用披露不充分的伦理案例

## 推荐课堂案例

适合选择满足以下条件的案例：

- 数据公开、规模小、运行成本低
- baseline 简单，学生容易复现
- 结果存在可分析错误，而不是单纯追求高分
- 能设计消融或对照
- 适合展示 AI 辅助但不能完全自动化的科研判断

可选案例类型：

- 文本分类或信息抽取小任务
- 小规模检索增强生成评估
- 表格数据分类或回归
- 轻量图像分类
- LLM 输出评价或提示词鲁棒性实验
