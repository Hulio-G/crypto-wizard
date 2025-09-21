export interface User {
  id: string
  email: string
  username: string
  avatar_url?: string
  roles: UserRole[]
  wallet_address?: string
  created_at: string
  updated_at: string
}

export type UserRole = 'influencer' | 'promoter' | 'recruiter'

export interface Bounty {
  id: string
  title: string
  description: string
  budget: number
  currency: 'USDT' | 'ETH' | 'BTC' | 'USD'
  category: string
  deadline: string
  promoter_id: string
  promoter: User
  status: 'open' | 'in_progress' | 'completed' | 'cancelled'
  tags: string[]
  requirements: string[]
  deliverables: string[]
  applicants_count: number
  created_at: string
  updated_at: string
}

export interface BountyApplication {
  id: string
  bounty_id: string
  influencer_id: string
  proposal: string
  status: 'pending' | 'accepted' | 'rejected' | 'completed'
  created_at: string
  updated_at: string
}

export interface EscrowTransaction {
  id: string
  bounty_id: string
  amount: number
  currency: string
  status: 'pending' | 'held' | 'released' | 'refunded'
  promoter_id: string
  influencer_id: string
  recruiter_id?: string
  platform_fee: number
  recruiter_fee: number
  created_at: string
  updated_at: string
}

export interface FeedItem {
  id: string
  platform: 'twitter' | 'reddit' | 'facebook' | 'bluesky' | 'nostr' | 'lens'
  author: string
  content: string
  timestamp: string
  likes: number
  comments: number
  shares: number
  trending: boolean
  tags: string[]
  external_url: string
  created_at: string
}

export interface RecruiterStats {
  id: string
  user_id: string
  total_referrals: number
  successful_conversions: number
  total_earnings: number
  conversion_rate: number
  rank: number
  updated_at: string
}

export interface Product {
  id: string
  name: string
  description: string
  price: number
  currency: string
  category: 'physical' | 'digital'
  subcategory: string
  images: string[]
  seller_id: string
  stock_quantity?: number
  digital_download_url?: string
  tags: string[]
  status: 'active' | 'inactive' | 'sold_out'
  created_at: string
  updated_at: string
}

export interface Job {
  id: string
  title: string
  company: string
  description: string
  requirements: string[]
  salary_min?: number
  salary_max?: number
  currency: string
  location_type: 'remote' | 'onsite' | 'hybrid'
  location?: string
  category: string
  tags: string[]
  poster_id: string
  status: 'active' | 'filled' | 'closed'
  created_at: string
  updated_at: string
}

export interface DirectoryListing {
  id: string
  title: string
  description: string
  url: string
  category: 'discord' | 'telegram' | 'influencer' | 'onion' | 'crypto_website' | 'ai_tool'
  subcategory: string
  tags: string[]
  rating: number
  votes: number
  submitter_id: string
  verified: boolean
  featured: boolean
  created_at: string
  updated_at: string
}
