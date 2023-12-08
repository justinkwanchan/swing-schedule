import PreviewSection from './preview-section';
import PageTitleSection from '../page-title-section';
import splotch from 'public/splotch-home.svg';
import { SOCIAL_DANCES, PREVIOUS_FLYERS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <PageTitleSection splotch={splotch} />

      <div className="flex flex-col w-4/5 mb-12 gap-12">
        <PreviewSection title={SOCIAL_DANCES} />
        <PreviewSection title={PREVIOUS_FLYERS} />
      </div>
    </>
  );
}
