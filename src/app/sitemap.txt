import { getAllPosts } from "@/lib/api";
import { url } from "inspector";

export const revalidate = 3600; // hourly revalidation

export default async function sitemap() {
  const posts = getAllPosts();

  // const pages = await globby([
  //   "src/app/**/*{.js,jsx,ts,tsx,.mdx}",
  //   "!src/app/_*.js",
  //   "!src/app/{sitemap,layout}.{js,jsx,ts,tsx}",
  //   "!src/app/api",
  // ]);
  const routes = posts.map((post) => ({
    url: `${process.env.WEBSITE_URL}${post.slug}.replace(/\.md$/, ""))`,
    lastModified: new Date().toISOString(),
  }));

  console.log(`url per post                  >>>>>>>>>>>>>>>>: ${url}`)
  console.log(`routes                        >>>>>>>>>>>>>>>>: ${{routes}}`)

  // routes                        >>>>>>>>>>>>>>>>: [object Object]

  // pages                         >>>>>>>>>>>>>>>>: src/app/page.tsx,src/app/contact/page.tsx, \
  console.log(`process.env.WEBSITE_URL       >>>>>>>>>>>>>>>>: ${process.env.WEBSITE_URL}`)
  return [...routes]; // spread operator on [routes]
}
