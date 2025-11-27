import React, { useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import { Outlet, useNavigate } from "react-router";

function ProtectedLayout() {
  // check login or not
  // const navigate = useNavigate();
  // useEffect(() => {
  //   navigate("/");
  // }, []);
  return (
    <div className="flex h-screen ">
      <div className="w-55 h-full bg-black/70 text-white">
        <Sidebar />
      </div>

      <Outlet />
    </div>
  );
}

export default ProtectedLayout;
