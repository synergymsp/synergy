import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Exo, Fira_Sans } from 'next/font/google';
import type React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;
import './globals.css';
import JiraWidget from '@/component/JiraWidget/JiraWidget';

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
  title: 'Synergy MSP',
  description: 'Professional IT Services and Solutions',
  keywords: 'IT services, managed services, cloud solutions, cybersecurity',
  authors: [{ name: 'Synergy MSP' }],
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
      </head>
      <body className={`${exo.variable} ${fira_sans.variable}`}>
        {children}

        {/* Jira Widget - loads on all pages except contact */}
        <JiraWidget />
      </body>
    </html>
  );
}
