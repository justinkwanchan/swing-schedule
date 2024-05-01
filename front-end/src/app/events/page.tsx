import { Metadata } from 'next';
import { getEventsByWeekOf } from '@/lib/actions';
import PageTitleSection from '@/app/components/page-title-section';
import DanceEventPreviewCard from '../components/home/dance-event-preview-card';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

export const metadata: Metadata = {
  title: 'Upcoming Events',
  description: 'All of the upcoming local swing events',
};

export default async function Events() {
  const pageDescription =
    'Your go-to guide for swing dance socials in Montreal! Explore upcoming events and connect with the local swing dance community.';

  const weekOf = dayjs().isoWeekday(1).startOf('day').toISOString();
  const events = await getEventsByWeekOf(weekOf);

  // const tempEvent = {
  //   id: 'cats78',
  //   image: 'image',
  //   datetime: 'FRI OCT 16 @ 7:30PM',
  //   title: "Cat's Corner Weekly Dance",
  //   organizer: "Cat's Corner",
  //   location: 'Polish White Eagle Society',
  //   address: '1956 Rue Frontenac, Montréal, QC H2K 2Z1',
  // };

  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection title="Upcoming" description={pageDescription} />

      {/* Using grid instead of flex because it allows semi-filled row to align left instead of center
       ** Grid column widths must match the card widths in /dance-event-preview-card/index.tsx */}
      <div
        className={`grid grid-cols-[repeat(auto-fit,_176px)] justify-center gap-x-4 w-11/12 md:grid-cols-[repeat(auto-fit,_240px)] md:gap-8 md:w-4/5`}
      >
        {/* <DanceEventPreviewCard isCarouseled={false} event={tempEvent} /> */}
        {events.map((event) => (
          <DanceEventPreviewCard
            isCarouseled={false}
            event={event}
            key={event.pk + event.sk}
          />
        ))}
      </div>
    </div>
  );
}
