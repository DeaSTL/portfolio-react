import './App.css'
import './index.css'
import SocialLink from './components/SocialLink'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBlog} from '@fortawesome/free-solid-svg-icons'
import ProjectSection from './components/ProjectSection'
import ExperienceSection from './components/ExperienceSection'
import Timeline from './components/Timeline'

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
            <div>
              <div className="text-2xl pr-2 font-semibold">
              Hi
              </div>
              I'm Jon-Michael, life long learner, entrepreur with a passion for technology and programming. I've been programming as a hobby as well as using it for business development for nearly a decade and I still find myself egar to learn new skills!
            </div>
          </div>

          <div className="md:w-full px-10 my-10 lg:w-1/2">
            <ExperienceSection/>
            <ProjectSection/>
          </div>
          <Timeline/>
        </div>
    </div>

    </>
  )
}

export default App
