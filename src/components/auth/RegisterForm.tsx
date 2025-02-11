import { useState } from 'react';
import supabase from '../../utils/supabase/supabase';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../store/authSlice';

export default function RegisterForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setMessage('');

    const avatarUrl = `https://robohash.org/${encodeURIComponent(email)}.png`;

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { avatar: avatarUrl }, // Store avatar in user metadata
      },
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data.user) {
      dispatch(login()); // ✅ Update Redux state
      navigate('/dashboard'); // ✅ Redirect to dashboard
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white p-4">
      <div className="bg-gray-800 shadow-xl rounded-lg p-8 w-full max-w-md border border-gray-700">
        <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
        {message && (
          <div className="text-green-500 text-center mb-4">{message}</div>
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-white"
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            Create account
          </button>
        </form>
        <div className="text-center mt-4">
          <span className="text-gray-400">Already have an account? </span>
          <Link to={'/login'} className="text-blue-400 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
