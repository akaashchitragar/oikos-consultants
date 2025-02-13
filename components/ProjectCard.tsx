import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building2, Clock, CheckCircle2, Calendar, Target } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  client: string
  coordinates: [number, number]
  isOngoing?: boolean
  sector?: string
  description?: string
  duration?: string
  impact?: string[]
}

export default function ProjectCard({ 
  title, 
  client, 
  coordinates, 
  isOngoing = false,
  sector,
  description,
  duration,
  impact
}: ProjectCardProps) {
  // Extract location from client string (assumes format "Company Name, Location")
  const location = client.split(', ').slice(1).join(', ')
  const companyName = client.split(', ')[0]

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-white border border-gray-100 hover:border-gray-200">
      <CardContent className="p-4">
        <div className="flex flex-col space-y-4">
          {/* Header with Status and Location */}
          <div className="flex items-start justify-between gap-4">
            <Badge variant={isOngoing ? "secondary" : "default"} className="flex items-center gap-1.5">
              {isOngoing ? (
                <>
                  <Clock className="w-3.5 h-3.5" />
                  <span>Ongoing</span>
                </>
              ) : (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Completed</span>
                </>
              )}
            </Badge>
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {coordinates[0].toFixed(2)}°E, {coordinates[1].toFixed(2)}°N
            </div>
          </div>

          {/* Title and Description */}
          <div>
            <h3 className="text-sm font-semibold leading-snug text-gray-900 tracking-tight mb-2 group-hover:text-green-700 transition-colors">
              {title}
            </h3>
            {description && (
              <p className="text-sm text-gray-600 line-clamp-2">
                {description}
              </p>
            )}
          </div>

          {/* Project Details */}
          <div className="flex flex-col gap-2">
            {/* Client Info */}
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
              <p className="text-xs text-gray-600">
                {companyName}
              </p>
            </div>
            
            {/* Location */}
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
              <p className="text-xs text-gray-500">
                {location}
              </p>
            </div>

            {/* Duration */}
            {duration && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
                <p className="text-xs text-gray-500">
                  {duration}
                </p>
              </div>
            )}
          </div>

          {/* Sector and Impact */}
          <div className="space-y-2">
            {sector && (
              <Badge variant="outline" className="text-xs">
                {sector}
              </Badge>
            )}
            
            {impact && impact.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {impact.map((item, index) => (
                  <div key={index} className="flex items-center gap-1 text-xs text-gray-600">
                    <Target className="w-3 h-3 text-green-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 