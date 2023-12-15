import Link from 'next/link';
import Image from 'next/image';

import PageTitleSection from '@/app/components/page-title-section';
import danceDude from 'public/dance-dude.svg';

export default function Contribute() {
  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection title="How to Contribute" />

      <div className="w-11/12">
        <div className="flex gap-8 mb-16">
          <div className="flex flex-col gap-12 w-1/2">
            <div>
              <h2 className="text-2xl font-medium mb-4">
                Step 1: Make an account
              </h2>
              <p className="text-sub-text-grey">
                Are you a swing dance organization looking to promote and
                include others in your scene? Create an account to recieve event
                creation access.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-medium mb-4">
                Step 2: Create an event
              </h2>
              <p className="text-sub-text-grey mb-6">
                Not just any event... a swing dance event. See below for
                requirements!
              </p>
              <ul className="flex flex-wrap justify-between gap-y-8">
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

          <Image src={danceDude} alt={'Dancing Dude'} className="w-5/12" />
        </div>

        <div className="flex items-center">
          <h2 className="text-2xl font-medium mr-12">
            Ready to create your event?
          </h2>
          <Link href="">
            <button className="font-bold bg-[#BDFFF3] px-8 py-4 rounded-2xl shadow-[4px_6px_8px_0_rgba(0,0,0,0.25)]">
              Create Event
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
