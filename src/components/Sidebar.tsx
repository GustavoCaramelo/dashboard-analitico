import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material";
import { Dashboard, Settings, MenuOpen } from "@mui/icons-material";
import SettingsModal from "./SettingsModal"; // Importando o modal
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface SidebarProps {
  onThemeChange: () => void;
  darkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onThemeChange, darkMode }) => {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false); // Estado do modal
  const [sidebarLeft, setSidebarLeft] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="right"
        open={open}
        sx={{
          width: open ? 240 : 60,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 240 : 60,
            transition: "0.3s",
            overflowX: "hidden",
          },
        }}
      >
        <List>
          {/* Botão para Minimizar */}
          <ListItem component="button" onClick={toggleDrawer} sx={{ justifyContent: "center" }}>
            <IconButton>
              <MenuOpen sx={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
            </IconButton>
          </ListItem>

          <Divider />

          {/* Botão Dashboard */}
          <ListItem component="button">
            <ListItemIcon>
              <Dashboard />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItem>

          {/* Botão Configurações */}
          <ListItem component="button" onClick={() => setSettingsOpen(true)}>
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            {open && <ListItemText primary="Configurações" />}
          </ListItem>
        </List>
      </Drawer>

      {/* Modal de Configurações */}
      <SettingsModal
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        onThemeChange={onThemeChange}  // Passando a função de alteração de tema
        onSidebarPositionChange={() => setSidebarLeft(!sidebarLeft)}
        darkMode={darkMode}  // Passando o estado darkMode para o SettingsModal
      />
    </>
  );
};

export default Sidebar;
