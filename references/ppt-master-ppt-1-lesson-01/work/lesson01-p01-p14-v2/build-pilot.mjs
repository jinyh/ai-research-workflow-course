import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, PresentationFile } from "@oai/artifact-tool";

const workspace = path.resolve("work/lesson01-p01-p14-v2");
const sourcePptx = path.join(workspace, "template-starter.pptx");
const outputPptx = path.resolve("outputs/lesson-01-p01-p14-pilot.pptx");
const renderDir = path.join(workspace, "final-render");
const layoutDir = path.join(workspace, "final-layout");

const asset = (name) => path.join(workspace, "assets", name);
const haoFig2 = "/Users/bright/Projects/courses/graduate/projects/assets/lesson-01/hao-2026-fig2.png";
const haoFig3 = "/Users/bright/Projects/courses/graduate/projects/assets/lesson-01/hao-2026-fig3.png";

const C = {
  red: "#C8161E",
  redSoft: "#F7E8E9",
  redMid: "#E54A50",
  navy: "#102D47",
  ink: "#17324A",
  muted: "#67798A",
  line: "#D7DEE5",
  pale: "#F3F6F8",
  paper: "#FAFAF8",
  white: "#FFFFFF",
  green: "#2E7D5B",
  greenSoft: "#E6F2EC",
  amber: "#B77818",
};

const titles = [
  "智能科研方法",
  "这段 AI 输出，在研究里算什么？",
  "AI Scientist 已串起完整研究流程",
  "完整论文产物仍不足以证明研究成立",
  "更高产，也可能让研究更集中",
  "研究质量来自三种控制",
  "用一条 claim 走完整个研究闭环",
  "四个研究门分别拦住四类错误",
  "16 周只维护一个个人项目",
  "五类工件最终汇成一条论证链",
  "课程沿四个研究门推进同一个项目",
  "评分落在四类可检查证据上",
  "个人负责判断，同伴负责质询",
  "今天离开前，留下三个可检查工件",
];

async function saveBlob(filePath, blob) {
  await fs.writeFile(filePath, new Uint8Array(await blob.arrayBuffer()));
}

async function readBytes(filePath) {
  const bytes = await fs.readFile(filePath);
  return bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
}

function shapeByName(slide, name) {
  const shape = slide.shapes.items.find((item) => item.name === name);
  if (!shape) throw new Error(`Missing inherited shape "${name}" on slide ${slide.index + 1}`);
  return shape;
}

function styleText(shape, {
  fontSize = 24,
  color = C.ink,
  bold = false,
  alignment = "left",
  verticalAlignment = "middle",
  typeface = "Arial Unicode MS",
  insets = { left: 8, top: 4, right: 8, bottom: 4 },
} = {}) {
  shape.text.fontSize = fontSize;
  shape.text.color = color;
  shape.text.bold = bold;
  shape.text.alignment = alignment;
  shape.text.verticalAlignment = verticalAlignment;
  shape.text.typeface = typeface;
  shape.text.insets = insets;
  shape.text.wrap = true;
}

function addText(slide, name, text, position, style = {}, fill = "none", line = "none") {
  const shape = slide.shapes.add({
    geometry: "textbox",
    name,
    position,
    fill,
    line: line === "none"
      ? { style: "solid", fill: "none", width: 0 }
      : { style: "solid", fill: line, width: 1 },
  });
  shape.text.set(text);
  styleText(shape, style);
  return shape;
}

function addRect(slide, name, position, fill = "none", line = "none", lineWidth = 0, geometry = "rect") {
  return slide.shapes.add({
    geometry,
    name,
    position,
    fill,
    line: line === "none"
      ? { style: "solid", fill: "none", width: 0 }
      : { style: "solid", fill: line, width: lineWidth },
  });
}

function addCircle(slide, name, left, top, diameter, fill, line = "none", lineWidth = 0) {
  return slide.shapes.add({
    geometry: "ellipse",
    name,
    position: { left, top, width: diameter, height: diameter },
    fill,
    line: line === "none"
      ? { style: "solid", fill: "none", width: 0 }
      : { style: "solid", fill: line, width: lineWidth },
  });
}

function addLine(slide, name, left, top, width, height, color = C.line, lineWidth = 2) {
  const x2 = left + width;
  const y2 = top + height;
  const length = Math.hypot(width, height);
  const angle = (Math.atan2(height, width) * 180) / Math.PI;
  return addRect(
    slide,
    name,
    {
      left: (left + x2) / 2 - length / 2,
      top: (top + y2) / 2 - lineWidth / 2,
      width: length,
      height: lineWidth,
    },
    color,
    "none",
    0,
    "rect",
  ).setRotation?.(angle) ?? (() => {
    const item = slide.shapes.items[slide.shapes.items.length - 1];
    item.rotation = angle;
    return item;
  })();
}

