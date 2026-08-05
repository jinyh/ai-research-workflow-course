from __future__ import annotations

from pathlib import Path
import json
import math
import textwrap

from PIL import Image, ImageDraw, ImageFont


PROJECT = Path(__file__).resolve().parents[1]
GENERATED = PROJECT / "generated"
PROMPTS = PROJECT / "prompts"
QA = PROJECT / "qa"

W, H = 1920, 1080
SJTU_RED = (198, 18, 35)
SJTU_RED_DARK = (145, 20, 31)
DARK = (42, 49, 62)
MUTED = (96, 103, 116)
LIGHT_BG = (248, 249, 251)
LINE = (222, 226, 232)
WHITE = (255, 255, 255)
PINK = (253, 244, 246)
BLUE = (31, 90, 142)
BLUE_SOFT = (235, 243, 250)
GREEN = (30, 126, 99)
GREEN_SOFT = (235, 247, 243)
AMBER = (176, 117, 20)
AMBER_SOFT = (255, 248, 232)

FONT_REG = "/System/Library/Fonts/STHeiti Medium.ttc"
FONT_FALLBACK = "/System/Library/Fonts/Supplemental/Arial Unicode.ttf"


def font(size: int) -> ImageFont.FreeTypeFont:
    try:
        return ImageFont.truetype(FONT_REG, size=size)
    except OSError:
        return ImageFont.truetype(FONT_FALLBACK, size=size)


F = {name: font(size) for name, size in {
    "kicker": 26,
    "title": 58,
    "title2": 48,
    "subtitle": 30,
    "body": 28,
    "body_s": 24,
    "label": 22,
    "small": 20,
    "tiny": 18,
    "num": 34,
}.items()}


