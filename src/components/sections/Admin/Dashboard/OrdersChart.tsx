"use client";

import { Bar, BarChart } from "recharts";

import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
interface IOrdersChart {}
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@ui/chart";
import { useMemo } from "react";

const chartData = [
  { restaurant: "Fish House", ProjectsByAccount: 173, fill: "#00B2A9" },
  { restaurant: "KFC", ProjectsByAccount: 275, fill: "#EB5757" },
  { restaurant: "KLM", ProjectsByAccount: 200, fill: "#EAAB00" },
  { restaurant: "McCDonald's", ProjectsByAccount: 287, fill: "#A84069" },
  { restaurant: "Dolma", ProjectsByAccount: 190, fill: "#8D43FF" },
  { restaurant: "Doner", ProjectsByAccount: 190, fill: "#BB6BD9" },
  { restaurant: "Kabab", ProjectsByAccount: 190, fill: "#F4A26C" },
  { restaurant: "Steak House", ProjectsByAccount: 190, fill: "#4CD964" },
];
const chartConfig = {
  ProjectsByAccount: {
    label: "Projects by account",
  },
  KFC: {
    label: "KFC",
    color: "#EB5757",
  },
  KLM: {
    label: "KLM",
    color: "#EAAB00",
  },
  McCDonalds: {
    label: "McCDonald's",
    color: "#A84069",
  },
  FishHouse: {
    label: "Fish House",
    color: "#00B2A9",
  },
  Dolma: {
    label: "Dolma",
    color: "#8D43FF",
  },
  Doner: {
    label: "Doner",
    color: "#BB6BD9",
  },
  Kabab: {
    label: "Kabab",
    color: "#F4A26C",
  },
  SteakHouse: {
    label: "Steak House",
    color: "#4CD964",
  },
} satisfies ChartConfig;

const OrdersChart: React.FC = ({ className }: { className?: string }): JSX.Element => {
  const totalVisitors = useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.ProjectsByAccount, 0);
  }, []);

  return (
    <Card className={`flex w-full basis-[40%]  flex-col border-none bg-[#27283C] px-5 pb-20   pt-5 `}>
      <CardHeader>
        <CardTitle className={`text-left text-[#c7c7c7]`}>Orders</CardTitle>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[264px]">
          <PieChart className={``}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="ProjectsByAccount" nameKey="restaurant" innerRadius={70} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text className={``} x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy - 20} className="fill-[#c7c7c7] text-base font-bold">
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 4} className=" fill-[#c7c7c7] text-base">
                          Projects by
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className=" fill-[#c7c7c7] text-base">
                          Account
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex w-full flex-wrap items-center gap-x-4 gap-y-2  text-sm">
        {/* Trending up by 5.2% this month <TrendingUp className="h-4 w-4" /> */}

        {Object.values(chartConfig).map(
          (item, index) =>
            index > 0 && (
              <div className={`flex gap-1 `} key={item.label}>
                {/* @ts-ignore */}
                <span className={`h-4 w-4 rounded-full`} style={{ backgroundColor: item.color }}></span>
                <span className={`text-sm capitalize text-[#c7c7c7]`}>{item.label}</span>
              </div>
            ),
        )}

        {/* <div className="text-muted-foreground leading-none">Showing total visitors for the last 6 months</div> */}
      </CardFooter>
    </Card>
  );
};

export default OrdersChart;
