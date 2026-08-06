# 第 4 课内容入口（MOC）

> AI 辅助精读与主张核验。本文件是第 4 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：AI 辅助精读五步流程、主张核验（任务/设置/指标/对照/限定）、阅读卡字段、偏差审计、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.2.0（17 页，gates 1-4 通过） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 贯穿案例承接第 1-3 课"结构化阅读卡与 AI 摘要遗漏率"，与第 3 课候选文献表的 verified 条目衔接。
- 阅读卡写入个人项目 `notes/reading-cards/` 或 `evidence-map.md` 论文区段，第 5-6 课继续回写，第 6 课问题门统一检查至少 3 张完整精读卡。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)、[assignments.md](../../course/assignments.md) |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 4 课（v1.4.0 含 AI 导航—原文核验—偏差审计阅读流程） |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 4 课
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 备课规划 第 4 课目标段；八阶段定位阶段四"外部输入摄取"→阶段五"证据整理"起始） |
| 2. 内容门 | ✅ 通过（三件套已对齐口径；讲义为内容源；AI 辅助精读五步流程、主张核验五项、阅读卡字段、偏差审计齐全；slides v0.2.0 已完成保守审校——去 meta 自白 + 标题腔降格；handout 正文未动，留待下一轮跨文档检查） |
| 3. 90 分钟教学门 | ✅ 通过（节奏表对齐 备课规划 v2.1.0 第 4 课逐时间表 8 段；每页建议时间 0:00-90:00 段内均分，修复演示段原时间缺口） |
| 4. 逐页映射门 | ✅ 通过（17 页映射表，方法段合并 3 处去重后重编号；每页标 handout 小节） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- 演示用论文与故意含错误的 AI 摘要样例（含过度概括/位置错指/限定遗漏）需在授课前准备实际可投屏版本；
- 阅读卡与偏差审计表模板是否并入 [starter-template.md](../../course/starter-template.md)；
- handout.md 第二轮审校（去 AI 痕迹与跨文档检查）留待下一轮；
- 与第 5 课"综述、证据地图与研究空白"的衔接点是否需要在 slides P17 进一步细化（阅读卡→证据地图的输入关系）。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
