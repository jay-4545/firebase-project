import React from "react";
import NavbarCo from "./NavbarCo";
import FooterCo from "./FooterCo";
import { Outlet } from "react-router-dom";

function Layouts() {
  return (
    <div>
      <NavbarCo />
      <Outlet />
      <FooterCo />
    </div>
  );
}

export default Layouts;
