"use client";

import React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@ui/chart";
import { useTranslations } from "next-intl";

const chartData = [
  { year: "2019", KFC: 25, McDonalds: 5, FishHouse: 12 },
  { year: "2020", KFC: 25, McDonalds: 10, FishHouse: 15 },
  { year: "2021", KFC: 15, McDonalds: 15, FishHouse: 8 },
  { year: "2022", KFC: 20, McDonalds: 5, FishHouse: 15 },
  { year: "2023", KFC: 5, McDonalds: 25, FishHouse: 5 },
  { year: "2024", KFC: 30, McDonalds: 15, FishHouse: 22 },
];

const chartConfig = {
  KFC: {
    label: "KFC",
    color: "#3FAEA3",
  },
  McDonalds: {
    label: "McCDonald's",
    color: "#914DF0",
  },
  FishHouse: {
    label: "Fish House",
    color: "#914DF0",
  },
} satisfies ChartConfig;

const SalaryChart: React.FC = () => {
  const t = useTranslations("SalaryChart");

  return (
    <Card className={`flex w-full basis-[60%] h-full flex-col border-none bg-[#27283C] px-5 pb-12 pt-5`}>
      <CardHeader className={``}>
        <CardTitle className={`text-left text-xl font-medium text-[#c7c7c7]`}>{t("totalSalary")}</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" tickLine={false} axisLine={false} tickMargin={10} tickFormatter={(value) => value.slice(0, 4)} />
            <YAxis tickLine={false} axisLine={false} tickMargin={5} tickCount={4} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Area dataKey="McDonalds" type="linear" fill="#914DF0" fillOpacity={1} stroke="white" strokeWidth={2} stackId="a" />
            <Area dataKey="KFC" type="linear" fill="#F4A26C" fillOpacity={1} stroke="white" strokeWidth={2} stackId="a" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default SalaryChart;
