import Image from 'next/image';
import splotch from 'public/splotch-home.svg';
import Flyer from '../../flyer';

export default function HomeTitleSection() {
  return (
    <section className="flex flex-col md:flex-row w-full mb-12">
      <div className="bg-light-grey relative md:h-auto md:w-2/5 2xl:w-1/3">
        <Image
          src={splotch}
          alt={'This Week in Montreal'}
          className="-mt-16 w-[75%] mx-auto md:absolute md:z-10 md:top-8 md:left-8 md:translate-x-0 md:mt-0 md:w-[100%]"
        />
        <p className="my-4 mx-14 md:mt-[42vw] xl:mt-[40vw] xl:text-lg 2xl:mt-[34vw]">
          Your go-to guide for swing dance socials in Montreal! Explore upcoming
          events and connect with the local swing dance community.
        </p>
      </div>
      <Flyer />
    </section>
  );
}
