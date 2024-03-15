import './App.css'
import './index.css'
import ExperienceEntry from './components/ExperienceEntry'
import Link from './components/Link'
import SocialLink from './components/SocialLink'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBlog} from '@fortawesome/free-solid-svg-icons'
import ProjectEntry from './components/ProjectEntry'
import TimelineItem from './components/TimelineItem'

function App() {

  return (
    <>
      <div className="mx-auto max-w-screen-xl text-gray-300 md:justify-center lg:py-10">
        <div className="flex flex-col md:flex-row duration-75">
          <div className="md:w-full my-10 mx-10 lg:w-1/2">
            <p className="text-4xl font-semibold p-1 hover:glow duration-200">Jon-Michael Hartway </p>
            <p className="text-xl font-bold text-gray-400 p-1">Software Engineer</p>
            <p className="text-lg font-light text-gray-400">Building high performance, rock-solid applications!</p>

            <div className="md:py-40 py-10">
              <SocialLink icon={faGithub}  url="www.example.com"/>
              <SocialLink icon={faLinkedin}  url="www.example.com"/>
              <SocialLink icon={faTwitter}  url="www.example.com"/>
              <SocialLink icon={faBlog}  url="www.example.com"/>
            </div>

            <div>
              <p className="category-header">About</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
            </p>
          </div>




          <div className="md:w-full px-10 my-10 lg:w-1/2">
            <div className="py-10">
              <div>
                <p className="category-header">Experience</p>
              </div>
              <ExperienceEntry 
              title={"Software Engineer"} 
              body={"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."} 
              company={"Deez nuts"} 
              duration={"March 2012 - January 2020"}
              skills={[
                "c++",
                "python"
              ]}
              >
                <Link url="http://example.com/" name="Example-1"/>
                <Link url="http://example.com/" name="Example-2"/>
                <Link url="http://example.com/" name="Example-3"/>
              </ExperienceEntry>

              <ExperienceEntry 
              title={"Software Engineer"} 
              body={"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."} 
              company={"Deez nuts"} 
              duration={"March 2012 - January 2020"}
              skills={[
                "ur mom",
                "sex"
              ]}

              />
            </div>

            <div>
              <p className="category-header">Projects</p>
            </div>

            <ProjectEntry title={"Some Project"} body={"Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat."} skills={["C++","Python"]}>

              <Link url={"www.example.com"} name="Github"/>

            </ProjectEntry>
            
            <div className="py-20"/>



          </div>



        </div>
        <div className="flex flex-col px-10">
        <div>
          <p className="category-header text-center">My Story</p>
        </div>

        <TimelineItem year={"2014"} body={`
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        `}/>
        <TimelineItem year={"2015"} body={`
        Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
        `}/>
        </div>
    </div>

    </>
  )
}

export default App
