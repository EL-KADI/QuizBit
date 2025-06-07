"use client"

import { useParams } from "next/navigation"
import { QuizInterface } from "@/components/quiz-interface"

export default function QuizPage() {
  const params = useParams()
  const category = params.category as string

  return (
    <div className="container mx-auto px-4 py-8">
      <QuizInterface category={category} />
    </div>
  )
}
