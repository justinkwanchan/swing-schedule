import Link from 'next/link';

type Props = {
  event: EventDetails;
};

export default function DanceEventPreviewCard({ event }: Props) {
  const { id, image, datetime, title, organizer, location, address } = event;

  return (
    <div className="flex flex-col flex-[0_0_33.333333%] pl-8">
      <div className="bg-gray-100 w-full h-48 rounded-lg mb-2"></div>
      <h3 className="text-red-500">{datetime}</h3>
      <h1 className="font-bold text-lg mb-2">{title}</h1>
      <p className="text-sm">
        By: {organizer}
        <br />
        {location}
        <br />
        {address}
        <br />
        <Link href={`events/${id}`} className="underline text-cyan-400">
          More info
        </Link>
      </p>
    </div>
  );
}
