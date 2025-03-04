'use client'

import ProjectCard from '@/components/ProjectCard'
import { CheckCircle2, Clock, MapPin, Building2, Search } from 'lucide-react'
import IndiaMap from '@/components/ClientIndiaMap'
import ProjectStats from '@/components/ProjectStats'
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useState } from 'react'
import Script from 'next/script'

interface Project {
  title: string
  client: string
  coordinates: [number, number] // Tuple type for [longitude, latitude]
  sector?: string
}

// Project data with coordinates and enhanced information
const completedProjects: Project[] = [
  {
    title: "Socio-economic and agro-biodiversity mapping as part of conservation mapping exercise of Little Rann of Kachchh landscape in Gujarat",
    client: "Gujarat Ecological Education Research (GEER) Foundation, Gandhinagar, Gujarat",
    coordinates: [70.57, 23.31],
    sector: "Biodiversity Conservation"
  },
  {
    title: "Mid-term assessment of crown cover, grass cover and tree regeneration in Gujarat Forest Development Project Area",
    client: "Gujarat Forestry Research Foundation, Gandhinagar, Gujarat",
    coordinates: [72.68, 23.23], // Gandhinagar
    sector: "Forestry"
  },
  {
    title: "Assessment of biomass production, wood use and carbon sequestration in Prosopis juliflora shrublands in Bhavnagar and Bharuch Districts, Gujarat",
    client: "Gujarat Forestry Research Foundation, Gandhinagar, Gujarat",
    coordinates: [72.15, 21.71], // Bharuch
    sector: "Carbon Sequestration"
  },
  {
    title: "Study on change in wood use pattern in Rural Gujarat",
    client: "Gujarat Forestry Research Foundation, Gandhinagar, Gujarat",
    coordinates: [72.68, 23.23], // Gandhinagar
    sector: "Forestry"
  },
  {
    title: "Survey of Standing Stock in GFDP Intervention Areas at Ex Ante Period",
    client: "Gujarat Forestry Research Foundation, Gandhinagar, Gujarat",
    coordinates: [72.68, 23.23], // Gandhinagar
    sector: "Forestry"
  },
  {
    title: "Assessment of Elephant movement along the proposed Govindpur - Sahebganj highway in Jharkhand to suggest appropriate mitigation measures",
    client: "Road Construction Department, Ranchi, Jharkhand and Department of Forest, Environment & Climate Change, Government of Jharkhand",
    coordinates: [85.33, 23.35], // Ranchi
    sector: "Wildlife Conservation"
  },
  {
    title: "Biodiversity assessment and conservation plan for proposed Iron Ore mining area at Halmuri Hill Range at Dhanurajanpur Tehsil, Kanker District, Chattisgarh",
    client: "Ind Synergy Pvt. Ltd., Chattisgarh",
    coordinates: [81.49, 20.27], // Kanker
    sector: "Biodiversity Conservation"
  },
  {
    title: "Regional Environment Impact Assessment (EIA) study & preparation of Environment Management Plan (EMP) for Dholera Special Investment Region (DSIR): Socio-Economic Baseline",
    client: "Gujarat Infrastructure Development Board (GIDB), Gandhinagar, Gujarat",
    coordinates: [72.19, 22.24], // Dholera
    sector: "Environmental Impact Assessment"
  },
  {
    title: "Assessment of carbon sequestration & charcoal conversion in Prosopis juliflora shrublands in Kachchh District (Gujarat)",
    client: "Gujarat Forestry Research Foundation, Gandhinagar, Gujarat",
    coordinates: [70.57, 23.31], // Kachchh
    sector: "Carbon Sequestration"
  },
  {
    title: "Construction of proposed Jetties of EBTL in Salaya Creek: Assessment of social, economical and livelihood aspects of local fishing communities",
    client: "Essar Bulk Terminal (Salaya) Limited, Ahmedabad, Gujarat",
    coordinates: [69.60, 22.31], // Salaya
    sector: "Social Impact Assessment"
  },
  {
    title: "Assessment of impacts of proposed 400kV D/C power transmission lines by PGCIL on the biodiversity of Wild Ass Sanctuary",
    client: "Power Grid Corporation of India Limited, Vadodara, Gujarat",
    coordinates: [72.93, 22.30], // Vadodara
    sector: "Biodiversity Conservation"
  },
  {
    title: "Assessment of impact of salt pan of Kanoria Chemicals Ltd. on biodiversity values of Wild Ass Sanctuary",
    client: "Kanoria Chemicals and Industries Limited, Gujarat",
    coordinates: [71.57, 23.31], // Wild Ass Sanctuary
    sector: "Biodiversity Conservation"
  },
  {
    title: 'Formulation of "Site-specific wildlife conservation and management plan for Schedule-1 Species" for Devadari Iron Ore Mines of KIOCL',
    client: "KIOCL Limited, Sandur, Karnataka",
    coordinates: [76.54, 15.08], // Sandur
    sector: "Wildlife Conservation"
  },
  {
    title: "Formulation of Site-specific wildlife conservation and management plan for Schedule-1 Species under Wildlife (Protection) Act for 6 MTPA integrated steel plant and captive power plant of UGFL",
    client: "Uttam Galva Ferrous Ltd. (UGFL), Mumbai",
    coordinates: [72.88, 19.08], // Mumbai
    sector: "Wildlife Conservation"
  },
  {
    title: "Biodiversity survey of Makardhokra - 1 Opencast Coal mine (Phase-1)",
    client: "Western Coalfields Ltd., Nagpur, Maharashtra",
    coordinates: [79.08, 21.15], // Nagpur
    sector: "Biodiversity Conservation"
  },
  {
    title: 'Formulation of "Site-specific wildlife conservation and management plan for Schedule-1 Species" for Steel and Power Plant',
    client: "Minera Steel & Power Private Limited, Ballari, Karnataka",
    coordinates: [76.92, 15.14], // Ballari
    sector: "Wildlife Conservation"
  },
  {
    title: 'Formulation of "Site-specific wildlife conservation and management plan for Schedule-1 Species" for Metal and Ferro Alloy Plant of SMIORE',
    client: "The Sandur Manganese & Iron Ores (SMIORE) Limited, Vijayunagara, Karnataka",
    coordinates: [76.54, 15.08], // Sandur/Vijayunagara
    sector: "Wildlife Conservation"
  },
];

