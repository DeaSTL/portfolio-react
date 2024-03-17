import { useEffect, useState } from 'react'

type Props = {
  starCount?:number
}

type Star = {
  id:number
  left:string
  top:string
  size:string
  animationDuration:string
}

export default function StarController({starCount = 100}: Props) {
  
  const [stars, setStars] = useState<Star[]>([])
  useEffect(() => {

    const newStars = Array.from<Star[]>({ length: starCount }).map(():Star => {
      return {
        id:Math.random(),
        left: `${Math.random() * 100}%`,
        top:`${Math.random() * 400}vh`,
        size: `${Math.random() * 2 + 1}px`,
        animationDuration: `${Math.random() * 2 + 1}s`
      }
    })

    setStars(newStars)
  }, [starCount])
  return (
    <>
      {stars.map(star => (
        <span
          key={star.id}
          className="star"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: star.animationDuration
          }}
        >
      </span>
      ))}
    </>
  )
}
