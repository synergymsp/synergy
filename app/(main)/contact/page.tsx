import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/component/common/Container';
import ContactForm from '@/component/contact/ContactForm';
const officeLocations = [
  {
    image: '/images/contact/office.webp',
    title: 'United States',
    address: '1317 Morris Ave Suite 2, Union, NJ 07083, USA',
    phone: '+1 732 334 3590',
    email: 'info@synergymsp.net',
    mapLink: 'https://maps.app.goo.gl/5FuGVzeQPH66os1u6',
    embeddedLink:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3754.1403623095175!2d-74.2428154!3d40.687797599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3b1d06bfeaaab%3A0x674b24038d25aec7!2sSynergy%20MSP!5e1!3m2!1sen!2s!4v1737742888088!5m2!1sen!2s',
  },
  {
    image: '/images/contact/office.webp',
    title: 'Pakistan',
    address: '71A, Tipu Block Garden Town, Lahore, Punjab 54000, Pakistan',
    phone: '+92 42 3519 7160',
    email: 'info@synergymsp.net',
    mapLink: 'https://maps.app.goo.gl/5NGXHm81S8ou6b3H6',
    embeddedLink:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4221.280919985488!2d74.33038719999999!3d31.5013633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901cd5d72d94d%3A0xfb4c3fad21ac2862!2sSynergy%20MSP%20Pvt.%20Ltd.!5e1!3m2!1sen!2s!4v1737742980579!5m2!1sen!2s',
  },
  {
    image: '/images/contact/office.webp',
    title: 'Pakistan',
    address:
      'P8PQ+P9F, Marghazar Road, Shahi Bagh Saidu Sharif, Swat, Khyber Pakhtunkhwa',
    phone: '+92 341 8440 592',
    email: 'info@synergymsp.net',
    mapLink: 'https://maps.app.goo.gl/TqNnshtWrW8Efbrd9',
    embeddedLink:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4068.547352798629!2d72.3384097!3d34.7368114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dc23005c8c82e7%3A0xf881e4dd1e7f5eca!2sSynergy%20MSP%20Pvt.%20Ltd.%20Swat!5e1!3m2!1sen!2s!4v1737743010662!5m2!1sen!2s',
  },
];

export default function Contact() {
  return (
    <div>
      <div className="bg-services-details-img relative bg-cover bg-center pb-[70px] pt-[80px] md:pb-[90px] md:pt-[100px] lg:pb-[135px] lg:pt-[140px]">
        <Container className="flex items-center justify-between">
          <h1 className="font-exo text-[20px] font-bold uppercase leading-snug text-white lg:text-[40px] xl:text-[44px] 2xl:text-[48px]">
            Contact Us
          </h1>
          <nav aria-label="Breadcrumb" className="flex">
            <ol role="list" className="flex items-center space-x-1">
              <li>
                <div>
                  <a
                    href="#"
                    className="text-white transition-all duration-300 hover:text-white/70"
                  >
                    <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
                    <span className="sr-only">Home</span>
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="size-5 shrink-0 text-white"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                  <a
                    href={'#'}
                    className="ml-1 text-sm font-medium text-white transition-all duration-300 hover:text-white/70 sm:text-base"
                  >
                    Contact Us
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>
      <Container>
        <div className="flex flex-col space-y-10 py-[50px] md:py-[80px] lg:flex-row lg:space-x-10 lg:space-y-0 lg:py-[120px]">
          <div className="bg-smoke max-h-[100%] flex-1 p-6 md:p-10">
            <h2 className="font-exo text-title text-[22px] font-bold uppercase leading-snug sm:text-[26px]">
              Complete the contact form
            </h2>
            <p className="text-body mb-10 text-sm sm:text-base">
              For technical support please submit a ticket
            </p>
            <ContactForm />
          </div>

          <div className="bg-smoke max-h-[100%] w-[100%] p-6 md:p-10 lg:w-[50%]">
            <h2 className="font-exo text-title text-[22px] font-bold uppercase leading-snug sm:text-[26px]">
              Office Address
            </h2>
            <p className="text-body mb-10 text-sm sm:text-base">
              Get in touch with us to see how our company can help you grow your
              business online.
            </p>
            <div className="space-y-10">
              {officeLocations.map((location, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center rounded-xl bg-white p-2 sm:flex-row"
                >
                  <div className="flex h-auto w-[100%] max-w-[100%] items-center justify-center overflow-hidden rounded-md bg-[#152B54] sm:h-[140px] sm:max-w-[200px] lg:max-w-[150px] 2xl:max-w-[200px]">
                    {/* <Image
                      src={location.image}
                      alt={`${location.title} office image`}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-[100%] w-[100%] object-cover"
                    /> */}
                    <iframe
                      src={location.embeddedLink}
                      width="100%"
                      height="100%"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                  <div className="mt-4 w-full flex-1 p-2 sm:ml-4 sm:mt-0 sm:p-0">
                    <div className="mb-2">
                      <h3 className="font-exo text-title text-lg font-bold uppercase">
                        {location.title}
                      </h3>
                    </div>
                    <div className="mb-2">
                      <Link
                        href={location.mapLink}
                        className="hover:text-theme block text-sm text-[#8A99B4] transition-all duration-300"
                      >
                        {location.address}
                      </Link>
                    </div>
                    <div className="mb-1">
                      <Link
                        href={`tel:${location.phone}`}
                        className="hover:text-theme block text-base text-[#8A99B4] transition-all duration-300"
                      >
                        Tel. {location.phone}
                      </Link>
                    </div>
                    <div>
                      <Link
                        href={`mailto:${location.email}`}
                        className="hover:text-theme text-theme block text-base transition-all duration-300"
                      >
                        {location.email}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
