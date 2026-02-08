"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

function FloatingHeart({ index }: { index: number }) {
  const randomX = `${Math.random() * 100}vw`
  const duration = Math.random() * 10 + 10
  const delay = Math.random() * 20

  return (
    <motion.div
      initial={{ y: "100vh", opacity: 0, x: randomX }}
      animate={{
        y: "-10vh",
        opacity: [0, 1, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
      }}
      className="absolute text-2xl"
      style={{ color: "hsl(var(--primary))" }}
    >
      {"\\u2764"}
    </motion.div>
  )
}

function HeroSection({ onOpenLetter }: { onOpenLetter: () => void }) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center p-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold mb-4 font-sans"
        style={{ color: "hsl(var(--primary))" }}
      >
        For My Favorite Person
      </motion.h1>
      <button
        onClick={onOpenLetter}
        className="mt-8 px-8 py-3 rounded-full shadow-sm transition-colors font-serif text-lg"
        style={{
          backgroundColor: "hsl(var(--secondary))",
          color: "hsl(var(--foreground))",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "hsl(var(--primary))")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "hsl(var(--secondary))")}
      >
        Open Letter
      </button>
    </section>
  )
}

function LetterSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto p-8 rounded-2xl shadow-xl m-6 backdrop-blur-md"
      style={{ backgroundColor: "hsl(var(--card) / 0.5)" }}
    >
      <motion.p
        className="text-lg leading-relaxed italic font-serif"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        style={{ borderRightColor: "hsl(var(--primary))" }}
      >
        {
          '"Every moment with you feels like a dream, you\'ve made my life infinitely brighter. I built this small space just to remind you how much you mean to me..."'
        }
      </motion.p>
    </motion.section>
  )
}

function MemoryGallery() {
  const images = [
    "https://i.ibb.co/B5HRjBk3/image1.jpg",
    "https://i.ibb.co/hJKxcWH2/image2.jpg",
    "https://i.ibb.co/HLvs5W8J/image3.jpg",
    "https://i.ibb.co/p6jxS4Vs/image4.jpg",
    "https://i.ibb.co/TB2vQC10/image5.jpg",
  ]

  return (
    <section className="p-10 max-w-5xl mx-auto">
      <h2 className="text-3xl text-center mb-10 font-sans" style={{ color: "hsl(var(--primary))" }}>
        Our Memories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {images.map((url, i) => (
          <motion.div
            key={url}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="aspect-[4/5] rounded-xl overflow-hidden shadow-lg border-8"
            style={{
              backgroundColor: "hsl(var(--card))",
              borderColor: "hsl(var(--card))",
            }}
          >
            <img
              src={url}
              alt={`Memory ${i + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                ;(e.target as HTMLImageElement).src = "https://picsum.photos/400/500"
              }}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function QuestionSection() {
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 })
  const [yesPressed, setYesPressed] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)

  const moveNoButton = useCallback(() => {
    const x = Math.random() * (window.innerWidth - 150)
    const y = Math.random() * (window.innerHeight - 80)
    setNoButtonPos({ x, y })
    setHasMoved(true)
  }, [])

  if (yesPressed) {
    return (
      <section className="h-screen flex flex-col items-center justify-center relative">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
          <h2 className="text-6xl font-bold font-sans" style={{ color: "hsl(var(--primary))" }}>
            {"Yay! I love you!"}
          </h2>
          <p className="mt-4 italic text-2xl font-serif">See you soon!</p>
        </motion.div>
      </section>
    )
  }

  return (
    <section className="h-screen flex flex-col items-center justify-center relative">
      <h2 className="text-4xl font-bold mb-12 px-4 text-center font-sans">Will you be my Valentine?</h2>
      <div className="flex gap-8 items-center justify-center w-full">
        <motion.button
          whileHover={{ scale: 1.2 }}
          onClick={() => setYesPressed(true)}
          className="px-10 py-4 rounded-full font-bold text-xl shadow-lg z-10"
          style={{
            backgroundColor: "#86efac",
            color: "hsl(var(--foreground))",
          }}
        >
          {"Yes!"}
        </motion.button>

        <motion.button
          animate={hasMoved ? { x: noButtonPos.x, y: noButtonPos.y } : undefined}
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          className="px-10 py-4 rounded-full font-bold text-xl"
          style={{
            backgroundColor: "#fca5a5",
            color: "hsl(var(--foreground))",
            position: hasMoved ? "fixed" : "relative",
            left: hasMoved ? 0 : "auto",
            top: hasMoved ? 0 : "auto",
          }}
        >
          No
        </motion.button>
      </div>
    </section>
  )
}

export default function ValentineSite() {
  const [showLetter, setShowLetter] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const hearts = Array.from({ length: 20 })

  return (
    <div className="min-h-screen overflow-x-hidden font-serif" style={{ backgroundColor: "hsl(var(--background))", color: "hsl(var(--foreground))" }}>
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {hearts.map((_, i) => (
          <FloatingHeart key={i} index={i} />
        ))}
      </div>

      <HeroSection onOpenLetter={() => setShowLetter(true)} />

      <AnimatePresence>{showLetter && <LetterSection />}</AnimatePresence>

      <MemoryGallery />

      <QuestionSection />

      <footer className="text-center py-10 opacity-50 text-sm font-serif">Made with love for you.</footer>
    </div>
  )
}
