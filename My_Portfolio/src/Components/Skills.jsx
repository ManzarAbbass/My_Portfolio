import { Dot } from "lucide-react"
const Skills = ({skill}) => {
  return (
    <>
     <div className="flex items-center gap-1 bg-brand-chip border border-brand-borderChip rounded-full px-3 py-1.5 text-brand-muted">
        <span><Dot className={skill.color} size={16}/></span>
        <span>{skill.skill}</span>
     </div>

    </>
  )
}

export default Skills
