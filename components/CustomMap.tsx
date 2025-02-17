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
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&loading=async&libraries=marker`
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
        } else {
          mapInstanceRef.current.setCenter(location)
        }

        // Create marker with custom pin and label
        const marker = new google.maps.Marker({
          position: location,
          map: mapInstanceRef.current,
          animation: google.maps.Animation.DROP,
          title: 'Oikos Consultants',
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 384 512">
                <defs>
                  <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feOffset result="offOut" in="SourceAlpha" dx="0" dy="2" />
                    <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.3"/>
                    </feComponentTransfer>
                    <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                  </filter>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style="stop-color:#2E7D32;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#1B5E20;stop-opacity:1" />
                  </linearGradient>
                </defs>
                <path fill="url(#grad)" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" filter="url(#shadow)"/>
                <circle cx="192" cy="192" r="48" fill="white"/>
              </svg>
            `)}`,
            scaledSize: new google.maps.Size(32, 32),
            anchor: new google.maps.Point(16, 32),
            labelOrigin: new google.maps.Point(16, -8)
          },
          label: {
            text: 'Oikos Consultants',
            className: 'map-marker-label',
            color: '#1B5E20',
            fontWeight: '600',
            fontSize: '13px'
          }
        })

        // Create info window with enhanced styling
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; min-width: 200px;">
              <div style="display: flex; align-items: center; margin-bottom: 8px;">
                <div style="width: 24px; height: 24px; margin-right: 8px;">
                  <svg viewBox="0 0 384 512" style="width: 100%; height: 100%; fill: #2E7D32;">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                  </svg>
                </div>
                <h3 style="margin: 0; color: #2E7D32; font-weight: bold; font-size: 16px;">Oikos Consultants</h3>
              </div>
              <p style="margin: 0; color: #333; line-height: 1.4;">
                #27, Nehru Nagar, Gokul Road,<br>
                Hubballi, Karnataka 580030
              </p>
            </div>
          `,
          pixelOffset: new google.maps.Size(0, -20)
        })

        // Show info window on marker click
        marker.addListener('click', () => {
          infoWindow.open(mapInstanceRef.current, marker)
        })

        // Store references
        markerRef.current = marker
        infoWindowRef.current = infoWindow

        // Add custom styles for the marker label
        const style = document.createElement('style')
        style.textContent = `
          .map-marker-label {
            text-shadow: 1px 1px 2px rgba(255,255,255,1), 
                        -1px -1px 2px rgba(255,255,255,1), 
                        -1px 1px 2px rgba(255,255,255,1), 
                        1px -1px 2px rgba(255,255,255,1);
            white-space: nowrap;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
          }
        `
        document.head.appendChild(style)

      } catch (error) {
        console.error('Error loading Google Maps:', error)
      }
    }

    initMap()

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