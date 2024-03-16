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
      title={"Owner"} 
      body={<>
      <p>
        Built custom full stack application as a sales funnel
      </p>
      <p>
       Automatic appointment management system
       Google calendar integration using the acuity api
       Roughly 500 appointments a year 50-100 sub-contracted jobs
       Intuitive estimate tool using bootstrap and jquery
       Email updates
       Estimate adjustment
     </p>
    <p>
   SEO automations to maintain search position
   </p>
  <p> 
   Consistently achieved 30% of search results share
   Used page specific content to serve the most relevant up to date content from the CMS
   Wrote content using keyword research and some generative AI tools
   </p>
  <p>
   Built a Fullstack CMS for managing blog posts, images and videos
   </p>

    <p>
   Intuitive ui for adding content with location data, tags, title and description
   background jobs for pulling the latest content from youtube and blogger using their respective APIS
   procedural content serving options for serving recent content automatically
   </p>
      </>}
      company={"Pickup Man Junk Removal"}
      duration={"April 2021 - Present"}
      skills={[
        "Javascript",
        "Typescript",
        "Docker",
        "Linux",
        "Node.js",
        "Bootstrap",
        "JQuery",
        "AWS"
      ]}
      >
        <Link url="https://www.hamptonroadspickupman.com/" name="Main Website"/>
      </ExperienceEntry>

    </div>
  )
}
