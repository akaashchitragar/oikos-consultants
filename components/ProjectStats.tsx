'use client'

import CountUp from 'react-countup'

interface ProjectStatsProps {
  completedCount: number
  ongoingCount: number
}

export default function ProjectStats({ completedCount, ongoingCount }: ProjectStatsProps) {
  return (
    <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-8">
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl transform transition-transform group-hover:scale-105"></div>
        <div className="relative text-center p-6 rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-green-100/50 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
          <div className="text-4xl font-bold text-green-800 mb-2 drop-shadow-sm">
            <CountUp 
              end={completedCount} 
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          <div className="text-sm font-medium text-green-900/80">Completed Projects</div>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl transform transition-transform group-hover:scale-105"></div>
        <div className="relative text-center p-6 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-blue-100/50 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
          <div className="text-4xl font-bold text-blue-800 mb-2 drop-shadow-sm">
            <CountUp 
              end={ongoingCount} 
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          <div className="text-sm font-medium text-blue-900/80">Ongoing Projects</div>
        </div>
      </div>
      <div className="relative group hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-2xl transform transition-transform group-hover:scale-105"></div>
        <div className="relative text-center p-6 rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-purple-100/50 backdrop-blur-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
          <div className="text-4xl font-bold text-purple-800 mb-2 drop-shadow-sm">
            <CountUp 
              end={10} 
              suffix="+" 
              duration={2.5}
              enableScrollSpy
              scrollSpyOnce
            />
          </div>
          <div className="text-sm font-medium text-purple-900/80">States Covered</div>
        </div>
      </div>
    </div>
  )
} 