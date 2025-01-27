import AboutSection from '@/component/home/about/About';
import FAQSection from '@/component/home/faq/Faq';
import HeroSection from '@/component/home/hero/slider';
import NeedConsultationSection from '@/component/home/need-consultation/NeedConsultation';
import ServicesSection from '@/component/home/services/Services';
import TeamsSection from '@/component/home/teams/Teams';
import WorkSection from '@/component/home/work/Work';

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="">
        <section className="bg-services-sec-bg relative bg-cover bg-top pb-[80px] pt-[50px] md:pt-[60px] lg:pb-[120px] lg:pt-[90px]">
          <ServicesSection />
        </section>
      </div>
      <section id="about-section" className="relative py-[60px] md:py-[80px] lg:py-[120px]">
        <AboutSection />
      </section>

      <section className="pb-[60px] md:pb-[80px] lg:pb-[120px]">
        <TeamsSection />
      </section>

      <section className="relative py-[50px] md:pb-[70px] md:pt-[80px] lg:pb-[90px] lg:pt-[120px] xl:pt-[240px]">
        <div className="faq-shape1 bg-faq-sec bg-cover bg-center bg-no-repeat"></div>
        <div className="faq-shape2 bg-faq-sec-two hidden bg-cover bg-center bg-no-repeat xl:block"></div>
        <FAQSection />
      </section>

      <section className="bg-cta-sec mt-[50px] bg-cover bg-center bg-no-repeat py-[50px] md:mt-[80px] md:py-[80px] lg:mt-[120px] lg:py-[120px]">
        <NeedConsultationSection />
      </section>
      <section className="bg-process-sec bg-cover bg-center bg-no-repeat py-[50px] md:pb-[70px] md:pt-[80px] lg:pb-[90px] lg:pt-[120px]">
        <WorkSection />
      </section>
    </>
  );
}
