import SocialLink from './SocialLink'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter'
import { faBlog } from '@fortawesome/free-solid-svg-icons/faBlog'

type Props = {}

export default function SocialSection({}: Props) {
  return (
    <span className="static flex justify-center top-10">
      <SocialLink icon={faGithub}  url="https://github.com/DeaSTL"/>
      <SocialLink icon={faLinkedin}  url="https://www.linkedin.com/in/jon-michael-h/"/>
      <SocialLink icon={faTwitter}  url="https://twitter.com/0xdeafc0de"/>
      <SocialLink icon={faBlog}  url="https://jonhartway.blog/"/>
    </span>
  )
}




