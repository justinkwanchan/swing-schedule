type Props = {
  title: string;
};

export default function DanceSchoolCard({ title }: Props) {
  return (
    <div className="flex flex-[0_0_33.333333%] pl-8">
      <div className="bg-gray-100 w-60 h-24 rounded-lg mr-4"></div>
      <div className="flex flex-col justify-between">
        <h2 className="font-bold">{title}</h2>
        <p className="text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
