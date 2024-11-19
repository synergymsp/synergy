import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/component/common/Container";
import { Button } from "../common/Button";

export const HeaderInfo: React.FC = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="flex items-center py-10 justify-between border-b border-[#e7ebf3]">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image src="/logo.svg" alt="logo" width={200} height={0} />
            </Link>
          </div>

          <div className="flex items-center">
            <h3 className="text-title text-xl font-extrabold mr-4 lg:mr-8 hidden lg:block">
              Click Here for Immediate Assistance
            </h3>
            <Link
              href="tel:+26921562148"
              className="text-title hover:text-theme text-sm font-extrabold sm:text-xl"
            >
              <Button className="bg-theme px-[10px] py-[14px] md:px-[20px] sm:px-[30px] sm:py-[15px] text-white">
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
