import type { Metadata } from 'next';

export const siteConfig = {
  name: 'Synergy MSP',
  url: 'https://synergymsp.net',
  title: 'Synergy MSP | Customized IT & Technology Solutions',
  description:
    'Synergy MSP offers customized IT solutions designed around unique business needs. From Oracle development and MSP services to cloud, cybersecurity, and technology optimization, we help keep your operations secure and efficient.',
  keywords: [
    'managed IT services',
    'managed service provider',
    '24/7 help desk',
    'cybersecurity services',
    'cloud solutions',
    'IT infrastructure design',
    'Oracle development and support',
    'VoIP solutions',
  ],
  email: 'info@synergymsp.net',
  phone: '+1-732-334-3590',
  linkedin: 'https://www.linkedin.com/company/synergy-msp-new-jersey-usa/',
  ogImage: {
    url: '/synergy-og.png',
    alt: 'Synergy MSP – Managed IT Services, Cybersecurity, Cloud and Oracle Solutions',
  },
};

interface PageMetadataOptions {
  title?: string;
  description: string;
  path: string;
}

// Child segments replace (not merge) the parent's openGraph/twitter objects,
// so every page builds its full set of social tags through this helper.
export function buildMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;

  return {
    title: title ?? { absolute: siteConfig.title },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      siteName: siteConfig.name,
      url: path,
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
