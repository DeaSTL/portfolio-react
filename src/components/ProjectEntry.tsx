import { ReactNode } from 'react'
import SkillsSection from './SkillsSection'


type Props = {
  title:string
  body:ReactNode
  img?:string
  skills?:string[]
  children?:ReactNode
}

export default function ProjectEntry({skills,body,title,children}: Props) {
  return (
    <div className="flex my-4 flex-col md:flex-row opacity-100 md:opacity-60 hover:opacity-100 hover:py-10  hover:glow duration-300 mouse-cursor">
      <div>
        <p className="text-lg">{title}</p>
        <div className="text-sm text-gray-500">{body}</div>
        <SkillsSection skills={skills}/>
        <div className="flex flex-row">
          {children}
        </div>
      </div>
    </div>
  )
}

