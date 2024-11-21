import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Container } from '@/component/common/Container';

interface Feature {
  title: string;
  text: string;
}

interface Content {
  sectionTitle: string;
  text?: string;
  features?: Feature[];
}

interface Service {
  id: number;
  title: string;
  description: string;
  content: Content[];
}

async function getServices(): Promise<Service[]> {
  const response = await fetch('/services.json'); // Fetch from public folder

  if (!response.ok) {
    throw new Error(`Failed to fetch services data. Status: ${response.status}`);
  }

  return response.json();
}

// Fetch a single service by its ID
async function getServiceById(id: string): Promise<Service | undefined> {
  const services = await getServices();

  return services.find((service) => service.id === parseInt(id));
}

// Dynamic page component for service details
export default async function ServiceDetails({
  params,
}: {
  params: { id: string };
}) {
  const service = await getServiceById(params.id);

  if (!service) {
    return (
      <div className="container mx-auto py-10">
        <h1 className="font-exo sm2:text-[26px] text-title text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">Service Not Found</h1>
      </div>
    );
  }

  return (
    <div className="">
      <div className="bg-services-details-img relative bg-cover bg-center pb-[135px] pt-[140px]">
        <Container className="flex items-center justify-between">
          <h1 className="font-exo sm2:text-[26px] text-[24px] font-bold uppercase leading-snug text-white sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
            Service Details
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
                    className="ml-1 text-sm font-medium text-white transition-all duration-300 hover:text-white/70"
                  >
                    Services details
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      <Container className="py-[120px]">
        <div className="mb-2">
          <h2 className="font-exo text-title sm2:text-[26px] text-[24px] font-bold uppercase leading-snug sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
            {service?.title}
          </h2>
          <p className="text-theme mt-2 text-lg">{service?.description}</p>
        </div>

        {service?.content.map((section, index) => (
          <div key={index} className="">
            <div className="">
              <h2 className="text-2xl font-semibold">
                {section?.sectionTitle}
              </h2>
              {section?.text && (
                <p className="text-body mb-10 text-base">{section?.text}</p>
              )}
            </div>
            {section?.features && (
              <>
                <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                  {section?.features?.map((feature, idx) => (
                    <div
                      className="hover:shadow-shadow4 relative h-[100%] rounded-md bg-[#F8F8F9] px-6 pb-6 transition-all duration-300 ease-out hover:bg-white"
                      key={idx}
                    >
                      <div className="w-fit -translate-y-[25px] rounded-md bg-white p-[10px]">
                        <div className="bg-theme font-exo flex h-[40px] w-[40px] items-center justify-center rounded-md font-bold text-white">
                          0{idx + 1}
                        </div>
                      </div>
                      <h3 className="font-exo text-title mb-2 text-base font-bold capitalize">
                        {feature?.title}:
                      </h3>
                      <p className="text-body text-xs md:text-sm">
                        {feature?.text}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </Container>
    </div>
  );
}
