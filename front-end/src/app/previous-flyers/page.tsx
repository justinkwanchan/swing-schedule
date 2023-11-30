import PreviousFlyerCard from '../components/home/previous-flyers-section/previous-flyer-card';
import PageTitleSection from '../components/page-title-section';
import splotch from 'public/splotch-home.svg';

export default function PreviousFlyers() {
  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection splotch={splotch} />

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
