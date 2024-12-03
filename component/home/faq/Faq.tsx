'use client';

import {
  faArrowDown,
  faArrowRight,
  faCopy,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

import { Container } from '@/component/common/Container';

const faqs = [
  {
    question: 'How We Can Assist You?',
    answer:
      'Synergy offers customized IT solutions designed to meet your unique business needs. Whether it’s Oracle integration, MSP services, or technology optimization, we provide expert support to ensure your operations run smoothly and efficiently.',
  },
  {
    question: 'Expert IT Solutions for Your Business?',
    answer:
      'Our comprehensive IT services, including Oracle development and cloud solutions, are crafted to drive performance, enhance security, and ensure scalability. We specialize in making your IT systems work smarter for your business.',
  },
  {
    question: 'Exploring Diverse Technology Solutions?',
    answer:
      'Technology is not one-size-fits-all. We offer a variety of solutions tailored to your business needs, ensuring you get the right tools to stay ahead and competitive in the market.',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    if (contentRefs.current) {
      contentRefs.current.forEach((ref, idx) => {
        if (ref) {
          ref.style.height =
            openIndex === idx ? `${ref.scrollHeight}px` : '0px';
        }
      });
    }
  }, [openIndex]);

  return (
    <Container>
      <div className="flex w-full flex-col items-start lg:flex-row lg:space-x-10 xl:space-x-16">
        <div className="relative mb-12 w-full lg:mb-0 lg:w-1/2 xl:w-5/12">
          <div className="relative mb-5 w-[100%] overflow-hidden sm:mb-[120px] 2xl:-ml-[200px] 2xl:mb-[30px] 2xl:w-[unset]">
            <Image
              src="/images/faq/faq-1.webp"
              alt="About image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="relative bottom-0 w-[100%] rounded-md bg-white p-2 sm:absolute sm:right-[30px] sm:h-[220px] sm:w-[290px] 2xl:-right-0 2xl:rounded-r-none 2xl:pb-0 2xl:pr-0">
            <Image
              src="/images/faq/faq-2.webp"
              alt="About image small"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
            <a
              href="#"
              className="duration-400 group absolute left-[50%] top-[50%] z-10 inline-block -translate-x-[50%] -translate-y-[50%] bg-transparent p-0 transition-all ease-in-out"
            >
              <span className="duration-400 bg-theme/55 flex h-[60px] w-[60px] items-center justify-center rounded-md text-lg text-white transition-all ease-in-out">
                <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className="duration-400 bg-theme/55 absolute inset-0 -z-10 h-full w-full rounded-md opacity-50 transition-all ease-in-out group-hover:opacity-100" />
              <span className="bg-theme/55 absolute inset-0 -z-10 h-full w-full animate-ping rounded-md opacity-50" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-1/2 xl:w-7/12">
          <span className="font-exo mb-5 flex items-center text-base font-semibold uppercase text-white">
            <FontAwesomeIcon icon={faCopy} className="mr-2" /> Talk About
            Something
          </span>
          <h2 className="font-exo sm2:text-[26px] mb-5 text-[24px] font-bold uppercase leading-snug text-white sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
            How can we help you?
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="mb-5 rounded-md bg-white px-3 sm:px-[25px]"
            >
              <button
                onClick={() => handleToggle(index)}
                className={`group flex w-full items-start justify-between py-[14px] text-left ${
                  openIndex === index ? 'text-theme' : 'text-title'
                }`}
              >
                <span className="font-exo text-sm font-semibold sm:text-base xl:text-lg">
                  {faq.question}
                </span>
                <span className="ml-6 flex items-center">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`ml-2 h-4 w-4 ${
                      openIndex === index ? 'hidden' : ''
                    }`}
                  />
                  <FontAwesomeIcon
                    icon={faArrowDown}
                    className={`ml-2 h-4 w-4 ${
                      openIndex === index ? '' : 'hidden'
                    }`}
                  />
                </span>
              </button>
              <div
                ref={(el) => {
                  if (el) contentRefs.current[index] = el;
                }}
                className="overflow-hidden transition-[height] duration-500 ease-in-out"
              >
                <div className="border-t border-[#EBEBEB] py-3 sm:py-5">
                  <p className="text-body text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQSection;