const ongoingProjects: Project[] = [
  {
    title: 'Formulation of "Site-specific wildlife conservation and management plan for Schedule-1 Species" for power transmission line',
    client: "Resources Pellets Concentrates Pvt. Ltd., Ballari, Karnataka",
    coordinates: [76.92, 15.14], // Ballari
    sector: "Wildlife Conservation"
  },
  {
    title: 'Formulation of "Soil moisture conservation plan" for power transmission line',
    client: "Resources Pellets Concentrates Pvt. Ltd., Ballari, Karnataka",
    coordinates: [76.92, 15.14], // Ballari
    sector: "Environmental Conservation"
  },
  {
    title: 'Formulation of "Site-specific wildlife conservation and management plan for Schedule-1 Species" for water pipeline',
    client: "Resources Pellets Concentrates Pvt. Ltd., Ballari, Karnataka",
    coordinates: [76.92, 15.14], // Ballari
    sector: "Wildlife Conservation"
  },
  {
    title: 'Formulation of "Soil moisture conservation plan" for water pipeline',
    client: "Resources Pellets Concentrates Pvt. Ltd., Ballari, Karnataka",
    coordinates: [76.92, 15.14], // Ballari
    sector: "Environmental Conservation"
  },
  {
    title: 'Formulation of "Site-specific wildlife conservation and management plan for Schedule-1 Species" for downhill pipe conveyor of BKG mines',
    client: "BKG Mining Pvt. Ltd., Ballari, Karnataka",
    coordinates: [76.92, 15.14], // Ballari
    sector: "Wildlife Conservation"
  },
  {
    title: 'Formulation of "Soil moisture conservation plan" for downhill pipe conveyor of BKG mines',
    client: "BKG Mining Pvt. Ltd., Ballari, Karnataka",
    coordinates: [76.92, 15.14], // Ballari
    sector: "Environmental Conservation"
  },
];

// Get unique sectors from projects
const sectors = Array.from(new Set([
  ...completedProjects.map(p => p.sector),
  ...ongoingProjects.map(p => p.sector)
].filter(Boolean)));

// Convert projects to map format
const projectLocations = [
  ...completedProjects.map(p => ({ ...p, isOngoing: false })),
  ...ongoingProjects.map(p => ({ ...p, isOngoing: true }))
];

