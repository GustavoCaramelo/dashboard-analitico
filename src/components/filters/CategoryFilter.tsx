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
      <InputLabel sx={{ fontSize: '20px' }}>Categoria</InputLabel>
      <Select value={selectedCategory} onChange={handleChange} sx={{ marginTop: "15px" }}>
        <MenuItem value="all">Todas</MenuItem>
        <MenuItem value="Eletrônicos">Eletrônicos</MenuItem>
        <MenuItem value="Roupas">Roupas</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
