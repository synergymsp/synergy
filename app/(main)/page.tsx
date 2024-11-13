import AboutSection from '@/component/home/about/About';
import CounterSection from '@/component/home/counter/Counter';
import FAQSection from '@/component/home/faq/Faq';
import HeroSection from '@/component/home/hero/slider';
import ReviewsSection from '@/component/home/reviews/reviews';
import ServicesSection from '@/component/home/services/Services';
import StatsSection from '@/component/home/stats/StatsSec';
import TeamsSection from '@/component/home/teams/Teams';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="relative bg-[#f7f8fa] bg-about-bg bg-cover bg-center">
        <StatsSection />
        <section className="relative pb-[120px] pt-8">
          <AboutSection />
        </section>
      </div>
      <section className="relative bg-services-sec-bg bg-cover bg-top pb-[120px] pt-[90px]">
        <ServicesSection />
      </section>

      <section className="relative">
        <div className="counter-shape"></div>
        <div className="relative bg-counter-sec bg-cover bg-center py-[120px]">
          <CounterSection />
        </div>
      </section>

      <section className="py-[120px]">
        <TeamsSection />
      </section>

      <section className="relative pb-[90px] pt-[240px]">
        <div className="faq-shape1 bg-faq-sec bg-cover bg-fixed bg-center bg-no-repeat"></div>
        <div className="faq-shape2 bg-faq-sec-two bg-cover bg-center bg-no-repeat"></div>
        <FAQSection />
      </section>

      <section className="py-[120px]">
        <ReviewsSection />
      </section>
    </>
  );
}
