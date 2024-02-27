import { useParams } from 'react-router-dom';
import {
  ChatHeader,
  CreateMessage,
  MembersList,
  Messages,
  useChatSocket,
} from '@/features/chat';
import { useRoom } from '@/features/chat';

const ChatRoom = () => {
  const { roomId = '' } = useParams();
  const { data, isLoading } = useRoom(roomId);

  const { handleSendMessage } = useChatSocket(roomId);

  return (
    <div className="flex w-full pb-10 md:h-[600px] lg:h-[700px] xl:h-[800px]">
      <MembersList members={data?.members} loading={isLoading} />
      <div className="ml-5 flex flex-1 flex-col">
        <ChatHeader title={data?.title} loading={isLoading} />
        <Messages />
        <CreateMessage onSubmit={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatRoom;
