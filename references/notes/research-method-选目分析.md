# research-method 资料库全文通读选目（星级版）

最后核验：2026-07-29
来源：`github.com/secdr/research-method`（已克隆至 `ref/research-method/`，自带 .git，已加入 `.gitignore`）

## 方法与星级标准

- 本表基于**全文通读**判断，非标题推测。8 批并行通读，每篇由子智能体读取抽取后的纯文本（PDF 用 pdftotext，DOC/DOCX 用 textutil，PPT 用 soffice→pdf→pdftotext），超长者前 4000 行 + 结构抽样并标注"部分通读"。
- 抽取文本存于 `/tmp/rm_txt/`（临时，不纳入仓库）。
- 课程：上海交通大学研究生课"智能科研方法"，八阶段研究链路（1问题定义→2第一性原理→3机制假设→4外部输入摄取→5证据整理→6研究判断→7原型验证→8回写与表达），16 课，CS/AI 研究生，AI 增强科研方法课（非论文写作课、非工具展示课）。课程"提交"指研究门材料（第 6/9/13/16 课），非期刊投稿。
- 星级：★★★★★ 直接对应某课核心科研动作且契合 CS/AI；★★★★ 明显对应且内容扎实；★★★ 部分对应或方向略偏但有方法价值；★★ 边缘/仅通识；★ 与课程方法论无关。
- 级别（ref/README.md 分级）：A 官方/论文/上游；B 高质量二手；C 社媒/博客/聚合。本库整体 B/C，关键结论须回源，不构成课程直接证据。

## 总览统计

- 共 94 个文件，去重后 92 个独立条目（沈向洋/华刚读论文、Collected Advice 各有两份基本相同的副本，合并为一条）。
- ★★★★★ 16 篇 · ★★★★ 18 篇 · ★★★ 30 篇 · ★★ 18 篇 · ★/失败 10 篇。
- 覆盖集中在第 4、6、14、15 课；**第 9-13 课（baseline、可复现、Agent 工作流、实验自动化、评价复盘）几乎无对应材料**——课程 AI/Agent 核心仍需以 `ref/papers/`、`ref/AutoResearch.md`、`ref/skills_ref.md` 为准。

## ★★★★★ 直接对应核心动作（16 篇）

