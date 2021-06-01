import React, {useState} from 'react';
import Image from "next/image";

import { makeStyles } from '@material-ui/core/styles';
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Close";
import {IconButton} from "@material-ui/core";

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
      height: '90vh',
      padding: '3rem'
  },
  closeIcon: {
      position: 'absolute',
      top:'1rem',
      right:'1rem'
  }
}));

export const ImageGallery = ({imgArr}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
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

        <div className={styles.imgContainer} onClick={() => handleOpen()}>
            <Image src={imgArr[currentImage]} alt='product' layout='fill' objectFit='contain'/>
        </div>

        <div className={styles.thumbs}>
            {
                imgArr.map((img, i) => (
                    <div key={i} className={styles.thumbContainer} onClick={() => setCurrentImage(i)}>
                        <div className={styles.thumbWrapper}>
                            <Image src={img} alt="product thumbnail" layout='fill'/>
                        </div>
                    </div>
                ))
            }
        </div>
        {/******************************* Main Content End ********************************/}

      <Dialog open={open} onClose={handleClose}>
          <div className={styles.dialogImageContainer}>
              {/*<img src={imgArr[currentImage]} alt="product full image" className={classes.fullImage}/>*/}
              <div className={styles.fullImageWrapper}>
                  <Image src={imgArr[currentImage]} alt='product full Image' layout='fill' objectFit='contain'/>
              </div>
            <IconButton className={classes.closeIcon} onClick={() => handleClose()}> {/* close icon */}
                <CloseIcon/>
            </IconButton>
          </div>
      </Dialog>

    </>
  );
};

export default ImageGallery;