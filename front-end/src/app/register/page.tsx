import Image from 'next/image';
import alyssa from 'public/Alyssa.png';

export default function Register() {
  return (
    <div className="flex h-[calc(100svh-238px)] w-full bg-dark-grey">
      <div className="flex gap-8 bg-white w-11/12 h-[95%] rounded-xl m-auto p-6">
        <div className="hidden md:flex w-1/2">
          <Image
            src={alyssa}
            alt={'Alyssa dancing'}
            className="rounded-xl w-auto h-auto max-h-full m-auto"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2">
          <h1 className="text-4xl font-medium self-center">
            Create your account
          </h1>
        </div>
      </div>
    </div>
  );
}
