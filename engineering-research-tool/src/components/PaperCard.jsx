import { useState } from "react";
import { Container, Box } from "@mui/material";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Results from "../components/Results";

const HomePage = () => {
    const [results, setResults] = useState([]);

    const handleSearch = (query) => {
        // Fake data for now
        setResults([
            {
                title: "AI in Engineering Education",
                authors: ["John Doe", "Jane Smith"],
                year: 2023,
                abstract: "This paper explores AI applications in education.",
            },
        ]);
    };

    return (
        <>
            <Navbar />
            <Container>
                <Box my={4}>
                    <SearchBar onSearch={handleSearch} />
                    <Filters />
                    <Results results={results} />
                </Box>
            </Container>
        </>
    );
};

export default HomePage;
