import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Hidden } from "@material-ui/core";
import carouselStyle from "./carousel.module.scss";
import Image from "next/image";
import Proptypes from "prop-types";

const CustomCarousel = ({ height, images, mobileImages }) => {
  return (
    <>
      <Hidden xsDown>
        <Carousel interval={5000} animation="slide" navButtonsAlwaysInvisible>
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

const Item = ({ height, item }) => {
  return (
    <Paper elevation={0} style={{ height: height, position: "relative" }}>
      <Image
        src={item}
        className={carouselStyle.carouselImage}
        alt="carousel photo"
        layout="fill"
        objectFit="cover"
        priority
      />
    </Paper>
  );
};

CustomCarousel.propTypes = {
  height: Proptypes.string.isRequired,
  images: Proptypes.array.isRequired,
  mobileImages: Proptypes.array.isRequired,
};

export default CustomCarousel;