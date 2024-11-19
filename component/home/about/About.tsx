import {
  faPlay,
  faArrowRight,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import { Button } from "@/component/common/Button";
import { Container } from "@/component/common/Container";
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
          <div className="relative mb-5 w-[100%] overflow-hidden rounded-md sm:mb-[60px] lg:max-w-[425px]">
            <Image
              src="/images/about/about-2.webp"
              alt="About image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              className="rounded-md"
            />
          </div>
          <div className="relative bottom-0 right-0 w-[100%] sm:absolute sm:h-[282px] sm:w-[344px]">
            <Image
              src="/images/about/about-1.webp"
              alt="About image small"
              className="rounded-md"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
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
            Solution 2024
          </span>
          <h2 className="font-exo text-title sm2:text-[26px] mb-5 text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
            Reasons for Choosing Us
          </h2>

          <div className="flex items-center mb-6">
            <div className="mr-4 w-[50px] h-[50px] bg-theme rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-base uppercase font-exo">
                01
              </span>
            </div>
            <div className="flex-1">
              <h5 className="font-exo text-title text-base font-semibold uppercase leading-snug">
                One Stop Shop For All Your Technology Needs
              </h5>
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="mr-4 w-[50px] h-[50px] bg-theme rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-base uppercase font-exo">
                02
              </span>
            </div>
            <div className="flex-1">
              <h5 className="font-exo text-title text-base font-semibold uppercase leading-snug">
                Expert guidance to build your growing business
              </h5>
            </div>
          </div>
          <div className="flex items-center mb-10">
            <div className="mr-4 w-[50px] h-[50px] bg-theme rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-base uppercase font-exo">
                03
              </span>
            </div>
            <div className="flex-1">
              <h5 className="font-exo text-title text-base font-semibold uppercase leading-snug">
                Create endless business possibilities!
              </h5>
            </div>
          </div>

          <p className="text-body mb-6 text-sm md:text-base">
            We believe in the possibility of what can be. Our team of
            experienced system and network engineers, tech support specialists,
            and developers are driven to produce a robust and manageable IT
            environment. We have created thousands of solutions over the last
            decade and helped businesses like yours expand at a rapid scale.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
