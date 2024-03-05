import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@/components/Elements/Button';
import Dialog, { DialogPanel, DialogTitle } from '@/components/Elements/Dialog';
import { Form, InputField } from '@/components/Form';
import { useCreateRoom } from '@/features/rooms';

const validationSchema = yup.object({
  title: yup.string().required('Required'),
});

type RoomValues = {
  title: string;
};

const CreateRoom = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { mutate: createRoomMutation, isPending } = useCreateRoom();

  const handleCreateRoom = async (values: RoomValues) => {
    createRoomMutation(values);
  };

  const handleModalVisibility = (show: boolean) => () => {
    setIsOpenModal(show);
  };

  return (
    <>
      <Button
        className="mb-10 w-fit self-center"
        onClick={handleModalVisibility(true)}
      >
        Create room
      </Button>
      <Dialog isOpen={isOpenModal} onClose={handleModalVisibility(false)}>
        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
          <DialogTitle
            as="h3"
            className="text-center text-lg font-medium leading-6 text-gray-900"
          >
            New room
          </DialogTitle>

          <Form<RoomValues>
            onSubmit={handleCreateRoom}
            options={{ resolver: yupResolver(validationSchema) }}
          >
            {({ register, formState }) => (
              <>
                <InputField
                  label="Title"
                  error={formState.errors.title}
                  maxLength={50}
                  registration={register('title')}
                />
                <Button
                  type="submit"
                  className="mt-4 w-full"
                  isLoading={isPending}
                >
                  Create
                </Button>
              </>
            )}
          </Form>
        </DialogPanel>
      </Dialog>
    </>
  );
};

export default CreateRoom;
