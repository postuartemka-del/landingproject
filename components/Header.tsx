'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Shield, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#advantages', label: 'Преимущества' },
    { href: '#how-it-works', label: 'Как работает' },
    { href: '#deals', label: 'Сделки' },
    { href: '#reviews', label: 'Отзывы' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong shadow-lg shadow-black/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/main" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-main flex items-center justify-center group-hover:shadow-[0_0_20px_rgba(108,92,231,0.5)] transition-shadow duration-300">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="text-xl font-bold gradient-text">SecureDeal</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm text-gray-300 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/admin"
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              Админ
            </Link>
            <button className="btn-primary text-sm px-6 py-3">
              Начать сделку
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/[0.05]"
          >
            <nav className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-white/[0.05]">
                <Link href="/admin" className="block px-4 py-3 text-gray-400 text-sm">
                  Админ-панель
                </Link>
                <button className="w-full mt-2 btn-primary text-sm px-6 py-3">
                  Начать сделку
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}