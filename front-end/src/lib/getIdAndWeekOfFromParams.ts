import dayjs from 'dayjs';
import isoWeek from 'dayjs/plugin/isoWeek';
import { getEvent } from './actions';
dayjs.extend(isoWeek);

export default async function getEventFromParams(eventId: string) {
  const [id, rawWeekOf] = eventId.split('%26');
  const weekOf = dayjs(rawWeekOf).isoWeekday(1).startOf('day').toISOString();

  return getEvent(id, weekOf);
}
