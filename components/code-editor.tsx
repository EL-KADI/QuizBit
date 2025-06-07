"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language: string
  placeholder?: string
}

export function CodeEditor({ value, onChange, language, placeholder }: CodeEditorProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const textarea = textareaRef.current
    if (!textarea) return

    const handleTab = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault()
        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const newValue = value.substring(0, start) + "  " + value.substring(end)
        onChange(newValue)

        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 2
        }, 0)
      }
    }

    textarea.addEventListener("keydown", handleTab)
    return () => textarea.removeEventListener("keydown", handleTab)
  }, [value, onChange])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className="relative">
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full h-64 p-4 font-mono text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent code-editor"
        spellCheck={false}
        aria-label={`${language} code editor`}
      />
      <div className="absolute top-2 right-2 text-xs text-gray-500 bg-white px-2 py-1 rounded">{language}</div>
    </div>
  )
}
