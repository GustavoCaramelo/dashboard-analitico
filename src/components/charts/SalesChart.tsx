import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const fullData: Record<"last7Days" | "lastMonth", { day?: string; month?: string; sales: number; }[]> = {
  last7Days: {
    Eletrônicos: [
      { day: "Seg", sales: 150 },
      { day: "Ter", sales: 220 },
      { day: "Qua", sales: 180 },
      { day: "Qui", sales: 250 },
      { day: "Sex", sales: 300 },
      { day: "Sáb", sales: 350 },
      { day: "Dom", sales: 200 },
    ],
    Roupas: [
      { day: "Seg", sales: 100 },
      { day: "Ter", sales: 150 },
      { day: "Qua", sales: 130 },
      { day: "Qui", sales: 170 },
      { day: "Sex", sales: 200 },
      { day: "Sáb", sales: 250 },
      { day: "Dom", sales: 180 },
    ],
  },
  lastMonth: {
    Eletrônicos: [
      { month: "Jan", sales: 200 },
      { month: "Fev", sales: 400 },
      { month: "Mar", sales: 600 },
      { month: "Abr", sales: 800 },
      { month: "Mai", sales: 1000 },
      { month: "Jun", sales: 1200 },
    ],
    Roupas: [
      { month: "Jan", sales: 150 },
      { month: "Fev", sales: 250 },
      { month: "Mar", sales: 450 },
      { month: "Abr", sales: 600 },
      { month: "Mai", sales: 750 },
      { month: "Jun", sales: 900 },
    ],
  },
};

const SalesChart: React.FC<{ filter: string; category: string }> = ({ filter, category }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(fullData[filter]?.[category] || []);
  }, [filter, category]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Vendas Mensais - {category}
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={filter === "last7Days" ? "day" : "month"} />
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
