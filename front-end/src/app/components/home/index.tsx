import HomeTitleSection from './home-title-section';
import PreviewSection from './preview-section';
import { SOCIAL_DANCES, PREVIOUS_FLYERS } from '@/lib/constants';
import { getEventsByWeekOf } from '@/lib/actions';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

export default async function Home() {
  const weekOf = dayjs().isoWeekday(1).startOf('day').toISOString();
  const events = await getEventsByWeekOf(weekOf);

  return (
    <>
      <HomeTitleSection events={events} />

      <div className="flex flex-col w-full md:w-4/5 mb-12 gap-12">
        <PreviewSection title={SOCIAL_DANCES} events={events} />
        {/* <PreviewSection title={PREVIOUS_FLYERS} events={events} /> */}
      </div>
    </>
  );
}
