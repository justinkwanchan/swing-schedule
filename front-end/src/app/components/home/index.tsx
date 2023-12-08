import HomeTitleSection from './home-title-section';
import PreviewSection from './preview-section';
import { SOCIAL_DANCES, PREVIOUS_FLYERS } from '@/lib/constants';

export default function Home() {
  return (
    <>
      <HomeTitleSection />

      <div className="flex flex-col w-4/5 mb-12 gap-12">
        <PreviewSection title={SOCIAL_DANCES} />
        <PreviewSection title={PREVIOUS_FLYERS} />
      </div>
    </>
  );
}
