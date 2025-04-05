import TimelineItem from './TimelineItem'

type Props = {}

export default function Timeline({}: Props) {
  return (

      <div className="flex flex-col px-10">
      <div>
        <p className="category-header">My Story</p>
      </div>

      <TimelineItem year={"2014"} body={`
      My journey into software development began during the golden days, when I dove into the world of computers by hosting and managing game servers for my friends. I found a lot of satisfaction from taking the time to optimize and modify the configurations for a more unique gameplay experience; around this time is when I started to get into programming using C++.
      `}/>
      <TimelineItem year={"2015"} body={`
      After using c++ for a little bit and feeling a bit underwhelmed with what I was able to do using c++, I switched to Pyton. I was almost immediately hooked, building mathematical visualizations, and small games. Python allowed me to really learn the basics of programming with a very low barrier to entry.
      `}/>
      <TimelineItem year={"2016"} body={`
         This was a pivotal time for me. High school provided me with access to Eclipse IDE while at school, and that's when I began experimenting with Java.
 Diving into object-oriented concepts and design patterns, my interest evolved from a mild curiosity to a passion.
 "This is it," I thought, "I'm going to do this for the rest of my life." It wasn't all about traditional applications, though. 
 Inside one of my Minecraft servers, I embarked on building a local "internet" for my friends, complete with databases and simple web renderers, all through the mod ComputerCraft.
 The challenge of working within its limited hardware was incredibly rewarding.
      `}/>
      <TimelineItem year={"2017"} body={`
      was a year of broadening my horizons. I took my first steps into web development with PHP, creating Xiacon—a social media website for my friends and even some of my teachers were willing to try it out. It was my little corner of the internet, and though it's no longer online, it holds a special place in my heart. Around this time, I also started using GitHub, marking my foray into collaborative programming and open-source projects.

My adventure continued as I delved deeper into Java and C#, ventured into graphics programming with OpenGL, and even started a Discord server dedicated to graphics programming, which now boasts over 10,000 members. Meanwhile, JavaScript caught my attention, leading me to develop browser-based games, primarily multi-player games.
      `}/>
      <TimelineItem year={"2018"} body={`
      This is a year of diving into more intermediate projects for me. I was all about pushing the boundaries of what I could create: from custom image encoders like the YAIF image format to building a unique version control system for ComputerCraft programs and even developing a custom socket library in C#. This was also a period of balancing a hefty workload outside of programming and starting my college journey.
      `}/>
      <TimelineItem year={"2019"} body={`
      saw me busy at UPS, eyeing a management position while also exploring entrepreneurial ventures. Selling 3D models turned out to be quite a success, and although my woodworking business didn't take off as hoped, I learned a lot from the experience. Eventually, I climbed the ranks to management at UPS.
      `}/>
      <TimelineItem year={"2020"} body={`
      This is the year the world faced the COVID-19 pandemic. It was a challenging time for everyone, myself included. For the first year in a long while, I didn't write a single line of code, as I was overwhelmed with responsibilities at work.
      `}/>
      <TimelineItem year={"2021"} body={`
      This was the year I took a significant leap towards entrepreneurship. Inspired by YouTube videos of people picking up old stuff, so I financed a pickup truck pushing my limits financially and plunged into the junk removal business. It wasn't easy, but my background in web development and newfound knowledge in digital marketing, especially technical SEO, became my edge. I honed my website to a point where it outshined competitors in visibility, negating the need for paid advertising.
      `}/>
      <TimelineItem year={"2022"} body={`
        Now my business was booming. I managed to drive traffic solely through SEO, employing advanced techniques and content strategies to engage customers. My dedication to understanding and optimizing the digital landscape had paid off, allowing my business to thrive on organic reach alone.
      `}/>
      <TimelineItem year={"2023"} body={`
      brought its own set of challenges. The realization hit that running the business demanded more than I could sustainably give. Despite my efforts, scaling the operation without compromising my well-being seemed increasingly unfeasible. The business relied heavily on my personal involvement in almost every aspect, from management to marketing and hands-on work, leading to a relentless schedule with no room for breaks.


      The thing about running a local business is the "drop". The "drop" is a seasonal decline in business which effects just about every business but local businesses feel it the hardest. In this time I spent time working on a project called "frate" with a few friends because I was disatisfied with the development process in c++, thus frate was born.
      `}/>
      <TimelineItem year={"2024"} body={`
        This is the year that I transform from business owner to software engineer. I know what I am now, and I know what I want to do. I want to build software that makes a difference, that solves real problems, and that helps people. I want to be part of a team that is passionate about technology and innovation. I want to be a software engineer. I started working at city tele coin as a software engineer, taking on the role of Devops engineer out of the gate building out developer scripts, improving developer workflows, creating ci/cd pipelines in Jenkins, and building integration testing environments for full application coverage.

        Towards the end of the year I also spoke at big sky dev conference about one of my side projects that gained some attention online, HTMX Flappybird. This project was originally meant to be a one off joke but turned into quite the project with many new concepts that I have never had to worry about before. One being high frequency, low latency communication over http, multi region deployment, and geolocality based DNS load balancing.
      `}/>
      <TimelineItem year={"2025"} body={`
        As 2024 sunsets, I'm still working at City Tele Coin and learning many new and old technologies outside of work such as Blazor.NET in the web developer space and also some infrastructure tools like Proxmox, Ansible, non-cloud VM provisioning techniques, and linux networking in general. 
      `}/>
      </div>

  )
}
