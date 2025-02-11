import useFetchUserData from '../hooks/fetchUser';
import LogoutButton from '../components/auth/LogoutButton';

function Dashboard() {
  const user = useFetchUserData();
  return (
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen text-black">
      <h1 className="text-2xl font-bold mb-4">Dashboard Page!</h1>

      {user && (
        <div className="flex flex-col items-center">
          <img
            src={user.user_metadata?.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-gray-500 shadow-md"
          />
          <p className="mt-2 text-lg font-medium">{user.email}</p>
        </div>
      )}

      <LogoutButton />
    </div>
  );
}

// # TODO Make own component for avatar image and use it navigation bar when user is logged in

export default Dashboard;
