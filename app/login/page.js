'use client';
import { signIn, useSession } from 'next-auth/react';

export default function LoginPage() {
  const { status, data } = useSession();
  console.log(data);
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
