import { useState } from "react";
import { TextField, InputAdornment, IconButton, Box, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const suggestedKeywords = ["STEM pedagogy", "Project-based learning", "AI in education", "Interdisciplinary research"];

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    return (
        <Box textAlign="center" sx={{ mt: 3 }}>
            <TextField
                variant="outlined"
                placeholder="Search for research papers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && onSearch(query)}
                sx={{ width: "60%", backgroundColor: "white", borderRadius: 1 }}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <IconButton onClick={() => onSearch(query)}>
                            <SearchIcon />
                        </IconButton>
                    ),
                }}
            />
            {/* Buttons for quick searches */}
            <Box mt={2}>
                {suggestedKeywords.map((word, index) => (
                    <Button key={index} variant="outlined" color="primary" sx={{ m: 1 }} onClick={() => setQuery(word)}>
                        {word}
                    </Button>
                ))}
            </Box>
        </Box>
    );
};

export default SearchBar;
