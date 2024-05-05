'use client';

import Image from 'next/image';
import { useState } from 'react';
import ListItem from './ListItem';
import Link from 'next/link';
import logo from '/public/logo2.svg';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const { data: session } = useSession();

  return (
    <header className={`flex w-full items-center bg-white  `}>
      <div className="container mx-auto">
        <div className="relative md:-mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link href="/" className="block w-full py-5 text-primary">
              <Image src={logo} alt="logo" width={240} height={60} priority />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={` ${
                  open && 'navbarTogglerActive'
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 z-50 opacity-100 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-primary"></span>
              </button>
              <nav
                // :className="!navbarOpen && 'hidden' "
                id="navbarCollapse"
                className={`absolute z-50  right-4 top-full w-full max-w-[250px] rounded-sm bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                  !open && 'hidden'
                } `}
              >
                <ul className="block lg:flex">
                  <ListItem NavLink="/about">About</ListItem>
                  <ListItem NavLink="/blog">Blog</ListItem>
                  {session ? (
                    <>
                      <ListItem NavLink="/dashboard">Dashboard</ListItem>
                      <span
                        className="flex py-2 text-base font-medium text-primary hover:underline hover:underline-offset-8 hover:decoration-primary hover:decoration-2 lg:ml-12 lg:inline-flex hover:cursor-pointer"
                        onClick={signOut}
                      >
                        Logout
                      </span>
                    </>
                  ) : (
                    <ListItem NavLink="/login">Login</ListItem>
                  )}
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <Link
                href="/"
                type="button"
                className="rounded-sm border-2 border-primary px-8 py-2.5 text-center text-sm font-medium text-primary shadow-sm transition-all hover:border-primary hover:bg-primary hover:text-secondary focus:ring focus:ring-primary disabled:cursor-not-allowed disabled:border-primary disabled:bg-primary"
              >
                Sign up for our newsletter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
