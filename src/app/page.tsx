// src/app/page.tsx
import HeroSection from "@/components/sections/HeroSection";
import ProfileCardSection from "@/components/sections/ProfileCardSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProfileCardSection />
    </main>
  );
}
