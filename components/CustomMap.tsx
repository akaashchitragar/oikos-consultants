'use client'

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

interface CustomMapProps {
  location: {
    lat: number;
    lng: number;
  }
}

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const customStyle = [
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#E3F2FD' }]
  },
  {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [{ color: '#E8F5E9' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#FFFFFF' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#C8E6C9' }]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#2E7D32' }]
  }
]

export default function CustomMap({ location }: CustomMapProps) {
  const options = {
    styles: customStyle,
    disableDefaultUI: false,
    zoomControl: true,
    mapTypeControl: false,
    scaleControl: true,
    streetViewControl: false,
    rotateControl: false,
    fullscreenControl: true,
    backgroundColor: '#E8F5E9',
  }

  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={location}
        zoom={15}
        options={options}
      >
        <Marker
          position={location}
          icon={{
            path: google.maps.SymbolPath.CIRCLE,
            scale: 10,
            fillColor: '#2E7D32',
            fillOpacity: 1,
            strokeColor: '#FFFFFF',
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </LoadScript>
  )
} 