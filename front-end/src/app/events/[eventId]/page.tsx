import PageTitleSection from '@/app/components/page-title-section';
import Link from 'next/link';
import Image from 'next/image';
import splotch from 'public/splotch-event.svg';
import danceDude from 'public/dance-dude.svg';

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
      <PageTitleSection splotch={splotch} />

      <div className="w-11/12">
        <div className="flex relative md:static justify-between border-b border-black pb-8">
          <div>
            <div>MON, NOV 4 FROM 8:15PM - 11:30PM</div>
            <div>La Cenne</div>
          </div>
          <div className="self-center md:self-auto">
            <Link
              href="https://www.facebook.com/swinglapinlundi"
              target="_blank"
            >
              <button className="absolute right-0 -top-20 bg-[#BDFFF3] px-8 py-4 rounded-[20px] shadow-[4px_6px_8px_0_rgba(0,0,0,0.25)] md:static">
                Visit Website
              </button>
            </Link>
            <div>$20 CAD</div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h1>About the Event</h1>
            <p>
              Knights of Ni, we are but simple travelers who seek the enchanter
              who lives beyond these woods. I am your king. Well, she turned me
              into a newt. Listen. Strange women lying in ponds distributing
              swords is no basis for a system of government. Supreme executive
              power derives from a mandate from the masses, not from some
              farcical aquatic ceremony.
            </p>
            <p>
              Knights of Ni, we are but simple travelers who seek the enchanter
              who lives beyond these woods. I am your king. Well, she turned me
              into a newt. Listen. Strange women lying in ponds distributing
              swords is no basis for a system of government. Supreme executive
              power derives from a mandate from the masses, not from some
              farcical aquatic ceremony.
            </p>
          </div>
          <Image src={danceDude} alt={'Dancing Dude'} />
        </div>
      </div>
    </div>
  );
}
