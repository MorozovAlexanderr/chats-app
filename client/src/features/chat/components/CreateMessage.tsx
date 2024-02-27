import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { Form } from '@/components/Form';

type CreateMessageProps = {
  onSubmit: (content: string) => void;
};

const CreateMessage = ({ onSubmit }: CreateMessageProps) => {
  return (
    <Form<{ content: string }>
      onSubmit={(data) => onSubmit(data.content)}
      className="flex h-14 items-center border-t border-gray-300"
    >
      {({ register }) => (
        <>
          <input
            {...register('content')}
            type="content"
            maxLength={500}
            className="h-full w-full pr-3 focus:outline-none"
            placeholder="Type your message..."
          />
          <button type="submit">
            <PaperAirplaneIcon className="w-6 text-gray-400 hover:text-accent" />
          </button>
        </>
      )}
    </Form>
  );
};

export default CreateMessage;
