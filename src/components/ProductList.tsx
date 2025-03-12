import React from "react";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import useProducts from "../hooks/useProducts";

const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts();

  if (loading) return <Typography>Carregando produtos...</Typography>;
  if (error) return <Typography>Erro ao carregar produtos.</Typography>;

  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card>
            <CardMedia component="img" height="140" image={product.image} alt={product.title} />
            <CardContent>
              <Typography variant="h6">{product.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {product.price} USD
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
