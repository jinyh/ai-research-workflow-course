# 第 5 课内容入口（MOC）

> 综述结构、证据地图与研究空白。本文件是第 5 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：综述结构（叙事性 vs 系统性）、相关工作矩阵、证据地图四类、研究空白三类与三步检验、AI 辅助归纳核验、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.1.0（20 页，草稿） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 承接第 4 课结构化精读与主张核验：本课把第 4 课的阅读卡重组为按研究问题排列的相关工作矩阵和证据地图。
- 为第 6 课问题门铺垫：本课产出的证据地图初版和研究空白候选是问题门的直接输入；研究空白候选由第 6 课第一性原理分析进一步推导为可证伪命题。
- 证据地图写入个人项目 `evidence-map.md`，第 6 课问题门统一检查至少 3 张完整精读卡和一份证据地图初版。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)、[assignments.md](../../course/assignments.md)（第 6 课问题门条件） |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 5 课 |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 5 课
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 备课规划 第 5 课目标段；八阶段定位阶段五"证据整理"，承接第 4 课阅读卡，向第 6 课问题门输出） |
| 2. 内容门 | 🟡 草稿通过（三件套已对齐口径；讲义为内容源；关键结论绑定可核验来源——Kitchenham & Charters / Booth / Pautasso / Qian；AI 输出仅作线索；待第二轮审校去 AI 痕迹与跨文档检查） |
| 3. 90 分钟教学门 | 🟡 草稿（节奏表对齐默认节奏与第 5 课目标；备课规划 第 5 课段未给逐时间表，教案按默认节奏构造；第一次学生动手 48 分钟，最小产出=矩阵初版+证据地图含主证据/对比/空白各一+空白候选标注类型并尝试三步检验+一条 AI 使用记录；备用路径已标；桌面推演待续） |
| 4. 逐页映射门 | 🟡 草稿（20 页映射表已形成，每页标 handout 小节；待 90 分钟教学门通过后复核页数与时间块） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- 备课规划 第 5 课段是否补逐时间表（当前教案按默认节奏构造，与第 3 课风格一致，但非权威源给定）；
- 演示用 5 张阅读卡（含主证据/补充/对比/冲突/空白）需在授课前准备实际可投屏版本；
- 演示用 AI 综述草稿样例（含虚构引文/过度概括/来源不可追溯）需在授课前准备；
- 20 页是否在桌面推演后调整页数密度（第 3 课同为 20 页，第 1 课 33 页）；
- 与第 6 课问题门的衔接点：研究空白候选 → 第一性原理 → 可证伪命题的转换路径是否在 slides P20 进一步细化；
- 研究空白候选清单模板是否并入 [starter-template.md](../../course/starter-template.md)。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
