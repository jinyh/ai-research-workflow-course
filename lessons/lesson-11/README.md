# 第 11 课内容入口（MOC）

> 实验自动化与 AutoResearch 循环。本文件是第 11 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：实验自动化循环五步、四约束（固定指标/预算/停止条件/回退）、AutoResearch 元模式与 AI Scientist 案例分析（八维框架，不外推为通用自主科研）、失败实验记录与不选择性删除、贯穿案例改写为受限循环、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.1.0（20 页，草稿） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 承接第 10 课受限 Agent 执行：本课把"跑通一次"扩展为可重复运行的受限循环，把任务契约草稿升级为四要素（输入/输出/成功标准/不适用范围）。
- 承接第 9 课实验规格与可复现说明：本课把第 9 课的停止条件扩展为循环的预算与三类停止触发器，把可复现字段保留在循环中以防指标漂移。
- 为第 12 课个人工作流设计铺垫：本课的循环骨架（任务契约/Context/工具权限/状态/执行循环/工件追踪/Evals/失败恢复）是第 12 课个人工作流设计的直接输入；第 12 课把这些要素重新组合而非拆解别人的系统。
- AutoResearch / AI Scientist 在本课只作**分析对象**，不作结论外推的依据——不表述为"AI 已能自主科研""自动评审替代同行""端到端适用于所有学科""失败可被自动删除"。
- 本课无正式提交（验证门在第 13 课后）。本课产出（受限循环说明、失败迭代记录、八维拆解表）持续回写同一项目，验证门统一检查实验记录与失败保留。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)、[assignments.md](../../course/assignments.md)（验证门 Checkpoint 3 在第 13 课后，本课无正式提交） |
| handout（循环骨架） | [starter-template.md](../../course/starter-template.md)、[project-template.md](../../course/project-template.md) |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 11 课 |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 11 课 → 课后跑通受限循环骨架与至少一次失败迭代记录
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 `备课规划.md` 第 11 课目标段；八阶段定位阶段七"原型验证（实验追踪）"；承接第 10 课受限 Agent，为第 12 课个人工作流设计铺垫） |
| 2. 内容门 | 🟡 草稿通过（三件套已对齐口径；讲义为内容源；关键结论绑定可核验来源——Sandve et al. 2013 / Lu et al. Nature 2026 / Huang et al. MLAgentBench ICML 2024 / Karpathy AutoResearch；AutoResearch / AI Scientist 只作分析对象，不外推为通用自主科研；AI 输出仅作线索；待第二轮审校去 AI 痕迹与跨文档检查） |
| 3. 90 分钟教学门 | 🟡 草稿（`备课规划.md` 第 11 课段未给逐时间表，教案按默认节奏构造，与第 9-10 课风格一致；第一次学生动手 55 分钟，最小产出=受限循环说明（四约束+五步骨架+审核点）+ 失败迭代记录（七字段）+ 八维拆解表（≥4 维）；备用路径已标；桌面推演待续） |
| 4. 逐页映射门 | 🟡 草稿（20 页映射表已形成，每页标 handout 小节；待 90 分钟教学门通过后复核页数与时间块） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- **syllabus v1.1.0 changelog 边界**：[syllabus.md](../../course/syllabus.md) v1.1.0 变更记录写"第 12 课增加 AutoResearch 元模式和 AI Scientist 对比内容"，但 syllabus 表格中第 11 课主题为"实验自动化、AutoResearch 循环与结果追踪"，第 12 课为"Agent/Skill 逻辑与自主 Research Workflow 设计"。本课按任务指令把 AutoResearch / AI Scientist 案例分析放在第 11 课（实验自动化循环主题下），第 12 课聚焦工作流设计逻辑。**待教师确认这一边界归属**——若需把对比内容回迁第 12 课，本课 §四与 slides P12-P15 需相应调整。
- `备课规划.md` 第 11 课段是否补逐时间表（当前教案按默认节奏构造，与第 9-10 课风格一致，但非权威源给定）；
- AutoResearch README / program.md 授课前需固定 commit 并复核（reading-list 已标注）；
- AI Scientist（Lu et al. 2026）八维拆解表样例需准备可投屏版本；
- 演示用"指标篡改"反例（循环日志显示结果不利时换指标）需准备可投屏版本；
- 演示用失败迭代记录样例（七字段）需准备可投屏版本；
- 20 页是否在桌面推演后调整页数密度（第 9-10 课同为 20 页）；
- 与第 12 课的衔接点：本课循环骨架（八维框架）是否在 slides P15 或第 12 课 P01 进一步显式承接；
- 贯穿案例是否需要在第 9-11 课之间保持一致（当前沿用第 1 课证据追踪表 / 第 5 课结构化阅读卡 / 第 7 课实验规格草图 / 第 9 课判断门 / 第 10 课受限执行同一案例族）；
- 不外推清单（handout §四·4）是否需要在验证门（第 13 课）材料中再次出现作为自查项。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
