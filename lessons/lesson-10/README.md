# 第 10 课内容入口（MOC）

> AI 辅助编码、调试与受限 Agent 执行。本文件是第 10 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读：从模糊 prompt 到任务契约五字段（Context / Permission / Non-goal / 人工审核点 / 失败恢复）、权限分层与人工审核点、Agent 代码人工核验（diff 审查 / 测试先行 / 不外包判断）、修复根因 / 绕过失败 / 污染实验三区分、SWE-bench 视角、贯穿案例（承接第 9 课实验规格的一步）、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.1.0（20 页，草稿） | 逐页屏显文案、视觉结构、讲述备注、互动、时间、来源与事实边界 |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 承接第 9 课判断门：本课把第 9 课实验规格中"哪些步骤拟用 Agent、哪些步骤必须人工"标注改写为任务契约五字段，作为受限 Agent 执行的直接输入。
- 为第 11 课铺垫：本课的受限"一次执行"是第 11 课"自动化循环"（Edit → Evaluate → Keep/Discard → Repeat）的前提——没有边界的一次执行不能被安全地重复，更不能被自动化。
- 本课非正式提交门（[assignments.md](../../course/assignments.md) 第 10 课行只有"在受限权限下完成一次 Agent 辅助代码或研究任务迭代"，无正式提交）。产出回写个人项目，作为第 13 课验证门材料的过程证据。
- 任务契约写入 `agent-tasks/`（本课新建目录），代码 diff 与失败日志写入 `experiments/*/agent-traces/`，AI 使用记录沿用第 1 课最小字段。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md)、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（提交/门） | [assessment.md](../../course/assessment.md)（学术规范红线）、[assignments.md](../../course/assignments.md)（第 10 课非正式提交门） |
| handout（模板） | [project-template.md](../../course/project-template.md)（任务契约写入 `agent-tasks/`） |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 10 课 |

## 阅读路径

- **学生**：`handout.md` → `course/reading-list.md` 第 10 课 → 课后完善原型（不正式提交）
- **教师**：`teaching-plan.md` → `slides.md` → `course/ppt-quality-gates.md`
- **维护者**：`AGENTS.md`（项目根）→ [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06）

| 门 | 状态 |
| --- | --- |
| 1. 课次目标 | ✅ 通过（取自 `备课规划.md` 第 10 课目标段；八阶段定位阶段七"原型验证"中的受限 Agent 执行；承接第 9 课判断门，向第 11 课自动化循环输出） |
| 2. 内容门 | 🟡 草稿通过（三件套已对齐口径；讲义为内容源；关键结论绑定可核验来源——Russell & Norvig 2020 Ch 2 / Yao et al. ReAct ICLR 2023 / Amershi et al. CHI 2019 / Jimenez et al. SWE-bench ICLR 2024 / assignments.md 第 10 课非正式提交门 / assessment.md 学术规范红线；AI 输出仅作线索；待第二轮审校去 AI 痕迹与跨文档检查） |
| 3. 90 分钟教学门 | 🟡 草稿（`备课规划.md` 第 10 课段未给逐时间表，教案按默认节奏构造，与第 3、5、7、9 课风格一致；第一次学生动手 40 分钟，最小产出=任务契约五字段 + diff 审查六项 + 失败记录至少一条 + AI 使用记录一条；备用路径已标；桌面推演待续） |
| 4. 逐页映射门 | 🟡 草稿（20 页映射表已形成，每页标 handout 小节；待 90 分钟教学门通过后复核页数与时间块） |
| 5. PPT 制作 | 未开始（前四门通过后才做） |

## 待复核项

- **承接第 9 课**：第 9 课 handout §三·5 已要求实验规格中标出"哪些步骤拟用 Agent、哪些步骤必须人工"，本课 handout §五 第一步直接使用该标注。待教师在正式授课前确认学生第 9 课产出中是否已填写该标注；未填写者需在课堂内补标。
- **本课非正式提交门**：与 [assignments.md](../../course/assignments.md) 第 10 课行一致（"在受限权限下完成一次 Agent 辅助代码或研究任务迭代 | —"）。产出回写个人项目，作为第 13 课验证门材料的过程证据。
- **学术规范红线对齐**：handout §四·2 与 §六、slides P12 与 P20、teaching-plan §一与 §六均对齐 [assessment.md](../../course/assessment.md) 学术规范红线——绕过失败与污染实验列为红线，删除失败日志等同伪造记录。
- **来源核验**：四项正式书目与课堂案例的 URL/DOI 已按 [reading-list.md](../../course/reading-list.md) 第 10 课核对：
  1. Russell & Norvig 2020 Ch 2（核心，约 30 分钟）——Pearson 出版社页面
  2. Yao et al. ReAct ICLR 2023（任选，约 25 分钟）——ICLR 虚拟会议页面
  3. Amershi et al. CHI 2019（任选，约 20 分钟）——DOI 10.1145/3290605.3300233
  4. Jimenez et al. SWE-bench ICLR 2024（基准案例）——项目页面 swebench.com
- `备课规划.md` 第 10 课段是否补逐时间表（当前教案按默认节奏构造，与第 3、5、7、9 课风格一致，但非权威源给定）；
- 演示用第 9 课贯穿案例实验规格（"拟用 Agent"步骤标注）需在授课前准备可投屏版本；
- 演示用任务契约样例（`generate_summary()` 任务五字段）需在授课前准备可投屏版本；
- 演示用 diff 样例（一段授权修改 + 一段越权修改）需在授课前准备；
- 演示用失败记录样例（Agent 越权请求 + 拒绝 + 记录）需在授课前准备可投屏版本；
- 20 页是否在桌面推演后调整页数密度（第 3、5、6、7、9 课同为 20 页，第 1 课 33 页）；
- 与第 11 课的衔接点：本课"一次执行"如何扩展为第 11 课"Edit → Evaluate → Keep/Discard → Repeat"循环，任务契约五字段中哪些字段需要为循环增加"预算"与"停止条件"字段；
- 贯穿案例是否需要在第 9-10 课之间保持一致（当前沿用第 1 课证据追踪表 / 第 5 课结构化阅读卡 / 第 7 课实验规格草图 / 第 9 课判断门材料同一案例族）；
- [project-template.md](../../course/project-template.md) 是否需要新增 `agent-tasks/` 目录字段（当前模板未显式列出该目录，本课新建）。

制作顺序与材料状态表见 [lessons/README.md](../README.md)。
