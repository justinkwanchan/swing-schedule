import MontrealIcon from '../svg/MontrealIcon';
import FooterButton from './FooterButton';
import { BUG_REPORT_BUTTON, SOCIAL_MEDIA_BUTTON } from '@/lib/constants';

export default function Footer() {
  return (
    <section className="flex justify-between items-center w-full h-44 px-[7%] bg-[#484849] text-white">
      <MontrealIcon color={'white'} size={90} />
      <div className="flex flex-col gap-6">
        <FooterButton buttonType={BUG_REPORT_BUTTON} />
        <FooterButton buttonType={SOCIAL_MEDIA_BUTTON} />
      </div>
    </section>
  );
}