| 文件 | 内容摘要 | 对应课次 | 选用理由 |
| --- | --- | --- | --- |
| 沈向洋、华刚：读科研论文的三个层次、四个阶段与十个问题 | 速读/精读/研读三层次、消极/积极/批判/创造性阅读四阶段、读论文必答 10 问（问题性质/假设/实验/数据集/结果支撑/下一步） | 第 4 课（阶段 4→5） | "带着 10 个问题去阅读""批判→创造性阅读"即论文精读核心方法论；CV 背景。`how to search/` 与 `how to think/` 各一份（重复） |
| 胡晓峰：浅谈科研课题中的"科学问题" | 实际问题 vs 科学问题之分；五类常见错误（把意义/背景当问题、实际与科学混淆、把"怎么做"当问题、拿锤子找钉子）；奥卡姆剃刀 | 第 6 课·问题门（阶段 1） | "实际问题背后才有科学问题""拿着深度学习这把锤子找钉子"直击问题定义审校点 |
| 加州大学钱志云：那些计算机应用领域的脑洞是怎么产生的 | 读论文培养兴趣；6 种 idea 范式（填空/扩充延伸/造锤找钉/以小见大/推陈出新/外部资源）；习惯养成 | 第 5-6 课（阶段 5→1） | "画维度对比表找空白""推陈出新靠复现前人论文"对应证据地图与问题生成；CS 安全原生语境 |
| How to Look for Ideas in Computer Science Research（钱志云） | CS 博士选题指南：6 种构思模式（填空/扩展/造锤找钉/小处泛化/复现前作/外部来源）；品味与习惯 | 第 6 课·问题门 | "draw a table…look for empty spots"对应问题定义核心动作；CS/网络安全实例。与上一篇同主题，内容高度重叠，取其一即可 |
| Coming up with New Ideas in Imaging（Raskar, MIT） | 6 条生成新想法策略（扩展维度/异类融合/反向/找钉子/找锤子/加形容词）及应避开的坑 | 第 7 课（阶段 3 机制假设） | "Extend to next dimension""Fusion of the dissimilar"直击 CS/AI 机制假设构造 |
| 讲堂 _ 霍强：创新研究到底怎么做？ | 串讲《Start with Why》《巴斯德象限》等：从问为什么开始、选题三圈（激情/优势/影响）、刺猬理念、BHAG | 第 1/6 课 | "Start with why"与三圈选题对应问题定义与第一性原理；MSRA 首席研究员、CS 语境 |
| 浅谈学术论文 rebuttal（魏秀参） | AI/CV 会议与期刊同行评议流程、rebuttal 策略（按 novelty/factual error/涨点/实验不足分类应对）、AC message、CVPR 2019 rebuttal 前后状态统计 | 第 15 课（同行评审） | 直击 CS/AI 顶会同行评审；附 5 条参考文献与 CVPR 2019 统计，可核验性较强 |
| 美国院士教你写论文（Whitesides, Writing a Paper） | 以 outline 驱动论文与研究、数据组织先于文字、按重要性而非时间顺序组织 | 第 14 课（阶段 8，兼第 6 课研究规划） | "a good outline for the paper is also a good plan for the research program"把写作嵌入研究链路，契合回写理念 |
| 国际学术论文写作的快速入门（赵鑫） | KDD/SIGIR 论文逐节拆解：引言六句扩展法、相关工作分类、定义符号、模型逻辑、实验对比、定性分析 | 第 14 课（阶段 8） | "引文六句：任务→现状→挑战→思路→方案→贡献""Ablation 展开""定性实验呼应 motivation"——CS/AI 顶会写作直接可用 |
| 如何写科研论文 202203（邱锡鹏） | ACL 获奖论文 running example，讲摘要/介绍/方法/实验/相关工作写法与 peer-review 标准 | 第 14-15 课 | "好的论文=好的研究+好的写作""起承转合层层递进"——CS/NLP 语境，对应表达与评审 |
| 北京大学施柏鑫：从审稿人视角写 CVPR 论文 | CVPR 投稿到接收全流程：分配审稿人、bidding、rebuttal、AC 讨论、放榜 | 第 15 课（兼第 14 课） | "rebuttal 原则是解释审稿人误解…responsible and respectful""AC metareview 需两人以上 check"对应 CS/AI 顶会评审机制 |
| Freeman writing papers 2020（MIT/Google CVPR tutorial） | Ted Adelson 四步结构、Kajiya"dynamite introduction"、toy example、Cockroach/Puppy 两类 borderline、诚实与作者列表 | 第 14-15 课 | "写 dynamite introduction""用 toy example 让读者 get 主 idea""be scrupulously honest…report what didn't work"——CV 写作与审稿价值观 |
| How to write a great research paper（Simon Peyton Jones） | 写作即研究、四句摘要、贡献列表驱动全文、示例先行、active voice、善待审稿意见 | 第 14 课（阶段 8） | "The list of contributions drives the entire paper""Every review is gold dust"——CS 写作方法论标杆 |
| science-of-writing（Gopen & Swan） | 《The Science of Scientific Writing》：读者期望、主题位/ stress 位、主谓紧贴、动词承载动作七原则 | 第 14 课（阶段 8） | "旧信息放主题位、新信息放 stress 位"是论文式表达底层方法论，可作讲义理论核心 |
| Stanford-科学写作课件 Unit5（The original manuscript） | 原创稿件写作顺序（表图→结果→方法→引言→讨论→摘要）、表图作为故事骨架 | 第 14 课（兼第 11 课图表） | "Tables and Figures are the foundation of your story""先做 Figure 再执笔"对应阶段 7→8 回写 |
| Stanford-科学写作课件 Unit8（How to do a peer review） | 同行评审实务：单/双盲/公开评审、评审语气、具体化批评、建设性措辞 | 第 15 课（同行评审） | "Criticize the work, not the authors""point out specific errors"可作第 15 课评审表设计依据 |

## ★★★★ 明显对应且内容扎实（18 篇）

