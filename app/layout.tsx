import { config } from '@fortawesome/fontawesome-svg-core';
import type { Metadata } from 'next';
import { Exo, Fira_Sans } from 'next/font/google';

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
  description: 'Generated by create next app',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${exo.variable} ${fira_sans.variable}`}>
        {children}

        <JiraWidget />
      </body>
    </html>
  );
}
