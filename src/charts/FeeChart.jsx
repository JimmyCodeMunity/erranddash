import { LineChart } from "@mui/x-charts";
import { Dot } from "lucide-react";
import React, { useContext } from "react";
import { MyThemeContext } from "../context/ThemeContext";

const FeeChart = () => {
  const { theme } = useContext(MyThemeContext);
  return (
    <div>
      <div
        className={`w-full rounded-3xl ${
          theme === "dark" ? "bg-lime-500" : "bg-neutral-100"
        } min-h-80 h-80 p-4`}
      >
        <div className="w-full flex md:flex-row items-center space-x-4">
          <p className="text-black md:text-sm text-xs">Revenue Collected</p>
          <p className="text-neutral-400 md:text-sm text-xs">Income</p>
          <p className="text-neutral-400 md:text-sm text-xs">Expenses</p>
          <p className="text-neutral-400 md:text-sm text-xs">|</p>
          <div className="flex flex-row items-center">
            <Dot size={30} />
            <p className="text-neutral-400 text-sm">This year</p>
          </div>
          <div className="flex flex-row items-center">
            <Dot size={30} className="text-blue-300" />
            <p className="text-neutral-400 text-sm">Last year</p>
          </div>
        </div>
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              color: "gray",
            },
          ]}
          height={250}
        />
      </div>
    </div>
  );
};

export default FeeChart;
