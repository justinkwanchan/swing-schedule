import Link from 'next/link';
import Card from './Card';

type Props = {
  event: EventDetails;
};

export default function DanceEventPreviewCard({ event }: Props) {
  return (
    <div className="flex-[0_0_170px] pl-4 md:pl-8 md:flex-[0_0_50%] lg:flex-[0_0_33.333333%] 2xl:flex-[0_0_25%]">
      <Link href={`events/${event.id}`} className="md:hidden">
        <Card event={event} />
      </Link>

      <div className="hidden md:block">
        <Card event={event} />
      </div>
    </div>
  );
}
