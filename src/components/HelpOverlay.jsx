import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

function HelpOverlay({ open, onClose, page }) {
    const content = {
        home: "This is the main search page. Use the search bar to explore academic topics...",
        library: "This is your library. View, share, and organize papers here...",
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Help - {page} Page</DialogTitle>
            <DialogContent>
                <Typography>{content[page]}</Typography>
            </DialogContent>
        </Dialog>
    );
}

export default HelpOverlay;
