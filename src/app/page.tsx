import MainLayout from "./layout/MainLayout";
import Hero from "./components/custom/Hero";
import Works from "./components/custom/Works";
import AboutMe from "./components/custom/AboutMe";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <AboutMe />
      <Works />
    </MainLayout>
  );
}
