import React, { useContext } from "react";
import { UserContext } from "../provider/UserProvider";
import { Navigate } from "react-router-dom";

function AuthGuard({ children }) {
  const user = useContext(UserContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <div>{children}</div>;
}

export default AuthGuard;
