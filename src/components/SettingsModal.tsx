import React from "react";
import { Modal, Box, Typography, Button, Switch, FormControlLabel } from "@mui/material";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
  onThemeChange: () => void;
  onSidebarPositionChange: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose, onThemeChange, onSidebarPositionChange }) => {
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
          control={<Switch onChange={onThemeChange} />}
          label="Modo Escuro"
          sx={{ mt: 2 }}
        />

        <Button variant="outlined" fullWidth sx={{ mt: 3 }} onClick={onSidebarPositionChange}>
          Mudar Sidebar de Lado
        </Button>

        <Button variant="contained" sx={{ mt: 3 }} onClick={onClose}>
          Fechar
        </Button>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
