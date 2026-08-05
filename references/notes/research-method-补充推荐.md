# research-method 资料库补充推荐（库外著名文献）

最后核验：2026-07-29
配套：[research-method-选目分析.md](./research-method-选目分析.md)

> 本表是对 `research-method/` 资料库与选目分析的**库外补充**，重点填补选目分析暴露的空白（尤其第 9-13 课 AI/Agent 核心几乎无对应材料）。
>
> **证据标准声明**：以下作者/年份/会议为**推荐线索**，非已核验事实。按项目规则，AI 输出不构成证据，关键结论须回源核验。快速演进领域（LLM Agent、AutoML）的标题与会议可能变动，授课前必须回源确认确切出处与最新版本。分级（ref/README.md）：A 论文/上游仓库/官方文档，B 书籍/高质量二手，C 博客/社媒。

## 第 1 课 AI 辅助科研导论 / 八阶段研究链路

- **Wang et al. 2023, Scientific discovery in the age of AI**（Nature 综述）— A — 已在 `ref/papers/`，作八阶段与 AI-for-research 概念锚点。
- **Hamming, You and Your Research**（1986 报告）— B — 库内 `科研经验集锦` 已含讲稿；选题/品味/远见经典，可作第 1 与第 6 课引子。
- **Simon, The Sciences of the Artificial**（1969/1996）— B — CS/AI"人工物"方法论奠基，契合阶段 1 对人工现象的处理。

## 第 3 课 文献检索与证据角色判断

- **Greenhalgh, How to Read a Paper**（BMJ 系列与书）— B — 医学经典，"证据角色/检索式/批判性筛选"通用，对应阶段 4 证据角色判断。
- **PRISMA 声明**（Moher et al. 2009 起）— A — 系统综述透明度标准，作证据地图可追溯性示范。
- **Kitchenham & Charters, Guidelines for SLR in Software Engineering**（2007）— A — 把"综述=可复现方法"引入 CS/SE，对应第 5 课。

## 第 4 课 AI 辅助论文精读

- **Keshav, How to Read a Paper**（ACM SIGCOMM CCR, 2007）— A — 三遍阅读法，世界级经典；与库内沈向洋/华刚"十问"互补（流程 vs 问题清单）。
- 提示：库内 `Collected Advice` 链接索引含 MIT AI Lab 研究指南等，可作延伸。

## 第 5 课 综述 / 证据地图 / 空白识别

- **Pautasso, Ten Simple Rules for Writing a Literature Review**（PLOS Computational Biology, 2013）— A — 对应"证据地图/空白分类"。
- **Kitchenham SLR 指南**（同第 3 课）— A — 结构化证据整理。
- **Web of Science 引文链**（库内 WoS PPT，三星）— 被引/施引检索作空白识别工具底料。

## 第 6 课 研究问题 / 问题定义 / 第一性原理（问题门）

- **Platt, Strong Inference**（Science, 1964）— A — "多假设—证伪—排除"范式，直接对应阶段 1-3 可证伪命题训练，强烈推荐。
- **Pólya, How to Solve It**（1945）— B — 第一性原理与启发式求解经典。
- **Hamming, You and Your Research**（同第 1 课）— B — 选题与"重要问题"判断。
- 库内已覆盖：胡晓峰"科学问题"、钱志云 idea 范式、Whitesides"outline 即研究计划"，无需重复。

## 第 7 课 机制假设 / 研究判断 / 实验设计

- **Platt, Strong Inference**（同第 6 课）— A — 机制假设与证伪点设计的最佳理论锚点。
- **Box, Hunter & Hunter, Statistics for Experimenters**（经典教材）— B — 变量、对照、显著性，对应实验规格与变量选择。
- 库内已覆盖：Raskar "Coming up with New Ideas"（五星）idea→假设构造。

## 第 9 课 baseline / 实验规格 / 可复现（判断门）

- **Pineau et al., Improving Reproducibility in Machine Learning Research**（NeurIPS 2019 报告，JMLR 2021）— A — ML 可复现性检查表，直接对应判断门"实验规格/复现说明/随机种子"，必补。
- **Hutson, AI researchers face a reproducibility crisis**（Science 新闻, 2018）— B — 问题代表性报道，作动机材料。
- **库内空白**：第 9 课在 research-method 库中无对应材料，以上为必补。

## 第 10 课 AI 辅助编码 / 调试 / 受限 Agent 执行

- **Yao et al., ReAct: Synergizing Reasoning and Acting in Language Models**（ICLR 2023）— A — Agent"推理+行动"循环基础范式，对应受限执行循环与人工确认点。
- **Jimenez et al., SWE-bench**（ICLR 2024）— A — AI 编码 Agent 真实任务基准，对应"Agent 帮忙但不污染实验/权限边界"。
- **Anthropic, Building Effective Agents**（2024 技术博客）— A — 工作流 vs Agent、工具、权限边界的工程视角。
- 提示：库内 Algorithm2e（五星）仅覆盖伪代码排版，Agent 逻辑须库外补。

