# AGENTS Context Map

## Quick WSL locations

- mathBeautifulFork: `/home/stra/sites/mathBeautifulFork`
- BeautifulMivney: `/home/stra/repos/BeautifulMivney`
- BeautifulYesodot: `/home/stra/repos/BeautifulYesodot`

## Project scope

- This project teaches Israeli 5-unit Bagrut mathematics:
  - `35571`
  - `35572`
- Target audience: grades 10-12 (highschool).

## Current status

- Dormant recently (current teaching year focuses on CS).
- Keep the project healthy and ready for reactivation.

## Sibling alignment (Jekyll infra)

- Keep Jekyll infrastructure reasonably aligned across the 3 sibling repos:
  - `mathBeautifulFork` (this repo)
  - `BeautifulMivney`
  - `BeautifulYesodot`
- Even while dormant, avoid drifting far from sibling infra conventions.

## Cross-repo references

- mathBeautifulFork (this repo):
  - WSL: `/home/stra/sites/mathBeautifulFork`
  - Windows: `\\wsl.localhost\Ubuntu\home\stra\sites\mathBeautifulFork`

- BeautifulMivney:
  - WSL: `/home/stra/repos/BeautifulMivney`
  - Windows: `\\wsl.localhost\Ubuntu\home\stra\repos\BeautifulMivney`

- BeautifulYesodot:
  - WSL: `/home/stra/repos/BeautifulYesodot`
  - Windows: `\\wsl.localhost\Ubuntu\home\stra\repos\BeautifulYesodot`

- Shared utility often relevant for bagrut workflows:
  - `bag_splitter` (WSL): `/home/stra/repos/bag_splitter`

## Cross-filesystem access fallback (important)

- When direct PowerShell access to sibling repos or `/mnt/c/...` paths fails with permission/IO errors, use direct WSL shell commands instead.
- Preferred pattern:
  - `wsl bash -lc "ls /mnt/c/Users/3stra/AndroidStudioProjects/Presence"`
  - `wsl bash -lc "sed -n '1,200p' /mnt/c/Users/3stra/AndroidStudioProjects/TasksONAlbertsFB/app/src/main/java/com/example/tasks/FBRef.java"`
  - `wsl bash -lc "find /mnt/c/Users/3stra/AndroidStudioProjects -name FBRef.java"`
- This fallback should be used for read/search operations across sibling projects when UNC or mounted-path access is blocked from the current shell context.

## Tutorial language/style convention

- Default language direction should lean Hebrew unless explicitly decided otherwise for a specific page.
- For English markdown tutorials, add this block near the top (after frontmatter and initial note):

```html
<style>
main {
  direction: ltr !important;
  text-align: left !important;
}
</style>
```

- For a short English block inside a Hebrew or mixed-language page, do not apply page-wide LTR styling. Wrap only that block with the shared `.english` class so its direction and alignment remain readable:

```html
<div markdown="1" class="english">

1. English list item.
2. Another English list item.

</div>
```

  Use this for English lists, prompts, quotations, and multi-paragraph examples. When writing mixed content, keep language changes visually contained in an appropriate wrapper instead of relying on inline `direction` or `text-align` styles. This keeps Hebrew pages clean and prevents LTR content from disrupting the surrounding RTL layout.

- Do not retroactively rewrite in-progress tutorials between Hebrew/English unless explicitly requested.

## Important content highlighting and visual flow

- Keep lesson pages visually engaging and easy to scan. Use the repository's design classes to emphasize important guidance, decisions, warnings, successful outcomes, and reusable prompts:
  - `{: .box-note}` for a short, single-paragraph note;
  - `{: .box-success}` for a short, single-paragraph positive instruction or completed outcome;
  - `{: .box-warning}` for risks, guardrails, or caution;
  - `{: .box-error}` for a failure condition or prohibition that must stand out.
- When highlighted content contains a list, multiple paragraphs, Markdown structure, or another section, use a block wrapper instead of the short syntax:

```html
<div markdown="1" class="box-note">

...content with lists, paragraphs, or Markdown...

</div>
```

- Do not use a `text` code fence merely to emphasize ordinary prose or a prompt instruction; reserve code fences for literal commands, code, or text the reader should copy exactly. Prefer an appropriate design box when the content is instructional or presentation-oriented.
- Use `<details markdown="1"><summary>…</summary>` for secondary reference material so that the main presentation flow stays focused. Keep primary explanations and decisions visible.
- Prefer relative CSS units (`rem` for type scale and `em` for local proportional adjustments) over `px`, especially for text and spacing. Use `px` only when a fixed rendering unit is materially more appropriate, such as an SVG stroke width or a one-pixel border.

## Media include convention

- Prefer the repo's shared Jekyll includes for embedded media instead of hand-writing iframe/embed markup in lesson pages.
- YouTube videos:

```liquid
{% include youtube.html id="VIDEO_ID" %}
```

- Looping/autoplaying YouTube background-style embeds:

```liquid
{% include youtube_loop.html id="VIDEO_ID" %}
```

- Local MP4 files under `assets/video/`:

```liquid
{% include mp4.html id="filename.mp4" %}
```

- For lesson companion videos, place the YouTube include near the start of the page body, immediately after front matter or the opening note, unless the lesson has a stronger local placement.

## Tutorial layout pattern convention

- When a step and a visual (screenshot/diagram) are best understood side-by-side, prefer the `two-columns` pattern instead of stacking.
- Encourage this for GUI walkthroughs (step text on one side, screenshot on the other).
- Reusable pattern:

```html
<div class="two-columns">
<div markdown="1" class="column">
...step text...
</div>
<div markdown="1" class="column">
...image...
</div>
</div>
```
