import { getAllPosts } from "@/lib/api";
import { url } from "inspector";

export const revalidate = 3600; // hourly revalidation

export default async function sitemap() {
  const posts = await getAllPosts();

  // const pages = await globby([
  //   "src/app/**/*{.js,jsx,ts,tsx,.mdx}",
  //   "!src/app/_*.js",
  //   "!src/app/{sitemap,layout}.{js,jsx,ts,tsx}",
  //   "!src/app/api",
  // ]);

  // const cleanurls = posts

  // cleanurls.map(cleanURL);

  // function cleanURL(item:any){
  //   return [item].;
  // }

  const routes = posts.map((post) => ({
    realSlug : post.slug.replace(/\.md$/, ""),
    url: `${process.env.WEBSITE_URL}/${post.slug.replace('.md',"")}`,
    lastModified: new Date().toISOString(),
  }));
  
  // url: `${process.env.WEBSITE_URL}${post.slug}.replace(/\.md$/, ""))`,
  console.log(`process.env.WEBSITE_URL       >>>>>>>>>>>>>>>>: ${process.env.WEBSITE_URL}`)
  console.log(`url per post                  >>>>>>>>>>>>>>>>: ${routes[0].realSlug}`)
  console.log(`routes                        >>>>>>>>>>>>>>>>: ${{routes}}`)

  // routes                        >>>>>>>>>>>>>>>>: [object Object]

  // pages                         >>>>>>>>>>>>>>>>: src/app/page.tsx,src/app/contact/page.tsx, \
  return [...routes]; // spread operator on [routes]
}
