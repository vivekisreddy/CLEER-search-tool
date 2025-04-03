import { useState } from "react";
import { Container, Box, Grid, Paper } from "@mui/material";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Results from "../components/Results";
import Notepad from "../components/Notepad";
import CommunitySection from "../components/CommunitySection";
import Header from "../components/Header";

const HomePage = () => {
    const [results, setResults] = useState([]);

    const handleSearch = (query) => {
        // Dummy search result
        setResults([
            { title: "AI in Education", authors: ["John Doe"], year: 2023, abstract: "An overview of AI applications in education." },
        ]);
    };

    return (
        <>
            <Header />
            <Container maxWidth="md" sx={{ mt: 5 }}>
                <Paper sx={{ p: 4, textAlign: "center", backgroundColor: "white", borderRadius: 2, boxShadow: 3 }}>
                    <SearchBar onSearch={handleSearch} />
                    <Filters />
                    <Grid container spacing={3} justifyContent="center">
                        <Grid item xs={12}>
                            <Results results={results} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Notepad />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CommunitySection />
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </>
    );
};

export default HomePage;
