import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type ProtectedRouteProps = {
  children?: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  if (!sessionStorage.getItem("userData")) {
    return <Navigate to="/login" />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
