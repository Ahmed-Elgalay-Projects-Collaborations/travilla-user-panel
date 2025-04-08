import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../Contexts/Auth";
import Login from "../Pages/Login/Login";

export default function ProtectedRoute({ children }) {
  const location = useLocation();

  const { IsLogedin } = useContext(authContext);

  return <>{IsLogedin ? children : <Login />}</>;
}