| 文件 | 内容摘要 | 对应课次 | 选用理由 |
| --- | --- | --- | --- |
| 国际期刊审稿流程与要点（张贤达） | IEEE 期刊审稿流程、审稿要点清单、写作/修改要点、Response to Reviewers 写法 | 第 15 课 | 审稿清单"Is the paper technically sound / How would you rate the novelty"可让学生理解评审标准；偏 IEEE 期刊口径，CS/AI 会议审稿覆盖少 |
| 学术论文投稿与返修（Rebuttal）分享（叶茫） | 期刊/会议审稿流程、审稿意见五类归类、Rebuttal 常用表达、AC message 适用情形 | 第 15 课 | 面向计算机领域（武大计算机学院、CCF 推荐会议列表），"Negative 据理力争是 Rebuttal 最关键的地方"有方法价值；部分源自魏秀参，建议作补充 |
| 陈耀：如何做好首项研究工作、写好首篇科研论文 | 首项研究 13 条体会：选题、两类文献阅读、研究动机、放弃与变通、逻辑框架、各节写作、审稿回复 | 第 6/14/15 课 | 覆盖选题到投稿回复全链路；"反复思考研究动机，新在何处""审稿意见逐一答复注明修改之处"对应问题凝练与审稿回复 |
| 英文论文写作随感（熊辉） | 中国学生英文论文 9 类问题；relevance+rigorousness 两 R 原则；理论/混合/实验/案例四种验证模式 | 第 14 课 | "四种验证模式""全文反复强调问题挑战性"对应证据与论证组织；数据挖掘背景 |
| 美国教授对中国学生写英文文章的建议（Brittman） | 基于 200+ 篇中国工程学生论文：冠词缺失、长句、先目的后主旨、which 指代不清、respectively/in this paper 误用等错误及纠正 | 第 14 课 | 针对工程/CS 学生英文写作的具体错误清单与"句首放最重要信息"原则，可作英文表达规范材料 |
| 图表制作与数据分析（复旦马兰） | 图表作用/种类/图注；挑战者号失事与 Snow 霍乱实例讲"正确呈现数据"与因果分析 | 第 14 课（兼第 5、11 课） | "Figure it Early, Figure it Right, Figure it Out"支撑证据可视化与表达阶段 |
| 国际学术论文写作的快速入门（赵鑫） → 见五星 | — | — | — |
| 如何以初学者角度写好一篇国际学术论文？（赵鑫） | 赵鑫早期版讲座：引文逻辑错误、模型总分式、实验主干与定性写法 | 第 14 课 | "因为模型 A 好使所以用 A…这种引文 50% 都该拒""一篇论文讲明一个贡献"审稿视角忠告；与快速入门版重叠，作备用语料 |
| 科研论文的特点、构思和发表过程.ppt | 选题构思→预实验→结果分析→撰写投稿→评阅→学术道德全流程；IMRD 结构 | 第 14 课（兼第 9 课） | "Introduction 研究什么问题/Methods 如何研究/Results 发现什么/Discussion 意味什么"论文骨架与"批评的眼光看文献" |
| How to Write and Publish a Scientific Paper | 经典科学写作全书（35 章+附录）：IMRAD 各部分、图表、参考文献、评审与出版、会议/学位论文、口头海报展示、伦理 | 第 14 课（兼第 15、16 课） | "The logic of IMRAD"覆盖论文式表达全流程且扎实；通用自然科学，非 CS/AI 专属 |
| protec_good_practice_authors | 论文=法庭辩护案模型：Need→既有工作→Proposal(假设)→测试设计→结果评价→讨论，逐节列"控方(审稿人)"可能反驳 | 第 14-15 课 | "a good paper as a defence case…anticipate all arguments that the prosecution (reviewers) may put"对应论证结构与预判审稿；方法论价值高（材料加工领域） |
| Writing your first academic paper | 研究生首篇一作论文写作指南：何时开写、四要素（方法/数据/结果/claim）、各章节结构、与导师合写改稿、审稿流程 | 第 14 课 | "A scientific paper can be distilled into four parts…方法/数据/结果/claims"与章节模板契合表达课次 |
| 论文写作与投稿.ppt（任胜利） | 写作前准备、IMRD 结构、文法量单位、参考文献体例、投稿信、同行评议与退稿处理 | 第 14-15 课 | "Begin with the Results""先旧后新""Discussion 的 home-message""与 Introduction 呼应"扎实覆盖表达与评审 |
| 用 LaTeX 优雅地书写伪代码——Algorithm2e 简明指南 | algorithm2e 宏包：ruled/linesnumbered 参数、If/Else/eIf、Do-While 自定义、完整可编译例程 | 第 10 课（伪代码，兼第 14 课排版） | `\usepackage[ruled,linesnumbered]{algorithm2e}`等直接服务论文伪代码与可复现规格 |
| 模型评估指标可视化，自动画 Loss/Accuracy 曲线工具（Model Log） | Python3 工具记录超参/Loss/Acc/F1 并以 Echarts 曲线对比训练过程 | 第 11 课（实验自动化/指标曲线） | `add_metric(metric_name='train_loss', metric_value=, epoch=)`即阶段 7 原型验证可视化动作；工具偏软广但功能对应 |
| 如何写好 SCI 论文 | SCI 选题、获得 idea、构思撰文框架、各部分写作技巧、投稿要点；"先想先写最后做" | 第 14 课 | "先把文章大框写好，空出数据""Introduction 用 However 引出不足"对应论文回写动作 |
| 如何快速撰写 SCI 论文 | 亲历英文科研写作：每日读报养语感、先逻辑后字句、一气呵成初稿、照葫芦画瓢、反复修改 | 第 14 课 | "逻辑来自对数据的总体分析，按思路先做 Figure 再执笔"与阶段 7→8 衔接契合 |
| SCI 文章撰写与发表技巧.ppt | 前言三段论、讨论句式、图表、Cover letter、审稿改稿实例与常见问题 | 第 14-15 课 | 含真实退修/申诉/接收信函示例，可作阶段 8→论证门案例素材 |
| Science Research Writing（Glasman-Deal） | 非母语者科技论文写作手册：按 IMRaD 各部分给"模型—句法—词汇"三层训练，附真实语段与词汇索引 | 第 14 课 | Results 段"revisit aim→invite view→key results→comparisons→problems→implications"模型可作讲义骨架 |
| Stanford Unit1（Introduction; principles of effective writing） | 写作可学；好写作=清晰思想+可学规则；读-仿-日志、放弃"学术腔" | 第 14 课 | "Have something to say + logical thinking + learnable rules"与回写即研究判断表达一致 |
| Stanford Unit4（More paragraph practice） | 段落级改写练习：信息分类、消除冗余、逻辑重组，含真实科学语段 | 第 14 课 | 可操作段落编辑练习，契合"回写=把研究判断结构化表达" |
| Stanford Unit6（Reviews/Letters/Case reports） | 综述（叙述性 vs 系统 vs Meta）、致编辑信、病例报告等文体与综述目标 | 第 14 课（兼第 5、15 课） | 综述"synthesize+evaluate+address controversies"与第 5 课证据地图/综述同构 |
| Stanford Unit7（Plagiarism; authorship; integrity） | 抄袭识别（含改写式抄袭/自抄袭）、署名与学术诚信规范 | 第 14 课（兼科研伦理） | "work from memory/draw your own conclusions"与课程"AI 输出需回原文核验、不得洗稿"底线一致 |