async function addImage(slide, name, filePath, position, alt, fit = "contain") {
  const image = slide.images.add({
    blob: await readBytes(filePath),
    contentType: "image/png",
    alt,
    fit,
    position,
  });
  image.name = name;
  return image;
}

function setTitle(slide, text) {
  const title = shapeByName(slide, "Text Placeholder 3");
  title.text.set(text);
  title.text.typeface = "Arial Unicode MS";
}

function deleteEmptyPlaceholders(slide) {
  for (const name of ["Text Placeholder 1", "Text Placeholder 2"]) {
    const shape = slide.shapes.items.find((item) => item.name === name);
    if (shape) shape.delete();
  }
}

function setNotes(slide, talkTrack, sources) {
  slide.speakerNotes.textFrame.setText([
    talkTrack,
    "",
    "[Sources]",
    ...sources.map((source) => `- ${source}`),
    "[/Sources]",
  ].join("\n"));
  slide.speakerNotes.setVisible(true);
}

await fs.mkdir(renderDir, { recursive: true });
await fs.mkdir(layoutDir, { recursive: true });

const presentation = await PresentationFile.importPptx(await FileBlob.load(sourcePptx));

// P01 — Minimal branded cover.
{
  const slide = presentation.slides.items[0];
  const inherited = shapeByName(slide, "内容占位符 2");
  inherited.frame = { left: 92, top: 178, width: 760, height: 100 };
  inherited.text.set("智能科研方法");
  styleText(inherited, {
    fontSize: 56,
    color: C.navy,
    bold: true,
    verticalAlignment: "bottom",
    insets: { left: 0, top: 0, right: 0, bottom: 0 },
  });
  addText(slide, "cover-en", "AI for Research: Methods and Practice", { left: 96, top: 292, width: 660, height: 38 }, { fontSize: 24, color: C.muted, typeface: "Arial" });
  addText(slide, "cover-thesis", "AI 可以参与科研，研究责任由人承担。", { left: 96, top: 360, width: 720, height: 58 }, { fontSize: 30, color: C.ink, bold: true });
  addLine(slide, "cover-rule", 96, 441, 360, 0, C.red, 4);
  addText(slide, "cover-meta", "2 学分｜32 学时｜研究生专业选修课", { left: 96, top: 460, width: 580, height: 34 }, { fontSize: 18, color: C.muted });
  setNotes(slide, "开场直接划界：课程训练研究可靠性，不以工具熟练度为目标。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/syllabus.md",
  ]);
}

for (let i = 1; i < presentation.slides.items.length; i += 1) {
  deleteEmptyPlaceholders(presentation.slides.items[i]);
  setTitle(presentation.slides.items[i], titles[i]);
}

// P02 — Open typography instead of option cards.
{
  const slide = presentation.slides.items[1];
  addText(slide, "p02-kicker", "最近一次科研相关的 AI 输出", { left: 84, top: 126, width: 520, height: 34 }, { fontSize: 20, color: C.muted, bold: true });
  addLine(slide, "p02-axis", 92, 340, 1080, 0, C.line, 2);
  const words = [
    ["线索", 100, 210, 160, 76, 52, C.muted],
    ["草稿", 350, 190, 180, 92, 62, C.ink],
    ["证据", 640, 170, 200, 110, 72, C.red],
    ["结论", 970, 145, 210, 128, 82, C.navy],
  ];
  for (const [text, left, top, width, height, fontSize, color] of words) {
    addText(slide, `p02-${text}`, text, { left, top, width, height }, { fontSize, color, bold: true, alignment: "center" });
  }
  addCircle(slide, "p02-vote-dot", 724, 331, 18, C.red);
  addText(slide, "p02-question", "你把它升级到下一种角色之前，做过什么核验？", { left: 160, top: 414, width: 960, height: 68 }, { fontSize: 30, color: C.ink, bold: true, alignment: "center" });
  addText(slide, "p02-note", "角色不是由语言流畅度决定，而是由核验过程决定。", { left: 260, top: 510, width: 760, height: 40 }, { fontSize: 20, color: C.muted, alignment: "center" });
  setNotes(slide, "举手投票；追问一位选择“证据”或“结论”的学生具体核验动作。", [
    "/Users/bright/Projects/courses/graduate/projects/lesson-01-slides.md — original P02 classroom diagnostic",
  ]);
}

