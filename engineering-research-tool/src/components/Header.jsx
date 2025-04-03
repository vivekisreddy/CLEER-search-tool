import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold", letterSpacing: 2 }}>
                    CLEER
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
