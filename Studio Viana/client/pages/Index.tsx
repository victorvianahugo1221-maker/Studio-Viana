import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ProcessTimeline from "@/components/ProcessTimeline";
import FAQ from "@/components/FAQ";
import CallToAction from "@/components/CallToAction";

interface IndexProps {
  onOpenProjectForm: () => void;
  onCloseProjectForm: () => void;
}

export default function Index({
  onOpenProjectForm,
  onCloseProjectForm,
}: IndexProps) {
  return (
    <Layout onOpenProjectForm={onOpenProjectForm}>
      <Hero onOpenProjectForm={onOpenProjectForm} />
      <Services />
      <Portfolio />
      <ProcessTimeline />
      <FAQ />
      <CallToAction onOpenProjectForm={onOpenProjectForm} />
    </Layout>
  );
}
