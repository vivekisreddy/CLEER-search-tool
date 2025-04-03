import { Accordion, AccordionSummary, AccordionDetails, FormControl, InputLabel, Select, MenuItem, Typography, Slider } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Filters = ({ onFilterChange }) => {
    return (
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">Advanced Filters</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {/* Technical vs Theoretical Balance */}
                <Typography variant="body1">Technical vs Theoretical Balance</Typography>
                <Slider min={0} max={10} step={1} valueLabelDisplay="auto" />

                {/* Field Impact */}
                <FormControl fullWidth>
                    <InputLabel>Impact Across Fields</InputLabel>
                    <Select onChange={(e) => onFilterChange("impact", e.target.value)}>
                        <MenuItem value="high">High</MenuItem>
                        <MenuItem value="medium">Medium</MenuItem>
                        <MenuItem value="low">Low</MenuItem>
                    </Select>
                </FormControl>
            </AccordionDetails>
        </Accordion>
    );
};

export default Filters;
