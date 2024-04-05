import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnCreateEvent = nextUrl.pathname.startsWith('/create-event');
      const isOnLoginOrRegister = ['/login', '/register'].includes(
        nextUrl.pathname
      );
      if (isOnCreateEvent) {
        return isLoggedIn; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && isOnLoginOrRegister) {
        return Response.redirect(new URL('/create-event', nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
