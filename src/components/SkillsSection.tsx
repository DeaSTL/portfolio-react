type Props = {
  skills?:string[]
  }

export default function SkillsSection({skills}: Props) {
  return (
    <div className="mt-4 flex flex-wrap"> 
    {
      skills?.map((skill)=>{
        return (
          <span className="rounded-full p-2 text-xs bg-emerald-900 bg-opacity-20 text-green-300 mr-2 mt-2">{skill}</span>
        )
      })
    }
    </div>
  )
}




