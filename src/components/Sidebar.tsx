import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material";
import { Dashboard, Settings, MenuOpen } from "@mui/icons-material";
import SettingsModal from "./SettingsModal";

interface SidebarProps {
  darkMode: boolean;
  onThemeChange: () => void;
  sidebarLeft: boolean;
  onSidebarPositionChange: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ darkMode, onThemeChange, sidebarLeft, onSidebarPositionChange }) => {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        anchor={sidebarLeft ? "left" : "right"}
        open={open}
        sx={{
          width: open ? 240 : 60,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: open ? 240 : 60,
            transition: "0.3s",
            overflowX: "hidden",
            backgroundColor: darkMode ? "#1E1E1E" : "#fff",
            color: darkMode ? "#E0E0E0" : "#000",
          },
        }}
      >
        <List>
          {/* Botão de abrir/fechar sidebar */}
          <ListItem 
            component="button" 
            onClick={toggleDrawer} 
            sx={{ 
              justifyContent: "center", 
              "&:hover": { backgroundColor: darkMode ? "#2E2E2E" : "#f0f0f0" } 
            }}
          >
            <IconButton sx={{ color: darkMode ? "#717171" : "#000" }}>
              <MenuOpen sx={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
            </IconButton>
          </ListItem>

          <Divider sx={{ backgroundColor: darkMode ? "#444" : "#ccc" }} />

          {/* Botão Dashboard */}
          <ListItem 
            component="button" 
            sx={{ 
              "&:hover": { backgroundColor: darkMode ? "#2E2E2E" : "#f0f0f0" } 
            }}
          >
            <ListItemIcon sx={{ color: darkMode ? "#717171" : "#000" }}>
              <Dashboard />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItem>

          {/* Botão Configurações */}
          <ListItem 
            component="button" 
            onClick={() => setSettingsOpen(true)}
            sx={{ 
              "&:hover": { backgroundColor: darkMode ? "#2E2E2E" : "#f0f0f0" } 
            }}
          >
            <ListItemIcon sx={{ color: darkMode ? "#717171" : "#000" }}>
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
        onThemeChange={onThemeChange}
        onSidebarPositionChange={onSidebarPositionChange}
      />
    </>
  );
};

export default Sidebar;
