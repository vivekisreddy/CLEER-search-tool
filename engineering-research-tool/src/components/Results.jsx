import PaperCard from "./PaperCard";
import { Grid, Typography } from "@mui/material";

const Results = ({ results }) => {
    return (
        <>
            {results.length === 0 ? (
                <Typography variant="h6">No results found.</Typography>
            ) : (
                <Grid container spacing={2}>
                    {results.map((paper, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <PaperCard paper={paper} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </>
    );
};

export default Results;
