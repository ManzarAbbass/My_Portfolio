import profile from "../assets/profile.png"
import { Dot } from "lucide-react"
const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

      {/* Row 1 — Hero Text */}
      <div className="md:col-span-7 bg-brand-cell rounded-xl p-15 border-b border-brand-border-chip flex flex-col gap-3">
        <div className="workAva w-fit flex items-center  bg-brand-border-chip  px-3 py-1 rounded-2xl">
          <span className="text-brand-green text-8xl"><Dot size={36}/></span>
          <span className="text-brand-muted">Available for work</span>
        </div>
        <h2 className="text-white text-7xl">Hi, I'm <span className="text-brand-light">Manzar</span></h2>
        <h2 className="text-white text-7xl"><span className="text-brand-accent">Frontend</span> Dev.</h2>
        <p className="text-brand-faint text-xl">I build clean, fast React apps. <br /> Turning ideas into real products</p>
        <div className="btn flex gap-2">
          <button className="bg-brand-accent text-white px-8 py-4 rounded-2xl">View Projects</button>
          <button className="bg-brand-accent text-white px-8 py-4 rounded-2xl">Download CV</button>
        </div>
      </div>

      {/* Row 1 — Avatar */}
      <div className="md:col-span-5 bg-brand-cell rounded-xl p-15 border-b border-brand-border-chip flex flex-col justify-center items-center gap-2">
        <img className="rounded-full w-60 h-60 object-cover border-b border-brand-border-chip" src={profile} alt="" />
        <h2 className="text-white font-bold text-4xl">Manzar</h2>
        <h3 className="text-lg text-brand-faint">React Developer</h3>
        <p className="bg-brand-faint w-fit text-brand-cell border-b border-brand-border-chip rounded-2xl px-4 py-1 text-lg">Pakistan,Karachi</p>
      </div>

      {/* Row 2 — About Me */}
      <div className="md:col-span-4 bg-brand-cell rounded-xl p-6 border-b border-brand-border-chip">
        <h2 className="text-brand-label text-xl">About Me</h2>
        <p className="text-brand-faint text-ms">Passionate frontend dev learning React. I love building clean UIs. Open to internships and junior roles.</p>
      </div>

      {/* Row 2 — Stats Counter */}
      <div className="md:col-span-8 bg-brand-cell rounded-xl p-6 border-b border-brand-border-chip">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-brand-dark rounded-xl p-4 text-center border-b border-brand-border-chip">
            <p className="text-brand-light text-2xl font-medium">5+</p>
            <p className="text-brand-faint text-xs mt-1">Projects</p>
          </div>

          <div className="bg-brand-dark rounded-xl p-4 text-center border-b border-brand-border-chip">
            <p className="text-brand-light text-2xl font-medium">3+</p>
            <p className="text-brand-faint text-xs mt-1">Months</p>
          </div>

          <div className="bg-brand-dark rounded-xl p-4 text-center border-b border-brand-border-chip">
            <p className="text-brand-light text-2xl font-medium">2</p>
            <p className="text-brand-faint text-xs mt-1">Tech stacks</p>
          </div>

          <div className="bg-brand-dark rounded-xl p-4 text-center border-b border-brand-border-chip">
            <p className="text-brand-light text-2xl font-medium">100%</p>
            <p className="text-brand-faint text-xs mt-1">Dedication</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Hero
