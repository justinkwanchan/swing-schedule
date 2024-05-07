import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from '@/auth.config';
import { z } from 'zod';

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      id: 'login',
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
    Credentials({
      id: 'register',
      async authorize(credentials) {
        const renamedCredentials = {
          email: credentials.email,
          newPassword: credentials['new-password'],
          confirmPassword: credentials['confirm-password'],
        };
        const parsedCredentials = z
          .object({
            email: z.string().email(),
            newPassword: z.string().min(4),
            confirmPassword: z.string().min(4),
          })
          .superRefine(({ confirmPassword, newPassword }, ctx) => {
            if (confirmPassword !== newPassword) {
              ctx.addIssue({
                code: 'custom',
                message: 'The passwords did not match',
              });
            }
          })
          .safeParse(renamedCredentials);

        if (parsedCredentials.success) {
          const { email, newPassword: password } = parsedCredentials.data;
          const user = await fetch(
            'https://58vzjkrur5.execute-api.us-east-1.amazonaws.com/dev/signup',
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
