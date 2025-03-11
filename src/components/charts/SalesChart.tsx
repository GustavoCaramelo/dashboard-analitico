import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const fullData: Record<"last7Days" | "lastMonth" | "last6Months", { day?: string; month?: string; sales: number }[]> = {
  last7Days: [
    { day: "Seg", sales: 150 },
    { day: "Ter", sales: 220 },
    { day: "Qua", sales: 180 },
    { day: "Qui", sales: 250 },
    { day: "Sex", sales: 300 },
    { day: "Sáb", sales: 350 },
    { day: "Dom", sales: 200 },
  ],
  lastMonth: [
    { month: "Jan", sales: 200 },
    { month: "Fev", sales: 400 },
    { month: "Mar", sales: 600 },
    { month: "Abr", sales: 800 },
    { month: "Mai", sales: 1000 },
    { month: "Jun", sales: 1200 },
  ],
  last6Months: [
    { month: "Jan", sales: 500 },
    { month: "Fev", sales: 800 },
    { month: "Mar", sales: 900 },
    { month: "Abr", sales: 1200 },
    { month: "Mai", sales: 1500 },
    { month: "Jun", sales: 2000 },
  ],
};

const SalesChart: React.FC<{ filter: string }> = ({ filter }) => {
  const [data, setData] = useState<{ day?: string; month?: string; sales: number }[]>(fullData.lastMonth);

  useEffect(() => {
    setData(fullData[filter as "last7Days" | "lastMonth" | "last6Months"]);
  }, [filter]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Vendas Mensais
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SalesChart;
