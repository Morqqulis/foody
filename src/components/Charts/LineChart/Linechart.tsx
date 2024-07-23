"use client";
import React from "react";
import { LineChart, Line, XAxis, PieChart, Pie, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Yanvar",
    sale: 3000,
    cost: 1400,
    amt: 2400,
  },
  {
    name: "Fevral",
    sale: 3000,
    cost: 1398,
    amt: 2210,
  },
  {
    name: "Mart",
    sale: 2000,
    cost: 9800,
    amt: 2290,
  },
  {
    name: "Aprel",
    sale: 2780,
    cost: 3908,
    amt: 2000,
  },
  {
    name: "May",
    sale: 1890,
    cost: 4800,
    amt: 2181,
  },
  {
    name: "Iyun",
    sale: 2390,
    cost: 3800,
    amt: 2500,
  },
  {
    name: "Iyul",
    sale: 3490,
    cost: 4300,
    amt: 2100,
  },
];

const LineCharts = () => {
  const [opacity, setOpacity] = React.useState({
    sale: 1,
    cost: 1,
  });

  const handleMouseEnter = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 0.5 }));
  };

  const handleMouseLeave = (o) => {
    const { dataKey } = o;

    setOpacity((op) => ({ ...op, [dataKey]: 1 }));
  };

  return (
    <div style={{ width: "100%" }}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart
          width={100}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis className=" size-5" dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} />
          <Line type="monotone" dataKey="cost" strokeOpacity={opacity.cost} stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="sale" strokeOpacity={opacity.sale} stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

LineCharts.demoUrl = "https://codesandbox.io/p/sandbox/customized-legend-event-gwscjg";

export default LineCharts;
