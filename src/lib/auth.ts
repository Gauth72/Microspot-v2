import type { DefaultSession, NextAuthOptions } from 'next-auth';
import type { JWT } from 'next-auth/jwt';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from '@/lib/prisma';
import { compare } from 'bcryptjs';
import { User } from '@prisma/client';

export const authOptions: NextAuthOptions = {

  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        }) as User | null;

        if (!user || !user.hashedPassword) {
          console.log('User not found or no password:', credentials.email);
          return null;
        }

        const isValid = await compare(credentials.password, user.hashedPassword);

        if (!isValid) {
          console.log('Invalid password for user:', credentials.email);
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          image: user.image,
          profileImage: user.profileImage,
          coverImage: user.coverImage,
        };
      },
    })
  ],
  session: {
    strategy: 'jwt' as const,
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  pages: {
    signIn: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub;

        // Récupérer l'utilisateur avec ses images
        const user = await prisma.user.findUnique({
          where: { id: token.sub },
        });

        if (user) {
          session.user.profileImage = user.profileImage || '';
          session.user.coverImage = user.coverImage || '';
        }
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
      }
      return token;
    },
  }
};
