#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Markdown 内部链接有效性检查（只读）。

扫描跟踪范围内的 .md，验证 [text](rel.md) 与 [text](<rel.md>) 内部链接和锚点，
跳过外部 URL 与 gitignore 排除路径。用于大改版或跨文档调整后的链接审查。

    python3 scripts/check_links.py

退出码：发现断链 → 1；否则 0。
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent

# 链接检查范围：跟踪目录 + 根级权威文件
SCOPE_DIRS = ["course", "lessons", "docs", "references/notes"]
SCOPE_FILES = ["README.md", "AGENTS.md", "references/README.md"]

# gitignore 或项目口径约定不参与检查的路径前缀（外部克隆库、本地缓存等）
EXCLUDE_PREFIXES = (
    ".git/",
    ".work/",
    ".local/",
    ".agents/",
    ".opencode/",
    ".claude/",
    "archive/",
    "references/library/papers/",
    "references/library/books/",
    "references/library/talk/",
    "references/library/template/",
    "references/library/research-method/",
)

LINK_RE = re.compile(r"!?\[([^\]]*)\]\(([^)]+)\)")
CODE_SPAN_RE = re.compile(r"`[^`]+`")


def is_excluded(path: Path) -> bool:
    rel = path.relative_to(REPO).as_posix()
    return any(rel.startswith(p) for p in EXCLUDE_PREFIXES)


def iter_scope_md() -> list[Path]:
    files: list[Path] = []
    for d in SCOPE_DIRS:
        for p in (REPO / d).rglob("*.md"):
            if not is_excluded(p):
                files.append(p)
    for f in SCOPE_FILES:
        p = REPO / f
        if p.exists():
            files.append(p)
    return sorted(set(files))


def strip_code_spans(line: str) -> str:
    return CODE_SPAN_RE.sub("", line)


def headings_in(text: str) -> list[str]:
    out = []
    for ln in text.splitlines():
        m = re.match(r"\s*(#{1,6})\s+(.*)", ln)
        if m:
            out.append(m.group(2).strip())
    return out


def normalize_anchor(s: str) -> str:
    return re.sub(r"[\s\-_#]", "", s).lower()


def check_links() -> tuple[list[str], list[str]]:
    """返回 (断链列表, 锚点告警列表)。"""
    broken: list[str] = []
    anchor_warns: list[str] = []
    for f in iter_scope_md():
        try:
            text = f.read_text(encoding="utf-8")
        except UnicodeDecodeError:
            continue
        for i, ln in enumerate(text.splitlines(), 1):
            for _label, target in LINK_RE.findall(strip_code_spans(ln)):
                target = target.strip()
                if target.startswith("<") and target.endswith(">"):
                    target = target[1:-1]
                if not target or target.startswith(("http://", "https://", "mailto:", "ftp://")):
                    continue
                path_part, _, anchor = target.partition("#")
                if path_part == "":
                    target_file = f  # 纯锚点，指向本文
                else:
                    target_file = (f.parent / path_part).resolve()
                # 目标解析进排除路径（外部克隆库等）→ 跳过
                try:
                    rel_target = target_file.relative_to(REPO).as_posix()
                except ValueError:
                    rel_target = target_file.as_posix()
                if any(rel_target.startswith(p) for p in EXCLUDE_PREFIXES):
                    continue
                if path_part != "" and not target_file.exists():
                    rel_f = f.relative_to(REPO).as_posix()
                    broken.append(f"{rel_f}:{i}  →  {target}  (文件不存在)")
                    continue
                if anchor:
                    try:
                        ttext = target_file.read_text(encoding="utf-8")
                    except (OSError, UnicodeDecodeError):
                        continue
                    norm = normalize_anchor(anchor)
                    if norm and not any(
                        norm in normalize_anchor(h) or normalize_anchor(h) in norm
                        for h in headings_in(ttext)
                    ):
                        rel_f = f.relative_to(REPO).as_posix()
                        anchor_warns.append(f"{rel_f}:{i}  →  {target}  (锚点未匹配到标题)")
    return broken, anchor_warns


def main() -> int:
    broken, anchor_warns = check_links()
    scanned = len(iter_scope_md())
    if broken:
        print(f"[FAIL] {len(broken)} 处断链（扫描 {scanned} 个 md）：")
        for b in broken:
            print(f"      {b}")
    else:
        print(f"[PASS] 内部链接有效（扫描 {scanned} 个 md）")
    if anchor_warns:
        print(f"\n[告警] {len(anchor_warns)} 处锚点未匹配到标题：")
        for w in anchor_warns:
            print(f"      ⚠ {w}")
    return 1 if broken else 0


if __name__ == "__main__":
    sys.exit(main())
