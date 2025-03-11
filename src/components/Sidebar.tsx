import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Divider } from "@mui/material";
import { Dashboard, Settings, MenuOpen } from "@mui/icons-material";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false); // Começa minimizado

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      anchor="right" // Posiciona no lado direito
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
        {/* Botão para minimizar/maximizar */}
        <ListItem component="button" onClick={toggleDrawer} sx={{ justifyContent: "center" }}>
          <IconButton>
            <MenuOpen sx={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "0.3s" }} />
          </IconButton>
        </ListItem>

        <Divider />

        {/* Opção 1 - Dashboard */}
        <ListItem component="button">
          <ListItemIcon>
            <Dashboard />
          </ListItemIcon>
          {open && <ListItemText primary="Dashboard" />}
        </ListItem>

        {/* Opção 2 - Configurações */}
        <ListItem component="button">
          <ListItemIcon>
            <Settings />
          </ListItemIcon>
          {open && <ListItemText primary="Configurações" />}
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
