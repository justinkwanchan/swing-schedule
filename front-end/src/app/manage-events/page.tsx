import { getEventsByUser } from '@/lib/actions';
import ManageEventOptimistic from '../components/manage-events-optimistic';

export default async function ManageEvents() {
  const events = await getEventsByUser();

  return (
    <main className="flex justify-center">
      <ManageEventOptimistic events={events} />
    </main>
  );
}
