
const ServicesCTA = ({ onEnroll }) => (
  <section className="py-16 px-6">
    <div className="max-w-3xl mx-auto">
      <div
        className="rounded-2xl p-10 text-center"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
          border: "1px solid rgba(99,102,241,0.25)",
        }}
      >
        <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
          Not sure which track to pick?
        </p>
        <h2 className="text-3xl font-extrabold text-white mb-3">
          Let's figure it out together
        </h2>
        <p className="text-slate-400 text-sm mb-7 max-w-md mx-auto">
          Drop your details and I'll reach out to provide right recommendations
          based on your goals and current skill level.
        </p>
        <button
          onClick={() => onEnroll(null)}
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-white text-sm transition-all hover:opacity-90 active:scale-95"
          style={{ background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }}
        >
          Get a free recommendation 
        </button>
      </div>
    </div>
  </section>
);

export default ServicesCTA;