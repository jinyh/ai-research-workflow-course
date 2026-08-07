"""MkDocs 钩子：把指向未发布目标的内部链接渲染为纯文字。

源文件（course/、lessons/）在仓库内会链接备课规划、AGENTS.md、references 本地
PDF 等内部资源；这些目标不进入站点 docs/，发布后变成断链。本钩子在渲染前
扫描 markdown 链接，若目标在 docs_dir 不存在，则把 `[label](url)` 降级为纯
文字 `label`，保留可读性、不产生 <a>、不触发 mkdocs 断链 warning。

只影响站点展示，不改源文件，不破坏仓库内部链接。与 hide_metadata.py 并列。
"""

from __future__ import annotations

import os
import re
from pathlib import Path
from urllib.parse import unquote

# 匹配 markdown 链接 [label](url)，label 可含 ] 转义但此处取简单形式；
# url 不以 http:// https:// mailto: # 开头（外部链接和锚点不动）。
_LINK_RE = re.compile(
    r"\[(?P<label>[^\]]+)\]\((?P<url>[^)]+)\)",
)


def _is_internal(url: str) -> bool:
    if not url:
        return False
    lower = url.lower()
    if lower.startswith(("http://", "https://", "mailto:", "#")):
        return False
    return True


def _target_exists(url: str, page_src: Path, docs_dir: Path) -> bool:
    """url 相对 page_src 所在目录解析；检查目标文件是否存在于站点内。

    path.exists() 会自动归约 .. 并跟随软链接，因此 docs/ 下的软链接
    （指向仓库源）算作存在；指向 docs/ 外或未发布目标的链接算作不存在。
    url 可能含 #anchor、?query 和 % 编码，先剥离再解码。
    """
    path_part = url.split("#", 1)[0].split("?", 1)[0]
    if not path_part:
        return True  # 纯锚点，视为存在

    decoded = unquote(path_part)
    target = page_src.parent / decoded  # 不 resolve：软链接字面在 docs/ 内
    return target.exists()


def on_page_markdown(markdown: str, *, page, config, **_kwargs) -> str:
    docs_dir = Path(config["docs_dir"])
    page_src = docs_dir / page.file.src_path

    def _replace(match: re.Match) -> str:
        url = match.group("url").strip()
        if not _is_internal(url):
            return match.group(0)
        if _target_exists(url, page_src, docs_dir):
            return match.group(0)
        # 目标不在站点：降级为纯文字 label
        return match.group("label")

    return _LINK_RE.sub(_replace, markdown)
