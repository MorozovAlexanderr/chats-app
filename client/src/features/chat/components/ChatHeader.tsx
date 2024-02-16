import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import Loader from '@/components/Loader';

type ChatHeaderProps = {
  title: string | undefined;
  loading: boolean;
};

const ChatHeader = ({ title, loading }: ChatHeaderProps) => {
  return (
    <div className="flex h-20 w-full items-center border-b border-gray-300">
      <Link to="/rooms" className="flex hover:drop-shadow-lg">
        {loading ? (
          <Loader className="h-8 w-80" />
        ) : (
          <>
            <ArrowLongLeftIcon className="mr-2 w-10" />
            <p className="text-3xl font-bold transition">{title}</p>
          </>
        )}
      </Link>
    </div>
  );
};

export default ChatHeader;