def tw(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> int:
    box = draw.textbbox((0, 0), text, font=fnt)
    return box[2] - box[0]


def rounded(draw: ImageDraw.ImageDraw, xy, radius=18, fill=WHITE, outline=LINE, width=2):
    draw.rounded_rectangle(xy, radius=radius, fill=fill, outline=outline, width=width)


def rect(draw: ImageDraw.ImageDraw, xy, fill, outline=None, width=1):
    draw.rectangle(xy, fill=fill, outline=outline, width=width)


def draw_text(draw, xy, text, fnt, fill=DARK, anchor=None, align="left", spacing=10):
    draw.multiline_text(xy, text, font=fnt, fill=fill, anchor=anchor, align=align, spacing=spacing)


def wrap(draw, text: str, fnt: ImageFont.FreeTypeFont, max_w: int) -> str:
    lines: list[str] = []
    for para in text.split("\n"):
        buf = ""
        for ch in para:
            trial = buf + ch
            if tw(draw, trial, fnt) <= max_w:
                buf = trial
            else:
                if buf:
                    lines.append(buf)
                buf = ch
        if buf:
            lines.append(buf)
    return "\n".join(lines)


def centered(draw, box, text, fnt, fill=DARK, spacing=8):
    x1, y1, x2, y2 = box
    lines = text.split("\n")
    heights = [draw.textbbox((0, 0), line, font=fnt)[3] for line in lines]
    total = sum(heights) + spacing * (len(lines) - 1)
    y = y1 + (y2 - y1 - total) / 2
    for line, h in zip(lines, heights):
        draw.text((x1 + (x2 - x1) / 2, y), line, font=fnt, fill=fill, anchor="ma")
        y += h + spacing


def arrow(draw, start, end, color=SJTU_RED, width=5):
    draw.line([start, end], fill=color, width=width)
    sx, sy = start
    ex, ey = end
    ang = math.atan2(ey - sy, ex - sx)
    head = 18
    p1 = (ex - head * math.cos(ang - 0.45), ey - head * math.sin(ang - 0.45))
    p2 = (ex - head * math.cos(ang + 0.45), ey - head * math.sin(ang + 0.45))
    draw.polygon([end, p1, p2], fill=color)


def header(draw, title: str, subtitle: str | None = None):
    rect(draw, (0, 0, W, 92), SJTU_RED)
    draw.text((92, 28), "智能科研方法 · 研究生试讲", font=F["kicker"], fill=WHITE)
    draw.text((92, 142), title, font=F["title2"], fill=DARK)
    if subtitle:
        draw.text((96, 210), subtitle, font=F["subtitle"], fill=MUTED)
    draw.line((92, 274, W - 92, 274), fill=LINE, width=2)


def footer(draw, text: str):
    rounded(draw, (92, 965, W - 92, 1030), radius=16, fill=LIGHT_BG, outline=LINE, width=2)
    draw.text((W / 2, 984), text, font=F["body_s"], fill=SJTU_RED, anchor="ma")


def slide1():
    img = Image.new("RGB", (W, H), WHITE)
    draw = ImageDraw.Draw(img)
    rect(draw, (0, 0, W, 96), SJTU_RED)
    draw.text((92, 34), "面向 CS / AI 研究生的科研方法训练", font=F["kicker"], fill=WHITE)
    draw.text((92, 172), "智能科研方法", font=F["title"], fill=DARK)
    draw.text((96, 255), "AI for Research: Methods and Practice", font=F["subtitle"], fill=MUTED)
    draw.text((96, 318), "用 AI 增强科研全过程，而不是替代科研判断", font=F["subtitle"], fill=SJTU_RED)

    left = (92, 420, 820, 830)
    rounded(draw, left, radius=22, fill=LIGHT_BG, outline=LINE, width=2)
    draw.text((132, 460), "课程定位", font=F["body"], fill=SJTU_RED)
    bullets = [
        ("对象", "CS/AI 研究生，2 学分 / 32 学时"),
        ("主线", "按科研动作组织，不按工具清单组织"),
        ("底线", "AI 使用必须可验证、可复现、可追溯"),
    ]
    y = 532
    for label, body in bullets:
        rounded(draw, (132, y, 770, y + 72), radius=16, fill=WHITE, outline=LINE, width=2)
        draw.text((160, y + 21), label, font=F["label"], fill=SJTU_RED)
        draw.text((245, y + 20), body, font=F["label"], fill=DARK)
        y += 96

    cx, cy, r = 1310, 620, 250
    draw.ellipse((cx - r, cy - r, cx + r, cy + r), outline=(224, 210, 214), width=12)
    nodes = [
        ("文献", -90, BLUE_SOFT, BLUE),
        ("证据", -18, PINK, SJTU_RED),
        ("判断", 54, AMBER_SOFT, AMBER),
        ("实验", 126, GREEN_SOFT, GREEN),
        ("表达", 198, (244, 244, 246), DARK),
    ]
    pts = []
    for text, deg, fill, color in nodes:
        a = math.radians(deg)
        x = cx + r * math.cos(a)
        y = cy + r * math.sin(a)
        pts.append((x, y))
        rounded(draw, (x - 86, y - 44, x + 86, y + 44), radius=18, fill=fill, outline=color, width=3)
        draw.text((x, y - 14), text, font=F["label"], fill=color, anchor="ma")
    for i in range(len(pts)):
        arrow(draw, pts[i], pts[(i + 1) % len(pts)], color=(198, 120, 130), width=3)

    rounded(draw, (1110, 555, 1510, 686), radius=22, fill=WHITE, outline=SJTU_RED, width=3)
    centered(draw, (1110, 555, 1510, 686), "可靠研究\n不是自动写完", F["body"], fill=SJTU_RED)
    footer(draw, "课堂要训练的不是“更会用 AI”，而是在 AI 时代更可靠地做研究")
    return img


def slide2():
    img = Image.new("RGB", (W, H), WHITE)
    draw = ImageDraw.Draw(img)
    header(draw, "八阶段研究链路：把 AI 放进科研动作", "AI 可以参与每个阶段，但关键研究判断不可外包")

    groups = [
        ("定题", "01 问题定义\n02 第一性原理", "问题是否重要？", BLUE_SOFT, BLUE),
        ("建模", "03 机制假设\n04 外部输入摄取", "假设是否可检验？", PINK, SJTU_RED),
        ("取证", "05 证据整理\n06 研究判断", "证据是否充分？", AMBER_SOFT, AMBER),
        ("交付", "07 原型验证\n08 回写与表达", "结论是否可追溯？", GREEN_SOFT, GREEN),
    ]
    x0, y0, bw, bh, gap = 110, 340, 400, 420, 44
    for i, (phase, stages, question, fill, color) in enumerate(groups):
        x = x0 + i * (bw + gap)
        rounded(draw, (x, y0, x + bw, y0 + bh), radius=22, fill=fill, outline=color, width=3)
        draw.ellipse((x + 28, y0 + 30, x + 92, y0 + 94), fill=color)
        draw.text((x + 60, y0 + 47), str(i + 1), font=F["label"], fill=WHITE, anchor="ma")
        draw.text((x + 122, y0 + 46), phase, font=F["body"], fill=color)
        draw.line((x + 34, y0 + 120, x + bw - 34, y0 + 120), fill=color, width=3)
        draw_text(draw, (x + 48, y0 + 165), stages, F["body_s"], fill=DARK, spacing=18)
        rounded(draw, (x + 42, y0 + 314, x + bw - 42, y0 + 374), radius=14, fill=WHITE, outline=LINE, width=2)
        centered(draw, (x + 42, y0 + 314, x + bw - 42, y0 + 374), question, F["small"], fill=color)
        if i < len(groups) - 1:
            arrow(draw, (x + bw + 10, y0 + 205), (x + bw + gap - 12, y0 + 205), color=SJTU_RED, width=5)

    draw.text((112, 800), "四个研究门", font=F["body"], fill=SJTU_RED)
    gates = [
        ("问题门", "问题定义 · 非例 · 证据地图初版"),
        ("判断门", "baseline · 实验规格 · 取舍理由"),
        ("验证门", "实验日志 · 失败分析 · 人工核验"),
        ("论证门", "追溯链 · AI 披露 · 伦理说明"),
    ]
    gx, gy, gw, gh = 260, 790, 370, 82
    for i, (gate, body) in enumerate(gates):
        x = gx + i * (gw + 36)
        rounded(draw, (x, gy, x + gw, gy + gh), radius=18, fill=WHITE, outline=LINE, width=2)
        draw.text((x + 24, gy + 17), gate, font=F["label"], fill=SJTU_RED)
        draw.text((x + 116, gy + 19), body, font=F["tiny"], fill=MUTED)
    footer(draw, "研究门不是形式化检查，而是让 AI 参与过程可审查、可复盘、可问责")
    return img


def slide3():
    img = Image.new("RGB", (W, H), WHITE)
    draw = ImageDraw.Draw(img)
    header(draw, "课堂样例：用 Transformer 论文拆科研闭环", "3 分钟微型试讲：不讲模型细节，而是拆问题、假设、证据、判断和留痕")

    chain = [
        ("问题", "序列建模必须依赖\n循环或卷积结构吗？", "问题定义卡"),
        ("假设", "注意力可直接建模\n长距离依赖", "机制假设表"),
        ("证据", "翻译结果\n训练效率\n对比实验", "证据地图"),
        ("判断", "结构假设、计算效率\n与实验结果共同支撑", "判断记录"),
        ("延展", "解释性\n计算成本\n泛化边界", "缺口清单"),
    ]
    x0, y0, cw, ch, gap = 102, 360, 320, 410, 42
    colors = [(BLUE_SOFT, BLUE), (PINK, SJTU_RED), (AMBER_SOFT, AMBER), (GREEN_SOFT, GREEN), ((244, 244, 246), DARK)]
    for i, (title, body, artifact) in enumerate(chain):
        x = x0 + i * (cw + gap)
        fill, color = colors[i]
        rounded(draw, (x, y0, x + cw, y0 + ch), radius=22, fill=fill, outline=color, width=3)
        draw.ellipse((x + 26, y0 + 30, x + 88, y0 + 92), fill=color)
        draw.text((x + 57, y0 + 47), str(i + 1), font=F["small"], fill=WHITE, anchor="ma")
        draw.text((x + 108, y0 + 42), title, font=F["body"], fill=color)
        draw.line((x + 34, y0 + 118, x + cw - 34, y0 + 118), fill=color, width=3)
        centered(draw, (x + 28, y0 + 152, x + cw - 28, y0 + 282), body, F["label"], fill=DARK, spacing=12)
        rounded(draw, (x + 36, y0 + 326, x + cw - 36, y0 + 378), radius=14, fill=WHITE, outline=LINE, width=2)
        centered(draw, (x + 36, y0 + 326, x + cw - 36, y0 + 378), artifact, F["small"], fill=color)
        if i < len(chain) - 1:
            arrow(draw, (x + cw + 8, y0 + 205), (x + cw + gap - 10, y0 + 205), color=SJTU_RED, width=4)

    rounded(draw, (155, 815, 1765, 910), radius=20, fill=LIGHT_BG, outline=LINE, width=2)
    draw.text((W / 2, 842), "研究生课堂重点：学生不是总结论文，而是抽取证据链、判断链和留痕材料", font=F["body_s"], fill=SJTU_RED, anchor="ma")
    footer(draw, "经典论文用于建立方法，最新论文用于迁移到当前前沿")
    return img


def main():
    GENERATED.mkdir(parents=True, exist_ok=True)
    PROMPTS.mkdir(parents=True, exist_ok=True)
    QA.mkdir(parents=True, exist_ok=True)

    slides = [slide1(), slide2(), slide3()]
    out_files = []
    for idx, img in enumerate(slides, start=1):
        path = GENERATED / f"slide-{idx:02d}.png"
        img.save(path, quality=95)
        out_files.append(path)

    prompts = [
        {
            "slide": 1,
            "title": "智能科研方法",
            "goal": "建立课程定位：AI 增强科研全过程，而不是替代科研判断。",
            "core": ["面向 CS/AI 研究生", "按科研动作组织", "可验证、可复现、可追溯"],
            "layout": "左侧定位卡片，右侧科研闭环视觉。",
        },
        {
            "slide": 2,
            "title": "八阶段研究链路",
            "goal": "说明课程不是工具清单，而是有研究门约束的科研动作链。",
            "core": ["定题、建模、取证、交付", "四个研究门", "关键判断不可外包"],
            "layout": "四阶段横向链路，下方研究门。",
        },
        {
            "slide": 3,
            "title": "课堂样例：用 Transformer 论文拆科研闭环",
            "goal": "展示面向研究生的具体教学片段。",
            "core": ["问题、假设、证据、判断、延展", "不讲模型细节", "抽取证据链与判断链"],
            "layout": "五步课堂拆解链路。",
        },
    ]
    (PROMPTS / "page_prompts.json").write_text(json.dumps(prompts, ensure_ascii=False, indent=2), encoding="utf-8")

    notes = textwrap.dedent(
        """\
        # 3 页试讲 PPT 讲者提示

        ## 第 1 页：课程定位
        开场强调这不是 AI 工具展示课，而是 AI 增强的研究生科研方法课。AI 的价值是进入文献、证据、实验和表达流程，但研究判断必须由人负责。

        ## 第 2 页：八阶段研究链路
        用四段链路解释八阶段：定题、建模、取证、交付。四个研究门负责检查问题、判断、验证和论证，保证学生项目不是最后拼成一份不可追溯报告。

        ## 第 3 页：Transformer 微型课堂
        用经典论文做 3 分钟课堂样例。不讲 Transformer 结构细节，而是让学生拆出研究问题、机制假设、关键证据、研究判断和可延展缺口。
        """
    )
    (QA / "speaker-notes.md").write_text(notes, encoding="utf-8")

    qa = {
        "slide_count": len(out_files),
        "size": [W, H],
        "style": "SJTU red, white academic classroom, image-type slide",
        "editable_scope": "图片型 PPTX；页面内容作为整页图片插入，不能逐字编辑。",
        "source_outline": "ai-research-workflow-course/trial-lecture-outline.md",
    }
    (QA / "qa_record.json").write_text(json.dumps(qa, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
