import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import apiService from "../../services/apiService";

const UsersChart: React.FC<{ filter: string }> = ({ filter }) => {
  const [data, setData] = useState<{ day?: string; month?: string; users: number }[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await apiService.getProducts();
        const productCount = products.length;
        
        const generateUsersData = (multiplier: number) => [
          { day: "Seg", users: Math.floor(productCount * multiplier * 0.8) },
          { day: "Ter", users: Math.floor(productCount * multiplier * 1.1) },
          { day: "Qua", users: Math.floor(productCount * multiplier * 0.9) },
          { day: "Qui", users: Math.floor(productCount * multiplier * 1.2) },
          { day: "Sex", users: Math.floor(productCount * multiplier * 1.5) },
          { day: "Sáb", users: Math.floor(productCount * multiplier * 1.7) },
          { day: "Dom", users: Math.floor(productCount * multiplier * 1.3) },
        ];

        const fullData = {
          last7Days: generateUsersData(3),
          lastMonth: generateUsersData(10),
          last6Months: generateUsersData(50),
        };

        setData(fullData[filter as "last7Days" | "lastMonth" | "last6Months"]);
      } catch (error) {
        console.error("Erro ao buscar dados dos produtos:", error);
      }
    };

    fetchData();
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
