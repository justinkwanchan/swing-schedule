import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '@/auth.config';
import { z } from 'zod';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            'current-password': z.string().min(4),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, 'current-password': password } =
            parsedCredentials.data;
          const user = await fetch(
            'https://58vzjkrur5.execute-api.us-east-1.amazonaws.com/dev/login',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email, password }),
            }
          );
          if (!user) return null;
          if (user.status === 200) return { email };
        }

        return null;
      },
    }),
  ],
});
