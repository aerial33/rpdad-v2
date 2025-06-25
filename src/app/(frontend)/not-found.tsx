'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, Home, Search } from 'lucide-react'
import Link from 'next/link'

import { DotPattern } from '@/components/DotPattern'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Fond avec gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-flamingo-lightest via-primary-lightest to-picton-blue-lightest"></div>

      {/* Patterns décoratifs */}
      <DotPattern
        variant="sparse"
        dotColor="bg-primary-light"
        className="absolute top-10 left-10 opacity-40"
      />
      <DotPattern
        variant="dense"
        dotColor="bg-flamingo-light"
        className="absolute bottom-10 right-10 opacity-30"
      />
      <DotPattern
        variant="large"
        dotColor="bg-picton-blue-light"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-20"
      />

      <div className="container relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl mx-auto"
        >
          {/* Numéro 404 stylisé */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="mb-8"
          >
            <h1 className="text-8xl md:text-9xl font-bold gradient-primary mb-4">404</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-flamingo mx-auto rounded-full"></div>
          </motion.div>

          {/* Message principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Oups ! Page introuvable
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              La page que vous recherchez semble avoir pris un chemin différent.
              <br className="hidden md:block" />
              Ne vous inquiétez pas, nous sommes là pour vous aider à retrouver votre route.
            </p>
          </motion.div>

          {/* Boutons d'action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <Button asChild size="lg" className="gap-2 group">
              <Link href="/">
                <Home className="h-4 w-4 transition-transform group-hover:scale-110" />
                Retour à l'accueil
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="gap-2 group">
              <Link href="/search">
                <Search className="h-4 w-4 transition-transform group-hover:scale-110" />
                Rechercher
              </Link>
            </Button>
          </motion.div>

          {/* Liens utiles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-sm text-muted-foreground"
          >
            <p className="mb-4">Vous pouvez également :</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                href="/le-rpdad"
                className="hover:text-primary transition-colors duration-200 flex items-center gap-1"
              >
                <ArrowLeft className="h-3 w-3" />
                Découvrir le RPDAD
              </Link>
              <Link href="/posts" className="hover:text-primary transition-colors duration-200">
                Nos actualités
              </Link>
              <Link
                href="/services-membres"
                className="hover:text-primary transition-colors duration-200"
              >
                Services membres
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Élément décoratif animé */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-20 h-20 rounded-full bg-gradient-to-r from-flamingo to-primary opacity-20"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        <motion.div
          className="absolute bottom-1/4 left-1/4 w-16 h-16 rounded-full bg-gradient-to-r from-picton-blue to-primary opacity-20"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>
    </div>
  )
}
