import React from 'react';
import { NavMenu } from './NavMenu';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <NavMenu />
      <Outlet />
    </>
  );
};

export default Layout;
