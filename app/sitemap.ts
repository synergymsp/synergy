import type { MetadataRoute } from 'next';

import { getServicePath, serviceRoutes } from '@/data/serviceRoutes';
import { siteConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: { path: string; priority: number }[] = [
    { path: '', priority: 1 },
    ...serviceRoutes.map((route) => ({
      path: getServicePath(route.id),
      priority: 0.9,
    })),
    { path: '/contact', priority: 0.8 },
    { path: '/privacy-policy', priority: 0.3 },
  ];

  return pages.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: 'monthly',
    priority,
  }));
}
