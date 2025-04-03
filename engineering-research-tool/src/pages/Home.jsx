import { Box, Container, Typography } from "@mui/material";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

const Home = () => {
    return (
        <Container sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h4" gutterBottom>Engineering Education Research Search</Typography>
            <SearchBar />
            <Filters />
        </Container>
    );
};

export default Home;
