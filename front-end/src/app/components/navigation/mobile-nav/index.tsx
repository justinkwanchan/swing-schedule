import Link from 'next/link';

export default function MobileNav({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) {
  return (
    <section
      id="mobile-menu"
      className={`${
        isOpen ? 'flex' : 'hidden'
      } top-[62px] justify-center sticky w-full origin-top animate-open-menu flex-col bg-black text-5xl z-50`}
      onClick={handleClick}
    >
      <nav
        className="flex h-[calc(100svh-62px)] flex-col items-center py-8 gap-32 text-white"
        aria-label="mobile"
      >
        <Link href="/" className="w-full text-center pt-32 hover:opacity-90">
          HOME
        </Link>
        <Link href="/events" className="w-full text-center hover:opacity-90">
          UPCOMING EVENTS
        </Link>
        <Link
          href="/contribute"
          className="w-full text-center hover:opacity-90"
        >
          HOW TO CONTRIBUTE
        </Link>
      </nav>
    </section>
  );
}
