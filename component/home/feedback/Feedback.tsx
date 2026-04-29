'use client';

import {
  faArrowLeft,
  faArrowRight,
  faCopy,
  faQuoteRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type React from 'react';
import { useMemo, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';

type Review = {
  name: string;
  role: string;
  text: string;
};

const reviews: Review[] = [
  {
    name: 'Shawn Kanak',
    role: 'President, Towel Specialties',
    text: 'Our IT support team operates as the true backbone of our business, responsive, knowledgeable, and consistently ensuring our systems run smoothly without disruption. I highly recommend their services to any company looking for a dependable partner who delivers fast solutions, clear communication, and real peace of mind.',
  },
  {
    name: 'Jawad Malik',
    role: 'CFO, Detroit Forming Inc',
    text: 'We’ve been working with Synergy MSP for about 18 months now and have had good overall experience. They’ve been more cost-effective than our previous provider and helped us complete a full overhaul of our IT infrastructure. Their team is generally responsive and handles support requests in a timely manner. Overall, they’ve been a solid partner for our business.',
  },

  //   {
  //     name: 'David Moro',
  //     role: 'Managing Director, Manhattan Group Inc.',
  //     text: `Our company Manhattan Group Inc., has been a client of Synergy MSP for five years. I simply cannot overstate what a high-value service provider they are. Every aspect of their IT and technical support is first-rate, in terms of quality, and it is delivered on-demand, with immediacy and attention to the client's need to remain up and operational, so as not to incur the costs of downtime. Their IT professionals span many time zones, so someone is always available to address a problem, regardless of when it crops up. Perhaps most impressive and gratifying to me, as a small business leader, has been the personal aspect of the service they render. In an age when everything seems impersonal, when you can crawl the walls in frustration when caught up in automated systems of customer "support", when it sometimes seems impossible to get a real, live person to address the complexities or nuances of a problem you are encountering, in these times - it is refreshing to deal with a company like Synergy MSP, that combines technical virtuosity with caring and responsive personal support, from team members who are quality people as well as superb professionals. We are customers for life.`,
  //   },

  {
    name: 'David Moro',
    role: 'Managing Director, Manhattan Group Inc.',
    text: `Our Manhattan Group Inc. has been a client of Synergy MSP for five years, and their service has consistently been outstanding. They provide high-quality IT support with quick response times, ensuring minimal downtime. Their global team is always available, and their combination of technical expertise and personalized support truly sets them apart. We value their reliability and professionalism and consider ourselves customers for life.`,
  },
  {
    name: 'Frank Kalata',
    role: 'President, East Coast Corridor, Inc ECG',
    text: `We have relied on Synergy MSP for our IT support for many years, and they have consistently delivered exactly what we need — reliable, responsive service that keeps our business running without disruption. As a relatively small user of IT services, we especially appreciate that we are never made to feel like a low priority. When issues arise, they are handled promptly and professionally. What gives us the most confidence is knowing that the right support is always there when we need it, at a fair and transparent cost. They are a trusted partner, and we would recommend them without hesitation.`,
  },
];

const FeedbackSection: React.FC = () => {
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const swiperBreakpoints = useMemo(
    () => ({
      320: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
    }),
    [],
  );

  return (
    <Container>
      <div>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start md:gap-0">
          <div className="text-center md:text-left">
            <span className="mb-2 flex items-center font-exo text-base font-semibold uppercase text-theme max-md:justify-center">
              <FontAwesomeIcon icon={faCopy} className="mr-2" /> Our Best
              Review&apos;s {new Date().getFullYear()}
            </span>
            <h2 className="font-exo text-[24px] font-bold uppercase leading-snug text-title sm2:text-[26px] sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
              Customer&apos;s Feedback
            </h2>
          </div>

          <div className="hidden gap-3 md:flex">
            <Button
              className="gap-2 bg-smoke px-5 py-[14px] text-theme"
              onClick={() => swiperInstance?.slidePrev()}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
              Prev
            </Button>
            <Button
              className="gap-2 bg-smoke px-5 py-[14px] text-theme"
              onClick={() => swiperInstance?.slideNext()}
            >
              Next
              <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div>
          <Swiper
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={swiperBreakpoints}
            grabCursor={true}
            onSwiper={setSwiperInstance}
            modules={[Autoplay]}
            className="testi-swiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.name}>
                <div className="group relative flex h-full cursor-pointer flex-col justify-between rounded-[5px] bg-surfaceMuted px-[25px] pb-[35px] pt-[1px] transition-all duration-300 hover:bg-white hover:shadow-shadow3">
                  <div>
                    <div className="-mt-[25px] mb-[20px] w-fit rounded-[5px] bg-white p-[10px]">
                      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-[5px] bg-theme text-[24px] text-white">
                        <FontAwesomeIcon
                          icon={faQuoteRight}
                          className="h-7 w-7"
                        />
                      </div>
                    </div>

                    <p className="mb-5 text-justify text-xs font-normal text-body sm:text-sm md:text-base">
                      “{review.text}”
                    </p>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center gap-1 text-sm text-[#fec624]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <FontAwesomeIcon
                          key={index}
                          icon={faStar}
                          className="h-3.5 w-3.5"
                        />
                      ))}
                    </div>

                    <h3 className="mb-0 font-exo text-lg font-semibold leading-tight text-title">
                      {review.name}
                    </h3>
                    <span className="block text-sm text-theme">
                      {review.role}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-center gap-3 md:hidden">
          <Button
            className="gap-2 bg-smoke px-5 py-[14px] text-theme"
            onClick={() => swiperInstance?.slidePrev()}
          >
            <FontAwesomeIcon icon={faArrowLeft} className="h-4 w-4" />
              Prev
          </Button>
          <Button
            className="gap-2 bg-smoke px-5 py-[14px] text-theme"
            onClick={() => swiperInstance?.slideNext()}
          >
              Next
            <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default FeedbackSection;
