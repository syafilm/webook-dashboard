"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/button"
import { Card, CardContent, } from "@/components/card"
import { Input } from "@/components/input"
import { Label } from "@/components/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/select"
import { Checkbox } from "@/components/checkbox"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/breadcrumb"
import { StepNavigation } from "./step-navigation"

const steps = [
  { number: 1, title: "Charter and Boat", active: true },
  { number: 2, title: "Launch Location", active: false },
  { number: 3, title: "Fishing You Offer", active: false },
  { number: 4, title: "Build Trip Packages", active: false },
  { number: 5, title: "Available", active: false },
  { number: 6, title: "Image and Video", active: false },
  { number: 7, title: "Booking Terms", active: false },
]

const amenities = [
  { id: "gps", label: "GPS", checked: true },
  { id: "liveBaitWell", label: "Live Bait Well", checked: true },
  { id: "toilet", label: "Toilet", checked: true },
  { id: "fishFinder", label: "Fish Finder", checked: true },
  { id: "cooler", label: "Cooler", checked: false },
  { id: "lifeJackets", label: "Life Jackets", checked: true },
  { id: "bluetoothSpeaker", label: "Bluetooth Speaker", checked: false },
  { id: "sunShade", label: "Sun Shade", checked: true },
]

export function ManagePackageForm() {
  const [formData, setFormData] = useState({
    charterName: "Blue Horizon Charters",
    boatType: "",
    boatYear: "2018",
    boatLength: "26",
    engineType: "250HP Yamaha Outboard",
    guestCapacity: "8 passengers",
    amenities: amenities.reduce(
      (acc, amenity) => {
        acc[amenity.id] = amenity.checked
        return acc
      },
      {} as Record<string, boolean>,
    ),
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleAmenityChange = (amenityId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      amenities: { ...prev.amenities, [amenityId]: checked },
    }))
  }

  return (
    <div>
      <div className="px-6 py-3 bg-white">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Listings</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/manage-packages">Blue Horizon Charters</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Step 1 of 7</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="px-6 pb-3 pt-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Manage Packages</h1>
          <div className="flex gap-2">
            <Button className="bg-black hover:bg-gray-800 text-white rounded-[30px]">Delete</Button>
            <Button variant="outline" className="rounded-[30px]">Save & exit</Button>
          </div>
        </div>
      </div>

      <div className="flex gap-6 px-6 pb-6">
        {/* Step Navigation */}
        <div className="w-80">
          <StepNavigation steps={steps} />
        </div>

        {/* Main Form */}
        <div className="flex-1">
          <Card>
            <CardContent className="space-y-8">
              {/* Form Header */}
              <div>
                <h2 className="text-xl font-semibold mb-2">Introduce Your Charter and Boat</h2>
                <p className="text-gray-600">
                  Share your business name, boat details, capacity, and amenities to start building your listing.
                </p>
              </div>

              {/* Charter Name */}
              <div className="space-y-2">
                <Label htmlFor="charterName">
                  What's the name of your charter? <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="charterName"
                  value={formData.charterName}
                  onChange={(e) => handleInputChange("charterName", e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Boat Details */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold">Boat Details</h3>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="boatType">
                      Select your boat type <span className="text-red-500">*</span>
                    </Label>
                    <Select value={formData.boatType} onValueChange={(value) => handleInputChange("boatType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selected" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="center-console">Center Console</SelectItem>
                        <SelectItem value="sport-fishing">Sport Fishing</SelectItem>
                        <SelectItem value="catamaran">Catamaran</SelectItem>
                        <SelectItem value="yacht">Yacht</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="boatYear">
                      What year was your boat built? <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="boatYear"
                      value={formData.boatYear}
                      onChange={(e) => handleInputChange("boatYear", e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="boatLength">
                      Boat length in feet <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="boatLength"
                      value={formData.boatLength}
                      onChange={(e) => handleInputChange("boatLength", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="engineType">
                      Engine type and horsepower <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="engineType"
                      value={formData.engineType}
                      onChange={(e) => handleInputChange("engineType", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="guestCapacity">
                    How many guests can your boat accommodate? <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="guestCapacity"
                    value={formData.guestCapacity}
                    onChange={(e) => handleInputChange("guestCapacity", e.target.value)}
                    className="max-w-md"
                  />
                </div>
              </div>

              {/* Amenities */}
              <div className="space-y-4">
                <div>
                  <Label className="text-base font-semibold">
                    What amenities are available onboard? <span className="text-red-500">*</span>
                  </Label>
                  <p className="text-sm text-gray-600">(Multi-Checkbox)</p>
                </div>

                <div className="flex flex-wrap gap-4">
                  {amenities.map((amenity) => (
                    <div key={amenity.id} className="inline-flex items-center space-x-2">
                      <Checkbox
                        id={amenity.id}
                        checked={formData.amenities[amenity.id]}
                        onCheckedChange={(checked) => handleAmenityChange(amenity.id, checked as boolean)}
                      />
                      <Label htmlFor={amenity.id} className="text-sm font-normal">
                        {amenity.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6">
                <Button variant="outline" className="bg-transparent rounded-[30px]">
                  Back
                </Button>
                <Button className="bg-black hover:bg-gray-800 rounded-[30px]">
                  Next
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
