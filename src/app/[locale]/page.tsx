import { HeroImage } from "@/components/home/hero-image";
import { StoryPreview } from "@/components/home/story-preview";
import { WinesPreview } from "@/components/home/wines-preview";
import { RestaurantPreview } from "@/components/home/restaurant-preview";
import { Testimonials } from "@/components/home/testimonials";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <HeroImage />
      <StoryPreview />
      <WinesPreview />
      <RestaurantPreview />
      <Testimonials />
      <CtaSection />
    </>
  );
}
