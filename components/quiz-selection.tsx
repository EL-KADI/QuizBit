"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star, Clock, Users, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { quizCategories } from "@/lib/quiz-data"
import { addToFavorites, removeFromFavorites, getFavorites } from "@/lib/storage"
import { useToast } from "@/hooks/use-toast"

export function QuizSelection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [languageFilter, setLanguageFilter] = useState("all")
  const [favorites, setFavorites] = useState<string[]>([])
  const { toast } = useToast()

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  const filteredQuizzes = quizCategories.filter((quiz) => {
    const matchesSearch =
      quiz.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quiz.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDifficulty = difficultyFilter === "all" || quiz.difficulty === difficultyFilter
    const matchesLanguage = languageFilter === "all" || quiz.language === languageFilter

    return matchesSearch && matchesDifficulty && matchesLanguage
  })

  const toggleFavorite = (quizId: string) => {
    if (favorites.includes(quizId)) {
      removeFromFavorites(quizId)
      setFavorites((prev) => prev.filter((id) => id !== quizId))
      toast({
        title: "Removed from favorites",
        description: "Quiz removed from your favorites list.",
      })
    } else {
      addToFavorites(quizId)
      setFavorites((prev) => [...prev, quizId])
      toast({
        title: "Added to favorites",
        description: "Quiz saved to your favorites list.",
      })
    }
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

  const getLanguageColor = (language: string) => {
    switch (language) {
      case "javascript":
        return "bg-yellow-100 text-yellow-800"
      case "python":
        return "bg-blue-100 text-blue-800"
      case "css":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Choose Your Challenge</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Input
              placeholder="Search quizzes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full"
            />
          </div>

          <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
              <SelectItem value="advanced">Advanced</SelectItem>
            </SelectContent>
          </Select>

          <Select value={languageFilter} onValueChange={setLanguageFilter}>
            <SelectTrigger className="w-full md:w-48">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              <SelectItem value="javascript">JavaScript</SelectItem>
              <SelectItem value="css">CSS</SelectItem>
              <SelectItem value="python">Python</SelectItem>
              <SelectItem value="nodejs">Node.js</SelectItem>
              <SelectItem value="sql">SQL</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredQuizzes.map((quiz) => (
          <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{quiz.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600">{quiz.description}</CardDescription>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(quiz.id)}
                  className="ml-2"
                  aria-label={favorites.includes(quiz.id) ? "Remove from favorites" : "Add to favorites"}
                >
                  <Star
                    className={`h-5 w-5 ${
                      favorites.includes(quiz.id) ? "fill-yellow-400 text-yellow-400" : "text-gray-400"
                    }`}
                  />
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={getDifficultyColor(quiz.difficulty)}>{quiz.difficulty}</Badge>
                <Badge className={getLanguageColor(quiz.language)}>{quiz.language}</Badge>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {quiz.estimatedTime}
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {quiz.questions.length} questions
                </div>
              </div>

              <Link href={`/quiz/${quiz.id}`}>
                <Button className="w-full">Start Quiz</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredQuizzes.length === 0 && (
        <div className="text-center py-12">
          <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No quizzes found</h3>
          <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  )
}
