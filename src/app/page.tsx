import HeroSection1 from "@/components/HeroSection1";
import HeroSection2 from "@/components/HeroSection2";
import ReadyToGetStarted from "@/components/ReadyToGetStarted";
import ViewCampaign from "@/components/ViewCampaign/ViewCampaign";

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
