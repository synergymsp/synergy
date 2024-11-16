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

          <div className="flex flex-wrap items-stretch justify-between space-x-10">
            <div className="flex items-center py-7">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-theme mr-5 h-6 w-6"
              />
              <div>
                <span className="text-body mb-1 block text-sm">
                  Call Anytime 24/7
                </span>
                <Link
                  href="tel:+26921562148"
                  className="text-title hover:text-theme text-xl font-extrabold"
                >
                  +1 732 334 3590
                </Link>
              </div>
            </div>

            <div className="hidden items-center border-l border-[#e7ebf3] py-7 pl-10 lg:flex">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-theme mr-5 h-6 w-6"
              />
              <div>
                <span className="text-body mb-1 block text-sm">
                  Mail Us For Support
                </span>
                <Link
                  href="mailto:info@synergymsp.net"
                  className="text-title hover:text-theme text-xl font-extrabold"
                >
                  info@synergymsp.net
                </Link>
              </div>
            </div>

            <div className="hidden items-center border-l border-[#e7ebf3] py-7 pl-10 xl:flex">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-theme mr-5 h-6 w-6"
              />
              <div>
                <span className="text-body mb-1 block text-sm">
                  Office Address
                </span>
                <Link href="https://maps.app.goo.gl/5FuGVzeQPH66os1u6" className="text-title hover:text-theme inline-block max-w-[200px] text-xl font-extrabold">
                  1317 Morris Ave, Ste 2, Union, NJ 07083, USA
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
