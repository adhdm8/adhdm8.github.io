# Agent Guide — ADHD m8 Blog

> **Project**: ADHD m8 Blog  
> **Framework**: Astro v5.16.6 + AstroPaper theme  
> **Content**: ADHD-focused articles, book reviews, resource guides  
> **Last Updated**: 2026-09-28

---

## 0. Ground Rules (Read First)

### Which Doc Governs What

| Doc | Role | Contains rules? |
|---|---|---|
| `AGENTS.md` (this file) | **How** to work: all writing, SEO, and workflow rules | ✅ The only rulebook |
| `.sisyphus/plans/content-strategy.md` | **What** to work on: backlog, content hubs, Keyword Registry | ❌ Data and priorities only |
| `CLAUDE.md` | Pointer to this file for Claude Code | ❌ No rules |

- If two docs disagree, **this file wins**. Fix the other doc instead of working around it.
- **To change a rule, edit this file.** Don't add override sections to `CLAUDE.md`, and don't write rules into plan files.
- An explicit instruction from the user in the current conversation overrides any rule here.

### Hard Rules (Never Skip)

1. **Publish by default.** New posts get `draft: false`. Use `draft: true` only when the user explicitly asks, e.g. "keep this as a draft" or "don't publish yet".
2. **Never change a published post's `slug`.** Merging or removing a post needs a redirect, and redirects need user approval because `astro.config.ts` is locked (see content-strategy.md §3, P1-00).
3. **Check the Keyword Registry before writing.** Never target a primary keyword another post already owns (content-strategy.md §4).
4. **Every new post has the required closing structure** (§3 below): `### Key Takeaways` → `### Conclusion` ending with **Next step** → engagement line.
5. **Never mention comments.** The site has no comment system. Engagement lines point to Instagram.
6. **Only use approved tags** (§12). Adding a new tag means adding it to the list here first.
7. **Don't modify** `astro.config.ts`, `src/content.config.ts`, or `src/layouts/` without user approval. Don't add dependencies without asking.
8. **`pnpm run build` must pass** before any task counts as done. It runs `astro check` and catches frontmatter errors.
9. **Keep content-strategy.md current.** In the same commit as the work, mark the backlog task `✅` and add or update the post's Keyword Registry row.
10. **Pushing to `main` publishes the live site** (GitHub Actions → GitHub Pages). Only commit or push when the user asks.

### Commit Message Format

| Change | Format |
|---|---|
| New post | `new post: <Post Title>` |
| Edit existing post(s) | `update post: <slug> - <what changed>` |
| Strategy/docs/site changes | Short imperative summary, e.g. `add hub links to diagnosis posts` |

---

## 1. Project Overview

This is an **Astro-based static blog** using the AstroPaper theme, customized for ADHD-related content. It's deployed to **GitHub Pages** at `https://www.adhdm8.com/` by `.github/workflows/deploy.yml` on every push to `main`. GitHub Pages serves static files only: there are no server-side redirects and `_redirects` files are ignored.

### Key Characteristics
- **Audience**: Adults with ADHD, parents, partners, healthcare professionals
- **Tone**: The "Expert Mate" — Evidence-based and compassionate, but delivered with a casual, relatable, and slightly humorous personality. Think "knowledgeable friend" rather than "medical textbook."
- **Content Types**: Science-backed guides, book reviews, resource compilations, personal experiences
- **Writing Style**: Short, ADHD-friendly paragraphs, clear H3 headings, actionable takeaways, and a conversational flow.

---

## 2. Project Structure

```
/home/billy/Documents/adhdm8.github.io/
├── astro.config.ts              # Astro configuration (DO NOT MODIFY)
├── src/
│   ├── config.ts               # Site settings (title, author, timezone, pagination)
│   ├── content.config.ts       # Blog schema validation
│   ├── constants.ts            # Social links configuration
│   ├── data/
│   │   └── blog/              # 📝 ALL BLOG POSTS LIVE HERE
│   ├── layouts/               # Page templates (DO NOT MODIFY)
│   ├── pages/                 # Route definitions
│   ├── components/            # UI components
│   ├── styles/                # Global CSS + typography
│   └── utils/                 # Helper functions
├── public/                    # Static assets (images, favicon)
└── .sisyphus/
    └── plans/
        └── content-strategy.md # The ONLY strategy doc (backlog + Keyword Registry)
```

### Critical Files

