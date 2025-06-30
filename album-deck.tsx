"use client"

import { useState, useEffect } from "react"
import { Header } from "./components/header"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog"

type Album = {
  id: number
  title: string
  artist: string
  cover: string
  genre: string
  embedUrl: string
}

export default function Component() {
  const albums: Album[] = [
    {
      id: 1,
      title: "Wish You Were Here",
      artist: "Pink Floyd",
      cover: "https://i.scdn.co/image/ab67616d000082c11a84d71391df7469c5ab8539",
      genre: "Progressive Rock",
      embedUrl: "https://open.spotify.com/embed/album/0bYg9bo50gSsH3LeaeA_KR?utm_source=generator",
    },
    {
      id: 2,
      title: "A Momentary Lapse of Reason",
      artist: "Pink Floyd",
      cover: "https://i.scdn.co/image/ab67616d000082c161f734a2370207feda78d018",
      genre: "Progressive Rock",
      embedUrl: "https://open.spotify.com/embed/album/6n36WhlT2N4aW36s0i3dY9?utm_source=generator",
    },
    {
      id: 3,
      title: "The Dark Side of the Moon",
      artist: "Pink Floyd",
      cover: "https://i.scdn.co/image/ab67616d000082c1ea7caaff71dea1051d49b2fe",
      genre: "Progressive Rock",
      embedUrl: "https://open.spotify.com/embed/album/4LH4d3cOWNNsVw41Gqt2kv?utm_source=generator",
    },
    {
      id: 4,
      title: "Zenyatta Mondatta",
      artist: "The Police",
      cover: "https://i.scdn.co/image/ab67616d000082c1fb1bc65edf4717e75fbc70ab",
      genre: "New Wave",
      embedUrl: "https://open.spotify.com/embed/album/23enz9nXJhH1BR1Rm5CzDJ?utm_source=generator&theme=0",
    },
    {
      id: 5,
      title: "Reggatta de Blanc",
      artist: "The Police",
      cover: "https://i.scdn.co/image/ab67616d000082c18ec81cc654b45ade8bdf1486",
      genre: "New Wave / Punk",
      embedUrl: "https://open.spotify.com/embed/album/2EpuND32cO7CX0gXZl2NB6?utm_source=generator&theme=0",
    },
    {
      id: 6,
      title: "Nada Personal",
      artist: "Soda Stereo",
      cover: "https://i.scdn.co/image/ab67616d000082c1e28947f6ad2f100af9c1965a",
      genre: "New Wave",
      embedUrl: "https://open.spotify.com/embed/album/01llLU2wWa6OBlQ4xVjWcf?utm_source=generator",
    },
    {
      id: 7,
      title: "Arc of a Diver",
      artist: "Steve Winwood",
      cover: "https://i.scdn.co/image/ab67616d000082c188e5063a032f500fb12d98f4",
      genre: "Blue-eyed Soul",
      embedUrl: "https://open.spotify.com/embed/album/3421O2bdhSMp6r32uoh223?utm_source=generator",
    },
    {
      id: 8,
      title: "Back in the Hihg Life",
      artist: "Steve Winwood",
      cover: "https://i.scdn.co/image/ab67616d000082c18362a7a26eaf279f336f1494",
      genre: "Blue-eyed Soul",
      embedUrl: "https://open.spotify.com/embed/album/5fIrvS34eYtGEd3d1g2J2g?utm_source=generator",
    },
    {
      id: 9,
      title: "Duran Duran",
      artist: "Duran Duran",
      cover: "https://i.scdn.co/image/ab67616d0000b2730fc83f41d5f0bd27105e5048",
      genre: "New Wave",
      embedUrl: "https://open.spotify.com/embed/album/0gD_a0yK6d2tH6Vb1b7hG8?utm_source=generator",
    },
    {
      id: 10,
      title: "Rio",
      artist: "Duran Duran",
      cover: "https://i.scdn.co/image/ab67616d000082c10a754dd5389e1e5004fca140",
      genre: "New Wave",
      embedUrl: "https://open.spotify.com/embed/album/02tfQwJSOLP77oCd9U8bqm?utm_source=generator",
    },
    {
      id: 11,
      title: "Lark's Tongues in Aspic",
      artist: "King Crimson",
      cover: "https://i.scdn.co/image/ab67616d000082c1aa9e5286056e17ff3d9b2881",
      genre: "Progressive Rock",
      embedUrl: "https://open.spotify.com/embed/album/3O2G205iGk2a7aG1feTj3K?utm_source=generator",
    },
    {
      id: 12,
      title: "Red",
      artist: "King Crimson",
      cover: "https://i.scdn.co/image/ab67616d0000b2733167627d9428094376a26a08",
      genre: "Progressive Rock",
      embedUrl: "https://open.spotify.com/embed/album/4mH42B0B42x22Jk2ajsodo?utm_source=generator",
    },
    {
      id: 13,
      title: "Going for the One",
      artist: "Yes",
      cover: "https://i.scdn.co/image/ab67616d0000b273370f0969aca636b22cc98eed",
      genre: "Progressive Rock",
      embedUrl: "https://open.spotify.com/embed/album/1QyT2BwRmmhE2k20gGg4ur?utm_source=generator",
    },
    {
      id: 14,
      title: "Close to the Edge",
      artist: "Yes",
      cover: "https://i.scdn.co/image/ab67616d0000b2730b4444fe9bc1a73ccbb949db",
      genre: "Progressive Rock",
      embedUrl: "https://open.spotify.com/embed/album/52l8VjCZsFBM7n2vXo4i7c?utm_source=generator",
    },
    {
      id: 15,
      title: "Omnium Gatherum",
      artist: "King Gizzard and the Lizard Wizard",
      cover: "https://i.scdn.co/image/ab67616d0000b27380c6db47e75d58e25b72f2ca",
      genre: "Progressive Rock",
      embedUrl: "https://open.spotify.com/embed/album/4tuqA7qbvyPqqYe7YuYI6k?utm_source=generator",
    },
    {
      id: 16,
      title: "Hejira",
      artist: "Joni Mitchell",
      cover: "https://i.scdn.co/image/ab67616d000082c140a59e27df19f31576774900",
      genre: "Jazz Fusion",
      embedUrl: "https://open.spotify.com/embed/album/3D5bC5poI1NAiIey22o24A?utm_source=generator",
    },
    {
      id: 17,
      title: "Clouds",
      artist: "Joni Mitchell",
      cover: "https://i.scdn.co/image/ab67616d0000b273d43c786431c6708e91d9b180",
      genre: "Folk Rock",
      embedUrl: "https://open.spotify.com/embed/album/03iFLgmgkR1h2gYJ2s6n2E?utm_source=generator",
    },
    {
      id: 18,
      title: "Roundabout",
      artist: "Yes",
      cover: "https://i.scdn.co/image/ab67616d0000b273fb00f7be0eca020bb5c05911",
      genre: "Progressive Rock",
      embedUrl: "https://open.spotify.com/embed/track/0YveD4b2U3nB0e2p2P2iT3?utm_source=generator",
    }
  ]

  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [scrollOffset, setScrollOffset] = useState(0)
  const [screenWidth, setScreenWidth] = useState(0)
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null)

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth)
    }

    updateScreenWidth()
    window.addEventListener("resize", updateScreenWidth)
    return () => window.removeEventListener("resize", updateScreenWidth)
  }, [])

  // Calculate how many albums can fit across the screen
  const albumWidth = 300
  const albumSpacing = 120
  const albumsPerScreen = Math.floor(screenWidth / albumSpacing) || 7

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      const delta = e.deltaY > 0 ? 1 : -1
      setScrollOffset((prev) => {
        const newOffset = prev + delta
        const maxOffset = Math.max(0, albums.length - albumsPerScreen)
        return Math.max(0, Math.min(maxOffset, newOffset))
      })
    }

    const container = document.getElementById("album-container")
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
      return () => container.removeEventListener("wheel", handleWheel)
    }
  }, [albums.length, albumsPerScreen])

  return (
    <Dialog>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-black-900 to-slate-900">
        <Header />

        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="relative w-full">
            <h2 className="text-4xl font-bold text-white text-left mb-6 ml-2 md:ml-12">Made for you</h2>
            <p className="text-lg text-white text-left mb-8 ml-2 md:ml-12">Discover new music tailored just for you</p>

            <div id="album-container" className="relative overflow-hidden w-full" style={{ height: "400px" }}>
              {albums.map((album, index) => {
                const position = index - scrollOffset
                const isVisible = position >= -1 && position <= albumsPerScreen

                if (!isVisible) return null

                // Calculate position to spread across full width
                const leftMargin = (screenWidth - albumsPerScreen * albumSpacing) / 2
                const xPosition = leftMargin + position * albumSpacing

                return (
                  <DialogTrigger asChild key={album.id}>
                    <div
                      className="absolute cursor-pointer transition-all duration-500 ease-out group"
                      style={{
                        left: `${xPosition}px`,
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: hoveredId === album.id ? 50 : index,
                        opacity: position < 0 || position >= albumsPerScreen ? 0.3 : 1,
                      }}
                      onMouseEnter={() => setHoveredId(album.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      onClick={() => setSelectedAlbum(album)}
                    >
                      <div
                        className={`
                          relative w-[300px] h-[300px] rounded-lg overflow-hidden shadow-2xl
                          transition-all duration-300 ease-out
                          ${hoveredId === album.id ? "transform -translate-y-8 scale-110" : ""}
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
                  </DialogTrigger>
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
                      i >= scrollOffset && i < scrollOffset + albumsPerScreen ? "bg-purple-500" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedAlbum && (
        <DialogContent className="w-[80vw] max-w-[800px] h-[80vh] max-h-[80vh] bg-transparent border-none">
          <DialogTitle className="sr-only">{selectedAlbum.title}</DialogTitle>
          <iframe
            style={{ borderRadius: "12px" }}
            src={`${selectedAlbum.embedUrl}&theme=0`}
            width="100%"
            height="80%"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </DialogContent>
      )}
    </Dialog>
  )
}
