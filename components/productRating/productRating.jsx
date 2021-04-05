import Box from "@material-ui/core/Box";
import {Typography} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import ratingStyles from './productRating.module.scss';

const ProductRating = ({reviews}) => {
    const averageRating = reviews.reduce((accumulator, currentValue, i, array) => {
        accumulator += currentValue.rating;
        if (i === array.length - 1) {
            return accumulator/array.length;
        }
        return accumulator;
    },0).toFixed(2);

    const numberOfRating = reviews.length;

    return (
        <div className={ratingStyles.ratingContainer}>
            <Box component="fieldset" mr={1} borderColor="transparent">
                <Rating
                  name="totalRating"
                  size="small"
                  precision={0.1}
                  value={parseFloat(averageRating)}
                  readOnly
                />
            </Box>
            <a href="#reviews">
                <Typography>{numberOfRating} ratings</Typography>
            </a>
        </div>
    );
};

export default ProductRating;