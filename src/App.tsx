import './App.css'
import './index.css'
import SocialLink from './components/SocialLink'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBlog} from '@fortawesome/free-solid-svg-icons'
import { Analytics } from "@vercel/analytics/react"
import ProjectSection from './components/ProjectSection'
import ExperienceSection from './components/ExperienceSection'
import Timeline from './components/Timeline'
import StarController from './components/StarController'

function App() {

  return (
    <>
      <StarController/>
      <Analytics/>
      <div className="mx-auto max-w-screen-xl text-gray-300 md:justify-center lg:py-10">
        <span className="static flex justify-center top-10">
          <SocialLink icon={faGithub}  url="https://github.com/DeaSTL"/>
          <SocialLink icon={faLinkedin}  url="https://www.linkedin.com/in/jon-michael-h/"/>
          <SocialLink icon={faTwitter}  url="https://twitter.com/0xdeafc0de"/>
          <SocialLink icon={faBlog}  url="https://jonhartway.blog/"/>
        </span>
        <div className="flex flex-col md:flex-row duration-75">
          <div className="md:w-full my-10 mx-10 lg:w-1/2">
            <p className="text-4xl font-semibold p-1 hover:text-glow duration-200">Jon-Michael Hartway </p>
            <p className="text-xl font-bold text-gray-400 p-1">Software Engineer</p>
            <p className="text-lg font-light text-gray-400">Building high performance, rock-solid applications!</p>


            <div>
              <p className="category-header">About</p>
            </div>
            <div>
              <div className="text-2xl pr-2 font-semibold">
              Hi
              </div>
              I'm Jon-Michael, life long learner, entrepreur with a passion for technology and programming. I've been programming as a hobby as well as using it for business development for nearly a decade and I still find myself egar to learn new skills!
            </div>
          </div>

          <div className="md:w-full px-10 my-10 lg:w-1/2">
            <ExperienceSection/>
          </div>
        </div>
        <div className="px-10">
        <ProjectSection/>
        </div>
        <Timeline/>
    </div>

    </>
  )
}

export default App
