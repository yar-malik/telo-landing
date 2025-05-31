"use client"

import { useState, useEffect } from "react"

interface DynamicTextProps {
  words: string[]
  className?: string
}

export function DynamicText({ words, className = "" }: DynamicTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (typing) {
      if (displayedText.length < words[currentIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedText(words[currentIndex].slice(0, displayedText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setTyping(false), 1200)
      }
    } else {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(words[currentIndex].slice(0, displayedText.length - 1))
        }, 40)
      } else {
        setTyping(true)
        setCurrentIndex((prev) => (prev + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, typing, words, currentIndex])

  return (
    <span className={`inline-block ${className}`}>
      {displayedText}<span className="font-normal">|</span>
    </span>
  )
}
