'use client';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';

const StatsSection = () => {
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
    <Container className="lg:-translate-y-[75px]">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        grabCursor={true}
        loop={true}
        className="vs-carousel"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="shadow-shadow3  after:bg-theme relative h-[100%] rounded-md bg-white px-5 py-8 after:absolute after:bottom-0 after:left-10 after:h-[3px] after:w-[calc(100%-80px)] after:rounded-t after:content-[''] md:px-10 md:py-12">
              <div className="feature-icon h-[50px] w-[50px] md:h-[70px] md:w-[70px]">
                <Image src={card.icon} alt="Feature Icon" width={0} height={0} sizes='100wv' className='h-auto w-[100%]' />
              </div>
              <h3 className="font-exo text-title my-2 text-lg font-bold capitalize lg:my-3 lg:text-[24px]">
                <a className="text-inherit" href="service-details.html">
                  {card.title}
                </a>
              </h3>
              <p className="text-body ellipsis-3-lines mb-5 text-sm md:text-base">{card.description}</p>
              <Button className="bg-smoke text-theme px-6 py-[14px]">
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
