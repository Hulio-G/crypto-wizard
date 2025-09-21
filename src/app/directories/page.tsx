'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Search, Star, ExternalLink, Bookmark, ThumbsUp, Filter } from 'lucide-react'

// Mock directory data
const mockDirectories = {
  discord: [
    {
      id: 1,
      title: 'Crypto Traders Hub',
      description: 'Active community of crypto traders sharing strategies and market insights.',
      url: 'https://discord.gg/cryptotraders',
      rating: 4.8,
      votes: 234,
      tags: ['Trading', 'Analysis', 'Community'],
      verified: true,
      featured: true
    },
    {
      id: 2,
      title: 'DeFi Developers',
      description: 'Technical discussions about DeFi protocols and smart contract development.',
      url: 'https://discord.gg/defidevs',
      rating: 4.6,
      votes: 156,
      tags: ['DeFi', 'Development', 'Technical'],
      verified: true,
      featured: false
    }
  ],
  telegram: [
    {
      id: 3,
      title: 'Crypto Signals Premium',
      description: 'Premium trading signals with high accuracy rate and detailed analysis.',
      url: 'https://t.me/cryptosignalspro',
      rating: 4.7,
      votes: 189,
      tags: ['Signals', 'Trading', 'Premium'],
      verified: true,
      featured: true
    },
    {
      id: 4,
      title: 'NFT Alpha Group',
      description: 'Early access to NFT drops and market intelligence.',
      url: 'https://t.me/nftalphagroup',
      rating: 4.5,
      votes: 98,
      tags: ['NFT', 'Alpha', 'Drops'],
      verified: false,
      featured: false
    }
  ],
  influencer: [
    {
      id: 5,
      title: '@CryptoKing',
      description: 'Top crypto influencer with 500K+ followers. Daily market analysis and insights.',
      url: 'https://twitter.com/cryptoking',
      rating: 4.9,
      votes: 345,
      tags: ['Twitter', 'Analysis', 'Education'],
      verified: true,
      featured: true
    },
    {
      id: 6,
      title: '@DeFiGuru',
      description: 'DeFi expert sharing yield farming strategies and protocol reviews.',
      url: 'https://youtube.com/defiguru',
      rating: 4.7,
      votes: 267,
      tags: ['YouTube', 'DeFi', 'Education'],
      verified: true,
      featured: false
    }
  ],
  crypto_websites: [
    {
      id: 7,
      title: 'CoinTracker Pro',
      description: 'Advanced portfolio tracking and tax reporting for crypto investors.',
      url: 'https://cointracker.pro',
      rating: 4.8,
      votes: 456,
      tags: ['Portfolio', 'Tracking', 'Tax'],
      verified: true,
      featured: true
    },
    {
      id: 8,
      title: 'DeFi Pulse',
      description: 'Real-time DeFi protocol rankings and TVL tracking.',
      url: 'https://defipulse.com',
      rating: 4.6,
      votes: 234,
      tags: ['DeFi', 'Analytics', 'TVL'],
      verified: true,
      featured: false
    }
  ]
}

export default function DirectoriesPage() {
  const [activeTab, setActiveTab] = useState('discord')
  const [searchTerm, setSearchTerm] = useState('')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const tabs = [
    { id: 'discord', label: 'Discord Servers', icon: '💬' },
    { id: 'telegram', label: 'Telegram Groups', icon: '📱' },
    { id: 'influencer', label: 'Influencers', icon: '👑' },
    { id: 'crypto_websites', label: 'Crypto Websites', icon: '🌐' }
  ]

  const currentItems = mockDirectories[activeTab as keyof typeof mockDirectories] || []
  
  const filteredItems = currentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFeatured = !showFeaturedOnly || item.featured
    return matchesSearch && matchesFeatured
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Crypto Directories</h1>
          <p className="text-muted-foreground">Discover the best crypto communities, influencers, and resources</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search directories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <button
            onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
              showFeaturedOnly 
                ? 'bg-primary text-primary-foreground' 
                : 'border border-border hover:bg-accent'
            }`}
          >
            <Star className="h-4 w-4" />
            <span>Featured Only</span>
          </button>
        </div>

        {/* Directory Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    {item.verified && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        ✓ Verified
                      </span>
                    )}
                    {item.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4 mb-4 text-sm">
                <div className="flex items-center space-x-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(item.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">{item.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{item.votes} votes</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline text-sm flex items-center space-x-1"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Visit</span>
                </a>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <Bookmark className="h-4 w-4 text-muted-foreground" />
                  </button>
                  <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                    <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No directories found matching your criteria.</p>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Submit Directory
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
