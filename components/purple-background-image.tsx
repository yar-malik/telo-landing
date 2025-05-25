"use client";

import Image from "next/image"
import type { CSSProperties } from "react"

interface PurpleBackgroundImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
}

export function PurpleBackgroundImage({ src, alt, width, height, className = "" }: PurpleBackgroundImageProps) {
  // Purple background color to match the theme
  const overlayStyle: CSSProperties = {
    position: "relative",
    backgroundColor: "#6F40D9",
    overflow: "hidden",
  }

  // Image style with blend mode to integrate with the background
  const imageStyle: CSSProperties = {
    mixBlendMode: "multiply", // This helps blend the image with the background
    objectFit: "cover",
    objectPosition: "center",
  }

  return (
    <div style={overlayStyle} className={`${className} relative`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        style={imageStyle}
        className="w-full h-full"
      />
    </div>
  )
}
