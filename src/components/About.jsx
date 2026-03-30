import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import aboutImg from "../assets/images/work_area.jpg";

const TIMELINE = [
  {
    year: "2020",
    title: "Started the journey",
    desc: "Wrote my first lines of HTML and CSS out of curiosity. Quickly fell into JavaScript and never looked back.",
  },
  {
    year: "2021",
    title: "Discovered React",
    desc: "Rebuilt a local business's static site in React. The component model clicked immediately — I was hooked.",
  },
  {
    year: "2023",
    title: "Went full-stack and First Client",
    desc: "Added Node.js, Firebase, and MongoDB to the toolkit. Started shipping end-to-end features independently.",
  },
  {
    year: "2025",
    title: "Second major clients",
    desc: "Built a fashion e-commerce app (OmifemCuts) and a POS system for a retail business. Learned that real users break everything in interesting ways.",
  },
  {
    year: "2024 till Now",
    title: "Focused on craft",
    desc: "Diving deep into Next.js App Router, TypeScript, and performance. Building things that are fast by default, not by accident.",
  },
];

const VALUES = [
  {
    icon: "⚡",
    title: "Performance first",
    desc: "A slow site is a broken site. I obsess over Core Web Vitals, bundle size, and render performance before shipping anything.",
  },
  {
    icon: "♿",
    title: "Accessibility matters",
    desc: "Every user deserves a working interface. I write semantic HTML, test with a keyboard, and check contrast ratios — not as an afterthought.",
  },
  {
    icon: "🧹",
    title: "Readable code",
    desc: "I write code for the next developer, not just the machine. Clear naming, small functions, and obvious structure save hours down the line.",
  },
  {
    icon: "🤝",
    title: "Genuine collaboration",
    desc: "I ask questions early, communicate blockers fast, and push back when something doesn't make sense. Quiet disagreement doesn't help anyone.",
  },
];

const About = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove("opacity-0", "-translate-x-6");
          }
        });
      },
      { threshold: 0.15 }
    );
    const items = timelineRef.current?.querySelectorAll("[data-timeline]");
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="about" aria-label="About Blessing Akinola">
      {/* ── Hero banner ── */}
      <section className="bg-slate-950 pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
            About me
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl">
            A Web developer who cares about the{" "}
            <span className="text-blue-400">details</span> most people skip.
          </h1>
        </div>
      </section>

      {/* ── Bio + image ── */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={aboutImg}
              alt="Blessing Akinola working at his desk"
              className="rounded-2xl w-full object-cover shadow-2xl"
              loading="lazy"
            />
            {/* floating chip */}
            <div className="absolute -top-4 -right-4 bg-blue-400 text-slate-950 rounded-xl px-4 py-2 font-bold text-sm shadow-lg rotate-2">
              Based in Osogbo, 🇳🇬
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Hi, I'm Blessing, nice to meet you.
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-justify">
              <p>
                I've been building for the web since 2020, and I genuinely enjoy it. Its not just
                the output, but the actual process of solving layout problems, debugging weird
                state bugs and figuring out why a component re-renders one too many times.
              </p>
              <p>
                My background is in React and Next.js, with a strong eye for UI detail. I've
                worked on everything from a POS system for a local retail business to a Web3
                ticketing platform. What ties them together is that I treat every project like
                real users will depend on it, because they actually do.
              </p>
              <p>
                Right now I'm looking for a <strong className="text-white italic">web developer
                role</strong> where I can contribute to a product. I believe in team work and 
                writing quality code backed with consistent growth. I work well remotely and I'm used to
                flexible timezones.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link
                to="/contact"
                className="bg-blue-400 hover:bg-blue-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105"
              >
                Get in touch
              </Link>
              <a
                href="https://drive.google.com/file/d/1oj8jtHyqaeNdBYetv9rrxW25yzemCbwY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-700 hover:border-blue-400/50 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl text-sm transition-all"
              >
                Download CV 
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── How I work (values) ── */}
      <section className="bg-slate-950 py-20 px-6" aria-label="My working values">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              How I work
            </p>
            <h2 className="text-3xl font-bold text-white">
              Things I genuinely believe about building software
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {VALUES.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-colors"
              >
                <div className="text-2xl mb-4">{icon}</div>
                <h3 className="text-white font-bold mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-slate-900 py-20 px-6" aria-label="Career timeline">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              The journey
            </p>
            <h2 className="text-3xl font-bold text-white">How I got here</h2>
          </div>

          <div ref={timelineRef} className="relative">
            {/* vertical line */}
            <div className="absolute left-6 top-2 bottom-2 w-px bg-slate-700" aria-hidden="true" />

            <div className="space-y-10">
              {TIMELINE.map(({ year, title, desc }, i) => (
                <div
                  key={year}
                  data-timeline
                  className="relative pl-16 opacity-0 -translate-x-6 transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  {/* dot */}
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-blue-400 border-4 border-slate-900 -translate-x-1/2" aria-hidden="true" />
                  <p className="text-blue-400 text-xs font-bold tracking-widest uppercase mb-1">
                    {year}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-slate-950 py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sounds like someone you'd want on the team?
          </h2>
          <p className="text-slate-400 mb-8">
            I'd love to hear about what you're building. Even if the timing isn't right, let's
            connect.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-300 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            Let's talk 
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;
