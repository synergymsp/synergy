import AboutSection from '@/component/home/about/About';
import CounterSection from '@/component/home/counter/Counter';
import FAQSection from '@/component/home/faq/Faq';
import HeroSection from '@/component/home/hero/slider';
import NeedConsultationSection from '@/component/home/need-consultation/NeedConsultation';
import ReviewsSection from '@/component/home/reviews/reviews';
import ServicesSection from '@/component/home/services/Services';
import SkillsSection from '@/component/home/skill/Skill';
import StatsSection from '@/component/home/stats/StatsSec';
import TeamsSection from '@/component/home/teams/Teams';
import WorkSection from '@/component/home/work/Work';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="bg-about-bg relative bg-[#f7f8fa] bg-cover bg-center">
        <StatsSection />
        <section className="relative pb-[120px] pt-8">
          <AboutSection />
        </section>
      </div>
      <section className="bg-services-sec-bg relative bg-cover bg-top pb-[120px] pt-[90px]">
        <ServicesSection />
      </section>

      <section className="relative">
        <div className="counter-shape"></div>
        <div className="bg-counter-sec relative bg-cover bg-center py-[120px]">
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
        <SkillsSection />
      </section>
      <section className="py-[120px]">
        <ReviewsSection />
      </section>
      <section className="bg-cta-sec bg-cover bg-center bg-no-repeat py-[120px]">
        <NeedConsultationSection />
      </section>
      <section className="bg-process-sec bg-cover bg-center bg-no-repeat pb-[90px] pt-[120px]">
        <WorkSection />
      </section>
    </>
  );
}
