import Link from "./Link"
import ProjectEntry from "./ProjectEntry"

type Props = {}

export default function ProjectSection({}: Props) {
  return (
    <>
      <div>
        <p className="category-header">Projects</p>
      </div>

      <ProjectEntry 
      title={"Super Chat React"} 
      body={<>
      Super Chat is a app that I made for fun using react. It has an intuitive UI with the ability to create custom rooms. This app is deployed using docker and terraform for infrustructure.
      </>}
      skills={["React","Typescript","AWS EC2","Terraform","Golang"]}>

        <Link url={"https://github.com/DeaSTL/super-chat-react"} name="Github"/>

      </ProjectEntry>

      <ProjectEntry 
      title={"Frate - C++ Package Manager"} 
      body={<>
      Frate is a command line utility to speed up C++ development by providing solid defaults, package management, and the ability to start from a project template. Frate uses purely github infrastructure so it doesn't rely on community funding to exist.
      </>}
      skills={["CMake","C++","Python","Golang","Assembly"]}>

        <Link url={"https://github.com/frate-dev/frate"} name="Github"/>

      </ProjectEntry>

      <ProjectEntry 
      title={"Pickup Man Junk Removal Lead Generation Sites"} 
      body={<>
      This is a group of configurable lead generation sites to help funnel sales into my business, using a custom input form to collect customer information and pictures. It uses various SEO tactics such as procedural content serving along with indepth schema code. On top of all this it's made to be very light weight so the load time of the site is under a second.
      </>}
      skills={["Pugjs","Expressjs","MongoDB","SEO","Typescript","JQuery","Bootstrap","HTML","CSS"]}>

        <Link url={"https://yorktown.pickupmanjunkremoval.com/"} name="Yorktown Site"/>

      </ProjectEntry>

      <ProjectEntry 
      title={"Pickup Man Junk Removal Website"} 
      body={<>
      This project was aimed at leveraging my ability to build websites to create an experience for my customer's that allows them to quickly figure out the cost of a specific service and get it booked ASAP using my custom instant estimate tool. Using cutting edge SEO techniques to ensure that I have the best presense in my field which has been achived. Currently the website holds a firm 35 percent of all the first pages on over 200 keywords.
      </>}
      skills={["Pugjs","Expressjs","MySQL","SEO","Typescript","JQuery","Bootstrap","CSS","HTML"]}>

        <Link url={"https://hamptonroadspickupman.com/"} name="Main Website"/>

      </ProjectEntry>

      <ProjectEntry 
      title={"HTMX Flappybird"} 
      body={<>
        This is a realtime game that I made using HTML DOM elements and the trending javascript library: HTMX. It uses an "outside the box" method of server side rendering elements on the screen along with simulating the physics of the game on the server side. This project is to demonstrate the true power of HTMX.
      </>}
      skills={["HTMX","Golang","HTML","CSS"]}>

        <Link url={"https://github.com/DeaSTL/flappybird-htmx"} name="Github"/>

      </ProjectEntry>

      <ProjectEntry 
      title={"Discord Mips32 Emulator"} 
      body={<>
        The Mip32 cpu is a processor that was very popular in the 90s and early 2000s due to it's power effeciency being much better than the clunky x86 based cpus of the time. This emulator was intended be a interactive way to learn about mips32 and low level programming in a way that's fun. It currently includes a mips32 assembler a and some instruction delcarations.
      </>}
      skills={["CMake","C++"]}>

        <Link url={"https://github.com/DeaSTL/discord-cpu-emulator"} name="Github"/>

      </ProjectEntry>
      
      <ProjectEntry 
      title={"6502 Emulator in C++"} 
      body={<>
        This is a toy emulator for the 6502 which is a CPU that was used in the Commodore 64 and the Nintendo Entertainment System. This particular configuration allows the user to write bitmap graphics to the screen similar to the Commodore 64.
      </>}
      skills={["CMake","C++","Assembly"]}>

        <Link url={"https://github.com/DeaSTL/emu6502"} name="Github"/>

      </ProjectEntry>


      <ProjectEntry 
      title={".NET Yaif  4bit Image Encoder"} 
      body={<>
      Developed the yaif Encoder, a tool for encoding images in the minimalist .yaif format. This project, a foray into open-source contributions, involved creating a custom image format aiming for simplicity and efficiency in image processing. It features an encoder written in C# and is designed to work with a unique set of image specifications, variable pallet, lacking image compression to simplify the image format, and 16 color restriction to make sure it's a format that can be read and displayed on older systems.
      </>}
      skills={["C#","Binary Parsing","Image Processing"]}>

        <Link url={"https://github.com/DeaSTL/yaifEncoder"} name="Github"/>

      </ProjectEntry>

      <ProjectEntry 
      title={"GMP Version Control System"} 
      body={<>
      Engineered a remote version control system to support collaborative Lua script development in Minecraft's ComputerCraft mod. The GMPServer is implemented in JavaScript and provides a platform for managing script versions, tracking changes, and streamlining the script deployment process within the gaming environment. This was intended to be a fun project to provided cross server version control of computercraft projects.
      </>}
      skills={["Lua","Node.js"]}>

        <Link url={"https://github.com/DeaSTL/GMPServer"} name="Github"/>

      </ProjectEntry>

      <div className="py-20"/>
    </>
  )
}
