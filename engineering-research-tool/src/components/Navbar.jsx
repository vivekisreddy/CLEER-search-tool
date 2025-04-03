import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1, fontWeight: "bold", letterSpacing: 2 }}>
                    CLEER
                </Typography>
                <Box>
                    <Button color="inherit" sx={{ mx: 1 }} href="/">Home</Button>
                    <Button color="inherit" sx={{ mx: 1 }} href="/saved">Saved Papers</Button>
                    <Button color="inherit" sx={{ mx: 1 }} href="/community">Community</Button>
                    <Button color="inherit" sx={{ mx: 1 }} href="/settings">Settings</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

// ✅ Fix: Ensure this is present
export default Navbar;
