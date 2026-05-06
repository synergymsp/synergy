'use client';

import {
  faArrowDown,
  faArrowRight,
  faCopy
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

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
      <div className="flex w-full flex-col items-start justify-between lg:flex-row lg:space-x-10 xl:space-x-16">
        <div className="relative mb-12 w-full lg:mb-0 lg:w-1/2 xl:w-5/12">
          <div className="relative mb-5 w-[100%] overflow-hidden sm:mb-[120px] 2xl:-ml-[200px] 2xl:mb-[30px] 2xl:w-[unset]">
            <Image
              src="/images/software-development.webp"
              alt="Software Development"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              className='rounded-md object-cover object-right-top'
            />
          </div>
          <div className="relative bottom-0 w-[100%] rounded-md bg-white p-2 sm:absolute sm:right-[30px] sm:h-[220px] sm:w-[290px] 2xl:-right-0 2xl:rounded-r-none 2xl:pb-0 2xl:pr-0">
            <Image
              src="/images/data-protection.webp"
              alt="Data Protection"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: '100%' }}
              className='object-cover object-right-top max-sm:rounded-md sm:rounded-tl-md'
            />
            
          </div>
        </div>
        <div className="flex flex-col justify-center lg:w-1/2 xl:w-7/12">
          <span className="mb-5 flex items-center font-exo text-base font-semibold uppercase text-white">
            <FontAwesomeIcon icon={faCopy} className="mr-2" /> Talk About
            Something
          </span>
          <h2 className="mb-5 font-exo text-[24px] font-bold uppercase leading-snug text-white sm2:text-[26px] sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
            Innovation You Can Trust
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
                <div className="border-t border-stroke py-3 sm:py-5">
                  <p className="text-justify text-sm text-body md:text-base">{faq.answer}</p>
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
