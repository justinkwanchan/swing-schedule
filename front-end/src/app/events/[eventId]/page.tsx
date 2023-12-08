import Link from 'next/link';
import Image from 'next/image';

import PageTitleSection from '@/app/components/page-title-section';
import danceDude from 'public/dance-dude.svg';
import locationPin from 'public/location-pin.svg';

// export function generateStaticParams() {
//     const posts = getSortedPostsData()

//     return posts.map((post) => ({
//         postId: post.id
//     }))
// }

// export function generateMetadata({ params }: { params: { postId: string } }) {

//     const posts = getSortedPostsData()
//     const { postId } = params

//     const post = posts.find(post => post.id === postId)

//     if (!post) {
//         return {
//             title: 'Post Not Found'
//         }
//     }

//     return {
//         title: post.title,
//     }
// }

export default async function Event({
  params,
}: {
  params: { eventId: string };
}) {
  const { eventId } = params;

  // if (!events.find((event) => event.id === eventId)) notFound();

  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection title="Swing Lapin Weekly Dance" />

      <div className="w-11/12">
        <div className="flex relative md:static justify-between border-b border-black pb-8 mb-12">
          <div className="flex flex-col justify-between">
            <h2 className="text-4xl text-red-500">
              MON, NOV 4 FROM 8:15PM - 11:30PM
            </h2>
            <div className="flex items-center text-3xl">
              <Image
                src={locationPin}
                alt={'Locatin Pin'}
                className="mr-3 h-8 w-max"
              />
              <h3>La Cenne</h3>
            </div>
          </div>
          <div className="self-center md:self-auto">
            <Link
              href="https://www.facebook.com/swinglapinlundi"
              target="_blank"
            >
              <button className="absolute right-0 -top-20 font-bold bg-[#BDFFF3] mb-4 px-8 py-4 rounded-2xl shadow-[4px_6px_8px_0_rgba(0,0,0,0.25)] md:static">
                Visit Website
              </button>
            </Link>
            <div className="text-right text-3xl">$20 CAD</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="w-[55%] pr-16">
            <h1 className="text-5xl mb-16">About the Event</h1>
            <p className="text-xl">
              Knights of Ni, we are but simple travelers who seek the enchanter
              who lives beyond these woods. I am your king. Well, she turned me
              into a newt. Listen. Strange women lying in ponds distributing
              swords is no basis for a system of government. Supreme executive
              power derives from a mandate from the masses, not from some
              farcical aquatic ceremony.
              <br />
              <br />
              Knights of Ni, we are but simple travelers who seek the enchanter
              who lives beyond these woods. I am your king. Well, she turned me
              into a newt. Listen. Strange women lying in ponds distributing
              swords is no basis for a system of government. Supreme executive
              power derives from a mandate from the masses, not from some
              farcical aquatic ceremony.
            </p>
          </div>
          <Image src={danceDude} alt={'Dancing Dude'} className="w-[45%]" />
        </div>
      </div>
    </div>
  );
}
