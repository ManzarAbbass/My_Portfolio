const ProjectCards = ({cardinfo}) => {
  return (
    <div className="p-4 sm:p-5 md:p-4 bg-brand-cell border border-brand-border-chip rounded-xl flex flex-col items-center justify-center gap-3 hover:shadow-lg transition-transform hover:scale-105">
      
      {/* Image */}
      <img 
        src={cardinfo.projectImg} 
        alt="Projectimg" 
        className="h-32 sm:h-40 md:h-36 object-cover rounded-lg" 
      />

      {/* Title */}
      <h2 className="text-white text-sm sm:text-base md:text-lg font-bold">
        {cardinfo.projectName}
      </h2>

      {/* Info */}
      <p className="text-brand-faint text-xs sm:text-sm md:text-base text-center">
        {cardinfo.projectinfo}
      </p>

      {/* Tech Stack */}
      <div className="flex gap-2 flex-wrap">
        <span className="bg-brand-chip border border-brand-border-chip rounded-xl px-3 py-1 text-xs sm:text-sm md:text-sm text-brand-faint">
          {cardinfo.projectStack1}
        </span>
        <span className="bg-brand-chip rounded-xl px-3 py-1 text-xs sm:text-sm md:text-sm text-brand-faint">
          {cardinfo.projectStack2}
        </span>
      </div>

      {/* Links */}
      <div className="flex gap-2 mt-2">
        {cardinfo.liveDemo && (
          <a 
            href={cardinfo.liveDemo} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-accent text-white px-2 sm:px-3 py-1 sm:py-2 rounded-xl text-xs sm:text-sm md:text-sm hover:bg-brand-accent/80"
          >
            Live Demo
          </a>
        )}
        {cardinfo.githubLink && (
          <a 
            href={cardinfo.githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-brand-accent text-white px-2 sm:px-3 py-1 sm:py-2 rounded-xl text-xs sm:text-sm md:text-sm hover:bg-brand-accent/80"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}


export default ProjectCards
