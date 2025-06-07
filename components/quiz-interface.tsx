"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight, Play, RotateCcw, CheckCircle, XCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CodeEditor } from "@/components/code-editor"
import { quizCategories } from "@/lib/quiz-data"
import { evaluateCode } from "@/lib/code-evaluator"
import { saveQuizResult } from "@/lib/storage"
import { useToast } from "@/hooks/use-toast"

interface QuizInterfaceProps {
  category: string
}

export function QuizInterface({ category }: QuizInterfaceProps) {
  const router = useRouter()
  const { toast } = useToast()
  const [quiz, setQuiz] = useState(quizCategories.find((q) => q.id === category))
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [userCode, setUserCode] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [isEvaluating, setIsEvaluating] = useState(false)
  const [startTime] = useState(Date.now())
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())

  useEffect(() => {
    if (!quiz) {
      router.push("/")
      return
    }
    setUserCode(quiz.questions[currentQuestion]?.starterCode || "")
    setQuestionStartTime(Date.now())
  }, [currentQuestion, quiz, router])

  if (!quiz) return null

  const currentQ = quiz.questions[currentQuestion]
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100

  const runCode = async () => {
    setIsEvaluating(true)

    try {
      const result = await evaluateCode(userCode, currentQ, quiz.language)

      const newResult = {
        questionIndex: currentQuestion,
        userCode,
        result,
        timeSpent: Date.now() - questionStartTime,
      }

      setResults((prev) => {
        const updated = [...prev]
        updated[currentQuestion] = newResult
        return updated
      })

      if (result.passed) {
        toast({
          title: "Correct!",
          description: `Output: ${result.output}`,
        })
      } else {
        toast({
          title: "Incorrect",
          description: result.error || "Your solution doesn't match the expected output.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to evaluate code. Please check your syntax.",
        variant: "destructive",
      })
    }

    setIsEvaluating(false)
  }

  const nextQuestion = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      finishQuiz()
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const finishQuiz = () => {
    const totalTime = Date.now() - startTime
    const score = results.filter((r) => r?.result?.passed).length

    const quizResult = {
      quizId: quiz.id,
      quizTitle: quiz.title,
      score,
      totalQuestions: quiz.questions.length,
      timeSpent: totalTime,
      completedAt: new Date().toISOString(),
      results,
    }

    saveQuizResult(quizResult)

    sessionStorage.setItem("lastQuizResult", JSON.stringify(quizResult))
    router.push("/results")
  }

  const resetCode = () => {
    setUserCode(currentQ.starterCode || "")
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800"
      case "intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{quiz.title}</h1>
            <p className="text-gray-600">{quiz.description}</p>
          </div>
          <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm text-gray-600">
            Question {currentQuestion + 1} of {quiz.questions.length}
          </span>
          <Progress value={progress} className="flex-1" />
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span>Problem</span>
              {results[currentQuestion]?.result?.passed && <CheckCircle className="h-5 w-5 text-green-500" />}
              {results[currentQuestion]?.result && !results[currentQuestion].result.passed && (
                <XCircle className="h-5 w-5 text-red-500" />
              )}
            </CardTitle>
            <CardDescription>{currentQ.title}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Description</h4>
              <p className="text-gray-700">{currentQ.description}</p>
            </div>

            {currentQ.examples && (
              <div>
                <h4 className="font-semibold mb-2">Examples</h4>
                {currentQ.examples.map((example, idx) => (
                  <div key={idx} className="bg-gray-50 p-3 rounded-md mb-2">
                    <div className="font-mono text-sm">
                      <div>
                        <strong>Input:</strong> {example.input}
                      </div>
                      <div>
                        <strong>Output:</strong> {example.output}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentQ.constraints && (
              <div>
                <h4 className="font-semibold mb-2">Constraints</h4>
                <ul className="list-disc list-inside text-sm text-gray-700">
                  {currentQ.constraints.map((constraint, idx) => (
                    <li key={idx}>{constraint}</li>
                  ))}
                </ul>
              </div>
            )}

            {results[currentQuestion]?.result && (
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Result</h4>
                <div
                  className={`p-3 rounded-md ${
                    results[currentQuestion].result.passed
                      ? "bg-green-50 border border-green-200"
                      : "bg-red-50 border border-red-200"
                  }`}
                >
                  <div className="text-sm">
                    <div>
                      <strong>Status:</strong> {results[currentQuestion].result.passed ? "Correct" : "Incorrect"}
                    </div>
                    <div>
                      <strong>Output:</strong> {results[currentQuestion].result.output}
                    </div>
                    {results[currentQuestion].result.expected && (
                      <div>
                        <strong>Expected:</strong> {results[currentQuestion].result.expected}
                      </div>
                    )}
                    {results[currentQuestion].result.error && (
                      <div className="text-red-600">
                        <strong>Error:</strong> {results[currentQuestion].result.error}
                      </div>
                    )}
                  </div>
                </div>

                {currentQ.explanation && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-md">
                    <h5 className="font-semibold text-blue-900 mb-1">Explanation</h5>
                    <p className="text-sm text-blue-800">{currentQ.explanation}</p>
                  </div>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Code Editor</CardTitle>
            <CardDescription>Write your solution in {quiz.language}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <CodeEditor
                value={userCode}
                onChange={setUserCode}
                language={quiz.language}
                placeholder={`Write your ${quiz.language} solution here...`}
              />

              <div className="flex gap-2">
                <Button onClick={runCode} disabled={isEvaluating} className="flex-1">
                  <Play className="h-4 w-4 mr-2" />
                  {isEvaluating ? "Running..." : "Run Code"}
                </Button>
                <Button variant="outline" onClick={resetCode} aria-label="Reset code to starter template">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-between mt-6">
        <Button variant="outline" onClick={prevQuestion} disabled={currentQuestion === 0}>
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>

        <Button onClick={nextQuestion}>
          {currentQuestion === quiz.questions.length - 1 ? "Finish Quiz" : "Next"}
          {currentQuestion < quiz.questions.length - 1 && <ChevronRight className="h-4 w-4 ml-2" />}
        </Button>
      </div>
    </div>
  )
}
