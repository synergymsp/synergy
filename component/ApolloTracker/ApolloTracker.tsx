'use client';

import Script from 'next/script';

declare global {
  interface Window {
    trackingFunctions?: {
      onLoad: (options: { appId: string }) => void;
    };
  }
}

const APOLLO_APP_ID = '6a553cbabd369e0020cdc163';

export default function ApolloTracker() {
  return (
    <Script
      id="apollo-website-tracker"
      src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js"
      strategy="afterInteractive"
      onLoad={() => {
        window.trackingFunctions?.onLoad({ appId: APOLLO_APP_ID });
      }}
    />
  );
}
