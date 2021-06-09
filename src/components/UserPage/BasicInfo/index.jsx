import React from 'react';
import {Grid,Typography} from '@material-ui/core'


const BasicInfo = () => {
    return (
        <Grid container spacing={2} >
            <Grid item container xs={12}>
                <Grid item xs={4}><Typography  variant="subtitle2" color="textPrimary">First Name:</Typography></Grid>
                <Grid item xs={8}><Typography variant="body2" color="textSecondary">John</Typography> </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={4}><Typography  variant="subtitle2" color="textPrimary">Last Name:</Typography></Grid>
                <Grid item xs={8}><Typography variant="body2" color="textSecondary">Cena</Typography> </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={4}><Typography  variant="subtitle2" color="textPrimary">Phone Number:</Typography></Grid>
                <Grid item xs={8}><Typography variant="body2" color="textSecondary">0123456789</Typography> </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={4}><Typography  variant="subtitle2" color="textPrimary">Gender:</Typography></Grid>
                <Grid item xs={8}><Typography variant="body2" color="textSecondary">Male</Typography> </Grid>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={4}><Typography  variant="subtitle2" color="textPrimary">Date of Birth:</Typography></Grid>
                <Grid item xs={8}><Typography variant="body2" color="textSecondary">5 April 1991</Typography> </Grid>
            </Grid>


        </Grid>
    );
};

export default BasicInfo;