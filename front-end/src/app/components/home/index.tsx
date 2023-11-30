import PreviewSection from './preview-section';
import DanceSchoolSection from './dance-school-section';
import PreviousFlyersSection from './previous-flyers-section';
import PageTitleSection from '../page-title-section';
import splotch from 'public/splotch-home.svg';

export default function Home() {
  return (
    <>
      <PageTitleSection splotch={splotch} />

      <div className="flex flex-col w-4/5 mb-12 gap-12">
        <PreviewSection title={'Upcoming Social Dances'} />
        <PreviewSection title={'Newly-Listed Events'} />
        <PreviewSection title={'Beginner Classes'} />
        <DanceSchoolSection />
        <PreviousFlyersSection />
      </div>
    </>
  );
}