| File | Purpose | Modify? |
|------|---------|---------|
| `src/data/blog/*.md` | Blog posts | ✅ Yes |
| `src/config.ts` | Site settings | ⚠️ Consult first |
| `src/content.config.ts` | Content schema | ❌ No |
| `astro.config.ts` | Astro config | ❌ No |
| `src/constants.ts` | Social links | ✅ Yes |

---

## 3. Blog Post Format

### Frontmatter Schema (REQUIRED)

```yaml
---
author: ADHD m8                    # Always "ADHD m8"
pubDatetime: 2026-01-15T10:00:00+08:00  # ISO 8601 with timezone
modDatetime: 2026-01-15T10:00:00+08:00  # Same as pubDatetime initially
title: Your Post Title Here        # Clear, descriptive, SEO-friendly
slug: your-post-title-here         # URL-friendly version (kebab-case)
featured: true                     # Show on homepage (true/false)
draft: false                       # Always false unless the user explicitly asks for a draft
tags:
  - adhd                          # Always include "adhd"
  - topic-specific-tag            # See tags list below
description: "A concise 1-2 sentence summary for SEO and social sharing."
---
```

### Tag Categories (Use These)

- `adhd` — Required on all posts
- `time-blindness` — Time management, temporal myopia
- `career` — Work, productivity, professional life
- `health` — Supplements, sleep, exercise, life expectancy
- `relationships` — Dating, family, social dynamics
- `driving` — ADHD and road safety
- `resources` — Books, apps, podcasts, tools
- `clinical` — Diagnosis, medication, research
- `personal` — Personal stories and reflections
- `software-engineering` — Coding, tech work
- `book-review` — Book reviews
- `science` — Research-backed deep dives

### Content Formatting Rules

1. **Use H3 (`###`) for main sections, H4 (`####`) for sub-sections.** The layout renders the post title as H1, so never use `#` or `##` in the post body.
2. **Bold key concepts** — Use `**text**` for emphasis
3. **Bullet points for lists** — Keep items concise
4. **Add horizontal rules** — Use `---` to separate major sections
5. **Keep paragraphs short** — 2-4 sentences max for ADHD readers.
6. **Use one callout format** for quick, relatable wins, 1-3 per post:
   `> **Pro-tip from ADHD m8:** ...`
   Don't invent variants ("ADHD m8 callout", "ADHD m8 Pro-Tip"). Normalize old variants when you touch a post.
7. **Optional FAQ** — Pillar and guide posts may add `### FAQ: <topic>` with `**Q:** / A:` pairs before Key Takeaways.
8. **Required closing structure** (in this order, all new posts):
   1. `### Key Takeaways` — 3-5 bullets, each a self-contained factual claim
   2. `### Conclusion` — 2-4 sentences, ending with `**Next step**: <one concrete action>`
   3. `---` then an italic engagement question pointing to Instagram, e.g.
      `_What's your experience with X? Share it with us on [Instagram](https://instagram.com/adhdm8)._`
   Never say "in the comments": the site has no comment system.

### Length Targets

| Post type | Words |
|---|---|
| Standard post | 1000-1500 |
| Health / clinical / diagnosis (YMYL) | 1200+ with 3+ authoritative citations |
| Hub pillar post | 2000+ |
| Book review | 600+ |
| Minimum for any published post | 400 |

### Markdown Features Available

- **Table of Contents**: Auto-generated from H3 headings
- **Code blocks**: Syntax highlighted with Shiki
- **Images**: Place in `public/assets/` and reference with `/assets/image.jpg`
- **Links**: Standard Markdown `[text](url)`
- **Blockquotes**: Use `>` for quotes
- **Tables**: Standard Markdown tables

---

## 4. Content Guidelines

### Writing Principles

| Principle | Implementation |
|-----------|----------------|
| **Evidence-based** | Cite research, books, experts. Include links to sources. |
| **ADHD-friendly** | Short sections, clear headings, actionable steps. Use H3s. |
| **Non-judgmental** | No shaming language. ADHD is neurobiological. |
| **Practical** | Every post must have at least 3 actionable takeaways. |
| **Compassionate** | Acknowledge struggle without falling into toxic positivity. |
| **The "Mate" Voice** | Use relatable analogies and light humor. Avoid being overly clinical. Be a "digital wanderer" sharing insights, not a lecturer. |

### Content Hubs and Priorities

