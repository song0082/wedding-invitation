import { useEffect, useRef, useState } from "react"
import "./App.scss"
import { Location } from "./component/location"
import { BgEffect } from "./component/bgEffect"
import { Invitation } from "./component/invitation"
import { Calendar } from "./component/calendar"
import { Gallery } from "./component/gallery"
import { Information } from "./component/information"
import { GuestBook } from "./component/guestbook"
import { Modal } from "./component/modal"
import { ShareButton } from "./component/shareButton"
import { Cover } from "./component/cover"
import { LazyDiv } from "./component/lazyDiv"
import { GROOM_NAME, BRIDE_NAME } from "./const"
import HeartIcon from "./icons/heart-icon.svg?react"

/**
 * 청첩장의 최상위 메인 앱 컴포넌트입니다.
 *
 * @returns {JSX.Element} 메인 애플리케이션 컴포넌트
 */
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
    // Intersection Observer를 이용해 스크롤 시 카드가 페이드인 되도록 설정합니다.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("lazy-active")
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    const targets = document.querySelectorAll(
      ".card, .card-group, .footer",
    )
    targets.forEach((target) => observer.observe(target))

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="background">
      <BgEffect />

      {/* 배경음악 오디오 태그 (public 폴더에 music.mp3 파일 필요) */}
      <audio ref={audioRef} src="/music.mp3" loop />

      {/* 음악 재생/정지 플로팅 버튼 */}
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
        <Cover />
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
          <GuestBook />
        </div>
        <LazyDiv className="footer">
          <div>
            {GROOM_NAME} <HeartIcon className="icon text-theme-color" /> {BRIDE_NAME}
          </div>
          <div className="break" />
          <ShareButton />
        </LazyDiv>
      </div>
      <Modal />
    </div>
  )
}

export default App
