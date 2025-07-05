import { BarPlot, ChartContainer } from "@mui/x-charts";
import React, { useContext } from "react";
import { MyThemeContext } from "../context/ThemeContext";

const IncomeChart = () => {
  const { theme } = useContext(MyThemeContext);
  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const xLabels = [
    "Page A",
    "Page B",
    "Page C",
    "Page D",
    "Page E",
    "Page F",
    "Page G",
  ];
  return (
    <div
      className={`${
        theme === "dark" ? "bg-white" : "bg-neutral-100"
      } rounded-3xl h-80 min-h-80 p-4`}
    >
      <p className="text-md font-semibold">Monthly Income</p>
      <div className="w-full justify-center items-start">
        <ChartContainer
          width={300}
          height={250}
          series={[{ data: uData, label: "uv", type: "bar", color: "gray" }]}
          xAxis={[{ scaleType: "band", data: xLabels }]}
        >
          <BarPlot />
        </ChartContainer>
      </div>
    </div>
  );
};

export default IncomeChart;
