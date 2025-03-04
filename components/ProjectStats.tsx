'use client'

import CountUp from 'react-countup'
import { CheckCircle2, Clock, Map } from 'lucide-react'

interface ProjectStatsProps {
  completedCount: number
  ongoingCount: number
}

export default function ProjectStats({ completedCount, ongoingCount }: ProjectStatsProps) {
  return (
    <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
      {/* Completed Projects */}
      <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-600 hover:border-l-8 hover:-translate-y-1 cursor-pointer">
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-50 rounded-tr-full opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"></div>
        
        <div className="relative p-6 flex flex-col items-center sm:items-start">
          <div className="mb-4 p-2.5 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
            <CheckCircle2 className="w-7 h-7 text-green-600 group-hover:text-green-700 group-hover:rotate-12 transition-all duration-300" />
          </div>
          
          <div className="text-5xl font-bold text-green-700 mb-2 flex items-center gap-1 group-hover:scale-110 origin-left transition-transform duration-300">
            <CountUp 
              end={completedCount} 
              duration={2}
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          
          <div className="text-base font-semibold text-gray-700 group-hover:text-green-800 transition-colors duration-300">Completed Projects</div>
        </div>
      </div>
      
      {/* Ongoing Projects */}
      <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-emerald-600 hover:border-l-8 hover:-translate-y-1 cursor-pointer">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-full opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-emerald-50 rounded-tr-full opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"></div>
        
        <div className="relative p-6 flex flex-col items-center sm:items-start">
          <div className="mb-4 p-2.5 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors duration-300">
            <Clock className="w-7 h-7 text-emerald-600 group-hover:text-emerald-700 group-hover:rotate-12 transition-all duration-300" />
          </div>
          
          <div className="text-5xl font-bold text-emerald-700 mb-2 flex items-center gap-1 group-hover:scale-110 origin-left transition-transform duration-300">
            <CountUp 
              end={ongoingCount} 
              duration={2}
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          
          <div className="text-base font-semibold text-gray-700 group-hover:text-emerald-800 transition-colors duration-300">Ongoing Projects</div>
        </div>
      </div>
      
      {/* States Covered */}
      <div className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-teal-600 hover:border-l-8 hover:-translate-y-1 cursor-pointer">
        <div className="absolute top-0 right-0 w-32 h-32 bg-teal-100 rounded-bl-full opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"></div>
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-50 rounded-tr-full opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"></div>
        
        <div className="relative p-6 flex flex-col items-center sm:items-start">
          <div className="mb-4 p-2.5 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
            <Map className="w-7 h-7 text-teal-600 group-hover:text-teal-700 group-hover:rotate-12 transition-all duration-300" />
          </div>
          
          <div className="text-5xl font-bold text-teal-700 mb-2 flex items-center gap-1 group-hover:scale-110 origin-left transition-transform duration-300">
            <CountUp 
              end={10} 
              suffix="+" 
              duration={2}
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          
          <div className="text-base font-semibold text-gray-700 group-hover:text-teal-800 transition-colors duration-300">States Covered</div>
        </div>
      </div>
    </div>
  )
} 