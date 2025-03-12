import React, { useState } from "react";
import { Grid, Box, Typography } from "@mui/material";
import DateFilter from "../components/filters/DateFilter";
import UsersChart from "../components/charts/UsersChart";
import ProfitChart from "../components/charts/ProfitChart";
import SalesChart from "../components/charts/SalesChart";
import { useTheme } from "@mui/material";
import CategoryFilter from "../components/filters/CategoryFilter";

const Dashboard: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState("lastMonth");
  const [selectedCategory, setSelectedCategory] = useState("eletronicos");
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
      {/* Contêiner para alinhar título e filtros corretamente */}
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "flex-start", marginTop: '45px' }}>
          <DateFilter onFilterChange={setSelectedFilter} />
        </Grid>
        
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", marginTop: '-35px' }}>
          <Typography variant="h4" fontWeight="bold" textAlign="center">
            Bem Vindo Aos Gráficos
          </Typography>
        </Grid>
        
        <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "flex-end", marginTop: '45px' }}>
          <CategoryFilter onCategoryChange={setSelectedCategory} />
        </Grid>
      </Grid>

      {/* Gráficos */}
      <Grid container spacing={2} sx={{ marginTop: 0 }}>
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
