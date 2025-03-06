import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const useGetUserToken = () => {
  // const { token } = useSelector((state: RootState) => state.authToken);
  return localStorage.getItem("token") || null;
};

const ProtectedRoute = () => {
  const storedToken = useGetUserToken();

  if (!storedToken) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
