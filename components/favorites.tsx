"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Star, Clock, Users, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getFavorites, removeFromFavorites } from "@/lib/storage"
import { quizCategories } from "@/lib/quiz-data"
import { useToast } from "@/hooks/use-toast"

export function Favorites() {
  const [favorites, setFavorites] = useState<string[]>([])
  const { toast } = useToast()

  useEffect(() => {
    setFavorites(getFavorites())
  }, [])

  const favoriteQuizzes = quizCategories.filter((quiz) => favorites.includes(quiz.id))

  const removeFavorite = (quizId: string) => {
    removeFromFavorites(quizId)
    setFavorites((prev) => prev.filter((id) => id !== quizId))
    toast({
      title: "Removed from favorites",
      description: "Quiz removed from your favorites list.",
    })
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
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Favorites</h1>
        <p className="text-gray-600">Quick access to your saved coding quizzes</p>
      </div>

      {favoriteQuizzes.length === 0 ? (
        <div className="text-center py-12">
          <Star className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No favorites yet</h3>
          <p className="text-gray-600 mb-4">Start adding quizzes to your favorites to see them here.</p>
          <Link href="/">
            <Button>Browse Quizzes</Button>
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteQuizzes.map((quiz) => (
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
                    onClick={() => removeFavorite(quiz.id)}
                    className="ml-2 text-red-500 hover:text-red-700"
                    aria-label="Remove from favorites"
                  >
                    <Trash2 className="h-4 w-4" />
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
      )}
    </div>
  )
}
