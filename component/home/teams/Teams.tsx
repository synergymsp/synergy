'use client';

import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type React from 'react';
import { useState, useEffect } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { Button } from '@/component/common/Button';

// Mock Container component
const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="container mx-auto px-4">{children}</div>
);

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Wahib Butt',
    role: 'Team Lead Development',
    image: '/images/teams/Wahib-Butt.webp',
  },
  {
    name: 'Sameer Danish',
    role: 'Senior .Net Developer',
    image: '/images/teams/sameer.webp',
  },
  {
    name: 'Jawad',
    role: 'Senior System Administrator',
    image: '/images/teams/jawad.webp',
  },
  {
    name: 'Hamza Butt',
    role: 'Senior Database Developer',
    image: '/images/teams/hamza.webp',
  },
  {
    name: 'Yousaf Ali',
    role: 'Sr. Network Administrator',
    image: '/images/teams/Yousaf-Ali.webp',
  },
 
  {
    name: 'Abdullah Butt',
    role: 'Senior Database Developer',
    image: '/images/teams/Abdullah-Butt.webp',
  },
  {
    name: 'Ali Raza',
    role: 'Senior Oracle Developer',
    image: '/images/teams/ali-raza.webp',
  },
];

const socialIcons = [
  { icon: faEnvelope, href: '#' },
  { icon: faTwitter, href: '#' },
  { icon: faLinkedin, href: '#' },
];

const iconVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

const TeamsSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Container>
      <div className="mx-auto mb-6 max-w-[600px] text-center md:mb-10">
        <span className="mb-2 inline-block text-base font-semibold uppercase text-blue-600 md:mb-5">
          Great Team Members
        </span>
        <h2 className="text-[24px] font-bold uppercase leading-snug text-gray-900 sm:text-[26px] md:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px]">
          We Have Expert Team
        </h2>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute -left-8 -right-8 top-[50%] z-20 hidden -translate-y-1/2 transform justify-between transition-opacity duration-500 md:flex ${
            isHovered ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <Button
            className="size-16 rounded-full bg-gray-100 text-blue-600 hover:bg-gray-200 hover:text-blue-600"
            onClick={() => swiperInstance?.slidePrev()}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
          </Button>
          <Button
            className="size-16 rounded-full bg-gray-100 text-blue-600 hover:bg-gray-200 hover:text-blue-600"
            onClick={() => swiperInstance?.slideNext()}
          >
            <FontAwesomeIcon icon={faArrowRight} className="h-6 w-6" />
          </Button>
        </div>

        <Swiper
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          grabCursor={true}
          onSwiper={setSwiperInstance}
          modules={[Autoplay]}
          className="team-carousel"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} className="relative">
              <HoverAnimationCard member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

const HoverAnimationCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div
      className="group relative mx-auto max-w-[340px] overflow-hidden bg-gray-100 shadow-lg transition-all duration-300 hover:bg-gray-50 md:max-w-full"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="h-[350px] w-full">
          <Image
            src={member.image || '/placeholder.svg'}
            alt={member.name}
            width={300}
            height={350}
            className="h-full w-full transform object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* Mobile: Always visible social icons */}
        <div className="absolute bottom-0 left-[30px] right-[30px] flex h-fit items-center justify-center gap-3 bg-blue-600 px-8 py-3 md:hidden">
          {socialIcons.map((social, i) => (
            <a
              key={i}
              href={social.href}
              className="text-white transition-colors duration-200 hover:text-gray-300"
            >
              <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Desktop: Hover animated social icons */}
        <div
          className={`absolute bottom-0 left-[30px] right-[30px] hidden h-fit items-center justify-center gap-3 bg-blue-600 px-8 py-3 transition-opacity duration-300 md:flex ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {socialIcons.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              className="text-white transition-colors duration-200 hover:text-gray-300"
              initial="hidden"
              animate={isHovered ? 'visible' : 'hidden'}
              custom={i}
              variants={iconVariants}
            >
              <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="pb-5 pt-5 text-center">
        <h3 className="text-lg font-bold uppercase text-gray-900">
          {member.name}
        </h3>
        <p className="text-sm text-blue-600">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamsSection;
