import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { div } from "framer-motion/client";
import ActivityBar from "../components/ActivityBar";
import { MyThemeContext } from "../context/ThemeContext";

const AppLayout = ({ children, pagetitle }) => {
  const { theme } = useContext(MyThemeContext);
  console.log("ctheme", theme);
  return (
    <div className={`${theme === "dark" ? "bg-black" : "bg-white"}`}>
      <div className={`w-full flex flex-row items-start max-w-7xl mx-auto`}>
        {/* <div className='md:block hidden'> */}
        <Sidebar />
        {/* </div> */}
        <div className="w-full space-y-4">
          <Navbar pagetitle={pagetitle} />
          <div className="md:px-16 px-6 h-full">{children}</div>
        </div>
        <ActivityBar />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