> Stanford 课件整体评价：8 单元由原则→段落→稿件→同行评审渐进，是与第 14-15 课最契合、可直接切片作讲义与课堂练习的高质量序列。Unit2（主动语态，★★★）、Unit3（标点，★★★）为语言技巧层。

## ★★★ 部分对应或需迁移/节选（30 篇）

| 文件 | 内容摘要 | 对应课次 | 选用理由 |
| --- | --- | --- | --- |
| 懒人制作学术会议 Oral/Spotlight Video 指南 | 会议 oral 视频流水线：写讲稿→静态 slides→谷歌 TTS 念稿→QuickTime 录屏→iMovie 剪辑 | 第 14-16 课 | "稿决定质量""AI 念稿解放嘴巴"契合表达与展示；偏 macOS 工具操作 |
| Sciencedirect_search_skills | ScienceDirect 高级/专家检索：AND/OR/AND NOT、通配符、邻近算符 W/n、PRE/n、优先级 | 第 3 课 | 数据库布尔/邻近检索操作手册，可作外部输入摄取检索技能底料；纯工具说明书 |
| 利用 Web of Science 数据库助力科学研究 | WoS 培训 PPT：引文索引原理、Cited References/Times Cited/Related Records 三向检索、ESI 高被引、被引检索选题、定题/引文跟踪 | 第 3、5 课 | 引文链"越查越深/越新/越广"与被引检索选题服务证据地图与空白识别；商业数据库推广，数字过时须核验 |
| 国外专业学术期刊投稿指南 | 国外生物医学期刊选刊、投稿须知、IMRAD 写作、投稿信、审稿退修与校样全流程 | 第 14-15 课 | "IMRAD 格式""审稿意见一条一条对不能接受的进行陈述"有写作与评审交互方法价值；生物医学领域 |
| 学术论文的写作和投稿（上海交大图书馆） | 论文格式（Title/Abstract/Intro/正文/参考文献）、写作步骤与 SCI/EI 投稿 | 第 14 课 | "读者最多的是 Title、Abstract 和 Introduction…决定是否阅读全文"结构化写作要点；工科 |
| 学术论文撰写与发表经验谈（哈工大） | 选题、文献、创新、验证、撰写与按创新程度分层投稿的工程学科经验 | 第 14 课（兼第 6 课） | "根据创新程度投稿：原创→IEEE 一流…合并型→国际会议"分层策略；图像编码/数字水印实例，贴近 CS 工科 |
| Elsevier 投稿指南 | 出版流程、选刊、Guide for Authors、Cover Letter、EES 平台、提高接受率技巧 | 第 14-15 课 | "选择正确的期刊…Cover Letter…把握编辑直接对话的最好机会"；EES 已迭代，平台细节须核验 |
| Collected Advice on Research and Writing | CS 导向经典建议链接索引：SOSP/OOPSLA/POPL 投稿评估、MIT AI Lab 研究指南、SPJ talk、Parberry 审稿指南等 | 第 14-15 课（兼第 1 课） | "primarily for computer scientists"，高价值入口；本身仅链接清单，需二次访问原文。`how to think/` 与 `how to write/` 各一份（重复） |
| 课题毫无进展，科研压力大？（西湖大学副校长） | 博士生平衡实验与文献阅读、应对导师批评与同辈压力、情绪调节 | 第 1 课 | "从接受知识转变为科学家思维""把一个 idea 变成可操作的现实"呼应问题定义与角色转变 |
| 读博士之初时就能知道的 20 件事 | 牛津博士 20 条建议：文献综述、目标设定、笔记备份、展示研究、发表与心态 | 第 1 课 | "Invest time in literature reviews""尽早设定目标""对他人展示你的研究"对应文献、目标与表达 |
| Doing the PhD：可观这 14 个主题 | 知乎博士全旅程资源索引：决定→开题→读论文→写论文→导师→学位论文→延毕→体制红线 | 第 1 课（全程地图） | "好的研究想法如何产生""如何读论文""如何写论文"切中多课；本体是资源目录而非方法本体 |
| How to Publish a Paper in the Top Journal | 论文投稿顶刊的结构、写作与审稿应对指南 | 第 14 课 | "treat the paper as a test of this hypothesis""good paper structure"对应表达与审稿预判；**正文编码损坏，可用性受限** |
| How to Write and Publish a Scientific Paper → 见四星 | — | — | — |
| Resources on Academia（Wilson Hsieh） | 学术生涯资源书单：读研、写论文、技术写作、当教授、学会/杂志索引 | 第 1 课 | 含 CS 取向条目（"How to do Research At the MIT AI Lab""SOSP/OOPSLA 投稿评估"），可作导论扩展阅读 |
| 从怀孕到出生——我的第一篇 SCI 论文的前世今生 | 材料学研究生自传体记录第一篇 SCI：实验摸索→作图→写作→师兄/导师修改→拒稿改投→接收 | 第 14 课 | 覆盖写作→修改→投稿→接收全链路，详述 Endnote 改格式、Elsevier 投稿步骤、拒稿改投；材料学语境 |
| 读博心得分享（知乎） | 清华 CS 直博生三点：从竞争到合作、阵容搭配、卡壳时评估难度/前景并设 deadline 止损 | 第 1 课 | "及时止损"评估思路与正反馈管理对科研心态有方法价值；篇幅短偏通识 |
| 科研经验集锦 | 零点花园论坛合集：蒲慕明选题、SCI 写作攻略、博士答辩反思、周耀旗英语论文诀窍、Hamming《You and Your Research》讲稿 | 跨第 1/6/14 课 | 含 Hamming"做大事、勇气、每七年换领域"与周耀旗"读者期望/新旧信息流动"高价值片段；内容混杂质量不均，需精选节选 |
| 博士生如何做科研（王俊峰） | 科研内涵外延、提出/分析/解决问题一般过程、选题来源、文献检索与泛读精读、心态与基本技能 | 第 6/1 课 | "提出问题—分析问题—解决问题""分治、假设与场景"有方法价值；偏一般方法论、非 CS 特定 |
| 英文论文写作与投稿经验（黄国祯） | 论文各部分结构（标题/摘要/引言/相关工作/方法/实验/结论）、标题迭代示例、引言"Tell a story" | 第 14 课 | "标题从宽泛到具体迭代""引言=研究动机+问题+方法+结果一句话"对应论文结构；抽取文本含乱码，以原 PPT 为准 |
| 如何在顶级科学杂志上发表论文（鲁白） | 一流/平庸论文之分、批判性阅读 CNS、各节写法、cover letter、rebuttal 策略与退稿回复信范例 | 第 14-15 课 | "一流论文=重大进展/概念突破/挑战传统""rebuttal 不与审稿人争论、尽量满足、抓住其失误"对应评审回复；生物医学 |
| 科研团队如何高质高产？（杨阳，UCLA） | 三秘密：基本训练（基础课/实验记录本/读说明书/走正道）、"临别秋波"机制、团队文化（独立性/跨领域） | 第 1/6 课 | "临别秋波"组建课题小组催生新方向、"实验记录本会说话"对 idea 与记录有方法价值；有机光电材料，需迁移 |
| 如何撰写高水平的博士论文？（蒲勇健） | 文献研读、读书笔记、开题、创新四法（类比/假设修改/组合/特殊到一般） | 第 6-7 课 | "寻找现有模型不能解释的现象…诊断原因…修改""类比法/假设条件修改法/组合法"对应机制假设与创新路径；经管背景 |
| 如何写好一篇论文 | 博客转述一份写作 slide：摘要四句结构、贡献列表、章节篇幅 | 第 14 课 | "摘要四句：陈述问题、说明意义、说明目标、说明可扩展"对应表达；为 SPJ slide 二手转述，建议直接用 SPJ 原文 |
| 英语论文的一些忠告 | 科学网博文：标题/摘要规范、时态语态、易混词辨析、结构词清单 | 第 14 课 | "标题尽量避免 study on""被动语态用得频繁"句法词汇清单对英文表达有参考价值；语言通识 |
| 给研究生新生的一些关于写论文的方法建议（ProfFish） | C-L-E-A-R 五法：断裂句、长句、解释、转折连词、重复词组 | 第 14 课 | "数逗号找断裂句""25 词以上拆句""描红解释部分并给依据"可操作的英文写作自检清单 |
| 从国家自然科学基金申请和评审程序探讨如何提高申请书质量（姚玉鹏） | 基金委视角讲 NSFC 形式审查、通讯评审、会议评审与申请书撰写对策 | 无（偏行政申报） | "明确提出创新科学问题并论证充分性"对问题门有间接参考；主体是基金评审行政流程 |
| How to Write and Submit a World-class Paper（Elsevier Jacobs） | 出版流程、SCOPUS 查重、稿件结构、投稿信、编辑常见抱怨与投稿伦理 | 第 15 课（兼投稿伦理） | "Content is essential, Presentation is critical""Figure+Caption tell a complete story""合理添加作者…只投一刊"；出版商通识视角 |
| SCI 论文撰写与发表（顾飞荣教材，`how to write/` 版） | 2009 年教材：SCI/影响因子、18 步撰写流程、各部分结构、图表/英文文体/修辞与投稿发表技巧 | 第 14 课 | 18 步写作流程与"图表自成体/能用图不用表"可作结构参考；**2009 年、偏 SCI/IF 口径、全角字符编码**，须裁剪 |
| 经验分享：如何指导研究生撰写 SCI 论文？ | 导师视角 8 步指导流程：思路→方案→数据获取分析→大面/细节写作→冷静反省→投稿→发表后续 | 第 14 课（兼第 6 课） | 8 步把"研究问题→数据→图表→论文→投稿"串成链路，与课程回写环节同构 |
| References.doc | 汇总生物学论文写作指南链接与 IMRaD 各部分写作要点及引用规范 | 第 14 课 | IMRaD 标准骨架与"Results 只陈述、Discussion 才解释"通识规则 |
| SCI 写作常用句型 | 按 Beginning/Introduction/Review/Body/Summary/Abstract 罗列 SCI 论文常用英语模板句型 | 第 14 课 | 句型模板可作"照葫芦画瓢"式写作参照库 |
| Responses to Referee #2 Comments | 真实点对点审稿回复实录（印度气溶胶论文）：逐条回应 Major/Specific comments，含数据补充、方法澄清与取舍辩护 | 第 15 课 | 真实展示科研论证对话——"to the best of the author's knowledge"承认证据边界与取舍理由，可作同行评审回应实证范例 |
| Stanford Unit2（Use the active voice） | 识别与改造被动语态，倡导主动语态与强动词 | 第 14 课 | 主动语态/强动词训练是表达润色基础练习；偏语言技巧层 |
| Stanford Unit3（Experiment with punctuation） | 冒号/分号/破折号/括号等标点的表现力与正式度梯度 | 第 14 课 | 标点变化可作句式多样化练习；偏语言细节 |

