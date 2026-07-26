import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import getSortedPosts from "@/utils/getSortedPosts";
import { SITE } from "@/config";

// Ordered mapping from tag -> section heading, matching the content
// pillars in AGENTS.md. The first matching tag (other than "adhd")
// determines which section a post is grouped under.
const SECTIONS: [tag: string, heading: string][] = [
  ["time-blindness", "Time & Executive Function"],
  ["career", "ADHD at Work"],
  ["software-engineering", "ADHD at Work"],
  ["health", "Health & Wellness"],
  ["driving", "Driving Safety"],
  ["resources", "Resources & Tools"],
  ["clinical", "Clinical & Diagnosis"],
  ["book-review", "Book Reviews"],
  ["relationships", "Relationships"],
  ["personal", "Personal Essays"],
  ["science", "Science Deep Dives"],
];

const sectionFor = (tags: string[]) => {
  for (const [tag, heading] of SECTIONS) {
    if (tags.includes(tag)) return heading;
  }
  return "Other";
};

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);
  const origin = site ?? new URL(SITE.website);

  const grouped = new Map<string, string[]>();
  for (const { data, id, filePath } of sortedPosts) {
    const heading = sectionFor(data.tags ?? []);
    const url = new URL(getPath(id, filePath), origin).href;
    const line = `- [${data.title}](${url}): ${data.description}`;
    grouped.set(heading, [...(grouped.get(heading) ?? []), line]);
  }

  // Print sections in the priority order defined above, then "Other" last.
  const headingOrder = [...new Set(SECTIONS.map(([, h]) => h)), "Other"];
  const body = headingOrder
    .filter(heading => grouped.has(heading))
    .map(heading => `## ${heading}\n\n${grouped.get(heading)!.join("\n")}`)
    .join("\n\n");

  const content = `# ${SITE.siteName || SITE.title}

> ${SITE.desc}

This is an evidence-based ADHD blog for adults, written by ADHD m8. Content covers time blindness, executive function, careers, health, relationships, and clinical topics, with sources cited where relevant. See /disclaimer/ before treating anything here as medical advice.

${body}

## About This Site

- [About](${new URL("/about/", origin).href}): Who writes ADHD m8 and why.
- [Disclaimer](${new URL("/disclaimer/", origin).href}): Not medical advice; affiliate disclosure.
- [Privacy Policy](${new URL("/privacy-policy/", origin).href}): What data this site collects.
`;

  return new Response(content, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
