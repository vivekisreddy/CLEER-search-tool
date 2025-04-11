import React, { useState } from 'react';
import { Box, TextField, IconButton, Typography } from '@mui/material';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import HelpOverlay from '../components/HelpOverlay';
import MenuIcon from '@mui/icons-material/Menu';

function Home() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);

    return (
        <>
            <Header onHelp={() => setHelpOpen(true)} />
            <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <HelpOverlay open={helpOpen} onClose={() => setHelpOpen(false)} page="home" />
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    bgcolor: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    px: 2,
                    textAlign: 'center',
                }}
            >
                <IconButton
                    onClick={() => setSidebarOpen(true)}
                    sx={{ position: 'absolute', top: 80, left: 20 }}
                >
                    <MenuIcon />
                </IconButton>

                <Typography variant="h2" sx={{ color: '#8B0000', mb: 4, fontWeight: 'bold' }}>
                    CLEER
                </Typography>

                <TextField
                    label="Search..."
                    variant="outlined"
                    fullWidth
                    sx={{
                        maxWidth: 600,
                        input: { fontSize: '1.25rem' },
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '12px',
                            bgcolor: '#f5f5f5',
                        },
                        '& label': {
                            fontSize: '1.2rem',
                            color: '#555',
                        },
                    }}
                />
            </Box>
        </>
    );
}

export default Home;
