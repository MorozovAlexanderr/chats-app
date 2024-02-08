import { RoomCard } from '@/features/chat';

const RoomsList = () => {
  return (
    <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(530px,1fr))] gap-4">
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
      <RoomCard />
    </div>
  );
};

export default RoomsList;
