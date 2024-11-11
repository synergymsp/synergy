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
      <div className="flex items-center justify-between">
        <div className="mb-10">
          <span className="font-exo mb-5 flex items-center text-base font-semibold uppercase text-theme">
            <FontAwesomeIcon icon={faCopy} className="mr-2" /> Our Best Review’s
          </span>
          <h2 className="font-exo text-[50px] font-bold uppercase leading-snug text-title">
            Customer’s Feedback
          </h2>
        </div>

        <div className="mb-6 flex justify-center gap-4">
          <Button className="bg-smoke text-theme" ref={prevRef}>
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2 h-4 w-4" />
            PREV
          </Button>

          <Button className="bg-smoke text-theme" ref={nextRef}>
            NEXT
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <Swiper
        spaceBetween={30}
        breakpoints={{
          320: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
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
            <div className="relative h-[100%] rounded-md bg-[#F8F8F9] px-6 pb-9 shadow-card-shadow transition-all duration-300 ease-out hover:bg-white hover:shadow-card-shadow2">
              <div className="w-fit -translate-y-[25px] rounded-md bg-white p-[10px]">
                <div className="flex h-[60px] w-[60px] items-center justify-center rounded-md bg-theme">
                  <FontAwesomeIcon
                    icon={faQuoteRight}
                    className="h-8 w-8 text-white"
                  />
                </div>
              </div>
              <p className="mb-5 text-base text-body">{item.feedback}</p>
              <h3 className="font-exo text-base font-bold capitalize text-title">
                {item.name}
              </h3>
              <p className="text-sm text-theme">{item.role}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default ReviewsSection;
