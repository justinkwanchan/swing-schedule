import Image from 'next/image';
import splotch from 'public/splotch.svg';
import getSplotchTitleFontSizes from '@/lib/getSplotchTitleFontSizes';

type Props = {
  title: string;
  description?: string;
  image?: string;
};

export default function PageTitleSection({ title, description, image }: Props) {
  const fontSizes = getSplotchTitleFontSizes(title);

  const flexOrder = {
    titleFirst: 'flex-col',
    titleSecond: 'flex-col-reverse',
  };

  return (
    <section
      className={`flex ${
        description ? flexOrder['titleSecond'] : flexOrder['titleFirst']
      } md:flex-row w-full mb-12`}
    >
      <div className="flex relative bg-light-grey h-[70vw] max-h-[40svh] md:h-auto md:max-h-[65svh] md:flex-[0_0_60%] 2xl:flex-[0_0_50%]">
        <Image
          src={splotch}
          alt={'Splotchy Frame'}
          className="absolute -top-5 left-[5%] w-11/12 h-[115%] z-10 md:static md:m-auto md:w-4/5 md:h-[90%]"
        />
        <h1
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-11/12 text-center font-bold z-20 ${fontSizes}`}
        >
          {title}
        </h1>
      </div>

      {description && (
        <div className="flex bg-dark-grey md:grow md:h-auto">
          <h2 className="text-white tracking-widest max-w-md m-auto py-6 px-8 md:py-12 lg:text-xl lg:max-w-md xl:text-2xl xl:max-w-lg">
            {description}
          </h2>
        </div>
      )}

      {image && (
        <div className="flex bg-dark-grey h-[60vw] md:grow md:h-auto"></div>
      )}
    </section>
  );
}

/* There seems to be a bug with Next.Js whereby importing getSplotchTitleFontSizes from lib applies the TailWind classes to
 * the element in the DOM, but then the classes are not expressed either in the ruleset or in the window. For some reason
 * this bug does not occur if the function appears in this file even if commented out. Both in dev and in production build. */

// function getSplotchTitleFontSizes(title: string) {
//   const fontSize = {
//     short: 'text-7xl sm:text-8xl lg:text-9xl',
//     medium: 'text-6xl sm:text-7xl lg:text-8xl',
//     long: 'leading-none text-[54px] sm:text-[66px] md:text-6xl lg:text-7xl xl:text-8xl',
//     xLong: 'text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl',
//   };

//   const longestWord = Math.max(...title.split(' ').map((word) => word.length));

//   return title.length > 30
//     ? fontSize['xLong']
//     : title.length > 20
//     ? fontSize['long']
//     : title.length > 10 || longestWord > 5
//     ? fontSize['medium']
//     : fontSize['short'];
// }
