import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Building2, Clock, CheckCircle2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  client: string
  coordinates: [number, number]
  isOngoing?: boolean
  sector?: string
}

export default function ProjectCard({ 
  title, 
  client, 
  coordinates, 
  isOngoing = false,
  sector
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

          {/* Title */}
          <div>
            <h3 className="text-sm font-semibold leading-snug text-gray-900 tracking-tight mb-2 group-hover:text-green-700 transition-colors">
              {title}
            </h3>
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
          </div>

          {/* Sector */}
          <div>
            {sector && (
              <Badge variant="outline" className="text-xs">
                {sector}
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
} 