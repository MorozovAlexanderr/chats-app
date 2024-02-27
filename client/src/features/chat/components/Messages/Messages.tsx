import { useParams } from 'react-router-dom';
import { useMessages } from '../../api/getMessages';
import Message from './Message';

const Messages = () => {
  const { roomId = '' } = useParams();
  const { data } = useMessages(roomId);

  return (
    <div className="no-scrollbar flex flex-1 flex-col gap-1 overflow-y-auto py-2">
      {data?.map((message) => <Message key={message._id} message={message} />)}
    </div>
  );
};

export default Messages;
