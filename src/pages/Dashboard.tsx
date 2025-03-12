import React, { useState } from "react";
import { Grid, Box } from "@mui/material";
import DateFilter from "../components/filters/DateFilter";
import UsersChart from "../components/charts/UsersChart";
import ProfitChart from "../components/charts/ProfitChart";
import SalesChart from "../components/charts/SalesChart";
import { useTheme } from "@mui/material";
import CategoryFilter from "../components/filters/CategoryFilter";

const Dashboard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("lastMonth");
  const [selectedCategory, setSelectedCategory] = useState("Eletrônicos");
  const theme = useTheme();

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
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <h1>Bem Vindo Aos Gráficos</h1>

      {/* Contêiner para os filtros, um ao lado do outro */}
      <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mb: 2 }}>
        <DateFilter onFilterChange={setSelectedFilter} />
        <CategoryFilter onCategoryChange={setSelectedCategory} />
      </Box>

      {/* Gráficos */}
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <UsersChart filter={selectedFilter} />
        </Grid>

        <Grid item xs={12} md={6}>
          <SalesChart timeFilter={selectedFilter} categoryFilter={selectedCategory} />
        </Grid>

        <Grid item xs={12}>
          <ProfitChart filter={selectedFilter} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
