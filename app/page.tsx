import {
  Header,
  Hero,
  About,
  Experience,
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
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
