import { useState } from "react";
import {
    Box, Button, Collapse, TextField, FormControl, InputLabel, Select, MenuItem, Slider
} from "@mui/material";

const Filters = () => {
    const [open, setOpen] = useState(false);
    const [yearRange, setYearRange] = useState([2000, 2025]);

    return (
        <Box sx={{ my: 2 }}>
            <Button variant="contained" onClick={() => setOpen(!open)}>
                {open ? "Hide Filters" : "Advanced Filters"}
            </Button>

            <Collapse in={open}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
                    <TextField label="Keywords" variant="outlined" />
                    <FormControl>
                        <InputLabel>Paper Type</InputLabel>
                        <Select defaultValue="">
                            <MenuItem value="journal">Journal</MenuItem>
                            <MenuItem value="conference">Conference</MenuItem>
                            <MenuItem value="dissertation">Dissertation</MenuItem>
                        </Select>
                    </FormControl>
                    <Box>
                        <InputLabel>Publication Year</InputLabel>
                        <Slider
                            value={yearRange}
                            onChange={(e, newValue) => setYearRange(newValue)}
                            valueLabelDisplay="auto"
                            min={1980}
                            max={2025}
                        />
                    </Box>
                </Box>
            </Collapse>
        </Box>
    );
};

export default Filters;
