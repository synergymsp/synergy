import { NextRequest, NextResponse } from 'next/server';

import { getServicePath, serviceRoutes } from '@/data/serviceRoutes';

// Any "/services/<id>-<anything>" used to render the same service, and old
// links/sitemaps used different slugs. 308 those to the one canonical URL so
// search engines consolidate ranking signals on a single page.
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const id = parseInt(pathname.split('/')[2] ?? '');
  const route = serviceRoutes.find((r) => r.id === id);

  if (route) {
    const canonicalPath = getServicePath(route.id);
    if (pathname !== canonicalPath) {
      const url = request.nextUrl.clone();
      url.pathname = canonicalPath;
      return NextResponse.redirect(url, 308);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/services/:path*',
};
