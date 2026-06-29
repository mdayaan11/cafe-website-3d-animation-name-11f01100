import type { NextAuthOptions } from 'next-auth';

// Edge-safe config only. Do NOT import providers or database
// clients here — this file is imported by middleware.ts, which
// runs in the Edge Runtime and cannot use Node.js APIs or
// dynamic code evaluation (which next-auth providers rely on).
export const authConfig: Partial<NextAuthOptions> = {
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
};
