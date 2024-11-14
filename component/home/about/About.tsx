import {
  faPlay,
  faArrowRight,
  faCopy,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';
const AboutSection: React.FC = () => {
  return (
    <Container>
      <span className="vertical-text font-exo absolute bottom-[100px] right-[95px] -z-10 hidden rotate-180 text-[80px] font-normal uppercase leading-none text-blue-700/10 xl:inline-block 2xl:text-[120px]">
        Synergy
      </span>

      <div className="flex flex-col lg:flex-row lg:space-x-10 xl:space-x-16">
        <div
          className="relative mb-12 lg:mb-0 lg:w-1/2 xl:w-5/12"
          data-wow-delay="0.2s"
        >
          <div className="relative mb-[60px] w-[100%] overflow-hidden rounded-md lg:max-w-[425px]">
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
          <div className="absolute bottom-0 right-0">
            <Image
              src="/images/about/about-1.webp"
              alt="About image small"
              width={344}
              height={282}
              className="rounded-md"
            />
            <a
              href="#"
              className="duration-400 group absolute left-[50%] top-[50%] z-10 inline-block -translate-x-[50%] -translate-y-[50%] bg-transparent p-0 transition-all ease-in-out"
            >
              <span className="duration-400 bg-theme flex h-[60px] w-[60px] items-center justify-center rounded-md text-lg text-white transition-all ease-in-out">
                <FontAwesomeIcon icon={faPlay} />
              </span>

              <span className="duration-400 bg-theme absolute inset-0 -z-10 h-full w-full rounded-md opacity-50 transition-all ease-in-out group-hover:opacity-100" />
              <span className="bg-theme absolute inset-0 -z-10 h-full w-full animate-ping rounded-md opacity-50" />
            </a>
          </div>
        </div>

        <div
          className="flex flex-col justify-center lg:w-1/2 xl:w-7/12"
          data-wow-delay="0.3s"
        >
          <span className="font-exo text-theme mb-5 flex items-center text-base font-semibold uppercase">
            <FontAwesomeIcon icon={faCopy} className="mr-2" /> Get Best IT
            Solution 2022
          </span>
          <h2 className="font-exo text-title mb-5 text-[36px] font-bold uppercase leading-snug xl:text-[44px] 2xl:text-[48px]">
            Trust Our Best IT Solution For Your Business
          </h2>
          <p className="text-body mb-6 text-base">
            Compellingly mesh cross-platform portals through functional human
            capital world-class architectures for orthogonal initiatives.
            Assertively benchmark visionary quality vectors after covalent
            e-tailers. Intrinsically enhance 24/7 users and supply process.
          </p>

          <div className="shadow-card-shadow2 mb-10 flex w-fit items-center rounded-md bg-white p-[10px] pr-10">
            <div className="bg-smoke shadow-icon-box-shadow2 mr-5 flex h-[80px] w-[80px] flex-shrink-0 items-center justify-center rounded-md xl:h-[95px] xl:w-[95px]">
              <Image
                src="/icon/tel-1-1.png"
                alt="phone Icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '40%', height: 'auto' }}
              />
            </div>
            <div>
              <span className="font-exo text-body text-sm font-normal uppercase">
                24 HOURS SERVICE AVAILABLE
              </span>
              <p className="font-exo text-title text-base font-bold">
                Call Us:{' '}
                <a href="tel:+17323343590" className="hover:text-theme">
                  +1 732 334 3590
                </a>
              </p>
            </div>
          </div>

          <Button className="bg-theme w-fit text-white">
            ABOUT US
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
