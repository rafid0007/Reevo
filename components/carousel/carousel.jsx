import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Hidden } from "@material-ui/core";
import carouselStyle from './carousel.module.scss';

const images = [
  "https://i.ibb.co/DfGW2JH/hero-image.jpg",
  "https://i.ibb.co/Jc384sq/carousel-2-desktop.jpg",
  "https://i.ibb.co/S0z39Zb/carousel-3-desktop.jpg"
];

const mobileImages = [
  "https://i.ibb.co/10M2X24/carousel-1-mobile.jpg",
  "https://i.ibb.co/DfGW2JH/hero-image.jpg",
];

const HomeCarousel = ({ height }) => {
  return (
    <>
      <Hidden xsDown>
        <Carousel interval={5000} animation='slide'>
          {images.map((item, i) => (
            <Item key={i} item={item} height={height} />
          ))}
        </Carousel>
      </Hidden>
      <Hidden smUp>
        <Carousel interval={5000} animation="slide" navButtonsAlwaysInvisible>
          {mobileImages.map((item, i) => (
            <Item key={i} item={item} height={height} />
          ))}
        </Carousel>
      </Hidden>
    </>
  );
};

const Item = ({height, item}) => {
  return (
    <Paper elevation={0} style={{ height: height }}>
        <img src={item} alt="carousel photo" className={carouselStyle.carouselImage}/>
    </Paper>
  );
};

export default HomeCarousel;
