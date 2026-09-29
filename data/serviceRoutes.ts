// Single source of truth for service page URLs (used by navbar, footer,
// home cards, sitemap and the service page's canonical redirect).
export interface ServiceRoute {
  id: number;
  slug: string;
  navTitle: string;
}

export const serviceRoutes: ServiceRoute[] = [
  { id: 1, slug: 'oracle-development-and-support', navTitle: 'Oracle Development and Support' },
  { id: 2, slug: 'it-infrastructure-design-and-engineering', navTitle: 'IT Infrastructure Design and Engineering' },
  { id: 3, slug: 'on-prem-and-cloud-base-solutions', navTitle: 'On-prem and Cloud Base Solutions' },
  { id: 4, slug: 'help-desk-service', navTitle: 'Help Desk Service' },
  { id: 5, slug: 'cyber-security', navTitle: 'Cyber Security' },
  { id: 6, slug: 'voice-over-ip', navTitle: 'Voice Over IP' },
];

export const getServicePath = (id: number) => {
  const route = serviceRoutes.find((r) => r.id === id);

  return route ? `/services/${route.id}-${route.slug}` : '/';
};
