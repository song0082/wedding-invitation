import { useEffect, useRef, useState } from "react"
import "./App.scss"
import { Location } from "./component/location"
import { BgEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { ShareButton } from "./component/shareButton"
import { Cover } from "./component/cover"
import { LazyDiv } from "./component/lazyDiv"

export function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play().catch(() => {
          console.log("자동 재생이 차단되었습니다.")
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lazy-active")
          }
        })
      },
      { threshold: 0.1 },
    )

    const targets = document.querySelectorAll(".card, .card-group, .footer")
    targets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="background">
      <BgEffect />

      {/* 배경음악: public/music.mp3 → GitHub Pages 경로 반영 */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}music.mp3`}
        loop
      />

      {/* 음악 재생/정지 버튼 */}
      <button
        onClick={togglePlay}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 100,
          background: "var(--white-color)",
          padding: "10px 15px",
          borderRadius: "30px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
          cursor: "pointer",
          fontSize: "0.9rem",
        }}
      >
        {isPlaying ? "🔊 음악 끄기" : "🔈 BGM 재생"}
      </button>

      <div className="card-view">
        <div className="card">
          <Cover />
        </div>
        <div className="card-group">
          <Invitation />
          <Calendar />
        </div>
        <div className="card-group">
          <Gallery />
          <Location />
        </div>
        <div className="card-group">
          <Information />
        </div>
        <LazyDiv className="footer">
          <div>
            송우남 ❤️ 이시바시레이코 (石橋怜子)
          </div>
          <div className="break" />
          <ShareButton />
        </LazyDiv>
      </div>
    </div>
  )
}

export default App
