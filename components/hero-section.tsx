import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">HR Maturity Framework Assessment</h1>
          <p className="text-xl mb-6">
            Evaluate your organization's HR maturity and get AI-powered recommendations to transform from legacy models
            to AI-first, skills-based, and hybrid-optimized operating models.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Start Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
