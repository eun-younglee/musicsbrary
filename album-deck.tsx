"use client"

import { useState, useEffect } from "react"
import { Header } from "./components/header"

export default function Component() {
  const albums = [
    {
      id: 1,
      title: "Midnight Dreams",
      artist: "Luna Eclipse",
      cover: "/images/album1.png",
      genre: "Electronic",
    },
    {
      id: 2,
      title: "Electric Waves",
      artist: "Neon Pulse",
      cover: "/images/album2.png",
      genre: "Synthwave",
    },
    {
      id: 3,
      title: "Golden Hour",
      artist: "Sunset Valley",
      cover: "/images/album3.png",
      genre: "Indie Folk",
    },
    {
      id: 4,
      title: "Urban Nights",
      artist: "City Lights",
      cover: "/images/album4.png",
      genre: "Hip Hop",
    },
    {
      id: 5,
      title: "Ocean Breeze",
      artist: "Coastal Dreams",
      cover: "/images/album5.png",
      genre: "Ambient",
    },
    {
      id: 6,
      title: "Neon Nights",
      artist: "Cyber Punk",
      cover: "/images/album6.png",
      genre: "Electronic",
    },
    {
      id: 7,
      title: "Forest Whispers",
      artist: "Nature's Call",
      cover: "/images/album7.png",
      genre: "New Age",
    },
    {
      id: 8,
      title: "Jazz Fusion",
      artist: "Smooth Operators",
      cover: "/images/album8.png",
      genre: "Jazz",
    },
    {
      id: 9,
      title: "Rock Anthem",
      artist: "Thunder Strike",
      cover: "/images/album9.png",
      genre: "Rock",
    },
    {
      id: 10,
      title: "Ambient Space",
      artist: "Cosmic Journey",
      cover: "/images/album10.png",
      genre: "Ambient",
    },
    {
      id: 11,
      title: "Hip Hop Beats",
      artist: "Street Vibes",
      cover: "/images/album11.png",
      genre: "Hip Hop",
    },
    {
      id: 12,
      title: "Classical Symphony",
      artist: "Orchestra Divine",
      cover: "/images/album12.png",
      genre: "Classical",
    },
  ]

  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [scrollOffset, setScrollOffset] = useState(0)

  // Calculate how many albums can fit on screen
  const getVisibleAlbumCount = () => {
    if (typeof window !== "undefined") {
      const screenWidth = window.innerWidth
      const albumWidth = 280 // 264px + some spacing
      return Math.floor(screenWidth / albumWidth) + 2 // Add 2 for smooth scrolling
    }
    return 7
  }

  const [visibleCount, setVisibleCount] = useState(7)

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(getVisibleAlbumCount())
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? 1 : -1
      setScrollOffset((prev) => {
        const newOffset = prev + delta
        const maxOffset = Math.max(0, albums.length - Math.floor(visibleCount / 2))
        return Math.max(0, Math.min(maxOffset, newOffset))
      })
    }

    const container = document.getElementById("album-container")
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
      return () => container.removeEventListener("wheel", handleWheel)
    }
  }, [albums.length, visibleCount])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />

      <div className="pt-20 flex items-center justify-center min-h-screen">
        <div className="relative w-full">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Albums</h2>

          <div
            id="album-container"
            className="relative flex items-center justify-center overflow-hidden w-full"
            style={{ height: "400px" }}
          >
            {albums.map((album, index) => {
              const centerIndex = Math.floor(visibleCount / 2)
              const position = index - scrollOffset - centerIndex
              const isVisible = Math.abs(position) <= Math.ceil(visibleCount / 2)

              if (!isVisible) return null

              return (
                <div
                  key={album.id}
                  className="absolute cursor-pointer transition-all duration-500 ease-out group"
                  style={{
                    transform: `translateX(${position * 200}px)`,
                    zIndex: hoveredId === album.id ? 50 : albums.length - Math.abs(position),
                    opacity: Math.abs(position) > Math.floor(visibleCount / 2) ? 0.3 : 1,
                  }}
                  onMouseEnter={() => setHoveredId(album.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className={`
                      relative w-64 h-64 rounded-lg overflow-hidden shadow-2xl
                      transition-all duration-300 ease-out
                      ${hoveredId === album.id ? "transform -translate-y-8 scale-110" : "hover:scale-105"}
                    `}
                  >
                    <img
                      src={album.cover || "/placeholder.svg"}
                      alt={`${album.title} by ${album.artist}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Genre badge */}
                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                      {album.genre}
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Album info */}
                    <div
                      className={`
                        absolute bottom-0 left-0 right-0 p-4 text-white 
                        transition-transform duration-300
                        ${hoveredId === album.id ? "translate-y-0" : "translate-y-full"}
                      `}
                    >
                      <h3 className="font-bold text-lg truncate">{album.title}</h3>
                      <p className="text-sm text-gray-300 truncate">{album.artist}</p>
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>

                  {/* Shadow */}
                  <div
                    className={`
                      absolute top-2 left-2 w-64 h-64 bg-black/30 rounded-lg -z-10
                      transition-all duration-300
                      ${hoveredId === album.id ? "opacity-60 blur-md" : "opacity-40"}
                    `}
                  />
                </div>
              )
            })}
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <p className="text-gray-400 text-lg">Scroll to browse albums</p>
            <div className="flex space-x-1">
              {Array.from({ length: albums.length }).map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    Math.abs(i - scrollOffset) <= 2 ? "bg-purple-500" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
