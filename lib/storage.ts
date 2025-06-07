export function getFavorites(): string[] {
  if (typeof window === "undefined") return []
  const favorites = localStorage.getItem("quizbit-favorites")
  return favorites ? JSON.parse(favorites) : []
}

export function addToFavorites(quizId: string): void {
  if (typeof window === "undefined") return
  const favorites = getFavorites()
  if (!favorites.includes(quizId)) {
    favorites.push(quizId)
    localStorage.setItem("quizbit-favorites", JSON.stringify(favorites))
  }
}

export function removeFromFavorites(quizId: string): void {
  if (typeof window === "undefined") return
  const favorites = getFavorites()
  const updated = favorites.filter((id) => id !== quizId)
  localStorage.setItem("quizbit-favorites", JSON.stringify(updated))
}

export function getQuizResults(): any[] {
  if (typeof window === "undefined") return []
  const results = localStorage.getItem("quizbit-results")
  return results ? JSON.parse(results) : []
}

export function saveQuizResult(result: any): void {
  if (typeof window === "undefined") return
  const results = getQuizResults()
  results.push(result)
  localStorage.setItem("quizbit-results", JSON.stringify(results))
}

export function clearAllResults(): void {
  if (typeof window === "undefined") return
  localStorage.removeItem("quizbit-results")
}
