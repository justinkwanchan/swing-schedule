import { Metadata } from 'next';
import { getEventsByUser } from '@/lib/actions';
import ManageEventOptimistic from '../components/manage-events-optimistic';

export const metadata: Metadata = {
  title: 'Manage Events',
  description: 'Add, delete, and edit your events',
};

export default async function ManageEvents() {
  const events = await getEventsByUser();

  return (
    <main className="flex justify-center">
      <ManageEventOptimistic events={events} />
    </main>
  );
}
