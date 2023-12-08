import PageTitleSection from '@/app/components/page-title-section';
import DanceEventPreviewCard from '../components/home/dance-event-preview-card';

export default function Events() {
  const tempEvent = {
    id: 'cats78',
    image: 'image',
    datetime: 'FRI OCT 16 @ 7:30PM',
    title: "Cat's Corner Weekly Dance",
    organizer: "Cat's Corner",
    location: 'Polish White Eagle Society',
    address: '1956 Rue Frontenac, Montréal, QC H2K 2Z1',
  };

  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection title="Upcoming" />

      <div className="flex flex-wrap w-4/5 mb-12 gap-y-12 -ml-8">
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
        <DanceEventPreviewCard event={tempEvent} />
      </div>
    </div>
  );
}
