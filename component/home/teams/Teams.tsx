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
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';
import 'swiper/css';
import 'swiper/css/effect-fade';

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
    name: 'Yousaf Ali',
    role: 'Sr. Network Administrator',
    image: '/images/teams/Yousaf-Ali.webp',
  },
  {
    name: 'Hamza Butt',
    role: 'Database Developer',
    image: '/images/teams/hamza.webp',
  },
  {
    name: 'Abdullah Butt',
    role: 'Database Developer',
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
        <span className="font-exo text-theme mb-2 inline-block text-base font-semibold uppercase md:mb-5">
          Great Team Members
        </span>
        <h2 className="font-exo text-title sm2:text-[26px] text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px] xl:text-[44px] 2xl:text-[48px]">
          We Have Expert Team
        </h2>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className={`absolute !-right-8 -left-8 top-[50%] z-20 flex -translate-y-1/2 transform justify-between transition-opacity duration-500 ${
            isHovered ? 'visible opacity-100' : 'invisible opacity-0'
          }`}
        >
          <Button
            className="bg-smoke text-theme size-16 !rounded-full"
            onClick={() => swiperInstance?.slidePrev()}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
          </Button>

          <Button
            className="bg-smoke text-theme size-16 !rounded-full"
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

  return (
    <div
      className="shadow5 bg-smoke group relative mx-auto max-w-[340px] overflow-hidden transition-all duration-300 hover:bg-[#f6f7fa] md:max-w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <div className="h-[350px] w-full">
          <Image
            src={member.image}
            alt={member.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full transform object-cover object-top transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="bg-theme absolute inset-0 bottom-0 left-[30px] right-[30px] mt-auto flex h-fit items-center justify-center gap-3 px-8 py-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          {socialIcons.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              className="text-white hover:text-gray-300"
              initial="hidden"
              animate={isHovered ? 'visible' : 'hidden'}
              custom={i}
              variants={iconVariants}
            >
              <FontAwesomeIcon icon={social.icon} />
            </motion.a>
          ))}
        </div>
      </div>

      <div className="team-content pb-5 pt-5 text-center">
        <h3 className="font-exo text-title text-lg font-bold uppercase">
          {member.name}
        </h3>
        <p className="text-theme text-sm">{member.role}</p>
      </div>
    </div>
  );
};

export default TeamsSection;
