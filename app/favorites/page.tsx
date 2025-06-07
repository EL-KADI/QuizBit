import { Favorites } from "@/components/favorites"

export const metadata = {
  title: "Favorites - QuizBit | Your Saved Coding Quizzes",
  description:
    "Access your favorite coding quizzes on QuizBit. Keep track of your preferred JavaScript, Python, and CSS challenges for quick practice sessions.",
}

export default function FavoritesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Favorites />
    </div>
  )
}