## ★★ 边缘/仅通识（18 篇）

| 文件 | 内容摘要 | 对应课次 | 选用理由 |
| --- | --- | --- | --- |
| Writing a scientific paper（`how to search/`） | 通用科技论文写作提纲：检索→各章节规范→投稿修订，以 JACS 体例为例 | 第 14 课 | 论文结构与"准确简洁、反复修订"原则；内容浅、化学领域、无 AI/方法层贡献 |
| EndNote_Output_Styles | 科罗拉多州立大学图书馆员 EndNote 引用输出样式操作手册 | 第 14 课边缘 | EndNote 工具操作步骤；CS/AI 普遍用 LaTeX/BibTeX，方法论价值有限 |
| 中文核心期刊投稿指南 | 按学科编排的中文核心期刊名录（ISSN、地址、栏目），偏经管/财会/医学 | 无 | 期刊名录，既非方法也非 CS/AI |
| 2021 年度计算机科学学科基金项目申请资助情况及展望 | NSFC 计算机科学学科 2021 年申请资助数据、评审机制与展望 | 无（边缘） | CS 学科生态背景，与课程核心方法动作无直接对应；过时统计 |
| 211 高校副校长：我们的未来在哪里？ | 副校长通识寄语：主动学习/读百篇文献/人际/爱情/职业出路 | 第 1 课通识 | 仅"读懂 100 篇文献"一句略贴第 3 课；整体偏励志非方法 |
| 我做科研的几点体会（nafgnaw） | 实验台科研十条：一半时间看文献、记录真实详尽、文献管理与引用、英文句型、造假批评 | 第 2/3 课 | "记录真实详尽""引用要亲自看过原文"与工件/文献弱对应；生物湿实验语境，迁移有限 |
| 学术论文与毕业论文写作（cgnail） | 通用科学写作翻译稿：克服脑闭塞、导言/主体/结论/参考文献、图表与引文 | 第 14 课 | 通用 essay 写作翻译稿，未涉及 CS/AI 实验报告与证据组织，入门辅助 |
| 如何写好一篇论文（博客转述）→ 见三星 | — | — | — |
| COVER LETTER（投稿信）实用指南 | 期刊投稿信指南：内容要素、5 模板、5 例文（独创性声明、推荐审稿人、not-to-review list） | 第 14 课边缘 | "简述稿件核心内容、主要发现和意义"属表达边缘通识；传统出版套式 |
| response letter 返修 | 6 个返修信例文与逐条回复模板，附礼貌用语清单 | 第 15 课 | "逐条意见回答，切忌遗漏"结构相关；本质套话模板 |
| response letter II | 返修信"万能套话"14 条感谢/致歉/修改承诺句式 | 第 15 课 | 仅礼貌句式，无方法论，语言素材 |
| 外刊投稿书信大全 | 小木虫汇编：投稿信、催稿信、退修回复、版面费减免等真实邮件模板 | 第 14 课 | 模板堆砌，无可核验方法论；论坛二手汇编 |
| 英文论文投稿信 Cover letter 模板 | 三篇 Nature Neuroscience/Neuron 投稿信样本 | 第 14 课 | 投稿信示例，无方法论提炼 |
| Elsevier 期刊投稿状态 | 博客梳理 EES 投稿状态流转（Submitted→With Editor→Under Review→Accepted） | 第 15 课 | 解释审稿流程状态；偏操作层，EES 已迭代 |
| SCI 论文撰写与发表（`how to think/` 版） | **实为小木虫"国自然函评专家都是哪些人"文章**，讲国自然评审流程，与标题不符 | 第 15 课边缘 | 标题失真；仅"同行评议利弊与回避机制"对评审文化有通识价值 |
| SCI 写作技巧-常用词汇-连接词 | 半导体量子点方向 SCI 论文中英文词汇与连接词批注清单 | 第 14 课 | 特定领域词汇堆砌，非系统方法；可作 AI 辅助润色对照样本 |
| 如何快速撰写 SCI 论文 → 见四星 | — | — | — |

