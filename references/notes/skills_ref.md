> **核验状态（2026-07-29）**：本文件为二手整理的 Skills/项目笔记，B/C 级。含 Star 数、skill 数量、平台兼容性等易变信息，授课前回上游仓库核验；不作为 Skills 安装教程或项目质量背书。

**针对计算机系研究生的 “AI for Research” 课程，重点推荐可在 OpenCode、Claude Code 和 Codex（三者均为主流终端/IDE AI coding agent）中复用的 agent skills（以 `SKILL.md` 模块化指令为主）。** 这些 skills 强调方法论（如何判断 gap 是否值得做、文献综合验证、实验设计与可复现、claim-evidence 对齐、peer review 模拟、防幻觉与 attribution），而非单纯工具操作。OpenCode（开源、模型无关）、Claude Code（Anthropic）和 Codex（OpenAI）对 `SKILL.md` 约定有较高兼容性，许多 skills 可跨平台加载（通过对应 skills 目录、symlink 或 plugin）。

### 核心推荐 Skills（跨平台优先 + 方法论强）
以下优先选明确支持或结构兼容三者的，按研究全流程组织：

1. **co-researcher（poemswe/co-researcher）**  
   明确兼容 Claude Code、OpenAI Codex **和 OpenCode**。提供专业研究套件 + 多 agent 编排引擎。  
   **方法论重点**：`research-methodology`（设计选择、验证、 reframing）、`literature-review`（真实数据库如 OpenAlex/arXiv + 引用验证门）、`hypothesis-testing`、`systematic-review`（PRISMA 风格）、`critical-analysis`、`peer-review`、`ethics-review`、`research-synthesis`（含不确定性量化）。支持 Interactive / Auto / Plan-Only 模式，模板覆盖 quick/rigorous/comprehensive。  
   适合课程演示“如何把 AI 作为协作伙伴而非黑箱”，强调 Systemic Honesty 与 citation integrity。

2. **Claude Scholar（及相关 Galaxy-Dawn 版本）**  
   明确支持 Claude Code、Codex CLI **和 OpenCode**（以及 Kimi 等）。半自动化研究助手，覆盖 ideation → literature → experiments → writing 的可追溯 pipeline，集成 Zotero/Obsidian。  
   **方法论重点**：问题到写作的可审计流程，适合教“如何用 AI 管理研究状态与证据链”。

3. **ai-research-skills（WenyuChiou/ai-research-skills）**  
   通用 `SKILL.md` 目录，原生支持 Claude Code / Codex / Gemini / Cursor 等，结构也可用于 OpenCode 类 agent。约 15 个 skills，面向研究生/博后。  
   **方法论核心**：以“这个 research gap 真的值得做吗？”为起点的 **3-gate 决策**（open / contribution / feasibility）→ `gap-to-topic`、`literature-triage-matrix`、`research-design-helper`、`paper-memory-builder`（claim-evidence 审计、anti-hallucination）、`academic-writing-skills`（banned-word、reviewer response）。8 阶段 pipeline 用 YAML/Markdown 机械交接，强制 schema 与 provenance。跨 agent 委托（如 mechanical 任务给 Codex）。  
   非常适合课程讲“方法论判断 + 状态管理 + 防幻觉”。

4. **Deep-Research-skills（Weizhena/Deep-Research-skills）**  
   明确支持 Claude Code / **OpenCode** / Codex，带 human-in-the-loop。两阶段（outline 可扩展 + deep investigation）。  
   **方法论重点**：结构化深度研究控制，适合学术 survey、benchmark review、文献分析，强调每步人工干预点。

5. **academic-research-skills（Imbad0202，高 star）**  
   主要针对 Claude Code（有 Codex 兄弟版），完整 pipeline：research → write → review → revise → finalize，含 citation integrity gates、claim-audit、七模式完整性检查（抓幻觉引用与方法论虚构）。  
   **方法论亮点**：强制验证与可复现质量门，适合演示“AI 生成后必须过的 rigor 检查”。可与其他 skills 组合。