Topic hubs and their priority order are defined in **content-strategy.md §2**. They aren't repeated here, so the two docs can't drift apart. Every post belongs to exactly one hub.

### What NOT to Write

- Generic productivity advice (must be ADHD-specific)
- Medical prescriptions (can suggest discussing with doctors)
- Toxic positivity ("just try harder")
- Unverified claims (no "cures" or pseudoscience)
- Overly academic tone (accessible language required)

---

## 5. Creating New Posts

### Step-by-Step Process

1. **Pick the task** — next open Phase 2 item in content-strategy.md §3, unless the user named a topic
2. **Define keywords** (Section 5a) — one primary + 3-5 long-tail; confirm the primary isn't owned in the Keyword Registry (content-strategy.md §4)
3. **Create file** in `src/data/blog/`
   - Filename = slug: `slug-here-kebab-case.md`, containing the primary keyword where natural
4. **Paste the Post Brief** (content-strategy.md §6) as an HTML comment at the top of the body
5. **Add frontmatter** per the schema above, with `draft: false` (Hard Rule 1) and approved tags only
6. **Write content** following the formatting rules, closing structure, and keyword placement rules
7. **Link it in** — 2+ outbound links in the post, **and** add links to it from its hub pillar plus 1+ related post (no new orphans)
8. **Run the Per-Post SEO Checklist** (Section 7), then delete the brief comment
9. **Verify**: `pnpm run build` passes (`pnpm run dev` to preview if needed)
10. **Update content-strategy.md**: task `✅`, Keyword Registry row, post count

---

## 5a. Keyword Requirements (Every New Post)

**Every post must be built around ADHD-specific search intent.** Generic keywords with no "ADHD" tie-in are not acceptable — this blog ranks on ADHD-specific long-tail traffic, not broad productivity/health terms.

### Required Keyword Set

1. **Primary keyword** — always contains "ADHD" plus the specific topic.
   - Format: `ADHD + [topic]` or `[topic] + ADHD`
   - Examples: "ADHD time blindness", "adult ADHD diagnosis", "ADHD and sleep hygiene"

2. **Long-tail keywords** — 3-5 per post. These are longer, more specific phrases (4+ words) that mirror real search queries and have lower competition than the primary keyword. Pull from real question phrasing where possible.
   - Patterns to use:
     - "how to [do X] with ADHD"
     - "ADHD [topic] for adults"
     - "why does ADHD cause [X]"
     - "best [tool/strategy] for ADHD brain"
     - "ADHD [topic] symptoms/signs"
     - "[topic] and ADHD relationship" (for cross-topic pieces)
   - Example set for a sleep post: "ADHD and insomnia adults", "why can't I fall asleep ADHD", "ADHD sleep hygiene tips", "melatonin for ADHD sleep"

### Placement Rules

| Keyword type | Must appear in |
|---|---|
| Primary keyword | `title`, `slug`, `description`, first paragraph, at least one H3 heading |
| Long-tail keywords | Distributed naturally across H3 headings and body paragraphs — do not force all of them into the intro |
| Both | Written for humans first — no keyword stuffing. If a sentence reads awkwardly to fit a phrase, rephrase and drop the exact-match wording |

### Before Writing

- Check `.sisyphus/plans/content-strategy.md` — §3 Phase 2 ("New Content Queue") lists the next posts with target keywords. Prefer these over inventing new ones from scratch.
- Avoid duplicating a primary keyword already "owned" by an existing published post — check the Keyword Registry (§4 of `content-strategy.md`) and target a distinct long-tail angle instead to avoid cannibalizing search traffic.
- Fill in the Post Brief Template (§6 of `content-strategy.md`) as an HTML comment at the top of the post so it's easy to verify keyword placement and links, then remove the comment before committing.

### File Naming Convention

```
[topic]-[specific-focus]-[optional-format].md

Examples:
✅ adhd-and-sleep-science-backed-guide.md
✅ book-review-scattered-by-gabor-mate.md
✅ time-blindness-practical-tools.md

❌ post1.md
❌ My_Post_About_ADHD.md
❌ new-document.md
```

---

## 6. Working with Existing Content

### Updating Posts

When updating an existing post:

