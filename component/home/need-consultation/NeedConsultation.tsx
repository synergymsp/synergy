import {
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
import { Button } from '@/component/common/Button';
import { Container } from '@/component/common/Container';
const NeedConsultationSection: React.FC = () => {
  return (
    <Container>
      <div className="flex items-center justify-between">
        <div>
          <span className="font-exo mb-5 flex items-center text-base font-semibold uppercase text-white">
        We are here to answer your questions 24/7
          </span>
          <h2 className="font-exo text-[36px] font-bold uppercase leading-snug text-white xl:text-[44px] 2xl:text-[48px]">
          Need A Consultation?
          </h2>
        </div>

        <div>
          <Button className="bg-theme w-fit text-white">
            ABOUT US
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default NeedConsultationSection;
