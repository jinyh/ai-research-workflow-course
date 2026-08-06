# 第 3 课内容入口（MOC）

> 文献检索与证据角色。本文件是第 3 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：外部输入类型、检索式构建、证据角色四类、AI 回原文核验、候选文献表、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.2.0（20 页，gate 2-4 PASS） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 贯穿案例承接第 1 课"结构化阅读卡与 AI 摘要遗漏率"，与第 1-2 课项目工件衔接。
- 候选文献表写入个人项目 `notes/literature-search.md` 或 `evidence-map.md` 初版区段，第 4-6 课继续回写，第 6 课问题门统一检查。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)、[assignments.md](../../course/assignments.md) |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 3 课 |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 3 课
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 备课规划 第 3 课目标段；八阶段定位阶段四"外部输入摄取"） |
| 2. 内容门 | ✅ 通过（三件套口径对齐；gate 2 保守审校完成——去 P04 备注 1 处 meta 自白、修 P12 状态计数 1 处；标题腔 4 处判断/对仗标题未超 6 处阈值，保留；speaker notes 整体口吻已达资深研究者标准） |
| 3. 90 分钟教学门 | ✅ 通过（每页时间按 备课规划 v2.1.1 第 3 课权威 8 段时长重排，段内均分；页量预算确认 20 页无超额段，方法段 7 页/17 min 与 lesson-1 合并后 7 页/12 min 密度相当，不合并；0:00-90:00 连续无断） |
| 4. 逐页映射门 | ✅ 通过（20 页映射表已复核，每页标 handout 小节；无合并故无行变更；90 分钟表页码列同步） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- 演示用 AI 综合报告样例（5 条引用，含 verified/rejected/pending）需在授课前准备实际可投屏版本；
- 候选文献表与检索记录模板是否并入 [starter-template.md](../../course/starter-template.md)；
- 与第 4 课"AI 辅助精读与主张核验"的衔接点是否需要在 slides P20 进一步细化。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
