'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Search, Filter, ShoppingCart, Star, Tag } from 'lucide-react'

// Mock store products
const mockProducts = [
  {
    id: 1,
    name: 'Crypto Trading Bot License',
    description: 'Advanced AI-powered trading bot with backtested strategies. Includes 1-year license and support.',
    price: 299,
    currency: 'USDT',
    category: 'digital',
    subcategory: 'Software',
    images: ['https://via.placeholder.com/300x200'],
    rating: 4.8,
    reviews: 124,
    seller: 'TradingPro',
    tags: ['AI', 'Trading', 'Automation']
  },
  {
    id: 2,
    name: 'Hardware Wallet - CryptoVault Pro',
    description: 'Military-grade security hardware wallet supporting 1000+ cryptocurrencies. Cold storage solution.',
    price: 149,
    currency: 'USD',
    category: 'physical',
    subcategory: 'Hardware',
    images: ['https://via.placeholder.com/300x200'],
    rating: 4.9,
    reviews: 89,
    seller: 'SecureDevices',
    tags: ['Security', 'Hardware', 'Cold Storage']
  },
  {
    id: 3,
    name: 'NFT Collection Template Pack',
    description: 'Professional NFT artwork templates with smart contract code. Ready to deploy collection.',
    price: 199,
    currency: 'ETH',
    category: 'digital',
    subcategory: 'Templates',
    images: ['https://via.placeholder.com/300x200'],
    rating: 4.6,
    reviews: 67,
    seller: 'ArtStudio',
    tags: ['NFT', 'Templates', 'Art']
  },
  {
    id: 4,
    name: 'DeFi Analytics Dashboard',
    description: 'Real-time DeFi portfolio tracking and analytics platform. Lifetime access included.',
    price: 99,
    currency: 'USDT',
    category: 'digital',
    subcategory: 'Software',
    images: ['https://via.placeholder.com/300x200'],
    rating: 4.7,
    reviews: 156,
    seller: 'DataInsights',
    tags: ['DeFi', 'Analytics', 'Portfolio']
  }
]

export default function StorePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('featured')

  const categories = ['all', 'digital', 'physical']
  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ]

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">WizardHat Tech Store</h1>
          <p className="text-muted-foreground">Discover premium crypto tools, hardware, and digital products</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-accent flex items-center justify-center">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    product.category === 'digital' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {product.category}
                  </span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center space-x-1 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-secondary text-secondary-foreground"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-lg font-bold text-foreground">
                      {product.price} {product.currency}
                    </p>
                    <p className="text-xs text-muted-foreground">by {product.seller}</p>
                  </div>
                  <button className="bg-primary text-primary-foreground px-3 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-1">
                    <ShoppingCart className="h-4 w-4" />
                    <span>Buy</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </main>
    </div>
  )
}
