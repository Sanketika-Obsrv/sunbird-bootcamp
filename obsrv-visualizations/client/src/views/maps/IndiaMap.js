import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material"
import { gridSpacing } from '../../store/constant'
import WorldMap from "./components/Map";
import MainCard from "ui-component/cards/MainCard";
import { useState } from "react";
import weatherRawData from 'data/indianWeather.json';
import _ from 'lodash';
import BasicTable from "ui-component/cards/BasicTable";
import RegionFilter from "./components/Filters";

const PopupTemplate = (props) => {
    const { payload } = props;
    return <div> {payload?.district_name} </div>
}

const IndiaMap = props => {

    const [region, setRegion] = useState([20.5937, 72.9629]);
    const [zoom, setZoom] = useState(4)
    const [selection, setSelection] = useState(null);

    const transformSelection = (payload) => {
        return _.map(payload, (value, key) => {
            return {
                key,
                value
            }
        })
    }

    const markerConfig = {
        fetchCoordinates: (payload) => {
            const { longitude, latitude } = payload;
            return (longitude && latitude) ? [latitude, longitude] : null;
        },
        popupTemplate: (payload) => {
            return <PopupTemplate payload={payload} />
        },
        getLabelAndValueForFilter: marker => {
            const { longitude, latitude, district_name } = marker
            return [district_name, [latitude, longitude]]
        },
        zoomLevel: 7
    }

    const renderSelectionData = () => {
        if (!selection) return null;
        const data = transformSelection(selection);
        if (!data) return null;

        return <Grid item xs={12}>
            <BasicTable data={data} columns={['key', 'value']} />
        </Grid>
    }

    return <MainCard title="Indian Weather Report">
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <RegionFilter setRegion={setRegion} markerConfig={markerConfig} markers={weatherRawData} setZoom={setZoom} />
            </Grid>
            <Grid item xs={12}>
                <WorldMap setSelection={setSelection} markers={weatherRawData} region={region} zoom={zoom} markerConfig={markerConfig} />
            </Grid>
            {renderSelectionData()}
        </Grid>
    </MainCard>
}

export default IndiaMap;