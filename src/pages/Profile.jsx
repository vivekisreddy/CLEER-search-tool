import React from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../components/Header';

function Profile() {
    return (
        <>
            <Header />
            <Box sx={{ p: 4 }}>
                <Typography variant="h4">Profile Page</Typography>
                <Typography>Username: Demo User</Typography>
            </Box>
        </>
    );
}

export default Profile;
