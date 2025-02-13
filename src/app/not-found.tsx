import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/main_frame/intro"
import { SectionSeparator } from "@/app/_components/section-separator";

export default function NotFoundPage() {
  return (
    <main>
      <Container>
      <Intro />
      <SectionSeparator />
      <h2 className="text-center md:text-center text-lg mt-5 md:pl-8">
        Page not found. Click{" "}
      <a
        href="https://ironweb-research.github.io/"
        className="underline hover:text-blue-600 duration-200 transition-colors"
      >
        here
      </a>{" "}
        to go to main page.
      </h2>
      </Container>
    </main>
  )
}