1. Update `modDatetime` to current time (keep `pubDatetime` unchanged)
2. Add an "Updated" note at the top if the changes are significant
3. Never change the slug (Hard Rule 2)
4. While you're in the file, bring it up to current rules. Many older posts predate them:
   - Replace any "in the comments" wording with the Instagram engagement line
   - Normalize callouts to `> **Pro-tip from ADHD m8:**`
   - Replace unapproved tags (`books` → `book-review`, drop `safety`)
   - For significant edits, add missing `### Key Takeaways` / `### Conclusion`
5. Don't rewrite the post's primary-keyword focus unless the backlog task says to

### Content Strategy Documents

`.sisyphus/plans/content-strategy.md` is the **single** strategy doc — don't create additional plan files. It contains:
- §0 How agents pick and record work
- §2 Content hubs (every post belongs to one)
- §3 Prioritized backlog with "done when" criteria
- §4 Keyword Registry (which post owns which keyword)
- §6 Post brief template

When you finish a backlog task or publish a post, update the doc in the same commit (task status + Keyword Registry row).

---

## 7. SEO Requirements

### Per-Post SEO Checklist

- [ ] Primary ADHD keyword defined (see Section 5a), not owned by another post in the Keyword Registry, and present in title, slug, description, first paragraph, and 1+ H3
- [ ] 3-5 long-tail keywords defined and distributed naturally across H3 headings/body
- [ ] Descriptive title (50-60 characters)
- [ ] Compelling description (150-160 characters)
- [ ] At least 2 internal links **out** to other posts
- [ ] At least 2 internal links **in** from other posts (hub pillar + 1 related)
- [ ] At least 1 external link to an authoritative source (3+ for health/clinical)
- [ ] Heading hierarchy: H3 sections, H4 sub-sections, no H1/H2 in body
- [ ] Closing structure present: Key Takeaways → Conclusion + Next step → Instagram engagement line
- [ ] No "comments" wording, `draft: false`, approved tags only
- [ ] Image with alt text (optional but recommended)

### Site-Wide SEO

- OG images auto-generated for posts
- Sitemap auto-generated on build
- RSS feed at `/rss.xml`
- `/llms.txt` auto-generated index of all posts for AI agents/crawlers (see Section 7a)
- Canonical URLs supported
- Structured data (JSON-LD `BlogPosting`) for articles, including `keywords`, `dateModified`, `mainEntityOfPage`, and `publisher`

---

## 7a. AI Agent / LLM Discoverability (Answer Engine Optimization)

This site is written to be findable and citable by AI answer engines and agents (ChatGPT, Perplexity, Claude, Google AI Overviews, RAG-based tools), not just classic search. Two things make content AI-agent-friendly: **being crawlable** (handled site-wide, see below) and **being extractable** (a per-post writing habit).

### Site-Wide (already handled, don't break these)

- `robots.txt` allows all crawlers, including AI bots (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot) — there's no disallow list, so don't add one without a specific reason.
- `/llms.txt` (`src/pages/llms.txt.ts`) auto-generates a clean markdown index of every published post, grouped by topic, with absolute URLs and descriptions — this regenerates itself from post frontmatter, so it never needs manual updates.
- All pages are static HTML (Astro SSG) — no JS execution required to read content, which is exactly what most AI crawlers need.
- JSON-LD `BlogPosting` schema on every post includes `headline`, `datePublished`, `dateModified`, `keywords` (from tags), `description`, and `publisher` — this is what lets AI systems extract structured facts instead of parsing prose.

### Per-Post Writing Habits (apply when writing new posts)

1. **Answer-first paragraphs.** Open each H3 section with a direct, standalone sentence that answers the heading's implicit question — restate the subject noun instead of "it"/"this", since AI agents often extract single paragraphs out of context.
   - Weak: "This happens because of dopamine." (needs prior context to parse)
   - Strong: "ADHD time blindness happens because dopamine regulates how the brain perceives time passing."
2. **Keep "Key Takeaways" bullets factual and self-contained** (already required in Section 3) — this is the single most commonly extracted block by AI summarizers, so each bullet should stand alone as a complete claim.
3. **Favor explicit numbers and named sources over vague claims** ("11.1-year reduction in life expectancy, per Barkley's research" beats "ADHD can shorten your life") — AI agents preferentially cite content with specific, attributable facts.
4. **Consider an FAQ-style section** for pillar/guide posts (not required on every post) — a few "Q: ... A: ..." pairs near the end map directly to how users phrase prompts to AI agents, and are the highest-value future addition (FAQPage schema) if this becomes a priority.

---

## 8. Agent Commands

