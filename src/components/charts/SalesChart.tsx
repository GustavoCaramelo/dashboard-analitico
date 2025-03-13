import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import apiService from "../../services/apiService";

interface SalesData {
  day?: string;
  month?: string;
  sales: number;
}

interface FilteredData {
  [category: string]: SalesData[];
}

const generateRandomSales = () => Math.floor(Math.random() * 500) + 50;

const SalesChart: React.FC<{ timeFilter: string; categoryFilter: string }> = ({ timeFilter, categoryFilter }) => {
  const [data, setData] = useState<SalesData[]>([]);
  const [validCategory, setValidCategory] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await apiService.getProducts();
        const categorizedSales: Record<string, SalesData[]> = {};
        
        products.forEach((product: any) => {
          const category = product.category;
          if (!categorizedSales[category]) {
            categorizedSales[category] = [];
          }
          if (timeFilter === "last7Days") {
            categorizedSales[category].push({ day: "Seg", sales: generateRandomSales() });
            categorizedSales[category].push({ day: "Ter", sales: generateRandomSales() });
            categorizedSales[category].push({ day: "Qua", sales: generateRandomSales() });
            categorizedSales[category].push({ day: "Qui", sales: generateRandomSales() });
            categorizedSales[category].push({ day: "Sex", sales: generateRandomSales() });
            categorizedSales[category].push({ day: "Sáb", sales: generateRandomSales() });
            categorizedSales[category].push({ day: "Dom", sales: generateRandomSales() });
          } else {
            categorizedSales[category].push({ month: "Jan", sales: generateRandomSales() });
            categorizedSales[category].push({ month: "Fev", sales: generateRandomSales() });
            categorizedSales[category].push({ month: "Mar", sales: generateRandomSales() });
            categorizedSales[category].push({ month: "Abr", sales: generateRandomSales() });
            categorizedSales[category].push({ month: "Mai", sales: generateRandomSales() });
            categorizedSales[category].push({ month: "Jun", sales: generateRandomSales() });
          }
        });

        if (categoryFilter === "all") {
          const mergedData: SalesData[] = [];
          Object.values(categorizedSales).forEach(category => {
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
          if (categorizedSales[categoryFilter]) {
            setData(categorizedSales[categoryFilter]);
            setValidCategory(true);
          } else {
            setData([]);
            setValidCategory(false);
          }
        }
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };
    fetchData();
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