// P03 — Direct paper figure with margin annotations.
{
  const slide = presentation.slides.items[2];
  addRect(slide, "p03-figure-border", { left: 58, top: 118, width: 786, height: 466 }, C.white, C.line, 1);
  await addImage(slide, "p03-ai-scientist-figure", asset("ai-scientist-fig1-page-crop.png"), { left: 66, top: 126, width: 770, height: 450 }, "Lu et al. 2026 Figure 1: The AI Scientist workflow", "contain");
  addLine(slide, "p03-margin-rule", 884, 136, 0, 402, C.red, 3);
  const notes = [
    ["01", "实验使用 tree search\n而不是一次生成"],
    ["02", "中间结果写入 log\n供后续阶段使用"],
    ["03", "评审也由模型组件执行\n评价本身需要被检查"],
  ];
  notes.forEach(([n, text], idx) => {
    const top = 146 + idx * 132;
    addText(slide, `p03-n-${n}`, n, { left: 916, top, width: 62, height: 38 }, { fontSize: 26, color: C.red, bold: true, typeface: "Arial" });
    addText(slide, `p03-note-${n}`, text, { left: 976, top: top - 2, width: 234, height: 78 }, { fontSize: 18, color: C.ink, bold: idx === 2 });
  });
  addText(slide, "p03-source", "Lu et al. · Nature 651 · 2026 · Fig. 1", { left: 66, top: 588, width: 500, height: 24 }, { fontSize: 13, color: C.muted, typeface: "Arial" });
  setNotes(slide, "先看系统结构，再问评价边界；不要把本页讲成产品演示。", [
    "https://doi.org/10.1038/s41586-026-10265-5",
    "Visual: direct crop of Figure 1 from the official open-access Nature PDF.",
  ]);
}

// P04 — Annotated paper page and evidence boundary.
{
  const slide = presentation.slides.items[3];
  addRect(slide, "p04-paper-shadow", { left: 92, top: 126, width: 426, height: 486 }, "#E6EAED", "none", 0);
  await addImage(slide, "p04-paper-page", asset("ai-scientist-page1-crop.png"), { left: 78, top: 112, width: 426, height: 486 }, "First page of Lu et al. 2026 Nature paper", "contain");
  addText(slide, "p04-big", "3  →  1", { left: 612, top: 150, width: 520, height: 100 }, { fontSize: 76, color: C.red, bold: true, alignment: "center", typeface: "Arial" });
  addText(slide, "p04-big-label", "系统稿件提交　　达到 workshop 接收线", { left: 600, top: 244, width: 550, height: 38 }, { fontSize: 20, color: C.muted, alignment: "center" });
  addLine(slide, "p04-rule-1", 626, 316, 500, 0, C.line, 2);
  addText(slide, "p04-ws", "70%", { left: 632, top: 334, width: 150, height: 66 }, { fontSize: 48, color: C.navy, bold: true, typeface: "Arial" });
  addText(slide, "p04-ws-label", "ICBINB workshop 接受率", { left: 790, top: 344, width: 316, height: 38 }, { fontSize: 20, color: C.ink });
  addText(slide, "p04-main", "32%", { left: 632, top: 410, width: 150, height: 66 }, { fontSize: 48, color: C.muted, bold: true, typeface: "Arial" });
  addText(slide, "p04-main-label", "ICLR 2025 主会议接受率", { left: 790, top: 420, width: 316, height: 38 }, { fontSize: 20, color: C.ink });
  addLine(slide, "p04-rule-2", 626, 492, 500, 0, C.line, 2);
  addText(slide, "p04-boundary", "作者团队的内部判断：\n3 篇均未达到 ICLR 主会议标准。", { left: 630, top: 510, width: 500, height: 74 }, { fontSize: 24, color: C.red, bold: true });
  setNotes(slide, "强调三层判断：完整产物、通过一次 workshop 评审、达到主会议研究标准。", [
    "https://doi.org/10.1038/s41586-026-10265-5",
    "Nature article: three generated manuscripts were selected for submission; one exceeded the workshop acceptance threshold; none met the main ICLR bar.",
    "Visual: direct render of the official article first page.",
  ]);
}

