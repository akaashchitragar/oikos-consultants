declare module '@changey/react-leaflet-markercluster' {
  import { FC, PropsWithChildren } from 'react'
  import { MarkerClusterGroupOptions } from 'leaflet'
  
  interface MarkerClusterGroupProps extends MarkerClusterGroupOptions {
    children: React.ReactNode
  }

  const MarkerClusterGroup: FC<PropsWithChildren<MarkerClusterGroupProps>>

  export default MarkerClusterGroup
} 