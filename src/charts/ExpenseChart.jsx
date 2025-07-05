import { PieChart } from "@mui/x-charts";
import React, { useContext } from "react";
import { MyThemeContext } from "../context/ThemeContext";

const ExpenseChart = () => {
  const { theme } = useContext(MyThemeContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-neutral-700" : "bg-neutral-100"
      } rounded-3xl h-80 min-h-80 p-4`}
    >
      <p className="text-md font-semibold">Monthly Expenses</p>
      <div className="w-full flex flex-row">
        <PieChart
          series={[
            {
              data: [
                // change colors

                { id: 0, value: 10, label: "series A" },
                { id: 1, value: 15, label: "series B" },
                { id: 2, value: 20, label: "series C" },
              ],
            },
          ]}
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default ExpenseChart;
