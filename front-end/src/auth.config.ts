import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnManageEvents = nextUrl.pathname.startsWith('/manage-events');
      const isOnLoginOrRegister = ['/login', '/register'].includes(
        nextUrl.pathname
      );
      if (isOnManageEvents) {
        return isLoggedIn; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && isOnLoginOrRegister) {
        return Response.redirect(new URL('/manage-events', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
