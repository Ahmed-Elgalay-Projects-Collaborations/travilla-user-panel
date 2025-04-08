import React, { useContext } from "react";
import { authContext } from "../Contexts/Auth";
import { Navigate } from "react-router-dom";

export default function ProtectedAuthRoute({ children }) {
  const { IsLogedin } = useContext(authContext);

  return <>{!IsLogedin ? children : <Navigate to={"/"} />}</>;
}
  