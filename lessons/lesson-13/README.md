# 第 13 课内容入口（MOC）

> 工作流评价、结果分析、失败审计与验证门。本文件是第 13 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：工作流评价（不是功能清单、评价维度、可重复评价、实际影响）、结果分析（映射回假设、正向与负向均记录、证据充分性、威胁有效性）、失败审计（失败不选择性删除、六类根因骨架、失败日志、人工审核记录）、贯穿案例动作链、验证门提交清单（对齐 assignments.md Checkpoint 3 之 10 项）、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.1.0（20 页，草稿） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 承接第 10 课受限 Agent 执行：本课把第 10 课的执行记录、任务契约、diff 和失败日志收口为可重复评价。
- 承接第 11 课实验自动化：本课把第 11 课的指标轨迹、预算、停止条件收口为结果分析与方差报告。
- 承接第 12 课个人 Agent Workflow 设计：本课把第 12 课的任务契约、Context、权限、可演示原型、评价计划初版收口为评价报告与失败审计。
- 承接第 9 课判断门材料：本课把第 9 课的 baseline、实验规格、研究判断用作评价的 baseline/对照和结果映射的目标假设。
- 为第 14 课论文式写作铺垫：本课的"证据充分性检查"和"威胁有效性"将成为第 14 课论文结果段与讨论段的直接输入。
- 验证门提交指向当前个人项目版本（链接/tag/压缩包），不重复制作汇报文档。字段对齐 [project-template.md](../../course/project-template.md) §6、§8、§10。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)（"原型与 Agent Workflow 实践"维度，25%）、[assignments.md](../../course/assignments.md)（Checkpoint 3 验证门条件——权威来源） |
| handout（失败不删除红线） | [AGENTS.md](../../AGENTS.md) 证据标准与失败记录口径、[assessment.md](../../course/assessment.md) 学术规范红线 |
| handout（评价报告字段） | [project-template.md](../../course/project-template.md) §6 Agent Workflow、§8 评价报告、§10 伦理与合规 |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 13 课 |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 13 课 → 课后提交验证门材料包
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 备课规划 第 13 课目标段；八阶段定位阶段七"原型验证成案+评价"，承接第 10-12 课，向第 14 课论文式写作输出） |
| 2. 内容门 | 🟡 草稿通过（三件套已对齐口径；讲义为内容源；关键结论绑定可核验来源——Sculley et al. 2015 / Bouthillier et al. 2021 / Breck et al. 2017 / MLAgentBench / assignments.md 门条件；AI 输出仅作线索；失败不选择性删除对齐 AGENTS.md 与 assessment.md 学术规范红线；待第二轮审校去 AI 痕迹与跨文档检查） |
| 3. 90 分钟教学门 | 🟡 草稿（备课规划 第 13 课段未给逐时间表，教案按默认节奏构造，与第 9、10、12 课风格一致；第一次学生动手 35 分钟，最小产出=evaluation-report.md 初版 + 伦理说明更新三条；备用路径已标；桌面推演待续） |
| 4. 逐页映射门 | 🟡 草稿（20 页映射表已形成，每页标 handout 小节；待 90 分钟教学门桌面推演后复核页数与时间块） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- **验证门条件对齐**：handout §六·2 的 10 项门条件与 [assignments.md](../../course/assignments.md) Checkpoint 3 逐项对齐，已核对一致：
  1. 工作流针对明确科研动作，写清输入/输出/成功标准/不适用范围 ↔ 条件之一
  2. 有可运行或可演示原型，不只是流程图 ↔ 条件之二
  3. 说明 Context、Memory、研究工件、工具/MCP 和数据来源 ↔ 条件之三
  4. 说明只读/可写范围、禁止项、预算、停止条件、人工确认点 ↔ 条件之四
  5. 至少一次可重复评价；有 baseline/前后对比/对照/等价依据 ↔ 条件之五
  6. 至少保留一次失败/无效建议/局限分析，不只展示成功 ↔ 条件之六
  7. AI 生成代码/建议/结论有人工审核记录 ↔ 条件之七
  8. 评价报告说明实际影响，不只描述功能 ↔ 条件之八
  9. 关键结论说明证据来源、支持强度、冲突、缺失、待验证风险 ↔ 条件之九
  10. 更新科研伦理与合规，特别数据访问/工具权限/外部服务边界 ↔ 条件之十

  提交方式（链接/tag/压缩包）、未通过处理（一周内修订、不扣重分）和评分维度（"原型与 Agent Workflow 实践"25%）均对齐。**待教师在正式提交前复核 10 项与 assignments.md Checkpoint 3 的逐项一致性（评分依据，不能自造）。**

- `备课规划.md` 第 13 课段是否补逐时间表（当前教案按默认节奏构造，与第 9、10、12 课风格一致，但非权威源给定）；
- 演示用第 12 课工作流原型（贯穿案例：阅读卡生成工作流）需在授课前准备实际可投屏版本；
- 演示用 evaluation-report.md 完整版样例（评价+结果分析+失败审计+人工审核+证据充分性+威胁有效性）需在授课前准备可投屏版本；
- 演示用"功能清单冒充评价"反例与"失败被删除"反例需在授课前准备；
- Sculley et al. 2015 失败分类骨架投屏版需在授课前准备（六类骨架是借用其技术债分类思路，不照搬全部）；
- 20 页是否在桌面推演后调整页数密度（第 6、9 课同为 20 页，第 1 课 33 页）；
- 与第 14 课的衔接点：本课"证据充分性检查"和"威胁有效性"是否在 slides P20 进一步细化为第 14 课论文结果段与讨论段的直接输入；
- 贯穿案例是否需要在第 10-13 课之间保持一致（当前沿用第 1 课证据追踪表 / 第 5 课结构化阅读卡 / 第 9 课实验规格与 baseline / 第 12 课工作流原型同一案例族）；
- 验证门材料文件结构是否需要根据本课新增"失败审计"段更新 [project-template.md](../../course/project-template.md) §8（当前 §8.2 误差分析与 §8.5 Agent Workflow 评价已含失败字段，但未含"失败分类骨架"和"人工审核记录"独立段——可能需要扩展）；
- handout §五贯穿案例的虚构数值（0.18±0.03 vs 0.31±0.04）已在讲义和 slides 明确标注为"虚构教学示例，仅用于课堂演示动作链，不预设真实数值"，待教师在授课前确认是否替换为真实可投屏数值或保留虚构标注。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
