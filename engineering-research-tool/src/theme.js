import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: { main: "#B22222" }, // Deep red
        secondary: { main: "#D3B8AE" }, // Beige tone
        background: { default: "#F8F8F8", paper: "#FFFFFF" }, // Light gray background
        text: { primary: "#1C1C1C", secondary: "#606060" }, // Black and gray text
    },
    typography: {
        fontFamily: "Arial, sans-serif",
        h1: { fontWeight: 700, color: "#B22222" },
        h6: { fontWeight: 500, color: "#333" },
        body1: { color: "#444" },
    },
});

export default theme;
