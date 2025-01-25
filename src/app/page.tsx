import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/main_frame/intro"
import { HeroPost } from "@/app/_components/hero-post";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { SectionSeparator } from "@/app/_components/section-separator";

export default function Index() {
  const allPosts = getAllPosts("_posts");
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1); 
  return (
    <main>
      <Container>
        <Intro />
        <SectionSeparator />
        Blog Main Page
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          slug={heroPost.slug}
          author={heroPost.author}
          excerpt={heroPost.excerpt}
          subPath={heroPost.subPath}
          postStatus={heroPost.postStatus}
          />
      
      {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
