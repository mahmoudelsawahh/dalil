"use client"
import React, { useState } from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 30.9763086,
  lng: 31.1595836
};

const MapComponent = () => {
  const [selectedLocation, setSelectedLocation] = useState(center);

  const handleMapClick = (event) => {
    setSelectedLocation({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
    
  };

  const handelClick = ()=>{
    navigator.geolocation.getCurrentPosition((position) => {
             const { latitude, longitude } = position.coords;
             setSelectedLocation({
                    lat: latitude,
                   lng: longitude
             });
           });
  }

  return (
    <>
     <LoadScript
      googleMapsApiKey={'AIzaSyDJ8uTFj6943jB6JmStfHma3--E0eqTk5w'}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={selectedLocation}
        zoom={20}
        onClick={handleMapClick}
      >
        <Marker position={selectedLocation} />
      </GoogleMap>
    </LoadScript>
      <button onClick={handelClick}>click here</button>
    </>
  );
};

export default MapComponent;

