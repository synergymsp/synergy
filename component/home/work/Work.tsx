'use client';

import Image from 'next/image';

import { Container } from '@/component/common/Container';

const teamItems = [
  {
    title: 'Healthcare Technology Solutions',
    description:
      'We offer expert support in integrating Oracle technologies with healthcare systems, optimizing workflows and improving patient care.',
    iconSrc: '/icon/process-1-4.png',
    arrowSrc: '/icon/process-arrow-1-1.png',
    number: '01',
  },
  {
    title: 'Innovative Solution Development',
    description:
      'Leveraging Oracle and advanced technologies, we design scalable, flexible solutions that empower businesses to stay ahead in a rapidly evolving digital world.',
    iconSrc: '/icon/process-1-1.png',
    arrowSrc: '/icon/process-arrow-1-1.png',
    number: '02',
  },
  {
    title: 'Optimized Water Distribution',
    description:
      'Using Oracle-based systems, we help optimize water delivery networks, ensuring efficiency and sustainability through real-time monitoring and smart management.',
    iconSrc: '/icon/process-1-2.png',
    arrowSrc: '/icon/process-arrow-1-1.png',
    number: '03',
  },
  {
    title: 'Client-Centric Approach',
    description:
      'At Synergy, we prioritize your success. Our Oracle development services are tailored to address your unique needs and deliver long-term value and innovation.',
    iconSrc: '/icon/process-1-3.png',
    arrowSrc: '/icon/process-arrow-1-1.png',
    number: '04',
  },
];

const WorkSection: React.FC = () => {
  return (
    <Container>
      <div className="mx-auto mb-16 max-w-[600px] text-center">
        <span className="font-exo text-theme mb-2 inline-block text-base font-semibold uppercase md:mb-5">
          Great Team Members
        </span>
        <h2 className="font-exo text-title sm2:text-[26px] text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
        YOUR TRUSTED ORACLE SQL EXPERTS
        </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {teamItems.map((item, index) => (
          <div
            key={index}
            className="relative mb-5 flex flex-col items-center px-[15px] text-center md:w-[50%] lg:mb-0 lg:w-[25%] lg:even:mt-[60px]"
          >
            {index < teamItems.length - 1 && (
              <div className="absolute -right-[53px] top-[0] hidden lg:block">
                <Image
                  src={item.arrowSrc}
                  alt="arrow"
                  width={100}
                  height={100}
                  layout="fixed"
                  style={{ transform: index % 2 === 0 ? 'rotateX(0)' : ' rotateX(190deg)' }}
                />
              </div>
            )}
            <div className="shadow-shadow6 relative mb-7 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white lg:h-[130px] lg:w-[130px]">
              <Image
                src={item.iconSrc}
                alt="icon"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '45%', height: 'auto' }}
              />

              <span className="bg-theme font-exo absolute right-0 top-0 flex h-[35px] w-[35px] items-center justify-center rounded-full border-[5px] border-white text-xs font-bold text-white">
                {item.number}
              </span>
            </div>
            <h3 className="text-title font-exo mb-2 text-lg  font-bold leading-tight md:text-[22px]">{item.title}</h3>
            <p className="text-body max-w-[340px] text-sm md:text-base">{item.description}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default WorkSection;
