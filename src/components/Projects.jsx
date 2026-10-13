import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Layers,
  FileText,
  Sparkles,
  Maximize2,
  CheckCircle2,
  ChevronRight,
  Compass,
} from "lucide-react";
import { caseStudiesData } from "../data/caseStudiesData";
import CaseStudyModal from "./CaseStudyModal";

// Secondary Engineering projects data
const engineeringProjects = [
  {
    num: "04",
    name: "Code Logic Validator",
    tagline: "AI Orchestration Logic Evaluation Engine",
    description:
      "Educational AI agent evaluating problem-solving logic in plain text without revealing solutions. Spring Boot & LLM APIs.",
    tech: ["Java", "Spring Boot", "LLM APIs", "MongoDB"],
    github: "https://github.com/NITHEESHRAMASAMY",
    live: "https://github.com/NITHEESHRAMASAMY",
  },
  {
    num: "05",
    name: "Techiegram",
    tagline: "Short Technical Video Reels Platform",
    description:
      "Web platform to share short technical video reels with categorization, likes, and responsive mobile-first UI.",
    tech: ["React", "JavaScript", "REST APIs", "Tailwind"],
    github: "https://github.com/NITHEESHRAMASAMY",
    live: "https://github.com/NITHEESHRAMASAMY",
  },
  {
    num: "06",
    name: "Smart Leaf Scanner",
    tagline: "CNN Plant Disease Detection System",
    description:
      "Interactive CNN-based disease classifier achieving over 96% accuracy with sub-2s inference time.",
    tech: ["Python", "TensorFlow", "OpenCV", "Streamlit"],
    github: "https://github.com/NITHEESHRAMASAMY",
    live: "https://github.com/NITHEESHRAMASAMY",
  },
];

