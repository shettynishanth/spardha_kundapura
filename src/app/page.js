import Image from "next/image";
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import KeyFeaturesSection from '@/components/KeyFeaturesSection'
import Footer from '@/components/Footer'
export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <KeyFeaturesSection />
      <Footer />
    </div>
  );
}
