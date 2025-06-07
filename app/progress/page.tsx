import { Progress } from "@/components/progress"

export const metadata = {
  title: "Progress - QuizBit | Track Your Coding Journey",
  description:
    "Monitor your coding progress on QuizBit. View completed quizzes, scores, and improvement over time across JavaScript, Python, and CSS challenges.",
}

export default function ProgressPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Progress />
    </div>
  )
}