// P05 — Empirical figures and headline estimates.
{
  const slide = presentation.slides.items[4];
  addText(slide, "p05-left-label", "个人层面", { left: 86, top: 110, width: 180, height: 32 }, { fontSize: 20, color: C.green, bold: true });
  addText(slide, "p05-right-label", "集体层面", { left: 700, top: 110, width: 180, height: 32 }, { fontSize: 20, color: C.red, bold: true });
  addRect(slide, "p05-left-border", { left: 72, top: 148, width: 548, height: 330 }, C.white, C.line, 1);
  addRect(slide, "p05-right-border", { left: 658, top: 148, width: 548, height: 330 }, C.white, C.line, 1);
  await addImage(slide, "p05-fig2", haoFig2, { left: 82, top: 158, width: 528, height: 310 }, "Hao et al. 2026 Figure 2: individual impact and career outcomes", "contain");
  await addImage(slide, "p05-fig3", haoFig3, { left: 668, top: 158, width: 528, height: 310 }, "Hao et al. 2026 Figure 3: contraction in knowledge extent", "contain");
  addText(slide, "p05-metric-1", "3.02×", { left: 98, top: 494, width: 180, height: 56 }, { fontSize: 42, color: C.green, bold: true, typeface: "Arial" });
  addText(slide, "p05-metric-2", "4.84×", { left: 330, top: 494, width: 180, height: 56 }, { fontSize: 42, color: C.green, bold: true, typeface: "Arial" });
  addText(slide, "p05-metric-3", "−4.63%", { left: 688, top: 494, width: 190, height: 56 }, { fontSize: 42, color: C.red, bold: true, typeface: "Arial" });
  addText(slide, "p05-metric-4", "−22%", { left: 958, top: 494, width: 170, height: 56 }, { fontSize: 42, color: C.red, bold: true, typeface: "Arial" });
  addText(slide, "p05-qualifier", "基于 4130 万篇论文的观察性关联｜数字不构成因果证明", { left: 240, top: 574, width: 800, height: 28 }, { fontSize: 16, color: C.muted, alignment: "center" });
  setNotes(slide, "把个人效率与科学整体范围拆成两个评价问题。", [
    "https://doi.org/10.1038/s41586-025-09922-y",
    "Hao et al., Nature 649, 1237–1243 (2026), Figures 2 and 3.",
    "The reported estimates are observational associations, not causal effects.",
  ]);
}

// P06 — One continuous quality-control trajectory.
{
  const slide = presentation.slides.items[5];
  addText(slide, "p06-thesis", "AI 扩展候选，研究者控制升级条件。", { left: 92, top: 118, width: 780, height: 64 }, { fontSize: 34, color: C.ink, bold: true });
  addLine(slide, "p06-track", 132, 360, 992, 0, C.navy, 5);
  const nodes = [
    [150, "claim", "待核验主张", C.muted],
    [420, "evidence", "证据可核验", C.red],
    [690, "experiment", "实验可复现", C.green],
    [960, "trace", "过程可追溯", C.navy],
  ];
  nodes.forEach(([left, key, text, color], idx) => {
    addCircle(slide, `p06-${key}-dot`, left, 339, 42, idx === 0 ? C.white : color, color, 4);
    addText(slide, `p06-${key}-label`, text, { left: left - 58, top: 282, width: 158, height: 42 }, { fontSize: 22, color, bold: true, alignment: "center" });
  });
  addText(slide, "p06-arrow", "→", { left: 1112, top: 324, width: 62, height: 72 }, { fontSize: 50, color: C.red, bold: true, alignment: "center" });
  addText(slide, "p06-outcome", "可审计的研究闭环", { left: 854, top: 436, width: 320, height: 54 }, { fontSize: 28, color: C.red, bold: true, alignment: "right" });
  addText(slide, "p06-definition", "可核验回答“依据在哪里”｜可复现回答“能否重做”｜可追溯回答“谁做了什么判断”", { left: 124, top: 528, width: 1030, height: 36 }, { fontSize: 18, color: C.muted, alignment: "center" });
  setNotes(slide, "把三个术语分开讲清，再用“可审计”作为总称。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/syllabus.md",
    "/Users/bright/Projects/courses/graduate/projects/lesson-01-teaching-plan.md",
  ]);
}

