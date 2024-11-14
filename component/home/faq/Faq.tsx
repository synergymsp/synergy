'use client';

import {
  faArrowDown,
  faArrowRight,
  faCopy,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useState } from 'react';

import { Container } from '@/component/common/Container';

const faqs = [
  {
    question: 'Master Technology It Solution Services Making?',
    answer:
      'Assertively communicate multidisciplinary content through emerging skills for intermandated e-tailers. Rapidiously revolutionize emerging supply for interdependent portals. Monotonectally restore 24/365 leadership for high quality niche markets transform emerging mindshare...',
  },
  {
    question: 'Contrary to popular belief is not simply random text?',
    answer:
      'Assertively communicate multidisciplinary content through emerging skills for intermandated e-tailers. Rapidiously revolutionize emerging supply for interdependent portals. Monotonectally restore 24/365 leadership for high quality niche markets transform emerging mindshare...',
  },
  {
    question: 'There are many variations of passages of available?',
    answer:
      'Assertively communicate multidisciplinary content through emerging skills for intermandated e-tailers. Rapidiously revolutionize emerging supply for interdependent portals. Monotonectally restore 24/365 leadership for high quality niche markets transform emerging mindshare...',
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0); // Set the first FAQ as open initially

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index); // Close if the same index is clicked, otherwise open new one
  };

  return (
    <Container>
      <div className="flex w-full flex-col items-start lg:flex-row lg:space-x-10 xl:space-x-16">
        <div className="relative mb-12 w-full lg:mb-0 lg:w-1/2 xl:w-5/12">
          <div className="relative mb-[120px] w-[100%] overflow-hidden 2xl:-ml-[200px] 2xl:mb-[30px] 2xl:w-[unset]">
            <Image
              src="/images/faq/faq-1.webp"
              alt="About image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="absolute bottom-0 right-[30px] rounded-md bg-white p-2 2xl:-right-0 2xl:rounded-r-none 2xl:pb-0 2xl:pr-0">
            <Image
              src="/images/faq/faq-2.webp"
              alt="About image small"
              width={290}
              height={220}
            />
            <a
              href="#"
              className="duration-400 group absolute left-[50%] top-[50%] z-10 inline-block -translate-x-[50%] -translate-y-[50%] bg-transparent p-0 transition-all ease-in-out"
            >
              <span className="duration-400 flex h-[60px] w-[60px] items-center justify-center rounded-md bg-theme/55 text-lg text-white transition-all ease-in-out">
                <FontAwesomeIcon icon={faPlay} />
              </span>
              <span className="duration-400 absolute inset-0 -z-10 h-full w-full rounded-md bg-theme/55 opacity-50 transition-all ease-in-out group-hover:opacity-100" />
              <span className="absolute inset-0 -z-10 h-full w-full animate-ping rounded-md bg-theme/55 opacity-50" />
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-1/2 xl:w-7/12">
          <span className="font-exo mb-5 flex items-center text-base font-semibold uppercase text-white">
            <FontAwesomeIcon icon={faCopy} className="mr-2" /> Talk About
            Something
          </span>
          <h2 className="font-exo mb-5 text-[36px] font-bold uppercase leading-snug text-white xl:text-[44px] 2xl:text-[48px]">
            How can we help you?
          </h2>
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="mb-5 rounded-md bg-white px-[25px]"
            >
              <button
                onClick={() => handleToggle(index)}
                className={`group flex w-full items-start justify-between py-[14px] text-left ${
                  openIndex === index ? 'text-theme' : 'text-gray-900'
                }`}
              >
                <span className="font-exo text-[18px] font-semibold">
                  {faq.question}
                </span>
                <span className="ml-6 flex h-7 items-center">
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
                className={`overflow-hidden border-t border-[#EBEBEB] transition-[max-height] duration-1000 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                {openIndex === index && (
                  <div className="py-5">
                    <p className="text-base text-body">{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FAQSection;
