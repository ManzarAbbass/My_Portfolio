import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ProjectCards from './Components/ProjectCards'
import Skills from './Components/Skills'
import formcard from "./assets/ProjectImg/note-cont.PNG"
import todo from "./assets/ProjectImg/tdo.PNG"
import cmd from "./assets/ProjectImg/cmd.PNG"
import Contact from './Components/Contact'
import FooterSec from './Components/footer'

const App = () => {
  const SklTxt = [
    { color: "text-cyan-400", skill: "React" },
    { color: "text-yellow-400", skill: "Javascript" },
    { color: "text-sky-400", skill: "Tailwind CSS" },
    { color: "text-orange-500", skill: "HTML" },
    { color: "text-blue-500", skill: "CSS" },
    { color: "text-red-500", skill: "Git" },
    { color: "text-brand-light", skill: "Figma" },
  ]
  const projectCard = [{
    projectImg: formcard,
    projectName: "PingStackCallReminder",
    liveDemo: "https://pingstack.netlify.app/",
    githubLink: "https://github.com/ManzarAbbass/Ping_Stack",
    projectStack1: "Css",
    projectStack2: "VanillaJS",
    projectinfo: "Smart call reminder application with priority-based note creation, stacked card interface, and dynamic reordering functionality."
  },
  {
    projectImg: todo,
    projectName: "TodoApp",
    liveDemo: "https://todonote-manager-app.netlify.app/",
    githubLink: "https://github.com/ManzarAbbass/Modern_Todo_App",
    projectStack1: "Css",
    projectStack2: "VanilaJS",
    projectinfo: "Interactive Todo application with task management, filtering, and real-time UI updates using efficient state handling."
  },
  {
    projectImg: cmd,
    projectName: "Command Pallete",
    liveDemo: "https://command-pallete.netlify.app/",
    githubLink: "https://github.com/ManzarAbbass/Command_palette_prjct",
    projectStack1: "Css",
    projectStack2: "VanillaJS",
    projectinfo: "Command palette with keyboard shortcuts, real-time search filtering, arrow navigation, and responsive modern UI."
  },
  {
    projectImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZEY6BK2GdD476ALZgZ2bY_TqwqBoRkYX7jQ&s",
    projectName: "Lazy Loading",
    liveDemo: "https://www.jsdelivr.com/package/npm/theme-changer-light-dark",
    githubLink: "https://github.com/ManzarAbbass/WebApp-Theme-Changer",
    projectStack1: "Css",
    projectStack2: "VanillaJs",
    projectinfo: "Bulid a Lazy Loading Image to clear the Concept of Intersection Observer. And Optimize Performance of the website."
  }]
  return (
    <main className='bg-brand-bg  min-h-screen '>
      <div className='px-6 border-b border-brand-border'>
        <Navbar />
      </div>
      <div id='hero' className='Hero px-5 py-7'>
        <Hero />
      </div>
      <div id="skills" className='bg-brand-cell rounded-2xl px-5 py-5 border border-brand-border-chip flex flex-col gap-4 mx-5'>
        <h2 className="text-brand-label text-sm sm:text-lg md:text-xl">Skills</h2>
        <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-6 gap-2">
          {SklTxt.map((elm, index) => (
            <Skills key={index} skill={elm} />
          ))}
        </div>
      </div>
      <div className='projects px-5 py-7'>
        <h2 className='text-brand-label text-sm sm:text-lg md:text-xl'>Projects</h2>
        <p className='text-sm sm:text-lg md:text-xl font-bold text-white mb-5'>What I've Built</p>
      <div id='projects' className="ProjectsCard  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
        {projectCard.map((elem, index) => (
          <ProjectCards key={index} cardinfo={elem} />
        ))}
      </div>
      </div>
      <div id="contact" className="px-4 py-2 sm:px-5 md:px-5 bg-brand-dark rounded-xl">
        <Contact />
      </div>
      <div className='footer bg-brand-cell  border-t border-brand-border-chip p-5 mt-5 flex justify-center'>
        <FooterSec/>
      </div>
    </main>
    
  )
}

export default App
