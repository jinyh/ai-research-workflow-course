# 第 12 课内容入口（MOC）

> Agent/Skill 背后的逻辑与个人工作流设计。本文件是第 12 课所有材料的导航入口，说明各文件角色、关系与阅读路径。门控流程见 [prepare-course-lesson skill](../../.agents/skills/prepare-course-lesson/SKILL.md)。

## 文件清单

| 文件 | 角色 | 用途 |
| --- | --- | --- |
| [handout.md](./handout.md) | 现行·学生讲义（草稿） | 面向学生、可脱离课堂独立阅读的正式讲义：八要素深度分析、个人工作流设计、评价机制、练习、术语、延伸阅读 |
| [teaching-plan.md](./teaching-plan.md) | 现行·教师教案（草稿） | gate1 定位、gate3 90 分钟流程、PPT 执行索引、演示脚本、课堂产出验收、讲后复盘 |
| [slides.md](./slides.md) | 现行·逐页母稿 v0.2.0（20 页草稿） | gate4 逐页六段：屏显内容、视觉结构、教师讲述备注、互动、建议时间、来源与事实边界；按权威 8 段逐时间表 re-fit |

## 文件关系

- **三件套（口径唯一）**：`handout.md`（教什么）↔ `teaching-plan.md`（怎么教）↔ `slides.md`（逐页屏显）。讲义是内容源，教案不替代讲义，slides 不自造事实。
- 本课承接第 10-11 课（受限编码、受限循环），把"用一次 Agent"升级为"看懂并设计可审计工作流"。
- 本课为第 13 课验证门铺垫：个人 Agent Workflow 是验证门产出之一。
- 第 11 课材料尚在草稿，本课按 `备课规划.md` 与 syllabus 推断其口径，待第 11 课定稿后复核承接段。

## 关联课程文档

| 本课文件 | 对应 `course/` 权威源 |
| --- | --- |
| handout / slides | [syllabus.md](../../course/syllabus.md) 第 12 课、[curriculum.md](../../course/curriculum.md) |
| teaching-plan（定位/提交） | [assignments.md](../../course/assignments.md) 验证门条件、[assessment.md](../../course/assessment.md) |
| slides（视觉规则） | [ppt-quality-gates.md](../../course/ppt-quality-gates.md)、[ppt-design-criteria.md](../ppt-design-criteria.md) |
| 跨文档同步 | [sync-rules.md](../../course/sync-rules.md) |
| 阅读书目 | [reading-list.md](../../course/reading-list.md) 第 12 课 |

## 阅读路径

- **学生**：`handout.md` → [第 1 课讲义 §四](../lesson-01/handout.md) → [reading-list.md 第 12 课](../../course/reading-list.md)
- **教师**：`teaching-plan.md` → `slides.md` → [ppt-design-criteria.md](../ppt-design-criteria.md) → [ppt-quality-gates.md](../../course/ppt-quality-gates.md)
- **维护者**：[AGENTS.md](../../AGENTS.md) → [备课规划.md](../备课规划.md) → 本 README → 各文件

## 门控状态（2026-08-06，草稿）

- [x] **gate1 备课规划定位**：第 12 课目标、八阶段定位（阶段七原型验证·工作流设计子阶段）、模块归属已对齐 `备课规划.md`、`syllabus.md`、`curriculum.md`。
- [x] **gate2 内容门（三件套草稿，v0.2.0 保守审校）**：`handout.md`、`teaching-plan.md`、`slides.md`（§一 + 逐页六段草稿）、`README.md` 已建立；引用同一套课程规则、同一批案例、同一来源口径；讲义面向学生可独立阅读；教案不替代讲义；本课无正式提交、课后推进到第 13 课验证门；来源入口齐全（Wooldridge & Jennings 1995、van der Aalst 2003、Anthropic *Building Effective Agents*、MCP Architecture、AutoResearch、Lu et al. 2026）。slides v0.2.0 已去 meta 自白、标题腔降格（保留 P01/P02/P08 三处张力），未动 handout 正文/案例/证据。
- [x] **gate3 90 分钟教学门（草稿，v0.2.0 re-fit）**：`teaching-plan.md` §四 90 分钟流程表 + `slides.md` §一节奏表，时段、页码、环节、产出对齐 `备课规划.md` 第 12 课权威 8 段逐时间表；30 页 re-fit 至 20 页，per-page 时间按段内均分重排。
- [x] **gate4 逐页映射门（草稿，v0.2.0 重编号）**：`slides.md` §一逐页映射表 20 页每页标明 handout 内容母稿位置；逐页六段（屏显内容/视觉结构/教师讲述备注/互动/建议时间/来源与事实边界）已填草稿级；修正旧 P15/P16 错归段（工件/Evals 从"何时不用"段回归八要素拆解段）。
- [ ] **PPT 制作**：尚无正式 PPT，待 90 分钟教学门与逐页映射门复核后制作。
- [ ] **三重检查**：待教师复核后进行内容、教学、技术检查。
- [ ] **里程碑归档**：待定稿后归档。

## 待复核项

1. **第 11 课承接**：第 11 课讲义尚不存在，本课承接段按 `备课规划.md` 与 syllabus 推断，待第 11 课定稿后复核衔接表述。
2. **演示对象选择**：teaching-plan 与 slides 假设以 AutoResearch 或课程案例池 MCP server 作为拆解对象，需教师圈定并固定 commit/版本。
3. **贯穿案例虚构性标注**：handout §五与 slides P14 的"每周证据地图更新"为虚构教学情境，须在课堂讲述中明确标注，不得被后续材料当作真实研究结论。
4. **页量与节奏微调**：slides v0.2.0 已 re-fit 至 20 页对齐权威 8 段，八要素段 P03-P08 共 6 页 14 分钟、设计段 P11-P14 共 4 页 18 分钟，需在 PPT 制作前验证段内均分是否与教师讲述节奏匹配。
5. **阅读书目核验**：Wooldridge & Jennings 1995 与 van der Aalst 2003 的 DOI/链接需在授课前核验有效性；Anthropic *Building Effective Agents* 与 MCP Architecture 须标注为工程经验/协议文档而非经典理论。
6. **验证门条件对齐**：handout §四与 assignments.md 验证门十条门条件逐条对齐，需教师复核覆盖完整性。
7. **PPT 设计准则**：slides 视觉结构已按 ppt-design-criteria 反卡片准则起草（主视觉优先真实研究工件、轮廓轮换、密度双轨），关键页（P02/P05/P06/P14/P15/P16）需在制作前填四字段设计契约。
