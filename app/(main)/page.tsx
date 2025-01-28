import dynamic from 'next/dynamic';
import { Suspense } from 'react';

import Loading from '@/app/(main)/loading';

const HomePage = dynamic(() => import('@/app/(main)/home/home'), {
  suspense: true,
});

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage />
    </Suspense>
  );
}
