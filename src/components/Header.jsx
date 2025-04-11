import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import { Home, Person, LibraryBooks, HelpOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function Header({ onHelp }) {
    const navigate = useNavigate();

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>CLEER</Typography>
                <IconButton color="inherit" onClick={() => navigate('/')}>
                    <Home />
                </IconButton>
                <IconButton color="inherit" onClick={() => navigate('/library')}>
                    <LibraryBooks />
                </IconButton>
                <IconButton color="inherit" onClick={() => navigate('/profile')}>
                    <Person />
                </IconButton>
                <IconButton color="inherit" onClick={onHelp}>
                    <HelpOutline />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
