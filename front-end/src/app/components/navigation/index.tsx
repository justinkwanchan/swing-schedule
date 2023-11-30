'use client';
import { useState } from 'react';
import MobileNav from './mobile-nav';
import Navbar from './navbar';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobileNav isOpen={isOpen} handleClick={toggleOpen} />
      <Navbar isOpen={isOpen} toggleOpen={toggleOpen} />
    </>
  );
}
