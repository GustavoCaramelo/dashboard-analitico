import React, { useState } from "react";
import { FormControl, MenuItem, Select, InputLabel } from "@mui/material";

const DateFilter: React.FC<{ onFilterChange: (filter: string) => void }> = ({ onFilterChange }) => {
  const [selectedFilter, setSelectedFilter] = useState("lastMonth");

  const handleChange = (event: any) => {
    const value = event.target.value;
    setSelectedFilter(value);
    onFilterChange(value);
  };

  return (
    <FormControl sx={{ minWidth: 150, marginTop: '-65px' }}>
      <InputLabel>Filtrar por</InputLabel>
      <Select value={selectedFilter} onChange={handleChange} sx={{ marginTop: '7px' }}>
        <MenuItem value="last7Days">Últimos 7 dias</MenuItem>
        <MenuItem value="lastMonth">Mês Atual</MenuItem>
        <MenuItem value="last6Months">Últimos 6 meses</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DateFilter;
