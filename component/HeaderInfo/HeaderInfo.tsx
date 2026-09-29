'use client';

import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Container } from '@/component/common/Container';
import Navbar from '@/component/Navbar/Navbar';

import { Button } from '../common/Button';

export const HeaderInfo: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <Container>
        <div className="flex items-center justify-between border-b border-surfaceLight py-4 sm:py-10">
          <div className="flex-shrink-0">
            <Link href={'/'}>
              <Image
                src="/logo.svg"
                alt="Synergy MSP"
                width={200}
                height={0}
                className="h-auto w-[110px] sm2:w-[130px] sm:w-[150px] md:w-[200px]"
              />
            </Link>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <h3 className="mr-4 hidden text-xl font-extrabold text-title lg:mr-8 lg:block">
              Click Here for Immediate Assistance
            </h3>
            <Link
              href="/contact"
              className="text-sm font-extrabold text-title hover:text-theme sm:text-xl"
            >
              <Button className="bg-theme px-[10px] py-[10px] text-white sm:px-[30px] sm:py-[15px] md:px-[20px]">
                <span className="hidden sm2:inline">Help & Support</span>
                <span className="inline sm2:hidden">Support</span>
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 size-3 sm2:size-4" />
              </Button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-full w-[50px] flex-shrink-0 items-center justify-center rounded-[5px] bg-surfaceExtraLight py-[10px] text-theme sm:py-[15px] lg:hidden"
            >
              <FontAwesomeIcon
                icon={faBars}
                className="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </Container>

      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </div>
  );
};
