import Link from 'next/link';
import Image from 'next/image';

import PageTitleSection from '@/app/components/page-title-section';
import danceDude from 'public/dance-dude.svg';

export default function Contribute() {
  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection title="How to Contribute" />

      <div className="w-11/12">
        <div className="flex">
          <div className="flex flex-col">
            <h2 className="text-2xl">Step 1: Make an account</h2>
            <p>
              Are you a swing dance organization looking to promote and include
              others in your scene? Create an account to recieve event creation
              access.
            </p>
            <h2 className="text-2xl">Step 2: Create an event</h2>
            <p>
              Not just any event... a swing dance event. See below for
              requirements!
            </p>
            <ul>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
              <li>Ipsum</li>
            </ul>
            <h2 className="text-2xl">Step 3: Manage your events</h2>
            <ul>
              <li>Create a repeating event</li>
              <li>Duplicate an existing event</li>
            </ul>
          </div>

          <Image src={danceDude} alt={'Dancing Dude'} className="w-[45%]" />
        </div>

        <div className="flex">
          <h2 className="mr-12">Ready to create your event?</h2>
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
