import github from "../assets/github.jpg"
import linkedin from "../assets/linkedin.png"
import gmail from "../assets/gmail.png"

const Contact = () => {
    return (
        <div className="bg-brand-cell rounded-2xl border border-brand-border-chip px-6 py-10 md:flex items-center justify-between">
            
            {/* Heading + Para */}
            <div className="text-center md:text-left mb-6 md:mb-0">
                <h2 className="text-white text-xl md:text-2xl font-bold">Let's work together</h2>
                <p className="text-brand-muted">Open to internships and junior frontend role</p>
            </div>

            {/* Links Section */}
            <div className="grid grid-cols-2 gap-8 sm:gap-12 md:flex md:gap-20 md:justify-end">
                <a href="https://www.linkedin.com/in/manzarjaffari/" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-3">
                    <img src={linkedin} alt="LogoLinkedin" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl" />
                    <p className="text-brand-mid">Linkedin</p>
                </a>
                <a href="https://github.com/ManzarAbbass" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-3">
                    <img src={github} alt="Logogithub" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl" />
                    <p className="text-brand-mid">Github</p>
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=manzarja32@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center gap-3">
                    <img src={gmail} alt="Logogmail" className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl" />
                    <p className="text-brand-mid">Email</p>
                </a>
            </div>
        </div>
    )
}

export default Contact
