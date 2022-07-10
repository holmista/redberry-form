import React from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import useValidation from "./useValidation";

export default function PrivateRoute() {
  const location = useLocation();
  // console.log(location.pathname);
  const validation = useValidation();
  if (location.pathname === "/experienceInfo") {
    return (
      validation.peValid ? <Outlet /> : <Navigate to="/personalInfo" />
    );
  }
  return (
    (validation.peValid && validation.expValid) ? <Outlet /> : <Navigate to="/" />
  );
}
