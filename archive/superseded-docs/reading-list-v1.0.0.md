# 逐课参考阅读清单

版本：v1.0.0
最后更新：2026-07-29

本清单为 16 次课精选参考阅读，不是要求学生逐篇全文通读的文献堆栈。每课通常安排 1 篇核心阅读，其余作为任选阅读、课堂节选或教师备课材料。书籍、长报告和演讲稿均应指定章节或页段，不布置整本阅读。

## 使用原则

- 每课 3-4 条，不超过 5 条；默认“核心阅读 1 篇 + 任选阅读 1 篇”，其余供课堂节选或教师备课。
- 原始论文、官方规范、上游项目和作者原稿优先；转载 PDF 和二手整理只用作教学案例，关键结论须回到原始来源。
- 同一经典材料可以跨课复用，但必须指定不同阅读范围和问题，避免重复增加负担。
- `references/library/research-method/` 中的材料版权与再分发许可尚未逐项确认。正式发给学生前，应优先提供作者公开页或正式出版链接；本地副本默认仅供备课。
- 快速演进的 Agent、MCP、基准和上游项目应在开课前复核版本；课堂考核不绑定特定产品版本。

标记说明：

- **核心**：建议全班课前阅读。
- **任选**：学生按项目需要选读。
- **课堂节选**：教师选取少量页段或案例在课堂共同分析。

## 第 1 课：AI 辅助科研导论、OpenCode 与八阶段研究链路

