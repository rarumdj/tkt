import React from "react";
import { Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar";
import { PageLinks } from "./Links";
import SideBar from "./SideBar";

const Layout = () => {
  return (
    <div className="flex bg-white md:flex-row flex-col h-screen">
      <aside className="h-screen md:flex hidden flex-initial">
        <SideBar links={PageLinks} />
      </aside>
      <main className="flex-1 h-screen overflow-y-scroll">
        <DashboardNavbar links={PageLinks} />
        <section className="relative py-8 lg:pl-8 sm:pl-4 md:pl-0 md-pr-0 pl-2 lg:pr-8 sm:pr-4 pr-2 max-w-[110rem] mx-auto">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
