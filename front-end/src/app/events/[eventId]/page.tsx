import Link from 'next/link';
import Image from 'next/image';

import PageTitleSection from '@/app/components/page-title-section';
import danceDude from 'public/dance-dude.svg';
import locationPin from 'public/location-pin.svg';

import Map from '@/app/components/map';
import getCoords from '@/lib/getCoords';

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

  const eventInfo = {
    danceName: 'Swing Lapin Weekly Dance',
    venue: 'La Cenne',
    street: '7755 St Laurent Blvd',
    suite: 'Suite 300',
    city: 'Montreal',
    postalCode: 'H2R 1X1',
    details: [
      'Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods. I am your king. Well, she turned me into a newt. Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.',
      'Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods. I am your king. Well, she turned me into a newt. Listen. Strange women lying in ponds distributing swords is no basis for a system of government. Supreme executive power derives from a mandate from the masses, not from some farcical aquatic ceremony.',
    ],
    price: 20,
    dateTime: 'MON, NOV 4 FROM 8:15PM - 11:30PM',
    URL: 'https://www.facebook.com/swinglapinlundi',
  };

  const {
    danceName,
    venue,
    street,
    suite,
    city,
    postalCode,
    details,
    price,
    dateTime,
    URL,
  } = eventInfo;

  const addressString = `${street}${
    suite ? ' ' + suite : ''
  }, ${city}, Quebec ${postalCode}`;

  const coordinates = await getCoords(street, city);

  return (
    <div className="flex flex-col items-center mb-12">
      <PageTitleSection title={danceName} image="placeholder text" />

      <div className="flex flex-col w-11/12 gap-12">
        <div className="flex relative md:static justify-between border-b border-black pb-8">
          <div className="flex flex-col justify-between">
            <h2 className="text-4xl text-red-500">{dateTime}</h2>
            <div className="flex items-center text-3xl">
              <Image
                src={locationPin}
                alt={'Location Pin'}
                className="mr-3 h-8 w-max"
              />
              <h3>{venue}</h3>
            </div>
          </div>
          <div className="self-center md:self-auto">
            <Link href={URL} target="_blank">
              <button className="absolute right-0 -top-20 font-bold bg-[#BDFFF3] w-max mb-4 px-8 py-4 rounded-2xl shadow-[4px_6px_8px_0_rgba(0,0,0,0.25)] z-30 md:static">
                Visit Website
              </button>
            </Link>
            <div className="text-right text-3xl">{`$${price} CAD`}</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-[55%] pr-16">
            <h1 className="text-5xl mb-16">About the Event</h1>
            <div className="flex flex-col gap-8">
              {details.map((detail, index) => (
                <p key={index} className="text-xl">
                  {detail}
                </p>
              ))}
            </div>
          </div>
          <Image src={danceDude} alt={'Dancing Dude'} className="md:w-[45%]" />
        </div>

        {/* Alter map height in src/app/components/map/Map.tsx */}
        <div className="flex flex-col md:flex-row gap-8 md:bg-light-grey rounded-lg p-6">
          <div className="md:w-1/4">
            <h2 className="text-4xl font-medium mb-4">Location</h2>
            <p className="text-3xl mb-12">{venue}</p>
            <p className="text-3xl">{addressString}</p>
          </div>
          <div className="self-center w-full h-max">
            <Map coordinates={coordinates} />
          </div>
        </div>
      </div>
    </div>
  );
}
