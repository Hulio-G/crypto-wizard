'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

const mockInfluencers = [
  {
    id: 1,
    title: 'Bulbull | Coke Studio Bangla | Session One | Ritu Raj X Nandita',
    subtitle: 'Coke Studio Bangla',
    views: '15M Views • 2 days ago',
    avatar: '🟡'
  },
  {
    id: 2,
    title: 'Bulbull | Coke Studio Bangla | Session One | Ritu Raj X Nandita',
    subtitle: 'Coke Studio Bangla',
    views: '15M Views • 2 days ago',
    avatar: '🟡'
  },
  {
    id: 3,
    title: 'Bulbull | Coke Studio Bangla | Session One | Ritu Raj X Nandita',
    subtitle: 'Coke Studio Bangla',
    views: '15M Views • 2 days ago',
    avatar: '🟡'
  },
  {
    id: 4,
    title: 'Bulbull | Coke Studio Bangla | Session One | Ritu Raj X Nandita',
    subtitle: 'Coke Studio Bangla',
    views: '15M Views • 2 days ago',
    avatar: '🟡'
  },
  {
    id: 5,
    title: 'Bulbull | Coke Studio Bangla | Session One | Ritu Raj X Nandita',
    subtitle: 'Coke Studio Bangla',
    views: '15M Views • 2 days ago',
    avatar: '🟡'
  },
  {
    id: 6,
    title: 'Bulbull | Coke Studio Bangla | Session One | Ritu Raj X Nandita',
    subtitle: 'Coke Studio Bangla',
    views: '15M Views • 2 days ago',
    avatar: '🟡'
  }
]

export function PushTab() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="bg-gradient-to-b from-purple-400 to-purple-600 min-h-screen">
      {/* Content Area */}
      <div className="px-6 py-4">
        {/* Search Bar */}
        <div className="bg-purple-700 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white text-sm">Search Influencers</div>
            <div className="text-white text-sm">Search by Platform</div>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
            <input
              type="text"
              placeholder=""
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded text-white placeholder-white/60"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-2">
              <button className="w-6 h-6 bg-red-500 rounded"></button>
              <button className="w-6 h-6 bg-blue-500 rounded"></button>
              <button className="w-6 h-6 bg-orange-500 rounded"></button>
              <button className="w-6 h-6 bg-purple-500 rounded"></button>
              <button className="w-6 h-6 bg-black rounded"></button>
              <button className="w-6 h-6 bg-gray-400 rounded"></button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center space-x-6 mb-6 text-white">
          <button className="flex items-center space-x-1">
            <span>All</span>
            <span className="text-white/60">◀</span>
          </button>
          <button className="flex items-center space-x-1">
            <span>Home Base Hub</span>
            <span className="text-white/60">◀</span>
          </button>
          <button className="flex items-center space-x-1">
            <span>Discovery Hub</span>
            <span className="text-white/60">◀</span>
          </button>
        </div>

        {/* Influencers Grid - 3x2 */}
        <div className="grid grid-cols-3 gap-6">
          {mockInfluencers.map((influencer) => (
            <div key={influencer.id} className="bg-purple-500/30 rounded-lg p-6 text-center">
              {/* Avatar */}
              <div className="w-16 h-16 bg-yellow-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">{influencer.avatar}</span>
              </div>

              {/* Title */}
              <h3 className="text-white font-medium text-sm mb-2 leading-tight">{influencer.title}</h3>
              
              {/* Subtitle */}
              <p className="text-white/80 text-xs mb-1">{influencer.subtitle}</p>
              
              {/* Views */}
              <p className="text-white/60 text-xs mb-4">{influencer.views}</p>

              {/* Buttons */}
              <div className="space-y-2">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded text-sm">
                  Buy / Chat
                </button>
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded text-sm">
                  Sponsor / Recruit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