// Add Schema.org JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Oikos Consultants',
  url: 'https://oikosconsultants.com',
  logo: 'https://oikosconsultants.com/images/logo.png',
  description: 'Leading environmental consulting firm specializing in biodiversity conservation and ecological services across India.',
  location: {
    '@type': 'Place',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN'
    }
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Environmental Projects Portfolio',
    itemListElement: [
      ...completedProjects.map((project, index) => ({
        '@type': 'Project',
        name: project.title,
        description: 'Environmental consulting project by Oikos Consultants',
        provider: {
          '@type': 'Organization',
          name: 'Oikos Consultants'
        },
        client: {
          '@type': 'Organization',
          name: project.client
        },
        location: {
          '@type': 'Place',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: project.coordinates[1],
            longitude: project.coordinates[0]
          }
        },
        status: 'Completed',
        position: index + 1
      })),
      ...ongoingProjects.map((project, index) => ({
        '@type': 'Project',
        name: project.title,
        description: 'Environmental consulting project by Oikos Consultants',
        provider: {
          '@type': 'Organization',
          name: 'Oikos Consultants'
        },
        client: {
          '@type': 'Organization',
          name: project.client
        },
        location: {
          '@type': 'Place',
          geo: {
            '@type': 'GeoCoordinates',
            latitude: project.coordinates[1],
            longitude: project.coordinates[0]
          }
        },
        status: 'In Progress',
        position: completedProjects.length + index + 1
      }))
    ]
  }
}

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedSector, setSelectedSector] = useState('all')
  const [sortBy, setSortBy] = useState('recent')

  // Filter and sort projects
  const filteredCompletedProjects = completedProjects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.sector?.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesSector = selectedSector === 'all' || project.sector === selectedSector
      
      return matchesSearch && matchesSector
    })
    .sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.title.localeCompare(b.title)
      }
      // For 'recent', we'll keep the original order as it's assumed to be chronological
      return 0
    })

  const filteredOngoingProjects = ongoingProjects
    .filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.sector?.toLowerCase().includes(searchQuery.toLowerCase())
      
      const matchesSector = selectedSector === 'all' || project.sector === selectedSector
      
      return matchesSearch && matchesSector
    })
    .sort((a, b) => {
      if (sortBy === 'alphabetical') {
        return a.title.localeCompare(b.title)
      }
      return 0
    })

  return (
    <>
      <Script
        id="schema-projects"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col bg-gradient-to-b from-gray-50 via-gray-50 to-gray-50 relative">
        {/* Global Background Patterns */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(#3b8249_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.02] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#3b8249_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.015] pointer-events-none" />
        
        <div className="w-full relative">
          {/* Hero Section with Enhanced Pattern Background */}
          <section className="relative bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 pt-24 lg:pt-32 pb-16 lg:pb-20 overflow-hidden">
            {/* Enhanced layered background patterns */}
            <div className="absolute inset-0 bg-[radial-gradient(#a7f3d0_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.15]" />
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#6ee7b7_0.4px,transparent_0.4px)] [background-size:28px_28px] opacity-[0.08]" />
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-bl from-teal-100/30 via-transparent to-transparent" />
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-white/90 to-transparent" />
            
            {/* Decorative elements */}
            <div className="absolute top-20 right-[10%] w-64 h-64 bg-emerald-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-[5%] w-48 h-48 bg-green-200/20 rounded-full blur-2xl"></div>
            <div className="absolute top-40 left-[15%] w-32 h-32 bg-teal-200/20 rounded-full blur-xl"></div>
            
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl relative">
                <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-green-600 text-white text-sm font-medium mb-6 shadow-md hover:bg-green-700 hover:scale-105 hover:shadow-lg transform transition-all duration-300 ease-in-out cursor-default group">
                  <MapPin className="w-5 h-5 group-hover:animate-bounce" />
                  <span className="font-semibold">Pan-India Presence</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
                  <span className="block leading-[1.1]">Our Impact Through</span>
                  <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 bg-clip-text text-transparent block mt-2 leading-[1.1]">
                    Environmental Projects
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed mb-10 font-medium">
                  Discover our portfolio of transformative environmental consultancy projects, showcasing our commitment to sustainable development and ecological conservation across India.
                </p>
                
                <div className="relative z-10">
                  <ProjectStats 
                    completedCount={completedProjects.length}
                    ongoingCount={ongoingProjects.length}
                  />
                </div>
              </div>

              {/* Key Regions with Enhanced Design */}
              <div className="mt-12 group relative overflow-hidden bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-green-600 hover:border-l-8 hover:-translate-y-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-bl-full opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-50 rounded-tr-full opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-300"></div>
                
                <div className="relative p-6">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                          <MapPin className="w-6 h-6 text-green-600 group-hover:text-green-700 group-hover:rotate-12 transition-all duration-300" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-800 transition-colors duration-300">Key Project Regions</h3>
                      </div>
                      <p className="text-base text-gray-700 max-w-2xl leading-relaxed">
                        Our environmental consultancy expertise spans across these key regions, each presenting unique ecological challenges and opportunities for sustainable development.
                      </p>
                    </div>
                    <div className="flex flex-col justify-center mt-4 md:mt-0">
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        {(() => {
                          // Get unique states from project locations
                          const states = Array.from(new Set(projectLocations.map(p => {
                            const location = p.client.split(', ').pop();
                            return location?.includes('Gujarat') ? 'Gujarat' :
                                   location?.includes('Karnataka') ? 'Karnataka' :
                                   location?.includes('Maharashtra') ? 'Maharashtra' :
                                   location?.includes('Jharkhand') ? 'Jharkhand' :
                                   location?.includes('Chattisgarh') ? 'Chattisgarh' : null;
                          }))).filter(Boolean) as string[];
                          
                          // Define preferred order
                          const orderedStates = ['Gujarat', 'Maharashtra', 'Karnataka', 'Jharkhand', 'Chattisgarh'];
                          
                          // Sort states according to preferred order
                          const sortedStates = [...states].sort((a, b) => {
                            return orderedStates.indexOf(a) - orderedStates.indexOf(b);
                          });
                          
                          // Return the badges in the sorted order
                          return sortedStates.map((state, index) => {
                            // Assign a unique color variant based on index
                            const colorVariants = [
                              'bg-white hover:bg-green-100 border-green-200 text-green-800 hover:text-green-900',
                              'bg-white hover:bg-emerald-100 border-emerald-200 text-emerald-800 hover:text-emerald-900',
                              'bg-white hover:bg-teal-100 border-teal-200 text-teal-800 hover:text-teal-900',
                              'bg-white hover:bg-lime-100 border-lime-200 text-lime-800 hover:text-lime-900',
                              'bg-white hover:bg-green-100 border-green-200 text-green-800 hover:text-green-900',
                            ];
                            
                            return (
                              <Badge 
                                key={index} 
                                variant="outline" 
                                className={`px-4 py-2.5 text-sm font-medium ${colorVariants[index % colorVariants.length]} transition-all duration-300 hover:scale-105 transform hover:shadow-md flex items-center justify-center`}
                              >
                                <span className="inline-block w-2 h-2 rounded-full bg-current mr-2 opacity-70"></span>
                                {state}
                              </Badge>
                            );
                          });
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(#3b8249_0.5px,transparent_0.5px)] [background-size:16px_16px] opacity-[0.02]" />
            {/* Enhanced Map Container */}
            <div className="relative z-[1]">
              <IndiaMap projectLocations={projectLocations} />
            </div>
          </section>

          {/* Projects Section with Enhanced Background */}
          <section className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
            {/* Base gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white pointer-events-none" />
            
            {/* Dot pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#3b8249_1.5px,transparent_1.5px)] [background-size:32px_32px] opacity-[0.15] pointer-events-none" />
            
            {/* Grid pattern */}
            <div className="absolute inset-0 [background-image:linear-gradient(to_right,#3b824920_1px,transparent_1px),linear-gradient(to_bottom,#3b824920_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
            
            {/* Diagonal lines */}
            <div className="absolute inset-0 bg-[linear-gradient(45deg,#3b8249_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-[0.1] pointer-events-none" />
            
            {/* Large gradient orbs */}
            <div 
              className="absolute -top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,73,0.15) 0%, rgba(59,130,73,0.05) 35%, transparent 70%)',
                animation: 'pulse 8s infinite'
              }}
            />
            <div 
              className="absolute -bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(59,130,73,0.12) 0%, rgba(59,130,73,0.04) 35%, transparent 70%)',
                animation: 'pulse 8s infinite 1s'
              }}
            />
            
            {/* Floating elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-10 left-1/3 w-16 h-16 border-4 border-green-300/30 rounded-xl rotate-12 animate-float" />
              <div className="absolute top-1/4 right-1/4 w-12 h-12 border-4 border-green-300/30 rounded-full animate-float delay-500" />
              <div className="absolute bottom-1/3 left-1/4 w-20 h-20 border-4 border-green-300/30 rounded-xl -rotate-12 animate-float delay-1000" />
              <div className="absolute top-1/2 right-1/3 w-14 h-14 border-4 border-green-300/30 rounded-full animate-float delay-700" />
            </div>
            
            {/* Content Container */}
            <div className="relative max-w-7xl mx-auto z-[1]">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100/90 text-green-800 text-sm font-medium mb-4 backdrop-blur-sm shadow-sm hover:bg-green-200/90 hover:scale-105 hover:shadow-md transform transition-all duration-300 ease-in-out cursor-default">
                  <Building2 className="w-4 h-4" />
                  <span>Project Portfolio</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-4 drop-shadow-sm">
                  Our Projects
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Explore our diverse portfolio of completed and ongoing environmental consultancy projects across various sectors and regions.
                </p>
              </div>

              {/* Search and Filter Controls */}
              <div className="mb-8 space-y-6">
                {/* Search Bar */}
                <div className="relative max-w-2xl mx-auto">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="Search projects by title, client, or sector..."
                    className="pl-12 py-6 text-base shadow-md hover:shadow-lg transition-shadow duration-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Filters Row */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Select value={selectedSector} onValueChange={setSelectedSector}>
                    <SelectTrigger className="w-full sm:w-[200px] shadow-md hover:shadow-lg transition-shadow duration-200">
                      <SelectValue placeholder="Filter by sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Sectors</SelectItem>
                      {sectors.map((sector, index) => (
                        <SelectItem key={index} value={sector || ''}>
                          {sector}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-full sm:w-[200px] shadow-md hover:shadow-lg transition-shadow duration-200">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recent">Most Recent</SelectItem>
                      <SelectItem value="alphabetical">Alphabetical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Results Summary */}
              <div className="text-center mb-8">
                <p className="text-sm text-gray-600">
                  Showing {filteredCompletedProjects.length + filteredOngoingProjects.length} projects
                  {searchQuery && ` matching "${searchQuery}"`}
                  {selectedSector !== 'all' && ` in ${selectedSector}`}
                </p>
              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Completed Projects */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-green-50 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Completed Projects</h2>
                        <p className="text-sm text-gray-500 mt-0.5">Successfully delivered initiatives</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-base px-3 py-1">
                      {filteredCompletedProjects.length}
                    </Badge>
                  </div>
                  <ScrollArea className="h-[600px] pr-4">
                    {filteredCompletedProjects.length > 0 ? (
                      <div className="space-y-4">
                        {filteredCompletedProjects.map((project, index) => (
                          <div 
                            key={index} 
                            className="transform hover:-translate-y-1 transition-all duration-300"
                          >
                            <ProjectCard {...project} />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[400px] text-center">
                        <div className="p-3 bg-gray-50 rounded-full mb-4">
                          <Search className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="text-gray-600 font-medium">No completed projects found</p>
                        <p className="text-sm text-gray-500 mt-1">Try adjusting your search or filters</p>
                      </div>
                    )}
                  </ScrollArea>
                </div>

                {/* Ongoing Projects */}
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-blue-50 rounded-xl">
                        <Clock className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900">Ongoing Projects</h2>
                        <p className="text-sm text-gray-500 mt-0.5">Currently in progress</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-base px-3 py-1">
                      {filteredOngoingProjects.length}
                    </Badge>
                  </div>
                  <ScrollArea className="h-[600px] pr-4">
                    {filteredOngoingProjects.length > 0 ? (
                      <div className="space-y-4">
                        {filteredOngoingProjects.map((project, index) => (
                          <div 
                            key={index} 
                            className="transform hover:-translate-y-1 transition-all duration-300"
                          >
                            <ProjectCard 
                              {...project} 
                              isOngoing={true}
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[400px] text-center">
                        <div className="p-3 bg-gray-50 rounded-full mb-4">
                          <Search className="w-6 h-6 text-gray-400" />
                        </div>
                        <p className="text-gray-600 font-medium">No ongoing projects found</p>
                        <p className="text-sm text-gray-500 mt-1">Try adjusting your search or filters</p>
                      </div>
                    )}
                  </ScrollArea>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
} 