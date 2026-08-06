# 第 9 课内容入口（MOC）

> Baseline、实验规格、可复现性与判断门。本文件是第 9 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：baseline 选择与公平性、实验规格七字段、可复现最小集合、随机种子与方差、ACM Badging 自查视角、starter→project 模板迁移、判断门提交清单（对齐 assignments.md Checkpoint 2 之 8 项）、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.1.0（20 页，草稿） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 承接第 7 课机制假设与实验规格草图：本课把第 7 课的"假设—指标—实验—可能结论映射"和变量清单草案补全为七字段完整规格，把 J1 研究判断补出 J2。
- 承接第 8 课同伴反馈：本课把第 8 课的结构化反馈逐条归档为采纳/拒绝/暂缓并写明理由，作为判断门条件之六的提交材料。
- 为第 10 课受限 Agent 铺垫：本课实验规格中标出"哪些步骤拟用 Agent、哪些步骤必须人工"，作为第 10 课任务契约的直接输入。
- 判断门提交指向当前个人项目版本（链接/tag/压缩包），不重复制作汇报文档。从 [starter-template.md](../../course/starter-template.md) 迁移到 [project-template.md](../../course/project-template.md)，字段对齐 project-template §4.2/4.4/4.5/4.6/5/7。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)（"实验设计与可复现性"维度，30%）、[assignments.md](../../course/assignments.md)（Checkpoint 2 判断门条件——权威来源） |
| handout（模板迁移） | [starter-template.md](../../course/starter-template.md)、[project-template.md](../../course/project-template.md) |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 9 课 |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 9 课 → 课后提交判断门材料包
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 `备课规划.md` 第 9 课目标段；八阶段定位阶段六"研究判断成案"+阶段七"原型验证起始"，承接第 7-8 课，向第 10 课受限 Agent 输出） |
| 2. 内容门 | 🟡 草稿通过（三件套已对齐口径；讲义为内容源；关键结论绑定可核验来源——Wilson et al. 2017 / Pineau et al. 2021 / ACM Badging v1.1 / Bouthillier et al. 2021 / Sandve et al. 2013 / assignments.md 门条件；AI 输出仅作线索；待第二轮审校去 AI 痕迹与跨文档检查） |
| 3. 90 分钟教学门 | 🟡 草稿（`备课规划.md` 第 9 课段未给逐时间表，教案按默认节奏构造，与第 3、5、7 课风格一致；第一次学生动手 48 分钟，最小产出=experiment-spec 七字段 + 复现说明 + J2 + 同伴反馈处理 + 失败预案；备用路径已标；桌面推演待续） |
| 4. 逐页映射门 | 🟡 草稿（20 页映射表已形成，每页标 handout 小节；待 90 分钟教学门通过后复核页数与时间块） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- **判断门条件对齐**：handout §六·2 的 8 项门条件与 [assignments.md](../../course/assignments.md) Checkpoint 2 逐项对齐，已核对一致：
  1. 可执行 baseline 或最小验证原型 ↔ 条件之一
  2. 数据、材料、评价指标和使用限制说明 ↔ 条件之二
  3. 环境、配置、随机种子或等价复现条件 ↔ 条件之三
  4. ≥2 条研究判断（取舍理由、适用边界、依据、待验证状态）↔ 条件之四
  5. 实验规格完整（假设对应、变量、步骤、度量标准、对照、停止条件）↔ 条件之五
  6. 第 8 课同伴反馈处理记录 ↔ 条件之六
  7. 当前最大风险和失败预案 ↔ 条件之七
  8. 迁移到完整项目模板，不丢失 AI 使用记录和伦理说明 ↔ 条件之八

  提交方式（链接/tag/压缩包）、未通过处理（一周内修订、不扣重分）和评分维度（"实验设计与可复现性"30%）均对齐。待教师在正式提交前复核。
- `备课规划.md` 第 9 课段是否补逐时间表（当前教案按默认节奏构造，与第 3、5、7 课风格一致，但非权威源给定）；
- 演示用第 7 课实验规格草图（贯穿案例：自由摘要 vs 阅读卡摘要，七字段草案）需在授课前准备实际可投屏版本；
- 演示用"不可复现实验"反例（缺种子、单次运行、baseline 不公平）需在授课前准备；
- 演示用 experiment-spec.md 完整版样例（七字段填满 + 复现说明 + J2 + 同伴反馈处理 + 失败预案）需在授课前准备可投屏版本；
- starter-template → project-template 迁移对照表可投屏版本；
- 20 页是否在桌面推演后调整页数密度（第 3、5、6、7 课同为 20 页，第 1 课 33 页）；
- 与第 10 课的衔接点：实验规格中"哪些步骤拟用 Agent、哪些步骤必须人工"是否在 slides P20 进一步细化；
- 贯穿案例是否需要在第 7-9 课之间保持一致（当前沿用第 1 课证据追踪表 / 第 5 课结构化阅读卡 / 第 7 课实验规格草图同一案例族）；
- 判断门材料文件结构是否需要根据本课新增"复现说明"段更新 [project-template.md](../../course/project-template.md) §4.6 实验规格字段（当前 §4.6 字段为假设对应/变量/步骤/度量标准/预期结果，未含停止条件与随机化——可能需要扩展为七字段）。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
