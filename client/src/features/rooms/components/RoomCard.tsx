import { useNavigate } from 'react-router-dom';

type RoomCardProps = {
  id: string;
  title: string;
};

const RoomCard = ({ id, title }: RoomCardProps) => {
  const navigate = useNavigate();

  const handleRoomClick = () => {
    navigate(`/rooms/${id}`);
  };

  return (
    <div
      onClick={handleRoomClick}
      className="radio line-clamp-3 h-40 cursor-pointer rounded-2xl border-4 border-accent bg-white p-6 text-accent transition hover:bg-accent hover:text-white"
    >
      <p className="line-clamp-3 text-2xl font-bold">{title}</p>
    </div>
  );
};

export default RoomCard;
