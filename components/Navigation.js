'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/ThemeProvider'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Practice Areas', href: '/practice' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Testimonials', href: '/testimonials' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/90 dark:bg-neutral-dark/90 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary dark:bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-serif font-bold text-xl">M</span>
              </div>
              <span className="font-serif text-2xl font-bold text-primary dark:text-primary-300">
                Mason Legal
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-neutral-mid dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 font-medium transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4">
                {/* Theme Toggle Button */}
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Toggle theme"
                >
                  {mounted && theme === 'dark' ? (
                    <Sun size={20} className="text-gray-300" />
                  ) : (
                    <Moon size={20} className="text-neutral-mid" />
                  )}
                </button>
                
                <Link
                  href="/contact"
                  className="btn-secondary py-3 px-6 text-sm"
                >
                  Contact
                </Link>
                <Link
                  href="/contact?book=true"
                  className="btn-primary py-3 px-6 text-sm"
                >
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center space-x-2 md:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {mounted && theme === 'dark' ? (
                  <Sun size={20} className="text-gray-300" />
                ) : (
                  <Moon size={20} className="text-neutral-mid" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/20 dark:bg-black/40" onClick={() => setIsOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl animate-slide-in">
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <Link href="/" className="font-serif text-xl font-bold text-primary dark:text-primary-300">
                  Mason Legal
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  <X size={20} className="dark:text-gray-300" />
                </button>
              </div>
              <div className="space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-3 text-lg text-neutral-mid dark:text-gray-300 hover:text-primary dark:hover:text-primary-300 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 space-y-4">
                  <button
                    onClick={() => {
                      toggleTheme()
                      setIsOpen(false)
                    }}
                    className="w-full py-3 px-4 rounded-lg border-2 border-primary dark:border-primary-300 text-primary dark:text-primary-300 hover:bg-primary dark:hover:bg-primary-600 hover:text-white dark:hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun size={18} />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon size={18} />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                  <Link
                    href="/contact"
                    className="btn-secondary w-full py-3 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/booking"
                    className="btn-primary w-full py-3 text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}