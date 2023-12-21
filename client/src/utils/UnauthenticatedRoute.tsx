import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type UnauthenticatedRouteProps = {
  children?: ReactNode;
};

const UnauthenticatedRoute = ({ children }: UnauthenticatedRouteProps) => {
  if (sessionStorage.getItem("userToken")) {
    return <Navigate to="/notes" />;
  }
  return <>{children}</>;
};

export default UnauthenticatedRoute;
