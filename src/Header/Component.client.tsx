//todo: add the cta and dynamic social media links
'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { RpdadLogo } from '@/graphics/LogoRpdad/logo'
import { Facebook, Instagram, Linkedin, SearchIcon, Youtube } from 'lucide-react'
import { MobileMenu } from './Nav/MobileNav'
import { NavbarMedium } from './Nav/NavMedium'
interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="container relative z-20   " {...(theme ? { 'data-theme': theme } : {})}>
      <div className="py-4 flex justify-between items-center">
        <div className="flex items-center space-x-12">
          <Link href="/">
            <RpdadLogo />
          </Link>
          <NavbarMedium data={data} />
        </div>
        <div className="lg:flex hidden items-center gap-4">
          <ul className="text-foreground flex items-center space-x-4">
            <li className="hover:text-muted-foreground ">
              <a href="https://www.facebook.com/rpdadgironde" target="_blank">
                <Facebook className="size-5" />
              </a>
            </li>
            <li className="hover:text-muted-foreground ">
              <a href="https://www.youtube.com/@RPDAD33" target="_blank">
                <Youtube className="size-5" />
              </a>
            </li>
            <li className="hover:text-muted-foreground ">
              <a
                href="https://www.linkedin.com/company/rpdad33/posts/?feedView=all"
                target="_blank"
              >
                <Linkedin className="size-5" />
              </a>
            </li>
            <li className="hover:text-muted-foreground ">
              <a href="https://www.instagram.com/rpdad_33/" target="_blank">
                <Instagram className="size-5" />
              </a>
            </li>
          </ul>
          <Link href="/search">
            <span className="sr-only">Search</span>
            <SearchIcon className="w-5 hover:text-muted-foreground font-medium text-foreground" />
          </Link>
        </div>
        <MobileMenu data={data} />
        {/* <CTA label="Contactez-nous" link="/contact" variant="default" /> */}
      </div>
    </header>
  )
}
