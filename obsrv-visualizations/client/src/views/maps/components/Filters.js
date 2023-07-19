import { FormControl, InputLabel, MenuItem, Select, Grid } from "@mui/material";

const RegionFilter = (props) => {

    const { setRegion, markers, markerConfig, setZoom } = props;

    const onChange = (e) => {
        const { target } = e;
        if (!target) return;
        const { value: marker } = target;
        const coordinates = markerConfig.fetchCoordinates(marker);
        setRegion(coordinates);
        setZoom(markerConfig.zoomLevel);
    }

    const renderRegion = (marker) => {
        const [label, value] = markerConfig.getLabelAndValueForFilter(marker);
        return <MenuItem value={marker}>{label}</MenuItem>
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

export default RegionFilter