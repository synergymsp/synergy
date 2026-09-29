import { Suspense } from 'react';

import Loading from '@/app/(main)/loading';
import { buildMetadata, siteConfig } from '@/lib/seo';

import HomePage from './home/home';

export const metadata = buildMetadata({
  description: siteConfig.description,
  path: '/',
});

export default function MainPage() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  );
}
