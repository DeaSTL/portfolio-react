import { faLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {
  url:string
  name:string
}

export default function Link({url,name}: Props) {
  return (
    <div className="text-xs pt-3 pr-2 ">
      <a href={url}> 
        <FontAwesomeIcon icon={faLink}/> {name}
      </a>
    </div>
  )
}
