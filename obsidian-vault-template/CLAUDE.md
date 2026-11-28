# 知识库规则 / Vault Rules

## 文件夹 / Folders
- `raw/` — 原始素材，只读，不要修改或删除。 / Source material. Read-only: never edit or delete.
- `wiki/` — 整理后的页面，由 Claude 维护。 / Processed pages, maintained by Claude.
- `wiki/index.md` — 所有 wiki 页面的目录。 / Index of every wiki page.

## "处理这个" / "Process this"
当用户说"处理这个"（或 "process this"）时： / When the user says "处理这个" or "process this":
1. 读取 `raw/` 中新增的文件。 / Read the new file(s) in `raw/`.
2. 在 `wiki/` 新建一页，文件名用主题，例如 `wiki/时间管理.md`。 / Create one page in `wiki/` named after the topic.
3. 页面结构 / Page layout:
   ```
   # 标题 / Title
   来源 / Source: [[raw/文件名]]
   标签 / Tags: #tag1 #tag2

   ## 要点 / Key points
   ## 详细笔记 / Notes
   ## 相关 / Related
   ```
4. 正文中英双语；能链接已有页面时加 `[[双链]]`。 / Write bilingual; add `[[wikilinks]]` to existing pages.
5. 在 `wiki/index.md` 加一行链接。 / Add one line to `wiki/index.md`.
6. 主题已有页面时，更新它，不要重复新建。 / If a page on the topic exists, update it instead of creating a duplicate.

## 按标题归档 / Filing under headings
只在指定标题下追加，文件其余部分保持不变。 / Append only under the named heading; leave the rest of the file unchanged.

| 内容 / Output | 目标 / Target |
|---|---|
| 任务运行日志 / Run log | 今日日记 `## log` / today's daily note |
| 会议决定 / Meeting decisions | 项目笔记 `## decisions` / project note |
| 新资料来源 / New sources | `## reading` |

方法 / How:
- 优先用 Obsidian CLI（需 Obsidian 运行中）。命令以 `obsidian help` 或 https://obsidian.md/help/cli 为准。
  Prefer the Obsidian CLI (Obsidian must be running). Check exact commands with `obsidian help` or https://obsidian.md/help/cli.
- CLI 不可用时，直接编辑 `.md` 文件：找到标题，在下一个同级标题前插入。标题不存在就在文件末尾新建。
  If the CLI isn't available, edit the `.md` file: find the heading and insert before the next heading of the same level. If the heading is missing, add it at the end.
