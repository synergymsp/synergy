'use client';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';

const StatsSection = () => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const cards = [
    {
      title: 'Development Services',
      description:
        'Completely implement via highly efficient process improvements. Engage high value before progressive data.',
      icon: '/icon/fe-1-1.png',
    },
    {
      title: 'Marketing Services',
      description:
        'Completely implement via highly efficient process improvements. Engage high value before progressive data.',
      icon: '/icon/fe-1-2.png',
    },
    {
      title: 'Consulting Services',
      description:
        'Completely implement via highly efficient process improvements. Engage high value before progressive data.',
      icon: '/icon/fe-1-3.png',
    },
  ];

  return (
    <Container className="-translate-y-[75px]">
      <Swiper
        spaceBetween={24}
        slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
        grabCursor={true}
        loop={true}
        className="vs-carousel"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index} className="w-[100%] md:w-auto">
            <div className="relative  h-[100%] rounded-md bg-white px-10 py-12 shadow-card-shadow after:absolute after:bottom-0 after:left-10 after:h-[3px] after:w-[calc(100%-80px)] after:rounded-t after:bg-theme after:content-['']">
              <div className="feature-icon">
                <Image src={card.icon} alt="Feature Icon" width={0} height={0} sizes='100wv' />
              </div>
              <h3 className="font-exo my-3 text-[24px] font-bold capitalize text-title">
                <a className="text-inherit" href="service-details.html">
                  {card.title}
                </a>
              </h3>
              <p className="mb-5 text-base text-body">{card.description}</p>
              <Button className="bg-smoke px-5 py-[14px] text-theme">
                READ MORE
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default StatsSection;
