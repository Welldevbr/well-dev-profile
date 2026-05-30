import { Header, Hero, About, Footer, Experience } from "@/components/index";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
      </main>
      <Footer />
    </>
  );
}
