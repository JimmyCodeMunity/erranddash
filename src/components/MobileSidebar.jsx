import { useContext, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  ChevronDown,
  Home,
  Users,
  Grid,
  DollarSign,
  Tool,
  FileText,
  Settings,
  UserPlus,
  UserCheck,
  Activity,
  Clipboard,
  AlignJustify,
  Zap,
  ArrowUpRight,
  Plus,
  Eye,
} from "react-feather";
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
  Sun,
  MoonIcon,
} from "lucide-react";
import { motion } from "framer-motion";
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

export default function MobileSidebar() {
  const [openSections, setOpenSections] = useState({});
  const location = useLocation();

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const { theme, toggleTheme } = useContext(MyThemeContext);

  return (
    <div className="md:hidden block w-full h-full overflow-y-scroll z-20 bg-white shadow shadow-4xl shadow-neutral-300 p-4 space-y-10">
      <div className="w-full py-5 flex flex-row  items-end space-x-4 px-4">
        {/* <img src='../apartment.png' className='h-10 w-10' alt='Haus Logo' /> */}
        <h1 className="text-black font-bold tracking-wider text-sm">
          Errander
        </h1>
        <div>
          {theme === "dark" ? (
            <Sun
              onClick={toggleTheme}
              size={16}
              className={`${
                theme === "dark" ? "text-neutral-800" : "text-neutral-800"
              }`}
            />
          ) : (
            <MoonIcon
              onClick={toggleTheme}
              size={16}
              className={`${
                theme === "dark" ? "text-neutral-100" : "text-neutral-800"
              }`}
            />
          )}
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
                className={`w-full flex items-center group justify-between p-3 rounded-md transition ${
                  isActive ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
              >
                <Link
                  to={link.path}
                  className="flex items-center gap-2 w-full text-neutral-500"
                >
                  <link.icon size={20} />
                  <span
                    className={`${isActive && "text-white"} text-neutral-700`}
                  >
                    {link.title}
                  </span>
                </Link>
                {link.actions && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openSections[link.id] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {/* {link.actions && openSections[link.id] && (
                                <ul className="ml-6 mt-1 border-l border-gray-300 pl-3">
                                    {link.actions.map((action) => (
                                        <li key={action.id} className="">

                                            <Link
                                                to={action.path}
                                                className={`flex flex-row space-x-3 w-full p-2 rounded-md transition ${location.pathname === action.path ? "bg-indigo-300 text-white" : "hover:bg-gray-200"
                                                    }`}
                                            >
                                                <action.icon size={20} />
                                                <span>{action.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )} */}

              {link.actions && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openSections[link.id]
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-6 mt-1 border-l border-gray-300 pl-3 overflow-hidden"
                >
                  {link.actions.map((action) => (
                    <li key={action.id}>
                      <Link
                        to={action.path}
                        className={`flex flex-row space-x-3 w-full p-2 rounded-md transition ${
                          location.pathname === action.path
                            ? "bg-black text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {action.icon && (
                          <action.icon className="text-neutral-500" size={20} />
                        )}
                        <span className="text-neutral-500">{action.title}</span>
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
                className={`w-full flex items-center group justify-between p-3 rounded-md transition ${
                  isActive ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
              >
                <Link
                  to={link.path}
                  className="flex items-center gap-2 w-full text-neutral-500"
                >
                  <link.icon size={20} />
                  <span
                    className={`${isActive && "text-white"} text-neutral-700`}
                  >
                    {link.title}
                  </span>
                </Link>
                {link.actions && (
                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openSections[link.id] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {/* {link.actions && openSections[link.id] && (
                                <ul className="ml-6 mt-1 border-l border-gray-300 pl-3">
                                    {link.actions.map((action) => (
                                        <li key={action.id} className="">

                                            <Link
                                                to={action.path}
                                                className={`flex flex-row space-x-3 w-full p-2 rounded-md transition ${location.pathname === action.path ? "bg-indigo-300 text-white" : "hover:bg-gray-200"
                                                    }`}
                                            >
                                                <action.icon size={20} />
                                                <span>{action.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )} */}

              {link.actions && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={
                    openSections[link.id]
                      ? { height: "auto", opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="ml-6 mt-1 border-l border-gray-300 pl-3 overflow-hidden"
                >
                  {link.actions.map((action) => (
                    <li key={action.id}>
                      <Link
                        to={action.path}
                        className={`flex flex-row space-x-3 w-full p-2 rounded-md transition ${
                          location.pathname === action.path
                            ? "bg-black text-white"
                            : "hover:bg-gray-200"
                        }`}
                      >
                        {action.icon && (
                          <action.icon className="text-neutral-500" size={20} />
                        )}
                        <span className="text-neutral-500">{action.title}</span>
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
