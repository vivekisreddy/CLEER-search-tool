import { Box, Typography, List, ListItem, ListItemText } from "@mui/material";

const AIRecommendations = () => {
    return (
        <Box sx={{ width: 300, bgcolor: "background.paper", p: 2 }}>
            <Typography variant="h6">AI-Powered Suggestions</Typography>
            <List>
                <ListItem>
                    <ListItemText primary="Deep Learning in EdTech" secondary="Trending Topic" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Gamification in Learning" secondary="Based on your search" />
                </ListItem>
            </List>
        </Box>
    );
};

export default AIRecommendations;
