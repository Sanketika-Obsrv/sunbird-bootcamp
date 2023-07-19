import { Box } from '@mui/material';
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useEffect } from 'react';
import LocationMarker from './LocationMarker';

const Map = (props) => {

    const { region } = props;
    const map = useMap();

    const setView = ({ coordinates }) => {
        map.setView(coordinates, map.getZoom(), {
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
    const { markers = [], region } = props;

    const renderMarker = (marker) => {
        const { position } = marker;
        if (!position) return null;
        return <LocationMarker marker={marker} />
    }

    return <Box>
        <MapContainer center={[0, 0]} zoom={1} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {markers.map(renderMarker)}
            <Map region={region} />
        </MapContainer>
    </ Box>
}

export default WorldMap;