import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import apiService from "../../services/apiService";

interface SalesData {
  day?: string;
  month?: string;
  sales: number;
}

const generateRandomSales = () => Math.floor(Math.random() * 500) + 50;

const SalesChart: React.FC<{ timeFilter: string }> = ({ timeFilter }) => {
  const [data, setData] = useState<SalesData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await apiService.getProducts();
        let salesData: SalesData[] = [];

        if (timeFilter === "last7Days") {
          salesData = [
            { day: "Seg", sales: 0 },
            { day: "Ter", sales: 0 },
            { day: "Qua", sales: 0 },
            { day: "Qui", sales: 0 },
            { day: "Sex", sales: 0 },
            { day: "Sáb", sales: 0 },
            { day: "Dom", sales: 0 },
          ];
        } else {
          salesData = [
            { month: "Jan", sales: 0 },
            { month: "Fev", sales: 0 },
            { month: "Mar", sales: 0 },
            { month: "Abr", sales: 0 },
            { month: "Mai", sales: 0 },
            { month: "Jun", sales: 0 },
          ];
        }

        // Somar todas as vendas de todos os produtos
        products.forEach(() => {
          salesData.forEach((entry) => {
            entry.sales += generateRandomSales();
          });
        });

        setData(salesData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchData();
  }, [timeFilter]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Vendas Totais
        </Typography>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={timeFilter === "last7Days" ? "day" : "month"} />
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
