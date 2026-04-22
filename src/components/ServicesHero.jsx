import React from 'react'

const ServicesHero = () => {
  return (
   <section className="pt-28 pb-4 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
        Training & courses
      </p>
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
          Learn to build, {" "}
          <span
            style={{
              background: "linear-gradient(90deg, #60a5fa, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Ship and Delpoy Solutions for Business.
          </span>
        </h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          Our courses designed around hands-on projects.
        </p>
      </div>
    </div>
  </section>
  )
}

export default ServicesHero
