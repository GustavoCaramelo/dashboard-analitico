import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Grid, Button, Collapse, Box } from "@mui/material";
import useProducts from "../hooks/useProducts";

const translations: Record<string, string> = {
  "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops": "Mochila Fjallraven - Foldsack No. 1, Para 15 Laptops",
  "Mens Casual Premium Slim Fit T-Shirts": "Camiseta Slim Fit Masculina Premium",
  "Mens Cotton Jacket": "Jaqueta de Algodão Masculina",
  "Mens Casual Slim Fit": "Blusa Slim Fit Masculina",
  "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet": "Pulseira Feminina John Hardy Naga Ouro e Prata",
  "Solid Gold Petite Micropave": "Anel de Ouro com Microcravação",
  "White Gold Plated Princess": "Anel Princesa Banhado a Ouro Branco",
  "Pierced Owl Rose Gold Plated Stainless Steel Double": "Brincos Pierced Owl Banhado a Ouro Rosé",
  "WD 2TB Elements Portable External Hard Drive - USB 3.0": "HD Externo WD 2TB Elements - USB 3.0",
  "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s": "SanDisk SSD PLUS 1 TB SSD interno - SATA III 6 Gb/s",
  "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5": "Silicon Power 256 GB SSD 3D NAND A55 SLC Cache Desempenho Boost SATA III 2.5",
  "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive": "WD 4TB Gaming Drive funciona com Playstation 4 Disco rígido externo portátil",
  "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin": "Acer SB220Q bi 21,5 polegadas Full HD (1920 x 1080) IPS Ultrafino",
  "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED": "Monitor curvo para jogos Samsung CHG90 de 49 polegadas e 144 Hz (LC49HG90DMNXZA) – Tela super ultralarga QLED",
  "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats": "BIYLACLESEN Casaco de snowboard feminino 3 em 1 Casacos de inverno",
  "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket": "Jaqueta feminina de couro sintético com capuz removível Lock and Love Moto Biker",
  "Rain Jacket Women Windbreaker Striped Climbing Raincoats": "Jaqueta de chuva feminina corta-vento listrada capas de chuva de escalada",
  "MBJ Women's Solid Short Sleeve Boat Neck V": "MBJ Feminino Sólido Manga Curta Decote Barco V",
  "Opna Women's Short Sleeve Moisture": "Opna Feminino Manga Curta Moisture",
  "DANVOUY Womens T Shirt Casual Cotton Short": "DANVOUY Camiseta Feminina Casual Algodão Curto",
};

const ProductList: React.FC = () => {
  const { products, loading, error } = useProducts();
  const [expanded, setExpanded] = useState(true);
  const usdToBrl = (usd: number) => (usd * 5).toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  

  if (loading) return <Typography>Carregando produtos...</Typography>;
  if (error) return <Typography>Erro ao carregar produtos.</Typography>;

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h5">Lista de Produtos</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setExpanded(!expanded)}
          sx={{ backgroundColor: '#000' }}
        >
          {expanded ? "Recolher Produtos" : "Expandir Produtos"}
        </Button>
      </Box>

      <Collapse in={expanded}>
        <Grid container spacing={2}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card sx={{ height: 250 }}>
                <CardMedia
                  component="img"
                  sx={{ height: 120, objectFit: "contain", padding: 1 }}
                  image={product.image}
                  alt={translations[product.title] || product.title}
                />
                <CardContent>
                  <Typography variant="h6" sx={{ fontSize: "1rem" }}>
                    {translations[product.title] || product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {usdToBrl(product.price)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Collapse>
    </>
  );
};

export default ProductList;