import type React from "react"
import { useRouter } from "next/router"
import { Header } from "./header"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const router = useRouter()
  const isManagePackagePage = router.pathname === "/manage-package"
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white border-b border-gray-200">
        <Header />
      </div>
      <div className="flex">
        <aside className="w-64 bg-white border-r border-gray-200 p-4">
          <nav className="space-y-2">
            <a href="/" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded">
              Dashboard
            </a>
            <a href="/manage-package" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded">
              Manage Packages
            </a>
          </nav>
        </aside>
        <main className={`flex-1 bg-gray-100 ${isManagePackagePage ? 'pt-0' : 'p-6'}`}>{children}</main>
      </div>
    </div>
  )
}