## ★ / 抽取失败（10 篇）

| 文件 | 情况 | 处理 |
| --- | --- | --- |
| COVER LETER FORMAT.doc | 求职用 cover letter 模板（"why you are the best person for the job"） | 与科研方法无关，剔除 |
| Cover Letter Cameron L Wolff.doc | 应聘软件技术领导岗位求职信（J2EE/.NET） | 与科研方法无关，剔除 |
| 王光辉_出国留学申请总结 | CSC 联培博士联系外导、英语考试、材料、公证、签证、行李、生活全流程 | 出国留学行政事务，剔除 |
| 科技英文写作与讲演-科学的罗塞塔石碑.pdf | **实为推荐信邮件碎片**（"可以作为博士后的推荐信！附件有简历"） | 文件错配，非写作材料，剔除 |
| 科技英语写作句型.pdf | 抽取为 0 行，无可用文本 | 抽取失败，须重取原文核验 |
| 撰写基金申请书的一点肤浅体会（PPT版）—李红谊教授.pdf | 抽取仅 42 字符，无实质内容 | 抽取失败，须重取原文核验 |
| How to Publish a Paper in the Top Journal.pdf | 正文编码损坏，可读片段有限 | 可用性受限，降为背景参考 |
| 中文核心期刊投稿指南.pdf | 5016 行期刊名录（经管/财会/医学） | 非方法、非 CS/AI，剔除 |

