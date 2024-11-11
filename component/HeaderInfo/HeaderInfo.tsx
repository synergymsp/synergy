import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/component/common/Container';

export const HeaderInfo: React.FC = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex flex-wrap items-center justify-between border-b border-[#e7ebf3]">
          <div className="flex-shrink-0">
            <Link href={'/'}>
              <Image src="/logo.svg" alt="logo" width={140} height={0} />
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-between space-x-10">
            <div className="flex items-center py-7">
              <FontAwesomeIcon
                icon={faPhone}
                className="mr-5 h-6 w-6 text-theme"
              />
              <div>
                <span className="mb-1 block text-sm text-body">
                  Call Anytime 24/7
                </span>
                <Link
                  href="tel:+26921562148"
                  className="text-xl font-extrabold text-title hover:text-theme"
                >
                  +1 732 334 3590
                </Link>
              </div>
            </div>

            <div className="hidden items-center border-l border-[#e7ebf3] py-7 pl-10 lg:flex">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="mr-5 h-6 w-6 text-theme"
              />
              <div>
                <span className="mb-1 block text-sm text-body">
                  Mail Us For Support
                </span>
                <Link
                  href="mailto:info@synergymsp.net"
                  className="text-xl font-extrabold text-title hover:text-theme"
                >
                  info@synergymsp.net
                </Link>
              </div>
            </div>

            <div className="hidden items-center border-l border-[#e7ebf3] py-7 pl-10 xl:flex">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-5 h-6 w-6 text-theme"
              />
              <div>
                <span className="mb-1 block text-sm text-body">
                  Office Address
                </span>
                <div className="text-xl font-extrabold text-title hover:text-theme">
                  259 HGS, Hotland, USA
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
