'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  faQuoteRight,
  faCopy,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';

const customersReviews = [
  {
    feedback:
      '“Engineer resource maximizing whereas human high quality scenarios via client incentivize next generatio”',
    name: 'David Smith',
    role: 'SEO Customer',
  },
  {
    feedback:
      '“Engineer resource maximizing whereas human high quality scenarios via client incentivize next generatio”',
    name: 'David Smith',
    role: 'SEO Customer',
  },
  {
    feedback:
      '“Engineer resource maximizing whereas human high quality scenarios via client incentivize next generatio”',
    name: 'David Smith',
    role: 'SEO Customer',
  },
  {
    feedback:
      '“Engineer resource maximizing whereas human high quality scenarios via client incentivize next generatio”',
    name: 'David Smith',
    role: 'SEO Customer',
  },
];

const ReviewsSection: React.FC = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <Container>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="mb-10">
          <span className="font-exo text-theme mb-2 flex items-center justify-center text-base font-semibold uppercase md:mb-5 md:justify-start">
            <FontAwesomeIcon icon={faCopy} className="mr-2" /> Our Best Review’s
          </span>
          <h2 className="font-exo text-title sm2:text-[26px] text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
            Customer’s Feedback
          </h2>
        </div>

        <div className="mb-6 ml-2 hidden justify-center gap-4 md:flex">
          <Button className="bg-smoke text-theme px-[20px] py-[14px] lg:px-7 lg:py-5" ref={prevRef}>
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
            PREV
          </Button>

          <Button className="bg-smoke text-theme px-[20px] py-[14px] lg:px-7 lg:py-5" ref={nextRef}>
            NEXT
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
        grabCursor={true}
        loop={true}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          // Use `typeof Navigation` to type `swiper.params.navigation`
          const navigationParams = swiper.params
            .navigation as typeof Navigation & {
            prevEl: HTMLElement;
            nextEl: HTMLElement;
          };

          navigationParams.prevEl = prevRef.current!;
          navigationParams.nextEl = nextRef.current!;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
        className="team-carousel !py-[30px]"
      >
        {customersReviews.map((item, index) => (
          <SwiperSlide key={index} className="w-[100%] md:w-auto">
            <div className="hover:shadow-shadow4 relative h-[100%] rounded-md bg-[#F8F8F9] px-6 pb-9 transition-all duration-300 ease-out hover:bg-white">
              <div className="w-fit -translate-y-[25px] rounded-md bg-white p-[10px]">
                <div className="bg-theme flex h-[60px] w-[60px] items-center justify-center rounded-md">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="h-8 w-8 text-white"
                  />
                </div>
              </div>
              <p className="text-body mb-5 text-sm md:text-base">{item.feedback}</p>
              <h3 className="font-exo text-title text-base font-bold capitalize">
                {item.name}
              </h3>
              <p className="text-theme text-sm">{item.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ReviewsSection;
