import Link from 'next/link';
import Card from './Card';
import dayjs from 'dayjs';

type Props = {
  isCarouseled: boolean;
  event: EventFromDB;
};

export default function DanceEventPreviewCard({ isCarouseled, event }: Props) {
  const eventLink = `events/event?id=${event.pk.slice(6)}&weekof=${dayjs(
    event.weekOf
  ).format('YYYY-MM-DD')}`;

  return (
    /* Card widths must match the grid column widths in /events/page.tsx
     * Carouseled cards include padding of 16px for small and 32px for large */
    <div
      className={`${
        isCarouseled
          ? 'flex-[0_0_192px] pl-4 md:flex-[0_0_272px] md:pl-8'
          : 'w-44 md:w-60'
      }`}
    >
      {/* Mobile view */}
      <Link href={eventLink} className="md:hidden">
        <Card event={event} isDesktop={false} />
      </Link>

      {/* Desktop view */}
      <div className="hidden md:block">
        <Card event={event} isDesktop={true} eventLink={eventLink} />
      </div>
    </div>
  );
}
