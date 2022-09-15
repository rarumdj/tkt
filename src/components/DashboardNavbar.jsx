import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import { ReactComponent as Logo } from "../assets/icons/Logo.svg";
import { ReactComponent as Hambugger } from "../assets/icons/hambugger.svg";

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
            Welcome on TKT dashboard!
          </h1>
        </div>
        <div>
          <button
            className={`z-50 mt-10 md:hidden block -translate-y-4 -translate-x-8 absolute right-0 ml-auto`}
            onClick={handleClick}>
            <Hambugger className="object-scale-down md:hidden block md:w-full w-20" />
          </button>

          <div className="md:mt-0 mt-10">
            <Logo className="object-scale-down md:hidden block md:w-full w-12 -translate-y-5" />

            <Link to="/">
              <h1 className="xl:text-2xl lg:text-xl text-lg block md:hidden font-bold">
                Welcome on TKT dashboard!
              </h1>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default DashboardNavbar;
