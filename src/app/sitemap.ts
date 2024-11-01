const fs = require("fs");
import { getAllPosts } from "@/lib/api";
import { BASE_URL, REPO_NAME } from "@/lib/constants";

export const revalidate = 3600; // hourly revalidation

export default async function sitemap() {
  const posts = getAllPosts();

  const routes = posts.map((post) => ({
    url: `${BASE_URL}${REPO_NAME}/posts/${post.slug.replace('.{js,jsx,ts,tsx,mdx}',"")}`,
    lastModified: new Date().toISOString(),
  }));
  
  return [...routes]; // spread operations on [routes]
}

async function generateSitemap() {
  const sitemap = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <?xml version="1.0" encoding="UTF-8"?> 
  lastModified: new Date().format(page.updated_at, 'dd-MMM-yyyy hh:mm:ss'),
  </urlset>`;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();


