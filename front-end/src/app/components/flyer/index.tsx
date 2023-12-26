export default function Flyer() {
  const danceData = [
    {
      id: 1,
      day: 'MON',
      title: 'Swing Lapin Lundi',
      description:
        '8:15pm class, 9pm Social @ La Cenne, 7755 St Laurent Blvd Suite 300',
    },
    {
      id: 2,
      day: 'TUE',
      title: 'Studio 88',
      description:
        '8:15pm class, 9pm Social @ La Cenne, 7755 St Laurent Blvd Suite 300',
    },
    {
      id: 3,
      day: 'WED',
      title: 'Hochela Swing',
      description:
        '8:15pm class, 9pm Social @ La Cenne, 7755 St Laurent Blvd Suite 300',
    },
    {
      id: 4,
      day: 'THU',
      title: 'Studio 88',
      description:
        '8:15pm class, 9pm Social @ La Cenne, 7755 St Laurent Blvd Suite 300',
    },
    {
      id: 5,
      day: 'FRI',
      title: "Cat's Corner",
      description:
        '8:15pm class, 9pm Social @ La Cenne, 7755 St Laurent Blvd Suite 300',
    },
    {
      id: 6,
      day: 'SAT',
      title: 'Le Jazz Hot',
      description:
        '8:15pm class, 9pm Social @ La Cenne, 7755 St Laurent Blvd Suite 300',
    },
    {
      id: 7,
      day: 'SUN',
      title: 'Barrelhouse Blues',
      description:
        '8:15pm class, 9pm Social @ La Cenne, 7755 St Laurent Blvd Suite 300',
    },
  ];
  return (
    <div className="grow bg-gradient-to-r from-white via-aero-blue to-white">
      <h1 className="text-center bg-dark-grey text-aero-blue text-xl font-bold py-1 sm:text-3xl 2xl:text-5xl 2xl:py-3">
        November 11 - 17
      </h1>
      <div className="flex flex-col">
        {danceData.map((event, index, arr) => (
          <div key={event.id} className="flex flex-col">
            <div className="flex h-20 sm:h-24 2xl:h-[6.5rem]">
              <h2 className="self-center w-40 font-medium text-xl ml-4 sm:text-3xl 2xl:text-4xl">
                {event.day}
              </h2>
              <div>
                <h2 className="text-red-500 font-medium mt-1 sm:text-xl 2xl:text-2xl">
                  {event.title}
                </h2>
                <p className="text-xs sm:text-base 2xl:text-xl">
                  {event.description}
                </p>
              </div>
            </div>

            {/* Styled border between flyer entries */}
            {index !== arr.length - 1 && (
              <div className="self-end w-11/12 h-[1px] bg-slate-300"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
