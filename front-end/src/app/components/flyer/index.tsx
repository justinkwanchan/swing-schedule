import { getEventsByWeekOf } from '@/lib/actions';
import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
dayjs.extend(isoWeek);

export default async function Flyer() {
  const weekOf = dayjs().isoWeekday(1).startOf('day').format();
  const events = await getEventsByWeekOf(weekOf);
  const weekTitle = `${dayjs(weekOf).format('MMMM D')} - ${dayjs(weekOf)
    .add(6, 'day')
    .format('D')}`;

  return (
    <div className="grow bg-gradient-to-tr from-aero-blue from-10% via-white to-aero-blue to-90%">
      <h1 className="text-center bg-dark-grey text-aero-blue text-xl font-bold py-1 sm:text-3xl 2xl:text-5xl 2xl:py-3">
        {weekTitle}
      </h1>
      <div className="flex flex-col">
        {events.map((event, index, arr) => (
          <div key={event.pk + event.sk} className="flex flex-col">
            <div className="flex h-20 sm:h-24 2xl:h-[6.5rem]">
              <h2 className="self-center w-40 font-medium text-xl ml-4 sm:text-3xl 2xl:text-4xl">
                {dayjs(event.startDateTime).format('ddd').toUpperCase()}
              </h2>
              <div>
                <h2 className="text-red-500 font-medium mt-1 sm:text-xl 2xl:text-2xl">
                  {event.eventName}
                </h2>
                <p className="text-xs sm:text-base 2xl:text-xl">
                  {`${dayjs(event.startDateTime).format('h:mma')} @ ${
                    event.location
                  }`}
                </p>
              </div>
            </div>

            {/* Styled border between flyer entries */}
            {index !== arr.length - 1 && (
              <div className="self-end w-11/12 h-[1px] bg-slate-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
