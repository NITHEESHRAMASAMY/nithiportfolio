import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar, Briefcase, Award } from "lucide-react";

const experienceData = [
  {
    type: "freelancing",
    icon: Briefcase,
    title: "UI/UX & Product Design Freelancer",
    company: "Independent Client Studio & Product Engagements",
    date: "2024 – Present",
    description: "Designing end-to-end user interfaces, design systems, interactive Figma prototypes, and responsive web experiences. Conducting usability audits, persona mapping, and delivering developer-ready design specs.",
  },
  {
    type: "internship",
    icon: Briefcase,
    title: "Product UX & Gen AI Intern",
    company: "Gateway Software Solutions, Coimbatore (On-Site)",
    date: "Jun 2025 – Jul 2025",
    description: "Spearheaded user journey design and rapid interactive prototyping for Generative AI & LLM tooling, transforming complex model inputs into intuitive conversational canvases.",
  },
  {
    type: "internship",
    icon: Briefcase,
    title: "Frontend & UI Engineer Intern",
    company: "Cognifyz Technologies, Nagpur (Remote)",
    date: "Sep 2025 – Oct 2025",
    description: "Designed and implemented responsive web layouts with accessible UI components, collaborating on design-to-code translation and smooth micro-interactions.",
  },
  {
    type: "hackathon",
    icon: Award,
    title: "Ideathon & Design Sprint Finalist",
    company: "Bannari Amman Institute of Technology",
    date: "2025",
    description: "Conceptualized and pitched human-centered UX solutions for institutional workflow bottlenecks, presenting interactive prototypes and user journey models to review panels.",
  },
];

export default function Experience() {
  const containerRef = useRef(null);

  // Link scroll progress of section to timeline height scaling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="experience"
      className="min-h-screen py-32 px-6 md:px-12 border-t border-neutral-900 bg-black flex flex-col justify-between relative overflow-hidden blueprint-grid"
    >
      {/* Title */}
      <div className="flex flex-col gap-2 mb-20">
        <span className="font-mono text-xs text-accent tracking-[0.3em] uppercase">
          [ TIMELINE ]
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-white uppercase leading-none">
          EXPERIENCE RECORD
        </h2>
      </div>

      {/* Timeline core wrapper */}
      <div className="relative w-full max-w-5xl mx-auto py-10">
        {/* Background track line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-neutral-900 -translate-x-1/2" />

        {/* Animated Drawing Active Line */}
        <motion.div
          style={{ scaleY: lineScale }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-accent origin-top -translate-x-1/2 z-10"
        />

        {/* Experience nodes */}
        <div className="flex flex-col gap-16 md:gap-24">
          {experienceData.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={item.title + idx}
                className="relative w-full flex flex-col md:flex-row justify-between items-start"
              >
                {/* Timeline Circle Bullet */}
                <div className="absolute left-4 md:left-1/2 top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-accent -translate-x-1/2 z-20 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="w-1.5 h-1.5 rounded-full bg-accent"
                  />
                </div>

                {/* Left side spacing block or element card */}
                <div className={`w-full md:w-[45%] pl-10 md:pl-0 ${isLeft ? "md:text-right" : "md:order-last md:text-left"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="border border-neutral-900 hover:border-accent/35 bg-neutral-950/40 p-6 md:p-8 rounded-xl flex flex-col gap-3 group transition-colors duration-300 relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-accent/0 group-hover:bg-accent/20 transition-all duration-500" />
                    
                    {/* Header info row */}
                    <div className={`flex items-center gap-2 font-mono text-[9px] text-accent/60 tracking-wider uppercase ${isLeft ? "md:justify-end" : ""}`}>
                      <Calendar size={10} />
                      <span>{item.date}</span>
                    </div>

                    {/* Core headings */}
                    <div className="flex flex-col gap-0.5">
                      <h3 className="text-white font-display font-medium text-lg md:text-xl group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs text-neutral-400 tracking-wide">
                        {item.company}
                      </span>
                    </div>

                    {/* Detail content */}
                    <p className="text-neutral-400 font-sans font-light text-xs md:text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </div>

                {/* Mirror blank spacer for grid structure */}
                <div className="hidden md:block w-[45%]" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer copyright */}
      <div className="flex justify-between items-center font-mono text-[9px] text-neutral-600 tracking-[0.2em] mt-24">
        <span>[SPEC] TIMELINE // EXPERIENCE LAB</span>
        <span>026 // © NITHEESH R</span>
      </div>
    </section>
  );
}
