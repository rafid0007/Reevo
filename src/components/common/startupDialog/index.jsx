import React, {useContext} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import {CartContext} from "../../../providers/Cart";
import Proptypes from 'prop-types';


const StartupDialog = ({content, buttonColor}) =>  {
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
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={buttonColor} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

StartupDialog.prototype = {
  color: Proptypes.oneOf(['primary', 'secondary'])
}

export default StartupDialog;