'use client'

// todo optimize responsive menu burger
// todo add hover effect to menu items
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

import { useState } from 'react'

// Icônes du menu
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'

export const NavbarMedium: React.FC<{ data: HeaderType }> = ({ data }) => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="p-2">
      {/* Desktop Navigation */}
      <div className="hidden gap-6 lg:flex">
        {data.navItems?.map(({ link, subNavigation }) =>
          subNavigation && subNavigation.length > 0 ? (
            <div
              key={link.label}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              className="relative"
            >
              <Link
                href={link.url || ''}
                className={`hover:text-primary relative flex items-center gap-1 py-2 transition ${
                  pathname === link.url
                    ? 'text-primary font-bold'
                    : 'text-gray-700 dark:text-gray-400'
                }`}
              >
                {link.label}
                <ChevronDown
                  size={18}
                  className={`mt-0.5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
                {pathname === link.url && (
                  <motion.div
                    layoutId="underline"
                    className="bg-primary absolute -bottom-4 left-0 h-1 w-full rounded-lg"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      type: 'spring',
                      mass: 0.5,
                      damping: 11.5,
                      stiffness: 100,
                      restDelta: 0.001,
                      restSpeed: 0.001,
                    }}
                    className="bg-flamingo-lightest absolute top-full left-0 z-50 min-w-[200px] rounded-xl p-4 shadow-lg dark:bg-gray-800"
                  >
                    {subNavigation.map(({ link }) => (
                      <div key={link.label} className="mt-2 space-y-2">
                        <CMSLink {...link} appearance="link" />
                        {/* {link.map(({ label, href }) => (
                          <Link
                            key={label}
                            href={href}
                            className="hover:bg-primary-lighter block rounded-md px-4 py-2 text-sm text-gray-700 transition-colors dark:text-gray-200 dark:hover:bg-gray-700"
                          >
                            {label}
                          </Link>
                        ))} */}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={link.label}
              href={link.url || ''}
              className={`hover:text-primary relative py-2 transition ${
                pathname === link.url
                  ? 'text-primary font-bold'
                  : 'text-gray-700 dark:text-gray-400'
              }`}
            >
              {link.label}
              {pathname === link.url && (
                <motion.div
                  layoutId="underline"
                  className="bg-primary absolute -bottom-4 left-0 h-1 w-full rounded-lg"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ),
        )}
      </div>
    </nav>
  )
}
