import Link from "./Link"
import ProjectEntry from "./ProjectEntry"

type Props = {}

export default function ProjectSection({}: Props) {
  return (
    <>
      <div>
        <p className="category-header">Projects</p>
      </div>

      <ProjectEntry title={"Some Project"} body={"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."} skills={["C++","Python"]}>

        <Link url={"www.example.com"} name="Github"/>

      </ProjectEntry>
      
      <div className="py-20"/>
    </>
  )
}
