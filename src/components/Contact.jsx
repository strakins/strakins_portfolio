import { useState } from "react";
import emailjs from "@emailjs/browser";
import { IoIosArrowDown } from "react-icons/io";


const EMAILJS_SERVICE = "service_jwv2pda";
const EMAILJS_TEMPLATE = "template_2upp4pm";
const EMAILJS_KEY = "QrbMuqvVpLc4ePRF7";

const ROLES = [
  "Frontend Developer",
  "React Developer",
  "Full-Stack Developer",
  "UI Engineer",
  "Other",
];

const FAQ = [
  {
    q: "Are you open to remote roles?",
    a: "Yes — 100%. I've worked asynchronously across timezones before and I'm comfortable with remote-first culture. I'm also open to on-site or hybrid roles within Nigeria.",
  },
  {
    q: "What notice period do you need?",
    a: "I'm currently available immediately. I can start as soon as any onboarding requires.",
  },
  {
    q: "Do you take freelance work alongside a full-time role?",
    a: "For now I'm focused on finding the right full-time position. Once settled, I'm open to occasional freelance if it doesn't conflict with my employer.",
  },
  {
    q: "What's your preferred stack?",
    a: "React / Next.js on the frontend, TypeScript, Tailwind CSS. Happy to adapt to whatever your team uses — I pick up new tools quickly.",
  },
];

const SendIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [openFaq, setOpenFaq] = useState(null);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, form, EMAILJS_KEY);
      setStatus("success");
      setForm({ name: "", email: "", company: "", role: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-slate-800 border border-slate-700 focus:border-blue-400/60 focus:ring-2 focus:ring-blue-400/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 outline-none transition-all duration-200";

  return (
    <main id="contact" aria-label="Contact Blessing Akinola">
      {/* header */}
      <section className="bg-slate-950 pt-28 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
            Get in touch
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight max-w-2xl mb-6">
            Let's talk about your team and what you're building.
          </h1>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Whether you're hiring for a frontend role or want to discuss a project — I'm
            happy to have the conversation. I'll usually reply within 24 hours.
          </p>
        </div>
      </section>

      {/* main grid */}
      <section className="bg-slate-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">

          {/* ── Form (3 cols) ── */}
          <div className="lg:col-span-3">
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">Send me a message</h2>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center mb-4 text-2xl">
                    ✓
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">Message received!</h3>
                  <p className="text-slate-400 text-sm max-w-xs">
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-blue-400 text-sm hover:text-blue-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-slate-400 text-xs font-medium mb-1.5">
                        Your name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={set("name")}
                        placeholder="Jane Smith"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-400 text-xs font-medium mb-1.5">
                        Work email <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={set("email")}
                        placeholder="jane@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-slate-400 text-xs font-medium mb-1.5">
                        Company
                      </label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={set("company")}
                        placeholder="Acme Inc. (optional)"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-slate-400 text-xs font-medium mb-1.5">
                        Role you're hiring for
                      </label>
                      <select
                        id="role"
                        value={form.role}
                        onChange={set("role")}
                        className={inputClass}
                      >
                        <option value="">Select a role…</option>
                        {ROLES.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-slate-400 text-xs font-medium mb-1.5">
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={set("message")}
                      placeholder="Tell me about the role, your team, what you're building — anything helps me respond usefully."
                      className={inputClass}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-400 text-sm bg-red-400/5 border border-red-400/20 rounded-lg px-4 py-3">
                      Something went wrong. Try emailing me directly at{" "}
                      <a href="mailto:akinolablessing25@gmail.com" className="underline">
                        akinolablessing25@gmail.com
                      </a>
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-blue-400 hover:bg-blue-300 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 font-bold py-3.5 rounded-xl text-sm transition-all duration-200 hover:scale-[1.02]"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        <SendIcon /> Send message
                      </>
                    )}
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    I typically respond within 24 hours on weekdays.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* ── Sidebar (2 cols) ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* quick links */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-white font-bold mb-4">Reach me directly</h3>
              <div className="space-y-3">
                {[
                  {
                    label: "Email",
                    value: "akinolablessing25@gmail.com",
                    href: "mailto:akinolablessing25@gmail.com",
                    icon: "✉️",
                  },
                  {
                    label: "WhatsApp",
                    value: "+234 706 300 3993",
                    href: "https://wa.me/2347063003993?text=Hi%20Blessing,%20I%20saw%20your%20portfolio%20and%20I%20have%20a%20role%20to%20discuss.",
                    icon: "💬",
                  },
                  {
                    label: "Schedule a call",
                    value: "Book 30 mins on Calendly",
                    href: "https://calendly.com/akinolablessing25/30min",
                    icon: "📅",
                  },
                  {
                    label: "LinkedIn",
                    value: "blessing-akinola",
                    href: "https://www.linkedin.com/in/blessing-akinola-a567a4389/",
                    icon: "🔗",
                  },
                ].map(({ label, value, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800 transition-colors group"
                  >
                    <span className="text-lg w-8 text-center">{icon}</span>
                    <div className="min-w-0">
                      <p className="text-slate-500 text-[10px] uppercase tracking-wider">{label}</p>
                      <p className="text-slate-300 group-hover:text-white text-xs font-medium truncate transition-colors">
                        {value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* availability */}
            <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                </span>
                <p className="text-blue-400 text-sm font-bold">Currently available</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm actively looking for a web developer role. Open to remote, hybrid, or
                on-site positions. Available to start immediately.
              </p>
            </div>

            {/* CV download */}
            <a
              href="https://drive.google.com/file/d/1oj8jtHyqaeNdBYetv9rrxW25yzemCbwY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full bg-slate-950 border border-slate-700 hover:border-blue-400/40 rounded-2xl p-5 transition-all group"
            >
              <div>
                <p className="text-white font-bold text-sm group-hover:text-blue-400 transition-colors">
                  Download my CV
                </p>
                <p className="text-slate-500 text-xs mt-0.5">PDF · Updated 2025</p>
              </div>
              <span className="text-slate-400 group-hover:text-blue-400 transition-colors text-lg">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-950 py-16 px-6" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Common questions</h2>
          <div className="space-y-3">
            {FAQ.map(({ q, a }, i) => (
              <div
                key={i}
                className="border border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left text-sm font-medium text-white hover:text-blue-400 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  {q}
                  <span
                    className={`text-slate-500 transition-transform duration-200 ml-4 flex-shrink-0 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  >
                    <IoIosArrowDown />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-400 text-sm leading-relaxed">{a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
