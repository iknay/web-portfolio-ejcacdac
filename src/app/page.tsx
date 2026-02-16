import MainLayout from "./layout/MainLayout";
import Hero from "./components/custom/Hero";
import Works from "./components/custom/Works";
import AboutMe from "./components/custom/AboutMe";
import ContactForm from "./components/custom/ContactMe";

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
      <section id="contact-me" className="pt-10">
        <ContactForm />
      </section>
    </MainLayout>
  );
}
