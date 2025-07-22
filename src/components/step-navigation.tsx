import { cn } from "@/lib/utils"

interface Step {
  number: number
  title: string
  active: boolean
}

interface StepNavigationProps {
  steps: Step[]
}

export function StepNavigation({ steps }: StepNavigationProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <div className="space-y-2">
        {steps.map((step) => (
          <div
            key={step.number}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg transition-colors",
              step.active ? "bg-black text-white" : "text-gray-600 hover:bg-gray-50",
            )}
          >
            <div
              className={cn(
                "w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium",
                step.active ? "bg-white text-black" : "bg-gray-200 text-gray-600",
              )}
            >
              {step.number}
            </div>
            <span className="font-medium text-sm">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
