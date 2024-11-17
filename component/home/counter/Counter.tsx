import Image from 'next/image';

import { Container } from '@/component/common/Container';

const counterData = [
  {
    icon: '/icon/count-1-1.png',
    count: '300+',
    label: 'Successful Projects',
  },
  {
    icon: '/icon/count-1-2.png',
    count: '200+',
    label: 'Media Activities',
  },
  {
    icon: '/icon/count-1-3.png',
    count: '150+',
    label: 'Skilled Experts',
  },
  {
    icon: '/icon/count-1-4.png',
    count: '250+',
    label: 'Happy Clients',
  },
];

const CounterSection: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {counterData.map((item, index) => (
          <div key={index} className="flex w-full flex-col items-center text-center lg:flex-row lg:text-left">
            <div className="bg-theme mb-5 flex h-[70px] w-[70px] flex-shrink-0 items-center justify-center rounded-md sm:h-[90px] sm:w-[90px] lg:mb-0 lg:mr-6">
              <Image
                src={item.icon}
                alt={`${item.label} Icon`}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '50%', height: 'auto' }}
              />
            </div>
            <div>
              <span className="font-exo text-[30px] font-bold uppercase leading-none text-white sm:text-[36px] xl:text-[44px] 2xl:text-[48px]">
                {item.count}
              </span>
              <p className="font-exo text-sm font-semibold text-white md:text-base">
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default CounterSection;
