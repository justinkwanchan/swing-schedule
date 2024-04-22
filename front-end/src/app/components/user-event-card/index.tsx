import { CloseOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

export default function UserEventCard({
  event: { eventName, startDateTime },
}: {
  event: EventFromDB;
}) {
  const date = dayjs(startDateTime);
  const month = date.format('MMM').toUpperCase();
  const day = date.format('D');

  return (
    <div className="flex items-center gap-4 w-3/4 bg-[#35383E1A] rounded-xl p-3">
      <div className="bg-[#35383E70] rounded-md leading-[0] p-1">
        <CloseOutlined style={{ color: '#35383E', fontSize: '12px' }} />
      </div>
      <div className="flex flex-col justify-center items-center shrink-0 w-9 h-9 bg-[#D29CA4] rounded">
        <p className="text-xs">{month}</p>
        <p className="text-sm font-bold">{day}</p>
      </div>
      <p className="grow leading-5">{eventName}</p>
    </div>
  );
}
