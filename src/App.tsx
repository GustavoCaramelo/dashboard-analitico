import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import ProductsPage from "./pages/ProductList"; // Importando a página de produtos
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarLeft, setSidebarLeft] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#f4f4f4",
        paper: darkMode ? "#1E1E1E" : "#fff",
      },
      text: {
        primary: darkMode ? "#E0E0E0" : "#000",
        secondary: darkMode ? "#B0B0B0" : "#555",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ display: "flex", flexDirection: sidebarLeft ? "row" : "row-reverse" }}>
          <Sidebar
            darkMode={darkMode}
            onThemeChange={() => setDarkMode(!darkMode)}
            sidebarLeft={sidebarLeft}
            onSidebarPositionChange={() => setSidebarLeft(!sidebarLeft)}
          />
          <main style={{ flexGrow: 1, padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/products" element={<ProductsPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
