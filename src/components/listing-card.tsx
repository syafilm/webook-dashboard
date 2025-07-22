import { MoreVertical, MapPin, Star } from "lucide-react"
import { Button } from "@/components/button"
import { Card, CardContent, CardHeader } from "@/components/card"
import { Badge } from "@/components/badge"
import { Avatar, AvatarFallback } from "@/components/avatar"
import Link from "next/link"

interface ListingCardProps {
  listing: {
    id: number
    status: string
    title: string
    location: string
    lastUpdated: string
    avgRating: number
    reviewCount: number
    statusColor: string
  }
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Card className="bg-white shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <Badge className={`${listing.statusColor} border-0 font-medium`}>{listing.status}</Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{listing.title}</h3>
          <div className="flex items-center space-x-2 mt-2">
            <Avatar className="h-6 w-6 bg-gray-200">
              <AvatarFallback className="text-xs">
                <MapPin className="h-3 w-3" />
              </AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{listing.location}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-gray-900 font-bold">Last Updated</p>
            <p className="text-gray-500">{listing.lastUpdated}</p>
          </div>
          <div>
            <p className="text-gray-900 font-bold">Avg Rating</p>
            <div className="flex items-center space-x-1">
              <span className="text-gray-500 font-medium">{listing.avgRating}</span>
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-gray-500">({listing.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        <Link href="/manage-package">
          <Button variant="outline" className="w-full bg-transparent rounded-[30px] mt-6">
            Manage Package
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
