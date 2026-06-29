import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Lightweight cookie-presence check only. Full session
// verification happens in the Node runtime (API routes / pages),
// not here, since middleware runs in the Edge Runtime and cannot
// use next-auth's full provider stack.
export function middleware(request: NextRequest) {
  const sessionToken =
    request.cookies.get('next-auth.session-token') ||
    request.cookies.get('__Secure-next-auth.session-token');

  const isProtectedRoute = request.nextUrl.pathname.startsWith('/dashboard');

  if (isProtectedRoute && !sessionToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
