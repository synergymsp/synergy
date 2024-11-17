import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

import { Container } from '@/component/common/Container';
import ProgressBar from '@/component/common/ProgressBar';

const skillsData = [
  { label: 'Business Security', percentage: 65 },
  { label: 'Career Development', percentage: 88 },
  { label: 'Business Innovation', percentage: 90 },
];

const SkillsSection: React.FC = () => {
  return (
    <Container>
      <div className="flex flex-col items-center lg:flex-row lg:space-x-10 xl:space-x-16">
        <div className="order-2 flex flex-col justify-center lg:order-1 lg:w-7/12 xl:w-1/2">
          <span className="font-exo text-theme mb-5 flex items-center text-base font-semibold uppercase">
            <FontAwesomeIcon icon={faCopy} className="mr-2" /> The Great Company Skill
          </span>
          <h2 className="font-exo text-title sm2:text-[26px] mb-5 text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
            Connecting People And Build Technology
          </h2>
          <p className="text-body mb-6 text-sm md:text-base">
            Energistically evisculate an expanded array of meta-services after
            cross-media strategic theme areas. Interactively simplify
            interactive customer service before fully tested relationship
            parallel task high standards...
          </p>

          {skillsData.map((skill) => (
            <ProgressBar key={skill.label} label={skill.label} percentage={skill.percentage} />
          ))}
        </div>

        <div className="relative order-1 mb-10 w-[100%] flex-1 sm:w-[70%] lg:order-2 lg:mb-0 lg:w-[unset]">
          <div className="relative w-[100%] overflow-hidden rounded-md">
            <Image
              src="/images/skills/skills-1.webp"
              alt="skills image"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;
