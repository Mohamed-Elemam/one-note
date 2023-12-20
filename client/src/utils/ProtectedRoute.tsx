import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export const ProtectedRoute = () => {
  if (Cookies.get("userToken") === undefined) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
