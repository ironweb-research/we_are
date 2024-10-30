const fs = require("fs");
import { getAllPosts } from "@/lib/api";

async function generateSitemap() {
  const posts = getAllPosts();
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${process.env.WEBSITE_URL}.join(${posts.slug}.replace(/\.md$/, "")).join("\n")}
</urlset>`;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();
