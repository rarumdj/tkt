import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardNavbar = ({ links }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [navTitle, setNavTitle] = useState("");
  useEffect(() => {
    links.forEach((link) => {
      if (pathname.includes(link.link)) {
        setNavTitle(link.name);
      }
    });
  }, [pathname, links]);

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <header className="bg-white py-4 pr-6 sticky md:py-4 md:pr-16 md:pl-12 pl-6 top-0 left-0 right-0 z-30 flex justify-center">
      <nav className="flex md:flex-row flex-col w-screen max-w-[110rem] justify-between">
        <div className={`${click ? "z-0" : "z-50"}" my-auto`}>
          <h1 className="xl:text-2xl lg:text-xl text-lg md:block hidden font-bold py-4">
            {navTitle}
          </h1>
          {/* <img
            src={logoBlue}
            alt="logo"
            className="md:hidden block w-20 translate-y-3"
          /> */}
        </div>
        <div>
          <button
            className={`${
              click ? "z-0" : "z-50"
            } md:hidden block -translate-y-4 -translate-x-8 absolute right-0 ml-auto`}
            onClick={handleClick}>
            <Icon
              icon={"charm:menu-hamburger"}
              fontSize={28}
              className="text-gray-700"
            />
          </button>

          <aside>
            <nav
              className={`md:hidden  flex-col flex bg-blue-700 absolute top-0 left-0 right-0 bottom-0 min-h-screen z-10`}>
              <div className="flex-initial flex relative">
                <button
                  className="translate-y-12 translate-x-8 md:hidden block absolute"
                  onClick={handleClick}>
                  <Icon icon="ep:close" fontSize={28} className="text-white" />
                </button>

                <div className="ml-auto translate-y-9 -translate-x-8">
                  <ul className="flex flex-row space-x-3 items-center md:text-base text-sm">
                    <li className="flex items-center justify-center space-x-2">
                      {/* <img
                        src={data?.avatar || user}
                        alt=""
                        className="h-10 w-10 rounded-full object-fill overflow-hidden"
                      /> */}
                      <div className="text-white">
                        <h4 className="font-bold text-sm">
                          hellio
                          {/* {data?.firstName} {data?.lastName} */}
                        </h4>
                        <p className="text-xs"># hellio</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center h-full items-center w-full px-8 mt-10">
                <div className="w-full h-full max-w-md bg">
                  <SideBar links={links} />
                </div>
              </div>
            </nav>
          </aside>
          <div className="md:mt-0 mt-10">
            <Link to="/">
              <h1 className="xl:text-2xl lg:text-xl text-lg block md:hidden font-bold">
                {navTitle}
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
