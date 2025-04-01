// src/components/events/EventCard.tsx
import React from "react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface EventCardProps {
  month: string
  day: string
  title: string
  description: string
  variant?: "default" | "flamingo" | "primary" | "secondary"
}

export function EventCard({
  month,
  day,
  title,
  description,
  variant = "default",
}: EventCardProps) {
  // Détermine la classe de bordure en fonction de la variante
  const borderClass = {
    default: "border-picton-blue",
    flamingo: "border-flamingo",
    primary: "border-primary",
    secondary: "border-chateau-base",
  }[variant]

  // Détermine la classe de texte pour le badge en fonction de la variante
  const textClass = {
    default: "text-picton-blue",
    flamingo: "text-flamingo",
    primary: "text-primary",
    secondary: "text-chateau-base",
  }[variant]

  return (
    <Card className={`${borderClass} aspect-square max-w-80 gap-0 border-2`}>
      <CardHeader className="flex flex-col items-center">
        <Badge
          variant="outline"
          className={`${textClass} text-md font-medium tracking-wider uppercase`}
        >
          {month}
        </Badge>
        <CardTitle>
          <h3 className="mt-6 text-center text-5xl font-bold lg:text-6xl">
            {day}
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-center font-medium lg:text-lg">{title}</p>
      </CardContent>
      <CardFooter>
        <div className="mt-auto text-center text-xs lg:text-sm">
          <p className="mx-auto w-2/3 text-balance">{description}</p>
        </div>
      </CardFooter>
    </Card>
  )
}

// Composant CardTitle manquant dans l'extrait, ajouté pour éviter les erreurs
function CardTitle({ children }: { children: React.ReactNode }) {
  return <div className="text-2xl font-bold">{children}</div>
}
