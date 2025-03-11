import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import SalesChart from "../components/charts/SalesChart";
import UsersChart from "../components/charts/UsersChart";
import ProfitChart from "../components/charts/ProfitChart";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {/* Cards de Indicadores */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Total de Vendas</Typography>
              <Typography variant="h4" color="text.secondary">
                $25,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Usuários Ativos</Typography>
              <Typography variant="h4" color="text.secondary">
                1200
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5">Lucro Líquido</Typography>
              <Typography variant="h4" color="text.secondary">
                $12,500
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Gráficos */}
        <Grid item xs={12} md={6}>
          <SalesChart />
        </Grid>

        <Grid item xs={12} md={6}>
          <UsersChart />
        </Grid>

        <Grid item xs={12}>
          <ProfitChart />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
