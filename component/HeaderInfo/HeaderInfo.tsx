import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../common/Button';

import { Container } from '@/component/common/Container';

export const HeaderInfo: React.FC = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex items-center justify-between border-b border-[#e7ebf3] py-10">
          <div className="flex-shrink-0">
            <Link href={'/'}>
              <Image src="/logo.svg" alt="logo" width={200} height={0} />
            </Link>
          </div>

          <div className="flex items-center">
            <h3 className="text-title mr-4 hidden text-xl font-extrabold lg:mr-8 lg:block">
              Click Here for Immediate Assistance
            </h3>
            <Link
              href="/contact"
              className="text-title hover:text-theme text-sm font-extrabold sm:text-xl"
            >
              <Button className="bg-theme px-[10px] py-[14px] text-white sm:px-[30px] sm:py-[15px] md:px-[20px]">
                Help & Support
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
