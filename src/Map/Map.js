import React, {useState, useCallback, useEffect} from 'react'
import { GoogleMap, useJsApiLoader, MarkerF, InfoWindow } from '@react-google-maps/api';
import "./map.css"
import mapStyles from './mapStyles'

const containerStyle = {
  width: '100%',
  height: '100%',
  margin: '0 auto',
}

const center = {
  lat: 40.74112,
  lng: -73.98974
}

// const options = {
//   mapId: "fb4ccbd45b2f920e"
// }



function Map({userData}) {
  // console.log(props);
  const isLoaded = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyAwcOSQ6hnqoqiXX_1D1ykHOBAZZ2UorHE",
    libraries: ['places'],
  })

  const [selectedPlace, setSelectedPlace] = useState(null)
  const [distance, setDistance] = useState(null)
  const [duration, setDuration] = useState(null)
  const [destination, setDestination] = useState(null)



  const image = "./images/Captain_America's_Shield.png"
  const userMarker = "./images/user.png"

  const [selectedMarker, setSelectedMarker] = useState()

  console.log(selectedMarker);

  // const [center, setCenter] = useState(center)
  // const currentLocation = useCallback(() => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {
  //       const { latitude, longitude } = position.coords;
  //       setCenter({ lat: latitude, lng: longitude });
  //     });
  //   }
  // })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        options={{styles: mapStyles}}
      >

      {userData.map((user) => {
    let lat = parseFloat(user.lat);
    let lng = parseFloat(user.lng);

    return (
      <MarkerF
      key={user.id}
      position= {{lat: lat, lng: lng}} 
      icon={{
        url: image,
        scaledSize: new window.google.maps.Size(28,28)
      }}
      onClick={() => {
        setSelectedMarker(user)
        setDestination({lat: lat, lng: lng})
        console.log(user)
        console.log(destination);
      }}
      />
    )
  })
}


      {selectedMarker && 
      (<InfoWindow
      position= {{lat: parseFloat(selectedMarker.lat), lng: parseFloat(selectedMarker.lng)}}
      onCloseClick={() => {
        setSelectedMarker(null)
      }}
      >
      <div className='infoWindow'>
        User Details
        <p>Name: {selectedMarker.first_name} {selectedMarker.last_name}</p>
        <button>Navigate</button>
      </div>
      </InfoWindow>
      )}

    </GoogleMap>
     

    
    
  ) : <h1>Loading</h1>
}
export default React.memo(Map)