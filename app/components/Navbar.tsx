'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Updates', href: '/updates' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md border-b border-gray-100'
          : 'bg-white/80 backdrop-blur-lg border-b border-gray-100/60'
      }`}>

        {/* Top accent bar */}
        <div className="h-0.5 w-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400" />

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/megafunlogo-removebg-preview.png"
              alt="Megafun Amusements"
              width={150}
              height={44}
              className="object-contain group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1">
            {links.map(l => {
              const active = pathname === l.href
              return (
                <li key={l.href}>
                  <Link href={l.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      active
                        ? 'bg-blue-50 font-semibold'
                        : 'text-gray-600 hover:bg-blue-50/60'
                    }`}
                    style={ active ? { color: '#0070D0' } : undefined }>
                    {l.label}
                    {active && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full" style={{ background: '#0070D0' }} />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919566201124"
              className="flex items-center gap-2 text-sm text-gray-500 transition font-medium hover:opacity-80"
              style={{ color: '#0070D0' }}>
              <span className="text-base">📞</span>
              <span>+91 95662 01124</span>
            </a>
            <div className="w-px h-5 bg-gray-200" />
            <Link href="/contact"
              className="text-white text-sm font-bold px-5 py-2.5 rounded-full active:scale-95 transition-all shadow-sm hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1B002F, #0070D0)' }}>
              Get a Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-gray-100 transition">
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-700 rounded transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu — slide down */}
      <div className={`fixed top-[calc(4rem+2px)] left-0 right-0 z-40 bg-white border-b border-gray-100 shadow-xl transition-all duration-300 overflow-hidden md:hidden ${
        open ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-6 py-4 flex flex-col gap-1">
          {links.map(l => {
            const active = pathname === l.href
            return (
              <Link key={l.href} href={l.href}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition ${
                  active ? 'bg-blue-50 font-semibold' : 'text-gray-600 hover:bg-gray-50'
                }`}
                style={ active ? { color: '#0070D0' } : undefined }>
                {l.label}
              </Link>
            )
          })}
          <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
            <a href="tel:+919566201124"
              className="px-4 py-3 rounded-xl text-sm text-gray-500 hover:bg-gray-50 transition flex items-center gap-2">
              <span>📞</span> +91 95662 01124
            </a>
            <Link href="/contact"
              className="text-white text-sm font-bold px-5 py-3 rounded-xl text-center transition shadow-sm hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #1B002F, #0070D0)' }}>
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
