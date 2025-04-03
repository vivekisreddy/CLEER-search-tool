import { Card, CardContent, Typography, Button } from "@mui/material";

const PaperCard = ({ paper }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography variant="h6">{paper.title}</Typography>
                <Typography variant="body2" color="textSecondary">
                    {paper.author} • {paper.year}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>{paper.abstract}</Typography>
                <Button size="small" sx={{ mt: 1 }}>Read More</Button>
            </CardContent>
        </Card>
    );
};

export default PaperCard;
