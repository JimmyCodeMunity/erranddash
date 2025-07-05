import { Receipt, Route, ShieldCheck, User } from "lucide-react";
import React, { useContext } from "react";
import { activities, contacts } from "../constants";
import { MyThemeContext } from "../context/ThemeContext";

const ActivityBar = () => {
  const { theme } = useContext(MyThemeContext);
  return (
    <div className="md:w-[20%]">
      <div
        className={`w-full h-screen border ${
          theme === "dark" ? "border-neutral-700" : "border-neutral-100"
        } border-t-0 border-r-0 border-b-0 px-2`}
      >
        {/* notifications */}
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-full py-5 flex flex-row items-end">
            {/* <img src='../rent.png' className='h-10 w-10' alt='Haus Logo' /> */}
            <h1 className="text-black font-normal tracking-wider text-md">
              Notifications
            </h1>
          </div>
        </div>

        <div className="w-full space-y-4">
          <div className="w-full flex flex-row items-center space-x-3">
            <div
              className={`${
                theme === "dark" ? "bg-lime-500" : "bg-violet-100"
              } justify-center items-center rounded-md p-1`}
            >
              <User color={theme === "dark" ? "white" : "black"} size={16} />
            </div>
            <div className="w-full">
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } text-sm`}
              >
                James is here to see you.
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-neutral-400" : "text-neutral-500"
                } text-xs`}
              >
                Just now
              </p>
            </div>
          </div>

          <div className="w-full flex flex-row items-center space-x-3">
            <div
              className={`${
                theme === "dark" ? "bg-lime-500" : "bg-violet-100"
              } justify-center items-center rounded-md p-1`}
            >
              <User color={theme === "dark" ? "white" : "black"} size={16} />
            </div>
            <div className="w-full">
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } text-sm`}
              >
                New user added.
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-neutral-400" : "text-neutral-500"
                } text-xs`}
              >
                59 mins ago
              </p>
            </div>
          </div>

          <div className="w-full flex flex-row items-center space-x-3">
            <div
              className={`${
                theme === "dark" ? "bg-lime-500" : "bg-violet-100"
              } justify-center items-center rounded-md p-1`}
            >
              <Receipt color={theme === "dark" ? "white" : "black"} size={16} />
            </div>
            <div className="w-full">
              <p
                className={`${
                  theme === "dark" ? "text-white" : "text-black"
                } text-sm`}
              >
                Invoice generated.
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-neutral-400" : "text-neutral-500"
                } text-xs`}
              >
                12 hours ago
              </p>
            </div>
          </div>
        </div>
        {/* notifications */}
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-full py-5 flex flex-row items-end">
            {/* <img src='../rent.png' className='h-10 w-10' alt='Haus Logo' /> */}
            <h1
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } text-black font-normal tracking-wider text-md`}
            >
              Activities
            </h1>
          </div>
        </div>

        <div className="w-full space-y-4">
          {activities.map((activity) => (
            <div className="w-full flex flex-row items-center space-x-3">
              <div className="bg-violet-100 justify-center items-center rounded-md p-1">
                <ShieldCheck className="" size={16} />
              </div>
              <div className="w-full">
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-sm`}
                >
                  {activity?.content}
                </p>
                <p
                  className={`${
                    theme === "dark" ? "text-neutral-500" : "text-neutral-400"
                  } text-xs`}
                >
                  {activity?.time}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* notifications */}
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-full py-5 flex flex-row items-end">
            {/* <img src='../rent.png' className='h-10 w-10' alt='Haus Logo' /> */}
            <h1
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } font-normal tracking-wider text-md`}
            >
              Contacts
            </h1>
          </div>
        </div>

        <div className="w-full space-y-4">
          {contacts.map((contact) => (
            <div className="w-full flex flex-row items-center space-x-3">
              <div className="justify-center items-center rounded-md p-1">
                <User
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  }`}
                  size={16}
                />
              </div>
              <div className="w-full">
                <p
                  className={`${
                    theme === "dark" ? "text-white" : "text-black"
                  } text-sm`}
                >
                  {contact?.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityBar;
