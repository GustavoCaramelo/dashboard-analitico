import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const fullData: Record<"last7Days" | "lastMonth" | "last6Months", { day?: string; month?: string; users: number }[]> = {
  last7Days: [
    { day: "Seg", users: 150 },
    { day: "Ter", users: 220 },
    { day: "Qua", users: 180 },
    { day: "Qui", users: 250 },
    { day: "Sex", users: 300 },
    { day: "Sáb", users: 350 },
    { day: "Dom", users: 200 },
  ],
  lastMonth: [
    { month: "Jan", users: 200 },
    { month: "Fev", users: 400 },
    { month: "Mar", users: 600 },
    { month: "Abr", users: 800 },
    { month: "Mai", users: 1000 },
    { month: "Jun", users: 1200 },
  ],
  last6Months: [
    { month: "Jan", users: 500 },
    { month: "Fev", users: 800 },
    { month: "Mar", users: 900 },
    { month: "Abr", users: 1200 },
    { month: "Mai", users: 1500 },
    { month: "Jun", users: 2000 },
  ],
};

const UsersChart: React.FC<{ filter: string }> = ({ filter }) => {
  const [data, setData] = useState<{ day?: string; month?: string; users: number }[]>(fullData.lastMonth);

  useEffect(() => {
    setData(fullData[filter as "last7Days" | "lastMonth" | "last6Months"]);
  }, [filter]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Usuários Ativos
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={filter === "last7Days" ? "day" : "month"} />
            <YAxis />
            <Tooltip />
            <Bar dataKey="users" fill="#82ca9d" barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default UsersChart;
