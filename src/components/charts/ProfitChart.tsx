import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import apiService from "../../services/apiService";

interface ProfitData {
  day?: string;
  month?: string;
  profit: number;
}

const ProfitChart: React.FC<{ filter: string }> = ({ filter }) => {
  const [data, setData] = useState<ProfitData[]>([]);

  useEffect(() => {
    const fetchProfitData = async () => {
      try {
        const products = await apiService.getProducts();
        
        // Simulando um custo fixo de 40% sobre o preço de cada item
        const profitData = products.map((product: any, index: number) => ({
          month: new Date().toLocaleString('default', { month: 'short' }), // Simulação de meses
          profit: product.price * 0.6, // 60% do preço como lucro
        }));

        setData(profitData);
      } catch (error) {
        console.error("Erro ao buscar dados de lucro:", error);
      }
    };

    fetchProfitData();
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
