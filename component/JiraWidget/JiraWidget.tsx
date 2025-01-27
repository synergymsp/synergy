'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function JiraWidget() {
  const pathname = usePathname();

  useEffect(() => {
    const widget = document.querySelector('#jsd-widget');

    if (widget) {
      if (pathname === '/contact') {
        (widget as HTMLElement).style.display = 'none';
      } else {
        (widget as HTMLElement).style.display = 'block';
      }
    }
  }, [pathname]);

  return (
    // eslint-disable-next-line @next/next/no-sync-scripts
    <script
      data-jsd-embedded
      data-key="13677967-7313-4cd0-befd-204bf2af1f12"
      data-base-url="https://jsd-widget.atlassian.com"
      src="https://jsd-widget.atlassian.com/assets/embed.js"
    ></script>
  );
}
