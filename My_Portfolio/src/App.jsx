import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import ProjectCards from './Components/ProjectCards'
import Skills from './Components/Skills'
const App = () => {
const SklTxt = [
  { color: "text-cyan-400",    skill: "React" },
  { color: "text-yellow-400",  skill: "Javascript" },
  { color: "text-sky-400",     skill: "Tailwind CSS" },
  { color: "text-orange-500",  skill: "HTML" },
  { color: "text-blue-500",    skill: "CSS" },
  { color: "text-red-500",     skill: "Git" },
  { color: "text-brand-light", skill: "Figma" },
]
  return (
    <main className='bg-brand-bg min-h-screen '>
    <div className='px-6 border-b border-brand-border'>
      <Navbar/>
    </div>
    <div className='Hero px-5 py-7'>
    <Hero/>
    </div>
    <div className='bg-brand-cell rounded-2xl px-5 py-5 border-b border-brand-border-chip flex flex-col gap-4 mx-5'>
        <h2 className="text-brand-label text-xl">Skills</h2>
      <div className="grid grid-cols-1  sm:grid-cols-2  md:grid-cols-6 gap-2">
      {SklTxt.map((elm,index)=>(
        <Skills key={index} skill={elm}/>
      ))}
    </div>
    </div>
    <div className='ProjectsCard px-5 py-7'>
      <ProjectCards/>
    </div>
    </main>
  )
}

export default App
