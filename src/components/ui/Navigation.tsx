import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import { RootState } from '../../store/store.ts';

export default function Navigation() {
  const { authenticated } = useSelector((state: RootState) => state.auth);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          Crypto Tracker
        </Link>
        <nav>
          <ul className="flex gap-6 text-lg">
            {/* Always Show Home */}
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>

            {/* Show Register and Login if NOT authenticated */}
            {!authenticated && (
              <>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-blue-400 transition"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-blue-400 transition">
                    Login
                  </Link>
                </li>
              </>
            )}

            {/* Show Dashboard and Logout if authenticated */}
            {authenticated && (
              <>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-blue-400 transition"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <LogoutButton /> {/* Logout Button */}
                </li>
                //TODO make the logout button fit to the navbar
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
