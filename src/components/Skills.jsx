import { useEffect, useRef, useState } from "react";

const skillsList = [
  "UI-UX Design",
  "Product Design",
  "Design Systems",
  "Figma",
  "Wireframing",
  "User Research",
  "Prototyping",
  "User Flows",
  "Design Tokens",
  "Micro-Interactions",
  "Accessibility",
  "React & CSS",
  "Tailwind",
  "Motion Design",
  "Creative Tech",
  "Java",
  "Python",
  "Prompt Eng",
  "Empathy",
];

export default function Skills() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });
  const [hoveredSkill, setHoveredSkill] = useState("");

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId;
    let width = (canvas.width = canvas.parentElement.clientWidth || window.innerWidth);
    let height = (canvas.height = 550);

    // Bounding circle radius based on viewport
    const getBaseRadius = () => {
      return window.innerWidth < 768 ? 36 : 46;
    };

    class SkillNode {
      constructor(text, index) {
        this.text = text;
        this.index = index;
        this.baseRadius = getBaseRadius();
        this.radius = this.baseRadius;
        this.targetRadius = this.baseRadius;
        
        // Spread nodes out initially
        const angle = (index / skillsList.length) * Math.PI * 2;
        const dist = 140 + Math.random() * 50;
        this.x = width / 2 + Math.cos(angle) * dist;
        this.y = height / 2 + Math.sin(angle) * dist;
        
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.glow = 0;
        this.targetGlow = 0;
        this.angle = 0;
        this.rotSpeed = 0.005 + Math.random() * 0.01;
      }

      update(hoveredNode, mouse) {
        // Apply friction
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Apply drift back to center (orbital centering force)
        const dxCenter = width / 2 - this.x;
        const dyCenter = height / 2 - this.y;
        this.vx += dxCenter * 0.00015;
        this.vy += dyCenter * 0.00015;

        const isTargetHovered = hoveredNode === this;

        // Bounded velocities
        if (!isTargetHovered) {
          // Organic random drift (only when not pushed)
          if (!hoveredNode) {
            this.vx += (Math.random() - 0.5) * 0.12;
            this.vy += (Math.random() - 0.5) * 0.12;
          }

          const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
          if (speed > 1.5) {
            this.vx = (this.vx / speed) * 1.5;
            this.vy = (this.vy / speed) * 1.5;
          }
        }

        // Behavior controls based on hover status
        if (hoveredNode) {
          if (isTargetHovered) {
            // Locked: stop completely at current spot
            this.vx = 0;
            this.vy = 0;
            this.targetRadius = this.baseRadius * 1.35; // Grow larger
            this.targetGlow = 1;
            this.angle += this.rotSpeed * 0.5; // slow rotate
          } else {
            // Push away from the hovered node
            const dx = this.x - hoveredNode.x;
            const dy = this.y - hoveredNode.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const pushRange = 180;
            
            if (dist < pushRange) {
              const force = (pushRange - dist) / pushRange;
              this.vx += (dx / (dist || 1)) * force * 2.5;
              this.vy += (dy / (dist || 1)) * force * 2.5;
            }
            this.targetRadius = this.baseRadius;
            this.targetGlow = 0;
            this.angle += (0 - this.angle) * 0.1;
          }
        } else {
          // Regular cursor hover deflection (when no node is hovered)
          if (mouse.active) {
            const dxMouse = mouse.x - this.x;
            const dyMouse = mouse.y - this.y;
            const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
            
            if (distMouse < this.radius + 80) {
              const force = (this.radius + 80 - distMouse) / (this.radius + 80);
              this.vx -= (dxMouse / distMouse) * force * 0.8;
              this.vy -= (dyMouse / distMouse) * force * 0.8;
            }
          }
          
          this.targetRadius = this.baseRadius;
          this.targetGlow = 0;
          this.angle += (0 - this.angle) * 0.1;
        }

        // Apply step coordinates
        this.x += this.vx;
        this.y += this.vy;

        // Boundary checks
        if (this.x - this.radius < 15) {
          this.x = this.radius + 15;
          this.vx *= -0.5;
        }
        if (this.x + this.radius > width - 15) {
          this.x = width - this.radius - 15;
          this.vx *= -0.5;
        }
        if (this.y - this.radius < 15) {
          this.y = this.radius + 15;
          this.vy *= -0.5;
        }
        if (this.y + this.radius > height - 15) {
          this.y = height - this.radius - 15;
          this.vy *= -0.5;
        }

        // Lerp animations
        this.radius += (this.targetRadius - this.radius) * 0.15;
        this.glow += (this.targetGlow - this.glow) * 0.15;
      }

      draw() {
        // Draw glow background drop
        if (this.glow > 0.01) {
          const radGrad = ctx.createRadialGradient(
            this.x,
            this.y,
            2,
            this.x,
            this.y,
            this.radius * 1.3
          );
          const isLight = document.documentElement.classList.contains("light");
          radGrad.addColorStop(0, isLight ? `rgba(0, 150, 255, ${0.15 * this.glow})` : `rgba(0, 240, 255, ${0.15 * this.glow})`);
          radGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 1.3, 0, Math.PI * 2);
          ctx.fillStyle = radGrad;
          ctx.fill();
        }

        // Draw bubble card
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        const isLight = document.documentElement.classList.contains("light");
        ctx.fillStyle = isLight ? "rgba(245, 245, 245, 0.9)" : "rgba(10, 10, 10, 0.9)";
        ctx.strokeStyle = isLight ? `rgba(0, 150, 255, ${0.15 + this.glow * 0.5})` : `rgba(0, 240, 255, ${0.15 + this.glow * 0.5})`;
        ctx.lineWidth = this.glow > 0 ? 1.5 : 1;
        ctx.fill();
        ctx.stroke();

        // Draw node text (with rotation)
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.angle);
        
        ctx.font = `500 ${window.innerWidth < 768 ? "9px" : "11px"} "Space Grotesk", sans-serif`;
        ctx.fillStyle = this.glow > 0 ? (isLight ? "#0096ff" : "#00f0ff") : (isLight ? "#555555" : "#d4d4d4");
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text.toUpperCase(), 0, 0);
        
        ctx.restore();
      }
    }

    // Initialize nodes
    const nodes = skillsList.map((skill, index) => new SkillNode(skill, index));

    // Circle elastic collision solver (removes overlaps)
    const solveCollisions = () => {
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - nodes[i].x;
          const dy = nodes[j].y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = nodes[i].radius + nodes[j].radius + 8; // min space spacing

          if (dist < minDist) {
            // Overlap depth
            const overlap = minDist - dist;
            // Normalized push direction
            const pushX = dx / (dist || 1);
            const pushY = dy / (dist || 1);

            // Shift positions equally
            nodes[i].x -= pushX * overlap * 0.5;
            nodes[i].y -= pushY * overlap * 0.5;
            nodes[j].x += pushX * overlap * 0.5;
            nodes[j].y += pushY * overlap * 0.5;

            // Swap velocities slightly to bounce
            const force = 0.05;
            nodes[i].vx -= pushX * force;
            nodes[i].vy -= pushY * force;
            nodes[j].vx += pushX * force;
            nodes[j].vy += pushY * force;
          }
        }
      }
    };

    // Mouse events inside canvas bounding box
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.active = true;

      // Track currently active skill name
      let hoveredNode = null;
      for (let i = 0; i < nodes.length; i++) {
        const dx = nodes[i].x - mouseRef.current.x;
        const dy = nodes[i].y - mouseRef.current.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < nodes[i].radius) {
          hoveredNode = nodes[i];
          break;
        }
      }
      setHoveredSkill(hoveredNode ? hoveredNode.text : "");
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
      setHoveredSkill("");
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Handle Resize
    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth || window.innerWidth;
      nodes.forEach((n) => {
        n.baseRadius = getBaseRadius();
      });
    };
    window.addEventListener("resize", handleResize);

    // Render physics loops
    const render = () => {
      const isLight = document.documentElement.classList.contains("light");
      ctx.fillStyle = isLight ? "#ffffff" : "#000000";
      ctx.fillRect(0, 0, width, height);

      // Solve overlaps first
      solveCollisions();

      // Render connection line threads (molecular web net)
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 200) {
            const lineAlpha = (1 - dist / 200) * 0.12;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = isLight ? `rgba(0, 0, 0, ${lineAlpha})` : `rgba(255, 255, 255, ${lineAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Find hovered node
      let hoveredNode = null;
      if (mouseRef.current.active) {
        for (let i = 0; i < nodes.length; i++) {
          const dx = mouseRef.current.x - nodes[i].x;
          const dy = mouseRef.current.y - nodes[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < nodes[i].radius) {
            hoveredNode = nodes[i];
            break;
          }
        }
      }

      // Update and draw nodes
      nodes.forEach((n) => {
        n.update(hoveredNode, mouseRef.current);
        n.draw();
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen py-32 px-6 md:px-12 border-t border-neutral-900 bg-black flex flex-col justify-between relative blueprint-grid"
    >
      {/* Title */}
      <div className="flex flex-col gap-2 mb-10">
        <span className="font-mono text-xs text-accent tracking-[0.3em] uppercase">
          [ TECH STACK ]
        </span>
        <h2 className="text-4xl md:text-6xl font-display font-semibold tracking-tight text-white uppercase leading-none">
          SKILL ECOSYSTEM
        </h2>
      </div>

      {/* Physics Container Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full flex-1">
        {/* Left Side: Canvas Ecosystem */}
        <div className="lg:col-span-8 border border-neutral-900 bg-neutral-950/40 rounded-xl relative overflow-hidden h-[550px] w-full flex items-center justify-center group hover:border-accent/20 transition-all duration-300">
          <canvas ref={canvasRef} className="absolute inset-0 block w-full h-full animate-fade-in" />
          
          {/* Subtle instructional card overlays */}
          <div className="absolute top-4 left-4 font-mono text-[9px] text-neutral-500 tracking-widest uppercase pointer-events-none">
            2D Physics Grid // Elastic Colliders
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[9px] text-accent tracking-widest uppercase pointer-events-none animate-pulse">
            // INTERACTIVE: MOVE CURSOR TO DEFLECT NODES
          </div>
        </div>

        {/* Right Side: Hover Detail Info Card */}
        <div className="lg:col-span-4 flex flex-col gap-6 p-8 border border-neutral-900 hover:border-accent/35 bg-neutral-950/40 rounded-xl min-h-[220px] justify-between relative overflow-hidden transition-all duration-300 group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-accent/[0.01] rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col gap-2">
            <span className="font-mono text-[9px] tracking-widest text-accent uppercase">
              [ SELECTED NODE SPEC ]
            </span>
            <h3 className="text-3xl font-display text-white font-medium min-h-[40px] uppercase group-hover:text-accent transition-colors duration-300">
              {hoveredSkill || "HOVER A NODE"}
            </h3>
          </div>

          <p className="text-neutral-400 font-sans font-light text-sm leading-relaxed min-h-[80px]">
            {hoveredSkill === "UI-UX Design" && "Human-centered design process, heuristic evaluations, user testing, responsive layouts, and cohesive brand systems."}
            {hoveredSkill === "Product Design" && "End-to-end product thinking: balancing user friction, product metrics, information hierarchy, and engineering feasibility."}
            {hoveredSkill === "Design Systems" && "Scalable token architecture, component libraries, atomic design principles, and multi-brand style guides."}
            {hoveredSkill === "Figma" && "Mastery of auto-layout, variables, semantic tokens, component variants, interactive prototyping, and design specs."}
            {hoveredSkill === "Wireframing" && "Rapid low-fidelity exploration, structural layout testing, visual hierarchy, and iterative UX problem-solving."}
            {hoveredSkill === "User Research" && "User interviews, persona modeling, empathy maps, task completion testing, and quantitative usability tracking."}
            {hoveredSkill === "Prototyping" && "High-fidelity micro-interaction prototyping with realistic transitions, feedback states, and user test flows."}
            {hoveredSkill === "User Flows" && "Information architecture mapping, decision trees, orientation pathways, and edge-case state handling."}
            {hoveredSkill === "Design Tokens" && "Semantic color ramps, typography scales, spacing units, and cross-platform token sync via JSON & CSS."}
            {hoveredSkill === "Micro-Interactions" && "Subtle feedback states, hover kinematics, spring physics, and kinetic delight that enhances usability."}
            {hoveredSkill === "Accessibility" && "WCAG 2.1 AA/AAA compliance, color contrast auditing, keyboard navigation, focus states, and screen-reader semantics."}
            {hoveredSkill === "React & CSS" && "Translating high-fidelity Figma components into clean, responsive JSX with pixel-perfect accuracy."}
            {hoveredSkill === "Tailwind" && "Utility-first design token orchestration, responsive breakpoints, custom theme configurations, and fluid layouts."}
            {hoveredSkill === "Motion Design" && "Framer Motion choreographies, GSAP scroll triggers, SVG transitions, and layout morphing animations."}
            {hoveredSkill === "Creative Tech" && "Bridging design and code to prototype impossible interfaces, WebGL/canvas canvases, and generative experiments."}
            {hoveredSkill === "Java" && "Deep engineering foundation in core OOP principles, concurrency models, and scalable backend logic."}
            {hoveredSkill === "Python" && "Rapid automation, data scripting, CNN models, and AI agent workflow integrations."}
            {hoveredSkill === "Prompt Eng" && "LLM prompt architecture, contextual grounding, multi-modal workflows, and AI co-pilot integration."}
            {hoveredSkill === "Empathy" && "Listening deeply to user pain points, designing for real humans, and building interfaces with calm consideration."}
            {!hoveredSkill && "Move your cursor inside the interactive physics canvas and hover over any of the floating nodes to inspect the design competence details."}
          </p>

          <div className="border-t border-neutral-900 pt-4 font-mono text-[9px] text-neutral-600 tracking-wider">
            {hoveredSkill ? (
              <span>// STATUS: <span className="text-accent">NODE_ACTIVE</span></span>
            ) : (
              <span>// STATUS: <span className="text-neutral-500">IDLE_STANDBY</span></span>
            )}
          </div>
        </div>
      </div>

      {/* Footer copyright */}
      <div className="flex justify-between items-center font-mono text-[9px] text-neutral-600 tracking-[0.2em] mt-24">
        <span>[SPEC] SKILLS // PHYSICS WEB</span>
        <span>026 // © NITHEESH R</span>
      </div>
    </section>
  );
}
