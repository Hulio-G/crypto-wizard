'use client'

import { useState } from 'react'
import { PushTab } from './push-tab'
import { PullTab } from './pull-tab'

export function TabNavigation() {
  const [activeTab, setActiveTab] = useState('pull')

  return (
    <div>
      {/* Tab Content - Full Screen */}
      {activeTab === 'push' && <PushTab />}
      {activeTab === 'pull' && <PullTab />}
    </div>
  )
}
