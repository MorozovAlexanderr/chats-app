import classNames from 'classnames';

type MessageProps = {
  text: string;
  me?: boolean;
};

const Message = ({ text, me }: MessageProps) => {
  return (
    <div
      className={classNames(
        'w-fit max-w-[450px] rounded-r-xl rounded-t-xl border-t bg-accent p-3',
        { 'self-end rounded-l-xl rounded-br-none bg-secondary': me }
      )}
    >
      <div className="flex justify-between gap-4">
        <p className="text-xs text-neutral">AUTHOR</p>
        <p className="text-xs text-white">12:00</p>
      </div>
      <p className="text-sm font-light text-white">{text}</p>
    </div>
  );
};

export default Message;
