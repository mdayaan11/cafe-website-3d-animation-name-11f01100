import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';

export const authOptions = {
  ...authConfig,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        // TODO: replace with real lookup against your database.
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        return { id: '1', email: credentials.email };
      },
    }),
  ],
};

export default NextAuth(authOptions);
