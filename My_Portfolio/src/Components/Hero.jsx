import profile from "../assets/profile.png"
import { Dot } from "lucide-react"

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">


      <div className="md:col-span-7 bg-brand-cell rounded-xl 
                      p-4 sm:p-6 md:p-10 
                      border border-brand-border-chip flex flex-col gap-4">
        

        <div className="workAva w-fit flex items-center bg-brand-border-chip px-2 sm:px-3 md:px-4 py-1 rounded-2xl">
          <Dot className="text-brand-green" size={28} />
          <span className="text-brand-muted text-xs sm:text-sm md:text-lg ml-2">
            Available for work
          </span>
        </div>


        <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold">
          Hi, I'm <span className="text-brand-light">Manzar</span>
        </h2>
        <h2 className="text-white text-2xl sm:text-4xl md:text-5xl font-bold">
          <span className="text-brand-accent">Frontend</span> Dev.
        </h2>


        <p className="text-brand-faint text-sm sm:text-base md:text-lg">
          I build clean, fast React apps. <br /> Turning ideas into real products
        </p>


        <div className="btn flex gap-3 mt-3">
          <a href="https://github.com/ManzarAbbass?tab=repositories"
             target="_blank"
             rel="noopener noreferrer"
             className="bg-brand-accent text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-2xl text-xs sm:text-sm md:text-lg">
            View Projects
          </a>
          <button className="bg-brand-accent text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-2xl text-xs sm:text-sm md:text-lg">
            Download CV
          </button>
        </div>
      </div>


      <div className="md:col-span-5 bg-brand-cell rounded-xl 
                      p-4 sm:p-6 md:p-10 
                      border border-brand-border-chip flex flex-col justify-center items-center gap-3">
        <img className="rounded-full w-28 h-28 sm:w-40 sm:h-40 md:w-56 md:h-56 object-cover border border-brand-border-chip" src={profile} alt="" />
        <h2 className="text-white font-bold text-lg sm:text-2xl md:text-3xl">Manzar</h2>
        <h3 className="text-xs sm:text-base md:text-lg text-brand-faint">React Developer</h3>
        <p className="bg-brand-chip w-fit text-brand-muted border border-brand-border-chip rounded-2xl px-3 sm:px-4 md:px-6 py-1 text-xs sm:text-sm md:text-lg">
          Pakistan, Karachi
        </p>
      </div>


      <div className="md:col-span-4 bg-brand-cell rounded-xl p-4 sm:p-6 md:p-8 border border-brand-border-chip">
        <h2 className="text-brand-label text-sm sm:text-lg md:text-xl">About Me</h2>
        <p className="text-brand-faint text-xs sm:text-sm md:text-base">
          Passionate frontend dev learning <span className="text-brand-light">React.</span> 
          I love building clean UIs. Open to <span className="text-brand-light">internships</span> and junior roles.
        </p>
      </div>


<div className="md:col-span-8 bg-brand-cell rounded-xl p-4 sm:p-6 md:p-8 border border-brand-border-chip">
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

    <div className="bg-brand-dark rounded-xl p-3 md:p-5 text-center border-b border-brand-border-chip 
                    transition-transform duration-200 hover:scale-105 hover:bg-brand-accent hover:text-white">
      <p className="text-brand-light text-base sm:text-lg md:text-2xl font-medium">1</p>
      <p className="text-brand-faint text-xs mt-1">Projects</p>
    </div>

    <div className="bg-brand-dark rounded-xl p-3 md:p-5 text-center border-b border-brand-border-chip 
                    transition-transform duration-200 hover:scale-105 hover:bg-brand-accent hover:text-white">
      <p className="text-brand-light text-base sm:text-lg md:text-2xl font-medium">1+</p>
      <p className="text-brand-faint text-xs mt-1">Months</p>
    </div>

    <div className="bg-brand-dark rounded-xl p-3 md:p-5 text-center border-b border-brand-border-chip 
                    transition-transform duration-200 hover:scale-105 hover:bg-brand-accent hover:text-white">
      <p className="text-brand-light text-base sm:text-lg md:text-2xl font-medium">2</p>
      <p className="text-brand-faint text-xs mt-1">Tech stacks</p>
    </div>

    <div className="bg-brand-dark rounded-xl p-3 md:p-5 text-center border-b border-brand-border-chip 
                    transition-transform duration-200 hover:scale-105 hover:bg-brand-accent hover:text-white">
      <p className="text-brand-light text-base sm:text-lg md:text-2xl font-medium">100%</p>
      <p className="text-brand-faint text-xs mt-1">Dedication</p>
    </div>

  </div>
</div>
    </div>
  )
}

export default Hero
