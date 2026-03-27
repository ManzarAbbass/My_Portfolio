import logo from "../assets/logo.svg"
import {MenuIcon} from "lucide-react"
const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4">
      <div >
        <img src={logo}  alt="Logo" className="h-10"/>
      </div>
      <div className='hidden md:flex gap-15'>
        <span className="text-brand-muted hover:text-white cursor-pointer transition-colors text-sm font-bold">About</span>
        <span className="text-brand-muted hover:text-white cursor-pointer transition-colors text-sm font-bold">Skills</span>
        <span className="text-brand-muted hover:text-white cursor-pointer transition-colors text-sm font-bold">Projects</span>
        <span className="text-brand-muted hover:text-white cursor-pointer transition-colors text-sm font-bold">Contact</span>
      </div>
      <div className="text-white flex items-center gap-4">
      <div className="md:hidden text-brand-muted"><MenuIcon size={22}/></div>
      <button className="border-b border-brand-border bg-brand-accent text-sm px-4 py-2 rounded-full hover:opacity-90 transition-opacity">Hire me</button>
      </div>
    </div>
  )
}

export default Navbar
