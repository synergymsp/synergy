'use client';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

import { Button } from '@/component/common/Button';

const slides = [
  {
    image: '/images/hero/hero-1-1.jpg',
    badge: 'EXPERT PROBLEM-SOLVERS',
    title1: 'Experienced',
    title2: 'Engineers at Your Service',
    description:
      'Our engineers are not just technically proficient but are passionate problem-solvers dedicated to providing actionable, tailored solutions. They work tirelessly to optimize your systems, ensuring the most efficient, cost-effective solutions for your business’s unique needs',
  },
  {
    image: '/images/hero/hero-1-2.jpg',
    badge: 'ALL-INCLUSIVE IT SOLUTIONS',
    title1: 'Comprehensive',
    title2: 'Services & Solutions',
    description:
      'From initial consultations to full-scale system management, our solutions cover all aspects of IT. We specialize in creating customized strategies that align with your business goals, ensuring you receive the most efficient and future-proof systems possible.',
  },
  {
    image: '/images/hero/hero-1-3.jpg',
    badge: 'TAILORED IT CONSULTATION',
    title1: 'Consultation,',
    title2: 'Support & Management',
    description:
      'We offer a free consultation to assess your IT needs, followed by ongoing management and support. Our experts ensure your systems are secure, optimized, and running smoothly, freeing you to focus on your business’s growth without technical worries.',
  },
  {
    image: '/images/hero/hero-1-1.jpg',
    badge: 'INNOVATION AT ITS BEST',
    title1: 'Top-Tier',
    title2: 'IT Solutions',
    description:
      'We deliver industry-leading IT solutions that help businesses adapt to modern technology demands. With a focus on reliability, innovation, and scalability, our team ensures that your technology infrastructure is built to last, enabling seamless growth and operational efficiency.',
  },
  {
    image: '/images/hero/hero-1-2.jpg',
    badge: 'DRIVEN BY EXPERTISE',
    title1: 'Our Experts ',
    title2: 'Drive Your Success',
    description:
      'Our team is composed of highly skilled IT professionals who bring decades of experience and specialized knowledge across various industries. With a collaborative approach, we solve complex challenges, offering solutions that empower your business to stay ahead of the competition.',
  },
];

export const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto-transition every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''} relative`}
        >
          {/* Background Image with Zoom Effect */}
          <div
            className={`background ${
              index % 2 === 0 ? 'zoom-out' : 'zoom-in'
            } ${index === currentIndex ? 'visible' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>

          <div
            className={`angled-div-1 ${
              index === currentIndex ? 'slide-in1' : 'slide-out2'
            }`}
          ></div>
          <div
            className={`angled-div-2 ${
              index === currentIndex ? 'slide-in2' : 'slide-out2'
            }`}
          ></div>

          {/* Text Overlay */}
          <AnimatePresence mode="wait">
            {index === currentIndex && (
              <div className="overlay-text">
                <div className="mx-auto w-full px-[20px] sm:px-[30px] md:px-[80px] lg:max-w-[720px] lg:px-[30px] min-[1100px]:max-w-[945px] 2xl:max-w-[1140px]">
                  <div className="flex items-center justify-center  gap-6 md:justify-start">
                    <motion.h1
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="font-exo sm2:text-[26px] text-[24px] font-bold uppercase leading-tight text-white sm:text-[34px] lg:text-[44px] xl:text-[50px]"
                    >
                      {slide.title1}
                    </motion.h1>

                    <motion.button
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="hidden whitespace-nowrap rounded-md border-2 border-white bg-transparent px-6 py-1 text-white md:block"
                    >
                      {slide.badge}
                    </motion.button>
                  </div>

                  <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-exo sm2:text-[26px] mb-4 text-center text-[24px] font-bold uppercase leading-tight text-white sm:text-[34px] md:mb-8 md:text-start lg:text-[44px] xl:text-[50px]"
                  >
                    {slide.title2}
                  </motion.h2>

                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-8 hidden max-w-[695px] text-justify text-sm text-white lg:block"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex justify-center gap-4 md:justify-start"
                  >
                    <Button className="bg-theme px-[14px] py-[11px] text-white md:px-7 md:py-5">
                      ABOUT US
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 h-4 w-4"
                      />
                    </Button>
                    <Button className="text-theme bg-white px-[14px] py-[11px] md:px-7 md:py-5">
                      READ MORE
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 h-4 w-4 "
                      />
                    </Button>
                  </motion.div>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      ))}

      <div className="absolute left-0 right-0 mx-auto h-full w-full max-w-[1320px]">
        <button
          className="prev-button max-[1366px]:ml-6 max-lg:hidden"
          onClick={handlePrev}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
        </button>
        <button
          className="next-button max-[1366px]:mr-6 max-lg:hidden"
          onClick={handleNext}
        >
          <FontAwesomeIcon icon={faArrowRight} className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