1. **核心**：[Wang et al., *Scientific discovery in the age of artificial intelligence*](https://www.nature.com/articles/s41586-023-06221-2)。阅读引言、总览图和与本人研究方向相关的一节；用于识别 AI 介入科研链路的位置与边界。本地正式版见 [PDF](../../references/library/papers/s41586-023-06221-2.pdf)。
2. **任选**：Hamming, *You and Your Research*。只读“重要问题、研究品味与工作方式”相关段落；用于讨论“效率提高”与“值得研究”不是同一个问题。本地材料见 [《科研经验集锦》中的 Hamming 节选](<../../references/library/research-method/how to think/科研经验集锦 .pdf>)。
3. **课堂节选**：[Terence Tao, *Mathematics in the Age of AI*](../../references/library/talk/age-of-ai-icm-2026.pdf)。选取 AI 使用层级、证明消化链和披露相关页面；作为“AI 改变研究动作但不替代研究责任”的跨学科案例。

## 第 2 课：科研伦理、Agent 权限、研究工件与追踪

1. **核心**：[中国科学院学部科学道德建设委员会《关于在科研活动中规范使用人工智能技术的诚信提醒》](https://www.cas.cn/sygz/202409/t20240910_5031186.shtml)。重点阅读检索核验、生成内容标识、数据真实性、评审保密和责任归属要求。
2. **任选**：[科技部监督司《负责任研究行为规范指引（2023）》](https://www.most.gov.cn/kjbgz/202312/t20231221_189240.html)。选读研究记录、数据管理、署名引用和监督责任相关部分。
3. **课堂节选**：[Anthropic, *Building Effective Agents*](https://www.anthropic.com/engineering/building-effective-agents)。只分析工具接口、人工检查点、停止条件和沙箱测试；将其转译为课程的 Agent 权限矩阵，不作为产品使用教程。

## 第 3 课：文献检索与证据角色判断

1. **核心**：[Kitchenham & Charters, *Guidelines for Performing Systematic Literature Reviews in Software Engineering*](https://ebse.webspace.durham.ac.uk/ebse-bibliography/guidelines-for-performing-systematic-literature-reviews-in-software-engineering/)。选读 protocol、search strategy、study selection；用于把检索变成可复核过程。
2. **任选**：[PRISMA 2020 Statement](https://www.prisma-statement.org/prisma-2020-statement)。只分析 checklist 和 flow diagram 的透明性逻辑；不要求 CS/AI 项目机械套用医学综述格式。
3. **课堂节选**：[《利用 Web of Science 数据库助力科学研究》](<../../references/library/research-method/how to search/利用Web of Science数据库助力科学研究.ppt>)。只取引文链、被引检索和相关记录方法；界面与数据库宣传内容授课前复核。

## 第 4 课：AI 辅助论文精读与深度分析

1. **核心**：[Keshav, *How to Read a Paper*](https://cs.uwaterloo.ca/~brecht/courses/854-http-video-2012/readings/keshav-paper-reading.pdf)。阅读三遍法和实验论文检查问题；用于建立先定位、再核验、后批判的阅读节奏。
2. **任选**：[沈向洋、华刚《读科研论文的三个层次、四个阶段与十个问题》](<../../references/library/research-method/how to search/沈向洋、华刚：读科研论文的三个层次、四个阶段与十个问题 - 知乎.pdf>)。用“十问”补足贡献、假设、实验和局限的中文检查表。
3. **课堂节选**：[Carey et al., *Ten Simple Rules for Reading a Scientific Paper*](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008032)。选读批判性阅读、做笔记和回到原文核验相关规则；与 AI 生成摘要做对照。

## 第 5 课：综述、证据地图与研究空白识别

1. **核心**：[Pautasso, *Ten Simple Rules for Writing a Literature Review*](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1003149)。重点阅读选题、检索、批判、结构与迭代规则。
2. **任选**：Kitchenham & Charters 的 study quality assessment、data extraction、synthesis 部分；延续第 3 课材料，用于区分“列文献”与“综合证据”。
3. **课堂节选**：[Qian, *How to Look for Ideas in Computer Science Research*](<../../references/library/research-method/how to think/How to Look for Ideas in Computer Science Research _ by Zhiyun Qian _ Jan, 2021 _ Medium.pdf>)。只取维度表、空白识别和复现前作相关部分；强调“空格”只是候选 gap，仍需证据和重要性判断。

## 第 6 课：研究问题、问题定义与第一性原理

1. **核心**：[胡晓峰《浅谈科研课题中的“科学问题”》](<../../references/library/research-method/how to think/胡晓峰：浅谈科研课题中的“科学问题”.pdf>)。用于区分实际问题、研究背景、工程任务和科学问题。
2. **任选**：[Platt, *Strong Inference*](https://pubmed.ncbi.nlm.nih.gov/17739513/)。选读多重假设、关键实验与排除逻辑；用于把问题改写为可证伪命题。
3. **课堂节选**：Qian, *How to Look for Ideas in Computer Science Research* 的六种构思模式；本课只讨论候选问题生成、非例和“拿锤子找钉子”的风险，不重复第 5 课的证据地图任务。

## 第 7 课：机制假设、研究判断与实验设计

1. **核心**：Platt, *Strong Inference* 的实验区分力与替代假设部分；要求把一个主假设拆成至少一个竞争解释和一个可反驳结果。
2. **任选**：[Raskar, *Coming up with New Ideas in Imaging*](<../../references/library/research-method/how to think/Coming up with New Ideas in Imaging.ppt>)。选读扩展维度、异类融合、反向和限制条件；用于生成机制候选，而不是把创意技巧当作证据。
3. **课堂节选**：[NIST/SEMATECH, *Process Improvement: Experimental Design*](https://www.itl.nist.gov/div898/handbook/pri/pri.htm)。选读目标、因素、响应、随机化、重复与阻断；用于检查变量、对照和测量设计。

## 第 8 课：学生研究方案分享与设计诊所

1. **核心**：[Simon Peyton Jones, *Writing a Great Research Proposal*](https://simon.peytonjones.org/assets/pdfs/great-research-proposal.pdf)。选读问题、目标、方法、风险和可行性表达；用于准备短讲而非模仿申报套话。
2. **任选**：[Whitesides, *Writing a Paper*](<../../references/library/research-method/how to write/美国院士教你写论文.pdf>)。只读“outline 同时是研究计划”和“先组织数据再写文字”部分。
3. **课堂节选**：[Stanford Scientific Writing, Unit 8: *How to Do a Peer Review*](<../../references/library/research-method/how to write/Stanford-科学写作课件/Unit_PDFs-Unit8.pdf>)。选取具体、建设性、针对工作而非作者的反馈原则，直接用于同伴组反馈。

## 第 9 课：Baseline、实验规格与可复现实验工程

1. **核心**：[Pineau et al., *Improving Reproducibility in Machine Learning Research*](https://www.jmlr.org/papers/v22/20-303.html)。重点阅读 reproducibility checklist、实验报告与结果呈现部分。
2. **任选**：[Bouthillier et al., *Accounting for Variance in Machine Learning Benchmarks*](https://arxiv.org/abs/2103.03098)。选读方差来源和比较协议；用于检查单次运行、随机种子和不公平 baseline。
3. **课堂节选**：[Schwab et al., *Ten Simple Rules for Good Research Practice*](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1010139)。选读研究计划、记录、透明报告和负结果；转化为判断门复现检查项。

## 第 10 课：AI 辅助编码、调试与受限 Agent 执行

1. **核心**：[Yao et al., *ReAct: Synergizing Reasoning and Acting in Language Models*](https://iclr.cc/virtual/2023/poster/11003)。选读 reasoning-action-observation 循环及失败例；用来分析执行循环，不要求复现模型训练。
2. **任选**：[Jimenez et al., *SWE-bench: Can Language Models Resolve Real-World GitHub Issues?*](https://www.swebench.com/original.html)。选读任务构造、执行环境和评价限制；用于讨论“测试通过”与“研究设定未被污染”的差别。
3. **课堂节选**：Anthropic, *Building Effective Agents* 的 augmented LLM、tool use 和 agent 部分；检查工具描述、权限、人工确认、停止条件和失败恢复。

## 第 11 课：实验自动化、AutoResearch 循环与结果追踪

1. **核心**：[Karpathy, *AutoResearch* 上游仓库](https://github.com/karpathy/autoresearch)。只读 README、`program.md` 和训练脚本的循环边界；分析固定预算、固定指标、保留/丢弃决策和日志。
2. **任选**：[Huang et al., *MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation*](https://proceedings.mlr.press/v235/huang24y.html)。选读任务、评价协议和失败类型；用于区分“能运行”与“能改进实验”。
3. **课堂节选**：[Sakana AI, *AI Scientist* 上游仓库与论文](https://github.com/SakanaAI/AI-Scientist)。与 AutoResearch 对照循环范围、模板、成本、人工边界和结果可信度，不把端到端演示当作自主科研已成立的证据。

## 第 12 课：Agent/Skill 逻辑与自主 Research Workflow 设计

1. **核心**：Anthropic, *Building Effective Agents*。重点比较 prompt chaining、routing、parallelization、orchestrator-workers、evaluator-optimizer 与 autonomous agent；选择最适合本人科研动作的最小结构。
2. **任选**：[Model Context Protocol, *Architecture Overview*](https://modelcontextprotocol.io/docs/learn/architecture)。阅读 host、client、server 以及 tools、resources、prompts 的职责边界；用于设计上下文和权限，而非记忆协议名词。
3. **课堂节选**：[WenyuChiou/ai-research-skills](https://github.com/WenyuChiou/ai-research-skills)。选择一个 Skill，逆向分析任务契约、输入上下文、工具权限、工件、评价和人工审核点；不讲安装步骤，也不要求学生照搬。

## 第 13 课：工作流评价、结果分析与失败复盘

1. **核心**：[Sculley et al., *Hidden Technical Debt in Machine Learning Systems*](https://research.google/pubs/hidden-technical-debt-in-machine-learning-systems/)。选读边界侵蚀、纠缠、隐性反馈与配置债；用于建立失败分类。
2. **任选**：Bouthillier et al., *Accounting for Variance in Machine Learning Benchmarks* 的比较与不确定性部分；将第 9 课的实验规范用于工作流前后对照。
3. **课堂节选**：MLAgentBench 的评价维度、实验轨迹和失败案例；要求把失败回写为研究判断、限制或下一轮修改，而不是只汇报成功率。

## 第 14 课：论文式表达与回写

1. **核心**：[Whitesides, *Writing a Paper*](<../../references/library/research-method/how to write/美国院士教你写论文.pdf>)。阅读 outline、数据组织和写作顺序；把论文结构视为研究证据的组织结构。
2. **任选**：[Gopen & Swan, *The Science of Scientific Writing*](<../../references/library/research-method/how to write/science-of-writing.pdf>)。选读读者期望、主题位、重音位和主谓距离；用于段落级回写。
3. **任选**：[Simon Peyton Jones, *How to Write a Great Research Paper*](<../../references/library/research-method/how to write/How to write a great research paper.pdf>)。选读贡献列表、示例先行和以反馈驱动修改。
4. **课堂节选**：[赵鑫《国际学术论文写作的快速入门》](<../../references/library/research-method/how to write/国际学术论文写作的快速入门.pdf>)。选取引言、实验、消融和定性分析的 CS/AI 案例；不布置整份讲义。

## 第 15 课：同行评审、论证门预检与修改工作坊

1. **核心**：[Stanford Scientific Writing, Unit 8: *How to Do a Peer Review*](<../../references/library/research-method/how to write/Stanford-科学写作课件/Unit_PDFs-Unit8.pdf>)。阅读评审结构、语气与具体化批评，直接用于课堂评审表。
2. **任选**：[魏秀参《浅谈学术论文 rebuttal》](<../../references/library/research-method/how to revise/浅谈学术论文rebuttal - 知乎.pdf>)。只取意见分类、证据回应和取舍策略；其中会议规则和统计数据不作现行政策依据。
3. **任选**：[施柏鑫《从审稿人视角，谈谈怎么写一篇 CVPR 论文》](<../../references/library/research-method/how to write/北京大学施柏鑫：从审稿人视角，谈谈怎么写一篇CVPR论文.pdf>)。用于理解贡献、证据和清晰度如何影响评审，不讲投稿流程细节。
4. **课堂节选**：[真实逐条回复案例：*Responses to Referee #2 Comments*](<../../references/library/research-method/how to use template/response letter/Responses to Referee #2 Comments.pdf>)。只分析“接受、补证、澄清、保留异议”四类回应及其证据强度。

## 第 16 课：最终分享、论证门与项目提交

1. **核心**：[Simon Peyton Jones, *How to Give a Good Research Talk*](https://www.microsoft.com/en-us/research/publication/how-to-give-a-good-research-talk/)。选读 audience、story、slides 和 delivery；用于把项目压缩为可检查的研究论证。
2. **任选**：Tao, *Mathematics in the Age of AI*。本课不重复第 1 课内容，只逆向分析开场、问题推进、案例选择、限制披露和结尾回扣。
3. **课堂节选**：[《懒人制作学术会议 Oral/Spotlight Video 指南》](<../../references/library/research-method/how to presentation/懒人制作学术会议Oral_Spotlight Video指南.pdf>)。只取“先写讲稿、再做 slides、排练和录制检查”的流程；具体软件步骤可能过时，不作为课程要求。

## 备课时不建议纳入

以下材料不进入逐课书单：

- 标题与内容错配、抽取失败或正文损坏的文件。
- 2021 年基金统计、旧版投稿系统、会议历史规则和易过时工具界面。
- 重复度高的 SCI 写作口诀、套话模板、投稿信模板和励志类读博文章。
- 只展示工具效果、没有评价协议与失败分析的自动画图或 Agent 宣传材料。
- 未回源核验的二手“最新、首个、全面超越”等能力声称。

## 来源与维护

本清单由 [research-method 选目分析](../../references/notes/research-method-选目分析.md) 和 [库外补充推荐](../../references/notes/research-method-补充推荐.md) 交叉筛选形成，并按课程最新 16 次课结构重新取舍。两份分析是备课决策记录，不应直接作为学生阅读材料。

每轮开课前应复核：

1. Agent、MCP、基准和上游仓库的版本与链接；
2. 本地 PDF 的作者、正式出处和课堂分发许可；
3. 课程任务、门条件与指定阅读章节是否仍对应；
4. 是否出现更高质量的原始来源，可替换当前二手转载材料。

<!-- 归档于 2026-07-29；后续版本见 ../../course/reading-list.md。 -->