// P07 — Eight-stage loop using connectors-first ordering.
{
  const slide = presentation.slides.items[6];
  addText(slide, "p07-claim", "示例 claim：方法 A 在条件 C 下优于 baseline B。", { left: 88, top: 114, width: 900, height: 52 }, { fontSize: 28, color: C.ink, bold: true });
  const pts = [
    [110, 250], [340, 250], [570, 250], [800, 250],
    [1030, 430], [800, 430], [570, 430], [340, 430],
  ];
  for (let i = 0; i < pts.length - 1; i += 1) {
    addLine(slide, `p07-edge-${i + 1}`, pts[i][0] + 36, pts[i][1] + 18, pts[i + 1][0] - pts[i][0] - 36, pts[i + 1][1] - pts[i][1], i === 3 ? C.red : C.line, 3);
  }
  addLine(slide, "p07-return-1", 376, 448, -206, 92, C.red, 3);
  addLine(slide, "p07-return-2", 170, 540, -26, -252, C.red, 3);
  const labels = ["问题定义", "第一性原理", "机制假设", "外部输入", "证据整理", "研究判断", "原型验证", "回写表达"];
  pts.forEach(([left, top], idx) => {
    addCircle(slide, `p07-node-${idx + 1}`, left, top, 36, idx === 0 ? C.red : C.white, idx === 0 ? C.red : C.navy, 3);
    addText(slide, `p07-num-${idx + 1}`, String(idx + 1), { left, top: top + 1, width: 36, height: 32 }, { fontSize: 17, color: idx === 0 ? C.white : C.navy, bold: true, alignment: "center", typeface: "Arial" });
    addText(slide, `p07-label-${idx + 1}`, labels[idx], { left: left - 54, top: top + 48, width: 144, height: 38 }, { fontSize: 18, color: C.ink, bold: true, alignment: "center" });
  });
  addText(slide, "p07-return-label", "失败后回到上游判断，不是重跑到成功", { left: 96, top: 540, width: 420, height: 38 }, { fontSize: 18, color: C.red, bold: true });
  setNotes(slide, "八阶段是定位系统，不是八份作业，也不是一次走完的瀑布流程。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/syllabus.md — eight-stage research chain",
  ]);
}

// P08 — Four gates on a single path.
{
  const slide = presentation.slides.items[7];
  addText(slide, "p08-intro", "门的作用：在错误进入下一阶段前，要求补证据或退回修改。", { left: 90, top: 112, width: 920, height: 52 }, { fontSize: 27, color: C.ink, bold: true });
  addLine(slide, "p08-path", 110, 372, 1030, 0, C.navy, 5);
  const gates = [
    [260, "G1 · W6", "问题门", "不可证伪 / 证据不足"],
    [520, "G2 · W9", "判断门", "baseline / 实验规格不成立"],
    [800, "G3 · W13", "验证门", "工作流没有改善研究动作"],
    [1060, "G4 · W16", "论证门", "结论无法反向追溯"],
  ];
  gates.forEach(([x, code, label, failure], idx) => {
    addLine(slide, `p08-gate-line-${idx}`, x, 226, 0, 286, C.red, idx === 3 ? 8 : 5);
  });
  gates.forEach(([x, code, label, failure], idx) => {
    addText(slide, `p08-code-${idx}`, code, { left: x - 62, top: 194, width: 124, height: 30 }, { fontSize: 15, color: C.red, bold: true, alignment: "center", typeface: "Arial" });
    addText(slide, `p08-label-${idx}`, label, { left: x - 74, top: 248, width: 148, height: 38 }, { fontSize: 24, color: C.navy, bold: true, alignment: "center" });
    addText(slide, `p08-failure-${idx}`, failure, { left: x - 105, top: 520, width: 210, height: 52 }, { fontSize: 17, color: C.muted, alignment: "center" });
  });
  addText(slide, "p08-start", "问题", { left: 76, top: 388, width: 90, height: 34 }, { fontSize: 18, color: C.muted, alignment: "center" });
  addText(slide, "p08-end", "论证", { left: 1134, top: 388, width: 90, height: 34 }, { fontSize: 18, color: C.muted, alignment: "center" });
  setNotes(slide, "每个门对应一种典型失败；未通过时回到对应研究阶段，而不是包装材料。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/assessment.md",
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/assignments.md",
  ]);
}

