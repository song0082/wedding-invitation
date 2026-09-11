import { useEffect, useState } from "react"
import "./index.scss"

export const BgEffect = () => {
  const [snowflakes, setSnowflakes] = useState<number[]>([])

  useEffect(() => {
    // 눈송이 개수 설정
    const flakes = Array.from({ length: 30 }, (_, index) => index)
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="bg-effect-container">
      {snowflakes.map((id) => (
        <div
          key={id}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}vw`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random(),
            transform: `scale(${Math.random() * 0.7 + 0.3})`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
