import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});

const waterResources = [
  { name: "Periyar River", lat: 9.5400, lng: 76.9400, location: "Periyar" },
  { name: "Bharathapuzha River", lat: 10.7667, lng: 76.3667, location: "Palakkad" },
  { name: "Vembanad Lake", lat: 9.6000, lng: 76.4000, location: "Alappuzha" },
  { name: "Ashtamudi Lake", lat: 8.9304, lng: 76.5849, location: "Kollam" },
  { name: "Pookode Lake", lat: 11.5441, lng: 76.0188, location: "Wayanad" },
  { name: "Athirappilly Waterfalls", lat: 10.2852, lng: 76.5698, location: "Thrissur" },
  { name: "Meenmutty Waterfalls", lat: 11.5372, lng: 76.1257, location: "Wayanad" },
  { name: "Malampuzha Dam", lat: 10.7926, lng: 76.7135, location: "Palakkad" },
  { name: "Idukki Dam", lat: 9.8438, lng: 76.9798, location: "Idukki" },
  { name: "Mattupetty Dam", lat: 10.0798, lng: 77.1250, location: "Idukki" },
  { name: "Meenachil River", lat: 9.6833, lng: 76.5667, location: "Kottayam" },
  { name: "Moovattupuzha River", lat: 9.9000, lng: 76.5750, location: "Ernakulam" },
  { name: "Punnapra Lake", lat: 9.4667, lng: 76.3500, location: "Alappuzha" },
  { name: "Chirakkadavu River", lat: 9.5333, lng: 76.7833, location: "Kottayam" },
  { name: "Kaipuzha Lake", lat: 9.6167, lng: 76.5333, location: "Kottayam" }
];

const MapComponent = ({ searchTerm }) => {
  const [filteredResources, setFilteredResources] = useState([]);

  useEffect(() => {
    setFilteredResources(
      waterResources.filter(resource =>
        resource.location.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  const defaultCenter = filteredResources.length > 0 ? 
    [filteredResources[0].lat, filteredResources[0].lng] : [10.8505, 76.2711];

  return (
    <MapContainer center={defaultCenter} zoom={10} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {filteredResources.map((resource, idx) => (
        <Marker key={idx} position={[resource.lat, resource.lng]}>
          <Popup>{resource.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
