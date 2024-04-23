import { getEventsByUser } from '@/lib/actions';
import CreateEventOptimistic from '../components/create-event-optimistic';

export default async function CreateEvent() {
  const events = await getEventsByUser();

  return (
    <main className="flex justify-center">
      <CreateEventOptimistic events={events} />
    </main>
  );
}
