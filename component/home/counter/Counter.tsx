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
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {counterData.map((item, index) => (
          <div key={index} className="flex w-full items-center">
            <div className="mr-6 flex h-[90px] w-[90px] flex-shrink-0 items-center justify-center rounded-md bg-theme">
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
              <span className="font-exo text-[36px] font-bold uppercase leading-none text-white xl:text-[44px] 2xl:text-[48px]">
                {item.count}
              </span>
              <p className="font-exo text-base font-semibold text-white">
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
