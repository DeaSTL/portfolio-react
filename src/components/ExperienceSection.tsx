import Link from './Link'
import ExperienceEntry from './ExperienceEntry'

type Props = {}

export default function ExperienceSection({ }: Props) {
  return (
    <div className="py-10">
      <div>
        <p className="category-header">Experience</p>
      </div>
      <ExperienceEntry
        title={"Full Stack Developer"}
        body={<>
          <b> Commissary Project:</b>
          <br></br>
          <br></br>
          <b>
            Contributed heavily to better communication and origanizational practices:
          </b>
          <ul className="list-disc list-inside">
            <li>Designed wireframes for various frontend projects to reduce major redesigns after the code is created</li>
            <li>Created flow charts of design decisions in order to communicate with developers of various skill levels more effectively</li>
            <li>Created practices to ensure up to date documentation for developers</li>
          </ul>
          <br></br>
          <b>
            Influenced major architecural decisions to help reduce time to market such as:
          </b>
          <ul className="list-disc list-inside">
            <li>Reducing our project operational complexity</li>
            <li>Building scripts to automate regular developer tasks</li>
            <li>Organized the project layout to suite the size of our team and to match a more standard pattern</li>
          </ul>
          <br></br>
          <b>
            Technical achievements:
          </b>
          <ul className="list-disc list-inside">
            <li>Built full CI/CD pipeline including integration testing, unit testing, and kubernetes deployment using Jenkins.</li>
            <li>Helped with the migration to kafka from event sourcing using EventStoreDB after the complexity impeded progress of the project</li>
            <li>Helped reduced the codebase footprint by consolidating the nine microservices into just three</li>
          </ul>
        </>}
        company={"City Tele Coin"}
        duration={"June 2024 - Present"}
        skills={[
          "Javascript",
          "Typescript",
          "Docker",
          "Linux",
          "Node.js",
          "Kubernetes",
          "Jenkins",
          "CI/CD"
        ]}
      >
      </ExperienceEntry>
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
        duration={"April 2021 - June 2024"}
        skills={[
          "Javascript",
          "Typescript",
          "Docker",
          "Linux",
          "Node.js"
        ]}
      >
        <Link url="https://www.hamptonroadspickupman.com/" name="Main Website - No Longer Active" />
      </ExperienceEntry>
    </div>
  )
}
