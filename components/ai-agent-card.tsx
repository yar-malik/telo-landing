"use client"

import { AgentImage } from "./agent-image"

interface AIAgentCardProps {
  imageSrc: string
  name: string
  role: string
  description: string
}

export function AIAgentCard({ imageSrc, name, role, description }: AIAgentCardProps) {
  return (
    <div className="bg-gradient-to-b from-blue-100 to-blue-200 rounded-2xl overflow-hidden p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="h-[300px] sm:h-[400px] mb-6 rounded-xl overflow-hidden flex items-center justify-center">
        <AgentImage
          src={imageSrc}
          alt={`${name}: ${role}`}
          width={300}
          height={300}
          className="h-full max-h-full w-auto"
        />
      </div>
      <h3 className="text-2xl font-bold mb-2">
        {name}: {role}
      </h3>
      <p className="text-gray-700">{description}</p>
    </div>
  )
}
