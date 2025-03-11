import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Definindo o tema conforme o estado darkMode
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  // Função para alternar entre os modos claro e escuro
  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <Sidebar onThemeChange={handleThemeChange} darkMode={darkMode} />
        <main style={{ flexGrow: 1, padding: "20px" }}>
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
