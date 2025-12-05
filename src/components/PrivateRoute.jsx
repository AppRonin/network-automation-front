import { Navigate } from "react-router-dom";
import { useAuth } from "../store/useAuth";

export default function PrivateRoute({ children }) {
  const isAuthenticated = useAuth((s) => s.isAuthenticated);
  const loading = useAuth((s) => s.loading);

  // Still checking token (first load)
  if (loading) return null; // or a spinner

  // Not logged in → redirect
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  // Logged in → allow page
  return children;
}
