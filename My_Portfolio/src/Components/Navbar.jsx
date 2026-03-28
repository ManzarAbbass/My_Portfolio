import { useState } from "react"
import logo from "../assets/logo.svg"
import { MenuIcon } from "lucide-react"
const Navbar = () => {
  const [isOpen, setfirst] = useState(false)
  const MenuShow = () => {
    setfirst(!isOpen)
  }
  return (
    <div className="flex justify-between items-center py-4 relative">
      <div >
        <img src={logo} alt="Logo" className="h-7 sm:h-8 md:h-10" />
      </div>
      <div className={`Menu   bg-brand-cell border border-brand-border-chip py-4  ${isOpen? "block":"hidden"} flex flex-col md:flex md:flex-row  items-center gap-4 md:gap-8  absolute top-full left-0 w-full md:relative md:top-0 md:w-auto md:border-none md:bg-none`}>
        <span className="text-brand-muted hover:text-white cursor-pointer transition-colors text-sm font-bold">About</span>
        <span className="text-brand-muted hover:text-white cursor-pointer transition-colors text-sm font-bold">Skills</span>
        <span className="text-brand-muted hover:text-white cursor-pointer transition-colors text-sm font-bold">Projects</span>
        <span className="text-brand-muted hover:text-white cursor-pointer transition-colors text-sm font-bold">Contact</span>
      </div>
      <div className="text-white flex items-center gap-2">
        <div onClick={() => {
          MenuShow()
        }} className="md:hidden text-brand-muted"><MenuIcon size={22} /></div>
        <button className="border-b border-brand-border bg-brand-accent text-xs px-2 py-2 sm:px-3 sd:py-3 md:px-4 md:py-3 rounded-full hover:opacity-90 transition-opacity">Hire me</button>
      </div>
    </div>
  )
}

export default Navbar
