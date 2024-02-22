import { RoomMember } from '../../types';
import Member from './Member';
import Loader from '@/components/Loader';

type MembersListProps = {
  loading: boolean;
  members: RoomMember[] | undefined;
};

const MembersList = ({ loading, members }: MembersListProps) => {
  return (
    <div className="flex w-72 flex-col rounded-3xl border border-gray-300 p-8">
      <p className="text text-sm text-gray-400">
        {loading ? (
          <Loader className="w-24" />
        ) : (
          <>
            <span className="font-bold">{members?.length}</span> participants
          </>
        )}
      </p>
      <div className="mt-6 flex flex-col gap-3 overflow-y-auto pr-2">
        {loading &&
          Array.from({ length: 5 }).map((_, idx) => (
            <Loader key={idx} className="h-10 rounded-xl" />
          ))}
        {members?.map((member) => (
          <Member key={member.id} name={member.name} />
        ))}
      </div>
    </div>
  );
};

export default MembersList;
