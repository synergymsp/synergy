import { Suspense } from 'react';

import Loading from '@/app/(main)/loading';

import HomePage from './home/home';

export default function MainPage() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  );
}
