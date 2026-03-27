import { Link } from "react-router-dom";
import { IoMdChatbubbles } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { FaComments } from "react-icons/fa6";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaArrowCircleRight } from "react-icons/fa";


const SKILL_GROUPS = [
  {
    label: "Core",
    heading: "What I build with every day",
    skills: [
      { name: "React", note: "My primary framework. Hooks, context, custom hooks, performance optimisation." },
      { name: "Next.js", note: "App Router, SSR, SSG, ISR, server components, route handlers." },
      { name: "TypeScript", note: "Strict mode, generics, utility types, discriminated unions." },
      { name: "Tailwind CSS", note: "Design systems, responsive layouts, component variants." },
      { name: "JavaScript (ES2022+)", note: "Async/await, modules, closures, the event loop." },
      { name: "HTML & CSS", note: "Semantic markup, accessibility, animations, grid & flexbox." },
    ],
  },
  {
    label: "Backend & Data",
    heading: "Enough to be self-sufficient",
    skills: [
      { name: "Node.js / Express", note: "REST APIs, middleware, authentication." },
      { name: "Firebase", note: "Firestore, Auth, Storage, Realtime Database." },
      { name: "MongoDB", note: "Schema design, aggregation pipelines, Mongoose." },
      { name: "REST APIs", note: "Design, versioning, error handling, rate limiting." },
    ],
  },
  {
    label: "Tooling & Workflow",
    heading: "How I work efficiently",
    skills: [
      { name: "Git & GitHub", note: "Branching strategies, PRs, code review workflow." },
      { name: "Vite", note: "Fast dev server, plugin ecosystem, build optimisation." },
      { name: "Figma", note: "Reading designs, exporting assets, prototyping basic flows." },
      { name: "Vercel / Netlify", note: "Deployments, environment variables, preview URLs." },
      { name: "ESLint & Prettier", note: "Consistent code style across projects." },
    ],
  },
  {
    label: "Expanding",
    heading: "Currently learning & exploring",
    skills: [
      { name: "React Native", note: "Cross-platform mobile apps. Built OmifemCuts with it." },
      { name: "Web3 / Solidity", note: "Smart contracts, wallet integration, IPFS." },
      { name: "Testing (Vitest / RTL)", note: "Unit tests, component tests, testing-library best practices." },
      { name: "PostgreSQL", note: "SQL fundamentals, relational data modelling, Prisma ORM." },
    ],
  },
];

const SOFT_SKILLS = [
  { icon: <IoMdChatbubbles/> , title: "Clear communication", desc: "I write concise updates, ask questions before making assumptions, and flag blockers early." },
  { icon: < IoMdSearch />, title: "Attention to detail", desc: "Pixel alignment, contrast ratios, edge cases; I notice things that slip through review." },
  { icon: < FaBookOpenReader/>, title: "Fast learner", desc: "I picked up React Native for Taxlator App." },
  { icon: <FaComments />, title: "Feedback-driven", desc: "I don't get precious about code. If there's a better way, I want to know and I'll say the same in return." },
];

/* ── Sub-components ────────────────────────────────────── */
const SkillCard = ({ name, note }) => (
  <div className="group bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-400/20 rounded-xl p-4 transition-all duration-200">
    <p className="text-white font-semibold text-sm mb-1 group-hover:text-blue-400 transition-colors">
      {name}
    </p>
    <p className="text-slate-500 text-xs leading-relaxed">{note}</p>
  </div>
);

const SkillGroup = ({ label, heading, skills }) => (
  <section aria-labelledby={`group-${label}`} className="mb-16">
    <div className="flex items-baseline gap-3 mb-2">
      <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">{label}</span>
    </div>
    <h2 id={`group-${label}`} className="text-xl font-bold text-white mb-6">
      {heading}
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {skills.map((skill) => (
        <SkillCard key={skill.name} {...skill} />
      ))}
    </div>
  </section>
);

/* ── Page ──────────────────────────────────────────────── */
const Skills = () => (
  <main id="skills" aria-label="Skills of Blessing Akinola, Frontend Developer">
    {/* header */}
    <section className="bg-slate-950 pt-28 pb-2 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
          Skills & tools
        </p>
      </div>
    </section>

    {/* skill groups */}
    <section className="bg-slate-950 py-4 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {SKILL_GROUPS.map((group) => (
          <SkillGroup key={group.label} {...group} />
        ))}
      </div>
    </section>

    {/* soft skills */}
    <section
      className="bg-slate-900 py-20 px-6"
      aria-label="Working style and soft skills"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
            My Working style
          </p>
          <h2 className="text-3xl font-bold text-white">
            The stuff that doesn't show up in a tech stack list
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {SOFT_SKILLS.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 bg-slate-800/40 border border-slate-700 rounded-2xl p-6"
            >
              <span className="text-2xl flex-shrink-0"> {icon} </span>
              <div>
                <h3 className="text-white font-bold mb-1">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* learning note */}
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="bg-blue-400/5 border border-blue-400/20 rounded-2xl p-8">
          <p className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-3">
            A note on growth
          </p>
          <p className="text-slate-300 leading-relaxed mb-2">
            I learn best by building real things. Every project I've shipped; pushed me
            into at least one new area React Native, smart contracts, real-time databases.
            I don't wait until I feel "ready" because that moment never comes.
          </p>
          <p className="text-slate-400 text-sm">
            If you need someone who can own a feature end to end and figure out the gaps
            along the way, that's exactly how I've worked in every project so far.
          </p>
        </div>
      </div>
    </section>
  </main>
);

export default Skills;
