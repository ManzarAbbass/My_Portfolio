import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
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
    <div className='Hero px-5 py-8'>
    <Hero/>
    </div>
    <div>
          <h2 className="text-brand-label text-xl">Skills</h2>
      {SklTxt.map((elm,index)=>(
        <Skills key={index} skill={elm}/>
      ))}
    </div>
    </main>
  )
}

export default App
