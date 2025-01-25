// pull from private repo: [tkokhing/topic_post]
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import Container from "@/app/_components/container";
import { PostHeader } from "@/app/_components/post-header";
import SubpageHeader from "@/app/_components/main_frame/subpage-header";
import { SectionSeparator } from "@/app/_components/section-separator";
// import markdownToHtml from "@/lib/markdownToHtml";
// import { PostBody } from "@/app/_components/post-body";
// import markdownStyles from "@/app/_components/markdown-styles.module.css";

export default async function Post(props: Params) {
  const params = await props.params;
  const post = getPostBySlug(params.slug, "_posts");
  if (!post) {
    return notFound();
  }
  return (
    <main>
      <Container>
        <SubpageHeader />
        <SectionSeparator />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author} 
            subPath={post.subPath}
            postStatus={post.postStatus}
          />
            <div className="prose prose-lg md:prose-lg lg:prose-lg mx-auto prose-headings:text-indigo-900 dark:prose-headings:text-slate-100">
              <div className="prose-a:text-blue-600 dark:prose-a:text-blue-300 dark:text-slate-300 prose dark:prose-invert">
                <MDXRemote source={post.content || ""}  />
              </div>
            </div>
            {/* <PostBody content={content} /> */}
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug, "_posts");

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;

  return {
    title,
    openGraph: {
      title,
      images: [post.ogImage.url],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts("_posts");

  return posts.map((post) => ({
    slug: post.slug,
  }));
}