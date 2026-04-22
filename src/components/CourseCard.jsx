

const CourseCard = ({ course, onEnroll }) => (
  <div
    className="group relative flex flex-col rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    style={{
      background: "linear-gradient(160deg, #0f172a 0%, #0c1424 100%)",
      border: "2px solid #1e293b",
    }}
  >
    {/* Coloured accent line at the top */}
    <div
      className="h-0.5 w-full"
      style={{
        background: `linear-gradient(90deg, ${course.accentFrom}, ${course.accentTo})`,
      }}
    />

    {/* Hover glow */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      style={{
        background: `radial-gradient(ellipse at top left, ${course.accentFrom}12 0%, transparent 60%)`,
      }}
    />

    <div className="flex flex-col flex-1 p-7 relative">
      {/* Icon + badge row */}
      <div className="flex items-start justify-between mb-5">
        <span className="text-3xl" role="img" aria-label={course.title}>
          {/* {course.icon} */}
        </span>
        <span
          className="text-xs font-bold px-3 py-1 rounded-full"
          style={{
            background: `${course.accentFrom}18`,
            color: course.accentFrom,
            border: `1px solid ${course.accentFrom}30`,
          }}
        >
          {course.badge}
        </span>
      </div>

      {/* Title & tagline */}
      <h3 className="text-white font-bold text-xl mb-1 leading-tight">
        {course.title}
      </h3>
      <p className="text-xs font-medium mb-4" style={{ color: course.accentFrom }}>
        {course.tagline}
      </p>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed mb-6">
        {course.description}
      </p>

      {/* Highlights list */}
      <ul className="space-y-2 mb-6 flex-1">
        {course.highlights.map((h) => (
          <li key={h} className="flex items-center gap-2 text-sm text-slate-300">
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: course.accentFrom }}
            />
            {h}
          </li>
        ))}
      </ul>

      {/* Duration / format meta */}
      <div className="flex gap-4 mb-6 text-xs text-slate-500">
        <span>⏱ {course.duration}</span>
        <span>📡 {course.format}</span>
      </div>

      {/* CTA */}
      <button
        onClick={() => onEnroll(course)}
        className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
        style={{
          background: `linear-gradient(90deg, ${course.accentFrom}, ${course.accentTo})`,
        }}
      >
        Apply for this course 
      </button>
    </div>
  </div>
);

export default CourseCard;