// P09 — Authentic starter repository structure, no terminal chrome.
{
  const slide = presentation.slides.items[8];
  addText(slide, "p09-source-label", "starter-template.md · 最小文件结构", { left: 84, top: 112, width: 420, height: 30 }, { fontSize: 17, color: C.red, bold: true, typeface: "Arial" });
  addRect(slide, "p09-paper", { left: 76, top: 152, width: 592, height: 430 }, C.paper, C.line, 1);
  addRect(slide, "p09-paper-rule", { left: 94, top: 174, width: 4, height: 382 }, C.red);
  addText(slide, "p09-tree", "project/\n├── problem-definition.md\n├── reading-cards.md\n├── artifact-tracking.md\n├── ai-usage-log.md\n├── agent-permissions.md\n├── ethics-and-compliance.md\n└── notes/", { left: 122, top: 176, width: 510, height: 340 }, { fontSize: 23, color: C.ink, bold: false, verticalAlignment: "top", typeface: "Menlo", insets: { left: 4, top: 8, right: 4, bottom: 4 } });
  addText(slide, "p09-project-rule", "第 1 周允许它不完整；后续课堂持续回写同一项目。", { left: 120, top: 526, width: 510, height: 42 }, { fontSize: 18, color: C.muted });
  addLine(slide, "p09-growth", 754, 468, 386, -230, C.red, 5);
  const weeks = [[746, 458, "W1", "问题初稿"], [832, 406, "W6", "问题门"], [920, 354, "W9", "判断门"], [1028, 292, "W13", "验证门"], [1128, 232, "W16", "论证门"]];
  weeks.forEach(([x, y, week, label], idx) => {
    addCircle(slide, `p09-dot-${idx}`, x, y, 24, idx === 0 ? C.white : C.red, C.red, 3);
    addText(slide, `p09-week-${idx}`, week, { left: x - 16, top: y + 32, width: 58, height: 26 }, { fontSize: 15, color: C.red, bold: true, alignment: "center", typeface: "Arial" });
    addText(slide, `p09-wlabel-${idx}`, label, { left: x - 46, top: y + 58, width: 120, height: 34 }, { fontSize: 16, color: C.ink, alignment: "center" });
  });
  addText(slide, "p09-growth-title", "一个项目，持续生长", { left: 760, top: 138, width: 390, height: 56 }, { fontSize: 32, color: C.navy, bold: true, alignment: "center" });
  setNotes(slide, "强调第 1 周项目本来就不完整；课程追踪的是成长与判断过程。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/starter-template.md — minimum file structure",
  ]);
}

// P10 — Flat document chain with traceability.
{
  const slide = presentation.slides.items[9];
  const xs = [74, 302, 530, 758, 986];
  for (let i = 0; i < xs.length - 1; i += 1) addLine(slide, `p10-edge-${i}`, xs[i] + 166, 292, 62, 0, C.red, 3);
  const docs = [
    ["problem-\ndefinition.md", "范围 / 非例\n可证伪命题"],
    ["evidence-map.md", "主证据 / 冲突\n证据空白"],
    ["experiments/", "配置 / 日志\n失败记录"],
    ["agent-workflow.md", "权限 / 停止条件\n人工审核"],
    ["report.md", "主张 / 证据\n局限与披露"],
  ];
  docs.forEach(([file, body], idx) => {
    addRect(slide, `p10-file-rule-${idx}`, { left: xs[idx] - 2, top: 194, width: 4, height: 290 }, idx === 4 ? C.red : C.navy);
    addText(slide, `p10-file-${idx}`, file, { left: xs[idx] + 14, top: 184, width: 196, height: 54 }, { fontSize: idx === 0 ? 15 : 17, color: idx === 4 ? C.red : C.navy, bold: true, typeface: "Menlo" });
    addText(slide, `p10-body-${idx}`, body, { left: xs[idx] + 14, top: 248, width: 196, height: 104 }, { fontSize: 20, color: C.ink, bold: false, verticalAlignment: "top" });
    addText(slide, `p10-stage-${idx}`, String(idx + 1).padStart(2, "0"), { left: xs[idx] + 14, top: 402, width: 60, height: 42 }, { fontSize: 27, color: C.muted, bold: true, typeface: "Arial" });
  });
  addText(slide, "p10-trace", "结论必须能反向追溯到实验、证据和当时的研究判断。", { left: 170, top: 520, width: 940, height: 58 }, { fontSize: 29, color: C.red, bold: true, alignment: "center" });
  setNotes(slide, "最终不是五份独立作业；报告中的结论需要绑定直接证据或实验结果与上游判断。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/assessment.md — final deliverables and acceptance criteria",
  ]);
}

