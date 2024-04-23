import { cancelEvent } from '@/lib/actions';
import { CloseOutlined } from '@ant-design/icons';

type Props = {
  event: EventCard;
  setOptimisticEvent: (action: { type: string; newEvent: EventCard }) => void;
};

export default function DeleteEventButton({
  event,
  setOptimisticEvent,
}: Props) {
  return (
    <form
      action={() => {
        setOptimisticEvent({ type: 'DELETE', newEvent: event });
        cancelEvent(event.pk, event.weekOf);
      }}
    >
      <button
        className="bg-[#35383E70] rounded-md leading-[0] p-1"
        type="submit"
      >
        <CloseOutlined style={{ color: '#35383E', fontSize: '12px' }} />
      </button>
    </form>
  );
}
