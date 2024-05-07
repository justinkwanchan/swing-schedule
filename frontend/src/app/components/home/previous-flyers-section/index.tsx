import Link from 'next/link';
import PreviousFlyerCard from './previous-flyer-card';

export default function PreviousFlyersSection() {
  return (
    <div className="flex flex-col">
      <div className="flex mb-4">
        <h1 className="font-bold text-xl mr-4">Previous Flyers</h1>
        <Link
          href="/previous-flyers"
          className="underline text-cyan-400 text-sm self-center"
        >
          View all
        </Link>
      </div>
      <div className="flex flex-wrap -ml-8 gap-y-8">
        <PreviousFlyerCard dates="OCT 8 - OCT 14" />
        <PreviousFlyerCard dates="OCT 1 - OCT 7" />
        <PreviousFlyerCard dates="OCT 24 - OCT 30" />
      </div>
    </div>
  );
}
