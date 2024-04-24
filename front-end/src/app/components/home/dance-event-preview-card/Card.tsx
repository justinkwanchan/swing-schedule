import Link from 'next/link';
import Image from 'next/image';
import locationPin from 'public/location-pin.svg';
import dayjs from 'dayjs';

type Props = {
  event: EventFromDB;
  isDesktop: boolean;
  eventLink?: string;
};

export default function Card({ event, isDesktop, eventLink = '' }: Props) {
  // const { id, image, datetime, title, organizer, location, address } = event;
  const { eventName, startDateTime, location } = event;

  return (
    <div className="flex flex-col shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-2xl mb-4 md:shadow-none md:mb-0">
      {/* Card image height to match card width from /dance-event-preview-card/index.tsx */}
      <div className="bg-gray-100 w-full h-44 md:h-60 rounded-2xl mb-2"></div>
      <div className="mx-2 md:mx-0">
        <h3 className="text-red-500 font-medium text-xs mb-1 md:text-base md:mb-0">
          {dayjs(startDateTime).format('ddd MMM D @ h:mma').toUpperCase()}
        </h3>
        <h1 className="font-bold text-sm mb-2 md:text-lg">{eventName}</h1>
        <div className="text-sub-text-grey text-xs md:text-sm">
          {/* <p>By: {organizer}</p> */}
          <div className="flex mt-1 mb-2 md:my-0">
            <Image
              src={locationPin}
              alt={'Location Pin'}
              className="inline mt-1 mr-2 h-4 w-max md:hidden"
            />
            <p>{location}</p>
          </div>
          {/* <p className="hidden md:block">{location}</p> */}
          {isDesktop && (
            <Link href={eventLink} className="underline text-cyan-400">
              More info
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
