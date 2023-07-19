import { Grid } from "@mui/material"
import { gridSpacing } from '../../store/constant'
import CountryFilters from "./components/CountryFilters";
import WorldMap from "./components/Map";
import MainCard from "ui-component/cards/MainCard";
import { useState } from "react";
import markers from 'data/markers.json';

const GlobalMap = props => {
    const [region, setRegion] = useState([0, 0]);
    return <MainCard title="Weather Report">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <CountryFilters setRegion={setRegion} />
            </Grid>
            <Grid item xs={12}>
                <WorldMap markers={markers} region={region} />
            </Grid>
        </Grid>
    </MainCard>
}

export default GlobalMap;