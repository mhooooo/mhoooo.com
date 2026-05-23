import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WorkflowShowcase } from "@/components/workflow-showcase";
import { DemoLibrary } from "@/components/demo-library";
import { AdvancedWorkflows } from "@/components/advanced-workflows";
import { HowItWorks } from "@/components/how-it-works";
import { WhyMhoooo } from "@/components/why-mhoooo";
import { LearningPath } from "@/components/learning-path";
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
        <WorkflowShowcase />
        <DemoLibrary />
        <AdvancedWorkflows />
        <HowItWorks />
        <WhyMhoooo />
        <LearningPath />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
