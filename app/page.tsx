import {
  Header,
  HeroSection,
  StatsSection,
  GetStartedVideo,
  Services,
  Testimonials,
  PortfolioSection,
  CTABanner,
  Footer,
} from "./components";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <StatsSection />
      <GetStartedVideo />
      <Services />
      <PortfolioSection />
      <Testimonials />
      <CTABanner />
      <Footer />
    </div>
  );
}
