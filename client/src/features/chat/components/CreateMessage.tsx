import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { Form } from '@/components/Form';

const CreateMessage = () => {
  const handleSubmit = () => {
    console.log('sumbitted');
  };

  return (
    <Form<{
      text: string;
    }>
      onSubmit={handleSubmit}
      className="flex h-14 items-center border-t border-gray-300"
    >
      {({ register }) => (
        <>
          <input
            {...register('text')}
            type="text"
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
