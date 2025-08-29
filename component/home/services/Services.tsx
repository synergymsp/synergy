import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';

const services = [
  {
    id: 1,
    title: 'Oracle Development and Support',
    description:
      "Unlock the Full Potential of Oracle with Our Expertise At Synergy Msp, we specialize in providing overarching Oracle Development and Support services designed to help businesses, where we will use the full features of oracle database, the power of Oracle's industry-leading solutions. Our experienced team works across leading database platforms—including Oracle, SQL Server, MySQL, and PostgreSQL—and leverages expertise in ERP systems to deliver solutions to your unique needs",
    icon: '/icon/fe-2-3.png',
  },
  {
    id: 2,
    title: 'I.T. Infrastructure Design and Engineering',
    description:
      'We specialize in crafting robust and scalable I.T. infrastructures that meet the evolving demands of modern businesses. Our team of experts in system engineering, networking, cybersecurity, and applications work together to design, implement, and optimize I.T.systems tailored to your unique needs',
    icon: '/icon/process-1-3.png',
  },
  {
    id: 3,
    title: 'On-Premises and Cloud base Solutions',
    description:
      'At Synergy MSP, we deliver tailored I.T. solutions for both On-Premises and cloud based infrastructures, ensuring your systems are reliable, secure, and aligned with your business objectives',
    icon: '/icon/fe-2-4.png',
  },
  {
    id: 4,
    title: 'Help Desk service',
    description:
      'Our Help Desk Service team is composed of highly skilled and organized IT professionals supporting businesses with a wide range of customer requirements. We are proud to serve clients both in the USA and around the globe, providing timely, efficient solutions tailored according to the unique requirements of each organization. Our experts excel in addressing and resolving technical challenges, minimizing downtime, and enhancing productivity so clients can focus on what matters most: growing their business',
    icon: '/icon/tel-1-1.png',
  },
  {
    id: 5,
    title: 'Cyber Security',
    description:
      'At Synergy MSP, we provide advanced, cloud-based Voice over IP (VoIP) solutions designed to deliver stability, crystal-clear audio quality, and cost-effectiveness. Our solutions are tailored to ensure seamless communication, both internally and externally, while accommodating your company’s specific needs and growth plans.',
    icon: '/icon/fe-2-3.png',
  },
  {
    id: 6,
    title: 'Voice over IP',
    description:
      'In today’s digital landscape, Synergy Msp offers cutting-edge cybersecurity solutions designed to safeguard your business against evolving threats. We provide end-to-end protection, ensuring your systems, data, and operations stay secure around the clock.',
    icon: '/icon/process-2-1.png',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Container>
      <div className="head mx-auto mb-14 max-w-[600px] text-center">
        <span className="font-exo mb-2 inline-block text-base font-semibold uppercase text-theme md:mb-5">
          Our Latest Services
        </span>
        <h2 className="font-exo text-[24px] font-bold uppercase leading-snug text-title sm2:text-[26px] sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
          What Kind of Services We are Offering
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <Link key={service.id} href={`/services/${service.id}-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
            <div className="duration-400 group relative h-full cursor-pointer overflow-hidden rounded-md bg-white px-5 py-8 shadow-shadow3 transition-all sm:px-10 sm:py-12">
              <div className="absolute inset-0 h-full w-full scale-125 bg-services-bg bg-cover bg-center opacity-0 transition-all duration-700 ease-in-out group-hover:scale-100 group-hover:opacity-100"></div>

              <div className="relative z-10 flex h-[100%] flex-col items-start justify-between">
                <div>
                  <div className="mb-4 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-smoke sm:mb-6 sm:h-[70px] sm:w-[70px] xl:mb-8">
                    <Image
                      src={service.icon}
                      alt="services Icon"
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '50%', height: 'auto' }}
                    />
                  </div>
                  <h3 className="font-exo duration-400 my-2 text-lg font-bold capitalize text-title transition-all ease-in-out group-hover:text-white lg:my-3 xl:text-[24px]">
                    {service.title}
                  </h3>
                  <p className="ellipsis-3-lines duration-400 mb-5 text-justify text-sm text-body transition-all ease-in-out group-hover:text-white md:text-base">
                    {service.description}
                  </p>
                </div>
                <Button className="bg-smoke px-5 py-[14px] text-theme">
                  READ MORE
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 h-4 w-4"
                  />
                </Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default ServicesSection;
