import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Skills } from "@/components/sections/Skills";
import { ArchitectureThinking } from "@/components/sections/ArchitectureThinking";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SelectedWork />
      <Skills />
      <ArchitectureThinking />
      <About />
      <Contact />
    </>
  );
}
