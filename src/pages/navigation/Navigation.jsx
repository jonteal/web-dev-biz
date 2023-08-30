import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { OffCanvasExample } from "../../components/menuDrawer/MenuDrawer";

import "./navigation.css";

const Navigation = () => {
  return (
    <div className="flex flex-row justify-between navigation__main-container px-20">
      <div className="navigation__company-name pt-10 pb-2">
        <Link
          className="mx-3 flex-wrap flex text-2xl text-zinc-100 font-bold"
          to="/"
        >
          Encompass Digital
        </Link>
      </div>

      <OffCanvasExample placement="end" />
    </div>
  );
};

export default Navigation;
