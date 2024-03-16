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
    <div className="flex my-4 p-2 flex-col md:flex-row hover:glow duration-300 mouse-cursor rounded-md">
      <div>
        <p className="text-lg">{title}</p>
        <div className="text-sm text-gray-400">{body}</div>
        <SkillsSection skills={skills}/>
        <div className="flex flex-row">
          {children}
        </div>
      </div>
    </div>
  )
}

