import Link from 'next/link';
import DanceSchoolCard from './dance-school-card';

export default function DanceSchoolSection() {
  return (
    <div className="flex flex-col">
      <div className="flex mb-4">
        <h1 className="font-bold text-xl mr-4">Dance Schools</h1>
        <Link href={''} className="underline text-cyan-400 text-sm self-center">
          More info
        </Link>
      </div>
      <div className="flex flex-wrap -ml-8 gap-y-8">
        <DanceSchoolCard title="Cat's Corner" />
        <DanceSchoolCard title="Studio 88" />
        <DanceSchoolCard title="Swing Connexion" />
      </div>
    </div>
  );
}
