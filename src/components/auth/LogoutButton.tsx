import supabase from '../../utils/supabase';
import { useNavigate } from 'react-router-dom';

export default function LogoutButton() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error.message);
    navigate('/login');
  };
  return <button onClick={handleLogout}>Logout Button Component</button>;
}
