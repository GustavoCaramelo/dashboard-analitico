import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarLeft, setSidebarLeft] = useState(true); // Novo estado para posição do sidebar

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
      <div style={{ display: "flex", flexDirection: sidebarLeft ? "row" : "row-reverse" }}>
        <Sidebar
          darkMode={darkMode}
          onThemeChange={() => setDarkMode(!darkMode)}
          sidebarLeft={sidebarLeft}
          onSidebarPositionChange={() => setSidebarLeft(!sidebarLeft)} // Alterna o lado
        />
        <main style={{ flexGrow: 1, padding: "20px" }}>
          <Dashboard />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