6. **其他高 complementary 选项**  
   - **AI Research Skills 库**（高 star，skill 数量待回源）：把 agent 变成 AI/ML 研究助手（fine-tuning、distributed training、evaluation、RAG、paper writing + autoresearch 层），兼容 Claude Code / Codex 等。适合 CS 研究生的实验与系统部分。  
   - **nature-skills**：Nature 级写作 + 科研绘图，Claude Code + Codex。  
   - **feynman** 等 CLI 研究 agent：20+ skills（文献、复现、peer review），可装进 Codex/Claude。  
   - 社区聚合如 Auto-Research-Skills hub、awesome-skills：可一键筛选更多，但建议课程精选上述核心，避免 overload。

**跨平台使用提示**：多数采用 `SKILL.md`（name + description frontmatter + 正文）。Claude Code 用 `.claude/skills/` 或 marketplace；OpenCode 可读 `.opencode/skills/`、`.claude/skills/` 等；Codex 用 `.agents/skills/`（可 symlink）。安装后通常用自然语言触发或 slash/`$` 命令。始终强调本地/隐私配置与 API key 管理。

### 课程方法论框架建议（与 skills 结合）
不要只教“怎么 prompt”，而教**研究全生命周期的人类-AI 协作纪律**（参考多门 AI-Assisted Research 课程与论文）：

- **文献与 gap**：用 research-hub / literature-triage / deep-research skills 做发现 + 验证；强制 citation 核对、矛盾识别、taxonomy 构建。强调 AI 输出是 lead，不是结论。  
- **问题与设计**：3-gate 或 hypothesis-testing skills；区分可委托任务 vs 必须人类判断的（novelty、可行性、伦理）。  
- **实验与代码**：coding agent 原生能力 + AI Research Skills / scientific-toolkit；结合 test-driven、context 管理、可复现协议（manifests）。参考 “Twelve quick tips for AI-assisted coding in science”。  
- **写作与验证**：academic-writing + peer-review + claim-audit；强制 attribution、anti-AI-ism、integrity checklist。  
- **伦理与批判**：ethics-review、始终验证、披露 AI 使用、避免 over-delegation。  
- **评估**：让学生用同一 skill 在三个 agent 上对比输出质量、幻觉率、可复现性。

相关课程/资源可参考：Lehigh 的 AI-Assisted Research（四模块：理解单篇 → taxonomy → gap → 综合）、Northwestern MECH_ENG 495、Harvard CS197 等，以及 arXiv 上 AI auto-research lifecycle 综述。

这些 skills 大多开源、可 fork，学生可直接在自己的 OpenCode/Claude Code/Codex 环境实践。建议课程以 1–2 个核心 pipeline（如 co-researcher 或 ai-research-skills 的 3-gate + design）为主线，辅以案例（CS/AI 论文复现或 survey），强调“方法论判断永远在人类侧”。如果需要某个 skill 的具体安装命令、示例 prompt 或课程大纲细化，可以继续说。

### 方法论覆盖缺口（待补，2026-07-29）

对照课程八阶段研究链路与 Agent Workflow 八要素，以下维度与课程价值取向强相关，但当前清单未核验到对应 skill。列为待补，**不在此编造具体 skill 名单**；补入前须回源确认真实存在。

| 缺口维度 | 与课程对齐点 | 状态 |
| --- | --- | --- |
| 失败实验/异常记录与归因 | “失败不得选择性删除”“失败记录是评价工作流的重要证据”（阶段七、失败恢复） | 最显著，待补或自建 |
| 可复现性/环境锁定 | 随机种子、依赖锁定、环境 manifest、数据版本 | 待补 |
| AI 使用披露与署名合规 | 第一课 ai-usage-log.md；regulation/unesco 要求披露、禁 AI 署名 | 待补，与第一课直接相关 |
| Evals/评测设计 | Agent Workflow 八要素之一；第 10–13 课重点 | 课程要求学生自建，未必用现成 skill |
| 统计严谨/因果推断 | “把相关性写成因果”风险（handout 阶段五/六） | 待补 |
| 权限/沙箱/安全边界 | 第一课最小权限、agent-permissions.md | 待补 |
| 数据许可与治理 | 外部输入摄取阶段“许可、隐私或时效性风险” | 待补 |

注意：按“课程不是 Skills 安装课”原则，不必每维度都补现成 skill；部分维度可用课程通用工件（如 ai-usage-log.md 已覆盖披露工件）或要求学生自建（如 Evals）。