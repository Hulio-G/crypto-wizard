'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { InfluencerDashboard } from '@/components/dashboard/influencer-dashboard'
import { PromoterDashboard } from '@/components/dashboard/promoter-dashboard'
import { RecruiterDashboard } from '@/components/dashboard/recruiter-dashboard'
import { EarningsOverview } from '@/components/dashboard/earnings-overview'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [userRoles] = useState(['influencer', 'promoter', 'recruiter']) // Mock user roles

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <EarningsOverview />
      case 'influencer':
        return <InfluencerDashboard />
      case 'promoter':
        return <PromoterDashboard />
      case 'recruiter':
        return <RecruiterDashboard />
      default:
        return <EarningsOverview />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <DashboardSidebar 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
          userRoles={userRoles}
        />
        <main className="flex-1 p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  )
}
