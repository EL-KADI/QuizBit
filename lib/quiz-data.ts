export interface Question {
  id: string;
  title: string;
  description: string;
  examples?: { input: string; output: string }[];
  constraints?: string[];
  starterCode?: string;
  testCases: { input: any; expected: any }[];
  explanation?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  language: "javascript" | "python" | "css" | "react" | "nodejs" | "sql";
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedTime: string;
  questions: Question[];
}

export const quizCategories: Quiz[] = [
  {
    id: "javascript-basics",
    title: "JavaScript Basics",
    description:
      "Master fundamental JavaScript concepts including variables, functions, and control flow",
    language: "javascript",
    difficulty: "beginner",
    estimatedTime: "25 minutes",
    questions: [
      {
        id: "js-1",
        title: "Reverse a String",
        description:
          "Write a function that takes a string and returns it reversed.",
        examples: [
          { input: '"hello"', output: '"olleh"' },
          { input: '"world"', output: '"dlrow"' },
        ],
        constraints: ["Input string length ≤ 1000"],
        starterCode: "function reverseString(str) {\n  // Your code here\n}",
        testCases: [
          { input: "hello", expected: "olleh" },
          { input: "world", expected: "dlrow" },
          { input: "JavaScript", expected: "tpircSavaJ" },
        ],
        explanation:
          "You can reverse a string by splitting it into an array, reversing the array, and joining it back into a string.",
      },
      {
        id: "js-2",
        title: "Find Maximum Number",
        description:
          "Write a function that finds the maximum number in an array.",
        examples: [
          { input: "[1, 3, 2]", output: "3" },
          { input: "[10, 5, 8]", output: "10" },
        ],
        constraints: ["Array length ≥ 1", "All elements are numbers"],
        starterCode: "function findMax(numbers) {\n  // Your code here\n}",
        testCases: [
          { input: [1, 3, 2], expected: 3 },
          { input: [10, 5, 8], expected: 10 },
          { input: [-1, -5, -2], expected: -1 },
        ],
        explanation:
          "Use Math.max() with the spread operator or iterate through the array to find the maximum value.",
      },
      {
        id: "js-3",
        title: "Count Vowels",
        description:
          "Write a function that counts the number of vowels in a string.",
        examples: [
          { input: '"hello"', output: "2" },
          { input: '"programming"', output: "3" },
        ],
        constraints: ["Consider a, e, i, o, u as vowels (case insensitive)"],
        starterCode: "function countVowels(str) {\n  // Your code here\n}",
        testCases: [
          { input: "hello", expected: 2 },
          { input: "programming", expected: 3 },
          { input: "xyz", expected: 0 },
        ],
        explanation:
          "Convert the string to lowercase and count occurrences of vowel characters.",
      },
      {
        id: "js-4",
        title: "Palindrome Check",
        description:
          "Write a function that checks if a string is a palindrome (reads the same forwards and backwards).",
        examples: [
          { input: '"racecar"', output: "true" },
          { input: '"hello"', output: "false" },
        ],
        constraints: ["Ignore case and spaces"],
        starterCode: "function isPalindrome(str) {\n  // Your code here\n}",
        testCases: [
          { input: "racecar", expected: true },
          { input: "hello", expected: false },
          { input: "A man a plan a canal Panama", expected: true },
        ],
        explanation:
          "Clean the string, convert to lowercase, and compare with its reverse.",
      },
      {
        id: "js-5",
        title: "Sum of Array",
        description:
          "Write a function that calculates the sum of all numbers in an array.",
        examples: [
          { input: "[1, 2, 3, 4]", output: "10" },
          { input: "[5, -3, 2]", output: "4" },
        ],
        constraints: ["Array contains only numbers"],
        starterCode: "function sumArray(numbers) {\n  // Your code here\n}",
        testCases: [
          { input: [1, 2, 3, 4], expected: 10 },
          { input: [5, -3, 2], expected: 4 },
          { input: [], expected: 0 },
        ],
        explanation:
          "Use reduce() method or a simple loop to add all array elements.",
      },
      {
        id: "js-6",
        title: "Factorial Calculator",
        description:
          "Write a function that calculates the factorial of a positive integer.",
        examples: [
          { input: "5", output: "120" },
          { input: "0", output: "1" },
        ],
        constraints: ["Input is a non-negative integer"],
        starterCode: "function factorial(n) {\n  // Your code here\n}",
        testCases: [
          { input: 5, expected: 120 },
          { input: 0, expected: 1 },
          { input: 3, expected: 6 },
        ],
        explanation: "Use recursion or iteration. Remember that 0! = 1.",
      },
      {
        id: "js-7",
        title: "Remove Duplicates",
        description:
          "Write a function that removes duplicate elements from an array.",
        examples: [
          { input: "[1, 2, 2, 3, 4, 4, 5]", output: "[1, 2, 3, 4, 5]" },
          { input: '["a", "b", "a", "c"]', output: '["a", "b", "c"]' },
        ],
        constraints: ["Preserve original order"],
        starterCode: "function removeDuplicates(arr) {\n  // Your code here\n}",
        testCases: [
          { input: [1, 2, 2, 3, 4, 4, 5], expected: [1, 2, 3, 4, 5] },
          { input: ["a", "b", "a", "c"], expected: ["a", "b", "c"] },
          { input: [], expected: [] },
        ],
        explanation:
          "Use Set or filter with indexOf to remove duplicates while preserving order.",
      },
      {
        id: "js-8",
        title: "FizzBuzz",
        description:
          "Write a function that returns 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, 'FizzBuzz' for multiples of both, or the number itself.",
        examples: [
          { input: "3", output: '"Fizz"' },
          { input: "5", output: '"Buzz"' },
          { input: "15", output: '"FizzBuzz"' },
          { input: "7", output: "7" },
        ],
        constraints: ["Input is a positive integer"],
        starterCode: "function fizzBuzz(n) {\n  // Your code here\n}",
        testCases: [
          { input: 3, expected: "Fizz" },
          { input: 5, expected: "Buzz" },
          { input: 15, expected: "FizzBuzz" },
          { input: 7, expected: 7 },
        ],
        explanation:
          "Check divisibility by 15 first, then 3, then 5, otherwise return the number.",
      },
    ],
  },
  {
    id: "python-fundamentals",
    title: "Python Fundamentals",
    description:
      "Learn core Python programming concepts with hands-on practice",
    language: "python",
    difficulty: "beginner",
    estimatedTime: "30 minutes",
    questions: [
      {
        id: "py-1",
        title: "Sum of List",
        description:
          "Write a function that calculates the sum of all numbers in a list.",
        examples: [
          { input: "[1, 2, 3, 4]", output: "10" },
          { input: "[5, 10, 15]", output: "30" },
        ],
        constraints: ["List contains only integers", "List length ≥ 1"],
        starterCode: "def sum_list(numbers):\n    # Your code here\n    pass",
        testCases: [
          { input: [1, 2, 3, 4], expected: 10 },
          { input: [5, 10, 15], expected: 30 },
          { input: [-1, 1, -2, 2], expected: 0 },
        ],
        explanation:
          "Use the built-in sum() function or iterate through the list to add all elements.",
      },
      {
        id: "py-2",
        title: "Check Even Number",
        description: "Write a function that checks if a number is even.",
        examples: [
          { input: "4", output: "True" },
          { input: "7", output: "False" },
        ],
        constraints: ["Input is always an integer"],
        starterCode: "def is_even(number):\n    # Your code here\n    pass",
        testCases: [
          { input: 4, expected: true },
          { input: 7, expected: false },
          { input: 0, expected: true },
        ],
        explanation:
          "Use the modulo operator (%) to check if a number is divisible by 2.",
      },
      {
        id: "py-3",
        title: "List Comprehension",
        description:
          "Create a list of squares for numbers 1 to n using list comprehension.",
        examples: [
          { input: "3", output: "[1, 4, 9]" },
          { input: "5", output: "[1, 4, 9, 16, 25]" },
        ],
        constraints: ["n ≥ 1", "n ≤ 100"],
        starterCode: "def squares_list(n):\n    # Your code here\n    pass",
        testCases: [
          { input: 3, expected: [1, 4, 9] },
          { input: 5, expected: [1, 4, 9, 16, 25] },
          { input: 1, expected: [1] },
        ],
        explanation: "Use list comprehension: [i**2 for i in range(1, n+1)]",
      },
      {
        id: "py-4",
        title: "Count Characters",
        description:
          "Write a function that counts the frequency of each character in a string.",
        examples: [
          { input: '"hello"', output: '{"h": 1, "e": 1, "l": 2, "o": 1}' },
        ],
        constraints: ["Case sensitive", "Include spaces"],
        starterCode: "def count_chars(text):\n    # Your code here\n    pass",
        testCases: [
          { input: "hello", expected: { h: 1, e: 1, l: 2, o: 1 } },
          { input: "aaa", expected: { a: 3 } },
        ],
        explanation:
          "Use a dictionary to count character occurrences or use collections.Counter.",
      },
      {
        id: "py-5",
        title: "Find Common Elements",
        description:
          "Write a function that finds common elements between two lists.",
        examples: [{ input: "[1, 2, 3], [2, 3, 4]", output: "[2, 3]" }],
        constraints: ["Return unique common elements"],
        starterCode:
          "def find_common(list1, list2):\n    # Your code here\n    pass",
        testCases: [
          {
            input: [
              [1, 2, 3],
              [2, 3, 4],
            ],
            expected: [2, 3],
          },
          {
            input: [
              ["a", "b"],
              ["b", "c"],
            ],
            expected: ["b"],
          },
        ],
        explanation:
          "Use set intersection or list comprehension with membership testing.",
      },
      {
        id: "py-6",
        title: "Prime Number Check",
        description: "Write a function that checks if a number is prime.",
        examples: [
          { input: "7", output: "True" },
          { input: "4", output: "False" },
        ],
        constraints: ["Number ≥ 2"],
        starterCode: "def is_prime(n):\n    # Your code here\n    pass",
        testCases: [
          { input: 7, expected: true },
          { input: 4, expected: false },
          { input: 2, expected: true },
        ],
        explanation:
          "Check divisibility from 2 to sqrt(n). A prime number has no divisors except 1 and itself.",
      },
      {
        id: "py-7",
        title: "Reverse Words",
        description:
          "Write a function that reverses the order of words in a string.",
        examples: [{ input: '"hello world"', output: '"world hello"' }],
        constraints: ["Preserve single spaces between words"],
        starterCode: "def reverse_words(text):\n    # Your code here\n    pass",
        testCases: [
          { input: "hello world", expected: "world hello" },
          { input: "python is great", expected: "great is python" },
        ],
        explanation:
          "Split the string into words, reverse the list, and join back with spaces.",
      },
      {
        id: "py-8",
        title: "Fibonacci Sequence",
        description:
          "Write a function that generates the first n numbers in the Fibonacci sequence.",
        examples: [{ input: "5", output: "[0, 1, 1, 2, 3]" }],
        constraints: ["n ≥ 1", "Start with 0, 1"],
        starterCode: "def fibonacci(n):\n    # Your code here\n    pass",
        testCases: [
          { input: 5, expected: [0, 1, 1, 2, 3] },
          { input: 1, expected: [0] },
          { input: 2, expected: [0, 1] },
        ],
        explanation:
          "Start with [0, 1] and generate subsequent numbers by adding the two previous numbers.",
      },
    ],
  },
  {
    id: "css-layouts",
    title: "CSS Layouts & Styling",
    description:
      "Master CSS layout techniques including Flexbox, Grid, and responsive design",
    language: "css",
    difficulty: "intermediate",
    estimatedTime: "35 minutes",
    questions: [
      {
        id: "css-1",
        title: "Center a Div",
        description:
          "Write CSS to center a div both horizontally and vertically using Flexbox.",
        examples: [
          {
            input: "Container with child div",
            output: "Centered div in viewport",
          },
        ],
        constraints: ["Use Flexbox only", "No absolute positioning"],
        starterCode:
          ".container {\n  /* Your CSS here */\n}\n\n.child {\n  width: 200px;\n  height: 200px;\n  background: blue;\n}",
        testCases: [{ input: "flexbox", expected: "centered" }],
        explanation:
          "Use display: flex, justify-content: center, and align-items: center on the container.",
      },
      {
        id: "css-2",
        title: "Responsive Grid",
        description:
          "Create a responsive grid that shows 3 columns on desktop and 1 column on mobile.",
        examples: [
          { input: "Grid container", output: "Responsive 3-column layout" },
        ],
        constraints: ["Use CSS Grid", "Mobile breakpoint at 768px"],
        starterCode:
          ".grid {\n  /* Your CSS here */\n}\n\n@media (max-width: 768px) {\n  .grid {\n    /* Mobile styles */\n  }\n}",
        testCases: [{ input: "grid", expected: "responsive" }],
        explanation:
          "Use CSS Grid with grid-template-columns and media queries for responsiveness.",
      },
      {
        id: "css-3",
        title: "Flexbox Navigation",
        description:
          "Create a navigation bar with logo on left and menu items on right using Flexbox.",
        examples: [
          {
            input: "Nav with logo and menu",
            output: "Justified navigation layout",
          },
        ],
        constraints: ["Use Flexbox", "Logo left, menu right"],
        starterCode:
          ".navbar {\n  /* Your CSS here */\n}\n\n.logo {\n  /* Logo styles */\n}\n\n.menu {\n  /* Menu styles */\n}",
        testCases: [{ input: "navbar", expected: "justified" }],
        explanation:
          "Use display: flex and justify-content: space-between on the navbar container.",
      },
      {
        id: "css-4",
        title: "Card Layout",
        description:
          "Create a card component with image, title, description, and button.",
        examples: [{ input: "Card content", output: "Styled card component" }],
        constraints: ["Use flexbox for internal layout", "Add hover effects"],
        starterCode:
          ".card {\n  /* Your CSS here */\n}\n\n.card:hover {\n  /* Hover styles */\n}",
        testCases: [{ input: "card", expected: "styled" }],
        explanation:
          "Use flexbox for internal structure, box-shadow for depth, and transform for hover effects.",
      },
      {
        id: "css-5",
        title: "Sticky Header",
        description: "Create a header that sticks to the top when scrolling.",
        examples: [
          { input: "Header element", output: "Sticky positioned header" },
        ],
        constraints: ["Use position: sticky", "Add background on scroll"],
        starterCode: ".header {\n  /* Your CSS here */\n}",
        testCases: [{ input: "header", expected: "sticky" }],
        explanation:
          "Use position: sticky with top: 0, and consider backdrop-filter for modern browsers.",
      },
      {
        id: "css-6",
        title: "Button Variants",
        description:
          "Create primary, secondary, and outline button variants with hover states.",
        examples: [
          { input: "Button elements", output: "Styled button variants" },
        ],
        constraints: ["Use CSS custom properties", "Smooth transitions"],
        starterCode:
          ".btn {\n  /* Base button styles */\n}\n\n.btn--primary {\n  /* Primary variant */\n}\n\n.btn--secondary {\n  /* Secondary variant */\n}",
        testCases: [{ input: "buttons", expected: "variants" }],
        explanation:
          "Use CSS custom properties for colors and consistent padding/border-radius across variants.",
      },
      {
        id: "css-7",
        title: "Two-Column Layout",
        description:
          "Create a two-column layout with sidebar and main content using CSS Grid.",
        examples: [
          { input: "Layout container", output: "Two-column grid layout" },
        ],
        constraints: ["Use CSS Grid", "Sidebar fixed width, content flexible"],
        starterCode:
          ".layout {\n  /* Your CSS here */\n}\n\n.sidebar {\n  /* Sidebar styles */\n}\n\n.main {\n  /* Main content styles */\n}",
        testCases: [{ input: "layout", expected: "two-column" }],
        explanation:
          "Use grid-template-columns with fixed width for sidebar and 1fr for main content.",
      },
    ],
  },
  {
    id: "javascript-advanced",
    title: "Advanced JavaScript",
    description:
      "Tackle complex JavaScript concepts including closures, promises, and async programming",
    language: "javascript",
    difficulty: "advanced",
    estimatedTime: "40 minutes",
    questions: [
      {
        id: "js-adv-1",
        title: "Debounce Function",
        description:
          "Implement a debounce function that delays execution until after a specified time.",
        examples: [
          { input: "function, 300ms delay", output: "Debounced function" },
        ],
        constraints: ["Use closures", "Clear previous timeouts"],
        starterCode: "function debounce(func, delay) {\n  // Your code here\n}",
        testCases: [{ input: "debounce", expected: "delayed" }],
        explanation:
          "Use setTimeout and clearTimeout with closures to manage the delay.",
      },
      {
        id: "js-adv-2",
        title: "Promise Chain",
        description:
          "Create a function that chains multiple promises and handles errors.",
        examples: [
          {
            input: "Array of async operations",
            output: "Chained promise result",
          },
        ],
        constraints: ["Handle all errors", "Return final result"],
        starterCode:
          "function chainPromises(operations) {\n  // Your code here\n}",
        testCases: [{ input: "promises", expected: "chained" }],
        explanation:
          "Use Promise.all() or reduce() to chain promises sequentially.",
      },
      {
        id: "js-adv-3",
        title: "Deep Clone Object",
        description:
          "Implement a deep clone function for nested objects and arrays.",
        examples: [{ input: "Nested object", output: "Deep cloned copy" }],
        constraints: [
          "Handle nested objects and arrays",
          "No external libraries",
        ],
        starterCode: "function deepClone(obj) {\n  // Your code here\n}",
        testCases: [{ input: { a: { b: 1 } }, expected: { a: { b: 1 } } }],
        explanation:
          "Use recursion to handle nested objects and arrays, checking for null and primitive types.",
      },
      {
        id: "js-adv-4",
        title: "Throttle Function",
        description:
          "Implement a throttle function that limits function execution to once per specified interval.",
        examples: [
          { input: "function, 1000ms interval", output: "Throttled function" },
        ],
        constraints: ["Use closures", "Track last execution time"],
        starterCode:
          "function throttle(func, interval) {\n  // Your code here\n}",
        testCases: [{ input: "throttle", expected: "limited" }],
        explanation:
          "Track the last execution time and only execute if enough time has passed.",
      },
      {
        id: "js-adv-5",
        title: "Curry Function",
        description:
          "Implement a curry function that transforms a function to be callable with partial arguments.",
        examples: [{ input: "add(1)(2)(3)", output: "6" }],
        constraints: [
          "Support any number of arguments",
          "Return result when all args provided",
        ],
        starterCode: "function curry(fn) {\n  // Your code here\n}",
        testCases: [{ input: "curry", expected: "partial" }],
        explanation:
          "Use closures to accumulate arguments and return the result when all arguments are provided.",
      },
      {
        id: "js-adv-6",
        title: "Event Emitter",
        description:
          "Create a simple event emitter class with on, off, and emit methods.",
        examples: [
          { input: "EventEmitter instance", output: "Event handling system" },
        ],
        constraints: ["Support multiple listeners", "Handle event removal"],
        starterCode:
          "class EventEmitter {\n  constructor() {\n    // Your code here\n  }\n  \n  on(event, callback) {\n    // Your code here\n  }\n  \n  off(event, callback) {\n    // Your code here\n  }\n  \n  emit(event, ...args) {\n    // Your code here\n  }\n}",
        testCases: [{ input: "emitter", expected: "events" }],
        explanation:
          "Use a Map or object to store event listeners arrays and manage subscriptions.",
      },
      {
        id: "js-adv-7",
        title: "Async Parallel Execution",
        description:
          "Create a function that executes async operations in parallel with a concurrency limit.",
        examples: [
          {
            input: "Array of async functions, limit 3",
            output: "Results maintaining order",
          },
        ],
        constraints: ["Maintain result order", "Limit concurrent executions"],
        starterCode:
          "async function parallelLimit(tasks, limit) {\n  // Your code here\n}",
        testCases: [{ input: "parallel", expected: "limited" }],
        explanation:
          "Use Promise.all with chunking or a semaphore pattern to control concurrency.",
      },
    ],
  },
  {
    id: "react-fundamentals",
    title: "React Fundamentals",
    description:
      "Master React concepts including hooks, state management, and component patterns",
    language: "react",
    difficulty: "intermediate",
    estimatedTime: "35 minutes",
    questions: [
      {
        id: "react-1",
        title: "Counter Component",
        description:
          "Create a counter component with increment, decrement, and reset functionality.",
        examples: [{ input: "Counter UI", output: "Interactive counter" }],
        constraints: ["Use useState hook", "Include all three buttons"],
        starterCode:
          "import React, { useState } from 'react';\n\nfunction Counter() {\n  // Your code here\n}",
        testCases: [{ input: "counter", expected: "interactive" }],
        explanation:
          "Use useState to manage count state and create handler functions for each operation.",
      },
      {
        id: "react-2",
        title: "Todo List",
        description:
          "Create a todo list component with add, toggle, and delete functionality.",
        examples: [
          { input: "Todo management", output: "Functional todo list" },
        ],
        constraints: [
          "Use useState for todos array",
          "Each todo has id, text, completed",
        ],
        starterCode:
          "import React, { useState } from 'react';\n\nfunction TodoList() {\n  // Your code here\n}",
        testCases: [{ input: "todos", expected: "management" }],
        explanation:
          "Manage todos array in state, use map for rendering, and create handlers for CRUD operations.",
      },
      {
        id: "react-3",
        title: "useEffect Data Fetching",
        description:
          "Create a component that fetches data on mount and handles loading states.",
        examples: [
          { input: "API endpoint", output: "Data with loading state" },
        ],
        constraints: [
          "Use useEffect and useState",
          "Handle loading and error states",
        ],
        starterCode:
          "import React, { useState, useEffect } from 'react';\n\nfunction DataFetcher({ url }) {\n  // Your code here\n}",
        testCases: [{ input: "fetcher", expected: "data" }],
        explanation:
          "Use useEffect with empty dependency array for mounting, useState for data/loading/error states.",
      },
      {
        id: "react-4",
        title: "Form with Validation",
        description:
          "Create a form component with input validation and error handling.",
        examples: [{ input: "Form fields", output: "Validated form" }],
        constraints: [
          "Validate email and required fields",
          "Show error messages",
        ],
        starterCode:
          "import React, { useState } from 'react';\n\nfunction ContactForm() {\n  // Your code here\n}",
        testCases: [{ input: "form", expected: "validated" }],
        explanation:
          "Use controlled components with validation functions and conditional error rendering.",
      },
      {
        id: "react-5",
        title: "Custom Hook",
        description: "Create a custom hook for managing local storage state.",
        examples: [
          { input: "useLocalStorage hook", output: "Persistent state" },
        ],
        constraints: ["Return value and setter", "Sync with localStorage"],
        starterCode:
          "import { useState, useEffect } from 'react';\n\nfunction useLocalStorage(key, initialValue) {\n  // Your code here\n}",
        testCases: [{ input: "localStorage", expected: "persistent" }],
        explanation:
          "Combine useState and useEffect to sync state with localStorage, handle JSON serialization.",
      },
      {
        id: "react-6",
        title: "Context Provider",
        description:
          "Create a theme context provider with dark/light mode toggle.",
        examples: [{ input: "Theme context", output: "Global theme state" }],
        constraints: [
          "Use createContext and useContext",
          "Provide toggle function",
        ],
        starterCode:
          "import React, { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  // Your code here\n}",
        testCases: [{ input: "theme", expected: "context" }],
        explanation:
          "Create context, provider component with state, and custom hook for consuming context.",
      },
      {
        id: "react-7",
        title: "Memoized Component",
        description:
          "Create a component that uses React.memo and useMemo for optimization.",
        examples: [
          { input: "Expensive computation", output: "Optimized component" },
        ],
        constraints: [
          "Use React.memo and useMemo",
          "Prevent unnecessary re-renders",
        ],
        starterCode:
          "import React, { memo, useMemo } from 'react';\n\nconst ExpensiveComponent = memo(function ExpensiveComponent({ data, multiplier }) {\n  // Your code here\n});",
        testCases: [{ input: "memo", expected: "optimized" }],
        explanation:
          "Use React.memo for component memoization and useMemo for expensive computations.",
      },
      {
        id: "react-8",
        title: "Reducer Pattern",
        description:
          "Create a component using useReducer for complex state management.",
        examples: [{ input: "Shopping cart", output: "Reducer-managed state" }],
        constraints: ["Use useReducer", "Handle multiple action types"],
        starterCode:
          "import React, { useReducer } from 'react';\n\nconst initialState = { items: [], total: 0 };\n\nfunction cartReducer(state, action) {\n  // Your code here\n}\n\nfunction ShoppingCart() {\n  // Your code here\n}",
        testCases: [{ input: "reducer", expected: "managed" }],
        explanation:
          "Define reducer function with action types, use useReducer hook, dispatch actions for state updates.",
      },
    ],
  },
  {
    id: "data-structures-algorithms",
    title: "Data Structures & Algorithms",
    description:
      "Solve algorithmic problems and implement fundamental data structures",
    language: "javascript",
    difficulty: "advanced",
    estimatedTime: "45 minutes",
    questions: [
      {
        id: "dsa-1",
        title: "Binary Search",
        description:
          "Implement binary search algorithm to find an element in a sorted array.",
        examples: [
          { input: "[1, 3, 5, 7, 9], target: 5", output: "2" },
          { input: "[1, 3, 5, 7, 9], target: 6", output: "-1" },
        ],
        constraints: ["Array is sorted", "Return index or -1 if not found"],
        starterCode:
          "function binarySearch(arr, target) {\n  // Your code here\n}",
        testCases: [
          { input: [[1, 3, 5, 7, 9], 5], expected: 2 },
          { input: [[1, 3, 5, 7, 9], 6], expected: -1 },
          { input: [[1], 1], expected: 0 },
        ],
        explanation:
          "Use two pointers (left, right) and compare middle element with target, adjust search space accordingly.",
      },
      {
        id: "dsa-2",
        title: "Linked List Implementation",
        description:
          "Implement a singly linked list with insert, delete, and find methods.",
        examples: [
          { input: "LinkedList operations", output: "Functional linked list" },
        ],
        constraints: ["Implement Node class", "Handle edge cases"],
        starterCode:
          "class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n  \n  insert(data) {\n    // Your code here\n  }\n  \n  delete(data) {\n    // Your code here\n  }\n  \n  find(data) {\n    // Your code here\n  }\n}",
        testCases: [{ input: "linkedlist", expected: "implemented" }],
        explanation:
          "Use Node class for list elements, maintain head reference, handle null checks for edge cases.",
      },
      {
        id: "dsa-3",
        title: "Stack Implementation",
        description:
          "Implement a stack data structure with push, pop, peek, and isEmpty methods.",
        examples: [
          { input: "Stack operations", output: "LIFO stack behavior" },
        ],
        constraints: ["Use array or linked list", "Handle underflow"],
        starterCode:
          "class Stack {\n  constructor() {\n    // Your code here\n  }\n  \n  push(item) {\n    // Your code here\n  }\n  \n  pop() {\n    // Your code here\n  }\n  \n  peek() {\n    // Your code here\n  }\n  \n  isEmpty() {\n    // Your code here\n  }\n}",
        testCases: [{ input: "stack", expected: "LIFO" }],
        explanation:
          "Use array with push/pop methods or implement with linked list for LIFO behavior.",
      },
      {
        id: "dsa-4",
        title: "Queue Implementation",
        description:
          "Implement a queue data structure with enqueue, dequeue, front, and isEmpty methods.",
        examples: [
          { input: "Queue operations", output: "FIFO queue behavior" },
        ],
        constraints: ["Use array or linked list", "Handle underflow"],
        starterCode:
          "class Queue {\n  constructor() {\n    // Your code here\n  }\n  \n  enqueue(item) {\n    // Your code here\n  }\n  \n  dequeue() {\n    // Your code here\n  }\n  \n  front() {\n    // Your code here\n  }\n  \n  isEmpty() {\n    // Your code here\n  }\n}",
        testCases: [{ input: "queue", expected: "FIFO" }],
        explanation:
          "Use array with push/shift or implement with linked list for FIFO behavior.",
      },
      {
        id: "dsa-5",
        title: "Two Sum Problem",
        description:
          "Find two numbers in an array that add up to a specific target sum.",
        examples: [
          { input: "[2, 7, 11, 15], target: 9", output: "[0, 1]" },
          { input: "[3, 2, 4], target: 6", output: "[1, 2]" },
        ],
        constraints: ["Return indices", "Each input has exactly one solution"],
        starterCode: "function twoSum(nums, target) {\n  // Your code here\n}",
        testCases: [
          { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
          { input: [[3, 2, 4], 6], expected: [1, 2] },
        ],
        explanation:
          "Use hash map to store numbers and their indices, check for complement in single pass.",
      },
      {
        id: "dsa-6",
        title: "Valid Parentheses",
        description:
          "Check if a string of parentheses is valid (properly opened and closed).",
        examples: [
          { input: '"()"', output: "true" },
          { input: '"([)]"', output: "false" },
          { input: '"{[]}"', output: "true" },
        ],
        constraints: ["Handle (), [], {}", "String length ≤ 10^4"],
        starterCode: "function isValidParentheses(s) {\n  // Your code here\n}",
        testCases: [
          { input: "()", expected: true },
          { input: "([)]", expected: false },
          { input: "{[]}", expected: true },
        ],
        explanation:
          "Use stack to track opening brackets, match with closing brackets, ensure stack is empty at end.",
      },
      {
        id: "dsa-7",
        title: "Merge Sort",
        description: "Implement the merge sort algorithm to sort an array.",
        examples: [
          {
            input: "[64, 34, 25, 12, 22, 11, 90]",
            output: "[11, 12, 22, 25, 34, 64, 90]",
          },
        ],
        constraints: ["Use divide and conquer", "Time complexity O(n log n)"],
        starterCode:
          "function mergeSort(arr) {\n  // Your code here\n}\n\nfunction merge(left, right) {\n  // Helper function\n}",
        testCases: [
          {
            input: [64, 34, 25, 12, 22, 11, 90],
            expected: [11, 12, 22, 25, 34, 64, 90],
          },
          { input: [1], expected: [1] },
        ],
        explanation:
          "Recursively divide array into halves, sort each half, then merge sorted halves back together.",
      },
      {
        id: "dsa-8",
        title: "Binary Tree Traversal",
        description:
          "Implement in-order, pre-order, and post-order traversal of a binary tree.",
        examples: [{ input: "Binary tree", output: "Traversal arrays" }],
        constraints: ["Return arrays for each traversal type"],
        starterCode:
          "class TreeNode {\n  constructor(val, left = null, right = null) {\n    this.val = val;\n    this.left = left;\n    this.right = right;\n  }\n}\n\nfunction inorderTraversal(root) {\n  // Your code here\n}\n\nfunction preorderTraversal(root) {\n  // Your code here\n}\n\nfunction postorderTraversal(root) {\n  // Your code here\n}",
        testCases: [{ input: "tree", expected: "traversals" }],
        explanation:
          "Use recursion: inorder (left, root, right), preorder (root, left, right), postorder (left, right, root).",
      },
    ],
  },
  {
    id: "web-apis-fetch",
    title: "Web APIs & Fetch",
    description:
      "Master browser APIs, HTTP requests, and asynchronous JavaScript patterns",
    language: "javascript",
    difficulty: "intermediate",
    estimatedTime: "30 minutes",
    questions: [
      {
        id: "api-1",
        title: "Fetch with Error Handling",
        description:
          "Create a function that fetches data from an API with proper error handling.",
        examples: [{ input: "API URL", output: "Data or error message" }],
        constraints: ["Handle network errors", "Parse JSON response"],
        starterCode: "async function fetchData(url) {\n  // Your code here\n}",
        testCases: [{ input: "fetch", expected: "handled" }],
        explanation:
          "Use try-catch with fetch, check response.ok, handle JSON parsing errors.",
      },
      {
        id: "api-2",
        title: "Local Storage Manager",
        description:
          "Create functions to get, set, and remove items from localStorage with JSON support.",
        examples: [
          { input: "Key-value pairs", output: "localStorage operations" },
        ],
        constraints: [
          "Handle JSON serialization",
          "Return null for missing keys",
        ],
        starterCode:
          "const storage = {\n  set(key, value) {\n    // Your code here\n  },\n  \n  get(key) {\n    // Your code here\n  },\n  \n  remove(key) {\n    // Your code here\n  }\n};",
        testCases: [{ input: "storage", expected: "managed" }],
        explanation:
          "Use JSON.stringify/parse for serialization, handle try-catch for invalid JSON.",
      },
      {
        id: "api-3",
        title: "Geolocation API",
        description:
          "Create a function that gets the user's current location using the Geolocation API.",
        examples: [
          { input: "Geolocation request", output: "Coordinates or error" },
        ],
        constraints: ["Use promises", "Handle permission denial"],
        starterCode: "function getCurrentLocation() {\n  // Your code here\n}",
        testCases: [{ input: "geolocation", expected: "coordinates" }],
        explanation:
          "Wrap navigator.geolocation.getCurrentPosition in a Promise, handle success and error callbacks.",
      },
      {
        id: "api-4",
        title: "URL Query Parameters",
        description:
          "Create functions to parse and build URL query parameters.",
        examples: [
          { input: '"?name=John&age=30"', output: '{name: "John", age: "30"}' },
          { input: '{name: "John", age: 30}', output: '"name=John&age=30"' },
        ],
        constraints: ["Handle encoding/decoding", "Support arrays"],
        starterCode:
          "function parseQuery(queryString) {\n  // Your code here\n}\n\nfunction buildQuery(params) {\n  // Your code here\n}",
        testCases: [
          { input: "?name=John&age=30", expected: { name: "John", age: "30" } },
          { input: { name: "John", age: 30 }, expected: "name=John&age=30" },
        ],
        explanation:
          "Use URLSearchParams API or manual string manipulation with encodeURIComponent.",
      },
      {
        id: "api-5",
        title: "Intersection Observer",
        description:
          "Create a function that observes when elements come into viewport using Intersection Observer.",
        examples: [{ input: "DOM elements", output: "Visibility callbacks" }],
        constraints: [
          "Use Intersection Observer API",
          "Handle multiple elements",
        ],
        starterCode:
          "function observeElements(elements, callback) {\n  // Your code here\n}",
        testCases: [{ input: "observer", expected: "visibility" }],
        explanation:
          "Create IntersectionObserver instance, observe elements, call callback with visibility state.",
      },
      {
        id: "api-6",
        title: "Web Workers Communication",
        description:
          "Create a function that communicates with a Web Worker for background processing.",
        examples: [{ input: "Heavy computation", output: "Worker result" }],
        constraints: ["Use postMessage", "Handle worker errors"],
        starterCode:
          "function runWorkerTask(data) {\n  // Your code here\n  // Worker code:\n  // self.onmessage = function(e) {\n  //   // Process e.data\n  //   self.postMessage(result);\n  // }\n}",
        testCases: [{ input: "worker", expected: "result" }],
        explanation:
          "Create Worker instance, use postMessage for communication, handle onmessage and onerror events.",
      },
      {
        id: "api-7",
        title: "FormData Handling",
        description:
          "Create a function that converts a form to FormData and handles file uploads.",
        examples: [{ input: "HTML form", output: "FormData object" }],
        constraints: ["Handle all input types", "Support file uploads"],
        starterCode: "function formToFormData(form) {\n  // Your code here\n}",
        testCases: [{ input: "form", expected: "formdata" }],
        explanation:
          "Use FormData constructor or manually append form elements, handle files and different input types.",
      },
    ],
  },
  {
    id: "es6-features",
    title: "ES6+ Modern Features",
    description:
      "Master modern JavaScript features including destructuring, modules, and async patterns",
    language: "javascript",
    difficulty: "intermediate",
    estimatedTime: "35 minutes",
    questions: [
      {
        id: "es6-1",
        title: "Array Destructuring",
        description:
          "Use array destructuring to swap variables and extract values.",
        examples: [
          { input: "let a = 1, b = 2", output: "a = 2, b = 1 (swapped)" },
          {
            input: "[1, 2, 3, 4, 5]",
            output: "first = 1, rest = [2, 3, 4, 5]",
          },
        ],
        constraints: ["Use destructuring syntax", "Handle rest parameters"],
        starterCode:
          "// Swap variables\nfunction swapVars(a, b) {\n  // Your code here\n}\n\n// Extract first and rest\nfunction extractArray(arr) {\n  // Your code here\n}",
        testCases: [
          { input: [1, 2], expected: [2, 1] },
          {
            input: [1, 2, 3, 4, 5],
            expected: { first: 1, rest: [2, 3, 4, 5] },
          },
        ],
        explanation:
          "Use [a, b] = [b, a] for swapping, [first, ...rest] for extraction.",
      },
      {
        id: "es6-2",
        title: "Object Destructuring",
        description:
          "Extract values from objects using destructuring with default values and renaming.",
        examples: [
          {
            input: '{name: "John", age: 30}',
            output: 'name = "John", age = 30',
          },
          {
            input: '{name: "John"}',
            output: 'name = "John", age = 25 (default)',
          },
        ],
        constraints: [
          "Use destructuring",
          "Provide defaults",
          "Rename variables",
        ],
        starterCode:
          "function extractUser(user) {\n  // Extract name, age (default 25), and rename email to userEmail\n  // Your code here\n}",
        testCases: [
          {
            input: { name: "John", age: 30, email: "john@test.com" },
            expected: { name: "John", age: 30, userEmail: "john@test.com" },
          },
          {
            input: { name: "Jane" },
            expected: { name: "Jane", age: 25, userEmail: undefined },
          },
        ],
        explanation:
          "Use {name, age = 25, email: userEmail} destructuring syntax.",
      },
      {
        id: "es6-3",
        title: "Template Literals",
        description:
          "Create a function that generates HTML using template literals with expressions.",
        examples: [
          {
            input: "User data",
            output: "HTML string with interpolated values",
          },
        ],
        constraints: [
          "Use template literals",
          "Include expressions",
          "Multi-line support",
        ],
        starterCode:
          "function generateUserCard(user) {\n  // Generate HTML card using template literals\n  // Your code here\n}",
        testCases: [
          {
            input: { name: "John", age: 30, email: "john@test.com" },
            expected: "html",
          },
        ],
        explanation:
          "Use backticks with ${expression} syntax for interpolation and multi-line strings.",
      },
      {
        id: "es6-4",
        title: "Arrow Functions & This",
        description:
          "Implement functions using arrow syntax and demonstrate 'this' binding behavior.",
        examples: [{ input: "Object methods", output: "Proper this context" }],
        constraints: [
          "Use arrow functions appropriately",
          "Understand this binding",
        ],
        starterCode:
          "const obj = {\n  name: 'Test',\n  \n  regularMethod() {\n    // Your code here\n  },\n  \n  arrowMethod: () => {\n    // Your code here\n  },\n  \n  delayedLog() {\n    // Use arrow function in setTimeout\n    // Your code here\n  }\n};",
        testCases: [{ input: "methods", expected: "this" }],
        explanation:
          "Arrow functions inherit this from enclosing scope, regular functions have their own this.",
      },
      {
        id: "es6-5",
        title: "Spread and Rest Operators",
        description:
          "Use spread operator for arrays/objects and rest parameters in functions.",
        examples: [
          { input: "[1, 2], [3, 4]", output: "[1, 2, 3, 4] (merged)" },
          { input: "multiple arguments", output: "sum of all arguments" },
        ],
        constraints: ["Use ... operator", "Handle arrays and objects"],
        starterCode:
          "// Merge arrays\nfunction mergeArrays(arr1, arr2) {\n  // Your code here\n}\n\n// Sum all arguments\nfunction sum(...numbers) {\n  // Your code here\n}\n\n// Clone and update object\nfunction updateUser(user, updates) {\n  // Your code here\n}",
        testCases: [
          {
            input: [
              [1, 2],
              [3, 4],
            ],
            expected: [1, 2, 3, 4],
          },
          { input: [1, 2, 3, 4], expected: 10 },
        ],
        explanation:
          "Use [...arr1, ...arr2] for arrays, {...obj, ...updates} for objects, ...args for parameters.",
      },
      {
        id: "es6-6",
        title: "Map and Set Collections",
        description:
          "Implement functions using Map and Set for unique collections and key-value pairs.",
        examples: [
          { input: "Array with duplicates", output: "Unique values using Set" },
          { input: "Key-value pairs", output: "Map operations" },
        ],
        constraints: ["Use Map and Set classes", "Demonstrate their methods"],
        starterCode:
          "// Remove duplicates using Set\nfunction removeDuplicates(arr) {\n  // Your code here\n}\n\n// Count occurrences using Map\nfunction countOccurrences(arr) {\n  // Your code here\n}\n\n// Group by property using Map\nfunction groupBy(arr, property) {\n  // Your code here\n}",
        testCases: [
          { input: [1, 2, 2, 3, 3, 4], expected: [1, 2, 3, 4] },
          {
            input: ["a", "b", "a", "c", "b"],
            expected: new Map([
              ["a", 2],
              ["b", 2],
              ["c", 1],
            ]),
          },
        ],
        explanation:
          "Set automatically handles uniqueness, Map provides key-value storage with any key type.",
      },
      {
        id: "es6-7",
        title: "Async/Await Patterns",
        description:
          "Convert Promise-based code to async/await and handle errors properly.",
        examples: [
          { input: "Promise chain", output: "Async/await equivalent" },
        ],
        constraints: ["Use async/await", "Handle errors with try-catch"],
        starterCode:
          "// Convert to async/await\nasync function fetchUserData(userId) {\n  // Original Promise chain:\n  // return fetch(`/users/${userId}`)\n  //   .then(response => response.json())\n  //   .then(user => fetch(`/posts/${user.id}`))\n  //   .then(response => response.json())\n  //   .catch(error => console.error(error));\n  \n  // Your async/await code here\n}",
        testCases: [{ input: "async", expected: "await" }],
        explanation:
          "Use try-catch blocks with await for error handling, much cleaner than Promise chains.",
      },
      {
        id: "es6-8",
        title: "Generators and Iterators",
        description:
          "Create generator functions for custom iteration patterns.",
        examples: [
          { input: "Range generator", output: "Numbers from start to end" },
          {
            input: "Fibonacci generator",
            output: "Infinite Fibonacci sequence",
          },
        ],
        constraints: ["Use function* syntax", "Implement custom iterators"],
        starterCode:
          "// Range generator\nfunction* range(start, end) {\n  // Your code here\n}\n\n// Fibonacci generator\nfunction* fibonacci() {\n  // Your code here\n}\n\n// Take first n values from generator\nfunction take(generator, n) {\n  // Your code here\n}",
        testCases: [
          { input: [1, 5], expected: [1, 2, 3, 4, 5] },
          { input: 5, expected: [0, 1, 1, 2, 3] },
        ],
        explanation:
          "Use yield to pause execution and return values, generators are iterable by default.",
      },
    ],
  },
  {
    id: "python-data-structures",
    title: "Python Data Structures",
    description:
      "Master Python's built-in data structures and their advanced usage patterns",
    language: "python",
    difficulty: "intermediate",
    estimatedTime: "40 minutes",
    questions: [
      {
        id: "pyds-1",
        title: "Dictionary Comprehension",
        description:
          "Create dictionaries using comprehension syntax with filtering and transformation.",
        examples: [
          {
            input: "['apple', 'banana', 'cherry']",
            output: "{'apple': 5, 'banana': 6, 'cherry': 6}",
          },
        ],
        constraints: ["Use dict comprehension", "Filter based on conditions"],
        starterCode:
          "def create_length_dict(words):\n    # Create dict with word lengths using comprehension\n    # Your code here\n    pass\n\ndef filter_even_squares(numbers):\n    # Create dict with even numbers as keys and their squares as values\n    # Your code here\n    pass",
        testCases: [
          {
            input: ["apple", "banana", "cherry"],
            expected: { apple: 5, banana: 6, cherry: 6 },
          },
          { input: [1, 2, 3, 4, 5, 6], expected: { 2: 4, 4: 16, 6: 36 } },
        ],
        explanation:
          "Use {key: value for item in iterable if condition} syntax for dict comprehensions.",
      },
      {
        id: "pyds-2",
        title: "Set Operations",
        description:
          "Implement functions using set operations for data analysis.",
        examples: [
          {
            input: "[1, 2, 3], [2, 3, 4]",
            output: "intersection: {2, 3}, union: {1, 2, 3, 4}",
          },
        ],
        constraints: ["Use set methods", "Handle multiple sets"],
        starterCode:
          "def analyze_sets(set1, set2):\n    # Return dict with intersection, union, difference operations\n    # Your code here\n    pass\n\ndef find_unique_elements(*lists):\n    # Find elements that appear in only one list\n    # Your code here\n    pass",
        testCases: [
          {
            input: [new Set([1, 2, 3]), new Set([2, 3, 4])],
            expected: {
              intersection: new Set([2, 3]),
              union: new Set([1, 2, 3, 4]),
            },
          },
        ],
        explanation:
          "Use &, |, - operators or intersection(), union(), difference() methods for set operations.",
      },
      {
        id: "pyds-3",
        title: "List Slicing Advanced",
        description:
          "Master advanced list slicing techniques for data manipulation.",
        examples: [
          {
            input: "[1, 2, 3, 4, 5, 6]",
            output: "reversed: [6, 5, 4, 3, 2, 1]",
          },
          { input: "[1, 2, 3, 4, 5, 6]", output: "every_second: [2, 4, 6]" },
        ],
        constraints: ["Use slice notation", "No built-in reverse functions"],
        starterCode:
          "def slice_operations(lst):\n    # Return dict with various slicing operations\n    # reverse, every_second, first_half, last_half\n    # Your code here\n    pass\n\ndef rotate_list(lst, n):\n    # Rotate list n positions to the right\n    # Your code here\n    pass",
        testCases: [
          {
            input: [1, 2, 3, 4, 5, 6],
            expected: { reverse: [6, 5, 4, 3, 2, 1], every_second: [2, 4, 6] },
          },
          { input: [[1, 2, 3, 4, 5], 2], expected: [4, 5, 1, 2, 3] },
        ],
        explanation:
          "Use [start:end:step] notation, negative indices for reverse operations.",
      },
      {
        id: "pyds-4",
        title: "Tuple Unpacking",
        description:
          "Use tuple unpacking for elegant variable assignments and function returns.",
        examples: [
          { input: "coordinates (x, y, z)", output: "individual variables" },
          { input: "nested tuples", output: "flattened values" },
        ],
        constraints: ["Use tuple unpacking", "Handle nested structures"],
        starterCode:
          "def unpack_coordinates(coord_tuple):\n    # Unpack (x, y, z) and return dict\n    # Your code here\n    pass\n\ndef swap_pairs(lst):\n    # Swap adjacent pairs using tuple unpacking\n    # [1, 2, 3, 4] -> [2, 1, 4, 3]\n    # Your code here\n    pass\n\ndef get_name_age(person_tuple):\n    # Unpack nested tuple: ((first, last), age)\n    # Your code here\n    pass",
        testCases: [
          { input: (10, 20, 30), expected: { x: 10, y: 20, z: 30 } },
          { input: [1, 2, 3, 4], expected: [2, 1, 4, 3] },
        ],
        explanation:
          "Use x, y, z = tuple syntax, works with nested structures and in loops.",
      },
      {
        id: "pyds-5",
        title: "Collections Module",
        description:
          "Use collections.Counter, defaultdict, and deque for efficient data operations.",
        examples: [
          { input: '"hello world"', output: "Counter({'l': 3, 'o': 2, ...})" },
        ],
        constraints: [
          "Import from collections",
          "Use appropriate collection types",
        ],
        starterCode:
          "from collections import Counter, defaultdict, deque\n\ndef count_characters(text):\n    # Use Counter to count character frequency\n    # Your code here\n    pass\n\ndef group_by_length(words):\n    # Use defaultdict to group words by length\n    # Your code here\n    pass\n\ndef sliding_window(lst, window_size):\n    # Use deque for efficient sliding window\n    # Your code here\n    pass",
        testCases: [
          { input: "hello world", expected: { h: 1, e: 1, l: 3, o: 2 } },
          {
            input: ["cat", "dog", "bird", "fish"],
            expected: { 3: ["cat", "dog"], 4: ["bird", "fish"] },
          },
        ],
        explanation:
          "Counter counts hashable objects, defaultdict provides default values, deque offers efficient append/pop.",
      },
      {
        id: "pyds-6",
        title: "Lambda and Built-ins",
        description:
          "Use lambda functions with map, filter, reduce, and sorted for functional programming.",
        examples: [
          { input: "[1, 2, 3, 4, 5]", output: "filtered evens: [2, 4]" },
          { input: "list of dicts", output: "sorted by specific key" },
        ],
        constraints: [
          "Use lambda functions",
          "Combine with built-in functions",
        ],
        starterCode:
          "from functools import reduce\n\ndef process_numbers(numbers):\n    # Use map, filter, reduce with lambdas\n    # Return dict with squared_evens, sum_of_odds\n    # Your code here\n    pass\n\ndef sort_students(students):\n    # Sort list of dicts by grade (descending), then by name\n    # students = [{'name': 'John', 'grade': 85}, ...]\n    # Your code here\n    pass",
        testCases: [
          {
            input: [1, 2, 3, 4, 5],
            expected: { squared_evens: [4, 16], sum_of_odds: 9 },
          },
        ],
        explanation:
          "Lambda creates anonymous functions, perfect for short operations with map/filter/sorted.",
      },
      {
        id: "pyds-7",
        title: "String Methods Mastery",
        description:
          "Master advanced string methods for text processing and validation.",
        examples: [
          { input: '"  Hello World  "', output: "processed and validated" },
        ],
        constraints: ["Use string methods", "Handle edge cases"],
        starterCode:
          "def process_text(text):\n    # Clean, validate, and transform text\n    # Return dict with cleaned, word_count, is_title_case\n    # Your code here\n    pass\n\ndef validate_email(email):\n    # Simple email validation using string methods\n    # Your code here\n    pass\n\ndef extract_numbers(text):\n    # Extract all numbers from text string\n    # Your code here\n    pass",
        testCases: [
          {
            input: "  Hello World  ",
            expected: {
              cleaned: "Hello World",
              word_count: 2,
              is_title_case: true,
            },
          },
          { input: "test@email.com", expected: true },
        ],
        explanation:
          "Use strip(), split(), join(), isdigit(), startswith(), endswith() for comprehensive text processing.",
      },
      {
        id: "pyds-8",
        title: "Iterator and Generator",
        description:
          "Create custom iterators and generators for memory-efficient data processing.",
        examples: [
          {
            input: "range-like generator",
            output: "memory-efficient iteration",
          },
          { input: "file processing", output: "line-by-line generator" },
        ],
        constraints: ["Use yield keyword", "Implement __iter__ and __next__"],
        starterCode:
          "def fibonacci_generator(n):\n    # Generate first n Fibonacci numbers\n    # Your code here\n    pass\n\ndef batch_generator(iterable, batch_size):\n    # Yield items in batches\n    # Your code here\n    pass\n\nclass CountDown:\n    # Custom iterator class\n    def __init__(self, start):\n        # Your code here\n        pass\n    \n    def __iter__(self):\n        # Your code here\n        pass\n    \n    def __next__(self):\n        # Your code here\n        pass",
        testCases: [
          { input: 5, expected: [0, 1, 1, 2, 3] },
          { input: [[1, 2, 3, 4, 5], 2], expected: [[1, 2], [3, 4], [5]] },
        ],
        explanation:
          "Generators use yield to produce values on-demand, custom iterators implement __iter__ and __next__.",
      },
    ],
  },
  {
    id: "css-animations",
    title: "CSS Animations & Transitions",
    description:
      "Create engaging animations and transitions using modern CSS techniques",
    language: "css",
    difficulty: "intermediate",
    estimatedTime: "30 minutes",
    questions: [
      {
        id: "anim-1",
        title: "Hover Button Animation",
        description:
          "Create a button with smooth hover animations including color, scale, and shadow changes.",
        examples: [
          { input: "Button element", output: "Animated hover effects" },
        ],
        constraints: [
          "Use transitions",
          "Multiple property animations",
          "Smooth timing",
        ],
        starterCode:
          ".animated-button {\n  /* Base styles */\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  \n  /* Your animation code here */\n}\n\n.animated-button:hover {\n  /* Hover styles */\n}",
        testCases: [{ input: "button", expected: "animated" }],
        explanation:
          "Use transition property to animate multiple properties, transform for scale, box-shadow for depth.",
      },
      {
        id: "anim-2",
        title: "Loading Spinner",
        description:
          "Create a CSS-only loading spinner with smooth rotation animation.",
        examples: [
          {
            input: "Spinner element",
            output: "Continuously rotating animation",
          },
        ],
        constraints: [
          "Use @keyframes",
          "Infinite animation",
          "Smooth rotation",
        ],
        starterCode:
          ".spinner {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #3498db;\n  border-radius: 50%;\n  \n  /* Your animation code here */\n}\n\n@keyframes spin {\n  /* Define keyframes */\n}",
        testCases: [{ input: "spinner", expected: "rotating" }],
        explanation:
          "Use @keyframes with transform: rotate(), animation property with infinite iteration.",
      },
      {
        id: "anim-3",
        title: "Slide-in Animation",
        description:
          "Create elements that slide in from different directions on page load or scroll.",
        examples: [
          {
            input: "Content elements",
            output: "Slide-in animations from various directions",
          },
        ],
        constraints: [
          "Use transforms",
          "Different directions",
          "Staggered timing",
        ],
        starterCode:
          ".slide-in-left {\n  /* Your code here */\n}\n\n.slide-in-right {\n  /* Your code here */\n}\n\n.slide-in-up {\n  /* Your code here */\n}\n\n@keyframes slideInLeft {\n  /* Define keyframes */\n}\n\n@keyframes slideInRight {\n  /* Define keyframes */\n}\n\n@keyframes slideInUp {\n  /* Define keyframes */\n}",
        testCases: [{ input: "slide", expected: "directions" }],
        explanation:
          "Use translateX() and translateY() transforms, start from off-screen positions.",
      },
      {
        id: "anim-4",
        title: "Pulse Effect",
        description:
          "Create a pulsing animation effect for drawing attention to elements.",
        examples: [
          { input: "Notification badge", output: "Pulsing scale animation" },
        ],
        constraints: [
          "Use scale transform",
          "Smooth pulse rhythm",
          "Infinite loop",
        ],
        starterCode:
          ".pulse {\n  /* Your animation code here */\n}\n\n@keyframes pulse {\n  /* Define pulse keyframes */\n}",
        testCases: [{ input: "pulse", expected: "scale" }],
        explanation:
          "Use transform: scale() with keyframes that create a breathing effect, ease-in-out timing.",
      },
      {
        id: "anim-5",
        title: "Card Flip Animation",
        description:
          "Create a 3D card flip effect showing front and back content.",
        examples: [
          {
            input: "Card with front/back",
            output: "3D flip animation on hover",
          },
        ],
        constraints: [
          "Use 3D transforms",
          "Preserve-3d",
          "Backface visibility",
        ],
        starterCode:
          ".flip-card {\n  /* Card container */\n  width: 300px;\n  height: 200px;\n  /* Your code here */\n}\n\n.flip-card-inner {\n  /* Inner container */\n  /* Your code here */\n}\n\n.flip-card:hover .flip-card-inner {\n  /* Flip trigger */\n}\n\n.flip-card-front,\n.flip-card-back {\n  /* Front and back faces */\n  /* Your code here */\n}",
        testCases: [{ input: "flip", expected: "3d" }],
        explanation:
          "Use transform-style: preserve-3d, rotateY() for flipping, backface-visibility: hidden.",
      },
      {
        id: "anim-6",
        title: "Bounce Animation",
        description:
          "Create a bouncing ball animation with realistic physics-like movement.",
        examples: [
          { input: "Ball element", output: "Bouncing animation with easing" },
        ],
        constraints: [
          "Realistic bounce physics",
          "Use cubic-bezier",
          "Multiple bounces",
        ],
        starterCode:
          ".bouncing-ball {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  background: #e74c3c;\n  \n  /* Your animation code here */\n}\n\n@keyframes bounce {\n  /* Define bounce keyframes */\n}",
        testCases: [{ input: "bounce", expected: "physics" }],
        explanation:
          "Use translateY() with cubic-bezier timing for realistic bounce effect, multiple keyframe stops.",
      },
      {
        id: "anim-7",
        title: "Progress Bar Animation",
        description:
          "Create an animated progress bar that fills smoothly with percentage display.",
        examples: [
          {
            input: "Progress container",
            output: "Smooth filling animation with counter",
          },
        ],
        constraints: [
          "Smooth fill animation",
          "Percentage counter",
          "Customizable duration",
        ],
        starterCode:
          ".progress-container {\n  width: 100%;\n  height: 20px;\n  background: #f0f0f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.progress-bar {\n  height: 100%;\n  background: linear-gradient(90deg, #3498db, #2980b9);\n  \n  /* Your animation code here */\n}\n\n@keyframes fillProgress {\n  /* Define fill animation */\n}",
        testCases: [{ input: "progress", expected: "animated" }],
        explanation:
          "Use width animation from 0% to target percentage, CSS counters for number display.",
      },
    ],
  },
  {
    id: "nodejs-basics",
    title: "Node.js Fundamentals",
    description:
      "Learn server-side JavaScript with Node.js including modules, file system, and HTTP",
    language: "nodejs",
    difficulty: "intermediate",
    estimatedTime: "35 minutes",
    questions: [
      {
        id: "node-1",
        title: "File System Operations",
        description:
          "Create functions to read, write, and manipulate files using Node.js fs module.",
        examples: [
          { input: "file.txt", output: "File content or write confirmation" },
        ],
        constraints: [
          "Use fs module",
          "Handle async operations",
          "Error handling",
        ],
        starterCode:
          "const fs = require('fs').promises;\nconst path = require('path');\n\nasync function readFileContent(filePath) {\n  // Your code here\n}\n\nasync function writeToFile(filePath, content) {\n  // Your code here\n}\n\nasync function getFileStats(filePath) {\n  // Your code here\n}",
        testCases: [{ input: "filesystem", expected: "operations" }],
        explanation:
          "Use fs.promises for async operations, try-catch for error handling, fs.readFile/writeFile/stat methods.",
      },
      {
        id: "node-2",
        title: "HTTP Server",
        description:
          "Create a basic HTTP server that handles different routes and methods.",
        examples: [
          {
            input: "HTTP requests",
            output: "Appropriate responses based on route",
          },
        ],
        constraints: [
          "Use http module",
          "Handle multiple routes",
          "Support JSON",
        ],
        starterCode:
          "const http = require('http');\nconst url = require('url');\n\nfunction createServer() {\n  return http.createServer((req, res) => {\n    // Your code here\n    // Handle routes: GET /, GET /api/users, POST /api/users\n  });\n}\n\n// Start server on port 3000\nconst server = createServer();\n// Your code here",
        testCases: [{ input: "server", expected: "routes" }],
        explanation:
          "Use http.createServer(), parse req.url, handle different methods, set appropriate headers.",
      },
      {
        id: "node-3",
        title: "Module System",
        description: "Create and use custom modules with exports and imports.",
        examples: [
          { input: "Math utilities module", output: "Exported functions" },
        ],
        constraints: ["Use module.exports", "Create reusable utilities"],
        starterCode:
          "// mathUtils.js\nfunction add(a, b) {\n  // Your code here\n}\n\nfunction multiply(a, b) {\n  // Your code here\n}\n\nfunction factorial(n) {\n  // Your code here\n}\n\n// Export functions\n// Your code here\n\n// main.js\n// Import and use the module\n// Your code here",
        testCases: [{ input: "modules", expected: "exports" }],
        explanation:
          "Use module.exports = {} or exports.functionName, require() to import modules.",
      },
      {
        id: "node-4",
        title: "Event Emitter",
        description:
          "Create a custom event emitter class for handling custom events.",
        examples: [
          { input: "Event emitter instance", output: "Event handling system" },
        ],
        constraints: [
          "Extend EventEmitter",
          "Custom events",
          "Multiple listeners",
        ],
        starterCode:
          "const EventEmitter = require('events');\n\nclass CustomEmitter extends EventEmitter {\n  constructor() {\n    super();\n    // Your code here\n  }\n  \n  processData(data) {\n    // Process data and emit events\n    // Your code here\n  }\n  \n  startProcess() {\n    // Emit start event\n    // Your code here\n  }\n}\n\n// Usage example\nconst emitter = new CustomEmitter();\n// Your code here",
        testCases: [{ input: "events", expected: "emitted" }],
        explanation:
          "Extend EventEmitter class, use this.emit() to trigger events, this.on() to listen.",
      },
      {
        id: "node-5",
        title: "Stream Processing",
        description:
          "Create readable and writable streams for processing large data.",
        examples: [{ input: "Large data file", output: "Streamed processing" }],
        constraints: [
          "Use stream module",
          "Handle backpressure",
          "Transform data",
        ],
        starterCode:
          "const { Readable, Writable, Transform } = require('stream');\n\nclass NumberGenerator extends Readable {\n  constructor(options) {\n    super(options);\n    // Your code here\n  }\n  \n  _read() {\n    // Your code here\n  }\n}\n\nclass NumberDoubler extends Transform {\n  _transform(chunk, encoding, callback) {\n    // Your code here\n  }\n}\n\n// Create pipeline\n// Your code here",
        testCases: [{ input: "streams", expected: "pipeline" }],
        explanation:
          "Extend stream classes, implement _read() for Readable, _transform() for Transform streams.",
      },
      {
        id: "node-6",
        title: "Path Manipulation",
        description: "Use path module for cross-platform file path operations.",
        examples: [
          { input: "File paths", output: "Normalized and joined paths" },
        ],
        constraints: ["Use path module", "Cross-platform compatibility"],
        starterCode:
          "const path = require('path');\n\nfunction pathOperations(filePath) {\n  // Return object with dirname, basename, extname, etc.\n  // Your code here\n}\n\nfunction buildPath(...segments) {\n  // Join path segments safely\n  // Your code here\n}\n\nfunction relativePath(from, to) {\n  // Get relative path\n  // Your code here\n}",
        testCases: [
          {
            input: "/home/user/documents/file.txt",
            expected: { dirname: "/home/user/documents", basename: "file.txt" },
          },
        ],
        explanation:
          "Use path.dirname(), path.basename(), path.extname(), path.join(), path.relative() methods.",
      },
      {
        id: "node-7",
        title: "Environment Variables",
        description:
          "Create a configuration system using environment variables and .env files.",
        examples: [
          {
            input: "Environment configuration",
            output: "Loaded config object",
          },
        ],
        constraints: ["Use process.env", "Default values", "Type conversion"],
        starterCode:
          "// config.js\nfunction loadConfig() {\n  // Load configuration from environment variables\n  // Provide defaults for missing values\n  // Your code here\n}\n\nfunction validateConfig(config) {\n  // Validate required configuration\n  // Your code here\n}\n\n// Export configuration\n// Your code here",
        testCases: [{ input: "config", expected: "loaded" }],
        explanation:
          "Use process.env to access environment variables, provide defaults with || operator.",
      },
      {
        id: "node-8",
        title: "Buffer Operations",
        description: "Work with binary data using Node.js Buffer class.",
        examples: [
          { input: "String or binary data", output: "Buffer operations" },
        ],
        constraints: [
          "Use Buffer class",
          "Handle encoding",
          "Binary operations",
        ],
        starterCode:
          "function bufferOperations(data) {\n  // Convert string to buffer and perform operations\n  // Your code here\n}\n\nfunction concatenateBuffers(buffers) {\n  // Concatenate multiple buffers\n  // Your code here\n}\n\nfunction bufferToHex(buffer) {\n  // Convert buffer to hex string\n  // Your code here\n}",
        testCases: [{ input: "hello world", expected: "buffer" }],
        explanation:
          "Use Buffer.from(), Buffer.concat(), buffer.toString() with different encodings.",
      },
    ],
  },
  {
    id: "database-sql",
    title: "Database & SQL Fundamentals",
    description:
      "Master SQL queries and database operations for data management",
    language: "sql",
    difficulty: "intermediate",
    estimatedTime: "35 minutes",
    questions: [
      {
        id: "sql-1",
        title: "Basic SELECT Queries",
        description:
          "Write SELECT queries with filtering, sorting, and limiting results.",
        examples: [
          { input: "users table", output: "Filtered and sorted user data" },
        ],
        constraints: [
          "Use WHERE, ORDER BY, LIMIT",
          "Handle multiple conditions",
        ],
        starterCode:
          "-- Get users older than 25, ordered by name\nSELECT * FROM users \n-- Your code here\n\n-- Get top 10 highest paid employees\nSELECT name, salary FROM employees\n-- Your code here\n\n-- Get users with email containing 'gmail'\nSELECT * FROM users\n-- Your code here",
        testCases: [{ input: "select", expected: "filtered" }],
        explanation:
          "Use WHERE for filtering, ORDER BY for sorting, LIMIT for pagination, LIKE for pattern matching.",
      },
      {
        id: "sql-2",
        title: "JOIN Operations",
        description:
          "Write queries using different types of JOINs to combine data from multiple tables.",
        examples: [
          {
            input: "users, orders tables",
            output: "Combined user and order data",
          },
        ],
        constraints: ["Use INNER, LEFT, RIGHT JOINs", "Handle missing data"],
        starterCode:
          "-- Get users with their orders (INNER JOIN)\nSELECT u.name, o.order_date, o.total\nFROM users u\n-- Your code here\n\n-- Get all users and their orders (include users without orders)\nSELECT u.name, o.order_date\nFROM users u\n-- Your code here\n\n-- Get orders with user details\nSELECT o.id, u.name, u.email, o.total\nFROM orders o\n-- Your code here",
        testCases: [{ input: "joins", expected: "combined" }],
        explanation:
          "Use INNER JOIN for matching records, LEFT JOIN to include all left table records, ON for join conditions.",
      },
      {
        id: "sql-3",
        title: "Aggregate Functions",
        description: "Use aggregate functions with GROUP BY for data analysis.",
        examples: [{ input: "sales data", output: "Aggregated statistics" }],
        constraints: ["Use COUNT, SUM, AVG, MAX, MIN", "GROUP BY and HAVING"],
        starterCode:
          "-- Count orders by status\nSELECT status, COUNT(*) as order_count\nFROM orders\n-- Your code here\n\n-- Average order value by month\nSELECT MONTH(order_date) as month, AVG(total) as avg_total\nFROM orders\n-- Your code here\n\n-- Top spending customers (orders > $1000 total)\nSELECT user_id, SUM(total) as total_spent\nFROM orders\n-- Your code here",
        testCases: [{ input: "aggregate", expected: "grouped" }],
        explanation:
          "Use GROUP BY to group records, HAVING to filter groups, aggregate functions for calculations.",
      },
      {
        id: "sql-4",
        title: "Subqueries",
        description:
          "Write complex queries using subqueries for advanced filtering.",
        examples: [
          {
            input: "Nested query conditions",
            output: "Results based on subquery",
          },
        ],
        constraints: ["Use IN, EXISTS, subqueries", "Correlated subqueries"],
        starterCode:
          "-- Users who have placed orders\nSELECT * FROM users\nWHERE id IN (\n  -- Your subquery here\n);\n\n-- Products never ordered\nSELECT * FROM products\nWHERE NOT EXISTS (\n  -- Your subquery here\n);\n\n-- Customers with above-average order values\nSELECT * FROM users\nWHERE id IN (\n  SELECT user_id FROM orders\n  WHERE total > (\n    -- Your subquery here\n  )\n);",
        testCases: [{ input: "subquery", expected: "nested" }],
        explanation:
          "Use IN with subqueries for filtering, EXISTS for existence checks, correlated subqueries reference outer query.",
      },
      {
        id: "sql-5",
        title: "Data Modification",
        description:
          "Write INSERT, UPDATE, and DELETE statements for data manipulation.",
        examples: [
          { input: "Data changes", output: "Modified database records" },
        ],
        constraints: [
          "Handle constraints",
          "Use transactions",
          "Conditional updates",
        ],
        starterCode:
          "-- Insert new user\nINSERT INTO users (name, email, age)\n-- Your code here\n\n-- Update user email\nUPDATE users \nSET email = 'new@email.com'\n-- Your code here\n\n-- Delete inactive users (no orders in last year)\nDELETE FROM users\nWHERE id NOT IN (\n  -- Your subquery here\n);",
        testCases: [{ input: "modification", expected: "updated" }],
        explanation:
          "Use INSERT with VALUES, UPDATE with SET and WHERE, DELETE with WHERE for safety.",
      },
      {
        id: "sql-6",
        title: "Window Functions",
        description: "Use window functions for advanced analytics and ranking.",
        examples: [
          { input: "Ranking and analytics", output: "Windowed calculations" },
        ],
        constraints: ["Use ROW_NUMBER, RANK, SUM OVER", "Partition by groups"],
        starterCode:
          "-- Rank employees by salary within department\nSELECT name, department, salary,\n       ROW_NUMBER() OVER (\n         -- Your window specification here\n       ) as rank\nFROM employees;\n\n-- Running total of sales\nSELECT order_date, total,\n       SUM(total) OVER (\n         -- Your window specification here\n       ) as running_total\nFROM orders\nORDER BY order_date;",
        testCases: [{ input: "window", expected: "ranked" }],
        explanation:
          "Use OVER clause with PARTITION BY and ORDER BY, window functions don't reduce rows like GROUP BY.",
      },
      {
        id: "sql-7",
        title: "Index Optimization",
        description:
          "Create indexes and analyze query performance for optimization.",
        examples: [
          { input: "Query performance", output: "Optimized with indexes" },
        ],
        constraints: ["Create appropriate indexes", "Understand query plans"],
        starterCode:
          "-- Create index for frequently queried columns\nCREATE INDEX idx_user_email \n-- Your code here\n\n-- Composite index for multi-column queries\nCREATE INDEX idx_order_user_date\n-- Your code here\n\n-- Analyze query that would benefit from indexing\nEXPLAIN SELECT * FROM orders \nWHERE user_id = 123 AND order_date > '2023-01-01'\n-- Suggest appropriate index",
        testCases: [{ input: "index", expected: "optimized" }],
        explanation:
          "Create indexes on frequently queried columns, use composite indexes for multi-column queries, EXPLAIN to analyze query plans.",
      },
    ],
  },
];
