import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';

const services = [
  {
    title: 'Oracle Development and Support',
    description:
      "Unlock the Full Potential of Oracle with Our Expertise At Synergy Msp, we specialize in providing overarching Oracle Development and Support services designed to help businesses, where we will use the full features of oracle database, the power of Oracle's industry-leading solutions. Our experienced team works across leading database platforms—including Oracle, SQL Server, MySQL, and PostgreSQL—and leverages expertise in ERP systems to deliver solutions to your unique needs",
    icon: '/icon/fe-1-1.png',
  },
  {
    title: 'I.T. Infrastructure Design and Engineering',
    description:
      'We specialize in crafting robust and scalable I.T. infrastructures that meet the evolving demands of modern businesses. Our team of experts in system engineering, networking, cybersecurity, and applications work together to design, implement, and optimize I.T.systems tailored to your unique needs',
    icon: '/icon/fe-1-2.png',
  },
  {
    title: 'On-Premises and Cloud base Solutions',
    description:
      'At Synergy MSP, we deliver tailored I.T. solutions for both On-Premises and cloud based infrastructures, ensuring your systems are reliable, secure, and aligned with your business objectives',
    icon: '/icon/fe-1-3.png',
  },
  {
    title: 'Help Desk service',
    description:
      'Our Help Desk Service team is composed of highly skilled and organized IT professionals supporting businesses with a wide range of customer requirements. We are proud to serve clients both in the USA and around the globe, providing timely, efficient solutions tailored according to the unique requirements of each organization. Our experts excel in addressing and resolving technical challenges, minimizing downtime, and enhancing productivity so clients can focus on what matters most: growing their business',
    icon: '/icon/fe-1-3.png',
  },
  {
    title: 'Cyber Security',
    description:
      'At Synergy MSP, we provide advanced, cloud-based Voice over IP (VoIP) solutions designed to deliver stability, crystal-clear audio quality, and cost-effectiveness. Our solutions are tailored to ensure seamless communication, both internally and externally, while accommodating your company’s specific needs and growth plans.',
    icon: '/icon/fe-1-3.png',
  },
  {
    title: 'Voice over IP',
    description:
      'In today’s digital landscape, Synergy Msp offers cutting-edge cybersecurity solutions designed to safeguard your business against evolving threats. We provide end-to-end protection, ensuring your systems, data, and operations stay secure around the clock.',
    icon: '/icon/fe-1-3.png',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <Container>
      <div className="head mx-auto mb-14 max-w-[600px] text-center">
        <span className="font-exo mb-5 text-base font-semibold uppercase text-theme">
          Our Latest Services
        </span>
        <h2 className="font-exo mb-5 text-[36px] font-bold uppercase leading-snug text-title xl:text-[44px] 2xl:text-[48px]">
          What Kind of Services We are Offering
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services?.map((service, index) => (
          <div
            key={index}
            className="duration-400 group relative h-full cursor-pointer overflow-hidden rounded-md bg-white px-10 py-12 shadow-card-shadow transition-all"
          >
            <div className="absolute inset-0 h-full w-full scale-125 bg-services-bg bg-cover bg-center opacity-0 transition-all duration-700 ease-in-out group-hover:scale-100 group-hover:opacity-100"></div>

            <div className="relative z-10">
              <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-smoke">
                <Image
                  src={service.icon}
                  alt="services Icon"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '50%', height: 'auto' }}
                />
              </div>
              <h3 className="font-exo duration-400 my-3 text-[24px] font-bold capitalize leading-snug text-title transition-all ease-in-out group-hover:text-white">
                <a className="text-inherit" href="#">
                  {service.title}
                </a>
              </h3>
              <p className="ellipsis-3-lines duration-400 mb-5 text-base text-body transition-all ease-in-out group-hover:text-white">
                {service.description}
              </p>
              <Button className="bg-smoke px-5 py-[14px] text-theme">
                READ MORE
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ServicesSection;
