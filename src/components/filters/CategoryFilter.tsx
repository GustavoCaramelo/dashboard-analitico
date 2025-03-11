// Novo componente para filtro por categoria
import React, { useState } from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const CategoryFilter: React.FC<{ onCategoryChange: (category: string) => void }> = ({ onCategoryChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleChange = (event: any) => {
    const value = event.target.value;
    setSelectedCategory(value);
    onCategoryChange(value);
  };

  return (
    <FormControl sx={{ minWidth: 150, marginTop: "-65px", marginLeft: "20px" }}>
      <InputLabel>Categoria</InputLabel>
      <Select value={selectedCategory} onChange={handleChange} sx={{ marginTop: "7px" }}>
        <MenuItem value="all">Todas</MenuItem>
        <MenuItem value="eletronicos">Eletrônicos</MenuItem>
        <MenuItem value="vestuario">Vestuário</MenuItem>
        <MenuItem value="alimentos">Alimentos</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
