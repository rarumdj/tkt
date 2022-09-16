import cs from "classnames";
import { useSelector } from "react-redux";
import { useHistory, useNavigate } from "react-router-dom";
import { ReactComponent as BackButton } from "../assets/icons/backbutton.svg";
import { ReactComponent as Hambugger } from "../assets/icons/hambugger.svg";
import { ReactComponent as Cancel } from "../assets/icons/Cancel.svg";
import { ReactComponent as Logo } from "../assets/icons/Logo.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import SideBar from "./SideBar";

const DashboardNavbar = () => {
  const history = useHistory();
  const [click, setClick] = useState(false);

  const {
    getBusinessDetails: { loading, data },
  } = useSelector(({ business }) => business);

  const variants = {
    open: {
      //   scale: 1,
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    closed: {
      //   scale: 0,
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "hidden",
      },
    },
  };

  const handleClick = () => {
    setClick(!click);
  };

  const listBusiness = () => (
    <>
      <div className="z-50 my-auto">
        <h1 className="xl:text-2xl lg:text-xl text-lg md:block hidden font-bold py-4">
          Welcome on TKT dashboard!
        </h1>
      </div>
      <div>
        <div
          className={cs(
            "z-50 mt-4 right-0 md:hidden block -translate-x-8 absolute ml-auto"
          )}>
          <div
            onClick={handleClick}
            className="h-10 w-10 cursor-pointer bg-indigo-500 shadow-md shadow-indigo-400/50 active:bg-indigo-600 hover:bg-indigo-600 rounded-full flex items-center justify-center">
            {click ? (
              <Cancel className="object-scale-down md:hidden block md:w-full w-20" />
            ) : (
              <Hambugger className="object-scale-down md:hidden block md:w-full w-20" />
            )}
          </div>
        </div>

        <div className="md:mt-0 mt-10">
          <Logo className="object-scale-down md:hidden block md:w-full w-12 z-[999] -translate-y-5" />

          <div>
            <h1 className="xl:text-2xl lg:text-xl text-lg block md:hidden font-bold">
              Welcome on TKT dashboard!
            </h1>
          </div>
        </div>
      </div>

      <motion.nav
        initial={false}
        animate={click ? "open" : "closed"}
        variants={variants}
        className={`md:hidden  flex-col flex bg-gray-50 absolute top-0 left-0 right-0 bottom-0 min-h-screen z-10`}>
        {/* <div className="flex-initial flex relative">
          <button
            className="translate-y-12 translate-x-8 md:hidden block absolute"
            onClick={handleClick}>
            <Icon icon="ep:close" fontSize={28} className="text-white" />
          </button>
        </div> */}
        {click && (
          <Logo className="object-scale-down md:hidden block md:w-full w-12 z-[999] translate-y-10 translate-x-8 -mb-10" />
        )}

        <div className="flex flex-1 flex-col justify-center h-full items-center w-full px-8 mt-14">
          <div className="w-full h-full max-w-md bg">
            <SideBar />
          </div>
        </div>
      </motion.nav>
    </>
  );

  const detailsPage = () => (
    <>
      <div className="z-50 my-auto py-6 md:block hidden">
        <div
          className={cs(
            "z-50 mt-4 left-0 block -translate-y-2 translate-x-8  absolute ml-auto"
          )}>
          <div
            onClick={() => history.push("/")}
            className="h-10 w-10 bg-indigo-500 cursor-pointer shadow-md shadow-indigo-400/50 active:bg-indigo-600 hover:bg-indigo-600 rounded-full flex items-center justify-center">
            <BackButton className="object-scale-down md:w-full w-20" />
          </div>
        </div>
        <div className="ml-10">
          <h1 className="xl:text-2xl lg:text-xl text-lg block font-medium">
            {data?.name}
          </h1>
          <p>N° SIREN {data?.siren}</p>
        </div>
      </div>
      <div className="md:hidden block">
        <div
          className={cs(
            "z-50 mt-4 left-0 md:hidden block  translate-x-6 absolute ml-auto"
          )}>
          <div
            onClick={() => history.push("/")}
            className="h-10 w-10 bg-indigo-500 cursor-pointer shadow-md shadow-indigo-400/50 active:bg-indigo-600 hover:bg-indigo-600 rounded-full flex items-center justify-center">
            <BackButton className="object-scale-down md:w-full w-20" />
          </div>
        </div>

        <div className="ml-14 md:mt-0 mt-2">
          <div>
            <h1 className="xl:text-2xl lg:text-xl text-lg block font-medium">
              {data?.name}
            </h1>
            <p>N° SIREN {data?.siren}</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <header className="md:bg-white bg-gray-50 py-4 pr-6 sticky md:py-4 md:pr-16 md:pl-12 pl-6 top-0 left-0 right-0 z-30 flex justify-center">
      <nav className="flex md:flex-row flex-col w-screen max-w-[110rem] justify-between">
        {data ? detailsPage() : listBusiness()}
      </nav>
    </header>
  );
};

export default DashboardNavbar;
