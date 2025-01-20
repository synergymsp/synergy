import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';
const NeedConsultationSection: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
        <div className="mb-2 text-center md:mb-6 lg:mb-0 lg:text-start">
          <span className="font-exo mb-5 text-sm font-semibold uppercase text-white sm:text-base">
            We are here to answer your questions 24/7
          </span>
          <h2 className="font-exo sm2:text-[26px] text-[24px] font-bold uppercase leading-snug text-white sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
            Need A Consultation?
          </h2>
        </div>

        <div>
          <Button className="bg-theme px-[20px] py-[14px] text-white md:px-7 md:py-5">
            Get a Quote
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NeedConsultationSection;
