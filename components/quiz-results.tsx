"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Trophy, Clock, CheckCircle, XCircle, RotateCcw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function QuizResults() {
  const router = useRouter()
  const [result, setResult] = useState<any>(null)

  useEffect(() => {
    const savedResult = sessionStorage.getItem("lastQuizResult")
    if (savedResult) {
      setResult(JSON.parse(savedResult))
    } else {
      router.push("/")
    }
  }, [router])

  if (!result) return null

  const percentage = Math.round((result.score / result.totalQuestions) * 100)
  const timeFormatted = formatTime(result.timeSpent)

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreBadge = (percentage: number) => {
    if (percentage >= 90) return { text: "Excellent!", color: "bg-green-100 text-green-800" }
    if (percentage >= 80) return { text: "Great Job!", color: "bg-blue-100 text-blue-800" }
    if (percentage >= 60) return { text: "Good Work!", color: "bg-yellow-100 text-yellow-800" }
    return { text: "Keep Practicing!", color: "bg-red-100 text-red-800" }
  }

  const badge = getScoreBadge(percentage)

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <Trophy className={`h-16 w-16 mx-auto mb-4 ${getScoreColor(percentage)}`} />
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h1>
        <Badge className={badge.color}>{badge.text}</Badge>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{result.quizTitle}</span>
            <span className={`text-2xl font-bold ${getScoreColor(percentage)}`}>
              {result.score}/{result.totalQuestions}
            </span>
          </CardTitle>
          <CardDescription>Completed on {new Date(result.completedAt).toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className={`text-3xl font-bold ${getScoreColor(percentage)} mb-2`}>{percentage}%</div>
              <div className="text-gray-600">Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2 flex items-center justify-center">
                <Clock className="h-6 w-6 mr-2" />
                {timeFormatted}
              </div>
              <div className="text-gray-600">Time Spent</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{result.score}</div>
              <div className="text-gray-600">Correct Answers</div>
            </div>
          </div>

          <Progress value={percentage} className="mb-4" />
          <p className="text-center text-gray-600">
            You answered {result.score} out of {result.totalQuestions} questions correctly
          </p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Question Review</CardTitle>
          <CardDescription>Review your answers and see the correct solutions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {result.results.map((questionResult: any, index: number) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">Question {index + 1}</h4>
                  <div className="flex items-center gap-2">
                    {questionResult?.result?.passed ? (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500" />
                    )}
                    <span className={questionResult?.result?.passed ? "text-green-600" : "text-red-600"}>
                      {questionResult?.result?.passed ? "Correct" : "Incorrect"}
                    </span>
                  </div>
                </div>

                {questionResult && (
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Your Output:</strong> {questionResult.result.output || "No output"}
                    </div>
                    {questionResult.result.expected && (
                      <div>
                        <strong>Expected:</strong> {questionResult.result.expected}
                      </div>
                    )}
                    {questionResult.result.error && (
                      <div className="text-red-600">
                        <strong>Error:</strong> {questionResult.result.error}
                      </div>
                    )}
                    <div className="text-gray-600">
                      <strong>Time:</strong> {formatTime(questionResult.timeSpent)}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link href={`/quiz/${result.quizId}`}>
          <Button variant="outline" className="w-full sm:w-auto">
            <RotateCcw className="h-4 w-4 mr-2" />
            Retake Quiz
          </Button>
        </Link>
        <Link href="/">
          <Button className="w-full sm:w-auto">
            <Home className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

function formatTime(ms: number): string {
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60

  if (minutes > 0) {
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`
  }
  return `${remainingSeconds}s`
}
