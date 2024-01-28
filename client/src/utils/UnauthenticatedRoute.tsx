import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

type UnauthenticatedRouteProps = {
  children?: ReactNode;
};

const UnauthenticatedRoute = ({ children }: UnauthenticatedRouteProps) => {
  if (sessionStorage.getItem("userData")) {
    return <Navigate to="/notes" />;
  }
  return <>{children}</>;
};

export default UnauthenticatedRoute;
