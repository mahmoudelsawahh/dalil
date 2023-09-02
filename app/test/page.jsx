"use client"

// import { useEffect, useState } from "react";
// import axios from "axios";

// function App() {
//   const [currLocation, setCurrLocation] = useState({});
//   const [currLocationJs, setCurrLocationJs] = useState({});
//   useEffect(() => {
//     getLocation();
//     getLocationJs();
//   }, []);

//   const getLocation = async () => {
//     const location = await axios.get("https://ipapi.co/json");
//     setCurrLocation(location.data);
//   };

//   const getLocationJs = () => {
//     navigator.geolocation.getCurrentPosition((position) => {
//       const { latitude, longitude } = position.coords;
//       setCurrLocationJs({ latitude, longitude });
//     });
//   };

//   return (
//     <div>
//       <h1>Current Location JS</h1>
//       <p>Latitude: {currLocationJs.latitude}</p>
//       <p>Longitude: {currLocationJs.longitude}</p>


//       <iframe src={`https://maps.google.com/maps?q=${currLocationJs.latitude},${currLocationJs.longitude}&hl=es;&output=embed`} style={{width : '100%', height : '100%'}}/>
//     </div>
//   );
// }

// export default App;



import React, {useState } from 'react'
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
const containerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 30.9696135,
  lng: 31.1861703
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDJ8uTFj6943jB6JmStfHma3--E0eqTk5w"
  })

  const [map, setMap] = useState(null)
  const [ChangeMark, setChangeMark] = useState(center)
  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])
  

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={ChangeMark}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(e)=> setChangeMark({Lat :  e.latLng.lat()  , Lng : e.latLng.lng()} )}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <MarkerF  position={ChangeMark}  draggable={true} />
      </GoogleMap>
  ) : <></>
}

export default MyComponent


