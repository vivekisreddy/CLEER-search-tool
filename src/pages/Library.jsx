import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, IconButton, Grid, Paper } from '@mui/material';
import { Share, Group, Download } from '@mui/icons-material';
import Header from '../components/Header';
import HelpOverlay from '../components/HelpOverlay';
import PaperPreview from '../components/PaperPreview';

function Library() {
    const [tabIndex, setTabIndex] = useState(0);
    const [helpOpen, setHelpOpen] = useState(false);
    const [previewOpen, setPreviewOpen] = useState(false);
    const folders = ['AI', 'Robotics', 'Education'];

    const papers = ['Understanding LLMs', 'Tools for Learning', 'Automation Future'];

    return (
        <>
            <Header onHelp={() => setHelpOpen(true)} />
            <HelpOverlay open={helpOpen} onClose={() => setHelpOpen(false)} page="library" />
            <Box sx={{ p: 2 }}>
                <Tabs value={tabIndex} onChange={(e, val) => setTabIndex(val)}>
                    {folders.map((f, idx) => (
                        <Tab key={idx} label={
                            <Box display="flex" alignItems="center">
                                <Group fontSize="small" />
                                <Typography ml={1}>{f}</Typography>
                            </Box>
                        } />
                    ))}
                </Tabs>
                <Box mt={2}>
                    <Grid container spacing={2}>
                        {papers.map((title, idx) => (
                            <Grid item xs={12} md={4} key={idx}>
                                <Paper elevation={2} sx={{ p: 2 }}>
                                    <Typography>{title}</Typography>
                                    <IconButton onClick={() => alert('Shared')}><Share /></IconButton>
                                    <IconButton onClick={() => alert('Exported')}><Download /></IconButton>
                                    <IconButton onClick={() => setPreviewOpen(true)}>Preview</IconButton>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <PaperPreview open={previewOpen} onClose={() => setPreviewOpen(false)} title="Paper Title" />
        </>
    );
}

export default Library;
