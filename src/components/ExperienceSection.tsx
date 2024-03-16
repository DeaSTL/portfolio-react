import React from 'react'
import Link from './Link'
import ExperienceEntry from './ExperienceEntry'

type Props = {}

export default function ExperienceSection({}: Props) {
  return (
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
  )
}
