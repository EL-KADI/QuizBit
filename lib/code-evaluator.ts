export async function evaluateCode(code: string, question: any, language: string) {
  try {
    switch (language) {
      case "javascript":
        return evaluateJavaScript(code, question)
      case "python":
        return evaluatePython(code, question)
      case "css":
        return evaluateCSS(code, question)
      default:
        throw new Error("Unsupported language")
    }
  } catch (error) {
    return {
      passed: false,
      output: null,
      error: error instanceof Error ? error.message : "Unknown error occurred",
    }
  }
}

function evaluateJavaScript(code: string, question: any) {
  try {
    const func = new Function("return " + code)()

    for (const testCase of question.testCases) {
      const result = func(testCase.input)
      if (JSON.stringify(result) !== JSON.stringify(testCase.expected)) {
        return {
          passed: false,
          output: result,
          expected: testCase.expected,
          error: null,
        }
      }
    }

    const firstTest = question.testCases[0]
    const output = func(firstTest.input)

    return {
      passed: true,
      output: output,
      expected: firstTest.expected,
      error: null,
    }
  } catch (error) {
    return {
      passed: false,
      output: null,
      error: error instanceof Error ? error.message : "Execution error",
    }
  }
}

function evaluatePython(code: string, question: any) {
  try {
    const mockPython = code
      .replace(/def\s+(\w+)\s*$$[^)]*$$:\s*/, "function $1() {")
      .replace(/pass/g, "return null;")
      .replace(/True/g, "true")
      .replace(/False/g, "false")
      .replace(/None/g, "null")
      .replace(/#.*$/gm, "//$&")

    const func = new Function("return " + mockPython)()

    for (const testCase of question.testCases) {
      const result = func(testCase.input)
      if (JSON.stringify(result) !== JSON.stringify(testCase.expected)) {
        return {
          passed: false,
          output: result,
          expected: testCase.expected,
          error: null,
        }
      }
    }

    const firstTest = question.testCases[0]
    const output = func(firstTest.input)

    return {
      passed: true,
      output: output,
      expected: firstTest.expected,
      error: null,
    }
  } catch (error) {
    return {
      passed: false,
      output: null,
      error: "Python evaluation error (simulated)",
    }
  }
}

function evaluateCSS(code: string, question: any) {
  const hasFlexbox = code.includes("display: flex") || code.includes("display:flex")
  const hasGrid = code.includes("display: grid") || code.includes("display:grid")
  const hasCenter = code.includes("justify-content: center") && code.includes("align-items: center")
  const hasMediaQuery = code.includes("@media")
  const hasSpaceBetween = code.includes("justify-content: space-between")

  let passed = false
  let feedback = ""

  if (question.id === "css-1") {
    passed = hasFlexbox && hasCenter
    feedback = passed ? "Correctly centered using Flexbox" : "Missing Flexbox centering properties"
  } else if (question.id === "css-2") {
    passed = hasGrid && hasMediaQuery
    feedback = passed ? "Responsive grid implemented correctly" : "Missing Grid or media query"
  } else if (question.id === "css-3") {
    passed = hasFlexbox && hasSpaceBetween
    feedback = passed ? "Navigation layout correct" : "Missing Flexbox or space-between"
  }

  return {
    passed,
    output: feedback,
    expected: "Valid CSS solution",
    error: passed ? null : "CSS requirements not met",
  }
}
