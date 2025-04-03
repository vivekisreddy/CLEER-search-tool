import { Grid } from "@mui/material";
import PaperCard from "./PaperCard";

const dummyPapers = [
    { title: "AI in Engineering Education", author: "John Doe", year: 2023, abstract: "Exploring AI-based learning models..." },
    { title: "Machine Learning for Pedagogy", author: "Jane Smith", year: 2022, abstract: "Analyzing ML techniques for adaptive learning..." }
];

const ResultsList = () => {
    return (
        <Grid container spacing={2}>
            {dummyPapers.map((paper, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <PaperCard paper={paper} />
                </Grid>
            ))}
        </Grid>
    );
};

export default ResultsList;
