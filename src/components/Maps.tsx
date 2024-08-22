import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { Country } from '@/types';
import iconMarket from 'leaflet';
import 'leaflet/dist/leaflet.css';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';


type MapsProps = {
    countries: Country[];
}

const Maps = ({ countries }: MapsProps) => {

    const IconLeaflet = iconMarket.icon({
        iconUrl: iconUrl.src,
        iconRetinaUrl: iconRetinaUrl.src,
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });
    
    iconMarket.Marker.prototype.options.icon = IconLeaflet;
    
    return (
        <MapContainer className='w-full h-screen' center={[0, 0]} zoom={2} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {countries.map((country) => (
                <Marker
                    key={country.code}
                    position={[country.latitude, country.longitude] as LatLngExpression}
                >
                    <Popup>
                        {country.name} ({country.code})
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default Maps;