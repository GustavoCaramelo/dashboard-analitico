import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={3}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Total de Vendas
              </Typography>
              <Typography variant="h4" color="text.secondary">
                $25,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 2 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Usuários Ativos
              </Typography>
              <Typography variant="h4" color="text.secondary">
                1200
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card 3 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Lucro Líquido
              </Typography>
              <Typography variant="h4" color="text.secondary">
                $12,500
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
