"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

type Question = {
  id: string
  text: string
  category: string
}

const categories = [
  "People & Skills",
  "Processes",
  "Systems & Technology",
  "AI Adoption",
  "Data Readiness",
  "Hybrid Work Model",
]

const questions: Record<string, Question[]> = {
  "People & Skills": [
    {
      id: "p1",
      text: "How would you rate your organization's digital literacy and AI readiness?",
      category: "People & Skills",
    },
    {
      id: "p2",
      text: "To what extent does your organization have a skills-based approach to talent management?",
      category: "People & Skills",
    },
    {
      id: "p3",
      text: "How effectively does your organization upskill employees for future work requirements?",
      category: "People & Skills",
    },
    {
      id: "p4",
      text: "How well does your organization identify and develop critical digital skills?",
      category: "People & Skills",
    },
  ],
  Processes: [
    { id: "pr1", text: "How automated are your core HR processes?", category: "Processes" },
    { id: "pr2", text: "To what extent are your HR processes data-driven?", category: "Processes" },
    {
      id: "pr3",
      text: "How agile and adaptable are your HR processes to changing business needs?",
      category: "Processes",
    },
    {
      id: "pr4",
      text: "How well integrated are your HR processes across the employee lifecycle?",
      category: "Processes",
    },
  ],
  "Systems & Technology": [
    { id: "s1", text: "How modern and integrated is your HR technology stack?", category: "Systems & Technology" },
    {
      id: "s2",
      text: "To what extent does your HR technology enable self-service capabilities?",
      category: "Systems & Technology",
    },
    {
      id: "s3",
      text: "How effectively does your HR technology support data-driven decision making?",
      category: "Systems & Technology",
    },
    {
      id: "s4",
      text: "How well does your HR technology support remote and hybrid work?",
      category: "Systems & Technology",
    },
  ],
  "AI Adoption": [
    { id: "a1", text: "To what extent has your organization adopted AI in HR functions?", category: "AI Adoption" },
    { id: "a2", text: "How mature is your organization's AI governance framework?", category: "AI Adoption" },
    {
      id: "a3",
      text: "How effectively does your organization use AI for talent acquisition and management?",
      category: "AI Adoption",
    },
    {
      id: "a4",
      text: "How well does your organization address ethical considerations in AI implementation?",
      category: "AI Adoption",
    },
  ],
  "Data Readiness": [
    { id: "d1", text: "How would you rate the quality and accessibility of your HR data?", category: "Data Readiness" },
    {
      id: "d2",
      text: "To what extent does your organization have a comprehensive data governance framework?",
      category: "Data Readiness",
    },
    {
      id: "d3",
      text: "How effectively does your organization use HR analytics for decision making?",
      category: "Data Readiness",
    },
    { id: "d4", text: "How well does your organization manage data privacy and security?", category: "Data Readiness" },
  ],
  "Hybrid Work Model": [
    { id: "h1", text: "How mature is your organization's hybrid work model?", category: "Hybrid Work Model" },
    {
      id: "h2",
      text: "To what extent does your technology infrastructure support hybrid work?",
      category: "Hybrid Work Model",
    },
    {
      id: "h3",
      text: "How effectively does your organization measure and optimize productivity in a hybrid environment?",
      category: "Hybrid Work Model",
    },
    {
      id: "h4",
      text: "How well does your organization support employee wellbeing in a hybrid work model?",
      category: "Hybrid Work Model",
    },
  ],
}

export function AssessmentForm() {
  const [activeTab, setActiveTab] = useState(categories[0])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [comments, setComments] = useState<Record<string, string>>({})

  const handleNext = () => {
    const currentIndex = categories.indexOf(activeTab)
    if (currentIndex < categories.length - 1) {
      setActiveTab(categories[currentIndex + 1])
    } else {
      handleSubmit()
    }
  }

  const handlePrevious = () => {
    const currentIndex = categories.indexOf(activeTab)
    if (currentIndex > 0) {
      setActiveTab(categories[currentIndex - 1])
    }
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
    }, 2000)
  }

  const handleAnswerChange = (questionId: string, value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const handleCommentChange = (questionId: string, value: string) => {
    setComments((prev) => ({
      ...prev,
      [questionId]: value,
    }))
  }

  const isCurrentCategoryComplete = () => {
    const currentQuestions = questions[activeTab]
    return currentQuestions.every((q) => answers[q.id] !== undefined)
  }

  const isFinalCategory = categories.indexOf(activeTab) === categories.length - 1

  if (isComplete) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="rounded-full bg-emerald-100 p-3 mb-4">
          <CheckCircle2 className="h-10 w-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Assessment Complete!</h3>
        <p className="text-muted-foreground mb-6 max-w-md">
          Thank you for completing the HR Maturity Assessment. Your results are being analyzed and will be available
          shortly.
        </p>
        <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
          View Your Results
        </Button>
      </div>
    )
  }

  return (
    <div>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category} className="text-xs md:text-sm">
              {category.split(" ")[0]}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-6">{category}</h3>
                <div className="space-y-8">
                  {questions[category].map((question) => (
                    <div key={question.id} className="space-y-4">
                      <h4 className="font-medium">{question.text}</h4>
                      <RadioGroup
                        value={answers[question.id]?.toString()}
                        onValueChange={(value) => handleAnswerChange(question.id, Number.parseInt(value))}
                        className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-4"
                      >
                        {[1, 2, 3, 4, 5].map((value) => (
                          <div key={value} className="flex items-center space-x-2">
                            <RadioGroupItem value={value.toString()} id={`${question.id}-${value}`} />
                            <Label htmlFor={`${question.id}-${value}`}>{value}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                      <div>
                        <Label htmlFor={`comment-${question.id}`} className="text-sm text-muted-foreground">
                          Additional comments (optional)
                        </Label>
                        <Textarea
                          id={`comment-${question.id}`}
                          value={comments[question.id] || ""}
                          onChange={(e) => handleCommentChange(question.id, e.target.value)}
                          className="mt-1"
                          placeholder="Add any specific details or context..."
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex justify-between mt-6">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={categories.indexOf(activeTab) === 0}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Previous
        </Button>
        <Button
          onClick={handleNext}
          disabled={!isCurrentCategoryComplete() || isSubmitting}
          className="gap-2 bg-emerald-600 hover:bg-emerald-700"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Processing...
            </>
          ) : isFinalCategory ? (
            <>
              Submit Assessment <CheckCircle2 className="h-4 w-4" />
            </>
          ) : (
            <>
              Next <ArrowRight className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
