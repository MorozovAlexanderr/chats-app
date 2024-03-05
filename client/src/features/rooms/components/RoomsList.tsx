import React from 'react';
import { useRooms } from '../api/getRooms';
import RoomCard from './RoomCard';
import { useDetectScrollEnd } from '@/hooks/useDetectScrollEnd';
import Spinner from '@/components/Elements/Spinner';
import Loader from '@/components/Loader';

const RoomsList = () => {
  const { data, isFetchingNextPage, fetchNextPage, status } = useRooms();
  const { ref } = useDetectScrollEnd(fetchNextPage);

  if (status === 'pending') {
    return <Loader count={3} className="mb-4 h-40 w-full rounded-2xl" />;
  }

  return (
    <>
      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(530px,1fr))] gap-4">
        {data?.pages.map((group, idx) => (
          <React.Fragment key={idx}>
            {group.docs.map((room) => (
              <RoomCard key={room._id} id={room._id} title={room.title} />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div ref={ref} className="my-8 flex justify-center">
        {isFetchingNextPage && <Spinner size="lg" />}
      </div>
    </>
  );
};

export default RoomsList;
