import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faCopyright,
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

import { Container } from "../common/Container";

interface InfoBlockProps {
  icon: React.ComponentProps<typeof FontAwesomeIcon>["icon"];
  title: string;
  content: React.ReactNode;
}

interface FooterLinksProps {
  title: string;
  links: string[];
}

interface SocialIconsProps {
  icons: React.ComponentProps<typeof FontAwesomeIcon>["icon"][];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ title, links }) => (
  <div className="mb-7 flex flex-col items-center md:items-start md:mb-0 md:w-fit w-[100%]">
    <h3 className="font-exo mb-5 text-[24px] font-bold text-white">{title}</h3>
    <ul>
      {links.map((link, index) => (
        <li key={index} className="text-center md:text-start">
          <Link
            href="#"
            className="hover:text-theme mb-3 inline-block text-base text-[#8A99B4]"
          >
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
        <Container className="grid grid-cols-1 gap-y-10 md:gap-6 md:grid-cols-3 py-[50px]">
          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div className="flex items-center justify-center rounded-md bg-[#152B54] h-[150px] w-[100%] max-w-[290px] overflow-hidden">
              <img src="https://via.placeholder.com/290" alt="" width={'100%'} height={'100%'} />
            </div>
            <div className="flex-1 mt-5">
              <div className="mb-4">
                <h3 className="font-exo text-sm font-semibold uppercase text-white">
                  Call Anytime 24/7
                </h3>
                <Link
                  href="tel:+26921562148"
                  className="block text-sm text-[#8A99B4] transition-all hover:text-theme duration-300"
                >
                  +1 732 334 3590
                </Link>
              </div>
              <div className="mb-4">
                <h3 className="font-exo text-sm font-semibold uppercase text-white">
                  Mail Us For Support
                </h3>
                <Link
                  href="tel:+26921562148"
                  className="block text-sm text-[#8A99B4] transition-all hover:text-theme duration-300"
                >
                  info@synergymsp.net
                </Link>
              </div>
              <div>
                <h3 className="font-exo text-sm font-semibold uppercase text-white">
                  Office Address
                </h3>
                <Link
                  href="https://maps.app.goo.gl/5FuGVzeQPH66os1u6"
                  className="block text-sm text-[#8A99B4] transition-all hover:text-theme duration-300"
                >
                  1317 Morris Ave Suite 2, Union, NJ 07083, USA
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div className="flex  items-center justify-center rounded-md bg-[#152B54] h-[150px] w-[100%] max-w-[290px] overflow-hidden">
              <img src="https://via.placeholder.com/290" alt="" width={'100%'} height={'100%'} />
            </div>
            <div className="flex-1 mt-5">
              <div className="mb-4">
                <h3 className="font-exo text-sm font-semibold uppercase text-white">
                  Call Anytime 24/7
                </h3>
                <Link
                  href="tel:+04235197160"
                  className="block text-sm text-[#8A99B4] transition-all hover:text-theme duration-300"
                >
                  +042 35197160
                </Link>
              </div>
              <div className="mb-4">
                <h3 className="font-exo text-sm font-semibold uppercase text-white">
                  Mail Us For Support
                </h3>
                <Link
                  href="tel:+26921562148"
                  className="block text-sm text-[#8A99B4] transition-all hover:text-theme duration-300"
                >
                  info@synergymsp.net
                </Link>
              </div>
              <div>
                <h3 className="font-exo text-sm font-semibold uppercase text-white">
                  Office Address
                </h3>
                <Link
                  href="https://maps.app.goo.gl/5NGXHm81S8ou6b3H6"
                  className="block text-sm text-[#8A99B4] transition-all hover:text-theme duration-300"
                >
                  Synergy MSP Pvt. Ltd, Pakistan
                </Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start text-center md:text-start">
            <div className="flex  items-center justify-center rounded-md bg-[#152B54] h-[150px] w-[100%] max-w-[290px] overflow-hidden">
              <img src="https://via.placeholder.com/290" alt="" width={'100%'} height={'100%'} />
            </div>
            <div className="flex-1 mt-5">
              <div className="mb-4">
                <h3 className="font-exo text-sm font-semibold uppercase text-white">
                  Call Anytime 24/7
                </h3>
                <Link
                  href="tel:+26921562148"
                  className="block text-sm text-[#8A99B4] transition-all hover:text-theme duration-300"
                >
                  +1 732 334 3590
                </Link>
              </div>
              <div className="mb-4">
                <h3 className="font-exo text-sm font-semibold uppercase text-white">
                  Mail Us For Support
                </h3>
                <Link
                  href="tel:+26921562148"
                  className="block text-sm text-[#8A99B4] transition-all hover:text-theme duration-300"
                >
                  info@synergymsp.net
                </Link>
              </div>
              <div>
                <h3 className="font-exo text-sm font-semibold uppercase text-white">
                  Office Address
                </h3>
                <Link
                  href="https://maps.app.goo.gl/5FuGVzeQPH66os1u6"
                  className="block text-sm text-[#8A99B4] transition-all hover:text-theme duration-300"
                >
                  1317 Morris Ave Suite 2, Union, NJ 07083, USA
                </Link>
              </div>
            </div>
          </div>

        </Container>
      </div>

      <div className="py-12">
        <Container className="flex flex-wrap md:justify-between lg:flex-nowrap justify-center">
          <div className="mb-7 flex flex-col items-center text-center md:w-[50%] lg:mb-0 lg:w-fit md:items-start md:text-start">
            <h3 className="font-exo mb-5 text-[24px] font-bold text-white">
              About Us
            </h3>
            <p className="mb-4 text-sm text-[#8A99B4] lg:max-w-[400px] lg:text-base">
              The advisory board includes both Synergy&apos;s internal employees
              and external influencers, each with more than a decade of
              experience in system and network administration, cyber security,
              and IT architectural solutions. The company is well funded without
              outside investors, which gives us the freedom to focus solely on
              the needs of our customers.
            </p>
            <SocialIcons
              icons={[faFacebookF, faTwitter, faInstagram, faYoutube]}
            />
          </div>

          <FooterLinks
            title="Links"
            links={[
              "About Us",
              "Our Mission",
              "Meet The Teams",
              "Our Projects",
              "Contact Us",
            ]}
          />
          <FooterLinks
            title="Explore"
            links={[
              "What we Offer",
              "Our Story",
              "Latest Posts",
              "Help Center",
            ]}
          />

        </Container>
      </div>

      <div className="bg-[#0B2048] py-7">
        <Container>
          <p className="text-center text-sm text-[#8A99B4]">
            Copyright <FontAwesomeIcon icon={faCopyright} /> 2022{" "}
            <span className="text-white">Synergy MSP</span>
          </p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
