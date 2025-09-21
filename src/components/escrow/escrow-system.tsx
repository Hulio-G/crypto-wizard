'use client'

import { useState } from 'react'
import { Shield, Clock, CheckCircle, AlertTriangle, DollarSign, Wallet } from 'lucide-react'

interface EscrowTransaction {
  id: string
  bountyId: string
  amount: number
  currency: string
  status: 'pending' | 'held' | 'released' | 'disputed' | 'refunded'
  promoterId: string
  influencerId: string
  recruiterId?: string
  createdAt: string
  releaseDate?: string
}

export function EscrowSystem() {
  const [transactions] = useState<EscrowTransaction[]>([
    {
      id: '1',
      bountyId: 'bounty-1',
      amount: 500,
      currency: 'USDT',
      status: 'held',
      promoterId: 'promoter-1',
      influencerId: 'influencer-1',
      recruiterId: 'recruiter-1',
      createdAt: '2024-01-10',
      releaseDate: '2024-01-15'
    },
    {
      id: '2',
      bountyId: 'bounty-2',
      amount: 1200,
      currency: 'ETH',
      status: 'pending',
      promoterId: 'promoter-2',
      influencerId: 'influencer-2',
      createdAt: '2024-01-12'
    }
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="h-5 w-5 text-orange-500" />
      case 'held':
        return <Shield className="h-5 w-5 text-blue-500" />
      case 'released':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'disputed':
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case 'refunded':
        return <DollarSign className="h-5 w-5 text-gray-500" />
      default:
        return <Clock className="h-5 w-5 text-gray-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-orange-100 text-orange-800'
      case 'held':
        return 'bg-blue-100 text-blue-800'
      case 'released':
        return 'bg-green-100 text-green-800'
      case 'disputed':
        return 'bg-red-100 text-red-800'
      case 'refunded':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const calculateRevenueSplit = (amount: number, hasRecruiter: boolean) => {
    const platformFee = amount * 0.2 // 20% platform fee
    const recruiterFee = hasRecruiter ? amount * 0.1 : 0 // 10% recruiter fee if applicable
    const influencerAmount = amount - platformFee - recruiterFee // Remaining goes to influencer
    
    return {
      influencer: influencerAmount,
      recruiter: recruiterFee,
      platform: platformFee
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-card border border-border rounded-lg p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Shield className="h-6 w-6 text-blue-600" />
          <h2 className="text-xl font-semibold text-foreground">Escrow System</h2>
        </div>
        <p className="text-muted-foreground mb-6">
          Secure payment system that holds funds until bounty completion. Automatic revenue splitting ensures fair compensation for all parties.
        </p>

        {/* Revenue Split Explanation */}
        <div className="bg-accent rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-foreground mb-2">Revenue Split Model</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span>80% → Influencer</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>10% → Recruiter (if applicable)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span>20% → Platform Fee</span>
            </div>
          </div>
        </div>

        {/* Transactions List */}
        <div className="space-y-4">
          <h3 className="font-semibold text-foreground">Active Escrow Transactions</h3>
          {transactions.map((transaction) => {
            const split = calculateRevenueSplit(transaction.amount, !!transaction.recruiterId)
            
            return (
              <div key={transaction.id} className="border border-border rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(transaction.status)}
                    <div>
                      <p className="font-medium text-foreground">
                        Bounty #{transaction.bountyId}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Created {transaction.createdAt}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-foreground">
                      {transaction.amount} {transaction.currency}
                    </p>
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${getStatusColor(transaction.status)}`}>
                      {transaction.status}
                    </span>
                  </div>
                </div>

                {/* Revenue Split Breakdown */}
                <div className="bg-accent rounded-lg p-3">
                  <p className="text-sm font-medium text-foreground mb-2">Payment Distribution:</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Influencer:</span>
                      <span className="font-medium text-green-600">
                        {split.influencer.toFixed(2)} {transaction.currency}
                      </span>
                    </div>
                    {transaction.recruiterId && (
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Recruiter:</span>
                        <span className="font-medium text-purple-600">
                          {split.recruiter.toFixed(2)} {transaction.currency}
                        </span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Platform:</span>
                      <span className="font-medium text-blue-600">
                        {split.platform.toFixed(2)} {transaction.currency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2 mt-4">
                  {transaction.status === 'held' && (
                    <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                      Release Funds
                    </button>
                  )}
                  {transaction.status === 'pending' && (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Confirm Deposit
                    </button>
                  )}
                  <button className="border border-border px-4 py-2 rounded-lg hover:bg-accent transition-colors text-sm">
                    View Details
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
