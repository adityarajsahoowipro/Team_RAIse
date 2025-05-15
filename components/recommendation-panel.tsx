import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Clock, Zap } from "lucide-react"

type RecommendationProps = {
  detailed?: boolean
}

type Recommendation = {
  title: string
  description: string
  impact: "High" | "Medium" | "Low"
  timeframe: "Short-term" | "Medium-term" | "Long-term"
  category: string
  steps?: string[]
}

const recommendations: Recommendation[] = [
  {
    title: "Implement AI-powered skills assessment",
    description:
      "Deploy an AI-based skills assessment tool to identify skill gaps and create personalized development plans.",
    impact: "High",
    timeframe: "Medium-term",
    category: "People & Skills",
    steps: [
      "Select an AI-powered skills assessment platform",
      "Integrate with existing HRIS",
      "Pilot with one department",
      "Analyze results and refine approach",
      "Roll out company-wide",
    ],
  },
  {
    title: "Automate routine HR processes",
    description:
      "Identify and automate repetitive HR tasks using workflow automation and AI to free up HR staff for strategic work.",
    impact: "High",
    timeframe: "Short-term",
    category: "Processes",
    steps: [
      "Conduct process audit to identify automation candidates",
      "Prioritize based on time savings and complexity",
      "Select automation tools",
      "Implement and test workflows",
      "Train HR team on new processes",
    ],
  },
  {
    title: "Develop data governance framework",
    description:
      "Create a comprehensive data governance framework to ensure data quality, privacy, and accessibility for AI initiatives.",
    impact: "Medium",
    timeframe: "Medium-term",
    category: "Data Readiness",
    steps: [
      "Assess current data quality and accessibility",
      "Define data ownership and stewardship roles",
      "Establish data quality standards",
      "Implement data cleaning and enrichment processes",
      "Create monitoring and compliance protocols",
    ],
  },
  {
    title: "Implement hybrid work optimization tools",
    description:
      "Deploy tools that use AI to optimize scheduling, space utilization, and collaboration in hybrid work environments.",
    impact: "Medium",
    timeframe: "Short-term",
    category: "Hybrid Work Model",
    steps: [
      "Evaluate hybrid work patterns and pain points",
      "Select appropriate optimization tools",
      "Configure for your organization's needs",
      "Pilot with select teams",
      "Gather feedback and refine implementation",
    ],
  },
]

export function RecommendationPanel({ detailed = false }: RecommendationProps) {
  return (
    <div className="space-y-6">
      {recommendations.map((rec, index) => (
        <Card
          key={index}
          className="border-l-4"
          style={{ borderLeftColor: rec.impact === "High" ? "#10b981" : "#f59e0b" }}
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg">{rec.title}</CardTitle>
              <div className="flex gap-2">
                <Badge variant="outline" className="bg-slate-100">
                  {rec.category}
                </Badge>
                <Badge
                  variant={rec.impact === "High" ? "default" : "outline"}
                  className={rec.impact === "High" ? "bg-emerald-600" : ""}
                >
                  {rec.impact} Impact
                </Badge>
              </div>
            </div>
            <CardDescription className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {rec.timeframe}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{rec.description}</p>

            {detailed && rec.steps && (
              <div className="mt-4">
                <h4 className="font-medium mb-2">Implementation Steps:</h4>
                <ul className="space-y-2">
                  {rec.steps.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex justify-end">
                  <Button className="gap-1">
                    View Detailed Plan <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            )}

            {!detailed && (
              <div className="flex justify-end">
                <Button variant="ghost" size="sm" className="gap-1">
                  View Details <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ))}

      <div className="flex justify-center mt-6">
        <Button className="gap-2">
          <Zap className="h-4 w-4" /> Generate More Recommendations
        </Button>
      </div>
    </div>
  )
}
