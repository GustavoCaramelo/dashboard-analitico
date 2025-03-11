import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import DateFilter from "../components/filters/DateFilter";
import UsersChart from "../components/charts/UsersChart";
import ProfitChart from "../components/charts/ProfitChart";
import SalesChart from "../components/charts/SalesChart";
import { useTheme } from "@mui/material";

const Dashboard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("lastMonth");
  const theme = useTheme();

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: theme.palette.text.primary, // Ajusta a cor da legenda
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: theme.palette.text.primary, // Ajusta cor do eixo X
        },
      },
      y: {
        ticks: {
          color: theme.palette.text.primary, // Ajusta cor do eixo Y
        },
      },
    },
  };

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <h1>Bem Vindo Aos Graficos</h1>
      <Grid container spacing={1}>
        {/* Filtro de Data */}
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <DateFilter onFilterChange={setSelectedFilter} />
        </Grid>

        {/* Gráficos Atualizados */}
        <Grid item xs={12} md={6}>
          <UsersChart filter={selectedFilter} />
        </Grid>

        <Grid item xs={12} md={6}>
          <SalesChart filter={selectedFilter} />
        </Grid>

        <Grid item xs={12}>
          <ProfitChart filter={selectedFilter} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
