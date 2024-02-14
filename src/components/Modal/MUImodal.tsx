import React from "react";
import { Modal, Box, Typography } from "@mui/material";

type Props = {
  open: boolean;
  handleClose: () => void;
};
export const MUImodal: React.FC<Props> = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    color: "black",
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          ALERT
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          You must click YES now or else your browser will crash.
        </Typography>
      </Box>
    </Modal>
  );
};
