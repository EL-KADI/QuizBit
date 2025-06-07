"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Clock, TrendingUp, Calendar, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress as ProgressBar } from "@/components/ui/progress"
import { getQuizResults, clearAllResults } from "@/lib/storage"
import { useToast } from "@/hooks/use-toast"

export function Progress() {
  const [results, setResults] = useState<any[]>([])
  const { toast } = useToast()

  useEffect(() => {
    setResults(getQuizResults())
  }, [])

  const clearProgress = () => {
    if (confirm("Are you sure you want to clear all progress? This action cannot be undone.")) {
      clearAllResults()
      setResults([])
      toast({
        title: "Progress cleared",
        description: "All quiz results have been removed.",
      })
    }
  }

  const totalQuizzes = results.length
  const averageScore =
    totalQuizzes > 0
      ? Math.round(
          results.reduce((sum, result) => sum + (result.score / result.totalQuestions) * 100, 0) / totalQuizzes,
        )
      : 0
  const totalTime = results.reduce((sum, result) => sum + result.timeSpent, 0)

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return "text-green-600"
    if (percentage >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const formatTime = (ms: number): string => {
    const seconds = Math.floor(ms / 1000)
    const minutes = Math.floor(seconds / 60)
    const hours = Math.floor(minutes / 60)

    if (hours > 0) {
      return `${hours}h ${minutes % 60}m`
    }
    if (minutes > 0) {
      return `${minutes}m ${seconds % 60}s`
    }
    return `${seconds}s`
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Progress</h1>
          <p className="text-gray-600">Track your coding journey and see how you're improving</p>
        </div>
        {results.length > 0 && (
          <Button variant="outline" onClick={clearProgress}>
            Clear Progress
          </Button>
        )}
      </div>

      {results.length === 0 ? (
        <div className="text-center py-12">
          <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No progress yet</h3>
          <p className="text-gray-600 mb-4">Complete your first quiz to start tracking your progress.</p>
          <Link href="/">
            <Button>Start Your First Quiz</Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Quizzes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">{totalQuizzes}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Average Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-2xl font-bold ${getScoreColor(averageScore)}`}>{averageScore}%</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-gray-600">Total Time</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">{formatTime(totalTime)}</div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Quiz History</CardTitle>
              <CardDescription>Your completed quizzes and scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results
                  .sort((a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime())
                  .map((result, index) => {
                    const percentage = Math.round((result.score / result.totalQuestions) * 100)
                    return (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{result.quizTitle}</h4>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(result.completedAt).toLocaleDateString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {formatTime(result.timeSpent)}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className={`text-lg font-bold ${getScoreColor(percentage)}`}>
                              {result.score}/{result.totalQuestions}
                            </div>
                            <div className="text-sm text-gray-600">{percentage}%</div>
                          </div>

                          <div className="w-24">
                            <ProgressBar value={percentage} />
                          </div>

                          <Link href={`/quiz/${result.quizId}`}>
                            <Button variant="outline" size="sm">
                              <RotateCcw className="h-4 w-4 mr-1" />
                              Retake
                            </Button>
                          </Link>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
