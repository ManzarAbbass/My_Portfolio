const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

      {/* Row 1 — Hero Text */}
      <div className="md:col-span-7 bg-brand-cell rounded-xl p-6">
        Hero text yahan
      </div>

      {/* Row 1 — Avatar */}
      <div className="md:col-span-5 bg-brand-dark rounded-xl p-6">
        Avatar yahan
      </div>

      {/* Row 2 — About Me */}
      <div className="md:col-span-4 bg-brand-dark rounded-xl p-6">
        About me yahan
      </div>

      {/* Row 2 — Stats Counter */}
      <div className="md:col-span-8 bg-brand-cell rounded-xl p-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

          <div className="bg-brand-dark rounded-xl p-4 text-center">
            <p className="text-brand-light text-2xl font-medium">5+</p>
            <p className="text-brand-faint text-xs mt-1">Projects</p>
          </div>

          <div className="bg-brand-dark rounded-xl p-4 text-center">
            <p className="text-brand-light text-2xl font-medium">3+</p>
            <p className="text-brand-faint text-xs mt-1">Months</p>
          </div>

          <div className="bg-brand-dark rounded-xl p-4 text-center">
            <p className="text-brand-light text-2xl font-medium">2</p>
            <p className="text-brand-faint text-xs mt-1">Tech stacks</p>
          </div>

          <div className="bg-brand-dark rounded-xl p-4 text-center border-b border-brand-border">
            <p className="text-brand-light text-2xl font-medium">100%</p>
            <p className="text-brand-faint text-xs mt-1">Dedication</p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Hero
