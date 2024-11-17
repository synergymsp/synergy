'use client';

import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

import { Container } from '@/component/common/Container';

const logos = [
  { src: '/logo.svg', alt: 'Logo 1' },
  { src: '/sefrov.png', alt: 'Logo 2' },
  { src: '/logo.svg', alt: 'Logo 3' },
  { src: '/sefrov.png', alt: 'Logo 4' },
  { src: '/logo.svg', alt: 'Logo 5' },
  { src: '/sefrov.png', alt: 'Logo 6' },
  { src: '/logo.svg', alt: 'Logo 7' },
  { src: '/sefrov.png', alt: 'Logo 8' },
  { src: '/logo.svg', alt: 'Logo 9' },
  { src: '/sefrov.png', alt: 'Logo 10' },
  { src: '/logo.svg', alt: 'Logo 11' },
  { src: '/sefrov.png', alt: 'Logo 12' },
];

const BrandSection: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  const marqueeVariants = {
    animate: {
      x: ['0%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    },
    paused: { x: '0%' },
  };

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start('animate');
  };

  useEffect(() => {
    controls.start('animate');
  }, [controls]);

  return (
    <>
      <Container>
        <div className="mx-auto mb-10 sm:mb-[60px] md:mb-[80px] flex items-center gap-5 text-center">
          <span className="bg-theme h-[2px] flex-1"></span>
          <h4 className="font-exo text-title text-sm sm:text-base font-bold uppercase leading-snug">
            Our Trusted Clients
          </h4>
          <span className="bg-theme h-[2px] flex-1"></span>
        </div>
      </Container>
      <div className="overflow-hidden">
        <motion.div
          className="flex w-full"
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          variants={marqueeVariants}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="md:mx-10 mx-2 flex w-[100px] md:w-[150px] flex-shrink-0 items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default BrandSection;
