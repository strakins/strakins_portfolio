import { useState } from "react";
import { Link } from "react-router-dom";
import POS from "../assets/images/pos.png";
import OMIFEM from "../assets/images/omifem_cuts.png";
import ENTITY from "../assets/images/Entityblock.png";
import { FaArrowDown, FaArrowRight, FaGithub } from "react-icons/fa";

const PROJECTS = [
  {
    id: "pos",
    img: POS,
    title: "POS & Inventory Management System",
    category: "Business Tool",
    summary:
      "A local retail business was tracking stock in a spreadsheet and losing money to manual errors. I built them a full POS system with real-time inventory updates, role-based staff access, and a dashboard that shows daily sales at a glance.",
    challenge:
      "The owner needed something their non-technical staff could actually use — so the UX had to be simple enough for someone who'd never used software before, while powerful enough to replace a spreadsheet workflow that had years of inertia.",
    stack: ["React", "Node.js", "MongoDB", "Firebase", "Chart.js"],
    metrics: [
      { value: "30%", label: "Faster checkout" },
      { value: "20%", label: "Fewer stockouts" },
      { value: "0", label: "Manual count errors" },
    ],
    liveUrl: "pos-amber-eight.vercel.app", // private client project
    githubUrl: "https://github.com/strakins/mini-mart-inv",
    tag: "Personal Project",
  },
  {
    id: "omifem",
    img: OMIFEM,
    title: "OmifemCuts Fashion Platform",
    category: "E-commerce",
    summary:
      "A mobile-first e-commerce platform for a fashion brand. Customers browse collections, get real-time pricing, and complete orders — all while the business owner manages inventory from a simple admin panel.",
    challenge:
      "Most customers were on low-end Android phones with spotty data. The site had to load fast, work on small screens first, and still look premium enough to convert fashion shoppers.",
    stack: ["React Native", "Firebase", "WhatsApp API", "Stripe"],
    metrics: [
      { value: "40%", label: "Engagement increase" },
      { value: "<2s", label: "Load time on 3G" },
      { value: "Mobile", label: "First UX" },
    ],
    liveUrl: "https://omifemcuts.xyz",
    githubUrl: "https://github.com/strakins/omifemcuts",
    tag: "Client Work",
  },
  {
    id: "entity",
    img: ENTITY,
    title: "Web3 Event Ticketing Platform",
    category: "Blockchain",
    summary:
      "A decentralized ticketing platform where event tickets are issued as NFTs, eliminating counterfeit tickets and reducing resale fraud. Users connect a wallet, buy tickets, and get verifiable proof of ownership on-chain.",
    challenge:
      "Web3 UX is notoriously rough. My job was to hide the blockchain complexity from end users — making wallet connection, ticket purchase, and event check-in feel as simple as buying a ticket on Eventbrite.",
    stack: ["React", "Solidity", "Web3.js", "Node.js", "IPFS"],
    metrics: [
      { value: "0", label: "Fraud incidents" },
      { value: "NFT", label: "Verified tickets" },
      { value: "Lower", label: "Commission fees" },
    ],
    liveUrl: "https://entity-block-backend.vercel.app/",
    githubUrl: "https://github.com/strakins/entityBlock",
    tag: "Client Work",
  },
];

// const ArrowIcon = () => (
//   <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
//     <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
//   </svg>
// );

// const GitHubIcon = () => (
//   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
//     <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
//   </svg>
// );

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article
      className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col"
      aria-label={project.title}
    >
      {/* image */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <img
          src={project.img}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-slate-950/80 backdrop-blur text-blue-400 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
            {project.category}
          </span>
          <span className="bg-slate-950/80 backdrop-blur text-slate-400 text-[10px] font-medium px-2.5 py-1 rounded-full">
            {project.tag}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h2 className="text-white font-bold text-lg mb-3 leading-snug">{project.title}</h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.summary}</p>

        {/* expandable challenge */}
        <button
          onClick={() => setExpanded((v) => !v)}
          className="text-blue-400 text-xs font-medium flex items-center gap-1 mb-4 hover:text-blue-300 transition-colors w-fit"
          aria-expanded={expanded}
        >
          {expanded ? "Hide" : "Read"} the challenge
          <span className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}> <FaArrowDown /> </span>
        </button>
        {expanded && (
          <p className="text-slate-400 text-sm leading-relaxed mb-4 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
            <strong className="text-slate-300 font-semibold">The challenge: </strong>
            {project.challenge}
          </p>
        )}

        {/* metrics */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          {project.metrics.map(({ value, label }) => (
            <div key={label} className="text-center bg-slate-800/60 rounded-xl py-3">
              <p className="text-blue-400 font-black text-lg leading-none">{value}</p>
              <p className="text-slate-500 text-[10px] mt-1 leading-tight">{label}</p>
            </div>
          ))}
        </div>

        {/* stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 bg-slate-800 border border-slate-700 text-slate-400 text-xs rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="flex gap-3 mt-auto">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-slate-50 font-bold text-sm py-2.5 rounded-xl transition-all hover:scale-105"
            >
              Live demo <FaArrowRight />
            </a>
          ) : (
            <span className="flex-1 flex items-center justify-center text-slate-600 text-xs bg-slate-800 rounded-xl py-2.5">
              Private client project
            </span>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${project.title}`}
            className="flex items-center justify-center gap-2 border border-slate-700 hover:border-blue-400/40 text-slate-400 hover:text-white px-4 rounded-xl transition-all"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </article>
  );
};

const Projects = () => (
  <main id="projects" aria-label="Projects by Blessing Akinola">
    {/* header */}
    <section className="bg-slate-950 pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
          My work
        </p>
        <h1 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-3xl mb-6">
          Projects I've shipped with context, not just screenshots.
        </h1>
        <p className="text-slate-400 max-w-2xl leading-relaxed">
          Every project here was built for a real use case. I've included what the problem
          actually was, what made it tricky, and what the outcome looked like — because a
          screenshot doesn't tell you much on its own.
        </p>
      </div>
    </section>

    {/* grid */}
    <section className="bg-slate-700 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>

    {/* more on github */}
    <section className="bg-slate-950 py-16 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-slate-400 mb-2 text-sm">These are my three featured projects.</p>
        <h2 className="text-2xl font-bold text-white mb-6">
          Would you love to see more builds? Visit my GitHub.
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/strakins"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-slate-700 hover:border-blue-400/40 text-slate-300 hover:text-white font-medium px-6 py-3 rounded-xl text-sm transition-all"
          >
            <FaGithub className="h-5 w-5" /> View GitHub profile
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-blue-400 hover:bg-blue-300 text-slate-50 font-bold px-6 py-3 rounded-xl text-sm transition-all hover:scale-105"
          >
            Discuss a project <FaArrowRight />
          </Link>
        </div>
      </div>
    </section>
  </main>
);

export default Projects;
