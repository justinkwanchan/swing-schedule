import Link from 'next/link';

type Props = {
  isCarouseled: boolean;
  dates: string;
};

export default function PreviousFlyerCard({ isCarouseled, dates }: Props) {
  return (
    /* Card widths must match the grid column widths in /previous-flyers/page.tsx
     * Carouseled cards include padding of 16px for small and 32px for large */
    <div
      className={`${
        isCarouseled
          ? 'flex-[0_0_192px] pl-4 md:flex-[0_0_272px] md:pl-8'
          : 'w-44 md:w-60'
      }`}
    >
      <div className="flex flex-col gap-y-1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-2xl mb-4 md:shadow-none md:mb-0 ">
        {/* Card image height to match card width above */}
        <div className="bg-gray-100 w-full h-44 md:h-60 rounded-2xl"></div>
        <p className="text-red-500 self-center mb-2 md:self-start md:mb-0">
          {dates}
        </p>
        <Link
          href=""
          className="underline text-cyan-400 text-sm hidden md:block"
        >
          View
        </Link>
      </div>
    </div>
  );
}