// P11 — Unequal course path.
{
  const slide = presentation.slides.items[10];
  addText(slide, "p11-preface", "前半段刻意放慢：问题和证据没站稳，自动化只会更快地产生不可用结果。", { left: 92, top: 112, width: 1040, height: 48 }, { fontSize: 26, color: C.ink, bold: true });
  const segments = [
    [96, 252, 420, C.navy, "1–6", "文献、证据与问题", "问题门"],
    [516, 252, 190, C.redMid, "7–9", "假设、baseline", "判断门"],
    [706, 252, 300, C.green, "10–13", "原型、工作流与评价", "验证门"],
    [1006, 252, 174, C.red, "14–16", "表达、评审与复盘", "论证门"],
  ];
  segments.forEach(([left, top, width, color, weeks, body, gate], idx) => {
    addRect(slide, `p11-seg-${idx}`, { left, top, width, height: 20 }, color);
    addText(slide, `p11-weeks-${idx}`, weeks, { left, top: top + 38, width, height: 42 }, { fontSize: 30, color, bold: true, alignment: "center", typeface: "Arial" });
    addText(slide, `p11-body-${idx}`, body, { left: left + 8, top: top + 90, width: width - 16, height: 70 }, { fontSize: 19, color: C.ink, bold: true, alignment: "center" });
    addText(slide, `p11-gate-${idx}`, gate, { left: left + width - 96, top: top - 52, width: 92, height: 36 }, { fontSize: 16, color, bold: true, alignment: "right" });
    if (idx > 0) addLine(slide, `p11-boundary-${idx}`, left, top - 18, 0, 212, C.line, 2);
  });
  addLine(slide, "p11-project-line", 106, 508, 1050, 0, C.line, 2);
  addText(slide, "p11-project", "同一个个人项目持续回写", { left: 402, top: 490, width: 480, height: 42 }, { fontSize: 22, color: C.muted, bold: true, alignment: "center" });
  setNotes(slide, "解释四段课程如何对应四个门；前六周的宽度更大，体现实际投入。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/syllabus.md",
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/assignments.md",
  ]);
}

// P12 — Assessment bars with evidence labels.
{
  const slide = presentation.slides.items[11];
  const rows = [
    ["文献与问题定位", 25, "证据地图 / 可证伪命题", C.navy],
    ["实验设计与可复现性", 30, "baseline / 实验规格", C.red],
    ["原型与 Agent Workflow", 25, "评价报告 / 失败分析", C.green],
    ["表达、伦理与复盘", 20, "可追溯论证 / AI 披露", C.muted],
  ];
  rows.forEach(([label, value, evidence, color], idx) => {
    const top = 148 + idx * 104;
    addText(slide, `p12-label-${idx}`, label, { left: 84, top, width: 278, height: 38 }, { fontSize: 20, color: C.ink, bold: true });
    addText(slide, `p12-evidence-${idx}`, evidence, { left: 84, top: top + 42, width: 300, height: 32 }, { fontSize: 16, color: C.muted });
    addRect(slide, `p12-track-${idx}`, { left: 408, top: top + 18, width: 630, height: 18 }, C.pale);
    addRect(slide, `p12-bar-${idx}`, { left: 408, top: top + 18, width: 630 * (value / 30), height: 18 }, color);
    addText(slide, `p12-value-${idx}`, `${value}%`, { left: 1060, top: top - 2, width: 92, height: 48 }, { fontSize: 30, color, bold: true, alignment: "right", typeface: "Arial" });
  });
  addText(slide, "p12-bottom", "评分证据来自四个研究门；模型价格、Agent 数量和 Skills 数量不进入评分。", { left: 160, top: 570, width: 960, height: 36 }, { fontSize: 18, color: C.muted, alignment: "center" });
  setNotes(slide, "每一项都对应可检查工件；不要把本页讲成纯比例说明。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/assessment.md",
  ]);
}

