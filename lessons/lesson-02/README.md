# 第 2 课内容入口（MOC）

> 科研伦理、Agent 权限、研究工件与追踪。本文件是第 2 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义 v1.2.0 | 面向学生、可脱离课堂独立阅读的正式讲义：概念、方法、案例、练习、术语、来源入口 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案 v1.2.0 | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v1.2.0（33 页） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 三件套共用同一套案例（未公开合作稿、生成数据、评价协议）和同一套规范源（中国科学院《诚信提醒》、上海交通大学《关于在教育教学中使用 AI 的规范》、NASEM *Fostering Integrity in Research* Chapter 2、Saltzer & Schroeder 1975）。
- **规范映射口径**：校级“禁止／限制／鼓励／开放”四分类 → 任务级“禁止／有条件允许／允许”三档（“限制”落为“有条件允许”，“鼓励／开放”仍须服从材料授权、课程要求和披露责任）。
- **90 分钟节奏**：对齐 `备课规划.md` v2.1.0 第 2 课目标表——0-5 回看第 1 课 diff/log、5-18 案例与规范、18-30 风险卡、30-42 权限矩阵、42-55 教师演示、55-78 个人实践、78-86 同伴互查、86-90 退出。工件状态与日志内容融入教师演示段，任务契约与配置对比融入权限矩阵段。
- **学习目标 5 条**：三件套统一（识别风险 → 三档判断+五字段理由 → 四原则填写权限矩阵 → 工件四状态 → 日志可追溯）。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)（第 2 课定位：全链路约束） |
| teaching-plan（节奏口径） | [备课规划.md](../备课规划.md) 第 2 课段 v2.1.0 目标表 |
| teaching-plan（评分/提交） | [assessment.md](../../course/assessment.md)、[assignments.md](../../course/assignments.md) |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 2 课 |
| 项目模板 | [starter-template.md](../../course/starter-template.md)（agent-permissions / ethics-and-compliance / artifact-tracking / ai-usage-log 四工件） |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 2 课 → 个人项目中四项工件（`agent-permissions.md`、`ethics-and-compliance.md`、`artifact-tracking.md`、`ai-usage-log.md`）
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md` → `备课规划.md` 第 2 课段
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过 |
| 2. 内容门 | ✅ 通过（按 v2.1.0 对齐：90 分钟节奏表、校级→任务级规范映射、学习目标 5 条统一、课后阅读四要素、来源入口齐全） |
| 3. 90 分钟教学门 | ✅ 通过（gate 3-4 收尾：33→29 页合并 4 处权限/工件段页，每页时间重排到 v2.1.0 段 0:00-90:00；首次学生动手 P03 5:00、最小产出风险卡+权限矩阵+AI记录、备用路径 Markdown 直编） |
| 4. 逐页映射门 | ✅ 通过（29 页逐页映射表，合并页 handout 引用已合并） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
