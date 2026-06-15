import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content", "portfolio");

export type PortfolioItemMeta = {
  title: string;
  slug: string;
  summary: string;
  category: string;
  year: string;
  services: string[];
};

export type PortfolioItem = PortfolioItemMeta & {
  content: string;
};

function readPortfolioFile(fileName: string): PortfolioItem {
  const fullPath = path.join(contentDir, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);

  return {
    title: String(data.title ?? "Untitled"),
    slug: String(data.slug ?? fileName.replace(/\.mdx$/, "")),
    summary: String(data.summary ?? ""),
    category: String(data.category ?? "General"),
    year: String(data.year ?? ""),
    services: Array.isArray(data.services) ? data.services.map(String) : [],
    content,
  };
}

export function getAllPortfolioItems(): PortfolioItemMeta[] {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  const files = fs.readdirSync(contentDir).filter((name) => name.endsWith(".mdx"));

  return files
    .map(readPortfolioFile)
    .map((item) => ({
      title: item.title,
      slug: item.slug,
      summary: item.summary,
      category: item.category,
      year: item.year,
      services: item.services,
    }))
    .sort((a, b) => b.year.localeCompare(a.year));
}

export function getPortfolioBySlug(slug: string): PortfolioItem | null {
  if (!fs.existsSync(contentDir)) {
    return null;
  }

  const files = fs.readdirSync(contentDir).filter((name) => name.endsWith(".mdx"));

  for (const file of files) {
    const item = readPortfolioFile(file);
    if (item.slug === slug) {
      return item;
    }
  }

  return null;
}
