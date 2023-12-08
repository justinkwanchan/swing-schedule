import Image from 'next/image';
import splotch from 'public/splotch.svg';

type Props = {
  title: string;
};

export default function PageTitleSection({ title }: Props) {
  return (
    <section className="flex flex-col md:flex-row h-[calc(80svh-62px)] w-full mb-12">
      <div className="flex relative bg-light-grey h-[70vw] md:h-auto md:w-3/5">
        <Image
          src={splotch}
          alt={'Splotchy Frame'}
          className="m-auto w-[75%] md:w-4/5 h-[90%]"
        />
        <h1 className="text-8xl text-center font-bold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[33%] w-4/5">
          {title}
        </h1>
      </div>

      <div className="bg-dark-grey h-[calc(60svh-64px)] md:h-auto grow"></div>
    </section>
  );
}
