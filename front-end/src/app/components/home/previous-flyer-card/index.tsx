import Link from 'next/link';

type Props = {
  dates: string;
};

export default function PreviousFlyerCard({ dates }: Props) {
  return (
    <div className="flex flex-col flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] 2xl:flex-[0_0_25%] pl-8 gap-y-1">
      <div className="bg-gray-100 w-full h-60 rounded-lg"></div>
      <p className="text-red-500 self-center sm:self-start">{dates}</p>
      <Link href="" className="underline text-cyan-400 text-sm hidden sm:block">
        View
      </Link>
    </div>
  );
}
