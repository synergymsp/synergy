import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Exo, Fira_Sans } from 'next/font/google';

import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

import './globals.css';

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
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${exo.variable} ${fira_sans.variable}`}>
        {children}

        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          data-jsd-embedded
          data-key="13677967-7313-4cd0-befd-204bf2af1f12"
          data-base-url="https://jsd-widget.atlassian.com"
          src="https://jsd-widget.atlassian.com/assets/embed.js"
        ></script>
      </body>
    </html>
  );
}
