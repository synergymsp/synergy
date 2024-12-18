'use client';

import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Container } from '../common/Container';

interface FooterLinksProps {
  title: string;
  links: { id: number; label: string; href: string }[];
}

interface SocialIconsProps {
  icons: React.ComponentProps<typeof FontAwesomeIcon>['icon'][];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
  <div className="mb-7 flex w-[100%] flex-col items-center md:mb-0 md:w-fit md:items-start">
    <h3 className="font-exo mb-5 text-[24px] font-bold text-white">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="text-center md:text-start">
          <Link
            href={link.href}
            className="hover:text-theme mb-3 inline-block text-base text-[#8A99B4]"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SocialIcons: React.FC<SocialIconsProps> = ({ icons }) => (
  <div className="flex space-x-3">
    {icons.map((icon, index) => (
      <Link
        key={index}
        href="https://www.linkedin.com/company/105226936/admin/dashboard/"
        className="hover:bg-theme flex h-[45px] w-[45px] items-center justify-center rounded-md bg-[#15284C] transition-all duration-200"
      >
        <FontAwesomeIcon icon={icon} className="text-white" />
      </Link>
    ))}
  </div>
);

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  const officeLocations = [
    {
      image: '/images/contact/office.webp',
      title: 'United States',
      address: '1317 Morris Ave Suite 2, Union, NJ 07083, USA',
      phone: '+1 732 334 3590',
      email: 'info@synergymsp.net',
      mapLink: 'https://maps.app.goo.gl/5FuGVzeQPH66os1u6',
    },
    {
      image: '/images/contact/office.webp',
      title: 'Pakistan',
      address: '71A, Tipu Block Garden Town, Lahore, Punjab 54000, Pakistan',
      phone: '+92 42 3519 7160',
      email: 'info@synergymsp.net',
      mapLink: 'https://maps.app.goo.gl/5NGXHm81S8ou6b3H6',
    },
    {
      image: '/images/contact/office.webp',
      title: 'Pakistan',
      address:
        'P8PQ+P9F, Marghazar Road, Shahi Bagh Saidu Sharif, Swat, Khyber Pakhtunkhwa',
      phone: '+92 341 8440 592',
      email: 'info@synergymsp.net',
      mapLink: 'https://maps.app.goo.gl/TqNnshtWrW8Efbrd9',
    },
  ];

  return (
    <footer className="bg-footer-sec bg-[#07193d] bg-contain bg-bottom bg-no-repeat">
      {!isContactPage && (
        <div className="border-b border-[#152B54]">
          <Container className="grid grid-cols-1 gap-y-10 py-[50px] md:grid-cols-3 md:gap-6">
            {officeLocations.map((location, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center md:items-start md:text-start"
              >
                <div className="flex h-[150px] w-[100%] max-w-[290px] items-center justify-center overflow-hidden rounded-md bg-[#152B54]">
                  <Image
                    src={location.image}
                    alt={`${location.title} office`}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="h-[100%] w-[100%] object-cover"
                  />
                </div>
                <div className="mt-5 flex-1">
                  <div className="mb-4">
                    <h3 className="font-exo text-sm font-semibold uppercase text-white">
                      Call Anytime 24/7
                    </h3>
                    <Link
                      href={`tel:${location.phone}`}
                      className="hover:text-theme block text-sm text-[#8A99B4] transition-all duration-300"
                    >
                      {location.phone}
                    </Link>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-exo text-sm font-semibold uppercase text-white">
                      Mail Us For Support
                    </h3>
                    <Link
                      href={`mailto:${location.email}`}
                      className="hover:text-theme block text-sm text-[#8A99B4] transition-all duration-300"
                    >
                      {location.email}
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-exo text-sm font-semibold uppercase text-white">
                      Office Address
                    </h3>
                    <Link
                      href={location.mapLink}
                      className="hover:text-theme block text-sm text-[#8A99B4] transition-all duration-300"
                    >
                      {location.address}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Container>
        </div>
      )}

      <div className="py-12">
        <Container className="flex flex-wrap justify-center md:justify-between lg:flex-nowrap">
          <div className="mb-7 flex flex-col items-center text-center md:w-[50%] md:items-start md:text-start lg:mb-0 lg:w-fit">
            <h3 className="font-exo mb-5 text-[24px] font-bold text-white">
              About Us
            </h3>
            <p className="mb-4 text-sm text-[#8A99B4] lg:max-w-[400px] lg:text-base">
              Synergy combines innovation and expertise to provide robust IT
              services that fuel business growth. We’re committed to
              understanding your unique challenges and delivering solutions that
              enhance operational efficiency, security, and scalability, making
              us the ideal IT partner for businesses at every stage.
            </p>
            <SocialIcons icons={[faLinkedin]} />
          </div>

          <FooterLinks
            title="Services"
            links={[
              {
                id: 1,
                label: 'Oracle Development and Support',
                href: '/services/1',
              },
              {
                id: 2,
                label: 'IT Infrastructure Design and Engineering',
                href: '/services/2',
              },
              {
                id: 3,
                label: 'On-prem and Cloud Base Solutions',
                href: '/services/3',
              },
              { id: 4, label: 'Help Desk Service', href: '/services/4' },
              { id: 5, label: 'Cyber Security', href: '/services/5' },
              { id: 6, label: 'Voice Over IP', href: '/services/6' },
            ]}
          />

          <FooterLinks
            title="Support"
            links={[
              {
                label: 'Contact Us', href: '/contact',
                id: 1
              },
              {
                label: 'Privacy Policy', href: '/privacy-policy',
                id: 2
              },
            ]}
          />
        </Container>
      </div>

      <div className="bg-[#0B2048] py-7">
        <Container>
          <p className="text-center text-sm text-[#8A99B4]">
            Copyright <FontAwesomeIcon icon={faCopyright} /> 2022{' '}
            <span className="text-white">Synergy MSP</span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
