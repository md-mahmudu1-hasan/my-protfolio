import { Allprojects } from "../data/projects";

const baseUrl = "https://mdmahmudulhasan.me";

export default function Sitemap() {
  return null;
}

export const dynamic = "force-static";

export async function GET() {
  const routes = [
    "",
    "about",
    "services",
    "experience",
    "portfolio",
    "skills",
    "contact",
  ];

  const projectUrls = Allprojects.map((project) => ({
    loc: `${baseUrl}/${project._id}`,
    lastmod: new Date().toISOString(),
  }));

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(
      (route) =>
        `<url><loc>${baseUrl}/${route}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`,
    )
    .join("\n  ")}
  ${projectUrls
    .map(
      (project) =>
        `<url><loc>${project.loc}</loc><lastmod>${project.lastmod}</lastmod><changefreq>monthly</changefreq><priority>0.7</priority></url>`,
    )
    .join("\n  ")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
