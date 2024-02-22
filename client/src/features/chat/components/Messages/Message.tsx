import classNames from 'classnames';
import { Message as Msg } from '../../types';
import { useAuth } from '@/hooks/useAuth';

type MessageProps = {
  message: Msg;
};

const Message = ({ message }: MessageProps) => {
  const { user } = useAuth();
  const isSentByAuthUser = user?._id === message.creator._id;

  return (
    <div
      className={classNames(
        'w-fit max-w-[450px] rounded-r-xl rounded-t-xl border-t bg-accent p-3',
        {
          'self-end rounded-l-xl rounded-br-none bg-secondary':
            isSentByAuthUser,
        }
      )}
    >
      <div className="flex justify-between gap-4">
        <p className="text-xs text-neutral">{message.creator.name}</p>
        <p className="text-xs text-white">{message.createdAt}</p>
      </div>
      <p className="text-sm font-light text-white">{message.content}</p>
    </div>
  );
};

export default Message;
