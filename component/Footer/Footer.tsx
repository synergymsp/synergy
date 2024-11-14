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
import React from 'react';

import { Container } from '../common/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-footer-sec bg-cover bg-center bg-no-repeat">
      <div className="border-b border-[#152B54]">
        <Container className="flex flex-col md:flex-row md:justify-between">
          <div className="mb-6 flex w-1/3 items-center justify-center py-[60px] md:mb-0">
            <div className="flex h-[85px] w-[85px] items-center justify-center rounded-md bg-[#152B54]">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="h-7 w-7 text-white"
              />
            </div>
            <div className="ml-5">
              <h3 className="font-exo mb-1 text-base font-semibold uppercase text-white">
                Office Address
              </h3>
              <p className="max-w-[190px] text-base text-[#8A99B4] ">
                259 Hilton Street, MK 256 North, United States
              </p>
            </div>
          </div>
          <div className="mb-6 flex w-1/3 items-center justify-center border-x border-[#152B54] py-[60px] md:mb-0">
            <div className="flex h-[85px] w-[85px] items-center justify-center rounded-md bg-[#152B54]">
              <FontAwesomeIcon icon={faClock} className="h-7 w-7 text-white" />
            </div>
            <div className="ml-5">
              <h3 className="font-exo mb-1 text-base font-semibold uppercase text-white">
                Working Hours
              </h3>
              <p className="mb-[2px] max-w-[190px] text-base text-[#8A99B4]">
                Weekdays 8am - 10pm
              </p>
              <p className="max-w-[190px] text-base text-[#8A99B4] ">
                Weekend 10am - 12pm
              </p>
            </div>
          </div>
          <div className="flex w-1/3 items-center justify-center py-[60px]">
            <div className="flex h-[85px] w-[85px] items-center justify-center rounded-md bg-[#152B54]">
              <FontAwesomeIcon
                icon={faPhoneVolume}
                className="h-7 w-7 text-white"
              />
            </div>
            <div className="ml-5">
              <h3 className="font-exo mb-1 text-base font-semibold uppercase text-white">
                Contact Us
              </h3>
              <a
                href="mailto:info@techbiz.com"
                className="mb-[2px] block max-w-[190px] text-base text-[#8A99B4] transition-all hover:text-white"
              >
                info@techbiz.com
              </a>
              <a
                href="tel:+2597462153"
                className="block max-w-[190px] text-base text-[#8A99B4] transition-all hover:text-white"
              >
                (+259) 746 2153
              </a>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-12">
        <Container className="flex items-start justify-between">
          <div className="w-fit">
            <h3 className="font-exo mb-7 text-[24px] font-bold uppercase text-white">
              About Us
            </h3>
            <p className="mb-7 max-w-[285px] text-base text-[#8A99B4] ">
              Intrinsicly evisculate emerging cutting edge scenarios redefine
              future-proof e-markets demand line.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="hover:bg-theme flex h-[45px] w-[45px] items-center justify-center rounded-md bg-[#15284C] transition-all duration-200"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-white " />
              </a>
              <a
                href="#"
                className="hover:bg-theme flex h-[45px] w-[45px] items-center justify-center rounded-md bg-[#15284C] transition-all duration-200"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-white " />
              </a>
              <a
                href="#"
                className="hover:bg-theme flex h-[45px] w-[45px] items-center justify-center rounded-md bg-[#15284C] transition-all duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-white " />
              </a>
              <a
                href="#"
                className="hover:bg-theme flex h-[45px] w-[45px] items-center justify-center rounded-md bg-[#15284C] transition-all duration-200"
              >
                <FontAwesomeIcon icon={faBehance} className="text-white " />
              </a>
              <a
                href="#"
                className="hover:bg-theme flex h-[45px] w-[45px] items-center justify-center rounded-md bg-[#15284C] transition-all duration-200"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-white " />
              </a>
            </div>
          </div>

          <div className="w-fit">
            <h3 className="font-exo mb-5 text-[24px] font-bold uppercase text-white">
              Links
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-theme mb-2 inline-block text-base text-[#8A99B4]"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme mb-2 inline-block text-base text-[#8A99B4]"
                >
                  Our Mission
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme mb-2 inline-block text-base text-[#8A99B4]"
                >
                  Meet The Teams
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme mb-2 inline-block text-base text-[#8A99B4]"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme inline-block text-base text-[#8A99B4]"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="w-fit">
            <h3 className="font-exo mb-5 text-[24px] font-bold uppercase text-white">
              Explore
            </h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="hover:text-theme mb-2 inline-block text-base text-[#8A99B4]"
                >
                  What we Offer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme mb-2 inline-block text-base text-[#8A99B4]"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme mb-2 inline-block text-base text-[#8A99B4]"
                >
                  Latest Posts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-theme inline-block text-base text-[#8A99B4]"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div className="w-fit">
            <h3 className="font-exo mb-5 text-[24px] font-bold uppercase text-white">
              Office Maps
            </h3>
            <div className="h-[180px]">
              <iframe
                title="office location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163720.11965853968!2d8.496481908353967!3d50.121347879150306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2sbd!4v1651732317319!5m2!1sen!2sbd"
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