### Available Commands

```bash
# Development
pnpm run dev              # Start dev server at localhost:4321
pnpm run build            # Build for production
pnpm run preview          # Preview production build

# Code Quality
pnpm run lint             # Run ESLint
pnpm run format           # Format with Prettier
pnpm run format:check     # Check formatting

# Content
pnpm run sync             # Sync Astro content types
```

### When to Run Commands

- **After adding/modifying posts**: `pnpm run build` to verify (required, Hard Rule 8)
- **Before committing**: format only the files you touched: `pnpm exec prettier --write <files>`. Don't run `pnpm run format`, which rewrites the whole repo and buries your change in unrelated diffs.
- **Content type errors**: `pnpm run sync`
- **Dependencies**: CI uses pnpm, but the deploy workflow installs with **npm** (`package-lock.json`). If the user approves a dependency change, update both lockfiles.

---

## 9. Common Tasks for Agents

### Task: Write a New Blog Post

Every task ends the same way: `pnpm run build` passes, then content-strategy.md is updated (Hard Rules 8-9).

### Task: Write a New Blog Post

Follow the 10 steps in Section 5.

### Task: Update Existing Post

Follow Section 6 ("Updating Posts"), then verify its internal links still resolve.

### Task: Work a Backlog Item

1. Open content-strategy.md §3 and take the lowest-numbered open task in the earliest open phase
2. Mark it `🔄`, do the work, and check its "Done when" condition literally
3. Mark it `✅`. If you're blocked on a user decision, mark it `⏸ (reason)` and ask the user

### Task: Create a Hub Pillar Post

1. Find the hub and its member posts in content-strategy.md §2 and §4
2. Write the pillar (2000+ words) as a guide that links to **every** member post
3. Add a link back to the pillar in every member post
4. Record the pillar slug in content-strategy.md §2

### Task: SEO Audit

1. Run the orphan check command in content-strategy.md §1
2. Check posts against the Per-Post SEO Checklist (Section 7)
3. Record findings as new backlog tasks in content-strategy.md §3 rather than fixing everything ad hoc

---

## 10. Troubleshooting

### Build Errors

| Error | Solution |
|-------|----------|
| `Module not found` | Run `pnpm install` |
| `Content collection error` | Run `pnpm run sync` |
| `TypeScript error` | Check `src/content.config.ts` schema |
| `Frontmatter validation failed` | Check all required fields present |

### Content Not Appearing

- Check `draft: false` in frontmatter
- Verify file in `src/data/blog/` (not subdirectories)
- Check `pubDatetime` is in the past
- Run `pnpm run build` to regenerate

### Images Not Loading

- Images must be in `public/assets/` or `public/`
- Reference with absolute path: `/assets/image.jpg`
- Check file extension matches (case-sensitive)

---

## 11. External Resources

- **Astro Docs**: https://docs.astro.build/
- **AstroPaper Theme**: https://github.com/satnaing/astro-paper
- **Site**: https://www.adhdm8.com/
- **Content Strategy**: `.sisyphus/plans/content-strategy.md`

---

## 12. Quick Reference

### Post Template

```markdown
---
author: ADHD m8
pubDatetime: 2026-01-15T10:00:00+08:00
modDatetime: 2026-01-15T10:00:00+08:00
title: Your Post Title Here
slug: your-post-title-here
featured: true
draft: false
tags:
  - adhd
  - your-tag-here
description: "A concise description for SEO."
---

Opening hook paragraph containing the **primary keyword**. Keep it engaging.

---

### Section One (answer-first: restate the subject in the first sentence)

Content here. **Bold important concepts**.

- Bullet point one
- Bullet point two

> **Pro-tip from ADHD m8:** A quick, relatable win.

---

### Section Two

More content.

---

### Key Takeaways

- Self-contained factual claim one
- Self-contained factual claim two
- Self-contained factual claim three

---

### Conclusion

Two to four sentences tying it together.

**Next step**: One concrete action for the reader.

---

_What's your experience with this? Share it with us on [Instagram](https://instagram.com/adhdm8)._
```

### Approved Tags Reference

```
adhd, time-blindness, career, health, relationships, driving,
resources, clinical, personal, software-engineering, book-review, science
```

---

**Remember**: This blog serves the ADHD community. Every post should leave readers feeling understood, informed, and equipped with practical tools. When in doubt, prioritize clarity and compassion.
