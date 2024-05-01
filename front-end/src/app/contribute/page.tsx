import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

import PageTitleSection from '@/app/components/page-title-section';
import danceDude from 'public/dance-dude.svg';

export const metadata: Metadata = {
  title: 'Contribute',
  description: 'How to begin contributing new events',
};

export default function Contribute() {
  const pageDescription =
    "Want to add your event to the list? Check out how to contribute below and be part of the fun - it's easy to share the swing dance excitement with our community!";

  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection
        title="How to Contribute"
        description={pageDescription}
      />

      <div className="w-11/12">
        <div className="flex gap-8 mb-16">
          <div className="flex flex-col gap-12 md:w-1/2">
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-medium">Step 1: Make an account</h2>
              <p className="text-sub-text-grey">
                Are you a swing dance organization looking to promote and
                include others in your scene? Create an account to recieve event
                creation access.
              </p>
              <Image
                src={danceDude}
                alt={'Dancing Dude'}
                className="self-center md:hidden w-4/5"
              />
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4">
                Step 2: Create an event
              </h2>
              <p className="text-sub-text-grey mb-6">
                Not just any event... a swing dance event. See below for
                requirements!
              </p>
              <ul className="flex flex-col md:flex-row flex-wrap justify-between gap-y-8">
                <li className="w-1/2">Ipsum</li>
                <li className="w-1/2">Ipsum</li>
                <li className="w-1/2">Ipsum</li>
                <li className="w-1/2">Ipsum</li>
                <li className="w-1/2">Ipsum</li>
                <li className="w-1/2">Ipsum</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-6">
                Step 3: Manage your events
              </h2>
              <ul className="flex flex-col gap-8">
                <li>Create a repeating event</li>
                <li>Duplicate an existing event</li>
              </ul>
            </div>
          </div>

          <Image
            src={danceDude}
            alt={'Dancing Dude'}
            className="hidden md:block w-5/12"
          />
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-medium mr-12">
            Ready to create your event?
          </h2>
          <Link href="">
            <button className="font-bold bg-[#BDFFF3] w-max px-8 py-4 rounded-2xl shadow-[4px_6px_8px_0_rgba(0,0,0,0.25)]">
              Create Event
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
