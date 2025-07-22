import { Search, MessageSquare, Bell, ChevronDown } from "lucide-react"
import { Button } from "@/components/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/avatar"
import { Badge } from "@/components/badge"

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-3">
        <div>
          <h2 className="text-xl font-bold text-black">WeBook</h2>
          <p className="text-sm text-gray-600 -mt-1">Guides</p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-black hover:text-black">
          <Search className="h-5 w-5" />
        </Button>

        <div className="relative">
          <Button variant="ghost" size="icon" className="text-black hover:text-black">
            <MessageSquare className="h-5 w-5" />
          </Button>
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
            3
          </Badge>
        </div>

        <div className="relative">
          <Button variant="ghost" size="icon" className="text-black hover:text-black">
            <Bell className="h-5 w-5" />
          </Button>
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center p-0">
            4
          </Badge>
        </div>

        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback className="bg-black text-white text-sm">dd</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium">dd</span>
          <ChevronDown className="h-4 w-4 text-black" />
        </div>
      </div>
    </header>
  )
}
