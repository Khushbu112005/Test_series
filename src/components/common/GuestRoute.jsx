import { useAuth } from "../../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function GuestRoute() {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
}

export default GuestRoute;
