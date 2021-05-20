import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {CartContext} from "../../providers/cart/cart.provider";


const StartupDialog = () =>  {
  const {onceRendered, toggleOnceRendered} = useContext(CartContext);

  const [open, setOpen] = React.useState(onceRendered);

  const handleClose = () => {
    setOpen(false);
    toggleOnceRendered();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This site is under development. Some of the features may not work. All the data are for test purposes.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default StartupDialog;