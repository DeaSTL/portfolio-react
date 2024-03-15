import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  icon:IconDefinition
  url:string
}

export default function SocialLink({icon,url}: Props) {
  return (
    <span className="pr-2">
      <a href={url}><FontAwesomeIcon size="xl" icon={icon}/></a>
    </span>
  )
}
