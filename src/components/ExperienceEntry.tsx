import { ReactNode } from 'react'

type Props = {
  title:string
  company:string
  body:string
  duration:string
  skills?:string[]
  children?:ReactNode
}

export default function ExperienceEntry({title,company,body,duration,skills,children}: Props) {
  return (
    <div className="flex my-4 flex-col md:flex-row opacity-100 md:opacity-60 hover:opacity-100 hover:py-10  hover:glow duration-300 mouse-cursor">
      <span className="text-sm font-thin mr-2 md:w-1/4 w-full">{duration}</span>
      <div>
        <p className="text-lg">{title}  ─ <span className="text-sm text-gray-400">{company}</span></p>
        <p className="text-sm text-gray-500">{body}</p>
        <div className="mt-4"> 
        {
          skills?.map((skill)=>{
            return (
              <span className="rounded-full p-2 text-xs bg-emerald-900 bg-opacity-20 text-green-300 mr-2">{skill}</span>
            )
          })
        }
        </div>
        <div className="flex flex-row">
          {children}
        </div>
      </div>
    </div>
  )
}
