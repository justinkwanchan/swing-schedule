import PageTitleSection from '../components/page-title-section';
import PreviousFlyerCard from '../components/home/previous-flyer-card';

export default function PreviousFlyers() {
  const pageDescription =
    'Trying to recall a dance? Explore our archive of past social dances in Montreal for location details and memories.';

  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection title="Previous Flyers" description={pageDescription} />

      {/* Using grid instead of flex because it allows semi-filled row to align left instead of center
       ** Grid column widths must match the card widths in /previous-flyer-card/index.tsx */}
      <div
        className={`grid grid-cols-[repeat(auto-fit,_176px)] justify-center gap-x-4 w-11/12 md:grid-cols-[repeat(auto-fit,_240px)] md:gap-8 md:w-4/5`}
      >
        <PreviousFlyerCard isCarouseled={false} dates="OCT 8 - OCT 14" />
        <PreviousFlyerCard isCarouseled={false} dates="OCT 1 - OCT 7" />
        <PreviousFlyerCard isCarouseled={false} dates="OCT 24 - OCT 30" />
        <PreviousFlyerCard isCarouseled={false} dates="OCT 8 - OCT 14" />
        <PreviousFlyerCard isCarouseled={false} dates="OCT 1 - OCT 7" />
        <PreviousFlyerCard isCarouseled={false} dates="OCT 24 - OCT 30" />
        <PreviousFlyerCard isCarouseled={false} dates="OCT 8 - OCT 14" />
        <PreviousFlyerCard isCarouseled={false} dates="OCT 1 - OCT 7" />
        <PreviousFlyerCard isCarouseled={false} dates="OCT 24 - OCT 30" />
      </div>
    </div>
  );
}
