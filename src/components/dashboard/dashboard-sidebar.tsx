'use client'

import { BarChart3, User, Megaphone, Users, DollarSign, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DashboardSidebarProps {
  activeTab: string
  setActiveTab: (tab: string) => void
  userRoles: string[]
}

export function DashboardSidebar({ activeTab, setActiveTab, userRoles }: DashboardSidebarProps) {
  const menuItems = [
    {
      id: 'overview',
      label: 'Earnings Overview',
      icon: BarChart3,
      available: true
    },
    {
      id: 'influencer',
      label: 'Influencer Hub',
      icon: User,
      available: userRoles.includes('influencer')
    },
    {
      id: 'promoter',
      label: 'Promoter Hub',
      icon: Megaphone,
      available: userRoles.includes('promoter')
    },
    {
      id: 'recruiter',
      label: 'Recruiter Hub',
      icon: Users,
      available: userRoles.includes('recruiter')
    },
    {
      id: 'earnings',
      label: 'Earnings History',
      icon: DollarSign,
      available: true
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: Settings,
      available: true
    }
  ]

  return (
    <aside className="w-64 bg-card border-r border-border h-screen sticky top-16">
      <div className="p-6">
        <h2 className="text-lg font-semibold text-foreground mb-6">Dashboard</h2>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            if (!item.available) return null
            
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  'w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors',
                  activeTab === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
