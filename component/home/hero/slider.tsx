'use client';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

import { Button } from '@/component/common/Button';

const slides = [
  {
    image: '/images/hero/hero-1-1.jpg',
    badge: 'HIGHLY QUALIFIYED ENGINERS',
    title1: 'TEAM OF',
    title2: 'LEGENDS & PRO ENGINERS',
    description:
      'Professionally repurpose intuitive total linkage after timely mindshare. Credibly coordinate reliable collaboration and idea-sharing after turnkey catalysts for change.',
  },
  {
    image: '/images/hero/hero-1-2.jpg',
    badge: 'WE HAVE TOP IT EXPERT',
    title1: 'BEST IT',
    title2: 'SERVICE & SOLUTION 2022',
    description:
      'Professionally repurpose intuitive total linkage after timely mindshare. Credibly coordinate reliable collaboration and idea-sharing after turnkey catalysts for change.',
  },
  {
    image: '/images/hero/hero-1-3.jpg',
    badge: 'PROVIDE FREE CONSULTATION',
    title1: 'TOP IT',
    title2: 'SUPPORT & MANAGEMNT',
    description:
      'Professionally repurpose intuitive total linkage after timely mindshare. Credibly coordinate reliable collaboration and idea-sharing after turnkey catalysts for change.',
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
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1,
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
            className={`background ${index % 2 === 0 ? 'zoom-out' : 'zoom-in'} ${
              index === currentIndex ? 'visible' : ''
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>

          <div
            className={`angled-div-1 ${index === currentIndex ? 'slide-in1' : 'slide-out2'}`}
          ></div>
          <div
            className={`angled-div-2 ${index === currentIndex ? 'slide-in2' : 'slide-out2'}`}
          ></div>

          {/* Text Overlay */}
          <AnimatePresence mode="wait">
            {index === currentIndex && (
              <div className="overlay-text">
                <div className="mx-auto w-full px-[30px] sm:max-w-[540px] md:max-w-[720px] min-[1100px]:max-w-[945px] 2xl:max-w-[1140px]">
                  <div className="flex items-center gap-6">
                    <motion.h1
                      initial={{ x: -100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -100, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      className="font-exo text-[50px] font-bold leading-tight text-white"
                    >
                      {slide.title1}
                    </motion.h1>

                    <motion.button
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="whitespace-nowrap rounded-md border-2 border-white bg-transparent px-6 py-1 text-white"
                    >
                      {slide.badge}
                    </motion.button>
                  </div>

                  <motion.h2
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="font-exo mb-8 text-start text-[50px] font-bold leading-tight text-white"
                  >
                    {slide.title2}
                  </motion.h2>

                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="mb-8 max-w-[695px] text-sm text-white"
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="flex gap-4"
                  >
                    <Button className="bg-theme text-white">
                      ABOUT US
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 h-4 w-4"
                      />
                    </Button>
                    <Button className="bg-white text-theme">
                      READ MORE
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 h-4 w-4"
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
