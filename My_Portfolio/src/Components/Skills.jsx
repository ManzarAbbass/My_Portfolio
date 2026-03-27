import { Dot } from "lucide-react"

const Skills = ({skill}) => {
  return (
    <div className="
      flex items-center bg-brand-chip border border-brand-borderChip rounded-full 
      px-2 py-1 sm:px-3 sm:py-1.5 md:px-2 md:py-1 
      text-brand-muted gap-2
    ">

      <Dot 
        className={skill.color} 
        size={20} 
      />


      <p className="text-xs sm:text-sm md:text-sm font-medium">
        {skill.skill}
      </p>
    </div>
  )
}

export default Skills
