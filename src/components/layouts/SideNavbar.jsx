import React, { useState } from "react";

import {
  CalendarIcon,
  DashboardIcon,
  FormsIcon,
  SettingsIcon,
  SupportIcon,
  TabbedContentIcon,
  TablesIcon,
} from "./Icons";

const SideNavbar = () => {
  const bgColor = "bg-blue-500";
  const [menuToggle, setMenuToggle] = useState(true);

  return (
    <div>
      {/* 사이드 바 메인 */}
      <main className="flex bg-gray-100">
        {/* SideBar */}
        <aside
          className={` ${
            menuToggle ? "hidden md:block" : "hidden"
          } w-64 min-h-max  ${bgColor}`}
        >
          <div className="p-6">
            <a
              href=""
              className="flex items-center text-white text-3xl font-semibold hover:text-gray-300"
            >
              <SettingsIcon class="mr-3" />
              Admin
            </a>
          </div>
          <nav className="block text-white text-base font-semibold pt-3">
            <a
              href=""
              className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
            >
              <DashboardIcon class="mr-3" />
              Dashboard
            </a>
            <a
              href=""
              className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
            >
              <TablesIcon class="mr-3" />
              Tables
            </a>
            <a
              href=""
              className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
            >
              <FormsIcon class="mr-3" />
              Forms
            </a>
            <a
              href=""
              className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
            >
              <TabbedContentIcon class="mr-3" />
              Tabbed Content
            </a>
            <a
              href=""
              className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
            >
              <CalendarIcon class="mr-3" />
              Calendar
            </a>
            <a
              href=""
              className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6"
            >
              <SupportIcon class="mr-3" />
              Support
            </a>
          </nav>
        </aside>
      </main>
    </div>
  );
};

export default SideNavbar;
