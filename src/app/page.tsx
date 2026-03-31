import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { HowItWorks } from "@/components/how-it-works";
import { WhyMhoooo } from "@/components/why-mhoooo";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <WhyMhoooo />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
