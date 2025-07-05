import { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Dot,
  PieChart,
  Folder,
  ShoppingBag,
  ShieldUser,
  MessagesSquare,
  BookOpenCheck,
  SquareUser,
  Users2,
  User,
} from "lucide-react";
import { motion } from "framer-motion";
import * as Icon from "react-feather";
import { MyThemeContext } from "../context/ThemeContext";

export const dashboardlinks = [
  {
    id: 1,
    title: "Overview",
    icon: PieChart,
    actions: [
      {
        id: 1,
        title: "Add user",
      },
    ],
  },
  {
    id: 2,
    title: "Finance",
    icon: ShoppingBag,
    actions: [
      {
        id: 2,
        title: "Income",
      },
      {
        id: 3,
        title: "Expenses",
      },
      {
        id: 4,
        title: "Reports",
      },
    ],
  },
  {
    id: 3,
    title: "Riders",
    icon: Folder,
    actions: [
      {
        id: 1,
        title: "Add Riders",
      },
      {
        id: 2,
        title: "View Riders",
      },
      {
        id: 3,
        title: "Rider Reports",
      },
      {
        id: 4,
        title: "Rider Setup",
      },
      {
        id: 5,
        title: "Reports",
      },
    ],
  },
];
export const pageslinks = [
  {
    id: 4,
    title: "Administration",
    icon: ShieldUser,
    actions: [
      {
        id: 1,
        title: "Add new admin",
      },
      {
        id: 2,
        title: "View Admins",
      },
      {
        id: 3,
        title: "Change Logo",
      },
      {
        id: 4,
        title: "Terms & Conditions",
      },
      {
        id: 5,
        title: "Privacy Policy",
      },
    ],
  },
  {
    id: 5,
    title: "Users",
    icon: SquareUser,
    actions: [
      {
        id: 1,
        title: "Add User",
      },
      {
        id: 2,
        title: "View Users",
      },
      {
        id: 3,
        title: "Banned accounts",
      },
      {
        id: 4,
        title: "Reports",
      },
    ],
  },
  // {
  //   id: 6,
  //   title: "Staff",
  //   icon: Users2,
  //   actions: [
  //     {
  //       id: 1,
  //       title: "Add Apartment",
  //     },
  //     {
  //       id: 2,
  //       title: "View Apartments",
  //     },
  //   ],
  // },
  {
    id: 7,
    title: "Exam",
    icon: BookOpenCheck,
    actions: [
      {
        id: 1,
        title: "Create Exam",
      },
      {
        id: 2,
        title: "Manage Exam",
      },
      {
        id: 3,
        title: "Exam Results",
      },
      {
        id: 4,
        title: "Exam Setup",
      },
    ],
  },
  {
    id: 8,
    title: "Communicate",
    icon: MessagesSquare,
    actions: [
      {
        id: 1,
        title: "Request Maintenance",
      },
      {
        id: 2,
        title: "View Requests",
      },
    ],
  },
  {
    id: 9,
    title: "Account",
    icon: User,
    actions: [
      {
        id: 1,
        title: "Generate Report",
      },
      {
        id: 2,
        title: "View Reports",
      },
      {
        id: 3,
        title: "Profile",
      },
    ],
  },
];

