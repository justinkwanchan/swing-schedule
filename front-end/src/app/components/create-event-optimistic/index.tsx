'use client';

import { useOptimistic } from 'react';
import UserEventCard from './user-event-card';
import CreateEventForm from './create-event-form';
import dayjs from 'dayjs';

type Props = {
  events: EventFromDB[];
};

export default function CreateEventOptimistic({ events }: Props) {
  const eventCards = events.map((event) => ({
    pk: event.pk,
    weekOf: dayjs(event.weekOf).toISOString(),
    eventName: event.eventName,
    startDateTime: dayjs(event.startDateTime).toISOString(),
  }));

  const [optimisticEvents, setOptimisticEvent] = useOptimistic<
    EventCard[],
    { type: string; newEvent: EventCard }
  >(
    eventCards,
    (state: EventCard[], action: { type: string; newEvent: EventCard }) => {
      switch (action.type) {
        case 'ADD':
          return [...state, action.newEvent].sort((a, b) =>
            dayjs(a.startDateTime).isAfter(dayjs(b.startDateTime)) ? 1 : -1
          );
        case 'DELETE':
          return state.filter((event) => event.pk !== action.newEvent.pk);
        default:
          return state;
      }
    }
  );

  return (
    <>
      <aside className="flex flex-col gap-4 bg-[#CDCFD0] p-8">
        <h1 className="text-2xl font-medium text-center">Posted Events</h1>
        <p className="text-sm max-w-xs leading-7">
          Below are your upcoming active events. Manage your events below or
          create a new listing.
        </p>
        <section className="flex flex-col items-center gap-4 w-full">
          {optimisticEvents.map((event) => (
            <UserEventCard
              key={event.pk + event.weekOf}
              event={event}
              setOptimisticEvent={setOptimisticEvent}
            />
          ))}
        </section>
      </aside>
      <section className="flex grow flex-col max-w-[1034px] gap-4 bg-[#484949]">
        <h1 className="text-2xl font-medium text-center text-white">
          Create Event
        </h1>
        <div className="h-96 bg-white"></div>
        <CreateEventForm setOptimisticEvent={setOptimisticEvent} />
      </section>
    </>
  );
}
