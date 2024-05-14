import React, { useState, useEffect } from 'react';
import L from 'leaflet';

import './AdminMapPage.css'; // Import your CSS file for styling

const AdminMapPage = () => {
  const [map, setMap] = useState(null);
  const [waterResources, setWaterResources] = useState([]);

  useEffect(() => {
    // Initialize the map
    const leafletMap = L.map('map').setView([0, 0], 2); // Set initial view to the world

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(leafletMap);

    setMap(leafletMap);

    // Cleanup function to remove the map instance
    return () => {
      leafletMap.remove();
    };
  }, []);

  const handleMapClick = (e) => {
    // Add marker for clicked location
    const newResource = {
      name: `Water Resource ${waterResources.length + 1}`,
      coordinates: [e.latlng.lat, e.latlng.lng]
    };
    setWaterResources([...waterResources, newResource]);
  };

  useEffect(() => {
    if (map) {
      // Clear previous water resource markers
      map.eachLayer(layer => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Add markers for water resources
      waterResources.forEach(resource => {
        L.marker(resource.coordinates)
          .addTo(map)
          .bindPopup(`<h3>${resource.name}</h3>`);
      });

      // Add click event listener for adding new water resources
      map.on('click', handleMapClick);
    }
  }, [map, waterResources]);

  return (
    <div className="admin-map-container">
      <div id="map" className="map"></div>
    </div>
  );
}

export default AdminMapPage;