## 重复文件提示

- 沈向洋、华刚：读论文三层次四阶段十问题：`how to search/` 与 `how to think/` 各一份，内容相同，取其一。
- Collected Advice on Research and Writing：`how to think/` 与 `how to write/` 各一份，内容基本相同（CS 导向链接索引），取其一。
- SCI 论文撰写与发表：`how to think/` 版（实为国自然函评文章，标题失真）与 `how to write/` 版（顾飞荣 2009 教材）**内容不同**，按两条独立条目处理。
- 赵鑫讲座：`国际学术论文写作的快速入门`（五星）与`如何以初学者角度写好一篇国际学术论文`（四星）内容高度重叠，保留前者为主、后者备用。

## 按课次聚合（推荐选用）

- **第 1 课 导论**：霍强创新研究(★★★★★)、读博士之初 20 件事(★★★)、Doing the PhD(★★★)、科研经验集锦(★★★,节选)、科研团队杨阳(★★★)、读博心得(★★★)、Resources on Academia(★★★)、课题毫无进展(★★★)。
- **第 3 课 文献检索**：Web of Science(★★★,引文链/被引检索)、Sciencedirect 检索(★★★)。
- **第 4 课 论文精读**：沈向洋/华刚十问(★★★★★)。
- **第 5 课 综述/证据地图/空白**：钱志云脑洞(★★★★★,空白范式)、Web of Science(★★★,被引检索)、Stanford Unit6(★★★★,综述文体)。
- **第 6 课 问题定义/第一性原理/问题门**：胡晓峰科学问题(★★★★★)、How to Look for Ideas(★★★★★)、霍强(★★★★★)、邱锡鹏(★★★★★,兼)、Whitesides(★★★★★,outline 即研究计划)、陈耀(★★★★)、如何撰写高水平博士论文(★★★,创新四法)、学术论文撰写与发表经验谈(★★★,选题)。
- **第 7 课 机制假设**：Coming up with New Ideas Raskar(★★★★★)、如何撰写高水平博士论文(★★★,类比/假设修改)。
- **第 9-13 课（baseline/Agent/实验自动化/评价复盘）**：**几乎无对应材料**。仅 Algorithm2e(★★★★,第 10 课伪代码)、Model Log(★★★★,第 11 课指标曲线)、图表制作(★★★★,第 11 课兼)。AI/Agent 核心仍以 `ref/papers/`、`ref/AutoResearch.md`、`ref/skills_ref.md` 为准。
- **第 14 课 论文式表达**：Whitesides、赵鑫快速入门、邱锡鹏、SPJ、Gopen&Swan、Stanford Unit5、Freeman(均★★★★★)；Writing your first、protec_good_practice、How to Write and Publish、科研论文特点构思、图表制作、论文写作与投稿任胜利、熊辉、Brittman、Science Research Writing、Stanford Unit1/2/3/4、如何写好 SCI、如何快速撰写 SCI、SCI 文章撰写技巧(均★★★★)。
- **第 15 课 同行评审**：施柏鑫 CVPR、魏秀参 rebuttal、Stanford Unit8(均★★★★★)；张贤达审稿流程、叶茫返修、protec_good_practice(均★★★★)；Responses to Referee#2(★★★,真实范例)、Collected Advice(★★★)、Elsevier 投稿指南(★★★)。
- **第 16 课 最终展示**：懒人 Oral Video(★★★)、Freeman(★★★★★,兼)、Stanford Unit1(★★★★,兼)。

