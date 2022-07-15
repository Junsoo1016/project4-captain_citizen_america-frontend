import React, {useState, useCallback, useEffect} from 'react'
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
  margin: '0 auto',
}

const center = {
  lat: 40.74112,
  lng: -73.98974
}

const options = {
  mapId: "fb4ccbd45b2f920e"
}

function Map({userData}) {
  // console.log(props);
  const isLoaded = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAwcOSQ6hnqoqiXX_1D1ykHOBAZZ2UorHE"
  })

  const image = "./images/Captain_America's_Shield.png"

  const coordinatesList = userData.map((user) => {
    console.log(user);
    let lat = parseFloat(user.lat);
    console.log(lat);
    let lng = parseFloat(user.lng);
    return (
      <MarkerF
      position= {{lat: lat, lng: lng}} 
      icon={{
        // url:"https://i.ibb.co/4JFPCZP/location-dot-solid.png",
        url: image,
        scaledSize: new window.google.maps.Size(28,28)
      }}
      />
    )
  })

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={options}
      >

      await {coordinatesList}

    </GoogleMap>
  ) : <h1>Loading</h1>
}
export default React.memo(Map)