import { useState } from "react";
import { Box, TextField, Button } from "@mui/material";

const Notepad = () => {
    const [note, setNote] = useState("");

    return (
        <Box>
            <TextField
                label="Quick Notes"
                multiline
                rows={4}
                fullWidth
                variant="outlined"
                value={note}
                onChange={(e) => setNote(e.target.value)}
            />
            <Button variant="contained" sx={{ mt: 2 }}>Save Note</Button>
        </Box>
    );
};

export default Notepad;
