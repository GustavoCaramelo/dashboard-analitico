import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Paper, Skeleton } from "@mui/material";
import DateFilter from "../components/filters/DateFilter";
import UsersChart from "../components/charts/UsersChart";
import ProfitChart from "../components/charts/ProfitChart";
import SalesChart from "../components/charts/SalesChart";
import { useTheme } from "@mui/material";
import CategoryFilter from "../components/filters/CategoryFilter";

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
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Bem-Vindo aos Gráficos
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-start" }}>
          <DateFilter onFilterChange={setSelectedFilter} />
        </Grid>
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <CategoryFilter onCategoryChange={setSelectedCategory} />
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            {loading ? <Skeleton variant="rectangular" height={300} /> : <UsersChart filter={selectedFilter} />}
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2, borderRadius: 2 }}>
            {loading ? <Skeleton variant="rectangular" height={300} /> : <SalesChart timeFilter={selectedFilter} categoryFilter={selectedCategory} />}
          </Paper>
        </Grid>
        
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