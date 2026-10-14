import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronUp,
  ChevronDown,
  Layers,
  Copy,
  ArrowUp,
  Sparkles,
  Maximize2,
  Eye,
  Grid,
} from "lucide-react";

export default function CaseStudyModal({ project, isOpen, onClose }) {
  const [activePageIndex, setActivePageIndex] = useState(1);
  const [copiedHex, setCopiedHex] = useState(null);
  const scrollContainerRef = useRef(null);
  const pageRefs = useRef({});

  const totalPages = project?.pages?.length || 8;

  // Reset scroll position and pause Lenis smooth scroll on mount
  useEffect(() => {
    if (isOpen) {
      setActivePageIndex(1);
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = "unset";
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = "unset";
      window.__lenis?.start();
    };
  }, [isOpen, project?.id]);

  // Track active page on vertical scroll
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const containerTop = container.scrollTop;
    const containerHeight = container.clientHeight;

    // If near the bottom, select last slide
    if (containerTop + containerHeight >= container.scrollHeight - 60) {
      setActivePageIndex(totalPages);
      return;
    }

    const containerRect = container.getBoundingClientRect();
    let currentActive = 1;
    for (let i = 1; i <= totalPages; i++) {
      const el = pageRefs.current[i];
      if (el) {
        const elRect = el.getBoundingClientRect();
        if (elRect.top - containerRect.top <= 160) {
          currentActive = i;
        }
      }
    }
    setActivePageIndex(currentActive);
  };

  // Smooth scroll container to a specific page
  const scrollToPage = (pageNum) => {
    const container = scrollContainerRef.current;
    const el = pageRefs.current[pageNum];
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const targetTop = container.scrollTop + (elRect.top - containerRect.top) - 16;
      container.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth",
      });
      setActivePageIndex(pageNum);
    }
  };

  // Keyboard navigation (Arrow Up/Down, PageUp/PageDown, Escape)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowDown" || e.key === "PageDown") {
        e.preventDefault();
        scrollToPage(Math.min(activePageIndex + 1, totalPages));
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        scrollToPage(Math.max(activePageIndex - 1, 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, activePageIndex, totalPages, onClose]);

  if (!isOpen || !project) return null;

  const handleCopyHex = (hex) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 1800);
  };

  const isForma = project.id === "forma";
  const isNexus = project.id === "nexus";

  // Dynamic aesthetic styling matching the case study
  const pageBgClass = isForma
    ? "bg-[#F4F1EA] text-[#20231F]"
    : isNexus
    ? "bg-[#080B12] text-[#F3F6F8]"
    : "bg-[#0B0E14] text-[#F8FAFC]";

  const borderClass = isForma
    ? "border-[#E2DDD3]"
    : isNexus
    ? "border-[#1C2433]"
    : "border-[#1E293B]";

  const cardBgClass = isForma
    ? "bg-white shadow-sm border border-[#E2DDD3]"
    : isNexus
    ? "bg-[#111722] border border-[#1C2433]"
    : "bg-[#121824] border border-[#1E293B]";

  const mutedTextClass = isForma
    ? "text-[#6B7264]"
    : isNexus
    ? "text-[#8E9CAE]"
    : "text-[#94A3B8]";

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        data-lenis-prevent="true"
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.96, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.96, y: 20, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          data-lenis-prevent="true"
          className="relative w-full max-w-6xl h-[94vh] flex flex-col bg-[#050608] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl text-white select-text"
          onClick={(e) => e.stopPropagation()}
        >
          {/* TOP BAR / NAVIGATION HEADER */}
          <div className="flex items-center justify-between gap-3 px-5 py-3.5 bg-neutral-950 border-b border-neutral-800/80 shrink-0 z-20">
            {/* Title & Metadata */}
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs px-2.5 py-1 rounded-md bg-accent/10 border border-accent/30 text-accent font-semibold tracking-wider">
                {project.num}
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-display font-semibold text-base sm:text-lg text-white tracking-wide">
                    {project.title}
                  </h3>
                  <span className="text-neutral-500 text-xs hidden sm:inline">•</span>
                  <span className="text-xs font-mono text-neutral-400 hidden sm:inline">
                    {project.category}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-500 font-mono hidden md:block">
                  Interactive Case Study Deck • Scroll up/down to explore all {totalPages} pages
                </p>
              </div>
            </div>

            {/* Current Page Indicator & Quick Scroll Controls */}
            <div className="flex items-center gap-3">
              {/* Page Indicator */}
              <div className="flex items-center gap-1.5 bg-neutral-900 border border-neutral-800 px-3 py-1.5 rounded-xl font-mono text-xs">
                <span className="text-neutral-500 uppercase tracking-wider text-[10px] hidden sm:inline">
                  Page
                </span>
                <span className="text-white font-bold">
                  {String(activePageIndex).padStart(2, "0")}
                </span>
                <span className="text-neutral-500">
                  / {String(totalPages).padStart(2, "0")}
                </span>
              </div>

              {/* Scroll Up / Down Buttons */}
              <div className="flex items-center gap-1 bg-neutral-900 border border-neutral-800 p-1 rounded-xl">
                <button
                  onClick={() => scrollToPage(Math.max(activePageIndex - 1, 1))}
                  disabled={activePageIndex === 1}
                  className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-25 disabled:hover:text-neutral-400 rounded transition"
                  title="Scroll to previous slide (Up arrow)"
                >
                  <ChevronUp size={16} />
                </button>
                <button
                  onClick={() => scrollToPage(Math.min(activePageIndex + 1, totalPages))}
                  disabled={activePageIndex === totalPages}
                  className="p-1.5 text-neutral-400 hover:text-white disabled:opacity-25 disabled:hover:text-neutral-400 rounded transition"
                  title="Scroll to next slide (Down arrow)"
                >
                  <ChevronDown size={16} />
                </button>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition"
                title="Close case study (Esc)"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* SCROLLABLE INTERACTIVE DECK CONTAINER (VERTICAL SCROLL UP & DOWN) */}
          <div
            ref={scrollContainerRef}
            data-lenis-prevent="true"
            onScroll={handleScroll}
            onWheel={(e) => e.stopPropagation()}
            className="flex-1 overflow-y-auto overflow-x-hidden relative p-3 sm:p-6 md:p-8 bg-neutral-950/80 overscroll-contain touch-pan-y custom-modal-scrollbar space-y-10"
          >
            {project.pages.map((slide) => (
              <div
                key={slide.pageNumber}
                ref={(el) => (pageRefs.current[slide.pageNumber] = el)}
                id={`slide-${slide.pageNumber}`}
                className={`w-full rounded-2xl p-6 sm:p-10 md:p-12 shadow-2xl transition-all duration-300 ${pageBgClass} ${borderClass} border`}
              >
                {/* SLIDE HEADER */}
                <div className={`flex justify-between items-center border-b pb-4 mb-8 ${borderClass}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] tracking-widest uppercase font-semibold opacity-75">
                      {slide.section}
                    </span>
                  </div>
                  <div className="font-mono text-xs opacity-60">
                    {String(slide.pageNumber).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
                  </div>
                </div>

                {/* PAGE 1: COVER */}
                {slide.type === "cover" && (
                  <div className="flex flex-col justify-between min-h-[480px]">
                    <div className="space-y-6">
                      <span className="font-mono text-xs tracking-[0.25em] uppercase opacity-70">
                        {slide.content.category}
                      </span>

                      <h1 className="text-5xl sm:text-7xl md:text-8xl font-display font-bold tracking-tight uppercase leading-none">
                        {slide.title}
                      </h1>

                      <p className="text-xl sm:text-2xl font-display font-medium max-w-2xl opacity-90 leading-snug">
                        {slide.subtitle}
                      </p>

                      <p className={`text-sm sm:text-base font-sans max-w-2xl leading-relaxed ${mutedTextClass}`}>
                        {slide.content.description}
                      </p>
                    </div>

                    {/* Mockup Preview Widget */}
                    <div className={`mt-10 p-6 rounded-xl ${cardBgClass}`}>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-[11px] tracking-wider uppercase opacity-70">
                          {slide.content.context}
                        </span>
                        <div className="flex gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-400/40" />
                          <span className="w-2.5 h-2.5 rounded-full bg-neutral-400/40" />
                        </div>
                      </div>

                      <h4 className="text-2xl sm:text-3xl font-display font-semibold mb-1">
                        {slide.content.greeting}
                      </h4>
                      <p className={`text-xs sm:text-sm font-sans mb-6 ${mutedTextClass}`}>
                        {slide.content.greetingSub}
                      </p>

                      {/* Cover Thumbnail Preview (if provided) */}
                      {slide.content.coverImage && (
                        <div className="mb-6 rounded-xl overflow-hidden border border-black/15 dark:border-white/10 shadow-md">
                          <img
                            src={slide.content.coverImage}
                            alt={slide.title}
                            className="w-full h-44 sm:h-60 object-cover object-top"
                            loading="lazy"
                          />
                        </div>
                      )}

                      {/* Metric Chips */}
                      {slide.content.metrics && (
                        <div className="grid grid-cols-3 gap-3">
                          {slide.content.metrics.map((m, i) => (
                            <div
                              key={i}
                              className={`p-3 rounded-lg text-center ${
                                isForma ? "bg-[#F4F1EA]" : "bg-black/30"
                              }`}
                            >
                              <div className="text-xl sm:text-2xl font-mono font-bold">
                                {m.num}
                              </div>
                              <div className="text-[10px] font-mono opacity-70 truncate">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tag Chips */}
                      {slide.content.tags && (
                        <div className="flex flex-wrap gap-2 mt-4">
                          {slide.content.tags.map((t, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full font-mono text-[10px] tracking-wider bg-white/10 border border-white/20"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Footer */}
                    <div className={`flex justify-between items-center text-[10px] font-mono pt-6 mt-8 border-t ${borderClass} opacity-60`}>
                      <span>{slide.content.footerNote}</span>
                      <span>{slide.content.footerDate}</span>
                    </div>
                  </div>
                )}

                {/* PAGE 2: OVERVIEW */}
                {slide.type === "overview" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-base sm:text-lg font-sans opacity-90 max-w-3xl leading-relaxed">
                        {slide.content.lead}
                      </p>
                    </div>

                    {/* Definition Box */}
                    <div className={`p-5 rounded-xl ${cardBgClass}`}>
                      <div className="font-mono text-xs uppercase tracking-wider font-semibold mb-2 opacity-80">
                        WHAT IS {project.title}?
                      </div>
                      <p className={`text-sm sm:text-base font-sans leading-relaxed ${mutedTextClass}`}>
                        {slide.content.definition}
                      </p>
                    </div>

                    {/* 4 Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {slide.content.metrics.map((m, i) => (
                        <div key={i} className={`p-4 rounded-xl ${cardBgClass} flex flex-col justify-between`}>
                          <div className="text-3xl sm:text-4xl font-mono font-bold mb-1">
                            {m.val}
                          </div>
                          <div className="font-mono text-xs tracking-wider uppercase font-semibold">
                            {m.label}
                          </div>
                          <div className={`text-[11px] ${mutedTextClass}`}>
                            {m.sub}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Structure Breakdown */}
                    <div className="pt-4">
                      <h4 className="font-mono text-xs tracking-widest uppercase font-semibold mb-4 opacity-80">
                        {slide.content.structureTitle}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {slide.content.structure.map((item, idx) => (
                          <div key={idx} className={`p-4 rounded-xl ${cardBgClass} flex gap-3.5 items-start`}>
                            <span className="font-mono text-xs px-2 py-1 rounded bg-black/10 dark:bg-white/10 font-bold shrink-0">
                              {item.step}
                            </span>
                            <div>
                              <h5 className="font-display font-medium text-sm mb-1">
                                {item.title}
                              </h5>
                              <p className={`text-xs leading-relaxed ${mutedTextClass}`}>
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* PAGE 3: DESIGN OPPORTUNITY */}
                {slide.type === "opportunity" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-base sm:text-lg font-sans opacity-90 max-w-3xl leading-relaxed">
                        {slide.content.intro}
                      </p>
                    </div>

                    {/* Challenge vs Response Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className={`p-6 rounded-xl ${cardBgClass} border-l-4 border-amber-500`}>
                        <h4 className="font-display font-semibold text-base mb-2">
                          {slide.content.challenge.title}
                        </h4>
                        <p className={`text-sm leading-relaxed ${mutedTextClass}`}>
                          {slide.content.challenge.desc}
                        </p>
                      </div>

                      <div className={`p-6 rounded-xl ${cardBgClass} border-l-4 border-emerald-500`}>
                        <h4 className="font-display font-semibold text-base mb-2">
                          {slide.content.response.title}
                        </h4>
                        <p className={`text-sm leading-relaxed ${mutedTextClass}`}>
                          {slide.content.response.desc}
                        </p>
                      </div>
                    </div>

                    {/* Core Design Questions */}
                    <div className="pt-2">
                      <h4 className="font-mono text-xs tracking-widest uppercase font-semibold mb-4 opacity-80">
                        {slide.content.questionsTitle}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                        {slide.content.questions.map((q, idx) => (
                          <div key={idx} className={`p-4 rounded-xl ${cardBgClass}`}>
                            <div className="flex items-center gap-2 mb-1.5">
                              <span className="font-mono text-xs font-bold text-accent">
                                {q.num}
                              </span>
                              <h5 className="font-display font-semibold text-sm">
                                {q.q}
                              </h5>
                            </div>
                            <p className={`text-xs leading-relaxed pl-5 ${mutedTextClass}`}>
                              {q.a}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Evidence / Scope Note */}
                    <div className={`p-4 rounded-xl bg-black/5 dark:bg-white/5 border ${borderClass} text-xs ${mutedTextClass} italic leading-relaxed`}>
                      <span className="font-semibold not-italic">EVIDENCE NOTE: </span>
                      {slide.content.evidenceNote}
                    </div>
                  </div>
                )}

                {/* PAGE 4: AUDIENCE & PERSONA */}
                {slide.type === "persona" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-base font-sans opacity-90 max-w-3xl leading-relaxed">
                        {slide.content.intro}
                      </p>
                    </div>

                    {/* Persona Profile Card */}
                    <div className={`p-6 sm:p-8 rounded-xl ${cardBgClass}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-neutral-900 text-white flex items-center justify-center font-display font-bold text-xl border border-neutral-700 shadow-md">
                          {slide.content.persona.initials}
                        </div>
                        <div>
                          <span className="font-mono text-[10px] tracking-widest uppercase opacity-70">
                            HYPOTHETICAL PERSONA
                          </span>
                          <h3 className="text-2xl font-display font-semibold">
                            {slide.content.persona.name} —{" "}
                            <span className="font-normal opacity-80">
                              {slide.content.persona.role}
                            </span>
                          </h3>
                          <p className={`text-xs mt-0.5 ${mutedTextClass}`}>
                            {slide.content.persona.bio}
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-neutral-300 dark:border-neutral-800">
                        {slide.content.persona.columns.map((col, idx) => (
                          <div key={idx} className="space-y-2">
                            <h5 className="font-mono text-xs uppercase tracking-wider font-semibold opacity-80">
                              {col.title}
                            </h5>
                            <ul className="space-y-1.5">
                              {col.points.map((pt, pIdx) => (
                                <li key={pIdx} className={`text-xs flex items-start gap-2 ${mutedTextClass}`}>
                                  <span className="text-accent">•</span>
                                  <span>{pt}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Empathy Map */}
                    <div>
                      <h4 className="font-mono text-xs tracking-widest uppercase font-semibold mb-3 opacity-80">
                        {slide.content.empathyTitle}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className={`p-4 rounded-xl ${cardBgClass}`}>
                          <span className="font-mono text-[11px] font-bold text-accent uppercase block mb-1">
                            THINKS
                          </span>
                          <p className={`text-xs italic leading-relaxed ${mutedTextClass}`}>
                            {slide.content.empathyMap.thinks}
                          </p>
                        </div>

                        <div className={`p-4 rounded-xl ${cardBgClass}`}>
                          <span className="font-mono text-[11px] font-bold text-accent uppercase block mb-1">
                            SAYS
                          </span>
                          <p className={`text-xs italic leading-relaxed ${mutedTextClass}`}>
                            {slide.content.empathyMap.says}
                          </p>
                        </div>

                        <div className={`p-4 rounded-xl ${cardBgClass}`}>
                          <span className="font-mono text-[11px] font-bold text-accent uppercase block mb-1">
                            DOES
                          </span>
                          <p className={`text-xs italic leading-relaxed ${mutedTextClass}`}>
                            {slide.content.empathyMap.does}
                          </p>
                        </div>

                        <div className={`p-4 rounded-xl ${cardBgClass}`}>
                          <span className="font-mono text-[11px] font-bold text-accent uppercase block mb-1">
                            FEELS
                          </span>
                          <p className={`text-xs italic leading-relaxed ${mutedTextClass}`}>
                            {slide.content.empathyMap.feels}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Research Next Step */}
                    <div className={`p-4 rounded-xl bg-black/5 dark:bg-white/5 border ${borderClass}`}>
                      <div className="font-mono text-xs font-semibold uppercase mb-1">
                        RESEARCH NEXT STEP
                      </div>
                      <p className={`text-xs ${mutedTextClass} leading-relaxed`}>
                        {slide.content.researchStep}
                      </p>
                    </div>
                  </div>
                )}

                {/* PAGE 5: INFORMATION ARCHITECTURE & FLOWS */}
                {slide.type === "flows" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-base font-sans opacity-90 max-w-3xl leading-relaxed">
                        {slide.content.intro}
                      </p>
                    </div>

                    {/* Stepper Pipeline */}
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                      {slide.content.stepper.map((st, idx) => (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-xl ${cardBgClass} text-center flex flex-col justify-between`}
                        >
                          <span className="font-mono text-xs font-bold tracking-wider text-accent mb-1">
                            {st.step}
                          </span>
                          <span className={`text-[11px] ${mutedTextClass}`}>
                            {st.detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Key User Flows */}
                    <div>
                      <h4 className="font-mono text-xs tracking-widest uppercase font-semibold mb-3 opacity-80">
                        {slide.content.flowsTitle}
                      </h4>
                      <div className="space-y-2.5">
                        {slide.content.flows.map((fl, idx) => (
                          <div key={idx} className={`p-4 rounded-xl ${cardBgClass}`}>
                            <h5 className="font-display font-semibold text-sm mb-1">
                              {fl.name}
                            </h5>
                            <p className={`text-xs font-mono leading-relaxed ${mutedTextClass}`}>
                              {fl.path}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interaction States */}
                    <div className={`p-5 rounded-xl ${cardBgClass}`}>
                      <h4 className="font-mono text-xs tracking-widest uppercase font-semibold mb-3 opacity-80">
                        {slide.content.statesTitle}
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {slide.content.states.map((st, idx) => (
                          <li key={idx} className={`text-xs flex items-start gap-2 ${mutedTextClass}`}>
                            <span className="text-accent">•</span>
                            <span>{st}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* PAGE 6: VISUAL LANGUAGE & DESIGN SYSTEM */}
                {slide.type === "design_system" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-base font-sans opacity-90 max-w-3xl leading-relaxed">
                        {slide.content.intro}
                      </p>
                    </div>

                    {/* Interactive Palette Chips */}
                    <div>
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-mono text-xs tracking-widest uppercase font-semibold opacity-80">
                          COLOR PALETTE / INTERACTION TOKENS
                        </span>
                        <span className="text-[10px] font-mono opacity-50">
                          Click chip to copy HEX
                        </span>
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        {project.palette.map((color, idx) => (
                          <div
                            key={idx}
                            onClick={() => handleCopyHex(color.hex)}
                            className={`p-3 rounded-xl ${cardBgClass} cursor-pointer group hover:scale-[1.03] transition-all`}
                          >
                            <div
                              className="w-full h-14 rounded-lg mb-2 shadow-inner border border-black/10 flex items-center justify-center relative"
                              style={{ backgroundColor: color.hex }}
                            >
                              {copiedHex === color.hex && (
                                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-black text-white shadow">
                                  Copied!
                                </span>
                              )}
                            </div>
                            <div className="font-mono text-xs font-bold">{color.name}</div>
                            <div className="font-mono text-[10px] opacity-70 flex items-center justify-between">
                              <span>{color.hex}</span>
                              <Copy size={10} className="opacity-0 group-hover:opacity-100 transition" />
                            </div>
                            <div className={`text-[10px] mt-1 ${mutedTextClass} line-clamp-1`}>
                              {color.role}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Typography Hierarchy */}
                    <div className={`p-6 rounded-xl ${cardBgClass}`}>
                      <span className="font-mono text-xs tracking-widest uppercase font-semibold opacity-80 block mb-2">
                        TYPOGRAPHY HIERARCHY
                      </span>
                      <div className="text-2xl sm:text-4xl font-display font-bold leading-tight mb-2">
                        {slide.content.typography.title}
                      </div>
                      <p className={`text-xs font-sans ${mutedTextClass}`}>
                        {slide.content.typography.note}
                      </p>
                    </div>

                    {/* Component Principles Table */}
                    <div>
                      <h4 className="font-mono text-xs tracking-widest uppercase font-semibold mb-3 opacity-80">
                        COMPONENT PRINCIPLES
                      </h4>
                      <div className="space-y-2">
                        {slide.content.principles.map((pr, idx) => (
                          <div
                            key={idx}
                            className={`p-3.5 rounded-xl ${cardBgClass} flex flex-col sm:flex-row sm:items-center justify-between gap-2`}
                          >
                            <span className="font-mono text-xs font-bold text-accent sm:w-1/4">
                              {pr.component}
                            </span>
                            <span className={`text-xs sm:w-3/4 ${mutedTextClass}`}>
                              {pr.rule}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Design Intent */}
                    <div className={`p-4 rounded-xl bg-black/5 dark:bg-white/5 border ${borderClass}`}>
                      <div className="font-mono text-xs font-semibold uppercase mb-1">
                        DESIGN INTENT
                      </div>
                      <p className={`text-xs ${mutedTextClass} leading-relaxed`}>
                        {slide.content.intent}
                      </p>
                    </div>
                  </div>
                )}

                {/* WIREFRAME BLUEPRINT SLIDE */}
                {slide.type === "wireframes" && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent font-semibold uppercase tracking-wider">
                          {slide.content.blueprintBadge || "UX BLUEPRINT & WIREFRAME ARCHITECTURE"}
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-base font-sans opacity-90 max-w-3xl leading-relaxed">
                        {slide.content.intro}
                      </p>
                    </div>

                    {/* Visual Wireframe Blueprint Image */}
                    {slide.content.wireframeImage && (
                      <div className={`p-4 sm:p-6 rounded-2xl ${cardBgClass} border space-y-4`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-black/10 dark:border-white/10">
                          <div>
                            <h3 className="font-display font-semibold text-lg text-white">
                              {slide.content.wireframeImage.title || "ARCHITECTURAL WIREFRAME BLUEPRINT"}
                            </h3>
                            <p className={`text-xs ${mutedTextClass}`}>
                              {slide.content.wireframeImage.subtitle || "Low-Fidelity Screen Schematics & Component Zones"}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-black/20 dark:bg-white/10 text-accent font-medium">
                              WIREFRAME BLUEPRINT
                            </span>
                          </div>
                        </div>

                        {/* Wireframe Frame */}
                        <div className="w-full rounded-xl overflow-hidden border border-black/20 dark:border-white/10 bg-black/40 shadow-2xl relative group">
                          <img
                            src={slide.content.wireframeImage.src}
                            alt={slide.content.wireframeImage.alt || slide.content.wireframeImage.title}
                            className="w-full h-auto object-cover max-h-[580px] sm:max-h-[680px] rounded-lg transition-transform duration-700 group-hover:scale-[1.01]"
                            loading="lazy"
                          />
                        </div>

                        {/* Callouts below the wireframe image */}
                        {slide.content.wireframeImage.callouts && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            {slide.content.wireframeImage.callouts.map((co, cIdx) => (
                              <div key={cIdx} className={`p-3.5 rounded-xl ${isForma ? "bg-[#F4F1EA]" : "bg-black/30"} border border-white/5`}>
                                <div className="font-mono text-xs font-bold text-accent mb-1 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                  {co.title}
                                </div>
                                <p className={`text-xs ${mutedTextClass} leading-relaxed`}>
                                  {co.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Schematic Wireframe Canvas */}
                    {slide.content.wireframeMockup && (
                      <div className={`p-6 sm:p-8 rounded-2xl ${cardBgClass} border relative overflow-hidden`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-black/10 dark:border-white/10 gap-2">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                            <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                              {slide.content.wireframeMockup.title}
                            </span>
                          </div>
                          <span className="font-mono text-[11px] opacity-60">
                            {slide.content.wireframeMockup.fidelity}
                          </span>
                        </div>

                        {/* Visual Blueprint Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                          <div className="lg:col-span-8 p-4 sm:p-6 rounded-xl border border-dashed border-accent/40 bg-black/25 font-mono text-xs space-y-4">
                            {/* Blueprint Header */}
                            <div className="flex items-center justify-between pb-3 border-b border-white/10">
                              <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-accent/40" />
                                <span className="font-bold text-accent">
                                  {slide.content.wireframeMockup.systemName}
                                </span>
                              </div>
                              <div className="flex gap-2 text-[10px] opacity-60">
                                <span>[NAV_BAR]</span>
                                <span>[VIEWPORT_CANVAS]</span>
                                <span>[STATE_INSPECTOR]</span>
                              </div>
                            </div>

                            {/* Blueprint Zones */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                              {slide.content.wireframeMockup.zones.map((zone, zIdx) => (
                                <div key={zIdx} className="p-3.5 rounded-lg border border-white/15 bg-white/5 space-y-2">
                                  <div className="flex justify-between items-center text-[10px] text-accent">
                                    <span>{zone.zoneId}</span>
                                    <span className="opacity-60">{zone.type}</span>
                                  </div>
                                  <div className="text-xs font-bold text-white font-sans">{zone.name}</div>
                                  <p className="text-[11px] font-sans opacity-75 leading-relaxed">{zone.description}</p>
                                  <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1">
                                    {zone.elements.map((el, elIdx) => (
                                      <span key={elIdx} className="px-1.5 py-0.5 rounded text-[9px] bg-white/10 text-white/90">
                                        {el}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Blueprint Rule */}
                            <div className="p-3 rounded-lg bg-accent/5 border border-accent/20 text-[11px] font-sans flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <span className="text-accent font-semibold">{slide.content.wireframeMockup.logicRule}</span>
                              <span className="opacity-60 font-mono text-[10px]">{slide.content.wireframeMockup.status}</span>
                            </div>
                          </div>

                          {/* Architectural UX Decisions */}
                          <div className="lg:col-span-4 space-y-3">
                            <h4 className="font-mono text-xs tracking-wider uppercase font-semibold opacity-80 mb-2">
                              STRUCTURAL UX DECISIONS
                            </h4>
                            {slide.content.decisions.map((dec, dIdx) => (
                              <div key={dIdx} className={`p-3.5 rounded-xl ${cardBgClass} border border-white/5 space-y-1`}>
                                <div className="flex items-center gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                  <span className="font-display font-semibold text-xs text-white">
                                    {dec.principle}
                                  </span>
                                </div>
                                <p className={`text-xs ${mutedTextClass} leading-relaxed pl-3.5`}>
                                  {dec.rationale}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Wireframe Cards Grid */}
                    {slide.content.wireframeCards && (
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {slide.content.wireframeCards.map((card, cIdx) => (
                          <div key={cIdx} className={`p-5 rounded-xl ${cardBgClass} border flex flex-col justify-between`}>
                            <div>
                              <div className="flex justify-between items-center mb-2">
                                <span className="font-mono text-xs font-bold text-accent">
                                  {card.code}
                                </span>
                                <span className="font-mono text-[10px] opacity-60">
                                  {card.state}
                                </span>
                              </div>
                              <h4 className="text-base font-display font-semibold mb-1">
                                {card.title}
                              </h4>
                              <p className={`text-xs mb-4 ${mutedTextClass} leading-relaxed`}>
                                {card.desc}
                              </p>

                              {/* Wireframe Component Blueprint Box */}
                              <div className="p-3 rounded-lg border border-dashed border-white/20 bg-black/20 space-y-2 mb-4 font-mono text-[10px]">
                                <div className="h-1.5 w-12 bg-white/20 rounded" />
                                {card.components.map((comp, compIdx) => (
                                  <div key={compIdx} className="p-1.5 rounded bg-white/5 border border-white/10 flex justify-between">
                                    <span>{comp.name}</span>
                                    <span className="text-accent">{comp.role}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="pt-3 border-t border-black/10 dark:border-white/10">
                              <span className="font-mono text-[10px] uppercase tracking-wider block opacity-70 mb-0.5">
                                UX PURPOSE:
                              </span>
                              <p className="text-xs font-sans italic opacity-90">
                                "{card.purpose}"
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* VISUAL GALLERY / REAL UI SCREENSHOTS SLIDE */}
                {(slide.type === "visual_gallery" || slide.type === "gallery") && (
                  <div className="space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="font-mono text-[10px] px-2.5 py-0.5 rounded bg-accent/15 border border-accent/30 text-accent font-semibold uppercase tracking-wider">
                          {slide.content.badge || "HIGH-FIDELITY INTERFACE SHOWCASE"}
                        </span>
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-base font-sans opacity-90 max-w-3xl leading-relaxed">
                        {slide.content.intro}
                      </p>
                    </div>

                    {/* Primary Featured Showcase Image */}
                    {slide.content.featuredImage && (
                      <div className={`p-4 sm:p-6 rounded-2xl ${cardBgClass} border space-y-4`}>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-black/10 dark:border-white/10">
                          <div>
                            <h3 className="font-display font-semibold text-lg text-white">
                              {slide.content.featuredImage.title}
                            </h3>
                            <p className={`text-xs ${mutedTextClass}`}>
                              {slide.content.featuredImage.subtitle}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-black/20 dark:bg-white/10 text-accent font-medium">
                              HIGH-FIDELITY RENDER
                            </span>
                          </div>
                        </div>

                        {/* Visual Frame */}
                        <div className="w-full rounded-xl overflow-hidden border border-black/20 dark:border-white/10 bg-black/40 shadow-2xl relative group">
                          <img
                            src={slide.content.featuredImage.src}
                            alt={slide.content.featuredImage.alt || slide.content.featuredImage.title}
                            className="w-full h-auto object-cover max-h-[580px] sm:max-h-[680px] rounded-lg transition-transform duration-700 group-hover:scale-[1.01]"
                            loading="lazy"
                          />
                        </div>

                        {/* Callouts below the featured image */}
                        {slide.content.featuredImage.callouts && (
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                            {slide.content.featuredImage.callouts.map((co, cIdx) => (
                              <div key={cIdx} className={`p-3.5 rounded-xl ${isForma ? "bg-[#F4F1EA]" : "bg-black/30"} border border-white/5`}>
                                <div className="font-mono text-xs font-bold text-accent mb-1 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                  {co.title}
                                </div>
                                <p className={`text-xs ${mutedTextClass} leading-relaxed`}>
                                  {co.desc}
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Secondary Image Grid (if any) */}
                    {slide.content.gallery && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {slide.content.gallery.map((item, gIdx) => (
                          <div key={gIdx} className={`p-4 sm:p-5 rounded-2xl ${cardBgClass} border space-y-3`}>
                            <div className="w-full rounded-xl overflow-hidden border border-black/20 dark:border-white/10 bg-black/40 relative group">
                              <img
                                src={item.src}
                                alt={item.title}
                                className="w-full h-auto object-cover max-h-[380px] rounded-lg transition-transform duration-500 group-hover:scale-[1.02]"
                                loading="lazy"
                              />
                            </div>
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <h4 className="font-display font-semibold text-base text-white">
                                  {item.title}
                                </h4>
                                <span className="font-mono text-[10px] text-accent">
                                  {item.tag}
                                </span>
                              </div>
                              <p className={`text-xs ${mutedTextClass} leading-relaxed`}>
                                {item.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* KEY SCREENS & INTERACTION STATES */}
                {slide.type === "screens" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-base font-sans opacity-90 max-w-3xl leading-relaxed">
                        {slide.content.intro}
                      </p>
                    </div>

                    {/* Screen Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                      {slide.content.screens.map((sc, idx) => (
                        <div key={idx} className={`p-5 rounded-xl ${cardBgClass} flex flex-col justify-between`}>
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-mono text-xs font-bold opacity-75">
                                {sc.screenNum}
                              </span>
                              <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            </div>

                            <h4 className="text-lg font-display font-semibold mb-1">
                              {sc.title}
                            </h4>
                            <p className={`text-xs mb-4 ${mutedTextClass}`}>
                              {sc.desc}
                            </p>

                            {/* Screen Visual / Wireframe Box */}
                            {sc.image ? (
                              <div className="rounded-lg overflow-hidden border border-black/10 dark:border-white/10 mb-4 shadow">
                                <img
                                  src={sc.image}
                                  alt={sc.title}
                                  className="w-full h-32 object-cover object-top"
                                  loading="lazy"
                                />
                              </div>
                            ) : (
                              <div className={`p-4 rounded-lg mb-4 space-y-2 border ${borderClass} bg-black/10 dark:bg-white/5`}>
                                <div className="h-2 w-16 bg-neutral-400/40 rounded" />
                                {sc.wireframeItems.map((item, itemIdx) => (
                                  <div
                                    key={itemIdx}
                                    className={`p-2 rounded text-[10px] font-mono border ${borderClass} bg-white/40 dark:bg-black/40`}
                                  >
                                    {item}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          <div className="pt-3 border-t border-neutral-300 dark:border-neutral-800">
                            <span className="font-mono text-[10px] uppercase tracking-wider block opacity-70 mb-1">
                              KEY QUESTION ANSWERED:
                            </span>
                            <p className="text-xs font-sans font-medium italic">
                              "{sc.mustAnswer}"
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Implementation Checklist */}
                    <div className={`p-5 rounded-xl ${cardBgClass}`}>
                      <div className="font-mono text-xs font-semibold uppercase mb-2 opacity-80">
                        {slide.content.checklistTitle}
                      </div>
                      <p className={`text-xs font-mono leading-relaxed ${mutedTextClass}`}>
                        {slide.content.checklist}
                      </p>
                    </div>
                  </div>
                )}

                {/* CONCLUSION & VALIDATION PLAN */}
                {slide.type === "conclusion" && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-display font-semibold mb-2">
                        {slide.title}
                      </h2>
                      <p className="text-base font-sans opacity-90 max-w-3xl leading-relaxed">
                        {slide.content.intro}
                      </p>
                    </div>

                    {/* Synthesis Comparison Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {slide.content.columns.map((col, idx) => (
                        <div key={idx} className={`p-6 rounded-xl ${cardBgClass}`}>
                          <h4 className="font-mono text-xs tracking-wider uppercase font-semibold mb-4 opacity-80">
                            {col.title}
                          </h4>
                          <ul className="space-y-2">
                            {col.items.map((it, itemIdx) => (
                              <li key={itemIdx} className={`text-xs flex items-start gap-2.5 ${mutedTextClass}`}>
                                <span className="text-accent font-bold">✓</span>
                                <span>{it}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Recommended Validation Plan */}
                    <div>
                      <h4 className="font-mono text-xs tracking-widest uppercase font-semibold mb-3 opacity-80">
                        RECOMMENDED VALIDATION PLAN
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
                        {slide.content.validationPlan.map((vp, idx) => (
                          <div key={idx} className={`p-4 rounded-xl ${cardBgClass}`}>
                            <span className="font-mono text-xs font-bold text-accent uppercase block mb-1">
                              {vp.step}
                            </span>
                            <p className={`text-xs leading-relaxed ${mutedTextClass}`}>
                              {vp.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bold Manifesto Banner */}
                    <div className={`p-8 rounded-2xl text-center space-y-2 ${cardBgClass} border-2 border-accent/40`}>
                      <h3 className="text-3xl sm:text-5xl font-display font-bold tracking-tight uppercase">
                        {slide.content.manifesto}
                      </h3>
                      <p className={`text-sm sm:text-base font-sans max-w-2xl mx-auto ${mutedTextClass}`}>
                        {slide.content.manifestoSub}
                      </p>
                    </div>

                    {/* Project Role & Timeline Footer (No live links exposed) */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-4 border-t border-neutral-300 dark:border-neutral-800 text-[11px] font-mono opacity-60">
                      <span>CASE STUDY: {project.category}</span>
                      <span>{project.role} • {project.timeline}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* BOTTOM QUICK-JUMP PAGE PILL BAR */}
          <div
            data-lenis-prevent="true"
            className="p-3 bg-neutral-950 border-t border-neutral-800/80 flex items-center justify-between gap-2 overflow-x-auto shrink-0 z-20 custom-modal-scrollbar"
          >
            <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest hidden md:inline shrink-0 pl-2">
              JUMP TO:
            </span>
            <div className="flex items-center gap-1.5 flex-1 overflow-x-auto py-0.5">
              {project.pages.map((p) => {
                const isActive = p.pageNumber === activePageIndex;
                return (
                  <button
                    key={p.pageNumber}
                    onClick={() => scrollToPage(p.pageNumber)}
                    className={`flex-1 min-w-[75px] sm:min-w-[100px] px-2.5 py-1.5 rounded-lg border text-left transition-all ${
                      isActive
                        ? "bg-white text-black border-white shadow-md font-bold"
                        : "bg-neutral-900/90 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700 font-medium"
                    }`}
                  >
                    <div className="font-mono text-[9px]">
                      {String(p.pageNumber).padStart(2, "0")} / {String(totalPages).padStart(2, "0")}
                    </div>
                    <div className="text-[10px] truncate">
                      {p.title}
                    </div>
                  </button>
                );
              })}
            </div>
            <button
              onClick={() => scrollToPage(1)}
              className="p-1.5 text-neutral-500 hover:text-white bg-neutral-900 border border-neutral-800 rounded-lg transition shrink-0 hidden sm:block"
              title="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
