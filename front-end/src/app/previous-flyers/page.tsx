import PreviousFlyerCard from '../components/home/previous-flyer-card';
import PageTitleSection from '../components/page-title-section';

export default function PreviousFlyers() {
  const pageDescription =
    'Trying to recall a dance? Explore our archive of past social dances in Montreal for location details and memories.';

  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection title="Previous Flyers" description={pageDescription} />

      <div className="flex flex-wrap -ml-8 gap-y-8 w-4/5">
        <PreviousFlyerCard dates="OCT 8 - OCT 14" />
        <PreviousFlyerCard dates="OCT 1 - OCT 7" />
        <PreviousFlyerCard dates="OCT 24 - OCT 30" />
        <PreviousFlyerCard dates="OCT 8 - OCT 14" />
        <PreviousFlyerCard dates="OCT 1 - OCT 7" />
        <PreviousFlyerCard dates="OCT 24 - OCT 30" />
        <PreviousFlyerCard dates="OCT 8 - OCT 14" />
        <PreviousFlyerCard dates="OCT 1 - OCT 7" />
        <PreviousFlyerCard dates="OCT 24 - OCT 30" />
      </div>
    </div>
  );
}
