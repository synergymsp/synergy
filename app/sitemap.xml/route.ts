import { NextResponse } from 'next/server';

const staticPages = ['', 'about', 'contact', 'privacy-policy'];

const services = [
  { id: 1, slug: 'oracle-development-and-support' },
  { id: 2, slug: 'it-infrastructure-design' },
  { id: 3, slug: 'cloud-solutions' },
  { id: 4, slug: 'help-desk-service' },
  { id: 5, slug: 'cyber-security' },
  { id: 6, slug: 'voice-over-ip' },
];

const baseUrl = 'https://synergymsp.net';

export async function GET() {
  // current timestamp in ISO format
  const today = new Date().toISOString();

  const staticUrls = staticPages
    .map(
      (page) =>
        `<url>
        <loc>${baseUrl}/${page}</loc>
        <lastmod>${today}</lastmod>
      </url>`
    )
    .join('');

  const serviceUrls = services
    .map(
      (service) =>
        `<url>
        <loc>${baseUrl}/services/${service.id}-${service.slug}</loc>
        <lastmod>${today}</lastmod>
      </url>`
    )
    .join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticUrls}
      ${serviceUrls}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
