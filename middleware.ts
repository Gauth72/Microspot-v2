import { withAuth } from 'next-auth/middleware';

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
  pages: {
    signIn: '/login',
  },
});

export const config = {
  matcher: [
    '/deposer-annonce',
    '/profil',
    '/annonces/:path*/modifier',
    '/messages',
  ],
};
