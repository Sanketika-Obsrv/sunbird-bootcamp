import { Marker, Popup, useMap } from 'react-leaflet';
import L, { Icon } from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png';

const myIcon = new Icon({ iconUrl: marker });

const LocationMarker = (props) => {
    const { marker, markerConfig, setSelection } = props;
    const { fetchCoordinates, popupTemplate, zoomLevel = 6 } = markerConfig;
    const coordinates = fetchCoordinates(marker);

    const map = useMap();

    const eventHandlers = {
        click: () => {
            setSelection && setSelection(marker);
            map.setView(coordinates, zoomLevel);
        }
    }

    const renderMarker = () => {
        if (!coordinates) return null;
        return <Marker position={coordinates} icon={myIcon} eventHandlers={eventHandlers} >
            <Popup>
                {popupTemplate(marker)}
            </Popup>
        </Marker>
    }

    return <>
        {renderMarker()}
    </>
}

export default LocationMarker;