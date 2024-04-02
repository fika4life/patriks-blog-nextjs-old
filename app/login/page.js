'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Loading from '../loading';

export default function LoginPage() {
  const { status } = useSession();
  console.log('status:', status);

  const router = useRouter();

  if (status === 'loading') {
    return <Loading></Loading>;
  }

  // if (status === 'authenticated') {
  //   router.push('/');
  // }

  return (
    <div className="grid h-screen place-items-center">
      <button
        type="button"
        className="rounded-sm border-2 border-primary px-16 py-2.5 text-center text-sm font-medium text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-secondary focus:ring focus:ring-secondary disabled:cursor-not-allowed disabled:border-primary disabled:bg-primary"
        onClick={() => signIn('google')}
      >
        Login with Google
      </button>
    </div>
  );
}
