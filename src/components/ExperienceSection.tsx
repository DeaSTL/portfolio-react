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
  title={"Senior Software Engineer"}
  body={
    <>
      <b>CTC Commissary Project:</b>
      <br />
      <br />
      <ul className="list-disc list-inside">
        <li>Led the re-architecture and redevelopment of a multi-tenant enterprise jail commissary system, responsible for managing inmate transactions, orders, and inventory across facilities</li>
        <li>Maintained continuous direct communication with end users and customers to identify workflow pain points and improve an existing product with the goal of reducing operational workload</li>
        <li>Selected ASP.NET for its scalability and maintainability as the core backend technology; utilized Next.js for the frontend to support modern, responsive interfaces</li>
        <li>Built local development automation tools using Bash and Python to reduce setup time and improve developer efficiency</li>
        <li>Established and enforced coding standards and best practices to improve maintainability and consistency across development teams</li>
        <li>Provided mentorship to junior developers, offering guidance on debugging, system design, and clean coding practices</li>
      </ul>
      <br />
      <b>Technical achievements:</b>
      <ul className="list-disc list-inside">
        <li>Implemented a containerized environment with 10x faster boot-up times, improving development and deployment speed</li>
        <li>Established a response caching strategy that significantly reduced response times across key API endpoints</li>
        <li>Built a versioned API to support future multi-versioned APIs, improving flexibility and scalability of the application</li>
        <li>Created an auto-generated frontend API client to ensure type safety between frontend and backend, replacing a previously manual communication layer</li>
        <li>Designed and implemented a full CI/CD pipeline using Jenkins, integrating unit and integration tests with Kubernetes-based deployment for reliable production releases</li>
      </ul>
      <br />
      <b>Project organization achievements:</b>
      <ul className="list-disc list-inside">
        <li>Created wireframes and UI/UX mockups for multiple frontend projects to ensure user-friendly, accessible interfaces</li>
        <li>Developed flowcharts and technical documentation to clearly communicate architectural decisions and workflows across varying experience levels</li>
      </ul>
    </>
  }
  company={"City Tele Coin"}
  duration={"May 2024 - Present"}
  skills={[
    "ASP.NET",
    "Next.js",
    "Typescript",
    "Javascript",
    "Bash",
    "Python",
    "Docker",
    "Linux",
    "Kubernetes",
    "Jenkins",
    "CI/CD"
  ]}
/>

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
    </div >
  )
}
