# 第 1 课内容入口（MOC）

> AI 辅助科研导论、OpenCode 与八阶段研究链路。本文件是第 1 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义 | 面向学生、可脱离课堂独立阅读的正式讲义：概念、方法、案例、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案 | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v1.2.0（36 页） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |
| [slides.pptx](./slides.pptx) | 现行·视觉交付 | `slides.md` 的 PPTX 实现（当前为 39 页旧版，待同步到 36 页） |
| [keystone-design-spec.md](./keystone-design-spec.md) | 规范 | 关键页设计契约（反卡片、节奏、密度、主视觉来源、验收三问） |
| [reading-notes.md](./reading-notes.md) | 现行·教师文献精读卡集 | 第 1 课 8 篇文献按 AI 辅助阅读协议产出的精读卡，原文定位已完成，待教师复核定稿 |
| [introduction.md](./introduction.md) | 历史稿 | 2026-07-07 的 20 页方案，保留追踪设计，不参与现行制作 |
| [lecture-notes.md](./lecture-notes.md) | 历史稿 | 与旧 20 页教学包配套，仅历史追踪 |
| [assets/](./assets/) | 教学资产 | 论文图重绘、概念图等课堂用图 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- `keystone-design-spec.md` → 指导 `slides.md` 关键页的视觉设计契约。
- `reading-notes.md` → 为 `handout.md` 提供文献来源与精读卡。
- `introduction.md` / `lecture-notes.md` 是历史稿，现行制作不以之为母版（见 `slides.md` 逐页映射表，每页可追溯到 `handout.md` 现行小节）。
- `slides.pptx` 是 `slides.md` 的视觉交付，不是独立的事实来源。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（评分/提交） | [assessment.md](../../course/assessment.md)、[assignments.md](../../course/assignments.md) |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 1 课 |

## 阅读路径

- **学生**：`handout.md` → `assets/` → `course/reading-list.md` 第 1 课
- **教师**：`teaching-plan.md` → `slides.md` → `keystone-design-spec.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-05）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过 |
| 2. 内容门 | ✅ 通过（按 v2.1.0 对齐：90 分钟节奏表、首课文件清单、学习目标、课后阅读要素、链路草图产出） |
| 3. 逐页映射门 | ✅ 通过（36 页逐页映射表，每页标注 handout 小节；初版待教师复核） |
| 4. 90 分钟教学门 | 🔄 进行中（契约段已砍页 12→9 适配 8 分钟；桌面推演待续） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
