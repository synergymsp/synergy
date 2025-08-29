import { NextResponse } from 'next/server';

export async function GET() {
  const content = `User-agent: *\nAllow: /\nSitemap: https://synergymsp.net/sitemap.xml`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
} 