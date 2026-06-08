import {
  Header,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Contact,
  Footer,
} from "@/components/index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
