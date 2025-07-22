import type React from "react"
import { useState } from "react"
import { useRouter } from "next/router"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  MapPin,
  Calendar,
  Star,
  Users,
  DollarSign,
  Briefcase,
  MessageSquare,
  Bell,
} from "lucide-react"
import { Header } from "./header"

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: false },
  { icon: MapPin, label: "Trip Listings", active: true },
  { icon: Calendar, label: "Bookings", active: false },
  { icon: Star, label: "Reviews", active: false },
  { icon: Users, label: "Team", active: false },
  { icon: DollarSign, label: "Earnings", active: false },
  { icon: Briefcase, label: "Opportunities", active: false },
  { icon: MessageSquare, label: "Messages", active: false },
  { icon: Bell, label: "Notifications", active: false },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const isManagePackagePage = router.pathname === "/manage-package"
  const [activeItem, setActiveItem] = useState("Trip Listings")
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b border-gray-200">
        <Header />
      </div>
      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = item.label === activeItem

              return (
                <button
                  key={item.label}
                  onClick={() => setActiveItem(item.label)}
                  className={cn(
                    "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors",
                    isActive ? "bg-black text-white" : "text-gray-600 hover:bg-gray-100",
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </aside>
        <main className={`flex-1 bg-gray-100 ${isManagePackagePage ? 'pt-0' : 'p-6'}`}>{children}</main>
      </div>
    </div>
  )
}
