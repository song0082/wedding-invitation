import { useEffect, useState } from "react"
import "./index.scss"

export const BgEffect = () => {
  const [snowflakes, setSnowflakes] = useState<number[]>([])

  useEffect(() => {
    const flakes = Array.from({ length: 25 }, (_, index) => index)
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
            animationDuration: `${Math.random() * 4 + 3}s`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.7 + 0.3,
            fontSize: `${Math.random() * 0.8 + 0.8}rem`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  )
}
