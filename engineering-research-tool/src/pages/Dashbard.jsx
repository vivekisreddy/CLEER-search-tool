import { Box, Typography, Grid, Paper } from '@mui/material';

function Dashboard() {
    return (
        <Box sx={{ maxWidth: 1200, mx: 'auto' }}>
            <Typography variant="h4" gutterBottom>
                My Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Saved Papers
                        </Typography>
                        <Typography color="text.secondary">
                            No saved papers yet
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={{ p: 3 }}>
                        <Typography variant="h6" gutterBottom>
                            Recent Searches
                        </Typography>
                        <Typography color="text.secondary">
                            No recent searches
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Dashboard;