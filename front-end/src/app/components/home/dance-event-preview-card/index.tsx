import Link from 'next/link';

export default function DanceEventPreviewCard() {
  return (
    <div className="flex flex-col flex-[0_0_33.333333%] pl-8">
      <div className="bg-gray-100 w-full h-48 rounded-lg mb-2"></div>
      <h3 className="text-red-500">FRI OCT 16 @ 7:30PM</h3>
      <h1 className="font-bold text-lg mb-2">Cat's Corner Weekly Dance</h1>
      <p className="text-sm">
        By: Cat's Corner
        <br />
        Polish White Eagle Society
        <br />
        1956 Rue Frontenac, Montréal, QC H2K 2Z1
        <br />
        <Link href={''} className="underline text-cyan-400">
          More info
        </Link>
      </p>
    </div>
  );
}
