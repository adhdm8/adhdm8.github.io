# Content Strategy — ADHD m8 Blog

> **Single source of truth** for SEO and content planning. Replaces the old
> `traffic-optimization.md` and per-post plan files.
> **Last reviewed**: 2026-10-08 · **Published posts**: 49

---

## 0. How to Use This Doc

This doc holds **data and priorities only**: what to work on and which post
owns which keyword. **All rules live in `AGENTS.md`** (start at §0 Ground Rules).
If anything here seems to conflict with AGENTS.md, AGENTS.md wins; fix this doc.

- **Picking work**: lowest-numbered open task in the earliest open phase
  (AGENTS.md §9, "Work a Backlog Item"). Don't start Phase 2 while Phase 1 is
  open unless the user asks.
- **Recording work** (same commit): task status in §3, the post's row in §4, and
  the "Published posts" count and "Last reviewed" date in the header.
- **Adding work**: audits and new ideas become new rows in §3 with the next free
  ID in that phase. Never create separate plan files.

Status markers: `⬜ open` · `🔄 in progress` · `✅ done` · `⏸ blocked (reason)`

---

## 1. Current State (audit 2026-09-28)

| Finding | Detail | Fixed by |
|---|---|---|
| Orphan posts | 9 posts had zero inbound internal links (list below) | P1-03 ✅ |
| Keyword cannibalization | Two ~650-word time-blindness posts target the same query | P1-01 |
| Overlapping focus posts | 3 posts compete for "improve focus ADHD" | P1-02 |
| Overlapping resource lists | 5 list-style resource posts, 2 of them thin | P1-05 |
| Thin YMYL content | Health/clinical posts under 800 words | P1-04 |
| No hub pages | Clusters exist (quizzes, pens, focus) with no page linking them | P1-02 |
| Tag drift | `books` and `safety` used but not in approved tag list | P1-06 |
| Broken engagement prompts | 11 posts say "share in the comments", but the site has no comment system | P1-08 |
| Inconsistent callouts | 6 different pro-tip callout spellings | P1-08 |
| Old posts miss closing structure | 33 posts lack Key Takeaways, 27 lack Conclusion | Fix on next update (AGENTS.md §6) |
| Topic drift | Last 3 posts are pen content (low search volume) vs Pillar #1 priority | Phase 2 queue |
| No search data | No Search Console data — keyword priorities are informed guesses | P0-01 |
| Anonymous author on health topics | Weak E-E-A-T signals | P3-01, P3-02 |

**Orphans as of 2026-09-28, before P1-03 (0 inbound links)**: `adhd-and-minimalism-souna-decluttering-guide`,
`adhd-pen-refill-hack-zebra-f701-budget`, `adding-new-post`,
`adhd-number-1-trick-to-focus-now`, `adhd-travel-planning-guide`,
`dr-russell-barkley-adhd-quiz-baars-bdefs-explained`, `how-to-read-books-with-adhd`,
`pilot-fineliner-review-best-felt-tip-pen-for-adhd`, `inattentive-adhd-quiz-for-adults`

Re-run the orphan check from repo root:

```bash
cd src/data/blog && for f in *.md; do s=$(basename $f .md); \
  n=$(grep -l "/posts/$s" *.md | grep -v "^$f$" | wc -l); echo "$n $s"; done | sort -n | head -15
```

---

## 2. Content Hubs

Every post belongs to exactly one hub (column "Hub" in §4). Each hub gets one
**pillar post** (2000+ words) that links to every post in the hub; every post in
the hub links back to its pillar.

| Hub ID | Hub | Pillar post | Priority |
|---|---|---|---|
| `time` | Time & Executive Function | New merged time-blindness guide (P1-01) | 🔴 1 |
| `focus` | Focus & Treatment | New "ADHD focus" pillar (P1-02) | 🔴 2 |
| `diagnosis` | Diagnosis & Self-Screening | `adult-adhd-diagnosis-guide` (expand, P1-02) | 🔴 3 |
| `work` | ADHD at Work | `the-adhd-career-guide-...` (expand) | 🟡 4 |
| `health` | Health & Life | TBD — candidate: sleep guide | 🟡 5 |
| `tools` | Analog Tools & Resources | `adhd-resources-2026-comprehensive-guide` | 🟢 6 |
| `books` | Book Reviews | none needed — tag page is enough | 🟢 7 |

---

## 3. Backlog

### Phase 0 — Measure

