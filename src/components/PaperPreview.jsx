import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckIcon from "@mui/icons-material/Check";

const PaperPreview = ({ paper, onLike, onDislike, onClose }) => {
    if (!paper) return null;

    return (
        <Box
            sx={{
                position: "fixed",
                top: "80px",
                right: 0,
                width: "350px",
                height: "100%",
                bgcolor: "white",
                boxShadow: "-4px 0px 8px rgba(0,0,0,0.2)",
                p: 3,
                zIndex: 2000,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <Box>
                <Typography variant="h6" color="black" gutterBottom>
                    {paper.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {paper.description || "This is a sample paper preview with no abstract provided."}
                </Typography>
            </Box>

            <Box display="flex" justifyContent="space-between" mt={2}>
                <IconButton onClick={() => onDislike(paper.id)} color="error">
                    <CloseIcon />
                </IconButton>
                <IconButton onClick={() => onLike(paper.id)} color="success">
                    <CheckIcon />
                </IconButton>
                <IconButton onClick={onClose} color="primary">
                    Close
                </IconButton>
            </Box>
        </Box>
    );
};

export default PaperPreview;
