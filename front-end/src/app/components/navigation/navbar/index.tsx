import Link from 'next/link';
import Image from 'next/image';
import Hamburger from './Hamburger';
import instagramIcon from 'public/instagram-icon.svg';
import MontrealIcon from '../../svg/MontrealIcon';

import { usePathname } from 'next/navigation';
import { getSession, logOut } from '@/lib/actions';
import { useEffect, useState } from 'react';

export default function Navbar({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: () => void;
}) {
  const pathName = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    (async () => {
      const session = await getSession();
      setIsLoggedIn(!!session);
    })();
  }, []);

  return (
    <nav className="bg-white mx-auto p-4 flex justify-between items-center sticky top-0 z-40">
      {/* Left Side */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <Hamburger isOpen={isOpen} handleClick={toggleOpen} />
        <MontrealIcon />
      </div>

      {/* Middle - Desktop Menu */}
      <div className="hidden md:flex justify-between md:w-2/3 lg:w-1/2">
        <Link href="/" className={pathName === '/' ? 'font-medium' : ''}>
          HOME
        </Link>
        <Link
          href="/events"
          className={pathName === '/events' ? 'font-medium' : ''}
        >
          UPCOMING EVENTS
        </Link>
        <Link
          href="/contribute"
          className={pathName === '/contribute' ? 'font-medium' : ''}
        >
          HOW TO CONTRIBUTE
        </Link>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        <Image
          src={instagramIcon}
          alt={'Instagram Icon'}
          className="hidden md:block"
        />
        {!isLoggedIn ? (
          <Link
            href="/login"
            className={
              ['/login', '/register'].includes(pathName) ? 'font-medium' : ''
            }
          >
            LOGIN
          </Link>
        ) : (
          <form action={logOut}>
            <button type="submit">LOGOUT</button>
          </form>
        )}
      </div>
    </nav>
  );
}
