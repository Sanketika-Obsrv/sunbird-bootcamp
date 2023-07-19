import { Box } from '@mui/material';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useEffect } from 'react';
import LocationMarker from './LocationMarker';

const Map = (props) => {

    const { region, zoom } = props;
    const map = useMap();

    const setView = ({ coordinates }) => {
        map.setView(coordinates, zoom || map.getZoom(), {
            animate: true
        });
    }

    useEffect(() => {
        if (region) {
            setView({ coordinates: region });
        }
    }, [region])

    return null
}

const WorldMap = (props) => {
    const { markers = [], region, zoom = 1, markerConfig, setSelection } = props;

    const renderMarker = (marker) => {
        return <LocationMarker setSelection={setSelection} marker={marker} markerConfig={markerConfig} />
    }

    return <Box>
        <MapContainer id={Math.random()} center={region} zoom={zoom} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map(renderMarker)}
            <Map region={region} zoom={zoom} />
        </MapContainer>
    </ Box>
}

export default WorldMap;