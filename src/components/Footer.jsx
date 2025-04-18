import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle menu"
                  className="flex items-center text-zinc-800 dark:text-zinc-200"
                >
                  {isMenuOpen ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </button>
              </div>

              {/* Navigation Links */}
              <div
                className={`${isMenuOpen ? 'flex' : 'hidden'
                  } flex-col items-center gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200 sm:flex sm:flex-row`}
              >
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/articles">Blog</NavLink>
                <NavLink href="/podcast">Podcast</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/datenschutz">Datenschutzerklärung</NavLink>
                <NavLink href="/impressum">Impressum</NavLink>
              </div>

              {/* Footer Text */}
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy;{' '}
                {new Date().getFullYear()} Christian Gleitze. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
