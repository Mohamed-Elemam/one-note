import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

const userToken: string = Cookies.get("userToken") as string;

export const ProtectedRoute = () => {
  if (!userToken) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
