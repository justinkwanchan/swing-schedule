import Link from 'next/link';
import { BUG_REPORT_BUTTON, SOCIAL_MEDIA_BUTTON } from '@/lib/constants';

type Props = {
  buttonType: typeof BUG_REPORT_BUTTON | typeof SOCIAL_MEDIA_BUTTON;
};

export default function FooterButton({ buttonType }: Props) {
  return (
    <Link href="">
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-lg bg-[#EFF1F3] mr-4"></div>
        <div className="hidden sm:flex items-center">
          <div className="flex flex-col justify-center gap-1 w-52 font-light">
            <p className="text-xs">
              {buttonType === BUG_REPORT_BUTTON
                ? 'Bug report'
                : 'Share the app'}
            </p>
            <p className="text-[0.625rem]">
              {buttonType === BUG_REPORT_BUTTON
                ? 'Report bugs very easy'
                : 'Share on social media networks'}
            </p>
          </div>
          <div className="w-4 h-4 rounded bg-[#EFF1F3]"></div>
        </div>
      </div>
    </Link>
  );
}