export default function Sidebar() {
  const [openSections, setOpenSections] = useState({});
  const location = useLocation();
  const [minimenu, setMinimenu] = useState(false);
  const { theme } = useContext(MyThemeContext);

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div
      className={`${
        minimenu ? "md:w-[6%]" : "md:w-[20%]"
      } w-full h-screen md:block hidden ${
        theme === "dark"
          ? "bg-black border-neutral-700"
          : "bg-white border-neutral-100"
      } p-4 space-y-8 text-sm border border-l-0 border-b-0 border-t-0`}
    >
      <div className="w-full flex flex-row justify-between items-center">
        <div className="w-full py-5 flex flex-row items-end">
          <h1
            className={`tracking-wider text-xl font-semibold ${
              theme === "dark" ? "text-lime-500" : "text-black"
            }`}
          >
            Errander
          </h1>
        </div>
      </div>

      <div className="w-full my-4">
        <div className="w-full flex flex-row items-center space-x-5">
          <p className="text-neutral-500">Jump to</p>
          <p className="text-neutral-300">Recently</p>
        </div>

        <div className="w-full flex-row flex items-center">
          <Dot className={`text-neutral-400`} size={30} />
          <p
            className={`${
              theme === "dark" ? "text-white" : "text-neutral-500"
            }`}
          >
            Overview
          </p>
        </div>
        <div className="w-full flex-row flex items-center">
          <Dot className={`text-neutral-400`} size={30} />
          <p
            className={`${
              theme === "dark" ? "text-white" : "text-neutral-500"
            }`}
          >
            Projects
          </p>
        </div>
      </div>

      <div className="w-full">
        <p
          className={`${
            theme === "dark" ? "text-neutral-300" : "text-neutral-500"
          }`}
        >
          Dashboards
        </p>
      </div>

      <ul>
        {dashboardlinks.map((link) => {
          const isActive =
            location.pathname === link.path ||
            (link.actions &&
              link.actions.some((action) => location.pathname === action.path));

          return (
            <li key={link.id} className="mb-2">
              <button
                onClick={() => (link.actions ? toggleSection(link.id) : null)}
                className={`w-full flex items-center justify-between p-3 rounded-md transition ${
                  isActive
                    ? theme === "dark"
                      ? "bg-neutral-700 text-white"
                      : "bg-black text-white"
                    : theme === "dark"
                    ? "hover:bg-neutral-700 text-white"
                    : "hover:bg-gray-200 text-neutral-800"
                }`}
              >
                <Link to={link.path} className="flex items-center gap-2 w-full">
                  <Icon.ChevronRight
                    size={14}
                    className={`${
                      theme === "dark" ? "text-white" : "text-neutral-500"
                    }`}
                  />
                  <link.icon
                    size={20}
                    className={`${
                      theme === "dark" ? "text-white" : "text-neutral-700"
                    }`}
                  />
                  {!minimenu && (
                    <span
                      className={`${
                        isActive
                          ? "text-white"
                          : theme === "dark"
                          ? "text-neutral-200"
                          : "text-neutral-800"
                      }`}
                    >
                      {link.title}
                    </span>
                  )}
                </Link>
              </button>

              {link.actions && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openSections[link.id]
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-6 mt-1 border-l border-neutral-300 pl-3 overflow-hidden space-y-2"
                >
                  {link.actions.map((action) => (
                    <li key={action.id}>
                      <Link
                        to={action.path}
                        className={`flex flex-row space-x-3 w-full p-2 rounded-md transition ${
                          location.pathname === action.path
                            ? theme === "dark"
                              ? "bg-neutral-500 text-white"
                              : "bg-neutral-600 text-white"
                            : theme === "dark"
                            ? "hover:bg-neutral-700 text-white"
                            : "hover:bg-gray-200 text-neutral-800"
                        }`}
                      >
                        <span className="text-sm">{action.title}</span>
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          );
        })}
      </ul>

      <div className="w-full">
        <p
          className={`${
            theme === "dark" ? "text-neutral-300" : "text-neutral-500"
          }`}
        >
          Pages
        </p>
      </div>

      <ul>
        {pageslinks.map((link) => {
          const isActive =
            location.pathname === link.path ||
            (link.actions &&
              link.actions.some((action) => location.pathname === action.path));

          return (
            <li key={link.id} className="mb-2">
              <button
                onClick={() => (link.actions ? toggleSection(link.id) : null)}
                className={`w-full flex items-center justify-between p-3 rounded-md transition ${
                  isActive
                    ? theme === "dark"
                      ? "bg-neutral-700 text-white"
                      : "bg-black text-white"
                    : theme === "dark"
                    ? "hover:bg-neutral-700 text-white"
                    : "hover:bg-gray-200 text-neutral-800"
                }`}
              >
                <Link to={link.path} className="flex items-center gap-2 w-full">
                  <Icon.ChevronRight
                    size={14}
                    className={`${
                      theme === "dark" ? "text-white" : "text-neutral-400"
                    }`}
                  />
                  <link.icon
                    size={20}
                    className={`${
                      theme === "dark" ? "text-white" : "text-neutral-700"
                    }`}
                  />
                  {!minimenu && (
                    <span
                      className={`${
                        isActive
                          ? "text-white"
                          : theme === "dark"
                          ? "text-neutral-200"
                          : "text-neutral-800"
                      }`}
                    >
                      {link.title}
                    </span>
                  )}
                </Link>
              </button>

              {link.actions && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openSections[link.id]
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-6 mt-1 border-l border-neutral-300 pl-3 overflow-hidden space-y-2"
                >
                  {link.actions.map((action) => (
                    <li key={action.id}>
                      <Link
                        to={action.path}
                        className={`flex flex-row space-x-3 w-full p-2 rounded-md transition ${
                          location.pathname === action.path
                            ? theme === "dark"
                              ? "bg-neutral-500 text-white"
                              : "bg-neutral-600 text-white"
                            : theme === "dark"
                            ? "hover:bg-neutral-700 text-white"
                            : "hover:bg-gray-200 text-neutral-800"
                        }`}
                      >
                        <span className="text-sm">{action.title}</span>
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
