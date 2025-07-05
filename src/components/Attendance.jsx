import React, { useContext } from "react";
import { MyThemeContext } from "../context/ThemeContext";

const Attendance = () => {
  const { theme } = useContext(MyThemeContext);

  const isDark = theme === "dark";
  const bgColor = isDark ? "bg-neutral-700" : "bg-neutral-100";
  const textColor = isDark ? "text-white" : "text-black";
  const labelColor = isDark ? "text-neutral-200" : "text-neutral-800";

  const renderRow = (label) => (
    <div className="w-full flex flex-row items-center justify-between">
      <p className={`text-sm ${labelColor}`}>{label}</p>
      <div className="flex flex-row items-center space-x-1">
        <div
          className={`h-1 w-4 rounded-xl ${isDark ? "bg-white" : "bg-black"}`}
        ></div>
        <div
          className={`h-1 w-4 rounded-xl ${
            isDark ? "bg-neutral-400" : "bg-neutral-400"
          }`}
        ></div>
        <div
          className={`h-1 w-4 rounded-xl ${
            isDark ? "bg-neutral-500" : "bg-neutral-200"
          }`}
        ></div>
      </div>
    </div>
  );

  return (
    <div
      className={`w-full ${bgColor} rounded-3xl min-h-80 h-80 p-3 space-y-4`}
    >
      <p className={`text-sm font-semibold ${textColor}`}>Today's Logs</p>
      {renderRow("Riders")}
      {renderRow("Users")}
      {renderRow("Staff")}
      {renderRow("Admins")}
      {renderRow("Orders")}
      {renderRow("Payments")}
    </div>
  );
};

export default Attendance;