export default function Projects() {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeHoverIdx, setActiveHoverIdx] = useState(0);

  const openCaseStudy = (study) => {
    setSelectedCaseStudy(study);
    setModalOpen(true);
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-28 px-6 md:px-12 border-t border-neutral-900 bg-black flex flex-col justify-between relative blueprint-grid"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-xs text-accent tracking-[0.3em] uppercase flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            [ PRIMARY FOCUS // UI & UX DESIGN ]
          </span>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-bold tracking-tight text-white uppercase leading-none">
            CASE STUDIES
          </h2>
          <p className="text-neutral-400 font-sans text-sm md:text-base leading-relaxed mt-2">
            Selected Product Design, Spatial UX, and Speculative Architecture case studies. Click any project card to open and scroll through the complete interactive case study decks.
          </p>
        </div>

        {/* Quick Instructions badge */}
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-400 border border-neutral-800 bg-neutral-950/80 px-4 py-2.5 rounded-xl">
          <Layers size={14} className="text-accent" />
          <span>3 Complete Case Studies • 10-Page Interactive Decks</span>
        </div>
      </div>

      {/* 3 PRIMARY UI/UX CASE STUDY CARDS */}
      <div className="grid grid-cols-1 gap-12 w-full mb-24">
        {caseStudiesData.map((project, idx) => {
          const isForma = project.id === "forma";
          const isNexus = project.id === "nexus";

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              onClick={() => openCaseStudy(project)}
              className="group relative cursor-pointer rounded-2xl border border-neutral-800 bg-gradient-to-b from-neutral-950/80 to-black hover:border-accent/40 transition-all duration-500 overflow-hidden shadow-2xl p-6 sm:p-8 md:p-12 hover:shadow-accent/5"
            >
              {/* Subtle accent hover highlight bar */}
              <div
                className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700 ease-out"
                style={{ backgroundColor: project.theme.accent }}
              />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left Column: Case Study Specs & Content */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                  {/* Eyebrow & Number */}
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-accent">
                      CASE STUDY {project.num}
                    </span>
                    <span className="font-mono text-xs text-neutral-500 tracking-wider uppercase">
                      {project.category}
                    </span>
                    <span className="text-neutral-700 hidden sm:inline">•</span>
                    <span className="font-mono text-xs text-neutral-500 hidden sm:inline">
                      {project.timeline}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight uppercase group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-lg sm:text-xl font-display font-medium text-neutral-300 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Summary */}
                  <p className="text-neutral-400 font-sans text-sm sm:text-base leading-relaxed max-w-2xl">
                    {project.summary}
                  </p>

                  {/* Deliverables / UX Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.slice(0, 5).map((d) => (
                      <span
                        key={d}
                        className="font-mono text-[10px] tracking-wider text-neutral-300 border border-neutral-800/90 bg-neutral-900/60 px-2.5 py-1 rounded-md"
                      >
                        {d}
                      </span>
                    ))}
                    <span className="font-mono text-[10px] text-accent border border-accent/20 bg-accent/5 px-2 py-1 rounded-md">
                      +{project.pages?.length || 10} Pages
                    </span>
                  </div>

                  {/* Bottom Strip: Stats & CTA Button */}
                  <div className="pt-4 border-t border-neutral-900/80 flex flex-wrap items-center justify-between gap-4">
                    {/* Stats pills */}
                    <div className="flex items-center gap-6">
                      {project.stats.slice(0, 2).map((s, sIdx) => (
                        <div key={sIdx} className="flex flex-col">
                          <span className="font-mono text-lg font-bold text-white">
                            {s.val}
                          </span>
                          <span className="font-mono text-[10px] text-neutral-500 tracking-wider uppercase">
                            {s.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Click CTA button */}
                    <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-black font-mono text-xs font-semibold group-hover:bg-accent group-hover:text-black transition-all duration-300 shadow-md">
                      <span>OPEN FULL CASE STUDY</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Right Column: Interactive Editorial Preview Box */}
                <div className="lg:col-span-5 flex justify-center">
                  <div
                    className="w-full aspect-[4/3] max-w-md rounded-xl p-5 border flex flex-col justify-between transition-all duration-500 group-hover:scale-[1.02] shadow-xl relative overflow-hidden"
                    style={{
                      backgroundColor: project.theme.bg,
                      color: project.theme.text,
                      borderColor: project.theme.border,
                    }}
                  >
                    {/* Preview Top Header */}
                    <div className="flex justify-between items-center text-[10px] font-mono border-b pb-2" style={{ borderColor: project.theme.border }}>
                      <span className="font-bold uppercase tracking-wider">
                        {project.pages[0].section}
                      </span>
                      <span>01 / {String(project.pages?.length || 10).padStart(2, "0")}</span>
                    </div>

                    {/* Inner Mockup View */}
                    <div className="my-auto py-2">
                      <div className="text-[10px] font-mono uppercase tracking-widest opacity-70 mb-1">
                        {project.category}
                      </div>
                      <div className="text-3xl font-display font-bold uppercase leading-none mb-1">
                        {project.title}
                      </div>
                      <div className="text-xs font-sans font-medium line-clamp-2 opacity-85">
                        {project.tagline}
                      </div>

                      {/* Mini preview card */}
                      <div
                        className="mt-4 p-3 rounded-lg border shadow-sm text-left"
                        style={{
                          backgroundColor: project.theme.cardBg,
                          borderColor: project.theme.border,
                        }}
                      >
                        <div className="text-[9px] font-mono opacity-60 uppercase">
                          {isForma
                            ? "WORKSPACE STATUS"
                            : isNexus
                            ? "FEATURED WORLD"
                            : "NEURAL SANCTUARY"}
                        </div>
                        <div className="text-sm font-display font-semibold">
                          {isForma
                            ? "Good morning, Alex."
                            : isNexus
                            ? "Orbit Racers (Season 04)"
                            : "Archiving Human Presence"}
                        </div>

                        {/* Real Screenshot Preview */}
                        {project.heroImage && (
                          <div className="mt-2.5 rounded-md overflow-hidden border border-black/10 dark:border-white/10 h-16 w-full bg-black/30">
                            <img
                              src={project.heroImage}
                              alt={project.title}
                              className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                              loading="lazy"
                            />
                          </div>
                        )}

                        <div className="flex gap-2 mt-2.5">
                          {project.palette.slice(0, 4).map((c, cIdx) => (
                            <span
                              key={cIdx}
                              className="w-3.5 h-3.5 rounded-full border border-black/10 inline-block shadow-xs"
                              style={{ backgroundColor: c.hex }}
                              title={c.name}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Preview Footer */}
                    <div className="flex justify-between items-center text-[9px] font-mono pt-2 border-t" style={{ borderColor: project.theme.border }}>
                      <span className="opacity-70">
                        SCROLL TO EXPLORE ALL {project.pages?.length || 10} PAGES
                      </span>
                      <span className="font-bold">INTERACTIVE DECK ↗</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* SECONDARY SECTION: TECHNICAL & FULL-STACK IMPLEMENTATION */}
      <div className="border-t border-neutral-900 pt-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <span className="font-mono text-xs text-neutral-500 tracking-[0.25em] uppercase">
              [ CODE & SYSTEMS ]
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-white uppercase mt-1">
              Engineering & Prototypes
            </h3>
          </div>
          <p className="font-mono text-xs text-neutral-400">
            Design-to-code execution across Java, Python, and React
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engineeringProjects.map((p) => (
            <div
              key={p.num}
              className="p-6 rounded-xl border border-neutral-900 bg-neutral-950/40 hover:border-neutral-800 flex flex-col justify-between transition-colors group"
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-mono text-xs text-neutral-600">
                    {p.num}
                  </span>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
                <h4 className="font-display font-medium text-lg text-white mb-1 group-hover:text-accent transition-colors">
                  {p.name}
                </h4>
                <p className="font-mono text-[11px] text-neutral-500 mb-3">
                  {p.tagline}
                </p>
                <p className="text-neutral-400 text-xs leading-relaxed font-sans mb-4">
                  {p.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-neutral-900">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[9px] text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FULL CASE STUDY MODAL */}
      <CaseStudyModal
        project={selectedCaseStudy}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
