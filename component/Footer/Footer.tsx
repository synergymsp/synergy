import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faBehance,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faClock,
  faPhoneVolume,
  faCopyright,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { Container } from '../common/Container';

interface InfoBlockProps {
  icon: React.ComponentProps<typeof FontAwesomeIcon>['icon'];
  title: string;
  content: React.ReactNode;
}

interface FooterLinksProps {
  title: string;
  links: string[];
}

interface SocialIconsProps {
  icons: React.ComponentProps<typeof FontAwesomeIcon>['icon'][];
}

const InfoBlock: React.FC<InfoBlockProps> = ({ icon, title, content }) => (
  <div className="mb-6 flex w-1/3 items-center justify-center py-[60px] md:mb-0">
    <div className="flex h-[85px] w-[85px] items-center justify-center rounded-md bg-[#152B54]">
      <FontAwesomeIcon icon={icon} className="h-7 w-7 text-white" />
    </div>
    <div className="ml-5 max-w-[210px]">
      <h3 className="font-exo mb-1 text-base font-semibold uppercase text-white">{title}</h3>
      {content}
    </div>
  </div>
);

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
  <div className="w-fit">
    <h3 className="font-exo mb-5 text-[24px] font-bold text-white">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link href="#" className="hover:text-theme mb-3 inline-block text-base text-[#8A99B4]">
            {link}
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
        href="#"
        className="hover:bg-theme flex h-[45px] w-[45px] items-center justify-center rounded-md bg-[#15284C] transition-all duration-200"
      >
        <FontAwesomeIcon icon={icon} className="text-white" />
      </Link>
    ))}
  </div>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-sec bg-[#07193d] bg-cover bg-center bg-no-repeat">
      <div className="border-b border-[#152B54]">
        <Container className="flex flex-col md:flex-row md:justify-between">
          <InfoBlock
            icon={faMapMarkerAlt}
            title="Office Address"
            content={
              <Link
                href="https://maps.app.goo.gl/5FuGVzeQPH66os1u6"
                className="mb-[2px] block text-base text-[#8A99B4] transition-all hover:text-white"
              >
              1317 Morris Ave Suite 2, Union, NJ 07083, USA
              </Link>
            }
          />
          <InfoBlock
            icon={faClock}
            title="Working Hours"
            content={
              <>
                <p className="mb-[2px] text-base text-[#8A99B4]">Weekdays 9 AM – 5 PM (EST)</p>
                <p className="text-base text-[#8A99B4]">Weekend Closed</p>
              </>
            }
          />
          <InfoBlock
            icon={faPhoneVolume}
            title="Contact Us"
            content={
              <>
                <Link
                  href="mailto:info@synergymsp.net"
                  className="mb-[2px] block text-base text-[#8A99B4] transition-all hover:text-white"
                >
                  info@synergymsp.net
                </Link>
                <Link
                  href="tel:+17323343590"
                  className="block text-base text-[#8A99B4] transition-all hover:text-white"
                >
                  +1 732 334 3590
                </Link>
              </>
            }
          />
        </Container>
      </div>

      <div className="py-12">
        <Container className="flex flex-col justify-between lg:flex-row">
          <div className="w-fit">
            <h3 className="font-exo mb-5 text-[24px] font-bold text-white">About Us</h3>
            <p className="mb-4 max-w-[400px] text-base text-[#8A99B4]">
              The advisory board includes both Synergy&apos;s internal employees and external influencers, each with
              more than a decade of experience in system and network administration, cyber security, and IT
              architectural solutions. The company is well funded without outside investors, which gives us the freedom
              to focus solely on the needs of our customers.
            </p>
            <SocialIcons
              icons={[faFacebookF, faTwitter, faInstagram, faBehance, faYoutube]}
            />
          </div>

          <FooterLinks title="Links" links={['About Us', 'Our Mission', 'Meet The Teams', 'Our Projects', 'Contact Us']} />
          <FooterLinks title="Explore" links={['What we Offer', 'Our Story', 'Latest Posts', 'Help Center']} />

          <div className="w-fit">
            <h3 className="font-exo mb-5 text-[24px] font-bold text-white">Office Maps</h3>
            <div className="h-[180px]">
              <iframe
                title="office location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2907.193690854589!2d-74.2428154!3d40.687797599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b1d06bfeaaab%3A0x674b24038d25aec7!2sSynergy%20MSP!5e1!3m2!1sen!2s!4v1731768734544!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
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
