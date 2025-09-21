'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Search, Star, ExternalLink, Bookmark, ThumbsUp, Bot, Zap, TrendingUp } from 'lucide-react'

// Mock AI tools data
const mockAITools = [
  {
    id: 1,
    title: 'CryptoGPT Trading Assistant',
    description: 'AI-powered trading assistant that analyzes market trends and provides personalized trading recommendations.',
    url: 'https://cryptogpt.ai',
    category: 'Trading',
    price: 29,
    currency: 'USD',
    rating: 4.8,
    votes: 234,
    tags: ['AI', 'Trading', 'Analysis'],
    verified: true,
    featured: true,
    type: 'SaaS'
  },
  {
    id: 2,
    title: 'Token Scanner Pro',
    description: 'Advanced token scanner that identifies potential gems before they pump using AI algorithms.',
    url: 'https://tokenscanpro.com',
    category: 'Analysis',
    price: 99,
    currency: 'USDT',
    rating: 4.6,
    votes: 156,
    tags: ['Scanner', 'Tokens', 'AI'],
    verified: true,
    featured: false,
    type: 'Tool'
  },
  {
    id: 3,
    title: 'Wallet Risk Scorer',
    description: 'AI tool that analyzes wallet addresses and provides risk scores for DeFi interactions.',
    url: 'https://walletriskscore.io',
    category: 'Security',
    price: 0,
    currency: 'FREE',
    rating: 4.7,
    votes: 189,
    tags: ['Security', 'Risk', 'Analysis'],
    verified: true,
    featured: true,
    type: 'Tool'
  },
  {
    id: 4,
    title: 'DeFi Yield Optimizer',
    description: 'Smart contract that automatically optimizes your DeFi yields across multiple protocols.',
    url: 'https://defiyieldopt.com',
    category: 'DeFi',
    price: 199,
    currency: 'ETH',
    rating: 4.5,
    votes: 98,
    tags: ['DeFi', 'Yield', 'Automation'],
    verified: false,
    featured: false,
    type: 'Smart Contract'
  },
  {
    id: 5,
    title: 'Crypto Prompt Marketplace',
    description: 'Buy and sell AI prompts specifically designed for crypto trading and analysis.',
    url: 'https://cryptoprompts.market',
    category: 'Prompts',
    price: 15,
    currency: 'USD',
    rating: 4.4,
    votes: 67,
    tags: ['Prompts', 'Marketplace', 'AI'],
    verified: true,
    featured: true,
    type: 'Marketplace'
  },
  {
    id: 6,
    title: 'NFT Rarity Predictor',
    description: 'AI model that predicts NFT rarity and potential value before mint.',
    url: 'https://nftrarity.ai',
    category: 'NFT',
    price: 49,
    currency: 'USDT',
    rating: 4.3,
    votes: 123,
    tags: ['NFT', 'Rarity', 'Prediction'],
    verified: true,
    featured: false,
    type: 'Tool'
  }
]

export default function AIToolsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceFilter, setPriceFilter] = useState('all')
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false)

  const categories = ['all', 'Trading', 'Analysis', 'Security', 'DeFi', 'Prompts', 'NFT']
  const priceFilters = [
    { value: 'all', label: 'All Prices' },
    { value: 'free', label: 'Free' },
    { value: 'under50', label: 'Under $50' },
    { value: 'under100', label: 'Under $100' },
    { value: 'premium', label: 'Premium ($100+)' }
  ]

  const filteredTools = mockAITools.filter(tool => {
    const matchesSearch = tool.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tool.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory
    const matchesFeatured = !showFeaturedOnly || tool.featured
    
    let matchesPrice = true
    if (priceFilter === 'free') {
      matchesPrice = tool.price === 0
    } else if (priceFilter === 'under50') {
      matchesPrice = tool.price > 0 && tool.price < 50
    } else if (priceFilter === 'under100') {
      matchesPrice = tool.price > 0 && tool.price < 100
    } else if (priceFilter === 'premium') {
      matchesPrice = tool.price >= 100
    }
    
    return matchesSearch && matchesCategory && matchesFeatured && matchesPrice
  })

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'SaaS':
        return <Bot className="h-4 w-4" />
      case 'Tool':
        return <Zap className="h-4 w-4" />
      case 'Smart Contract':
        return <TrendingUp className="h-4 w-4" />
      case 'Marketplace':
        return <Star className="h-4 w-4" />
      default:
        return <Bot className="h-4 w-4" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'SaaS':
        return 'bg-blue-100 text-blue-800'
      case 'Tool':
        return 'bg-green-100 text-green-800'
      case 'Smart Contract':
        return 'bg-purple-100 text-purple-800'
      case 'Marketplace':
        return 'bg-orange-100 text-orange-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">AI Tools for Crypto</h1>
          <p className="text-muted-foreground">Discover AI-powered tools for trading, analysis, and crypto operations</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search AI tools..."
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
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {priceFilters.map(filter => (
                <option key={filter.value} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>
            
            <button
              onClick={() => setShowFeaturedOnly(!showFeaturedOnly)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center justify-center space-x-2 ${
                showFeaturedOnly 
                  ? 'bg-primary text-primary-foreground' 
                  : 'border border-border hover:bg-accent'
              }`}
            >
              <Star className="h-4 w-4" />
              <span>Featured</span>
            </button>
          </div>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-foreground">{tool.title}</h3>
                    {tool.verified && (
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        ✓ Verified
                      </span>
                    )}
                    {tool.featured && (
                      <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                        ⭐ Featured
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs ${getTypeColor(tool.type)}`}>
                      {getTypeIcon(tool.type)}
                      <span className="ml-1">{tool.type}</span>
                    </span>
                    <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-full text-xs">
                      {tool.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {tool.description}
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
                          i < Math.floor(tool.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground">{tool.rating}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{tool.votes}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 mb-4">
                {tool.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-accent text-accent-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-bold text-foreground">
                    {tool.price === 0 ? 'FREE' : `${tool.price} ${tool.currency}`}
                  </p>
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm flex items-center space-x-1"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>Visit Tool</span>
                  </a>
                </div>
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

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">No AI tools found matching your criteria.</p>
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Submit AI Tool
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
