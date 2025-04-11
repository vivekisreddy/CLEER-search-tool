import React from 'react';
import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';

function Sidebar({ open, onClose }) {
    const history = [
        {
            date: 'April 10',
            prompts: ['What is AI?', 'Applications in education'],
        },
        {
            date: 'April 9',
            prompts: ['Digital tools for research'],
        },
    ];

    return (
        <Drawer anchor="left" open={open} onClose={onClose}>
            <div style={{ width: 250, padding: 16 }}>
                <Typography variant="h6">Search History</Typography>
                {history.map((session, i) => (
                    <div key={i}>
                        <Typography variant="subtitle2">{session.date}</Typography>
                        <List>
                            {session.prompts.map((p, idx) => (
                                <ListItem button key={idx}>
                                    <ListItemText primary={p} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                ))}
            </div>
        </Drawer>
    );
}

export default Sidebar;
