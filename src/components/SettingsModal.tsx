import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

interface SettingsModalProps {
  open: boolean;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ open, onClose }) => {
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
        <Typography variant="body1" sx={{ mt: 2 }}>
          Aqui você pode alterar as configurações do sistema.
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }} onClick={onClose}>
          Fechar
        </Button>
      </Box>
    </Modal>
  );
};

export default SettingsModal;
