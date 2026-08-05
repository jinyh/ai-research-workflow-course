# 开课评审试讲归档

最后检查：2026-08-05

本目录保留全部开课评审试讲版本及其内容源、讲述材料、构建脚本和判断记录。课程已经批准，这些材料只用于历史追踪和后续复盘，不属于任何一次课的正式讲义、教师教案或正式课堂 PPT。

## 试讲版本

| 版本 | 页数 | 角色 | 已知情况 |
| --- | ---: | --- | --- |
| [20 分钟试讲逐页大纲](./trial-lecture-outline.md) | 12-14 页规划 | 内容源 | v1.3.0 历史大纲，包含课程定位、Transformer 微型课堂和讲述重点 |
| [2026-06-12 初版](./trial_lecture_ai_research_methods_20260612_135401.pptx) | 14 | 初始完整版本 | 后续 SJTU 视觉版的来源基线 |
| [2026-06-14 SJTU 视觉版](./trial_lecture_ai_research_methods_sjtu_visual_full_20260614.pptx) | 15 | 视觉探索版本 | 含“待补充”占位内容，不应直接交付 |
| [2026-06-14 三页试讲](./trial_lecture_3page_teaching_20260614/exports/intelligent_research_methods_3page_teaching.pptx) | 3 | 独立短时教学版本 | 同目录保留 PDF、讲者提示、页面提示词、构建脚本和 QA 记录 |
| [2026-06-15 基准版](./trial_lecture_ai_research_methods_20260615.pptx) | 15 | 推荐的试讲基准版 | LibreOffice 可完整渲染；部分程序化导入工具对图片关系的兼容性仍需复核 |
| [AI for Research 试讲候选版](<./AI for Research试讲.pptx>) | 16 | 更新候选版 | 末尾存在两页功能相近的收束页，历史归档中不再裁剪 |

## 内容与来源记录

- `trial_lecture_3page_teaching_20260614/`：三页版的 PPTX/PDF、讲者提示、提示词、构建脚本、contact sheet 与 QA 记录。
- `trial_lecture_sjtu_template_20260614/`：SJTU 视觉版的构建脚本、源 Markdown、模板来源、文本验证记录与 PDF。
- 逐页渲染 PNG、解包 XML 和完全重复的 `generated/final` 页面副本位于 `.work/trial-lecture/`，可从归档内容重新生成，不纳入 Git。

## 使用约定

- 全部试讲版本均保留，不以“推荐版”为由删除其他内容。
- 正式逐课课件依据 `lessons/lesson-NN/handout.md`、`teaching-plan.md` 和 `slides.md` 重新制作，不直接覆盖或改名复用试讲文件。
- 新正式 PPT 完成后放在对应课次目录，通过质量门后的学期交付放在 `deliverables/<term>/`。
