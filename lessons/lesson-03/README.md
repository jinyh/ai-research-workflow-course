# 第 3 课内容入口（MOC）

> 文献检索与证据角色。本文件是第 3 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生正式讲义 v1.0.0 | 面向学生、可脱离课堂独立阅读：外部输入类型、检索式构建、证据角色四类、AI 回原文核验、候选文献表、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案 v1.0.0 | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.4.0（20 页） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |
| [slides.pptx](./slides.pptx) | 现行·正式课堂 PPT（20 页） | 继承交大模板母版与版式；已通过技术、教学与视觉检查 |
| [keystone-design-spec.md](./keystone-design-spec.md) | 规范 v1.1.0 | 10 个风险触发关键页的设计契约、模板例外与制作约束 |
| [source-audit-demo.md](./source-audit-demo.md) | 现行·教学资产 v1.0.0 | Keshav 2007 真实 Crossref—DOI—原文—候选表 trace，含断网备用记录 |

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

## 门控状态（2026-08-07）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 备课规划 第 3 课目标段；八阶段定位阶段四"外部输入摄取"） |
| 2. 内容门 | ✅ 通过（三件套统一四态与进入规则；P13-P15 使用真实 Keshav 2007 trace，P16 虚构失败案例屏显/notes 双标；正式讲义与教案状态已转现行） |
| 3. 90 分钟教学门 | ✅ 通过（P02 约 2:30 首次短互动；P18 48:00 开始 27 分钟持续实践；最低产出为 1 条检索记录 + 2 条审计 + 1 条已核验候选记录 + 1 条 AI 记录；断网备用路径使用 source-audit-demo.md） |
| 4. 逐页映射门 | ✅ 通过（20 页映射表已复核，每页标 handout 小节；无合并故无行变更；90 分钟表页码列同步） |
| 5. PPT 制作 | ✅ 完成（20 页正式 PPT；继承交大模板母版、版式、字体与品牌元素；每页含 `[Sources]` speaker notes） |
| 6. 三重检查 | ✅ 通过（技术：20/20 notes、模板层级、画布边界 0 越界、LibreOffice 重开导出 20 页；教学：与 8 段 90 分钟节奏、课堂产出和逐页母稿一致；视觉：全页 contact sheet 与高风险页复核通过） |
| 7. 里程碑归档 | ✅ 无需单独归档（本次为首个正式版本，现行 `slides.pptx` 直接作为正式基线） |

## 授课前复核

- 复核 Crossref 和滑铁卢大学公开 PDF 链接可访问；若不可访问，使用 `source-audit-demo.md` 的已核验记录，不伪造现场检索。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
