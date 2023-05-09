import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedComponents = () => {
  
    const auth = localStorage.getItem('user')

  return  auth? <Outlet />: <Navigate to="/SignUp" />
  
}

export default ProtectedComponents