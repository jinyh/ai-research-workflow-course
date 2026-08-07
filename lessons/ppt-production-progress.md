---
版本：v0.5.0
最后更新：2026-08-07
文档类型：正式课堂 PPT 制作进度记录
状态：进行中
---

# 正式课堂 PPT 制作进度

本文件用于在连接中断、模型容量不足或会话切换后恢复制作。课程事实和门控状态仍以各课 `README.md`、`handout.md`、`teaching-plan.md`、`slides.md` 和 `course/` 权威源为准；本文件不新增课程口径。

## 已完成

### 第 8-16 课

- 9 套正式 PPT 已完成，共 161 页：第 8-16 课依次为 14、20、16、19、20、19、17、16、20 页。
- 已通过：161/161 `[Sources]` notes、9/9 关键页设计规格、模板映射与保真、空 placeholder 0、默认 prompt 0、PPTX ZIP 完整性、画布边界检查、逐页视觉检查与 LibreOffice 最终磁盘重开复渲染。
- 第 8 课反馈口径已统一为“四个诊断维度 + 一个行动性检查”；第 11 课固定 AutoResearch 分析版本并收紧 AI Scientist 事实边界；第 12、14、16 课旧时间/门控状态已同步；第 15 课单轮互评要求已收敛到可执行范围。
- 各课已回写 `README.md`、必要的三件套同步、关键页规格和 QA 台账；现行 `slides.pptx` 作为首个正式基线，不另建重复归档副本。

### 第 5 课

- 19 页正式 [slides.pptx](./lesson-05/slides.pptx) 已制作。
- 已通过：19/19 `[Sources]` notes、模板映射与保真、空 placeholder 0、`outOfBounds = 0`、PPTX ZIP 完整性、LibreOffice 重开导出 19 页、全页与高风险页视觉检查。
- 证据地图统一为直接/补充/冲突/空白四视图；P12-P15 在画面与 notes 标注虚构教学样例；P17 保留 27 分钟最小综述闭环。
- 已回写 `README.md`、`teaching-plan.md`、`slides.md`、关键页规格、总导航和 QA 台账。

### 第 6 课

- 20 页正式 [slides.pptx](./lesson-06/slides.pptx) 已制作。
- 已通过：20/20 `[Sources]` notes、模板映射与保真、空 placeholder 0、`outOfBounds = 0`、PPTX ZIP 完整性、LibreOffice 重开导出 20 页、全页与高风险页视觉检查。
- P05/P13/P15 在画面与 notes 标注虚构教学样例；P14 完整呈现问题门八项条件；P15 明确第 3-6 课累计核对而非单课自动产出；P17 保留 17 分钟持续实践。
- 已回写 `README.md`、`teaching-plan.md`、`slides.md`、关键页规格、总导航和 QA 台账。

### 第 2 课

- 29 页正式 [slides.pptx](./lesson-02/slides.pptx) 已制作。
- 已通过模板继承、notes、画布边界、LibreOffice 重开、全页视觉和高风险页检查。
- 已回写 `README.md`、`slides.md`、总导航和 QA 台账。

### 第 3 课

- 20 页正式 [slides.pptx](./lesson-03/slides.pptx) 已制作。
- 已通过：20/20 `[Sources]` notes、模板版式继承、`outOfBounds = 0`、LibreOffice 重开 20 页、全页 contact sheet 和高风险页视觉检查。
- 已建立 [keystone-design-spec.md](./lesson-03/keystone-design-spec.md)，并回写第 3 课三件套、门控状态和总导航。

### 第 4 课

- 17 页正式 [slides.pptx](./lesson-04/slides.pptx) 已制作。
- 已通过：17/17 `[Sources]` notes、模板 master/layout 与保真检查、空 placeholder 0、`outOfBounds = 0`、PPTX ZIP 完整性、LibreOffice 从正式路径重开导出 17 页、全页和高风险页视觉检查。
- P11-P13 在画面与 notes 均标注“虚构教学样例｜非真实论文证据”；P15 保留 27 分钟持续项目实践；P17 明确阅读卡到证据地图与问题门的迁移路径。
- 已回写 `README.md`、`teaching-plan.md`、`slides.md`、关键页规格、总导航和 QA 台账。

### 第 7 课

- 16 页正式 [slides.pptx](./lesson-07/slides.pptx) 已制作。
- 已通过：16/16 `[Sources]` notes、模板映射与保真、空 placeholder 0、`outOfBounds = 0`、LibreOffice 重开导出 16 页、全页和高风险页视觉检查。
- P14 保留 25 分钟最小闭环（`1 主 + 1 个可区分替代`）；P15 对齐 `assignments.md` 五个权威反馈维度；P16 明确第 8-9 课迁移路径。
- 已回写 `README.md`、`teaching-plan.md`、`slides.md`、关键页规格、总导航和 QA 台账。

## 当前进行中

- 无正式 PPT 构建进程运行。第 1-16 课均已有现行正式课堂 PPT。

## 中断说明

- 第 1-16 课正式 PPT 构建进程均已结束；恢复时从各课 README 和 `.work/ppt/lesson-NN/.../qa-ledger.txt` 查看最终验证结果。

## 推荐恢复顺序

1. 第 5-6 课授课前在实际 PowerPoint 与教室投影环境做最终放映检查。
2. 如替换虚构教学样例为真实论文、检索或实证材料，重新核验来源、许可、检索记录、notes 与三重检查。
3. 课堂实授后按讲后复盘记录调整节奏或素材；任何修改都重新执行对应课次三重检查。

## 已知全局风险

- `scripts/check_links.py` 当前通过所有受跟踪 Markdown 内部链接；仅有一条与本任务无关的历史归档本地资料告警。
- 部分课次的 Presentations `slides_test.py` 因本机缺少 `numpy` 未运行；已用 Artifact Tool layout/fidelity、ZIP/XML 审计和 LibreOffice 重开复渲染替代，不新增项目依赖。
- Codex App 曾出现本地 IPC `write EPIPE / ipc-connection-reset`；这与 PPT 内容无关。完成当前批次后应完全退出并重开 App；若持续出现 `401`，需要重新认证。
