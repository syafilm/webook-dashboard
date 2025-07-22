import { Filter, Plus } from "lucide-react"
import { Button } from "@/components/button"
import { ListingCard } from "./listing-card"

const listings = [
  {
    id: 1,
    status: "Under Review",
    title: "Blue Horizon Charters",
    location: "Key West, Florida",
    lastUpdated: "July 10, 2025",
    avgRating: 4.9,
    reviewCount: 237,
    statusColor: "bg-yellow-100 text-yellow-800",
  },
  {
    id: 2,
    status: "Published",
    title: "Blue Horizon Charters",
    location: "Key West, Florida",
    lastUpdated: "July 10, 2025",
    avgRating: 4.9,
    reviewCount: 237,
    statusColor: "bg-green-100 text-green-800",
  },
  {
    id: 3,
    status: "Draft",
    title: "Blue Horizon Charters",
    location: "Key West, Florida",
    lastUpdated: "July 10, 2025",
    avgRating: 4.9,
    reviewCount: 237,
    statusColor: "bg-gray-100 text-gray-800",
  },
]

export function TripListings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Trip Listings</h1>
        <div className="flex items-center space-x-3">
          <Button variant="outline" className="flex items-center space-x-2 bg-transparent rounded-[30px]">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </Button>
          <Button className="flex items-center space-x-2 bg-black hover:bg-gray-800 rounded-[30px]">
            <Plus className="h-4 w-4" />
            <span>Create Listing</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  )
}
