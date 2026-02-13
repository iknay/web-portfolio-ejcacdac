import MainLayout from "./layout/MainLayout";
import Hero from "./components/custom/Hero";
import Works from "./components/custom/Works";
import AboutMe from "./components/custom/AboutMe";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <section id="about" className="pt-20">
        <AboutMe />
      </section>
      <section id="works">
        <Works />
      </section>
    </MainLayout>
  );
}
