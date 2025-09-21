'use client'

import { useState } from 'react'
import { Plus, Search, Eye, Edit, Trash2, Users, DollarSign, Clock } from 'lucide-react'

export function PromoterDashboard() {
  const [activeFilter, setActiveFilter] = useState('all')

  // Mock data for promoter's bounties
  const bounties = [
    {
      id: 1,
      title: 'Create Twitter Thread about DeFi Yield Farming',
      status: 'active',
      budget: 500,
      currency: 'USDT',
      deadline: '2024-01-15',
      applicants: 12,
      selected: 1,
      category: 'Content Creation'
    },
    {
      id: 2,
      title: 'YouTube Video Review - New DEX Platform',
      status: 'in_progress',
      budget: 1200,
      currency: 'ETH',
      deadline: '2024-01-20',
      applicants: 8,
      selected: 1,
      category: 'Video Content'
    },
    {
      id: 3,
      title: 'Instagram Reel Series - NFT Collection Launch',
      status: 'completed',
      budget: 800,
      currency: 'USDT',
      deadline: '2024-01-18',
      applicants: 15,
      selected: 1,
      category: 'Social Media'
    }
  ]

  const filteredBounties = bounties.filter(bounty => {
    if (activeFilter === 'all') return true
    return bounty.status === activeFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-blue-600 bg-blue-100'
      case 'in_progress':
        return 'text-orange-600 bg-orange-100'
      case 'completed':
        return 'text-green-600 bg-green-100'
      default:
        return 'text-gray-600 bg-gray-100'
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground mb-2">Promoter Dashboard</h1>
          <p className="text-muted-foreground">Manage your bounties and track influencer applications</p>
        </div>
        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2">
          <Plus className="h-4 w-4" />
          <span>Create Bounty</span>
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-muted-foreground">Active Bounties</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">
            {bounties.filter(b => b.status === 'active').length}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-orange-600" />
            <span className="text-sm text-muted-foreground">In Progress</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">
            {bounties.filter(b => b.status === 'in_progress').length}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-green-600" />
            <span className="text-sm text-muted-foreground">Completed</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">
            {bounties.filter(b => b.status === 'completed').length}
          </p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-muted-foreground">Total Budget</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">
            ${bounties.reduce((sum, b) => sum + b.budget, 0).toLocaleString()}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        {['all', 'active', 'in_progress', 'completed'].map((filter) => (
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
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{bounty.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(bounty.status)}`}>
                    {bounty.status.replace('_', ' ')}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="bg-secondary px-2 py-1 rounded">{bounty.category}</span>
                  <span>Due {bounty.deadline}</span>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-4 w-4" />
                    <span>{bounty.budget} {bounty.currency}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Stats */}
            <div className="flex items-center space-x-6 mb-4 text-sm">
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4 text-muted-foreground" />
                <span className="text-foreground">{bounty.applicants} applicants</span>
              </div>
              {bounty.selected > 0 && (
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4 text-green-600" />
                  <span className="text-green-600">{bounty.selected} selected</span>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-2">
              <button className="flex items-center space-x-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                <Eye className="h-4 w-4" />
                <span>View Applications</span>
              </button>
              <button className="flex items-center space-x-1 border border-border px-4 py-2 rounded-lg hover:bg-accent transition-colors">
                <Edit className="h-4 w-4" />
                <span>Edit</span>
              </button>
              {bounty.status === 'active' && (
                <button className="flex items-center space-x-1 text-destructive border border-destructive px-4 py-2 rounded-lg hover:bg-destructive/10 transition-colors">
                  <Trash2 className="h-4 w-4" />
                  <span>Delete</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredBounties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No bounties found for the selected filter.</p>
          <button className="mt-4 bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Create Your First Bounty
          </button>
        </div>
      )}
    </div>
  )
}
