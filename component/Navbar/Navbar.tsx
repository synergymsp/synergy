'use client';

import {
  faBars,
  faChevronDown,
  faChevronRight,
  faMinus,
  faPlus,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { Container } from '@/component/common/Container';

const navigationLinks = [
  { id: 1, label: 'Home', href: '/' },
  { id: 2, label: 'Why Choose Us', href: '/' },
  { id: 3, label: 'Contact Us', href: '/contact' },
];

const servicesLinks = [
  { id: 1, label: 'Oracle Development and Support', href: '/services/1' },
  { id: 2, label: 'IT Infrastructure Design and Engineering', href: '/services/2' },
  { id: 3, label: 'On-prem and Cloud Base Solutions', href: '/services/3' },
  { id: 4, label: 'Help Desk Service', href: '/services/4' },
  { id: 5, label: 'Cyber Security', href: '/services/5' },
  { id: 6, label: 'Voice Over IP', href: '/services/6' },
];

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownFade, setIsDropdownFade] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
    setIsDropdownFade(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownFade(false);
    timeoutRef.current = setTimeout(() => setIsDropdownOpen(false), 500);
  };

  const handleDropdownLinkClick = () => {
    setIsDropdownOpen(false); // Close the dropdown menu
    setIsDropdownFade(false); // Ensure the fade animation is reset
  };

  const handleMobileMenuLinkClick = () => {
    setMobileMenuOpen(false); // Close the mobile menu
    setServicesMenuOpen(false); // Close the services menu in mobile
  };

  return (
    <header className="bg-white">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Left Side - Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className="hover:text-theme flex items-center py-4 text-base font-medium"
              >
                {link.label}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group relative inline-block text-left"
            >
              <button className="hover:text-theme flex items-center py-[16.5px] text-base font-medium">
                Services
                <FontAwesomeIcon icon={faChevronDown} className="ml-1 h-3 w-3" />
              </button>
              {isDropdownOpen && (
                <div
                  className={`dropdown-items shadow-dropdown-shadow absolute z-50 mt-2 w-max translate-y-12 transform border-b-[3px] border-[#0E5AF2] bg-white px-5 py-[18px] transition-all duration-200 group-hover:block ${
                    isDropdownFade ? 'transform-up' : 'transform-down'
                  }`}
                >
                  {servicesLinks.map((service) => (
                    <Link
                      key={service.id}
                      href={service.href}
                      onClick={handleDropdownLinkClick}
                      className="hover:text-theme flex items-center gap-2 px-[9px] py-[3px] text-base font-medium leading-[30px] transition-all duration-200 ease-in-out"
                    >
                      <span className="item-style">
                        <span className="dot"></span>
                      </span>
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-theme my-[10px] flex h-[48px] w-[48px] items-center justify-center rounded-[5px] bg-[#f2f6ff] lg:hidden"
          >
            <FontAwesomeIcon icon={faBars} className="h-6 w-6" aria-hidden="true" />
          </button>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
        <DialogPanel
          className={`${mobileMenuOpen ? 'mobileMenuOpen' : ''} fixed inset-y-0 left-0 z-50 w-full max-w-[378px] overflow-y-auto bg-white`}
        >
          <div className="relative bg-[#e8f8f9] px-6 py-10">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-theme shadow-shadow1 absolute right-3 top-3 h-10 w-10 rounded-full bg-[#eff1f5]"
            >
              <FontAwesomeIcon icon={faTimes} className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex justify-center">
              <Link href={'/'}>
                <Image src="/logo.svg" alt="logo" width={220} height={0} />
              </Link>
            </div>
          </div>

          <div className="p-6">
            {navigationLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={handleMobileMenuLinkClick}
                className="hover:text-theme flex items-center gap-2 border-b border-[#fdedf1] py-3 text-base font-normal"
              >
                <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 font-normal" />
                {link.label}
              </Link>
            ))}

            {/* Services Collapsible Menu in Mobile */}
            <div className="hover:text-theme flex items-center justify-between gap-2 border-b border-[#fdedf1] py-3 text-base font-normal">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 font-normal" />
                <span>Services</span>
              </div>
              <button onClick={() => setServicesMenuOpen(!servicesMenuOpen)}>
                <span className="shadow-shadow1 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#eff1f5]">
                  <FontAwesomeIcon
                    icon={servicesMenuOpen ? faMinus : faPlus}
                    className="text-title text-[12px] font-normal"
                  />
                </span>
              </button>
            </div>
            {servicesMenuOpen && (
              <div>
                {servicesLinks.map((service) => (
                  <Link
                    key={service.id}
                    href={service.href}
                    onClick={handleMobileMenuLinkClick}
                    className="flex items-center gap-2 border-b border-[#fdedf1] py-3 pl-3 text-base font-normal"
                  >
                    <FontAwesomeIcon icon={faChevronRight} className="h-3 w-3 font-normal" />
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
