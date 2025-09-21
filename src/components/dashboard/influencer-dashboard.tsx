'use client'

import { useState } from 'react'
import { Search, Filter, Clock, DollarSign, CheckCircle, AlertCircle } from 'lucide-react'

export function InfluencerDashboard() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Mock data for influencer's bounties
  const bounties = [
    {
      id: 1,
      title: 'Create Twitter Thread about DeFi Yield Farming',
      status: 'in_progress',
      budget: 500,
      currency: 'USDT',
      deadline: '2024-01-15',
      progress: 75,
      promoter: 'CryptoVentures'
    },
    {
      id: 2,
      title: 'Instagram Reel Series - NFT Collection',
      status: 'pending_review',
      budget: 800,
      currency: 'USDT',
      deadline: '2024-01-18',
      progress: 100,
      promoter: 'ArtBlock Studios'
    },
    {
      id: 3,
      title: 'YouTube Video Review - New DEX Platform',
      status: 'completed',
      budget: 1200,
      currency: 'ETH',
      deadline: '2024-01-08',
      progress: 100,
      promoter: 'DexLabs'
    }
  ]

  const filteredBounties = bounties.filter(bounty => {
    if (activeFilter === 'all') return true
    return bounty.status === activeFilter
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'in_progress':
        return <Clock className="h-4 w-4 text-blue-600" />
      case 'pending_review':
        return <AlertCircle className="h-4 w-4 text-orange-600" />
      case 'completed':
        return <CheckCircle className="h-4 w-4 text-green-600" />
      default:
        return <Clock className="h-4 w-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in_progress':
        return 'text-blue-600 bg-blue-100'
      case 'pending_review':
        return 'text-orange-600 bg-orange-100'
      case 'completed':
        return 'text-green-600 bg-green-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Influencer Dashboard</h1>
        <p className="text-muted-foreground">Manage your bounties and track your content creation</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-muted-foreground">Active</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">
            {bounties.filter(b => b.status === 'in_progress').length}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <span className="text-sm text-muted-foreground">Pending Review</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">
            {bounties.filter(b => b.status === 'pending_review').length}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">
            {bounties.filter(b => b.status === 'completed').length}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-muted-foreground">Total Earned</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">$2,500</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {['all', 'in_progress', 'pending_review', 'completed'].map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            {filter.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
          </button>
        ))}
      </div>

      {/* Bounties List */}
      <div className="space-y-4">
        {filteredBounties.map((bounty) => (
          <div key={bounty.id} className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2">{bounty.title}</h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>By {bounty.promoter}</span>
                  <span>Due {bounty.deadline}</span>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4" />
                    <span>{bounty.budget} {bounty.currency}</span>
                  </div>
                </div>
              </div>
              <div className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm ${getStatusColor(bounty.status)}`}>
                {getStatusIcon(bounty.status)}
                <span>{bounty.status.replace('_', ' ')}</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progress</span>
                <span className="text-foreground">{bounty.progress}%</span>
              </div>
              <div className="w-full bg-secondary rounded-full h-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${bounty.progress}%` }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              {bounty.status === 'in_progress' && (
                <>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Upload Content
                  </button>
                  <button className="border border-border px-4 py-2 rounded-lg hover:bg-accent transition-colors">
                    Message Promoter
                  </button>
                </>
              )}
              {bounty.status === 'pending_review' && (
                <button className="border border-border px-4 py-2 rounded-lg hover:bg-accent transition-colors">
                  View Feedback
                </button>
              )}
              {bounty.status === 'completed' && (
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                  View Receipt
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredBounties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No bounties found for the selected filter.</p>
        </div>
      )}
    </div>
  )
}
