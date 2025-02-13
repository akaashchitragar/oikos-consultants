'use client'

import { useEffect, useRef } from 'react'

interface CustomMapProps {
  location: {
    lat: number;
    lng: number;
  }
}

// Singleton pattern for Google Maps API loading
let isLoading = false
let isLoaded = false

const loadGoogleMapsApi = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (isLoaded) {
      resolve()
      return
    }

    if (isLoading) {
      const checkLoaded = setInterval(() => {
        if (isLoaded) {
          clearInterval(checkLoaded)
          resolve()
        }
      }, 100)
      return
    }

    isLoading = true
    const script = document.createElement('script')
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    script.async = true
    script.defer = true
    
    script.onload = () => {
      isLoaded = true
      isLoading = false
      resolve()
    }

    script.onerror = (error) => {
      isLoading = false
      reject(error)
    }

    document.head.appendChild(script)
  })
}

export default function CustomMap({ location }: CustomMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null)

  useEffect(() => {
    const initMap = async () => {
      try {
        await loadGoogleMapsApi()

        if (!mapRef.current) return

        // Custom map styling
        const customStyle = [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#E3F2FD' }]
          },
          {
            featureType: 'water',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#2E7D32' }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [{ color: '#FAFAFA' }]
          },
          {
            featureType: 'landscape.man_made',
            elementType: 'geometry',
            stylers: [{ color: '#F5F5F5' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.fill',
            stylers: [{ color: '#FFFFFF' }]
          },
          {
            featureType: 'road.highway',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#2E7D32' }, { weight: 2 }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry.fill',
            stylers: [{ color: '#FFFFFF' }]
          },
          {
            featureType: 'road.arterial',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#4CAF50' }, { weight: 1.5 }]
          },
          {
            featureType: 'road.local',
            elementType: 'geometry.fill',
            stylers: [{ color: '#FFFFFF' }]
          },
          {
            featureType: 'road.local',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#A5D6A7' }, { weight: 0.5 }]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [{ color: '#C8E6C9' }]
          },
          {
            featureType: 'poi.business',
            elementType: 'geometry',
            stylers: [{ color: '#E8F5E9' }]
          },
          {
            featureType: 'poi.medical',
            elementType: 'geometry',
            stylers: [{ color: '#E8F5E9' }]
          },
          {
            featureType: 'poi.school',
            elementType: 'geometry',
            stylers: [{ color: '#E8F5E9' }]
          },
          {
            featureType: 'poi',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#1B5E20' }]
          },
          {
            featureType: 'road',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#1B5E20' }]
          },
          {
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#FFFFFF' }, { weight: 3 }]
          },
          {
            featureType: 'transit',
            elementType: 'geometry',
            stylers: [{ color: '#E8F5E9' }]
          },
          {
            featureType: 'transit.station',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#1B5E20' }]
          },
          {
            featureType: 'administrative.locality',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#1B5E20' }, { weight: 1 }]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.stroke',
            stylers: [{ color: '#2E7D32' }, { weight: 1 }]
          },
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#1B5E20' }]
          },
          {
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          }
        ]

        const mapOptions = {
          center: location,
          zoom: 15,
          styles: customStyle,
          disableDefaultUI: true,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: true,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
          gestureHandling: 'cooperative',
          backgroundColor: '#FAFAFA',
          zoomControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
          fullscreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
          },
          restriction: {
            latLngBounds: {
              north: location.lat + 0.05,
              south: location.lat - 0.05,
              east: location.lng + 0.05,
              west: location.lng - 0.05,
            },
            strictBounds: false
          },
          minZoom: 13,
          maxZoom: 18,
          padding: { top: 50, right: 50, bottom: 50, left: 50 }
        }

        // Create or update map instance
        if (!mapInstanceRef.current) {
          mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions)

          // Add a custom overlay for a subtle vignette effect
          const overlay = new google.maps.OverlayView()
          overlay.draw = function() {}
          overlay.setMap(mapInstanceRef.current)
        } else {
          mapInstanceRef.current.setCenter(location)
        }

        // Create or update marker
        if (!markerRef.current) {
          markerRef.current = new google.maps.Marker({
            position: location,
            map: mapInstanceRef.current,
            title: 'Oikos Consultants',
            animation: google.maps.Animation.DROP,
            optimized: false, // Ensures smooth animation
            icon: {
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="42" viewBox="0 0 384 512">
                  <defs>
                    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="#000000" flood-opacity="0.3"/>
                    </filter>
                    <radialGradient id="circle-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                      <stop offset="0%" style="stop-color:#FFFFFF"/>
                      <stop offset="100%" style="stop-color:#F5F5F5"/>
                    </radialGradient>
                  </defs>
                  <path fill="#1B5E20" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z" filter="url(#shadow)"/>
                  <circle cx="192" cy="192" r="65" fill="url(#circle-gradient)"/>
                </svg>
              `)}`,
              scaledSize: new google.maps.Size(36, 48),
              anchor: new google.maps.Point(18, 48),
              labelOrigin: new google.maps.Point(18, -16)
            },
            label: {
              text: 'Oikos Consultants',
              color: '#1B5E20',
              fontWeight: 'bold',
              fontSize: '15px',
              className: 'map-label'
            }
          })

          // Add hover effect to marker
          markerRef.current.addListener('mouseover', () => {
            if (markerRef.current) {
              markerRef.current.setAnimation(google.maps.Animation.BOUNCE)
              setTimeout(() => {
                if (markerRef.current) {
                  markerRef.current.setAnimation(null)
                }
              }, 750)
            }
          })
        } else {
          markerRef.current.setPosition(location)
        }

        // Create or update info window
        if (!infoWindowRef.current) {
          // Remove info window as we're showing the label directly
          infoWindowRef.current = null
        }
      } catch (error) {
        console.error('Error loading Google Maps:', error)
      }
    }

    initMap()

    // Cleanup function
    return () => {
      if (infoWindowRef.current) {
        infoWindowRef.current.close()
      }
    }
  }, [location])

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[400px] rounded-lg overflow-hidden relative"
      style={{
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
    >
      <style jsx global>{`
        .map-label {
          text-shadow: -1px -1px 0 #fff, 
                       1px -1px 0 #fff, 
                       -1px 1px 0 #fff, 
                       1px 1px 0 #fff,
                       0 2px 4px rgba(0, 0, 0, 0.2);
          padding: 4px 0;
          white-space: nowrap;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
          letter-spacing: -0.2px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          margin-top: 4px;
        }

        .map-label:hover {
          transform: translateY(-1px);
          transition: all 0.2s ease;
        }

        .gm-style .gm-style-iw {
          background-color: white;
          border-radius: 8px;
          padding: 12px;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }

        .gm-style-cc {
          display: none;
        }

        .gm-control-active {
          background-color: white !important;
          border-radius: 8px !important;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
          margin: 2px !important;
        }

        .gm-fullscreen-control {
          border-radius: 8px !important;
          margin: 12px !important;
          overflow: hidden;
        }

        .gm-bundled-control {
          margin: 12px !important;
        }

        .gm-bundled-control > div {
          margin-bottom: 10px !important;
        }

        .gm-bundled-control button {
          border-radius: 8px !important;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1) !important;
        }
      `}</style>
    </div>
  )
} 