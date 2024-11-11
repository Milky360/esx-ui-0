import HeroSection1 from "@/components/hero-section-1";
import HeroSection2 from "@/components/hero-section-2";
import ReadyToGetStarted from "@/components/ready-to-get-started";

import ViewCampaign from "./_components/view-campaign";

export default function Home() {
  return (
    <>
      <HeroSection1 />
      <ViewCampaign />
      <ReadyToGetStarted />
      <HeroSection2 />
    </>
  );
}