// P13 — Peer questioning loop, connectors first.
{
  const slide = presentation.slides.items[12];
  const centers = [[172, 204], [1060, 204], [172, 506], [1060, 506]];
  centers.forEach(([x, y], idx) => addLine(slide, `p13-link-${idx}`, x, y, 640 - x, 350 - y, idx % 2 === 0 ? C.line : C.redSoft, 3));
  addRect(slide, "p13-review-sheet", { left: 432, top: 190, width: 416, height: 330 }, C.paper, C.line, 1);
  addLine(slide, "p13-sheet-rule", 456, 214, 0, 278, C.red, 4);
  addText(slide, "p13-sheet-title", "同伴质询记录", { left: 480, top: 216, width: 300, height: 42 }, { fontSize: 27, color: C.navy, bold: true });
  addText(slide, "p13-qs", "• 哪项证据最薄弱？\n• 什么结果会推翻当前假设？\n• 下一步实验能改变哪个判断？", { left: 482, top: 284, width: 326, height: 150 }, { fontSize: 22, color: C.ink, verticalAlignment: "top" });
  addText(slide, "p13-decision", "采纳 / 拒绝 / 暂缓\n均由项目作者说明理由", { left: 482, top: 440, width: 326, height: 58 }, { fontSize: 18, color: C.red, bold: true, alignment: "center" });
  centers.forEach(([x, y], idx) => {
    addCircle(slide, `p13-project-${idx}`, x - 38, y - 38, 76, C.white, idx === 0 ? C.red : C.navy, 3);
    addText(slide, `p13-project-label-${idx}`, `项目 ${String.fromCharCode(65 + idx)}`, { left: x - 64, top: y + 48, width: 128, height: 30 }, { fontSize: 17, color: C.ink, bold: true, alignment: "center" });
  });
  addText(slide, "p13-rule", "独立问题 · 独立判断 · 独立提交", { left: 374, top: 554, width: 530, height: 42 }, { fontSize: 22, color: C.muted, bold: true, alignment: "center" });
  setNotes(slide, "同伴提出问题，不共同维护仓库；反馈处理进入研究判断记录。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/assignments.md",
  ]);
}

// P14 — Three authentic fields for the first-class action.
{
  const slide = presentation.slides.items[13];
  const cols = [76, 448, 820];
  const docs = [
    ["problem-definition.md", "研究问题\n我们研究在 ______ 条件下，\n______ 方法是否能改善 ______。\n\n范围：______\n非例：______"],
    ["八阶段链路草图", "阶段　　　　 当前想法\n1 问题定义　 ______\n2 第一性原理 ______\n3 机制假设　 ______\n⋯\n8 回写表达　 ______"],
    ["ai-usage-log.md", "工具 / 模型：______\n用途：______\nContext：______\n输出用途：______\n人工核验：______\n问题或误导：______"],
  ];
  docs.forEach(([file, body], idx) => {
    addRect(slide, `p14-rule-${idx}`, { left: cols[idx] - 2, top: 146, width: 4, height: 392 }, idx === 1 ? C.navy : C.red);
    addText(slide, `p14-file-${idx}`, file, { left: cols[idx] + 18, top: 136, width: 320, height: 46 }, { fontSize: 18, color: idx === 1 ? C.navy : C.red, bold: true, typeface: idx === 1 ? "Arial Unicode MS" : "Menlo" });
    addText(slide, `p14-body-${idx}`, body, { left: cols[idx] + 18, top: 200, width: 320, height: 290 }, { fontSize: 19, color: C.ink, verticalAlignment: "top", typeface: idx === 1 ? "Arial Unicode MS" : "Menlo", insets: { left: 2, top: 4, right: 2, bottom: 2 } });
    addText(slide, `p14-num-${idx}`, String(idx + 1).padStart(2, "0"), { left: cols[idx] + 18, top: 502, width: 70, height: 40 }, { fontSize: 28, color: C.muted, bold: true, typeface: "Arial" });
  });
  addText(slide, "p14-close", "不求完整，只求下一步可以被检查。", { left: 290, top: 558, width: 700, height: 46 }, { fontSize: 28, color: C.red, bold: true, alignment: "center" });
  setNotes(slide, "此页在个人实践开始后继续停留；没有题目的学生使用备用微型问题。", [
    "/Users/bright/Projects/courses/graduate/ai-research-workflow-course/starter-template.md",
    "/Users/bright/Projects/courses/graduate/projects/lesson-01-teaching-plan.md",
  ]);
}

const inspect = await presentation.inspect({ kind: "slide,textbox,shape,image,notes,layout", maxChars: 60000 });
await fs.writeFile(path.join(workspace, "final.inspect.ndjson"), inspect.ndjson);

for (let index = 0; index < presentation.slides.items.length; index += 1) {
  const slide = presentation.slides.items[index];
  const number = String(index + 1).padStart(2, "0");
  await saveBlob(path.join(renderDir, `slide-${number}.png`), await presentation.export({ slide, format: "png", scale: 1.5 }));
  await fs.writeFile(path.join(layoutDir, `slide-${number}.layout.json`), await (await slide.export({ format: "layout" })).text());
}

await saveBlob(path.join(workspace, "pilot-montage.webp"), await presentation.export({ format: "webp", montage: true, scale: 1 }));
const pptx = await PresentationFile.exportPptx(presentation);
await pptx.save(outputPptx);
console.log(outputPptx);
