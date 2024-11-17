'use client';

import {
  faBars,
  faTimes,
  faChevronDown,
  faChevronRight,
  faPlus,
  faMinus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog, DialogPanel } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef } from 'react';

import { Container } from '@/component/common/Container';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesMenuOpen, setServicesMenuOpen] = useState(false);

  const handleLinkClick = () => setMobileMenuOpen(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownFade, setIsDropdownFade] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsDropdownOpen(true);
    setIsDropdownFade(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownFade(false);

    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 500);
  };

  return (
    <header className='bg-white'>
      <Container>
        <nav className="flex items-center justify-between">
          {/* Left Side - Desktop Menu */}
          <div className="hidden lg:flex lg:space-x-8">
            <Link
              href="/"
              className="hover:text-theme flex items-center py-4 text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="hover:text-theme py-4 text-base font-medium"
            >
              Why Choose Us
            </Link>

            {/* Services Dropdown */}
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="group relative inline-block text-left"
            >
              <button className="hover:text-theme flex items-center py-[16.5px] text-base font-medium">
                Services
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-1 h-3 w-3"
                />
              </button>
              {isDropdownOpen && (
                <div
                  className={`dropdown-items shadow-dropdown-shadow absolute z-50 mt-2 w-max translate-y-12 transform border-b-[3px] border-[#0E5AF2] bg-white px-5 py-[18px] transition-all duration-200 group-hover:block ${
                    isDropdownFade ? 'transform-up' : 'transform-down'
                  }`}
                >
                  <Link
                    href="/tech-support"
                    className="hover:text-theme flex items-center gap-2 px-[9px] py-[3px] text-base font-medium leading-[30px] transition-all duration-200 ease-in-out"
                  >
                    <span className="item-style">
                      <span className="dot"></span>
                    </span>
                    Tech Support & Network Security
                  </Link>

                  <Link
                    href="/secure-hosting"
                    className="hover:text-theme flex items-center gap-2 px-[9px] py-[3px] text-base font-medium leading-[30px] transition-all duration-200 ease-in-out"
                  >
                    <span className="item-style">
                      <span className="dot"></span>
                    </span>
                    Secure Hosting
                  </Link>

                  <Link
                    href="/virtualization"
                    className="hover:text-theme flex items-center gap-2 px-[9px] py-[3px] text-base font-medium leading-[30px] transition-all duration-200 ease-in-out"
                  >
                    <span className="item-style">
                      <span className="dot"></span>
                    </span>
                    Virtualization
                  </Link>

                  <Link
                    href="/voip"
                    className="hover:text-theme flex items-center gap-2 px-[9px] py-[3px] text-base font-medium leading-[30px] transition-all duration-200 ease-in-out"
                  >
                    <span className="item-style">
                      <span className="dot"></span>
                    </span>
                    Voice Over IP
                  </Link>

                  <Link
                    href="/data-protection"
                    className="hover:text-theme flex items-center gap-2 px-[9px] py-[3px] text-base font-medium leading-[30px] transition-all duration-200 ease-in-out"
                  >
                    <span className="item-style">
                      <span className="dot"></span>
                    </span>
                    Data Protection Backup
                  </Link>

                  <Link
                    href="/oracle-db-support"
                    className="hover:text-theme flex items-center gap-2 px-[9px] py-[3px] text-base font-medium leading-[30px] transition-all duration-200 ease-in-out"
                  >
                    <span className="item-style">
                      <span className="dot"></span>
                    </span>
                    Oracle Database Development & Support
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="hover:text-theme py-4 text-base font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="text-theme my-[10px] flex h-[48px] w-[48px] items-center justify-center rounded-[5px] bg-[#f2f6ff] lg:hidden"
          >
            <FontAwesomeIcon
              icon={faBars}
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>

          <div className="flex w-[340px] items-center max-[1199px]:w-[200px]">
            <input
              className="h-[35px] w-full flex-1 rounded-md border-0 px-5 text-base focus:bg-[#f3f4f7] focus:outline-none"
              type="text"
              placeholder="Search here..."
            />
            <button className="bg-theme h-[35px] w-[35px] rounded-[4px]">
              <FontAwesomeIcon icon={faSearch} className="h-4 w-4 text-white" />
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu Overlay */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" />
        <DialogPanel
          className={`${mobileMenuOpen ? 'mobileMenuOpen' : ''} fixed inset-y-0 left-0 z-50 w-full max-w-[378px] overflow-y-auto bg-white`}
        >
          <div className="relative bg-[#e8f8f9] px-6 py-10">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-theme shadow-shadow1 absolute right-3 top-3 h-10 w-10 rounded-full bg-[#eff1f5]"
            >
              <FontAwesomeIcon
                icon={faTimes}
                className="h-6 w-6"
                aria-hidden="true"
              />
            </button>
            <div className="flex justify-center">
              <Link href={'/'}>
                <Image src="/logo.svg" alt="logo" width={220} height={0} />
              </Link>
            </div>
          </div>

          <div className="p-6">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="hover:text-theme flex items-center gap-2 border-b border-[#fdedf1] py-3 text-base font-normal"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="h-3 w-3 font-normal"
                aria-hidden="true"
              />
              Home
            </Link>
            <Link
              href="/"
              onClick={handleLinkClick}
              className="hover:text-theme flex items-center gap-2 border-b border-[#fdedf1] py-3 text-base font-normal"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="h-3 w-3 font-normal"
                aria-hidden="true"
              />
              Why Choose Us
            </Link>

            {/* Services Collapsible Menu in Mobile */}
            <div className="hover:text-theme flex items-center justify-between gap-2 border-b border-[#fdedf1] py-3 text-base font-normal">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="h-3 w-3 font-normal"
                  aria-hidden="true"
                />
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
              <div className="">
                <Link
                  href="/tech-support"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 border-b border-[#fdedf1] py-3 pl-3 text-base font-normal"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-3 font-normal"
                    aria-hidden="true"
                  />
                  Tech Support & Network Security
                </Link>
                <Link
                  href="/secure-hosting"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 border-b border-[#fdedf1] py-3 pl-3 text-base font-normal"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-3 font-normal"
                    aria-hidden="true"
                  />
                  Secure Hosting
                </Link>
                <Link
                  href="/virtualization"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 border-b border-[#fdedf1] py-3 pl-3 text-base font-normal"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-3 font-normal"
                    aria-hidden="true"
                  />
                  Virtualization
                </Link>
                <Link
                  href="/voip"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 border-b border-[#fdedf1] py-3 pl-3 text-base font-normal"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-3 font-normal"
                    aria-hidden="true"
                  />
                  Voice Over IP
                </Link>
                <Link
                  href="/data-protection"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 border-b border-[#fdedf1] py-3 pl-3 text-base font-normal"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-3 font-normal"
                    aria-hidden="true"
                  />
                  Data Protection Backup
                </Link>
                <Link
                  href="/oracle-db-support"
                  onClick={handleLinkClick}
                  className="flex items-center gap-2 border-b border-[#fdedf1] py-3 pl-3 text-base font-normal"
                >
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="h-3 w-3 font-normal"
                    aria-hidden="true"
                  />
                  Oracle Database Development & Support
                </Link>
              </div>
            )}

            <Link
              href="/"
              onClick={handleLinkClick}
              className="hover:text-theme flex items-center gap-2 py-3 text-base font-normal"
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className="h-3 w-3 font-normal"
                aria-hidden="true"
              />
              Contact Us
            </Link>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
