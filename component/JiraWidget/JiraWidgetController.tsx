'use client';

import { useEffect } from 'react';

import { useJiraWidget } from './JiraWidgetProvider';

declare global {
  interface Window {
    JSD?: any
    ATL_JQ_PAGE_PROPS?: any
  }
}

export function JiraWidgetController() {
  const { isVisible } = useJiraWidget();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Control widget visibility
    const widget = document.querySelector('#jsd-widget');

    if (widget) {
      const widgetElement = widget as HTMLElement;

      widgetElement.style.display = isVisible ? 'block' : 'none';
    }

    // If widget API is available, control it programmatically
    if (window.JSD && window.JSD.widget) {
      if (isVisible) {
        window.JSD.widget.show?.();
      } else {
        window.JSD.widget.hide?.();
      }
    }
  }, [isVisible]);

  return null;
}
