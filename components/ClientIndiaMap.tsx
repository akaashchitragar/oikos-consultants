'use client'

import dynamic from 'next/dynamic'

const IndiaMap = dynamic(() => import('./IndiaMap'), { 
  ssr: false,
  loading: () => (
    <div className="w-full h-[600px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  )
})

export default IndiaMap 