import { authOptions } from '@/utils/auth.js';
import NextAuth from 'next-auth';

// TODO: Protect routes that need auth to access

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
