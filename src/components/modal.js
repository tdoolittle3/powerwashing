import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ModalButtonMui = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Contact
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          Call Rob 123-456-7890
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            This is the modal content. You can customize it as needed.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          {/* Add more action buttons if necessary */}
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalButtonMui;
