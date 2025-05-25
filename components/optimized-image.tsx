"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  style?: React.CSSProperties
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  style,
  priority = false,
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Handle image path to ensure it works in deployment
  const imageSrc = src.startsWith("http") ? src : src

  return (
    <div className={`relative ${className}`} style={style}>
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
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`w-full h-full object-contain ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
          priority={priority}
          unoptimized={src.endsWith(".png") || src.endsWith(".jpg")}
        />
      )}
    </div>
  )
}
