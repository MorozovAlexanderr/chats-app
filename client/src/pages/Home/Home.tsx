import { useLogout } from '@/features/auth';
import Button from '@/components/Elements/Button';

const Home = () => {
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation();
  };

  return (
    <div>
      home page
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Home;
