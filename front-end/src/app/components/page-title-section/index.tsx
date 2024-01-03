import Image from 'next/image';
import splotch from 'public/splotch.svg';

type Props = {
  title: string;
  description: string;
};

export default function PageTitleSection({ title, description }: Props) {
  return (
    <section className="flex flex-col md:flex-row h-[calc(80svh-62px)] w-full mb-12">
      <div className="flex relative bg-light-grey h-[70vw] md:h-auto md:w-3/5">
        <Image
          src={splotch}
          alt={'Splotchy Frame'}
          className="m-auto w-[75%] md:w-4/5 h-[90%]"
        />
        <h1 className="text-6xl text-center font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[33%] w-4/5 sm:text-7xl md:text-4xl lg:text-6xl xl:text-8xl">
          {title}
        </h1>
      </div>

      <div className="flex bg-dark-grey md:h-auto md:grow">
        <h2 className="text-white tracking-widest m-auto py-6 px-8 md:p-32">
          {description}
        </h2>
      </div>
    </section>
  );
}
