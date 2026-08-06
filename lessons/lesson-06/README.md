# 第 6 课内容入口（MOC）

> 问题定义、第一性原理与问题门。本文件是第 6 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：从研究空白到结构性问题、非例边界、可证伪命题写法、第一性原理推导（含适用边界）、问题门提交清单（对齐 assignments.md 与 starter-template.md）、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.2.0（20 页，草稿） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 承接第 5 课证据地图与研究空白：本课把第 5 课通过三步检验的研究空白候选收敛为可检验问题。第 5 课 G1（缺角空白"阅读卡是否强制定位原文→降低遗漏"）在本课改写为结构性研究问题。
- 为第 7 课机制假设铺垫：本课第一性原理推导的"待验证前提"将成为第 7 课机制假设的直接输入；可证伪命题的推翻条件将成为第 7 课实验设计的依据。
- 问题门提交指向当前个人项目版本（链接/tag/压缩包），不重复制作汇报文档。`problem-definition.md` 字段对齐 [starter-template.md](../../course/starter-template.md) §3。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)、[assignments.md](../../course/assignments.md)（Checkpoint 1 问题门条件——权威来源） |
| handout（第一性原理边界） | [备课规划.md](../备课规划.md) 执行原则 9、[AGENTS.md](../../AGENTS.md) 证据标准 |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 6 课 |
| 问题定义字段 | [starter-template.md](../../course/starter-template.md) §3 |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 6 课 → 课后提交问题门材料包
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 备课规划 第 6 课目标段；八阶段定位阶段一"问题定义"+阶段二"第一性原理分析"，承接第 5 课研究空白，向第 7 课机制假设输出） |
| 2. 内容门 | ✅ 通过（三件套已对齐口径；讲义为内容源；关键结论绑定可核验来源——Booth et al. / Platt / Hamming / 胡晓峰 / assignments.md 门条件；AI 输出仅作线索；第一性原理适用边界对齐 备课规划 执行原则 9 与 AGENTS.md 证据标准；保守审校完成——判断句降格 4 处 P02/P05/P06/P19 改指引式、保留 4 处张力 P04/P09/P11/P18、P14 门条件第 4 项术语对齐 assignments"直接证据/补充证据/冲突/空白"；handout 正文/案例/证据/门条件清单未动） |
| 3. 90 分钟教学门 | ✅ 通过（页量预算对照备课规划第 6 课权威 5 段 0-25/25-40/40-60/60-78/78-90，无段超页、未合并、保留 5 时间段与 6 内容块；每页建议时间按段内均分重排——P01-P10 各 2.5 分钟、P11-P15 各 3 分钟、P16 说明 40:00-43:00 + P17 停留 43:00-60:00、P19-P20 各 6 分钟，首页 0:00、末页 90:00；第一次学生动手 40 分钟，最小产出=problem-definition 更新版+第一性原理推导初版；备用路径已标） |
| 4. 逐页映射门 | ✅ 通过（20 页映射表复核完成，无重编号——页量预算判定无段超页故未合并；每页标 handout 小节；90 分钟节奏表页码列与正文页码引用同步） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- **问题门条件对齐**：handout §五·2 的 8 项门条件与 [assignments.md](../../course/assignments.md) Checkpoint 1 逐项对齐，已核对一致。slides P14 门条件第 4 项术语已对齐 assignments（"直接证据/补充证据/冲突/空白"）。提交方式（链接/tag/压缩包）、未通过处理（一周内修订、不扣重分）和评分维度（"文献与问题定位"25%）均对齐。待教师在正式提交前复核。
- 演示用 problem-definition.md 完整版样例需在授课前准备实际可投屏版本；
- 演示用失败案例（主题当问题、第一性原理脱离文献）需在授课前准备；
- 20 页密度与 90 分钟节奏的桌面推演（第 5 课同为 20 页，第 1 课 33 页）；
- 与第 7 课的衔接点：第一性原理推导的待验证前提 → 机制假设 → 实验规格的转换路径是否在 slides P20 进一步细化；
- `problem-definition.md` 字段模板是否需要根据本课新增"第一性原理推导"段更新 [starter-template.md](../../course/starter-template.md) §3。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
