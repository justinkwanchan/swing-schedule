import Link from 'next/link';

type Props = {
  isCarouseled: boolean;
  dates: string;
};

export default function PreviousFlyerCard({ isCarouseled, dates }: Props) {
  return (
    /* Non-carouseled card widths must match the grid column widths in /previous-flyers/page.tsx */
    <div
      className={`${
        isCarouseled
          ? 'flex-[0_0_170px] pl-4 md:flex-[0_0_50%] md:pl-8 lg:flex-[0_0_33.333333%] 2xl:flex-[0_0_25%]'
          : 'w-[170px] md:w-[240px]'
      }`}
    >
      <div className="flex flex-col gap-y-1 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-2xl mb-4 md:shadow-none md:mb-0 ">
        <div className="bg-gray-100 w-full h-[154px] md:h-60 rounded-2xl"></div>
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
