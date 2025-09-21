'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Share2, Search } from 'lucide-react'

const mockSocialData = [
  {
    id: 1,
    username: 'Simon Fairhurst',
    handle: '@simonfairhurst',
    content: 'Figma, Webflow, or Framer. Which one will take the lead in 2023 and be the go-to for digital design?',
    timestamp: '12:27PM • Oct 4 2022',
    likes: 11,
    comments: 1240,
    shares: 5579,
    retweets: 3987,
    verified: true
  },
  {
    id: 2,
    username: 'Simon Fairhurst',
    handle: '@simonfairhurst',
    content: 'Figma, Webflow, or Framer. Which one will take the lead in 2023 and be the go-to for digital design?',
    timestamp: '12:27PM • Oct 4 2022',
    likes: 11,
    comments: 1240,
    shares: 5579,
    retweets: 3987,
    verified: true,
    hasImage: true
  },
  {
    id: 3,
    username: 'Simon Fairhurst',
    handle: '@simonfairhurst',
    content: 'Figma, Webflow, or Framer. Which one will take the lead in 2023 and be the go-to for digital design?',
    timestamp: '12:27PM • Oct 4 2022',
    likes: 11,
    comments: 1240,
    shares: 5579,
    retweets: 3987,
    verified: true
  },
  {
    id: 4,
    username: 'Simon Fairhurst',
    handle: '@simonfairhurst',
    content: 'Figma, Webflow, or Framer. Which one will take the lead in 2023 and be the go-to for digital design?',
    timestamp: '12:27PM • Oct 4 2022',
    likes: 11,
    comments: 1240,
    shares: 5579,
    retweets: 3987,
    verified: true
  },
  {
    id: 5,
    username: 'Simon Fairhurst',
    handle: '@simonfairhurst',
    content: 'Figma, Webflow, or Framer. Which one will take the lead in 2023 and be the go-to for digital design?',
    timestamp: '12:27PM • Oct 4 2022',
    likes: 11,
    comments: 1240,
    shares: 5579,
    retweets: 3987,
    verified: true
  },
  {
    id: 6,
    username: 'Simon Fairhurst',
    handle: '@simonfairhurst',
    content: 'Figma, Webflow, or Framer. Which one will take the lead in 2023 and be the go-to for digital design?',
    timestamp: '12:27PM • Oct 4 2022',
    likes: 11,
    comments: 1240,
    shares: 5579,
    retweets: 3987,
    verified: true
  },
  {
    id: 7,
    username: 'Simon Fairhurst',
    handle: '@simonfairhurst',
    content: 'Figma, Webflow, or Framer. Which one will take the lead in 2023 and be the go-to for digital design?',
    timestamp: '12:27PM • Oct 4 2022',
    likes: 11,
    comments: 1240,
    shares: 5579,
    retweets: 3987,
    verified: true
  },
  {
    id: 8,
    username: 'Simon Fairhurst',
    handle: '@simonfairhurst',
    content: 'Figma, Webflow, or Framer. Which one will take the lead in 2023 and be the go-to for digital design?',
    timestamp: '12:27PM • Oct 4 2022',
    likes: 11,
    comments: 1240,
    shares: 5579,
    retweets: 3987,
    verified: true
  },
  {
    id: 9,
    username: 'Simon Fairhurst',
    handle: '@simonfairhurst',
    content: 'Figma, Webflow, or Framer. Which one will take the lead in 2023 and be the go-to for digital design?',
    timestamp: '12:27PM • Oct 4 2022',
    likes: 11,
    comments: 1240,
    shares: 5579,
    retweets: 3987,
    verified: true
  }
]

export function PullTab() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="bg-gradient-to-b from-purple-400 to-purple-600 min-h-screen">
      {/* Content Area */}
      <div className="px-6 py-4">
        {/* Info Cards Row */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="bg-yellow-100 rounded-lg p-3 text-xs">
            <div className="font-semibold text-yellow-800 mb-1">🌟 For Buyers</div>
            <div className="text-yellow-700">
              • Gain Crypto Diversity Results, Spread Faster
              • Choose Influencers by Niche, Reach, Micro, or Cost
              • Push Influencers Now!
            </div>
          </div>
          <div className="bg-orange-100 rounded-lg p-3 text-xs">
            <div className="font-semibold text-orange-800 mb-1">🎯 For Influencers</div>
            <div className="text-orange-700">
              • Earn Crypto by Promoting Narratives
              • Choose Gigs by Pay, Social, Ads, Organic
              • Keep 80-85% Commission
              • Get Free Exposure + Leads
            </div>
          </div>
          <div className="bg-green-100 rounded-lg p-3 text-xs">
            <div className="font-semibold text-green-800 mb-1">💰 For Recruiters</div>
            <div className="text-green-700">
              • Earn Lifetime Royalties
              • 10% Per Influencer + Get Paid Forever
              • 5% Per Recruiter Income
            </div>
          </div>
          <div className="bg-blue-100 rounded-lg p-3 text-xs">
            <div className="font-semibold text-blue-800 mb-1">📊 General</div>
            <div className="text-blue-700">
              • Profit Narrative Control
              • Track Real-Time Narratives Crypto, Stocks, Sports Betting, and more
              • Track Real-Time Narratives
              • Track Social Media Narratives X, Facebook, Reddit, TikTok, Youtube, Instagram & More!
            </div>
          </div>
        </div>

        {/* AI Engine and Search */}
        <div className="bg-purple-700 rounded-lg p-4 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-white font-semibold">AI Engine:</span>
                <div className="flex space-x-2">
                  <button className="bg-white/20 text-white px-3 py-1 rounded text-sm">Summarize</button>
                  <button className="bg-white/20 text-white px-3 py-1 rounded text-sm">Sentiment</button>
                </div>
              </div>
              <div className="text-white text-sm">Set Region</div>
            </div>
            <div className="text-white text-sm">Search Narratives</div>
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

        {/* Social Feed Grid - 3 columns */}
        <div className="grid grid-cols-3 gap-4">
          {mockSocialData.map((item) => (
            <div key={item.id} className="bg-white rounded-lg p-4 border border-gray-200">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm font-semibold">SF</span>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-gray-900 text-sm">{item.username}</span>
                    {item.verified && <span className="text-blue-500 text-xs">✓</span>}
                  </div>
                  <div className="text-gray-500 text-xs">{item.handle}</div>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-800 text-sm mb-3 leading-relaxed">{item.content}</p>

              {/* Image placeholder for post with image */}
              {item.hasImage && (
                <div className="bg-gray-200 rounded-lg h-32 mb-3 flex items-center justify-center">
                  <span className="text-gray-500 text-xs">Image</span>
                </div>
              )}

              {/* Timestamp */}
              <div className="text-gray-500 text-xs mb-3">{item.timestamp}</div>

              {/* Engagement Stats */}
              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <Heart className="h-3 w-3" />
                  <span>{item.likes}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="h-3 w-3" />
                  <span>{item.comments}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Share2 className="h-3 w-3" />
                  <span>{item.shares}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>🔄</span>
                  <span>{item.retweets}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
