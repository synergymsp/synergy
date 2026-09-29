import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Container } from '@/component/common/Container';
import { getServicePath, serviceRoutes } from '@/data/serviceRoutes';
import { Service, services } from '@/data/ServicesData';
import { buildMetadata, JsonLd, siteConfig } from '@/lib/seo';

interface ServicePageProps {
  params: { id: string };
}

const findService = (id: string): Service | undefined =>
  services.find((service) => service.id === parseInt(id));

// Only the canonical service URLs exist; anything else is a real 404.
// (Non-canonical slugs for known services are 308-redirected in middleware.ts.)
export const dynamicParams = false;

export function generateStaticParams() {
  return serviceRoutes.map((route) => ({ id: `${route.id}-${route.slug}` }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = findService(params.id);

  if (!service) return {};

  return buildMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: getServicePath(service.id),
  });
}

export default function ServiceDetails({ params }: ServicePageProps) {
  const service = findService(params.id);

  if (!service) notFound();

  const servicePath = getServicePath(service.id);
  const serviceUrl = `${siteConfig.url}${servicePath}`;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Service',
              name: service.title,
              serviceType: service.seoTitle,
              description: service.seoDescription,
              url: serviceUrl,
              provider: { '@id': `${siteConfig.url}/#organization` },
              areaServed: 'Worldwide',
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
                { '@type': 'ListItem', position: 2, name: service.title, item: serviceUrl },
              ],
            },
          ],
        }}
      />
      <div className="">
        <div className="relative bg-services-details-img bg-cover bg-center pb-[70px] pt-[80px] md:pb-[90px] md:pt-[100px] lg:pb-[135px] lg:pt-[140px]">
          <Container className="flex items-center justify-between">
            <p className="font-exo text-[20px] font-bold uppercase leading-snug text-white sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
            Service Details
            </p>

            <nav aria-label="Breadcrumb" className="flex">
              <ol role="list" className="flex items-center space-x-1">
                <li>
                  <div>
                    <Link
                      href="/"
                      className="text-white transition-all duration-300 hover:text-white/70"
                    >
                      <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
                      <span className="sr-only">Home</span>
                    </Link>
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
                    <Link
                      href={servicePath}
                      aria-current="page"
                      className="ml-1 text-sm font-medium text-white transition-all duration-300 hover:text-white/70 sm:text-base"
                    >
                    Services details
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
          </Container>
        </div>

        <Container className="py-[50px] md:py-[80px] lg:py-[120px]">
          <div className="mb-2">
            <h1 className="font-exo text-[24px] font-bold uppercase leading-snug text-title sm2:text-[26px] sm:text-[36px] lg:text-[40px]  xl:text-[44px] 2xl:text-[48px]">
              {service?.title}
            </h1>
            <p className="mt-2 text-justify text-sm text-theme sm:text-base  md:text-lg">
              {service?.description}
            </p>
          </div>

          {service?.content.map((section, index) => (
            <div key={index} className="">
              <div className="">
                <h2 className="text-xl font-semibold uppercase text-title md:text-2xl">
                  {section?.sectionTitle}
                </h2>
                {section?.text && (
                  <p className="mb-10 text-justify text-sm text-body sm:text-base">
                    {section?.text}
                  </p>
                )}
              </div>
              {section?.features && (
                <>
                  <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
                    {section?.features?.map((feature, idx) => (
                      <div
                        className="relative h-[100%] rounded-md bg-surfaceMuted px-6 pb-6 transition-all duration-300 ease-out hover:bg-white hover:shadow-shadow4"
                        key={idx}
                      >
                        <div className="w-fit -translate-y-[25px] rounded-md bg-white p-[10px]">
                          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-md bg-theme font-exo font-bold text-white">
                          0{idx + 1}
                          </div>
                        </div>
                        <h3 className="mb-2 font-exo text-base font-bold capitalize text-title">
                          {feature?.title}:
                        </h3>
                        <p className="text-justify text-xs text-body md:text-sm">
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
    </>
  );
}
