import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const fullData: Record<"last7Days" | "lastMonth" | "last6Months", { day?: string; month?: string; profit: number }[]> = {
  last7Days: [
    { day: "Seg", profit: 5000 },
    { day: "Ter", profit: 7000 },
    { day: "Qua", profit: 3000 },
    { day: "Qui", profit: 1000 },
    { day: "Sex", profit: 4000 },
    { day: "Sáb", profit: 6000 },
    { day: "Dom", profit: 2000 },
  ],
  lastMonth: [
    { month: "Jan", profit: 10000 },
    { month: "Fev", profit: 15000 },
    { month: "Mar", profit: 20000 },
    { month: "Abr", profit: 25000 },
    { month: "Mai", profit: 30000 },
    { month: "Jun", profit: 35000 },
  ],
  last6Months: [
    { month: "Jan", profit: 500 },
    { month: "Fev", profit: 800 },
    { month: "Mar", profit: 900 },
    { month: "Abr", profit: 1200 },
    { month: "Mai", profit: 1500 },
    { month: "Jun", profit: 2000 },
  ],
};
const ProfitChart: React.FC<{ filter: string }> = ({ filter }) => {
  const [data, setData] = useState<{ day?: string; month?: string; profit: number }[]>(fullData.lastMonth);

  useEffect(() => {
    setData(fullData[filter as "last7Days" | "lastMonth" | "last6Months"]);
  }, [filter]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Lucro Líquido
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="profit" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default ProfitChart;
