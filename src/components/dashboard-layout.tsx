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
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarInset,
} from "@/components/sidebar"

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
    <SidebarProvider>
      <div className="min-h-screen bg-gray-100 w-full">
        {/* Header spans full width */}
        <div className="bg-white border-b border-gray-200 fixed top-0 left-0 right-0 z-40">
          <Header />
        </div>
        
        {/* Sidebar and content side by side below header */}
        <div className="flex">
          <Sidebar variant="sidebar" className="border-r border-gray-200 bg-white fixed top-[4.75rem] h-[calc(100vh-4.75rem)] hidden md:flex w-64">
            <SidebarContent className="bg-white p-4">
              <SidebarGroup className="space-y-2">
                <SidebarGroupContent>
                  <SidebarMenu className="space-y-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon
                      const isActive = item.label === activeItem

                      return (
                        <SidebarMenuItem key={item.label}>
                          <SidebarMenuButton 
                            onClick={() => setActiveItem(item.label)}
                            className={cn(
                              "w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors font-medium [&>svg]:!size-5",
                              isActive ? "!bg-black !text-white hover:!bg-black" : "text-gray-600 hover:bg-gray-100",
                            )}
                            isActive={isActive}
                          >
                            <Icon className="h-5 w-5" />
                            <span className="font-medium">{item.label}</span>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          
          <main className="flex-1 bg-gray-100 pt-[4.75rem]">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}