import MontrealIcon from '../svg/MontrealIcon';

export default function Footer() {
  return (
    <section className="flex flex-col bg-black text-white">
      <div className="p-8 md:mb-8 flex">
        <div className="flex flex-col flex-1">
          <MontrealIcon color={'white'} size={60} />
          <p className="mt-4 w-3/4">
            Find dance classes, social events, dance studios, and performances
            for all levels of experience in Montreal.
          </p>
        </div>
        <div className="hidden md:flex flex-col flex-1">
          <div className="ml-8 w-96 bg-slate-400">
            Subscribe : Enter your email
          </div>
          <div className="m-8 mb-0 p-2 w-64 border border-white">
            Bug report
          </div>
          <div className="m-8 mb-0 p-2 w-64 border border-white">
            Share the app
          </div>
        </div>
      </div>
      <hr className="hidden md:block border-[#4d4d4d]" />
      <div className="hidden md:block p-8">@copyright 2023 Lindy Friends</div>
    </section>
  );
}