| ID | Task | Done when | Status |
|---|---|---|---|
| P0-01 | Verify `www.adhdm8.com` in Google Search Console and submit `/sitemap-index.xml` | Property verified, sitemap accepted. **User task** — agents can't do this | ⬜ |
| P0-02 | After 4–6 weeks of data: export queries at position 8–30 and add as "quick win" rows to §5 | §5 has a GSC-sourced section | ⏸ needs P0-01 |

### Phase 1 — Fix Existing Content (do before new posts)

| ID | Task | Done when | Status |
|---|---|---|---|
| P1-00 | **Decide the redirect method** (blocks P1-01, P1-05). The site is on GitHub Pages, so `_redirects` files don't work. Option: Astro's `redirects` option in `astro.config.ts`, which generates static redirect pages. That file is locked, so the user must approve | User approves a method; this row records it | ⏸ needs user decision |
| P1-01 | Merge `the-mystery-of-time-blindness-...` and `the-science-of-time-blindness-...` into one pillar "ADHD Time Blindness" guide (2000+ words). Keep the higher-linked slug (`the-mystery-...`, 10 inbound) and redirect the other using the P1-00 method | One post, redirect live, links in the 16 posts that point at either URL updated to the kept slug | ⏸ needs P1-00 |
| P1-02 | Create/expand hub pillars for `focus` and `diagnosis`. The `focus` pillar must clearly differentiate `adhd-and-how-anyone-can-improve-their-focus`, `improve-focus-with-behavioral-tools-and-medication-for-adhd`, and `adhd-number-1-trick-to-focus-now` | Each pillar links to every post in its hub (§4), and each links back | ⬜ |
| P1-03 | Add 2+ inbound links to every orphan in §1 from topically related posts | Orphan check (§1) shows no published post with 0 inbound | ✅ 2026-09-28. All 8 content orphans have 2+ inbound links. `adding-new-post` is deliberately left for the About page (P3-01). 11 posts still have only 1 inbound link; P1-02 hub pillars will cover most of them, so re-check after P1-02 |
| P1-04 | Expand thin YMYL posts to 1200+ words with cited sources: `adhd-and-life-expectancy-...` (672w), `understanding-the-clinical-landscape-...` (693w), `fueling-the-adhd-brain-...supplements` (759w) | Each ≥1200 words, ≥3 authoritative citations, `modDatetime` updated | ⬜ |
| P1-05 | Consolidate thin resource posts: merge `useful-resources` (251w) into `adhd-resources-2026-comprehensive-guide` + redirect (P1-00 method); expand `book-review-spark` (261w) to 600+ words. Unpublishing instead needs explicit user approval | No published post under 400 words except `adding-new-post` | ⏸ needs P1-00 |
| P1-06 | Tag cleanup: `books` → `book-review`; `safety` → remove (keep `driving`) | All tags match the AGENTS.md §12 approved list | ✅ 2026-09-28 |
| P1-07 | Bring `adhd-pen-refill-hack-zebra-f701-budget` up to the closing structure: add `### Conclusion` after Key Takeaways, ending with **Next step** | Matches AGENTS.md §3 closing structure | ⬜ |
| P1-08 | Consistency sweep across all posts: replace "in the comments" wording with the Instagram engagement line (11 posts); normalize callouts to `> **Pro-tip from ADHD m8:**` | `grep -l "in the comments" src/data/blog/*.md` returns nothing; only one callout spelling remains | ⬜ |

### Phase 2 — New Content Queue (1 post/week)

Write in this order. Each fills a gap no existing post covers. Keywords are
starting points — confirm against GSC once P0-02 is done.

