import Image from 'next/image';
import splotch from 'public/splotch.svg';

type Props = {
  title: string;
  description: string;
};

export default function PageTitleSection({ title, description }: Props) {
  return (
    <section className="flex flex-col-reverse md:flex-row w-full mb-12">
      <div className="flex relative bg-light-grey h-[70vw] max-h-[40svh] md:h-auto md:max-h-[65svh] md:flex-[0_0_60%] 2xl:flex-[0_0_50%]">
        <Image
          src={splotch}
          alt={'Splotchy Frame'}
          className="absolute -top-5 left-[5%] w-11/12 h-[115%] z-10 md:static md:m-auto md:w-4/5 md:h-[90%]"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[33%] w-4/5 text-7xl text-center font-bold z-20 sm:text-8xl md:text-7xl lg:text-8xl xl:text-9xl">
          {title}
        </h1>
      </div>

      <div className="flex bg-dark-grey md:grow md:h-auto">
        <h2 className="text-white tracking-widest max-w-md m-auto py-6 px-8 md:py-12 lg:text-xl lg:max-w-md xl:text-2xl xl:max-w-lg">
          {description}
        </h2>
      </div>
    </section>
  );
}
