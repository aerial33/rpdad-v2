"use client"

import { motion } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { useState } from "react"
import useMeasure from "react-use-measure"

import { Badge } from "@/components/ui/badge"

/**
 * Composant client pour un carrousel d'équipe
 *
 * Ce composant utilise Framer Motion pour créer un carrousel défilant
 * qui affiche les membres de l'équipe du RPDAD.
 */

// Constantes pour définir les dimensions des cartes
const CARD_WIDTH = 400
const MARGIN = 20
const CARD_SIZE = CARD_WIDTH + MARGIN

// Points de rupture pour la mise en page responsive
const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
}

export const TeamsCaroussel = () => {
  // Utilisation de useMeasure pour obtenir la largeur du conteneur
  const [ref, { width }] = useMeasure()
  // État pour suivre le décalage du carrousel
  const [offset, setOffset] = useState(0)

  // Calcul du nombre de cartes visibles en fonction de la largeur
  const CARD_BUFFER =
    width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1

  // Vérification si le défilement vers la gauche est possible
  const CAN_SHIFT_LEFT = offset < 0

  // Vérification si le défilement vers la droite est possible
  const CAN_SHIFT_RIGHT =
    Math.abs(offset) < CARD_SIZE * (posts.length - CARD_BUFFER)

  // Fonction pour défiler vers la gauche
  const shiftLeft = () => {
    if (!CAN_SHIFT_LEFT) {
      return
    }
    setOffset((pv) => (pv += CARD_SIZE))
  }

  // Fonction pour défiler vers la droite
  const shiftRight = () => {
    if (!CAN_SHIFT_RIGHT) {
      return
    }
    setOffset((pv) => (pv -= CARD_SIZE))
  }

  return (
    <section className="py-8 md:py-16 lg:py-24" ref={ref}>
      <div className="container mx-auto flex flex-row items-center justify-between px-6">
        {/* En-tête et contrôles du carrousel */}
        <div className="flex h-[300px] flex-col justify-between p-6">
          <Badge className="font-sm border-flamingo" variant={"outline"}>
            {"Le collectif"}
          </Badge>
          <h2 className="mb-4 text-3xl text-balance md:text-4xl">
            L'Équipe du RPDAD
          </h2>
          {/* Boutons de navigation */}
          <div className="flex items-center gap-2">
            <button
              className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                CAN_SHIFT_LEFT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_LEFT}
              onClick={shiftLeft}
            >
              <ArrowLeft />
            </button>
            <button
              className={`rounded-lg border-[1px] border-neutral-400 bg-white p-1.5 text-2xl transition-opacity ${
                CAN_SHIFT_RIGHT ? "" : "opacity-30"
              }`}
              disabled={!CAN_SHIFT_RIGHT}
              onClick={shiftRight}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        {/* Conteneur du carrousel avec animation */}
        <div
          className="relative overflow-hidden"
          style={{ width: CARD_SIZE * CARD_BUFFER }}
        >
          <motion.div
            animate={{ x: offset }}
            transition={{ ease: "easeInOut" }}
            className="flex"
            style={{ width: CARD_SIZE * posts.length }}
          >
            {/* Rendu de chaque carte de membre */}
            {posts.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

/**
 * Composant pour afficher une carte de membre individuelle
 */
const Post = ({ imgUrl, author, title, description }: PostType) => {
  return (
    <div
      className="border-primary relative flex shrink-0 items-center justify-center gap-2 rounded-2xl border-2 p-6 transition-transform"
      style={{
        width: CARD_WIDTH,
        marginRight: MARGIN,
      }}
    >
      {/* Image du membre */}
      <img
        src={imgUrl}
        className="mb-3 h-40 w-40 rounded-full object-cover"
        alt={`image of ${title}`}
      />
      {/* Rôle du membre */}
      <div className="flex flex-col items-center justify-center">
        <span className="border-primary text-primary rounded-md border-[1px] px-1.5 py-1 uppercase">
          {author}
        </span>
        {/* Nom du membre */}
        <p className="mt-1.5 text-sm font-medium">{title}</p>
      </div>
    </div>
  )
}

/**
 * Type pour les données des membres de l'équipe
 */
type PostType = {
  id: number
  imgUrl: string
  author: string
  title: string
  description: string
}

/**
 * Données des membres de l'équipe
 * À remplacer par les vraies données des membres du RPDAD
 */
const posts: PostType[] = [
  {
    id: 1,
    imgUrl: "/img/teams/profil-1.jpg",
    author: "Marine GASNIER",
    title: "Directrice du RPDAD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 2,
    imgUrl: "/img/teams/profil-2.jpg",
    author: "Kyle Parsons",
    title: "How to grow your personal brand as a web designer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 3,
    imgUrl: "/img/teams/profil-3.jpg",
    author: "Andrea Bates",
    title: "Calm down, monoliths are totally fine",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 4,
    imgUrl: "/img/teams/profil-4.jpg",
    author: "Jess Drum",
    title: "A quick guide to Framer Motion (for dummies)",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 5,
    imgUrl: "/img/teams/profil-5.jpg",
    author: "Phil White",
    title: "You probably don't need kubernetes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
  {
    id: 6,
    imgUrl: "/img/teams/profil-1.jpg",
    author: "Marine GASNIER",
    title: "Directrice du RPDAD",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolor.",
  },
]