| ID | Primary keyword | Hub | Suggested long-tails | Status |
|---|---|---|---|---|
| P2-01 | ADHD medication for adults | focus | what to expect starting ADHD medication; stimulant vs non-stimulant ADHD; ADHD medication side effects adults | ✅ 2026-10-08 |
| P2-02 | ADHD paralysis | time | why do I freeze with ADHD; how to get unstuck ADHD paralysis; ADHD task paralysis vs procrastination | ⬜ |
| P2-03 | ADHD and anxiety | diagnosis | ADHD or anxiety how to tell; ADHD anxiety depression overlap adults; treating ADHD with anxiety | ⬜ |
| P2-04 | rejection sensitive dysphoria ADHD | health | RSD symptoms adults; how to cope with RSD; RSD in relationships ADHD | ⬜ |
| P2-05 | ADHD time management | time | time blocking for ADHD; ADHD time management techniques adults; ADHD planner system | ⬜ |
| P2-06 | ADHD burnout | work | ADHD burnout symptoms; ADHD burnout recovery; ADHD masking at work | ⬜ |
| P2-07 | best ADHD apps for adults | tools | ADHD focus apps 2026; ADHD reminder apps; free ADHD apps | ⬜ |
| P2-08 | ADHD emotional dysregulation | focus | ADHD anger outbursts adults; ADHD emotional regulation strategies; why ADHD emotions feel so intense | ⬜ |
| P2-09 | ADHD coaching | focus | what does an ADHD coach do; ADHD coach vs therapist; is ADHD coaching worth it | ⬜ |
| P2-10 | adult ADHD assessment Hong Kong | diagnosis | ADHD assessment cost Hong Kong; private vs public ADHD diagnosis HK | ⬜ |
| P2-11 | ADHD medication Hong Kong | focus | ADHD medication availability HK; how to get ADHD medication Hong Kong | ⬜ |

