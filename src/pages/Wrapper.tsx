import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function Wrapper({ children }: { children: ReactNode }) {
  const authenticated = useSelector(
    (state: RootState) => state.auth.authenticated
  );
  const loading = false; // Add a loading state if needed

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <p>Loading...</p>
      </div>
    );
  }

  return authenticated ? <>{children}</> : <Navigate to="/login" />;
}
