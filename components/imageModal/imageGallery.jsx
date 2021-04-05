import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import styles from './imageGallery.module.scss';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  fullImage: {
      height: '90vh'
  }
}));

export const ImageGallery = ({imgArr}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [currentImage, setCurrentImage] = useState(0);

   const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
        {/******************************* Main Content Start ********************************/}

        <div className={styles.imgContainer}>
            <img src={imgArr[currentImage]} alt="product" onClick={handleOpen}/>
        </div>

        <div className={styles.imgThumbs}>
            {
                imgArr.map((img, i) => (
                    <img key={i} src={img} alt="product thumbnail" onClick={()=>{setCurrentImage(i)}}/>
                ))
            }
        </div>
        {/******************************* Main Content End ********************************/}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <img src={imgArr[currentImage]} alt="product full image" className={classes.fullImage}/>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ImageGallery;