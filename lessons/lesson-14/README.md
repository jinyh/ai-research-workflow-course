# 第 14 课内容入口（MOC）

> 论文式写作、证据回写与 AI 使用披露。本文件是第 14 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：论文式写作结构（IMRaD/可追溯叙事、基本论证单元、贡献列表、主题位重音位）、证据回写（结论追踪表、不选择性删除失败、从验证门材料到论文段）、AI 使用披露（七字段、AI 输出只作线索）、引用与署名规范、贯穿案例动作链、论证门条件预演（对齐 assignments.md Checkpoint 4 之 10 项）、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.1.0（18 页，草稿） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 承接第 13 课验证门产出：本课把第 13 课的评价报告、证据充分性、威胁有效性、失败审计回写为论文结果段与讨论段。
- 承接第 9 课判断门材料：本课把第 9 课实验规格、研究判断、baseline 用作论文方法段和结论追踪表的上游研究判断字段。
- 承接第 12 课工作流说明：本课把第 12 课任务契约、Context、权限、可演示原型用作论文方法段的工作流边界。
- 为第 15 课同行评审铺垫：本课产出的论文式短文初版、结论追踪表、AI 使用披露段是第 15 课同行评审的直接输入。
- 为第 16 课论证门预演：本课做 Checkpoint 4 论证门条件预演，发现缺口留给第 15-16 课补全；本课非正式提交门。
- 本课非提交门（[assignments.md](../../course/assignments.md) 第 14 课行："将证据、实验和研究判断回写为论文式短文"，无正式提交列）。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)（"表达、伦理与复盘"维度，20%）、[assignments.md](../../course/assignments.md)（Checkpoint 4 论证门条件——本课预演，第 16 课正式提交） |
| handout（AI 使用披露口径） | [AGENTS.md](../../AGENTS.md) 证据标准与 AI 使用披露口径、[assessment.md](../../course/assessment.md) 学术规范红线 |
| handout（论文式短文字段） | [project-template.md](../../course/project-template.md) §9 报告与论文式短文 |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 14 课 |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 14 课 → 课后准备第 15 课同行评审
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 备课规划 第 14 课目标段；八阶段定位阶段八"回写与表达"，承接第 13 课验证门，向第 15 课同行评审输出） |
| 2. 内容门 | 🟡 草稿通过（三件套已对齐口径；讲义为内容源；关键结论绑定可核验来源——Booth et al. 2024 / Whitesides 2004 / Gopen & Swan 1990 / Peyton Jones 讲义 / AGENTS.md / assignments.md Checkpoint 4；AI 输出仅作线索；失败不选择性删除对齐 AGENTS.md 与 assessment.md 学术规范红线；待第二轮审校去 AI 痕迹与跨文档检查） |
| 3. 90 分钟教学门 | 🟡 草稿（备课规划 第 14 课段未给逐时间表，教案按默认节奏构造，与第 13 课风格一致；第一次学生动手 35 分钟，最小产出=论文式短文初版 IMRaD 骨架+贡献列表+结论追踪表+AI 使用披露段；备用路径已标；桌面推演待续） |
| 4. 逐页映射门 | 🟡 草稿（18 页映射表已形成，每页标 handout 小节；待 90 分钟教学门桌面推演后复核页数与时间块） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- **论证门条件对齐**：handout §七 的 10 项门条件与 [assignments.md](../../course/assignments.md) Checkpoint 4 逐项对齐，已核对一致：
  1. 论文式短文完整（问题/方法/实验/结果/局限） ↔ 条件之一
  2. 结果表/图可追溯到证据项/实验 ID/工作流运行记录 ↔ 条件之二
  3. 讨论有效性威胁或等价分析 ↔ 条件之三
  4. 已处理第 15 课同行评审意见 ↔ 条件之四（本课留给第 15 课）
  5. 每个关键结论绑定直接证据+上游研究判断 ↔ 条件之五
  6. `stable` 结论两项独立证据；不满足已降级 ↔ 条件之六
  7. Agent Workflow 有运行说明/权限/评价/失败记录 ↔ 条件之七
  8. 伦理/数据许可/贡献说明/AI 使用披露完整 ↔ 条件之八
  9. 工件状态追踪表与门检查结果一致 ↔ 条件之九
  10. 完成个人展示/复现抽查/课程复盘 ↔ 条件之十（本课留给第 16 课）

  本课非正式提交门（[assignments.md](../../course/assignments.md) 第 14 课行无正式提交列），预演目的是发现缺口。**待教师在第 16 课前复核 10 项与 assignments.md Checkpoint 4 的逐项一致性（评分依据，不能自造）。**

- `备课规划.md` 第 14 课段是否补逐时间表（当前教案按默认节奏构造，与第 13 课风格一致，但非权威源给定）；
- 演示用第 13 课 evaluation-report.md 完整版样例需在授课前准备可投屏版本；
- 演示用"流畅但证据断裂的 AI 文本"反例（"消除"版本 vs"降低"版本）需在授课前准备；
- 演示用"AI 使用披露只写声明"反例需在授课前准备；
- 贯穿案例论文式短文初版样例（IMRaD 骨架+贡献列表+结论追踪表+AI 使用披露段）需在授课前准备可投屏版本；
- 论证门条件预演清单（10 项，可投屏）需在授课前准备；
- 18 页是否在桌面推演后调整页数密度（第 13 课同为 20 页，第 1 课 33 页）；
- 与第 15 课的衔接点：本课"论文式短文初版"是否在 slides P17 进一步细化为第 15 课同行评审的直接输入；
- 贯穿案例是否需要在第 10-14 课之间保持一致（当前沿用第 1 课证据追踪表 / 第 5 课结构化阅读卡 / 第 9 课实验规格与 baseline / 第 12 课工作流原型 / 第 13 课评价报告同一案例族）；
- 论文式短文字段是否需要根据本课新增"结论追踪表"和"AI 使用披露七字段"更新 [project-template.md](../../course/project-template.md) §9（当前 §9 报告字段可能未含独立"结论追踪表"和"AI 使用披露七字段"段——可能需要扩展）；
- handout §六贯穿案例的虚构数值（0.18±0.03 vs 0.31±0.04）已在讲义和 slides 明确标注为"虚构教学示例，仅用于课堂演示动作链，不预设真实数值"，与第 13 课一致，待教师在授课前确认是否替换为真实可投屏数值或保留虚构标注。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
