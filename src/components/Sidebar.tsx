import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material";
import { Dashboard, Settings, MenuOpen } from "@mui/icons-material";
import SettingsModal from "./SettingsModal"; // Importando o modal

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false); // Estado do modal

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
      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </>
  );
};

export default Sidebar;
