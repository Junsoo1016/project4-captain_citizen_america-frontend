import React, {useState, useCallback, useEffect} from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '50%',
  height: '300px',
  margin: '0 auto',
}

const center = {
  lat: 40.712776,
  lng: -74.005974
}

const options = {
  mapId: "fb4ccbd45b2f920e"
}

function Map() {
  // console.log(props);
  const isLoaded = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAwcOSQ6hnqoqiXX_1D1ykHOBAZZ2UorHE"
  })

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={options}
      >
    </GoogleMap>
  ) : <h1>Loading</h1>
}
export default React.memo(Map)