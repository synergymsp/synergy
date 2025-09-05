import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /linkedin to your LinkedIn company page
  if (pathname === '/linkedin') {
    return NextResponse.redirect(
      'https://www.linkedin.com/company/synergy-msp-new-jersey-usa/',
      308 
    );
  }

  return NextResponse.next();
}

// Only run middleware on specific paths
export const config = {
  matcher: ['/linkedin'],
};
