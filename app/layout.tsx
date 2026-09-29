import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Exo, Fira_Sans } from 'next/font/google';
import type React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import './globals.css';
import ApolloTracker from '@/component/ApolloTracker/ApolloTracker';
import JiraWidget from '@/component/JiraWidget/JiraWidget';
import { JsonLd, siteConfig } from '@/lib/seo';

const exo = Exo({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-exo',
});

const fira_sans = Fira_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-fira',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: { url: '/apple-touch-icon.png' },
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Security headers via meta tags */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://jsd-widget.atlassian.com" />
        <link rel="dns-prefetch" href="https://jsd-widget.atlassian.com" />
        <link rel="preconnect" href="https://assets.apollo.io" />
        <link rel="dns-prefetch" href="https://assets.apollo.io" />
      </head>
      <body className={`${exo.variable} ${fira_sans.variable}`}>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': ['Organization', 'ProfessionalService'],
                '@id': `${siteConfig.url}/#organization`,
                name: siteConfig.name,
                url: siteConfig.url,
                logo: `${siteConfig.url}/apple-touch-icon.png`,
                image: `${siteConfig.url}${siteConfig.ogImage.url}`,
                description: siteConfig.description,
                email: siteConfig.email,
                telephone: siteConfig.phone,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: '1317 Morris Ave, Suite 2',
                  addressLocality: 'Union',
                  addressRegion: 'NJ',
                  postalCode: '07083',
                  addressCountry: 'US',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: 40.6877976,
                  longitude: -74.2428154,
                },
                areaServed: ['United States', 'Worldwide'],
                sameAs: [siteConfig.linkedin],
                contactPoint: {
                  '@type': 'ContactPoint',
                  telephone: siteConfig.phone,
                  email: siteConfig.email,
                  contactType: 'customer support',
                  availableLanguage: 'English',
                },
              },
              {
                '@type': 'WebSite',
                '@id': `${siteConfig.url}/#website`,
                name: siteConfig.name,
                url: siteConfig.url,
                publisher: { '@id': `${siteConfig.url}/#organization` },
              },
            ],
          }}
        />
        {children}

        {/* Jira Widget - loads on all pages except contact */}
        <JiraWidget />

        {/* Apollo.io website visitor tracking */}
        <ApolloTracker />
      </body>
    </html>
  );
}
