---
版本：v1.0.0
最后更新：2026-08-07
适用课次：第 3–4 课
文档类型：真实来源核验演示包
---

# Keshav 2007：检索—DOI—原文 trace

## 1. 检索记录

| 字段 | 记录 |
| --- | --- |
| 查询 | `title:"How to Read a Paper" author:Keshav` |
| 核验源 | Crossref works API |
| 核验日期 | 2026-08-07 |
| 用途 | 核对文献身份，再回原文核验主张 |

## 2. Crossref 元数据核对

| 字段 | Crossref 记录 |
| --- | --- |
| 题名 | *How to Read a Paper* |
| 作者 | S. Keshav |
| 刊名 | *ACM SIGCOMM Computer Communication Review* |
| 年份 | 2007 |
| 页码 | 83–84 |
| DOI | `10.1145/1273445.1273458` |
| DOI 入口 | https://doi.org/10.1145/1273445.1273458 |
| Crossref 记录 | https://api.crossref.org/works/10.1145/1273445.1273458 |

## 3. 回到原文

滑铁卢大学公开 PDF：https://cs.uwaterloo.ca/~Brecht/courses/856/readings/how-to-read/keshav-paper-reading.pdf

在第 1 页核对：

- 文章的直接任务是提出一种三遍阅读方法；
- 文章解释每一遍阅读的目标与关注点；
- 本页不是一个报告“效率提高 50%”的对照实验结果页。

## 4. 候选表记录

| 题名 | 来源 | 证据角色 | 纳入理由 | 状态 | 允许主张 |
| --- | --- | --- | --- | --- | --- |
| *How to Read a Paper* | DOI `10.1145/1273445.1273458` | 方法线索（具体角色依项目而定） | 用于定义三遍阅读法 | `verified-with-caveat` | 文章提出一种三遍阅读法；未提供受控效果实验 |

该条目可进入候选表或证据主格，但必须同行保留“实践方法文章，未提供受控效果实验”的限定，且不得单独支撑 `stable`。不允许从这条记录推出“该方法经对照实验证明提高某个百分比的阅读效率”。

## 5. 断网备用时如何记录

学生可以使用本文档完成 1 条真实来源核验，但必须在 AI 使用记录中写明“未执行现场检索：使用教师已核验的离线 trace”。自有主题的候选条目若尚未回原文，继续标为 `pending`。