**Deprioritized** (don't write unless the user asks): more pen/stationery
reviews, generic productivity posts, parenting/children (off-audience for now).

### Phase 3 — Trust Signals (E-E-A-T) & Technical

| ID | Task | Done when | Status |
|---|---|---|---|
| P3-01 | About page: who writes ADHD m8, lived experience vs research, editorial standards. Link the intro post `adding-new-post` ("Why am I starting this blog") from it | `/about` states author background + sourcing policy and links `adding-new-post` | ⬜ |
| P3-02 | Add a "Sources" section to every `health`/`diagnosis`/`focus` post | All posts in those hubs have ≥2 linked sources | ⬜ |
| P3-03 | Per-post SEO overrides (carried over from old plan) — schema already has `ogImage`, `canonicalURL`; confirm layouts use them | Documented in AGENTS.md or confirmed working | ⬜ |
| P3-04 | Refresh cycle: re-review any post whose `modDatetime` is >12 months old | Recurring — check quarterly | ⬜ |

### Phase 4 — Hong Kong Niche (decision needed)

Hong Kong ADHD content has almost no competition and is a credible moat.
P2-10 and P2-11 cover it in English. **Chinese-language versions are a user
decision** (larger commitment, needs i18n routing) — don't start without approval.

---

## 4. Keyword Registry

One primary keyword per post. Keywords for older posts are inferred from titles;
correct them when GSC data (P0-02) shows what each post actually ranks for.

| Post (slug) | Primary keyword | Hub |
|---|---|---|
| `the-mystery-of-time-blindness-why-the-adhd-brain-struggles-with-the-future` | ADHD time blindness | time |
| `the-science-of-time-blindness-why-the-adhd-brain-operates-in-now-or-not-now` | ⚠️ cannibalizes above — merge (P1-01) | time |
| `time-estimation-drills-for-adhd-brain` | ADHD time estimation | time |
| `how-to-fix-your-entire-adhd-life-in-one-day` | ADHD life reset | time |
| `adhd-travel-planning-guide` | ADHD travel planning | time |
| `adhd-and-minimalism-souna-decluttering-guide` | ADHD decluttering | time |
| `adhd-number-1-trick-to-focus-now` | ADHD focus trick | time |
| `bridging-the-knowing-doing-gap-science-backed-tools-for-managing-adhd` | ADHD knowing-doing gap | time |
| `how-to-read-books-with-adhd` | how to read with ADHD | time |
| `improve-focus-with-behavioral-tools-and-medication-for-adhd` | ADHD medication and behavioral tools | focus |
| `adhd-and-how-anyone-can-improve-their-focus` | improve focus ADHD | focus |
| `adhd-focus-timer-smartwatch-vibration-10-3-method` | ADHD focus timer | focus |
| `body-doubling-for-adhd-best-apps-and-how-it-works` | body doubling ADHD | focus |
| `adhd-medication-for-adults-what-to-expect-guide` | ADHD medication for adults | focus |
| `understanding-the-clinical-landscape-of-adhd-a-comprehensive-overview` | ADHD treatment overview | focus |
| `fueling-the-adhd-brain-a-science-backed-guide-to-supplements` | ADHD supplements | focus |
| `adult-adhd-diagnosis-guide` | adult ADHD diagnosis | diagnosis |
| `adhd-quiz-for-adults-self-screening-test` | ADHD quiz for adults | diagnosis |
| `adhd-test-for-women-self-screening-guide` | ADHD test for women | diagnosis |
| `inattentive-adhd-quiz-for-adults` | inattentive ADHD quiz | diagnosis |
| `dr-russell-barkley-adhd-quiz-baars-bdefs-explained` | Barkley ADHD quiz (BAARS-IV) | diagnosis |
| `adhd-public-services-hong-kong` | ADHD support Hong Kong | diagnosis |
| `the-adhd-career-guide-finding-your-niche-and-avoiding-the-boredom-trap` | ADHD careers | work |
| `coding-with-a-bionic-brain-success-tips-for-software-engineers-with-adhd` | software engineer with ADHD | work |
| `adhd-workplace-accommodations-guide` | ADHD workplace accommodations | work |
| `adhd-and-hong-kong-work-culture` | ADHD Hong Kong work culture | work |
| `adhd-and-sleep-hygiene-science-backed-guide` | ADHD sleep hygiene | health |
| `adhd-and-exercise-how-fitness-helps-the-adhd-brain` | ADHD and exercise | health |
| `adhd-and-life-expectancy-understanding-the-real-world-risks` | ADHD life expectancy | health |
| `adhd-and-relationships-why-connection-feels-hard-and-how-to-make-it-easier` | ADHD relationships | health |
| `navigating-the-road-safely-driving-with-adhd` | driving with ADHD | health |
| `embracing-the-bionic-brain-why-life-with-adult-adhd-gets-better` | adult ADHD gets better | health |
| `adhd-resources-2026-comprehensive-guide` | ADHD resources | tools |
| `navigating-the-adhd-internet-top-reliable-resources-for-adults` | reliable ADHD websites | tools |
| `tuning-into-your-brain-top-science-backed-adhd-podcasts-and-digital-resources` | ADHD podcasts | tools |
| `useful-resources` | ⚠️ thin — merge into resources guide (P1-05) | tools |
| `gadgets-and-tools-to-support-the-adhd-brain` | ADHD gadgets | tools |
| `the-paper-brain-why-analog-tools-work-better-for-adhd` | analog tools ADHD | tools |
| `zebra-f701-the-perfect-pen-for-adhd-brain-dump-journaling` | Zebra F-701 ADHD | tools |
| `zebra-f701-refill-guide-upgrade-your-writing-experience` | Zebra F-701 refill | tools |
| `adhd-pen-refill-hack-zebra-f701-budget` | ADHD pen refill hack | tools |
| `adhd-task-capture-pocket-pen-system-zebra-f701` | ADHD task capture | tools |
| `anki-for-adhd-beginners-guide-spaced-repetition` | Anki for ADHD | tools |
| `adhd-mnemonics-memory-tricks-that-stick` | ADHD mnemonics | tools |
| `pilot-fineliner-review-best-felt-tip-pen-for-adhd` | best pen for ADHD | tools |
| `beyond-the-diagnosis-a-summary-of-gabor-mats-scattered` | Scattered Gabor Maté review | books |
| `embracing-the-divergent-mind-a-review-of-your-brains-not-broken` | Your Brain's Not Broken review | books |
| `book-review-ADHD-advantage` | ADHD Advantage book review | books |
| `book-review-spark` | Spark book review | books |
| `adding-new-post` | — (personal intro, not targeted) | — |

---

## 5. Quick-Win Keywords (from Search Console)

_Empty until P0-02. Format: `query | current position | impressions | target post | action`._

---

## 6. Post Brief Template

Paste into the draft's top HTML comment before writing; delete before publishing.

```
<!--
keywords: primary: X | long-tail: a, b, c
hub: <hub id from §2>   backlog: <P2-xx>
angle: one sentence on what this post says that existing posts don't
links out (2+): /posts/..., /posts/...
links in (add 2+ after publishing): pillar for hub + 1 related post
sources (1+ for general, 3+ for health/clinical): ...
-->
```

---

## 7. Completed Milestones

- ✅ `robots.txt`, `og:type`, `og:site_name`, JSON-LD `BlogPosting`, `/llms.txt`
- ✅ Old roadmap posts shipped: sleep hygiene, relationships, adult diagnosis guide,
  time estimation drills, workplace accommodations, exercise, paper brain,
  Zebra F-701 guide, driving, career guide, coding with ADHD
- ✅ 2026-09-28: consolidated `traffic-optimization.md` + `post-plan-adhd-sleep-hygiene.md` into this doc;
  moved all rules into AGENTS.md §0 (CLAUDE.md is now a pointer only)
