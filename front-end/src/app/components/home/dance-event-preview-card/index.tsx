import Link from 'next/link';
import Card from './Card';

type Props = {
  isCarouseled: boolean;
  event: EventDetails;
};

export default function DanceEventPreviewCard({ isCarouseled, event }: Props) {
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
      <Link href={`events/${event.id}`} className="md:hidden">
        <Card event={event} />
      </Link>

      {/* Desktop view */}
      <div className="hidden md:block">
        <Card event={event} />
      </div>
    </div>
  );
}
