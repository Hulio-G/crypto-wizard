'use client'

import { DollarSign, TrendingUp, Users, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react'

export function EarningsOverview() {
  // Mock data - in real app, this would come from API
  const stats = {
    totalEarnings: 12450.75,
    thisMonth: 2340.50,
    monthlyGrowth: 15.2,
    activeBounties: 8,
    completedBounties: 23,
    referralEarnings: 890.25
  }

  const recentTransactions = [
    {
      id: 1,
      type: 'bounty_completion',
      description: 'Twitter Thread - DeFi Strategies',
      amount: 500,
      currency: 'USDT',
      date: '2024-01-10',
      status: 'completed'
    },
    {
      id: 2,
      type: 'referral_commission',
      description: 'Referral Commission - @cryptoinfluencer',
      amount: 45.50,
      currency: 'USDT',
      date: '2024-01-09',
      status: 'completed'
    },
    {
      id: 3,
      type: 'bounty_payment',
      description: 'YouTube Review - DEX Platform',
      amount: 1200,
      currency: 'ETH',
      date: '2024-01-08',
      status: 'pending'
    }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Earnings Overview</h1>
        <p className="text-muted-foreground">Track your performance across all revenue streams</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <DollarSign className="h-6 w-6 text-green-600" />
            </div>
            <div className="flex items-center text-green-600 text-sm">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +{stats.monthlyGrowth}%
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">
            ${stats.totalEarnings.toLocaleString()}
          </h3>
          <p className="text-muted-foreground text-sm">Total Earnings</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
            <div className="flex items-center text-blue-600 text-sm">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              This Month
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">
            ${stats.thisMonth.toLocaleString()}
          </h3>
          <p className="text-muted-foreground text-sm">Monthly Earnings</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-purple-100 p-2 rounded-lg">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <div className="flex items-center text-purple-600 text-sm">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              Referrals
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">
            ${stats.referralEarnings.toLocaleString()}
          </h3>
          <p className="text-muted-foreground text-sm">Referral Earnings</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">
            {stats.activeBounties}
          </h3>
          <p className="text-muted-foreground text-sm">Active Bounties</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-green-100 p-2 rounded-lg">
              <Target className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">
            {stats.completedBounties}
          </h3>
          <p className="text-muted-foreground text-sm">Completed Bounties</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="bg-blue-100 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-1">
            {((stats.completedBounties / (stats.completedBounties + stats.activeBounties)) * 100).toFixed(1)}%
          </h3>
          <p className="text-muted-foreground text-sm">Success Rate</p>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {recentTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center justify-between p-4 bg-accent rounded-lg">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-lg ${
                  transaction.type === 'bounty_completion' ? 'bg-green-100' :
                  transaction.type === 'referral_commission' ? 'bg-purple-100' : 'bg-blue-100'
                }`}>
                  <DollarSign className={`h-4 w-4 ${
                    transaction.type === 'bounty_completion' ? 'text-green-600' :
                    transaction.type === 'referral_commission' ? 'text-purple-600' : 'text-blue-600'
                  }`} />
                </div>
                <div>
                  <p className="font-medium text-foreground">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-foreground">
                  {transaction.amount} {transaction.currency}
                </p>
                <p className={`text-sm ${
                  transaction.status === 'completed' ? 'text-green-600' : 'text-orange-600'
                }`}>
                  {transaction.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
