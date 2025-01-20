'use client';

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faBehance,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import { Container } from '@/component/common/Container';

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Sameer Danish',
    role: 'Senior .Net Developer',
    image: '/images/teams/sameer.jpeg',
  },
  {
    name: 'Hamza Butt',
    role: 'Database Developer',
    image: '/images/teams/hamza.jpeg',
  },
  {
    name: 'Ali Raza',
    role: 'Senior Oracle Developer',
    image: '/images/teams/ali-raza.jpg',
  },
  {
    name: 'Jawad Shah',
    role: 'Sr.System Administrator',
    image: '/images/teams/jawad.jpeg',
  },
];

const socialIcons = [
  { icon: faFacebookF, href: '#' },
  { icon: faTwitter, href: '#' },
  { icon: faInstagram, href: '#' },
  { icon: faBehance, href: '#' },
  { icon: faYoutube, href: '#' },
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
  return (
    <Container>
      <div className="mx-auto mb-6 max-w-[600px] text-center md:mb-10">
        <span className="font-exo text-theme mb-2 inline-block text-base font-semibold uppercase md:mb-5">
          Great Team Members
        </span>
        <h2 className="font-exo text-title sm2:text-[26px] text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
          We Have Expert Team
        </h2>
      </div>

      <Swiper
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
        }}
        grabCursor={true}
        loop={true}
        className="team-carousel"
      >
        {teamMembers.map((member, index) => (
          <SwiperSlide key={index} className="relative">
            <HoverAnimationCard member={member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

const HoverAnimationCard = ({ member }: { member: TeamMember }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="shadow5 group relative overflow-hidden bg-white hover:bg-[#f6f7fa]"
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
