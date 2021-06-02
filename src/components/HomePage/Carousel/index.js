import CustomCarousel from "./carousel";
import PropTypes from 'prop-types';

const images = [
  "https://i.ibb.co/DfGW2JH/hero-image.jpg",
  "https://i.ibb.co/Jc384sq/carousel-2-desktop.jpg",
  "https://i.ibb.co/S0z39Zb/carousel-3-desktop.jpg",
];

const mobileImages = [
  "https://i.ibb.co/Jc384sq/carousel-2-desktop.jpg",
  "https://i.ibb.co/DfGW2JH/hero-image.jpg",
  "https://i.ibb.co/S0z39Zb/carousel-3-desktop.jpg"
];

const CarouselContainer = ({ height }) => {
  return (
    <CustomCarousel
      images={images}
      mobileImages={mobileImages}
      height={height}
    />
  );
};

CarouselContainer.propTypes = {
    height: PropTypes.string.isRequired
}

export default CarouselContainer;