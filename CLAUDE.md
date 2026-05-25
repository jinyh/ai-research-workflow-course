# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个研究生课程设计项目，不是软件工程项目。核心产出是"智能科研方法"（AI for Research: Methods and Practice）课程的完整申报材料集，面向上海交通大学 CS/AI 研究生，2 学分 / 32 学时 / 专业选修课。

## 目录结构

- `ai-research-workflow-course/`：课程材料主目录
  - `README.md`：课程定位、方法论框架、适用对象、学习目标和产出总览
  - `syllabus.md`：16 次课教学安排（按八阶段研究链路组织，含阶段标注）
  - `course-proposal.md`：新开课立项说明草案（论证开课必要性）
  - `application-form-draft.md`：对照 SJTU 研究生课程开设申请表的中英文填报草案
  - `assessment.md`：考核方式、评分细则、验收条件和门条件
  - `assignments.md`：16 周作业安排和 4 个研究门检查点
  - `starter-template.md`：早期研究脚手架模板（第 1-7 周使用，轻量问题定义和工件追踪）
  - `project-template.md`：学生期末项目完整模板（第 8 周后使用，含工件状态追踪表）
  - `ethics-and-compliance-template.md`：科研伦理与合规说明模板
  - `resources.md`：工具、案例、方法论参考和参考资源索引
  - `reference-analysis.md`：ref/ 资料、培养方案、外部参考和方法论框架选择依据的提炼
- `ref/`：参考资料（AutoResearch 链接汇总等）
- `applied/`：已提交的申请材料原件（培养方案 Excel、申请表 docx），不纳入 git 管理

## 关键设计原则

1. 课程按**八阶段研究链路**组织（问题定义→第一性原理→机制假设→外部输入摄取→证据整理→研究判断→原型验证→回写与表达），不是按 AI 工具清单组织
2. 研究方法论框架来自 harness-research 项目，但已通用化适配（详见 `reference-analysis.md` 第 4 节）
3. 研究工件有标准格式和四状态生命周期（draft→review→approved→stable），研究推进有门条件
4. 证据分级与三角验证：稳定结论至少需要三类证据（理论+实践+对比）中的两类支撑
5. 四个研究门（问题门、判断门、验证门、论证门）对应四个阶段检查点
6. 结论必须可追溯到证据和决策，不能凭空写入论文式短文
7. 通用科研工作流占 70%-80%，ML 实验自动化占 20%-30%
8. 科研伦理不是附加章节，而是贯穿选题、数据、实验、写作、署名、开源和 AI 使用披露的基本约束
9. AI 使用记录、人工核验方式和科研伦理与合规说明是正式考核材料
10. 所有文档必须中英文对照（SJTU 申请表要求）

## 项目状态

课程申报材料初稿已完成（全部 11 个文档）。当前阶段：内容审校与一致性检查。

## 环境说明

纯 Markdown 文档项目，无构建步骤。编辑工具不限，确保 UTF-8 编码即可。`ref/` 目录含 Excel/docx 原始参考资料，仅供查阅不做编辑。

## 常用操作

```bash
# 验证所有 markdown 文件中的内部链接是否有效
grep -rn '\[.*\](.*\.md)' ai-research-workflow-course/ | while read line; do
  file=$(echo "$line" | sed 's/:.*//')
  dir=$(dirname "$file")
  link=$(echo "$line" | grep -o '([^)]*\.md)' | tr -d '()')
  [ -n "$link" ] && [ ! -f "$dir/$link" ] && echo "BROKEN: $file -> $link"
done

# 检查 syllabus 中的课次编号是否连续（1-16）
grep -c '^### 第.*课' ai-research-workflow-course/syllabus.md

# 快速查看所有文档的版本号
grep -n '^版本\|^Version\|^v[0-9]' ai-research-workflow-course/*.md
```

## 文档版本管理

按 CLAUDE.md 全局规则执行：需求/规划/设计/提案文档使用 `v[major].[minor].[patch]` 版本号，重大编辑前归档到 `docs/archive/`。

## 编辑注意事项

- 修改任何课程文档时，确保中英文内容同步更新（`application-form-draft.md` 中的中英文大纲必须一致）
- 修改 `syllabus.md` 的课次安排时，同步检查 `assignments.md` 的周作业和 `assessment.md` 的评分项是否对应
- 修改研究链路阶段标注时，同步更新 syllabus、assignments、application-form-draft 中英文大纲
- 修改门条件时，同步更新 assignments.md 检查点、assessment.md 验收条件和 project-template.md 回写条件
- 保持文件间的交叉引用链接有效（README 中列出的所有文件链接）
- `reference-analysis.md` 记录了设计决策依据，修改课程核心定位时应先更新该文件

## 注意事项

- `AGENTS.md` 当前是 CLAUDE.md 的副本，如无独立用途建议删除
- `ref/` 中的 `~$` 开头文件是 Office 临时文件，不应纳入版本管理
- `applied/` 目录存放已提交原件，整个目录应加入 `.gitignore`
- 项目尚未初始化 git，建议初始化时添加 `.gitignore` 排除 `applied/`、`~$*`、`.DS_Store`