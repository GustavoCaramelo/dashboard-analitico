import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Paper, Skeleton } from "@mui/material";
import DateFilter from "../components/filters/DateFilter";
import UsersChart from "../components/charts/UsersChart";
import ProfitChart from "../components/charts/ProfitChart";
import SalesChart from "../components/charts/SalesChart";
import { useTheme } from "@mui/material";

const Dashboard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("lastMonth");
  const [selectedCategory, setSelectedCategory] = useState("eletronicos");
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: theme.palette.text.primary,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.palette.text.primary,
        },
      },
      y: {
        ticks: {
          color: theme.palette.text.primary,
        },
      },
    },
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 3 }}>
      <Grid container spacing={2} alignItems="center">
        {/* Cabeçalho e Filtro */}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: '15px' }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Bem-Vindo aos Gráficos
          </Typography>
          <DateFilter onFilterChange={setSelectedFilter} />
        </Grid>

        {/* Gráficos em duas colunas */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            {loading ? <Skeleton variant="rectangular" height={300} /> : <UsersChart filter={selectedFilter} />}
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            {loading ? <Skeleton variant="rectangular" height={300} /> : <SalesChart timeFilter={selectedFilter} />}
          </Paper>
        </Grid>

        {/* Gráfico de Lucro ocupando toda a largura */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            {loading ? <Skeleton variant="rectangular" height={300} /> : <ProfitChart filter={selectedFilter} />}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;