## 总体结论与风险

1. 真正可直接作主干的是 16 篇五星，集中在第 4、6、14、15 课，且多为 CS/AI 原生语境（沈向洋/华刚、胡晓峰、钱志云、Raskar、霍强、魏秀参、Whitesides、赵鑫、邱锡鹏、施柏鑫、Freeman、SPJ、Gopen&Swan、Stanford Unit5/8）。四星 18 篇为扎实补充。
2. **课程 AI/Agent 核心（第 9-13 课）该库几乎不覆盖**——baseline、可复现工程、Agent/Skill/MCP、实验自动化循环、失败复盘均无材料，须另寻。
3. 中文 SCI 攻略类（如何写好 SCI、SCI 论文撰写与发表、如何快速撰写、经验分享、SCI 文章撰写技巧）内容高度重叠，夹带过时口号（"IF 至上""引用潜在审稿人论文"），须按课程"不唯 SCI、AI 输出需核验"口径裁剪，只取片段作案例。
4. 内容失真/抽取失败 4 类须标注：`How to Publish a Paper in the Top Journal`(编码损坏)、`SCI 论文撰写与发表(think 版)`(标题失真，实为基金函评)、`科技英文罗塞塔石碑`(实为推荐信邮件)、`科技英语写作句型`与`撰写基金申请书李红谊`(抽取为空)。
5. 时效性：WoS/EES 平台细节、2021 基金统计、CVPR 2019 rebuttal 政策属易变信息，授课前须重新核验。
6. 级别：本库整体 B/C，作背景阅读与线索，不构成课程证据；关键教学判断在 `ai-research-workflow-course/reference-analysis.md` 记录来源与限制。
7. 版权：原件多为转载 PDF（知乎/期刊/PPT），`ref/` 默认只读用于备课；分发给学生须先确认授权。
