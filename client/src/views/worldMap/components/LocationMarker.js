import { Marker, Popup, useMap } from 'react-leaflet';
import { Icon } from 'leaflet';
import marker from 'leaflet/dist/images/marker-icon.png';

const myIcon = new Icon({ iconUrl: marker });

const LocationMarker = (props) => {
    const { marker } = props;
    const { position, region = "Unknown" } = marker;
    const map = useMap();

    const eventHandlers = {
        click: () => {
            map.setView(position, 6);
        }
    }

    return position === null ? null : (
        <Marker position={position} icon={myIcon} eventHandlers={eventHandlers} >
            <Popup>{region}</Popup>
        </Marker>
    )
}

export default LocationMarker;