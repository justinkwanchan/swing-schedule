'use client';

import dayjs from 'dayjs';
import DeleteEventButton from './DeleteEventButton';

type Props = {
  event: EventCard;
  setOptimisticEvent: (action: { type: string; newEvent: EventCard }) => void;
};

export default function UserEventCard({ event, setOptimisticEvent }: Props) {
  const date = dayjs(event.startDateTime);
  const month = date.format('MMM').toUpperCase();
  const day = date.format('D');

  return (
    <div className="flex items-center gap-4 w-3/4 bg-[#35383E1A] rounded-xl p-3">
      <DeleteEventButton
        event={event}
        setOptimisticEvent={setOptimisticEvent}
      />
      <div className="flex flex-col justify-center items-center shrink-0 w-9 h-9 bg-[#D29CA4] rounded">
        <p className="text-xs">{month}</p>
        <p className="text-sm font-bold">{day}</p>
      </div>
      <p className="grow leading-5">{event.eventName}</p>
    </div>
  );
}
