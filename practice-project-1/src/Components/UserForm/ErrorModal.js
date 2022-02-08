import React from "react";
import { Modal, Box, Typography, Button } from "@mui/material";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#eebff0',
    boxShadow: 24,
    p: 4,
  };

export const ErrorModal = (props) => {
  return (
    <div>
      <Modal open={props.open} onClose={props.closeModal}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {props.error}
          </Typography>
          <Button variant="outlined" onClick={props.closeModal}>
              OK
            </Button>
        </Box>
      </Modal>
    </div>
  );
};
