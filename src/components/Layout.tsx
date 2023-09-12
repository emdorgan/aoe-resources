import { Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';

const Layout: React.FC = () => {
    return (
        <Grid container spacing={2}>
            <Grid xs={12}>
                <Typography variant="h6">
                    Header
                </Typography>
            </Grid>
        </Grid>
    );
};

export default Layout;