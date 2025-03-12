import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface SalesData {
  day?: string;
  month?: string;
  sales: number;
}

interface FilteredData {
  [category: string]: SalesData[];
}

const fullData: Record<"last7Days" | "lastMonth" | "last6Months", FilteredData> = {
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
      { day: "Ter", sales: 180 },
      { day: "Qua", sales: 160 },
      { day: "Qui", sales: 200 },
      { day: "Sex", sales: 240 },
      { day: "Sáb", sales: 300 },
      { day: "Dom", sales: 190 },
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
      { month: "Fev", sales: 300 },
      { month: "Mar", sales: 500 },
      { month: "Abr", sales: 700 },
      { month: "Mai", sales: 900 },
      { month: "Jun", sales: 1100 },
    ],
  },
  last6Months: {
    Eletrônicos: [
      { month: "Jan", sales: 500 },
      { month: "Fev", sales: 800 },
      { month: "Mar", sales: 900 },
      { month: "Abr", sales: 1200 },
      { month: "Mai", sales: 1500 },
      { month: "Jun", sales: 2000 },
    ],
    Roupas: [
      { month: "Jan", sales: 400 },
      { month: "Fev", sales: 600 },
      { month: "Mar", sales: 850 },
      { month: "Abr", sales: 1100 },
      { month: "Mai", sales: 1300 },
      { month: "Jun", sales: 1700 },
    ],
  },
};

const SalesChart: React.FC<{ timeFilter: string; categoryFilter: string }> = ({ timeFilter, categoryFilter }) => {
  const [data, setData] = useState<SalesData[]>([]);
  const [validCategory, setValidCategory] = useState(true);

  useEffect(() => {
    const validTimeFilter = timeFilter as "last7Days" | "lastMonth" | "last6Months";
    
    if (categoryFilter === "all") {
      // Soma as vendas de todas as categorias disponíveis
      const mergedData: SalesData[] = [];
      Object.values(fullData[validTimeFilter]).forEach(category => {
        category.forEach((entry, index) => {
          if (!mergedData[index]) {
            mergedData[index] = { ...entry };
          } else {
            mergedData[index].sales += entry.sales;
          }
        });
      });
      setData(mergedData);
      setValidCategory(true);
    } else {
      const categoryData = fullData[validTimeFilter]?.[categoryFilter];
      if (categoryData) {
        setData(categoryData);
        setValidCategory(true);
      } else {
        setData([]);
        setValidCategory(false);
      }
    }
  }, [timeFilter, categoryFilter]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Vendas {categoryFilter === "all" ? "de todas as categorias" : categoryFilter}
        </Typography>

        {!validCategory ? (
          <Typography color="error">Categoria não encontrada!</Typography>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey={timeFilter === "last7Days" ? "day" : "month"} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
};

export default SalesChart;
