import { FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";
import markers from 'data/markers.json';

const CountryFilters = (props) => {

    const { setRegion } = props;

    const onChange = (e) => {
        const { target } = e;
        if (!target) return;
        const { value } = target;
        const { position } = value;
        setRegion(position);
    }

    const renderRegion = (marker) => {
        const { position, region } = marker;
        if (!position) return null;
        return <MenuItem value={marker}>{region}</MenuItem>
    }

    return <>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <FormControl fullWidth>
                    <InputLabel >Select Region</InputLabel>
                    <Select name="region" placeholder="Region" onChange={onChange}>
                        <MenuItem disabled={true}>Select Region</MenuItem>
                        {markers.map(renderRegion)}
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    </>
}

export default CountryFilters