import { HeroSection } from "@/components/sections/HeroSection";
import { OurStorySection } from "@/components/sections/OurStorySection";
import { FoundersSection } from "@/components/sections/FoundersSection";
import { SignatureMenuSection } from "@/components/sections/SignatureMenuSection";
import { TheVibeSection } from "@/components/sections/TheVibeSection";

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <OurStorySection />
      <FoundersSection />
      <SignatureMenuSection />
      <TheVibeSection />
    </>
  );
}
