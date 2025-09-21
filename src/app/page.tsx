import { Navbar } from '@/components/navbar'
import { TabNavigation } from '@/components/tab-navigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <TabNavigation />
    </main>
  )
}
