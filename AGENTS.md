# Agent Guide — ADHD m8 Blog

> **Project**: ADHD m8 Blog  
> **Framework**: Astro v5.16.6 + AstroPaper theme  
> **Content**: ADHD-focused articles, book reviews, resource guides  
> **Last Updated**: 2026-04-04

---

## 1. Project Overview

This is an **Astro-based static blog** using the AstroPaper theme, customized for ADHD-related content. The site is deployed to Cloudflare Pages at `https://www.adhdm8.com/`.

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
    └── plans/                 # Content strategy documents
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
draft: false                       # true = unpublished, false = published
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

1. **Use H3 (###) for main sections** — H2 is reserved for post title
2. **Bold key concepts** — Use `**text**` for emphasis
3. **Bullet points for lists** — Keep items concise
4. **Include a "Conclusion" section** — Summarize key takeaways
5. **Add horizontal rules** — Use `---` to separate major sections
6. **Keep paragraphs short** — 2-4 sentences max for ADHD readers.
7. **Use "Personality Callouts"** — Use "Pro-tips" or "ADHD m8" callouts to break up heavy text with quick, relatable wins.
8. **End with engagement prompt** — "What's your experience?" style question to build community.

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

### Content Pillars (Priority Order)

1. **Time & Executive Function** — Time blindness, planning, productivity
2. **ADHD at Work** — Career strategies, workplace accommodations
3. **Health & Wellness** — Sleep, supplements, exercise, life expectancy
4. **Driving Safety** — ADHD-specific road safety
5. **Resources & Reviews** — Books, apps, podcasts, tools
6. **Clinical & Diagnosis** — Getting diagnosed, medication, coaching
7. **Relationships** — Dating, family, social life

### What NOT to Write

- Generic productivity advice (must be ADHD-specific)
- Medical prescriptions (can suggest discussing with doctors)
- Toxic positivity ("just try harder")
- Unverified claims (no "cures" or pseudoscience)
- Overly academic tone (accessible language required)

---

## 5. Creating New Posts

### Step-by-Step Process

1. **Create file** in `src/data/blog/`
   - Filename format: `slug-here-kebab-case.md`
   - Example: `adhd-and-sleep-hygiene-guide.md`

2. **Add frontmatter** following schema above

3. **Write content** following formatting rules

4. **Add tags** from approved list

5. **Set draft: true** initially

6. **Preview locally**: `pnpm run dev`

7. **When ready**: Change `draft: false`

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

1. Update `modDatetime` to current time
2. Add "Updated" note at top if significant changes
3. Keep original `pubDatetime` unchanged
4. Update content while preserving URL (don't change slug)

### Content Strategy Documents

Located in `.sisyphus/plans/`:
- `traffic-optimization.md` — SEO and content gap analysis

Reference these for:
- Target keywords
- Content gaps to fill
- Internal linking opportunities
- Publishing calendar

---

## 7. SEO Requirements

### Per-Post SEO Checklist

- [ ] Descriptive title (50-60 characters)
- [ ] Compelling description (150-160 characters)
- [ ] Primary keyword in first paragraph
- [ ] At least 2 internal links to other posts
- [ ] At least 1 external link to authoritative source
- [ ] Image with alt text (optional but recommended)
- [ ] Proper heading hierarchy (H3 for sections)

### Site-Wide SEO

- OG images auto-generated for posts
- Sitemap auto-generated on build
- RSS feed at `/rss.xml`
- Canonical URLs supported
- Structured data for articles

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

- **After adding/modifying posts**: `pnpm run build` to verify
- **Before committing**: `pnpm run lint && pnpm run format`
- **Content type errors**: `pnpm run sync`

---

## 9. Common Tasks for Agents

### Task: Write a New Blog Post

1. Check `.sisyphus/plans/traffic-optimization.md` for content gaps
2. Choose a target keyword from the "Keyword Targeting" section
3. Create file in `src/data/blog/`
4. Follow frontmatter schema exactly
5. Write 800-1500 words following content guidelines
6. Include 3+ actionable takeaways
7. Add internal links to 2+ existing posts
8. Set `draft: false` when complete
9. Run `pnpm run build` to verify

### Task: Update Existing Post

1. Read current content
2. Identify outdated information
3. Update `modDatetime`
4. Add new information
5. Maintain existing slug and URL
6. Verify internal links still work

### Task: Create Content Pillar

1. Identify pillar topic from strategy doc
2. Create main pillar post (comprehensive guide, 2000+ words)
3. Plan 3-5 supporting posts
4. Link supporting posts to pillar
5. Link pillar to supporting posts
6. Update both posts with cross-links

### Task: SEO Optimization

1. Review posts missing descriptions
2. Check for missing internal links
3. Identify orphan pages (no internal links)
4. Update meta descriptions
5. Add related post suggestions

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
- **Content Strategy**: `.sisyphus/plans/traffic-optimization.md`

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

Opening hook paragraph. Keep it engaging.

---

### Section One

Content here. **Bold important concepts**.

- Bullet point one
- Bullet point two

### Section Two

More content.

---

### Conclusion

Summarize key takeaways.

**Next step**: Actionable item for reader.

---

*What's your experience with this? Share in the comments or reach out on [Instagram](https://instagram.com/adhdm8).*
```

### Approved Tags Reference

```
adhd, time-blindness, career, health, relationships, driving,
resources, clinical, personal, software-engineering, book-review, science
```

---

**Remember**: This blog serves the ADHD community. Every post should leave readers feeling understood, informed, and equipped with practical tools. When in doubt, prioritize clarity and compassion.
