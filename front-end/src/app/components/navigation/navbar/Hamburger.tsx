export default function Hamburger({
  isOpen,
  handleClick,
}: {
  isOpen: boolean;
  handleClick: () => void;
}) {
  return (
    <button
      onClick={handleClick}
      className={`h-8 flex flex-col justify-center items-center transition-all duration-300 md:hidden ${
        isOpen ? 'rotate-90' : ''
      }`}
    >
      <span
        className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-0.5'
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-1 ${
          isOpen ? 'opacity-0' : 'opacity-100'
        }`}
      ></span>
      <span
        className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
          isOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-0.5'
        }`}
      ></span>
    </button>
  );
}
