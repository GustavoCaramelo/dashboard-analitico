import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", sales: 4000 },
  { month: "Fev", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Abr", sales: 7000 },
  { month: "Mai", sales: 6000 },
  { month: "Jun", sales: 8000 },
];

const SalesChart: React.FC = () => {
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
