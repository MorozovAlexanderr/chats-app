import { UserCircleIcon } from '@heroicons/react/24/solid';

type MemberProps = {
  name: string;
};

const Member = ({ name }: MemberProps) => {
  return (
    <div className="flex items-center border-b border-gray-300 pb-3 last:border-b-0 last:pb-0">
      <UserCircleIcon className="mr-3 h-10 w-10 text-gray-300" />
      <div className="flex-1 text-sm">{name}</div>
    </div>
  );
};

export default Member;
