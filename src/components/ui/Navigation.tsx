import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import supabase from '../../utils/supabase';

export default function Navigation() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setAuthenticated(!!session); // Set authenticated state
    };

    checkSession();

    // Listen for auth state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      checkSession();
    });

    // Cleanup subscription on unmount
    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          CryptoDashboard app
        </Link>
        <nav className="md:flex gap-8 text-lg hidden ">
          <ul className="flex gap-6">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/register" className="hover:text-blue-400 transition">
                Register
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-400 transition">
                Login
              </Link>
            </li>
            {authenticated && (
              <li>
                <Link
                  to="/dashboard"
                  className="hover:text-blue-400 transition"
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
