import MainLayout from "./layout/MainLayout";
import Hero from "./components/custom/Hero";
import Works from "./components/custom/Works";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Works />
    </MainLayout>
  );
}
