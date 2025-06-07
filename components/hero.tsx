import { Code, Zap, Trophy } from "lucide-react"

export function Hero() {
  return (
    <div className="text-center py-12 mb-12">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Master Coding with
        <span className="text-blue-600 block">Interactive Quizzes</span>
      </h1>
      <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
        Practice JavaScript, Python, and CSS with real-time code evaluation, instant feedback, and detailed
        explanations. Perfect for developers of all skill levels.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <Code className="h-12 w-12 text-blue-600 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Interactive Editor</h3>
          <p className="text-gray-600 text-center">
            Write and test code with syntax highlighting and real-time evaluation
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <Zap className="h-12 w-12 text-yellow-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Instant Feedback</h3>
          <p className="text-gray-600 text-center">
            Get immediate results with detailed explanations for every solution
          </p>
        </div>

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">
          <Trophy className="h-12 w-12 text-green-500 mb-4" />
          <h3 className="text-lg font-semibold mb-2">Track Progress</h3>
          <p className="text-gray-600 text-center">
            Monitor your improvement and save favorite quizzes for later practice
          </p>
        </div>
      </div>
    </div>
  )
}
