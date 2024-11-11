import { faFacebookF, faTwitter, faInstagram, faBehance, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { Container } from '@/component/common/Container';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-theme py-2 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-2 text-center lg:flex-row lg:text-left">
          <div className="hidden lg:block">
            <p className="header-text">
              <span className="font-medium">Now Hiring:</span> Are you a driven and motivated 1st Line IT Support Engineer?
            </p>
          </div>
          <div className="flex items-center gap-4 ">
            <span className="social-title">Follow Us On:</span>
            <a href="#" className="transition-all hover:text-black" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="transition-all hover:text-black" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="transition-all hover:text-black" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="transition-all hover:text-black" aria-label="Behance">
              <FontAwesomeIcon icon={faBehance} />
            </a>
            <a href="#" className="transition-all hover:text-black" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};
