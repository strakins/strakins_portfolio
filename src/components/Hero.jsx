import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import hero from "../assets/images/hero.png";

/* ── tiny animated counter hook ── */
const useCounter = (end, duration = 1600, start = false) => {
  const ref = useRef(null);
  useEffect(() => {
    if (!start || !ref.current) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      ref.current.textContent = Math.floor(progress * end);
      if (progress < 1) requestAnimationFrame(step);
      else ref.current.textContent = end;
    };
    requestAnimationFrame(step);
  }, [end, duration, start]);
  return ref;
};

const STACK = ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js", "Firebase"];

const Hero = () => {
  const sectionRef = useRef(null);
  const visible = useRef(false);

  /* trigger counter once section is in view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible.current) {
          visible.current = true;
          observer.disconnect();
          /* manually fire count animation */
          document.querySelectorAll("[data-count]").forEach((el) => {
            const end = parseInt(el.dataset.count, 10);
            let start = null;
            const step = (ts) => {
              if (!start) start = ts;
              const p = Math.min((ts - start) / 1400, 1);
              el.textContent = Math.floor(p * end);
              if (p < 1) requestAnimationFrame(step);
              else el.textContent = end;
            };
            requestAnimationFrame(step);
          });
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      aria-label="Blessing Akinola - Frontend Developer"
      className="relative min-h-screen bg-slate-950 flex items-center overflow-hidden"
    >
      {/* ── background grid ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* ── blue glow ── */}
      <div
        aria-hidden="true"
        className="absolute top-[-200px] right-[-100px] w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #fbbf24 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── left: copy ── */}
          <div>
            {/* availability pill */}
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-blue-400 text-xs font-medium px-3 py-1.5 rounded-full mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-300" />
              </span>
              Open to work · Available immediately
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[3.4rem] font-black text-white leading-[1.1] tracking-tight mb-6">
              I build fast,{" "}
              <span className="text-blue-400">accessible</span>{" "}
              web interfaces
              <br className="hidden lg:block" /> people actually enjoy.
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
              Hi, I'm <strong className="text-white font-semibold">Blessing Akinola</strong> — a
              frontend developer based in Osogbo, Nigeria. I turn Figma designs and product ideas
              into clean, performant React and Next.js applications. I care about the details that
              make applications work.
            </p>

            {/* stack pills */}
            <div className="flex flex-wrap gap-2 mb-10" aria-label="Tech stack">
              {STACK.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-300 text-slate-50 font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-400/20"
              >
                Let's work together 
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl text-sm transition-all duration-200"
              >
                See my work
              </Link>
            </div>

            {/* social row */}
            <div className="flex items-center gap-6 mt-10">
              {[
                { label: "GitHub", href: "https://github.com/strakins", icon: "M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" },
                { label: "LinkedIn", href: "https://www.linkedin.com/in/blessing-akinola-a567a4389/", icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" },
                { label: "Twitter", href: "https://twitter.com/straksman", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit Blessing's ${label} profile`}
                  className="text-slate-500 hover:text-blue-400 transition-colors duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
                  </svg>
                </a>
              ))}
              <span className="w-px h-4 bg-slate-700" />
              <a
                href="https://drive.google.com/file/d/1oj8jtHyqaeNdBYetv9rrxW25yzemCbwY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white text-xs font-medium transition-colors"
              >
                Download CV 
              </a>
            </div>
          </div>

          {/* ── right: photo + stats ── */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="relative">
              {/* decorative ring */}
              <div className="absolute -inset-3 rounded-3xl border border-blue-400/20 rotate-3" aria-hidden="true" />
              <img
                src={hero}
                alt="Blessing Akinola, Frontend Developer based in Osogbo Nigeria"
                width={400}
                height={480}
                className="relative w-72 md:w-80 lg:w-[360px] rounded-2xl object-cover shadow-2xl"
                loading="eager"
              />
              {/* floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-slate-400 text-[10px] uppercase tracking-widest mb-0.5">Currently</p>
                <p className="text-white text-sm font-semibold">Seeking Frontend Role</p>
              </div>
            </div>

            {/* stats row */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              {[
                { count: 4, suffix: "+", label: "Years coding" },
                { count: 10, suffix: "+", label: "Projects shipped" },
                { count: 3, suffix: "+", label: "Happy clients" },
              ].map(({ count, suffix, label }) => (
                <div
                  key={label}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-4 text-center"
                >
                  <p className="text-blue-400 text-xl font-black">
                    <span data-count={count}>0</span>
                    {suffix}
                  </p>
                  <p className="text-slate-500 text-[11px] mt-0.5 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600" aria-hidden="true">
        <span className="text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
