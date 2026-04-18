'use client'
import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    image: 'https://backgroundimages.withfloats.com/actual/5ae074c13740d40c74992f78.jpg',
    tag: 'Est. 2010 · Chennai, India',
    title: 'Megafun',
    highlight: 'Amusements',
    subtitle: 'Manufacturers of 3D/5D/7D Theaters, VR Simulators and Turnkey Amusement Park Solutions.',
  },
  {
    image: 'https://backgroundimages.withfloats.com/actual/5ae1d50e3150c20924c82ccc.jpg',
    tag: 'Dark Indoor Attractions',
    title: 'Haunted House',
    highlight: '& Jungle Safari',
    subtitle: 'Thrilling dark ride experiences for malls, multiplexes and amusement parks.',
  },
  {
    image: 'https://backgroundimages.withfloats.com/actual/5ae07a573740d40c74993747.jpg',
    tag: 'Immersive Technology',
    title: 'VR & 9D',
    highlight: 'Simulators',
    subtitle: 'Cutting-edge virtual reality experiences that keep crowds coming back.',
  },
  {
    image: 'https://backgroundimages.withfloats.com/actual/5ae075d53740d40c74993032.jpg',
    tag: 'Turnkey Solutions',
    title: '5D / 7D',
    highlight: 'Theatres',
    subtitle: 'Full-motion cinema experiences with sensational special effects.',
  },
  {
    image: 'https://backgroundimages.withfloats.com/actual/5ae071cf3740d40c74992d09.jpg',
    tag: 'Mirror & Maze Attractions',
    title: 'Mirror Maze',
    highlight: '& More',
    subtitle: 'Family-friendly attractions that deliver endless fun for all ages.',
  },
]

const INTERVAL = 5000

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [animating, setAnimating] = useState(false)

  const goTo = useCallback((index: number) => {
    if (animating) return
    setAnimating(true)
    setCurrent(index)
    setTimeout(() => setAnimating(false), 700)
  }, [animating])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, INTERVAL)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

      {/* Slides */}
      {slides.map((slide, i) => (
        <div key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority={i === 0}
            className="object-cover object-center scale-105"
          />
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <span
          key={`tag-${current}`}
          className="inline-block bg-yellow-500/20 text-yellow-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase border border-yellow-400/30 animate-fade-in">
          {slides[current].tag}
        </span>
        <h1
          key={`title-${current}`}
          className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight text-white drop-shadow-xl animate-fade-in">
          {slides[current].title}
          <span className="block text-yellow-400">{slides[current].highlight}</span>
        </h1>
        <p
          key={`sub-${current}`}
          className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
          {slides[current].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products"
            className="bg-yellow-500 text-white font-bold px-8 py-4 rounded-full hover:bg-yellow-600 transition text-sm tracking-wide shadow-lg">
            Explore Products
          </Link>
          <Link href="/contact"
            className="border border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition text-sm tracking-wide">
            Get a Quote
          </Link>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button onClick={prev}
        className="absolute left-4 md:left-8 z-20 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm">
        ‹
      </button>
      <button onClick={next}
        className="absolute right-4 md:right-8 z-20 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/20 text-white flex items-center justify-center transition backdrop-blur-sm">
        ›
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-12 z-20 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? 'w-8 h-2 bg-yellow-400'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-0.5 bg-white/10">
        <div
          key={current}
          className="h-full bg-yellow-400 animate-progress"
          style={{ animationDuration: `${INTERVAL}ms` }}
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  )
}
