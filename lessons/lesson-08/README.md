# 第 8 课内容入口（MOC）

> 学生研究方案分享与设计诊所。本文件是第 8 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：3 分钟陈述五段结构、同伴互查 rubric（可检验性/证据/可行性/边界）、同伴互查三问、设计诊所流程（诊断方案不打分）、反馈记录表与采纳决策（六字段）、与第 9 课判断门衔接、AI 只作反馈线索、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.1.0（18 页，草稿） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 承接第 7 课机制假设与实验规格：本课把第 7 课的机制假设列表、研究判断记录初版和实验规格草图压缩为 3 分钟陈述，并暴露给同伴按 rubric 质询。
- 承接第 6 课问题门产出：3 分钟陈述第 1 段"研究问题"以第 6 课 `problem-definition.md` 为内容源；陈述起点是问题门收敛后的可证伪命题，不是重新选题。
- 为第 9 课判断门铺垫：本课产出的"同伴反馈处理记录"和"至少 2 条研究判断（采纳决策）"是判断门材料之一（[assignments.md](../../course/assignments.md) Checkpoint 2 第 4、6 项）；四维度 rubric 是判断门条件的可操作预检。
- 强调：本课是形成性活动，不新增正式提交、不计周作业分（[assignments.md](../../course/assignments.md) "第 8 课"段；v2.1.0 变更记录）。同伴反馈只作输入，采纳决策由作者本人作出并记录理由。
- 采纳决策表写入个人项目 `hypothesis-and-design.md`（或沿用 `starter-template.md` 对应小节），合并到研究判断记录，第 9 课随判断门统一检查。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)、[assignments.md](../../course/assignments.md)（"第 8 课"段、Checkpoint 2 判断门条件——权威来源） |
| handout（rubric 对齐判断门） | [assignments.md](../../course/assignments.md) Checkpoint 2 |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 8 课 |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 8 课（Booth et al. 选段，约 20 分钟）
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 `备课规划.md` 第 8 课目标段；八阶段定位"阶段三+六+七草案的跨同学外部校准"，承接第 7 课机制假设与实验规格，为第 9 课判断门铺垫；形成性活动不正式提交） |
| 2. 内容门 | 🟡 草稿通过（三件套已对齐口径；讲义为内容源；关键结论绑定可核验来源——Booth et al. / Whitesides / Peyton Jones / assignments.md 判断门条件；AI 输出仅作线索；待第二轮审校去 AI 痕迹与跨文档检查） |
| 3. 90 分钟教学门 | 🟡 草稿（节奏表对齐默认节奏与第 8 课目标；`备课规划.md` 第 8 课段未给逐时间表，教案按默认节奏与"每人 3 分钟陈述 + 2 分钟同伴反馈"构造；第一次学生动手 40 分钟，最小产出=分享页+反馈记录表+采纳决策表 2 条（含 1 采纳 1 拒绝/暂缓）+判断门预检缺口清单+一条 AI 使用记录；备用路径已标；桌面推演待续） |
| 4. 逐页映射门 | 🟡 草稿（18 页映射表已形成，每页标 handout 小节；待 90 分钟教学门通过后复核页数与时间块） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- `备课规划.md` 第 8 课段是否补逐时间表（当前教案按默认节奏构造，与第 6、7 课风格一致，但非权威源给定）；
- 演示用第 7 课输出样例（贯穿案例：结构化阅读卡与 AI 摘要限定条件遗漏率，含主机制假设、A1/A2/A3 替代假设、实验规格草图、研究判断初版）需在授课前准备实际可投屏版本；
- 演示用"教师扮演同伴"三问反馈样例（含 1 条对齐 rubric、1 条泛化判断如"baseline 不公平"未指明、1 条指向方案中不存在的条目如"没说样本量"）需在授课前准备；
- 反馈记录表模板、采纳决策表模板、判断门条件预检表需在授课前准备可投屏版本；
- 固定同伴组分组名单与轮次表需在授课前确认；
- 18 页是否在桌面推演后调整页数密度（第 6、7 课同为 20 页，第 1 课 33 页）；
- 互查节奏是否超时：4 人组 20 分钟一轮，21-40 人班级按组数并行，需在桌面推演中确认两轮或单轮；
- 与第 9 课判断门的衔接点：判断门材料包（baseline、实验规格完整字段、复现说明、迁移到 project-template.md）的迁移路径是否在 slides P18 进一步细化；
- 与第 7 课的衔接点：第 7 课产出（机制假设列表、研究判断初版、实验规格草图）到第 8 课 3 分钟陈述五段的对应是否在 slides P05 进一步细化；
- 贯穿案例是否需要在第 7-9 课之间保持一致（当前沿用第 1 课证据追踪表 / 第 5 课结构化阅读卡同一案例族）；
- `hypothesis-and-design.md` 字段模板是否需要根据本课新增"采纳决策表"段更新 [starter-template.md](../../course/starter-template.md)。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
