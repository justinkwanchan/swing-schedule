export default function CreateEvent() {
  return (
    <main className="flex justify-center">
      <aside className="flex flex-col gap-4 bg-[#CDCFD0] p-8">
        <h1 className="text-2xl font-medium text-center">Posted Events</h1>
        <p className="text-sm max-w-xs leading-7">
          Below are your upcoming active events. Manage your events below or
          create a new listing.
        </p>
        <div>Created Events Placeholder</div>
      </aside>
      <section className="flex grow flex-col max-w-[1034px] gap-4 bg-[#484949]">
        <h1 className="text-2xl font-medium text-center text-white">
          Create Event
        </h1>
        <div className="h-96 bg-white"></div>
        <form action="submit"></form>
      </section>
    </main>
  );
}
