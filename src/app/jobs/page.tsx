'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Search, MapPin, DollarSign, Clock, Briefcase, Filter } from 'lucide-react'

// Mock job data
const mockJobs = [
  {
    id: 1,
    title: 'Senior Blockchain Developer',
    company: 'DeFi Labs',
    location: 'Remote',
    locationType: 'remote',
    salaryMin: 120000,
    salaryMax: 180000,
    currency: 'USD',
    category: 'Engineering',
    description: 'Looking for an experienced blockchain developer to build next-generation DeFi protocols.',
    requirements: ['5+ years blockchain experience', 'Solidity expertise', 'DeFi protocol knowledge'],
    tags: ['Solidity', 'DeFi', 'Smart Contracts'],
    postedDate: '2024-01-10',
    type: 'Full-time'
  },
  {
    id: 2,
    title: 'Crypto Marketing Manager',
    company: 'TokenVentures',
    location: 'New York, NY',
    locationType: 'hybrid',
    salaryMin: 80000,
    salaryMax: 120000,
    currency: 'USD',
    category: 'Marketing',
    description: 'Lead marketing initiatives for our crypto investment platform.',
    requirements: ['3+ years crypto marketing', 'Community management', 'Content creation'],
    tags: ['Marketing', 'Community', 'Content'],
    postedDate: '2024-01-08',
    type: 'Full-time'
  },
  {
    id: 3,
    title: 'NFT Artist & Designer',
    company: 'ArtBlock Studios',
    location: 'Remote',
    locationType: 'remote',
    salaryMin: 60000,
    salaryMax: 90000,
    currency: 'USD',
    category: 'Design',
    description: 'Create stunning NFT artwork and collaborate with our creative team.',
    requirements: ['Digital art portfolio', 'NFT experience', 'Creative vision'],
    tags: ['NFT', 'Art', 'Design'],
    postedDate: '2024-01-12',
    type: 'Contract'
  },
  {
    id: 4,
    title: 'DeFi Product Manager',
    company: 'YieldFarm Pro',
    location: 'San Francisco, CA',
    locationType: 'onsite',
    salaryMin: 140000,
    salaryMax: 200000,
    currency: 'USD',
    category: 'Product',
    description: 'Drive product strategy for our yield farming platform.',
    requirements: ['Product management experience', 'DeFi knowledge', 'Technical background'],
    tags: ['Product', 'DeFi', 'Strategy'],
    postedDate: '2024-01-05',
    type: 'Full-time'
  }
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')
  const [salaryRange, setSalaryRange] = useState('all')

  const categories = ['all', 'Engineering', 'Marketing', 'Design', 'Product', 'Operations']
  const locationTypes = ['all', 'remote', 'hybrid', 'onsite']
  const salaryRanges = [
    { value: 'all', label: 'All Salaries' },
    { value: '0-80000', label: '$0 - $80k' },
    { value: '80000-120000', label: '$80k - $120k' },
    { value: '120000-200000', label: '$120k - $200k' },
    { value: '200000+', label: '$200k+' }
  ]

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory
    const matchesLocation = selectedLocation === 'all' || job.locationType === selectedLocation
    
    let matchesSalary = true
    if (salaryRange !== 'all') {
      if (salaryRange === '200000+') {
        matchesSalary = job.salaryMin >= 200000
      } else {
        const [min, max] = salaryRange.split('-').map(Number)
        matchesSalary = job.salaryMin >= min && job.salaryMax <= max
      }
    }
    
    return matchesSearch && matchesCategory && matchesLocation && matchesSalary
  })

  const getLocationIcon = (locationType: string) => {
    switch (locationType) {
      case 'remote':
        return '🌍'
      case 'hybrid':
        return '🏢'
      case 'onsite':
        return '🏙️'
      default:
        return '📍'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Crypto & Tech Jobs</h1>
          <p className="text-muted-foreground">Find your next opportunity in the crypto and blockchain space</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {locationTypes.map(type => (
                <option key={type} value={type}>
                  {type === 'all' ? 'All Locations' : type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            
            <select
              value={salaryRange}
              onChange={(e) => setSalaryRange(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {salaryRanges.map(range => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Jobs List */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">
                      {job.type}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{getLocationIcon(job.locationType)} {job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>${job.salaryMin.toLocaleString()} - ${job.salaryMax.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>Posted {job.postedDate}</span>
                    </div>
                  </div>
                </div>
                <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm">
                  {job.category}
                </span>
              </div>

              <p className="text-muted-foreground mb-4">{job.description}</p>

              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-2">Requirements:</h4>
                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                  {job.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-accent text-accent-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button className="border border-border px-4 py-2 rounded-lg hover:bg-accent transition-colors">
                    Save Job
                  </button>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No jobs found matching your criteria.</p>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Post a Job
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
