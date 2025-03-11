import React, { useState } from "react";
import { Modal, Box, Typography, Button, Switch, FormControlLabel } from "@mui/material";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  onThemeChange: () => void;
  onSidebarPositionChange: () => void;
  darkMode: boolean; // Adicionando a propriedade darkMode
}

const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose, onThemeChange, onSidebarPositionChange, darkMode }) => {
  const [sidebarLeft, setSidebarLeft] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarLeft(!sidebarLeft);
    onSidebarPositionChange(); // Altera a posição do sidebar
  };

  return (
    <Modal open={open} onClose={onClose} aria-labelledby="settings-modal">
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h6" id="settings-modal">
          Configurações
        </Typography>

        <FormControlLabel
          control={<Switch checked={darkMode} onChange={onThemeChange} />}
          label="Modo Escuro"
          sx={{ mt: 2 }}
        />

        <Button variant="outlined" fullWidth sx={{ mt: 3 }} onClick={handleSidebarToggle}>
          {sidebarLeft ? "Mover Sidebar para Direita" : "Mover Sidebar para Esquerda"}
        </Button>

        <Button variant="contained" sx={{ mt: 3 }} onClick={onClose}>
          Fechar
        </Button>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
