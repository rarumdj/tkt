import { Icon } from "@iconify/react";
import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { avatar } from "../assets/images";
import cs from "classnames";
import { ReactComponent as DashboardIcon } from "../assets/icons/dashboard.svg";
import { ReactComponent as Chat } from "../assets/icons/Chat.svg";
import { ReactComponent as Bell } from "../assets/icons/Bell.svg";
import { ReactComponent as Logo } from "../assets/icons/Logo.svg";

const isActiveStyle =
  "flex items-center px-10 gap-3 md:text-base text-sm  bg-indigo-200 py-4 rounded-sm text-indigo-600 transition-all duration-200 easy-in-out";
const isNotActiveStyle =
  "flex items-center px-10 gap-3 md:text-base text-sm py-3 text-black hover:text-indigo-600 transition-all duration-200 easy-in-out";

const SideBar = ({ links }) => {
  const { pathname } = useLocation();

  const navigate = useNavigate();

  const onLogout = () => {
    navigate("/login");
  };

  return (
    <div className="flex flex-col justify-between bg-gray-100 h-full  overflow-y-scroll min-w-[230px] hide-scrollbar">
      <div className="flex flex-col h-full">
        <Link
          to="/"
          className="md:flex hidden px-4 gap-2 my-6 pt-1 w-[190px] items-center">
          <Logo className="object-scale-down md:w-full w-20" />
        </Link>
        <div className="flex justify-center h-full">
          <div className="flex flex-col w-full md:pt-6 pt-10 gap-1 whitespace-nowrap px-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }>
              <DashboardIcon className="text-indigo-600" />
              Dashboard
            </NavLink>
            <NavLink
              to="/lorem"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }>
              <Bell className="text-indigo-600" />
              lorem ipsum
            </NavLink>
            <NavLink
              to="/ipsum"
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }>
              <Chat className="text-indigo-600" />
              lorem ipsum
            </NavLink>
          </div>
        </div>
        <div className="mt-auto mx-auto mb-10">
          <ul className="flex flex-row space-x-4 items-center md:text-base text-sm">
            <li className="flex items-center justify-center space-x-2">
              <img
                src={avatar}
                alt=""
                className="h-11 w-11 rounded-full object-fill overflow-hidden"
              />
              <div>
                <h4 className="font-bold">Sophie L.</h4>
                <p className="text-sm">sophie.l@gmail.com</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