## 第 11 课 实验自动化 / AutoResearch 循环 / 结果追踪

- **Huang et al., MLAgentBench**（2024）— A — ML 实验自动化 Agent 基准，对应"配置扫描→评估→保留/丢弃→重复"。
- **Khalsa 等, DSPy**（ICLR 2024）— A — 程序化 LM 流水线与自动评估，契合自主工作流与 eval 机制。
- **Sakana AI Scientist / AI Scientist v2**（已在 `ref/AutoResearch.md` 上游入口）— A — 端到端自动化科研循环案例。
- **Hutter et al., AutoML: Methods, Systems, Challenges**（2019 书）— B — 超参/配置扫描历史方法背景。
- 库内：Model Log（四星）仅覆盖指标曲线，循环与自动化须库外补。

## 第 12 课 Agent/Skill 逻辑 / 自主 Research Workflow 设计

- **Anthropic, Building Effective Agents**（同第 10 课）— A — 任务契约、工具、上下文、权限的工程框架，强烈推荐作本课骨架。
- **MCP 官方文档**（modelcontextprotocol.io，已在 `ref/README` 上游）— A — 工具/上下文协议。
- **Wang et al., AutoGen**（Microsoft, 2023）/ **Hong et al., MetaGPT**（2024）— A — 多 Agent 协作框架，作"自主工作流设计"对比案例。
- 库内：`ref/skills_ref.md` 已索引 Skills/工作流案例池。

## 第 13 课 工作流评价 / 失败复盘（验证门）

- **Sculley et al., Hidden Technical Debt in Machine Learning Systems**（NeurIPS 2014）— A — ML 工程债务与失败来源，对应失败分类与维护性评价。
- **Bender et al., On the Dangers of Stochastic Parrots**（FAccT 2021）— A — AI 输出不可靠性代表论述，对应"AI 生成≠证据"与人工核验边界。
- **Bouthillier et al., Accounting for Variance in ML Benchmarks**（2021）— A — 评价方差/对照，对应工作流评价统计严谨性。
- 库内：第 13 课无对应材料，以上为必补。

## 第 14 课 论文式表达与回写

- **Gopen & Swan, The Science of Scientific Writing**（American Scientist, 1990）— A — 已在库（`science-of-writing.pdf`，五星），读者期望理论锚点，无需外补。
- **Booth, Colomb & Williams, The Craft of Research**（书）— B — 论证=主张+理由+证据+担保，对应"把实验事实组织成可追溯论证"。
- 库内已极充实：Whitesides、SPJ、赵鑫、邱锡鹏、Stanford Unit1-8 等。

## 第 15 课 同行评审

- **Keshav, How to Review a Technical Paper**（ACM SIGCOMM CCR, ~2010）— A — 与"How to Read a Paper"配套的审稿流程清单，CS 友好。
- **Stanford Unit8**（库内五星）— 评审语气与具体化批评，已覆盖。
- 库内：施柏鑫 CVPR 审稿视角、魏秀参 rebuttal（均五星）已覆盖 CS/AI 顶会评审。

## 第 16 课 最终展示（论证门）

- **Alley, The Craft of Scientific Presentations**（书）— B — 学术演讲的视觉与叙事结构。
- **SPJ, How to Give a Good Research Talk**（库内 `Collected Advice` 链接索引中）— A — CS 研究演讲经典。
- 库内：懒人 Oral/Spotlight Video（三星）覆盖视频制作技巧。

## 优先级小结

- **必补空白（库内几乎无材料）**：第 9 课（Pineau 可复现性检查表、Hutson 报道）、第 10-12 课（ReAct、SWE-bench、Anthropic Building Effective Agents、MCP、AutoGen/MetaGPT、DSPy、MLAgentBench）、第 13 课（Sculley 技术债、Bender stochastic parrots）。
- **通用方法论经典（多课可用）**：Platt Strong Inference（第 6-7 课）、Keshav 读论文/审论文（第 4/15 课）、Hamming（第 1/6 课）、PRISMA + Greenhalgh（第 3/5 课）、The Craft of Research（第 14 课）。
- **已在库内/上游索引的**已标注出处，避免重复获取。

## 风险

- 以下条目为推荐线索，非已核验事实。SWE-bench、MLAgentBench、DSPy、AutoGen、MetaGPT、Anthropic 博客属快速演进领域，标题与会议可能变动，授课前必须回源核验确切出处与最新版本。
- 按 `ref/README.md` 分级，论文/上游仓库/官方文档为 A 级可直接依据；书籍与博客次之。建议先回源再纳入 `ref/README.md` 或 `ai-research-workflow-course/reference-analysis.md`。
- 本文件未跟踪、未提交；如需纳入版本管理，提交前确认未引入凭据或敏感路径。
