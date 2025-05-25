"use client"

import Image from "next/image"
import { useState } from "react"

interface AgentImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function AgentImage({ src, alt, width = 300, height = 300, className = "" }: AgentImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {hasError ? (
        <div className="flex items-center justify-center bg-gray-100 w-full h-full rounded-xl">
          <p className="text-sm text-gray-500">Image failed to load</p>
        </div>
      ) : (
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-cover ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300 rounded-xl`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          priority
          unoptimized
        />
      )}
    </div>
  )
}
