import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDatabase } from '../../../lib/mongodb';
import { compare } from 'bcryptjs';
import { KYCData } from '../../../types/kyc';

declare module 'next-auth' {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      emailVerified?: boolean;
      kycData?: KYCData | null;
    }
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    emailVerified?: boolean;
    kycData?: KYCData | null;
  }
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Please enter an email and password');
        }

        const { db } = await connectToDatabase();
        const user = await db.collection('users').findOne({ email: credentials.email });

        if (!user) {
          throw new Error('No user found with this email');
        }

        if (!user.emailVerified) {
          throw new Error('Please verify your email before signing in');
        }

        const isValid = await compare(credentials.password, user.password);

        if (!isValid) {
          throw new Error('Invalid password');
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          emailVerified: user.emailVerified,
          kycData: user.kycData || null,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const customUser = user as { id: string; emailVerified: boolean; kycData?: any };
        token.id = customUser.id;
        token.emailVerified = customUser.emailVerified;
        token.kycData = customUser.kycData;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        const customUser = session.user as { id?: string; emailVerified?: boolean; kycData?: any };
        customUser.id = token.id as string;
        customUser.emailVerified = token.emailVerified as boolean;
        customUser.kycData = token.kycData;
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  secret: process.env.NEXTAUTH_SECRET,
}); 