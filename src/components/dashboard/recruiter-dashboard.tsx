'use client'

import { useState } from 'react'
import { Share2, Copy, TrendingUp, Users, DollarSign, Award, ExternalLink } from 'lucide-react'

export function RecruiterDashboard() {
  const [copied, setCopied] = useState(false)
  
  // Mock recruiter data
  const recruiterStats = {
    totalReferrals: 47,
    activeReferrals: 23,
    totalEarnings: 2340.75,
    thisMonthEarnings: 456.20,
    conversionRate: 68.5,
    rank: 12,
    referralLink: 'https://crypto-wizard.com/ref/user123'
  }

  const recentReferrals = [
    {
      id: 1,
      username: '@cryptoinfluencer',
      joinDate: '2024-01-10',
      status: 'active',
      earnings: 125.50,
      bounties: 3
    },
    {
      id: 2,
      username: '@defiexpert',
      joinDate: '2024-01-08',
      status: 'active',
      earnings: 89.25,
      bounties: 2
    },
    {
      id: 3,
      username: '@nftcollector',
      joinDate: '2024-01-05',
      status: 'inactive',
      earnings: 0,
      bounties: 0
    }
  ]

  const topRecruiters = [
    { rank: 1, username: '@cryptoking', referrals: 156, earnings: 12450 },
    { rank: 2, username: '@defimaster', referrals: 134, earnings: 10890 },
    { rank: 3, username: '@nftguru', referrals: 98, earnings: 8760 },
    { rank: 12, username: 'You', referrals: recruiterStats.totalReferrals, earnings: recruiterStats.totalEarnings, isCurrentUser: true }
  ]

  const copyReferralLink = () => {
    navigator.clipboard.writeText(recruiterStats.referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground mb-2">Recruiter Dashboard</h1>
        <p className="text-muted-foreground">Track your referrals and earn lifetime royalties</p>
      </div>

      {/* Referral Link */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Your Referral Link</h2>
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={recruiterStats.referralLink}
            readOnly
            className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground"
          />
          <button
            onClick={copyReferralLink}
            className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center space-x-2"
          >
            <Copy className="h-4 w-4" />
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
          <button className="border border-border px-4 py-2 rounded-lg hover:bg-accent transition-colors flex items-center space-x-2">
            <Share2 className="h-4 w-4" />
            <span>Share</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-blue-600" />
            <span className="text-sm text-muted-foreground">Total Referrals</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">{recruiterStats.totalReferrals}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-green-600" />
            <span className="text-sm text-muted-foreground">Active Referrals</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">{recruiterStats.activeReferrals}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-5 w-5 text-purple-600" />
            <span className="text-sm text-muted-foreground">Total Earnings</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">${recruiterStats.totalEarnings.toLocaleString()}</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-orange-600" />
            <span className="text-sm text-muted-foreground">Global Rank</span>
          </div>
          <p className="text-2xl font-bold text-foreground mt-2">#{recruiterStats.rank}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Referrals */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Recent Referrals</h2>
          <div className="space-y-4">
            {recentReferrals.map((referral) => (
              <div key={referral.id} className="flex items-center justify-between p-4 bg-accent rounded-lg">
                <div>
                  <p className="font-medium text-foreground">{referral.username}</p>
                  <p className="text-sm text-muted-foreground">Joined {referral.joinDate}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">${referral.earnings}</p>
                  <p className="text-sm text-muted-foreground">{referral.bounties} bounties</p>
                  <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                    referral.status === 'active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {referral.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Top Recruiters</h2>
          <div className="space-y-3">
            {topRecruiters.map((recruiter) => (
              <div 
                key={recruiter.rank} 
                className={`flex items-center justify-between p-3 rounded-lg ${
                  recruiter.isCurrentUser ? 'bg-primary/10 border border-primary/20' : 'bg-accent'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    recruiter.rank <= 3 
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-600 text-white'
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {recruiter.rank}
                  </div>
                  <div>
                    <p className={`font-medium ${recruiter.isCurrentUser ? 'text-primary' : 'text-foreground'}`}>
                      {recruiter.username}
                    </p>
                    <p className="text-sm text-muted-foreground">{recruiter.referrals} referrals</p>
                  </div>
                </div>
                <p className="font-semibold text-foreground">${recruiter.earnings.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">{recruiterStats.conversionRate}%</div>
            <p className="text-muted-foreground">Conversion Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">${recruiterStats.thisMonthEarnings}</div>
            <p className="text-muted-foreground">This Month</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">${(recruiterStats.totalEarnings / recruiterStats.totalReferrals).toFixed(0)}</div>
            <p className="text-muted-foreground">Avg. per Referral</p>
          </div>
        </div>
      </div>
    </div>
  )
}
