import { Dot } from "lucide-react"
const Skills = ({skill}) => {
  return (
    <>
     <div className="flex items-center bg-brand-chip border border-brand-borderChip rounded-full px-3 py-1.5 text-brand-faint">
        <p><Dot className={skill.color} size={36}/></p>
        <p>{skill.skill}</p>
     </div>
    </>
  )
}

export default Skills
