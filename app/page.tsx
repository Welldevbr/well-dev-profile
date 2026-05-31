import {
  Header,
  Hero,
  About,
  Footer,
  Experience,
  Skills,
} from "@/components/index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
      </main>
      <Footer />
    </>
  );
}
