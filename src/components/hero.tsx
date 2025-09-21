'use client'

import { ArrowRight, Coins, Users, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            The Ultimate{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Crypto Marketplace
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Connect promoters, influencers, and recruiters in one powerful platform. 
            Find bounties, discover trending content, and grow your crypto network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
              <span>Start Earning</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors">
              Explore Bounties
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="crypto-gradient p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Coins className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">$2.5M+</h3>
              <p className="text-muted-foreground">Total Bounties Paid</p>
            </div>
            
            <div className="text-center">
              <div className="crypto-gradient p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">50K+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            
            <div className="text-center">
              <div className="crypto-gradient p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
