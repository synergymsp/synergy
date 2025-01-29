import { faCopy, faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { Container } from '@/component/common/Container';

const FeatureItem = ({ number, text }: { number: string; text: string }) => (
  <div className="mb-6 flex items-center">
    <div className="bg-theme mr-4 flex h-[40px] w-[40px] items-center justify-center rounded-md sm:h-[50px] sm:w-[50px]">
      <span className="font-exo text-sm font-bold uppercase text-white sm:text-base">
        {number}
      </span>
    </div>
    <h5 className="font-exo text-title flex-1 text-sm font-semibold uppercase leading-snug md:text-base">
      {text}
    </h5>
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <Container>
      <span className="vertical-text font-exo absolute bottom-[100px] right-[95px] -z-10 hidden rotate-180 text-[80px] font-normal uppercase leading-none text-blue-700/10 xl:inline-block 2xl:text-[120px]">
        Synergy
      </span>

      <div className="flex flex-col lg:flex-row lg:space-x-10 xl:space-x-16">
        <div className="relative mb-12 lg:mb-0 lg:w-1/2 xl:w-5/12" data-wow-delay="0.2s">
          <div className="relative mb-5 w-full overflow-hidden rounded-md sm:mb-[60px] lg:max-w-[425px]">
            <Image
              src="/images/about/about-2.webp"
              alt="About image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
              className="rounded-md"
            />
          </div>
          <div className="relative bottom-0 right-0 w-full sm:absolute sm:h-[282px] sm:w-[344px]">
            <Image
              src="/images/about/about-1.webp"
              alt="About image small"
              className="rounded-md"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <a
              href="#"
              className="duration-400 group absolute left-1/2 top-1/2 z-10 inline-block -translate-x-1/2 -translate-y-1/2 bg-transparent p-0 transition-all ease-in-out"
            >
              <span className="duration-400 bg-theme flex h-[60px] w-[60px] items-center justify-center rounded-md text-lg text-white transition-all ease-in-out">
                <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className="duration-400 bg-theme absolute inset-0 -z-10 h-full w-full rounded-md opacity-50 transition-all ease-in-out group-hover:opacity-100" />
              <span className="bg-theme absolute inset-0 -z-10 h-full w-full animate-ping rounded-md opacity-50" />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center lg:w-1/2 xl:w-7/12" data-wow-delay="0.3s">
          <span className="font-exo text-theme mb-5 flex items-center text-base font-semibold uppercase">
            <FontAwesomeIcon icon={faCopy} className="mr-2" /> Get Best IT Solution {new Date().getFullYear()}
          </span>
          <h2 className="font-exo text-title sm2:text-[26px] mb-5 text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px]">
            Reasons for Choosing Us
          </h2>

          <FeatureItem number="01" text="Comprehensive Technology Solutions" />
          <FeatureItem number="02" text="Expert Advice for Your Business Growth" />
          <FeatureItem number="03" text="Endless Opportunities for Your Business" />

          <p className="text-body mb-6 text-justify text-sm md:text-base">
            Synergy combines innovation and expertise to provide robust IT services that fuel business growth. We’re committed to understanding your unique challenges and delivering solutions that enhance operational efficiency, security, and scalability, making us the ideal IT partner for businesses at every stage.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
