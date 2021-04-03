import React from 'react';
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import {Typography} from "@material-ui/core";

const UserReview = ({review}) => {
    const {rating, user, date, userReview} = review;

    return (
        <div style={{padding:`3rem 0`, borderBottom:`1px solid #cccccc`}}>
            <Grid container justify="space-between">
                <Grid item>
                    <Box component="fieldset" style={{border:'none'}}>
                        <Rating
                          name="userRating"
                          size="small"
                          value={rating}
                          readOnly
                        />
                    </Box>
                    <Typography variant="caption">{date}</Typography>
                    <Typography variant="subtitle2"> by {user}</Typography>
                </Grid>
                <Grid item>

                </Grid>
            </Grid>
            <Typography variant='body1' style={{marginTop:'2rem'}}>
                {userReview}
            </Typography>
        </div>
    );
};

export default UserReview;