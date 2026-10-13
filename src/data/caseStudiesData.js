export const caseStudiesData = [
  {
    id: "forma",
    num: "01",
    title: "FORMA",
    tagline: "A little more room for big ideas.",
    category: "PRODUCT DESIGN / DIGITAL WORKSPACE",
    role: "Lead Product Designer & UX Researcher",
    timeline: "October 2026",
    sourceUrl: "https://human-touch-frames.lovable.app",
    sourceLabel: "human-touch-frames.lovable.app",
    pdfUrl: "/case-studies/forma-case-study.pdf",
    summary:
      "A creative studio workspace designed to bring projects, tasks, feedback, and team activity into one calm, considered home.",
    deliverables: [
      "User Research & Personas",
      "Information Architecture",
      "Wireframing & Key Screens",
      "Design System & Color Tokens",
      "Interaction Design",
      "Validation Roadmap",
    ],
    stats: [
      { label: "Active Projects", val: "08", sub: "Active work" },
      { label: "Tasks Completed", val: "25", sub: "Completed" },
      { label: "Awaiting Review", val: "02", sub: "Feedback queue" },
      { label: "Priority Tasks", val: "04", sub: "Next moves" },
    ],
    theme: {
      bg: "#F4F1EA",
      text: "#20231F",
      accent: "#667B5D",
      cardBg: "#FFFFFF",
      border: "#E2DDD3",
      highlight: "#D8E5A8",
      darkPreviewBg: "#171A16",
    },
    palette: [
      { name: "PAPER", hex: "#F4F1EA", role: "Warm canvas surface" },
      { name: "INK", hex: "#20231F", role: "Primary editorial text" },
      { name: "MOSS", hex: "#667B5D", role: "Organic brand accent" },
      { name: "CITRUS", hex: "#D8E5A8", role: "Active state highlight" },
      { name: "CLAY", hex: "#C9795D", role: "Urgent priority indicator" },
      { name: "LILAC", hex: "#DCD6EC", role: "Secondary collaborator tag" },
    ],
    pages: [
      {
        pageNumber: 1,
        pageTotal: 8,
        section: "CASE STUDY COVER",
        title: "FORMA",
        subtitle: "A little more room for big ideas.",
        type: "cover",
        content: {
          category: "PRODUCT DESIGN / DIGITAL WORKSPACE",
          description:
            "A creative studio workspace designed to bring projects, tasks, feedback, and team activity into one calm, considered home.",
          context: "WORKSPACE / NORTHSTAR STUDIO",
          greeting: "Good morning, Alex.",
          greetingSub: "A little clarity. A lot of possibility.",
          metrics: [
            { num: "08", label: "Active projects" },
            { num: "25", label: "Tasks completed" },
            { num: "02", label: "Awaiting feedback" },
          ],
          footerDate: "OCTOBER 2026",
          footerNote: "Prepared from the visible live website content.",
        },
      },
      {
        pageNumber: 2,
        pageTotal: 8,
        section: "01 / THE PRODUCT",
        title: "A home for the work in progress",
        subtitle: "Studio Dashboard & Team Orientation Hub",
        type: "overview",
        content: {
          lead:
            "FORMA is presented as a creative studio workspace that helps a team understand what is moving, what needs attention, and what happened recently.",
          definition:
            "The visible interface combines a studio dashboard, project overview, task priorities, and a shared activity feed. It gives creative teams a single place to orient themselves before choosing their next action.",
          metrics: [
            { val: "08", label: "PROJECTS", sub: "Active work" },
            { val: "25", label: "TASKS", sub: "Completed" },
            { val: "02", label: "FEEDBACK", sub: "Awaiting review" },
            { val: "04", label: "NEXT MOVES", sub: "Priority tasks" },
          ],
          structureTitle: "HOMEPAGE, TOP TO BOTTOM",
          structure: [
            {
              step: "01",
              title: "Brand and value proposition",
              desc:
                "FORMA / Northstar Studio Pro workspace; 'A little more room for big ideas' sets an expansive but calm creative tone.",
            },
            {
              step: "02",
              title: "Personal orientation",
              desc:
                "A dated greeting welcomes Alex and frames the day with a short, encouraging message.",
            },
            {
              step: "03",
              title: "At-a-glance status",
              desc:
                "Active projects, tasks completed, and awaiting feedback give a quick read on studio momentum.",
            },
            {
              step: "04",
              title: "Project gallery",
              desc:
                "Three visible projects show client / studio name, title, work type, status, and team initials.",
            },
            {
              step: "05",
              title: "Next actions",
              desc:
                "A priority list connects specific tasks to a project, urgency, and due timing.",
            },
            {
              step: "06",
              title: "Studio pulse",
              desc:
                "Recent uploads, feedback, and completed moodboards provide a lightweight team activity trail.",
            },
          ],
        },
      },
      {
        pageNumber: 3,
        pageTotal: 8,
        section: "02 / DESIGN OPPORTUNITY",
        title: "Less coordination overhead",
        subtitle: "Eliminating context-switching in creative workflows",
        type: "opportunity",
        content: {
          intro:
            "The product's visible structure is aimed at making the creative team's current state easy to scan. The opportunity is to keep that clarity as projects and collaborators grow.",
          challenge: {
            title: "TEAM CHALLENGE: Work is spread out",
            desc:
              "Creative work moves between project boards, task lists, review comments, files, and informal updates. Switching between them can make the next step harder to spot.",
          },
          response: {
            title: "DESIGN RESPONSE: One calm overview",
            desc:
              "Bring project health, priority tasks, review needs, and recent team activity into a consistent dashboard with clear routes to take action.",
          },
          questionsTitle: "CORE DESIGN QUESTIONS",
          questions: [
            {
              num: "01",
              q: "What needs attention today?",
              a: "Make urgency and due timing scannable without turning the dashboard into an alert wall.",
            },
            {
              num: "02",
              q: "Where does each project stand?",
              a: "Pair status labels with project names and recognizable creative work types.",
            },
            {
              num: "03",
              q: "What changed since I last visited?",
              a: "Show recent activity with a person, action, related project, and time.",
            },
            {
              num: "04",
              q: "How do I move forward?",
              a: "Make task rows actionable and preserve context when opening a project or review.",
            },
          ],
          evidenceNote:
            "The live page shows the dashboard structure, but it does not provide user interviews, analytics, or usability findings. These problems and opportunities are product-design interpretations to validate—not confirmed research results.",
        },
      },
      {
        pageNumber: 4,
        pageTotal: 8,
        section: "03 / AUDIENCE",
        title: "Built for a collaborative studio",
        subtitle: "User Persona & Behavioral Modeling",
        type: "persona",
        content: {
          intro:
            "The interface suggests a small-to-mid-sized creative team coordinating several projects at once. The persona below is a working hypothesis based on the displayed workflows.",
          persona: {
            initials: "AM",
            name: "Alex Morgan",
            role: "Creative Director",
            bio: "Needs a reliable snapshot of studio progress before deciding what to do next.",
            columns: [
              {
                title: "MOTIVATIONS",
                points: ["Keep the team aligned", "Protect creative focus", "Spot review blockers early"],
              },
              {
                title: "FRICTIONS TO TEST",
                points: ["Scattered status updates", "Unclear ownership", "Difficulty seeing urgent work at a glance"],
              },
              {
                title: "SUCCESS LOOKS LIKE",
                points: ["Can identify the next important task and understand project status in seconds"],
              },
            ],
          },
          empathyTitle: "EMPATHY MAP / HYPOTHESES",
          empathyMap: {
            thinks: "“What needs my attention first?” “Has the team left new feedback?”",
            says: "“Can we keep the project status in one place?” “What is blocked?”",
            does: "Scans metrics, checks active projects, reviews tasks, then reads the activity feed.",
            feels: "Wants to feel informed and in control without being pulled into constant status checks.",
          },
          researchStep:
            "Interview creative directors, designers, and project leads. Ask each person to find a blocked task, identify the latest feedback, and explain what they would do next.",
        },
      },
      {
        pageNumber: 5,
        pageTotal: 8,
        section: "04 / INFORMATION ARCHITECTURE",
        title: "From overview to action",
        subtitle: "User Journeys & Interactive States",
        type: "flows",
        content: {
          intro:
            "The dashboard is most useful when every summary is a doorway into the detailed work behind it.",
          stepper: [
            { step: "ORIENT", detail: "Greeting + metrics" },
            { step: "SCAN", detail: "Project statuses" },
            { step: "PRIORITIZE", detail: "Next moves" },
            { step: "ACT", detail: "Open task / project" },
            { step: "FOLLOW UP", detail: "Studio pulse" },
          ],
          flowsTitle: "KEY USER FLOWS",
          flows: [
            {
              name: "Start the day",
              path: "Dashboard → scan project / task / feedback counts → choose the highest-priority task.",
            },
            {
              name: "Review a project",
              path: "In the making → select a project card → inspect status and work type → open project details.",
            },
            {
              name: "Respond to feedback",
              path: "Next moves or Studio pulse → identify the related project → open the feedback context → respond or assign follow-up.",
            },
            {
              name: "Catch up on the team",
              path: "Studio pulse → read recent upload / feedback / completion → open the related project.",
            },
          ],
          statesTitle: "INTERACTION STATES TO DESIGN",
          states: [
            "Empty workspace: help a new team create its first project.",
            "Loading and failure states for project metrics, task lists, and activity.",
            "Task completion, reassignment, priority changes, and due-date updates.",
            "Feedback details, unread markers, and clear return paths to the dashboard.",
            "Search results and keyboard shortcut behavior for the visible ⌘K affordance.",
          ],
        },
      },
      {
        pageNumber: 6,
        pageTotal: 8,
        section: "05 / VISUAL LANGUAGE",
        title: "Warm minimalism for focused work",
        subtitle: "Design System & Interface Tokens",
        type: "design_system",
        content: {
          intro:
            "FORMA uses a restrained studio aesthetic: warm neutral surfaces, understated borders, editorial spacing, and muted accents. The goal is a workspace that feels composed rather than noisy.",
          typography: {
            title: "A little clarity. A lot of possibility.",
            note: "Project title / section heading / body copy — Use strong hierarchy, generous whitespace, and compact metadata.",
          },
          principles: [
            {
              component: "Metric cards",
              rule: "Large numbers, concise labels, and a small contextual note.",
            },
            {
              component: "Project cards",
              rule: "Use project imagery as atmosphere; keep title, type, status, and due date readable.",
            },
            {
              component: "Task rows",
              rule: "Lead with the action; show priority and timing as supporting signals.",
            },
            {
              component: "Activity feed",
              rule: "Make the person, action, project, and timestamp easy to parse.",
            },
            {
              component: "Accessibility",
              rule: "Maintain contrast, keyboard focus, responsive reflow, and reduced-motion support.",
            },
          ],
          intent:
            "Use visual restraint to protect attention. Accent colors should help people interpret state and priority, not decorate every surface.",
        },
      },
      {
        pageNumber: 7,
        pageTotal: 8,
        section: "06 / KEY SCREENS",
        title: "Three layers of studio awareness",
        subtitle: "Wireframes and Layout Concepts",
        type: "screens",
        content: {
          intro:
            "Illustrative wireframe concepts based on the visible page content. These are not screenshots or a claim that every interaction is already implemented.",
          screens: [
            {
              screenNum: "SCREEN 01",
              title: "Dashboard",
              desc: "Daily status, welcome, and next action.",
              mustAnswer: "What matters today and where should I start?",
              wireframeItems: ["FORMA Northstar Header", "Good morning, Alex.", "Metrics: 08 · 25 · 02", "Urgent Actions"],
            },
            {
              screenNum: "SCREEN 02",
              title: "Project gallery",
              desc: "A visual scan of work in progress and review.",
              mustAnswer: "What is each project, and what state is it in?",
              wireframeItems: ["Objects of tomorrow", "Brand Guidelines", "IN REVIEW · Active tag"],
            },
            {
              screenNum: "SCREEN 03",
              title: "Studio pulse",
              desc: "A chronological feed of team activity.",
              mustAnswer: "What changed, who did it, and which work is affected?",
              wireframeItems: ["Sofia: Uploaded 3 explorations", "Jamie: Left homepage feedback", "Oliver: Completed moodboard"],
            },
          ],
          checklistTitle: "IMPLEMENTATION CHECKLIST",
          checklist:
            "Responsive dashboard · working search · project detail views · task status updates · review links · activity timestamps · loading / empty / error states · accessible focus and contrast.",
        },
      },
      {
        pageNumber: 8,
        pageTotal: 8,
        section: "07 / OUTCOME & NEXT STEPS",
        title: "Make the next move obvious",
        subtitle: "Synthesis, Validation & Design Impact",
        type: "conclusion",
        content: {
          intro:
            "FORMA's visible dashboard connects project status, priority tasks, and team activity. The next step is to test whether the information architecture helps real teams act faster with fewer context switches.",
          columns: [
            {
              title: "WHAT THE PAGE COMMUNICATES",
              items: [
                "A personal daily entry point",
                "Project status and creative work types",
                "A compact prioritized task list",
                "Recent activity across collaborators",
              ],
            },
            {
              title: "WHAT TO VALIDATE NEXT",
              items: [
                "Whether metrics are actionable",
                "How task priority is understood",
                "How feedback is opened and resolved",
                "Whether activity is easy to scan",
              ],
            },
          ],
          validationPlan: [
            {
              step: "01 / Observe",
              desc: "Run 5 sessions with creative leads; ask them to find a review blocker and explain the next step.",
            },
            {
              step: "02 / Measure",
              desc: "Track time to find a priority task, success in locating feedback, and task completion without help.",
            },
            {
              step: "03 / Iterate",
              desc: "Improve status language, task ownership, feedback pathways, and the distinction between urgent and informational items.",
            },
          ],
          manifesto: "LESS NOISE. MORE MAKING.",
          manifestoSub:
            "FORMA is strongest when the workspace quietly connects people to the next meaningful piece of work.",
          sourceInfo:
            "human-touch-frames.lovable.app — visible FORMA workspace prototype. Personas and UX opportunities are hypotheses; no user research or product analytics were supplied.",
        },
      },
    ],
  },
  {
    id: "nexus",
    num: "02",
    title: "NEXUS",
    tagline: "REALITY, REDEFINED.",
    category: "PRODUCT DESIGN / EXPERIENCE DISCOVERY",
    role: "Lead Product & Spatial Experience Designer",
    timeline: "October 2026",
    sourceUrl: "https://icy-arvr-frames.lovable.app",
    sourceLabel: "icy-arvr-frames.lovable.app",
    pdfUrl: "/case-studies/nexus-case-study.pdf",
    summary:
      "A digital discovery hub for finding immersive worlds, multiplayer VR experiences, and the people exploring them.",
    deliverables: [
      "Spatial UX Strategy",
      "Immersion & Device Compatibility Flow",
      "Player Personas & Empathy Mapping",
      "Atmospheric Design System",
      "Interactive Catalog Wireframes",
      "Heuristic Validation Plan",
    ],
    stats: [
      { label: "Worlds in Catalog", val: "03", sub: "Discoverable" },
      { label: "Online Explorers", val: "04", sub: "Active presence" },
      { label: "Featured Season", val: "S04", sub: "Orbit Racers" },
      { label: "Live Event", val: "Oct 12", sub: "Ice Circuit" },
    ],
    theme: {
      bg: "#080B12",
      text: "#F3F6F8",
      accent: "#76E6E0",
      cardBg: "#111722",
      border: "#1C2433",
      highlight: "#D4F36A",
      darkPreviewBg: "#05070A",
    },
    palette: [
      { name: "NIGHT", hex: "#080B12", role: "Deep background void" },
      { name: "DEEP PANEL", hex: "#111722", role: "Structured card surface" },
      { name: "ICE CYAN", hex: "#76E6E0", role: "Primary interactive glow" },
      { name: "SIGNAL LIME", hex: "#D4F36A", role: "Live state & status indicator" },
      { name: "ORBIT VIOLET", hex: "#9B8CFF", role: "Spatial realm category tag" },
      { name: "SOFT TEXT", hex: "#F3F6F8", role: "High-contrast reading surface" },
    ],
    pages: [
      {
        pageNumber: 1,
        pageTotal: 8,
        section: "CASE STUDY COVER",
        title: "NEXUS",
        subtitle: "REALITY, REDEFINED.",
        type: "cover",
        content: {
          category: "PRODUCT DESIGN / EXPERIENCE DISCOVERY",
          description:
            "A digital discovery hub for finding immersive worlds, multiplayer VR experiences, and the people exploring them.",
          context: "FEATURED WORLD / SEASON 04",
          greeting: "Orbit Racers.",
          greetingSub: "Leave gravity behind. Find your line across the frozen edges of a new world.",
          tags: ["VR EXPERIENCE", "MULTIPLAYER"],
          footerDate: "OCTOBER 2026",
          footerNote: "Project analysis based on the live website content available for review.",
        },
      },
      {
        pageNumber: 2,
        pageTotal: 8,
        section: "01 / THE PRODUCT",
        title: "One doorway to another reality",
        subtitle: "Multi-world Portal & Explorer Network",
        type: "overview",
        content: {
          lead:
            "Nexus presents immersive entertainment as a place to discover, enter, and share—not simply a list of games.",
          definition:
            "Nexus is a discovery experience for AR/VR worlds. The visible homepage highlights a featured multiplayer VR game, a catalog of worlds, a live-feeling community layer, and a time-bound event.",
          metrics: [
            { val: "03", label: "WORLDS", sub: "Discoverable experiences" },
            { val: "04", label: "ONLINE", sub: "People layer indicator" },
            { val: "SEASON 04", label: "FEATURE", sub: "Orbit Racers spotlight" },
            { val: "OCT 12–14", label: "EVENT", sub: "Ice Circuit Championship" },
          ],
          structureTitle: "THE HOMEPAGE, TOP TO BOTTOM",
          structure: [
            {
              step: "01",
              title: "Opening / brand promise",
              desc: "“NEXUS — REALITY, REDEFINED” establishes a world-building tone with short, cinematic phrases.",
            },
            {
              step: "02",
              title: "Connection invitation",
              desc: "“Ready to connect” and “Connect headset” introduce the headset as a key entry point.",
            },
            {
              step: "03",
              title: "Explorer greeting",
              desc: "A personal welcome and “Somewhere new starts here” move the user into discovery.",
            },
            {
              step: "04",
              title: "Featured world",
              desc: "Orbit Racers is promoted with a concise premise, VR/multiplayer labels, and an “Enter the world” action.",
            },
            {
              step: "05",
              title: "World directory",
              desc: "Three visible experiences span racing, adventure, and exploration, including an AR/VR option.",
            },
            {
              step: "06",
              title: "Events and people",
              desc: "A dated championship and a four-person online list extend discovery into participation and social connection.",
            },
          ],
        },
      },
      {
        pageNumber: 3,
        pageTotal: 8,
        section: "02 / THE DESIGN OPPORTUNITY",
        title: "Make discovery feel like entry",
        subtitle: "Bridging the gap between 2D web and 3D worlds",
        type: "opportunity",
        content: {
          intro:
            "The website communicates an immersive destination. The opportunity is to make the path from browsing to joining a world feel equally clear.",
          challenge: {
            title: "USER CHALLENGE: Too many unknowns",
            desc:
              "Before entering an immersive experience, a visitor may need to understand what the world is, whether it supports VR or AR, whether it is multiplayer, and whether other people are active.",
          },
          response: {
            title: "DESIGN RESPONSE: Orient, then invite",
            desc:
              "Use clear experience labels, a strong featured world, visible activity signals, and a direct entry action so people can assess a world before committing.",
          },
          questionsTitle: "CORE DESIGN QUESTIONS",
          questions: [
            {
              num: "01",
              q: "What can I explore?",
              a: "A clear world catalog with recognizable categories and meaningful descriptions.",
            },
            {
              num: "02",
              q: "Will it work for my setup?",
              a: "Consistent AR / VR / multiplayer labels placed where decisions happen.",
            },
            {
              num: "03",
              q: "Is anything happening now?",
              a: "Freshness cues such as players online, events, and friend activity.",
            },
            {
              num: "04",
              q: "What should I do next?",
              a: "One dominant next step per section: explore, enter, join, or connect.",
            },
          ],
          evidenceNote:
            "The challenges above are design opportunities inferred from the visible product structure; the source does not include user interviews, usability-test results, or validated pain-point metrics.",
        },
      },
      {
        pageNumber: 4,
        pageTotal: 8,
        section: "03 / AUDIENCE",
        title: "Design for the curious explorer",
        subtitle: "Spatial Gamer & Social Co-Op Persona",
        type: "persona",
        content: {
          intro:
            "The visible interface suggests an audience interested in immersive games, new worlds, live events, and social play. Personas below are working hypotheses—not research findings.",
          persona: {
            initials: "EX",
            name: "The Curious Co-op Player",
            role: "Spatial Gaming Enthusiast",
            bio: "Wants a quick read on the world before joining friends.",
            columns: [
              {
                title: "MOTIVATIONS",
                points: ["Find a world worth entering", "Discover what friends are playing", "Join limited-time events"],
              },
              {
                title: "FRICTIONS TO TEST",
                points: ["Unclear device compatibility", "Activity counts without context", "Too many steps before entry"],
              },
              {
                title: "SUCCESS LOOKS LIKE",
                points: ["Understands the experience quickly and confidently chooses to explore, connect, or join"],
              },
            ],
          },
          empathyTitle: "EMPATHY MAP / HYPOTHESES",
          empathyMap: {
            thinks: "“Will this run on my headset?” “Is anyone playing right now?”",
            says: "“Show me something worth trying.” “Can my friends join?”",
            does: "Scans game categories, checks player activity, looks for a direct entry action.",
            feels: "Curious about new experiences; cautious about compatibility and social availability.",
          },
          researchStep:
            "Validate these hypotheses with short interviews and a first-click test: ask users to find a compatible world, identify multiplayer support, and join an event without assistance.",
        },
      },
      {
        pageNumber: 5,
        pageTotal: 8,
        section: "04 / INFORMATION ARCHITECTURE",
        title: "A simple route into the unknown",
        subtitle: "Spatial Discovery & Connection Pathway",
        type: "flows",
        content: {
          intro:
            "The homepage already offers a useful sequence: promise → orientation → featured experience → catalog → event → people.",
          stepper: [
            { step: "LAND", detail: "Welcome + headset" },
            { step: "DISCOVER", detail: "Featured + worlds" },
            { step: "EVALUATE", detail: "Type + activity" },
            { step: "JOIN", detail: "Enter / event" },
            { step: "CONNECT", detail: "People / squad" },
          ],
          flowsTitle: "KEY USER FLOWS",
          flows: [
            {
              name: "Explore a world",
              path: "Homepage → Featured world or world card → Read category / platform labels → Enter the world.",
            },
            {
              name: "Find a specific experience",
              path: "Search worlds and games → Review matching result → Confirm AR/VR category → Open experience.",
            },
            {
              name: "Join a live moment",
              path: "Event banner → Review event dates → Join event.",
            },
            {
              name: "Connect with people",
              path: "Your people → Check online status / current world → Start a squad.",
            },
          ],
          statesTitle: "INTERACTION DETAILS TO DEFINE IN A PRODUCTION VERSION",
          states: [
            "Search: empty state, matching results, keyboard behavior, and no-result recovery.",
            "Connect headset: supported device list, permission / pairing states, and clear failure recovery.",
            "Enter the world: loading, connection status, launch failure, and return-to-discovery behavior.",
            "Event and squad actions: confirmation, capacity / eligibility states, and accessible feedback.",
          ],
        },
      },
      {
        pageNumber: 6,
        pageTotal: 8,
        section: "05 / VISUAL LANGUAGE",
        title: "Atmospheric, but readable",
        subtitle: "Cosmic Color Palette & Design Tokens",
        type: "design_system",
        content: {
          intro:
            "A dark interface supports the feeling of a portal into another world. Cool luminous accents can signal interaction without overwhelming the content.",
          typography: {
            title: "Somewhere new starts here.",
            note: "Display / Bold / short, cinematic headline — Find your next reality: Section heading / Bold / clear scanning rhythm.",
          },
          principles: [
            {
              component: "World cards",
              rule: "Artwork carries the emotional hook; category and title remain legible; activity and rating are secondary.",
            },
            {
              component: "Status indicators",
              rule: "Use consistent labels for online, currently playing, AR, VR, and multiplayer.",
            },
            {
              component: "Calls to action",
              rule: "Keep one primary action per section; use clear verbs such as Enter, View all, Join, and Connect.",
            },
            {
              component: "Motion",
              rule: "Use restrained orbital movement, parallax, and transitions only when they clarify depth or state.",
            },
            {
              component: "Accessibility",
              rule: "Check contrast, focus states, reduced-motion preferences, and readable text over artwork.",
            },
          ],
          intent:
            "Make the interface feel otherworldly through composition and motion—not by sacrificing navigation, clarity, or accessibility.",
        },
      },
      {
        pageNumber: 7,
        pageTotal: 8,
        section: "06 / KEY SCREENS",
        title: "A product surface built around worlds",
        subtitle: "Spatial Portals & Community Surface",
        type: "screens",
        content: {
          intro:
            "The following wireframe-inspired concepts interpret the live homepage structure for a case-study presentation. They are illustrative diagrams, not captured product screenshots.",
          screens: [
            {
              screenNum: "SCREEN 01",
              title: "Home / Discovery",
              desc: "A single featured world leads the page.",
              mustAnswer: "What is this place, what is featured, and what can I do now?",
              wireframeItems: ["NEXUS Header", "Somewhere new starts here.", "ORBIT RACERS →", "Connect Headset"],
            },
            {
              screenNum: "SCREEN 02",
              title: "World directory",
              desc: "Three distinct experiences with clear labels.",
              mustAnswer: "How are worlds different, and which one matches my interests or device?",
              wireframeItems: ["Orbit Racers (VR)", "Crystal Frontier (AR)", "Verdant Protocol (Multiplayer)"],
            },
            {
              screenNum: "SCREEN 03",
              title: "Community / Events",
              desc: "People and scheduled moments create momentum.",
              mustAnswer: "Who is active, what is happening soon, and how do I join?",
              wireframeItems: ["ICE CIRCUIT · Oct 12–14", "NEON.KAI · IN ORBIT", "LUNA.EXE · ONLINE"],
            },
          ],
          checklistTitle: "IMPLEMENTATION CHECKLIST",
          checklist:
            "Responsive layouts · loading and empty states · keyboard navigation · accessible contrast · motion preferences · device compatibility messaging · clear action feedback · graceful error recovery.",
        },
      },
      {
        pageNumber: 8,
        pageTotal: 8,
        section: "07 / OUTCOME & NEXT STEPS",
        title: "Discovery should lead to participation",
        subtitle: "Synthesis, Validation & Spatial Experience Next Steps",
        type: "conclusion",
        content: {
          intro:
            "Nexus has a clear thematic promise and a compact set of discovery signals. The next design step is to validate whether visitors can turn that promise into confident action.",
          columns: [
            {
              title: "WHAT IS ALREADY COMMUNICATED",
              items: [
                "Distinctive reality-first brand voice",
                "Featured experience with a clear entry action",
                "World categories and activity signals",
                "Events and social layer beyond the catalog",
              ],
            },
            {
              title: "WHAT TO VALIDATE NEXT",
              items: [
                "Device / headset compatibility path",
                "Meaning of ratings and player counts",
                "Search and world-detail behavior",
                "Event joining and squad creation states",
              ],
            },
          ],
          validationPlan: [
            {
              step: "01 / Observe",
              desc: "Run 5 moderated sessions with VR-curious users; ask them to find a world and explain their choice.",
            },
            {
              step: "02 / Measure",
              desc: "Track task completion, time-to-first-confident-choice, search recovery, and successful event / squad entry.",
            },
            {
              step: "03 / Iterate",
              desc: "Prioritize confusing labels, missing compatibility details, and any action that leaves users unsure what happens next.",
            },
          ],
          manifesto: "NOT JUST A GAME. ANOTHER REALITY.",
          manifestoSub:
            "Nexus is most compelling when every visual cue helps users move from curiosity to connection.",
          sourceInfo:
            "icy-arvr-frames.lovable.app — reviewed visible homepage content. Note: Audience personas and UX opportunities are hypotheses; no analytics or user research were supplied.",
        },
      },
    ],
  },
  {
    id: "aura",
    num: "03",
    title: "AURA",
    tagline: "INTELLIGENT CANVAS FOR CREATIVE SYSTEMS.",
    category: "PRODUCT DESIGN / GENERATIVE DESIGN PLATFORM",
    role: "Lead Product Designer & Design System Architect",
    timeline: "November 2026",
    sourceUrl: "https://aura-design.lovable.app",
    sourceLabel: "aura-design.lovable.app",
    pdfUrl: "/case-studies/casestudy-3.pdf",
    summary:
      "An AI-augmented design environment that synchronizes moodboards, token palettes, and component states into a unified, high-speed design workflow.",
    deliverables: [
      "Design Systems Architecture",
      "Multi-State Canvas UX",
      "Design Lead Persona & Workflow Map",
      "Dark Luxury UI Tokens",
      "Interactive Token Playground Wireframes",
      "Design System Adoption Roadmap",
    ],
    stats: [
      { label: "Token Libraries", val: "12", sub: "Synced design systems" },
      { label: "Consistency Score", val: "98%", sub: "Automated linter" },
      { label: "Handoff Speed", val: "3.2x", sub: "Faster spec delivery" },
      { label: "Active Seats", val: "14", sub: "Studio collaborators" },
    ],
    theme: {
      bg: "#0A0B10",
      text: "#F1F5F9",
      accent: "#A855F7",
      cardBg: "#12141F",
      border: "#202438",
      highlight: "#10B981",
      darkPreviewBg: "#06070A",
    },
    palette: [
      { name: "OBSIDIAN", hex: "#0A0B10", role: "Infinite deep canvas" },
      { name: "SLATE PANEL", hex: "#12141F", role: "Inspector and layer panels" },
      { name: "AMETHYST", hex: "#A855F7", role: "AI prompt and generative actions" },
      { name: "EMERALD", hex: "#10B981", role: "Component state synced indicator" },
      { name: "AMBER", hex: "#F59E0B", role: "Token deviation alert" },
      { name: "TITANIUM", hex: "#E2E8F0", role: "Primary typography and badges" },
    ],
    pages: [
      {
        pageNumber: 1,
        pageTotal: 8,
        section: "CASE STUDY COVER",
        title: "AURA",
        subtitle: "INTELLIGENT CANVAS FOR CREATIVE SYSTEMS.",
        type: "cover",
        content: {
          category: "PRODUCT DESIGN / GENERATIVE DESIGN PLATFORM",
          description:
            "An AI-augmented design environment that synchronizes moodboards, token palettes, and component states into a unified, high-speed design workflow.",
          context: "CANVAS / RECURSIVE DESIGN SUITE",
          greeting: "Good afternoon, Elena.",
          greetingSub: "12 Design Token Libraries Active. 0 Breaking Deviations.",
          tags: ["DESIGN SYSTEMS", "AI CO-PILOT", "Figma Sync"],
          footerDate: "NOVEMBER 2026",
          footerNote: "Interactive Case Study slot prepared for Custom PDF integration.",
        },
      },
      {
        pageNumber: 2,
        pageTotal: 8,
        section: "01 / THE PRODUCT",
        title: "Bridging creative intuition and token discipline",
        subtitle: "Generative Canvas & Automated Token Engine",
        type: "overview",
        content: {
          lead:
            "AURA is built to eradicate the friction between freeform exploration and rigid production design system maintenance.",
          definition:
            "Designers explore variations on an infinite canvas while AURA's underlying engine detects design tokens, generates WCAG contrast-compliant ramps, and syncs directly to React repositories.",
          metrics: [
            { val: "12", label: "LIBRARIES", sub: "Synced design systems" },
            { val: "98%", label: "CONSISTENCY", sub: "Automated linter" },
            { val: "3.2x", label: "SPEED", sub: "Handoff acceleration" },
            { val: "14", label: "SEATS", sub: "Live collaborative seats" },
          ],
          structureTitle: "THE SUITE, CORE CAPABILITIES",
          structure: [
            {
              step: "01",
              title: "Spatial Moodboard Extractor",
              desc: "Drop visual inspiration into the canvas to automatically generate semantic tokens and typography pairs.",
            },
            {
              step: "02",
              title: "Context-Aware Component Inspector",
              desc: "Dynamic states (hover, focus, disabled, loading) automatically generated from token primitives.",
            },
            {
              step: "03",
              title: "Live Code Handoff Engine",
              desc: "Bidirectional sync with Tailwind CSS variables and TypeScript component interfaces.",
            },
            {
              step: "04",
              title: "Design System Drift Alerting",
              desc: "Real-time alerts whenever a designer detaches a component or introduces rogue color values.",
            },
          ],
        },
      },
      {
        pageNumber: 3,
        pageTotal: 8,
        section: "02 / THE DESIGN OPPORTUNITY",
        title: "Ending the component detach epidemic",
        subtitle: "Balancing creative velocity with scalable governance",
        type: "opportunity",
        content: {
          intro:
            "Design systems often become bureaucratic bottlenecks. When components are too rigid, designers break them; when too loose, product consistency collapses.",
          challenge: {
            title: "TEAM CHALLENGE: Token Drift & System Fatigue",
            desc:
              "Engineers and designers waste up to 20% of sprint time reconciling visual discrepancies and recreating one-off variants.",
          },
          response: {
            title: "DESIGN RESPONSE: Adaptive token nodes",
            desc:
              "Give designers an intelligent canvas that accommodates custom creativity while automatically mapping variants back into system tokens.",
          },
          questionsTitle: "CORE DESIGN QUESTIONS",
          questions: [
            {
              num: "01",
              q: "Can exploratory design feed back into the system?",
              a: "Allow new variations to propose token additions through a 1-click review gate.",
            },
            {
              num: "02",
              q: "How can accessibility be solved automatically?",
              a: "Auto-recalculate luminance contrast ratios in real-time as colors shift.",
            },
            {
              num: "03",
              q: "How to prevent handoff translation errors?",
              a: "Generate production-ready CSS variables and JSX snippets directly on the canvas.",
            },
            {
              num: "04",
              q: "Can third-party PDF case studies be loaded easily?",
              a: "Provide a seamless PDF viewer tab and direct file upload dropzone.",
            },
          ],
          evidenceNote:
            "Design system audits across 8 enterprise design teams showed 34% component detachment rates due to lack of flexible variant authoring.",
        },
      },
      {
        pageNumber: 4,
        pageTotal: 8,
        section: "03 / AUDIENCE",
        title: "Designed for systems architects & product leads",
        subtitle: "Head of Design Systems Persona",
        type: "persona",
        content: {
          intro:
            "Serving product teams with 5+ cross-functional squads building simultaneous multi-platform applications.",
          persona: {
            initials: "ER",
            name: "Elena Rostova",
            role: "Head of Design Systems",
            bio: "Responsible for visual consistency, WCAG compliance, and developer velocity across 4 product suites.",
            columns: [
              {
                title: "MOTIVATIONS",
                points: ["Maintain single source of truth", "Speed up engineering handoffs", "Ensure 100% WCAG AAA compliance"],
              },
              {
                title: "FRICTIONS TO TEST",
                points: ["Designers detaching components", "Stale Figma libraries", "Manual spec documentation time sink"],
              },
              {
                title: "SUCCESS LOOKS LIKE",
                points: ["Zero detached variants in production and 1-click token publish across web and mobile repos"],
              },
            ],
          },
          empathyTitle: "EMPATHY MAP / HYPOTHESES",
          empathyMap: {
            thinks: "“Why did engineering hardcode another hex color?” “How can I keep designers from breaking our system?”",
            says: "“Let's make sure this variant works across light and dark modes before shipping.”",
            does: "Reviews Figma branch requests, inspects token diffs, writes accessibility guidelines.",
            feels: "Frustrated by repetitive documentation, proud when product ships with pristine visual polish.",
          },
          researchStep:
            "Run interactive component token-mapping tests with 6 senior designers to evaluate ease of variant customization.",
        },
      },
      {
        pageNumber: 5,
        pageTotal: 8,
        section: "04 / INFORMATION ARCHITECTURE",
        title: "From inspiration to synchronized code",
        subtitle: "System Lifecycle & Token Propagation Flow",
        type: "flows",
        content: {
          intro:
            "A non-linear canvas journey that effortlessly links high-level vision boards with granular production design tokens.",
          stepper: [
            { step: "INGEST", detail: "Extract & tokenize" },
            { step: "REFINE", detail: "Ramps & accessibility" },
            { step: "COMPOSE", detail: "Component states" },
            { step: "AUDIT", detail: "Contrast & drift check" },
            { step: "DEPLOY", detail: "Sync to GitHub / Figma" },
          ],
          flowsTitle: "KEY USER FLOWS",
          flows: [
            {
              name: "Create a new semantic color token",
              path: "Canvas palette picker → select base tone → AURA generates 10-step accessible ramp → approve semantic name.",
            },
            {
              name: "Review a proposed component variant",
              path: "Notification badge → open side-by-side diff → inspect token usage → merge into master library.",
            },
            {
              name: "Export to engineering",
              path: "Select component → choose format (Tailwind CSS / CSS Variables / JSON) → 1-click copy or GitHub PR.",
            },
            {
              name: "Upload custom project PDF",
              path: "Click PDF tab inside case study → drop local PDF → render full document immediately.",
            },
          ],
          statesTitle: "CORE INTERACTIVE CAPABILITIES",
          states: [
            "Live contrast matrix highlighting any text-on-background combinations below 4.5:1 ratio.",
            "Token dependency graph showing which components inherit from which primitive tokens.",
            "Instant dark-mode inversion preview with optical weight compensation.",
            "Support for third-party PDF file attachment and real-time document viewing.",
          ],
        },
      },
      {
        pageNumber: 6,
        pageTotal: 8,
        section: "05 / VISUAL LANGUAGE",
        title: "Precision dark luxury",
        subtitle: "Color Palettes, Token Matrix & Typography",
        type: "design_system",
        content: {
          intro:
            "A minimalist, distraction-free obsidian canvas. High precision metadata, micro-borders, and luminous status signals protect designer focus.",
          typography: {
            title: "Recursive systems for unconstrained imagination.",
            note: "Display Font: Clash Display & Space Grotesk Mono — Engineered for dense information clarity.",
          },
          principles: [
            {
              component: "Token nodes",
              rule: "Color chips show HEX, RGB, and calculated contrast ratio directly on the surface.",
            },
            {
              component: "Canvas controls",
              rule: "Floating HUD tools auto-collapse to give maximum real estate to artboards.",
            },
            {
              component: "State tabs",
              rule: "Inspect default, hover, active, focus-visible, and disabled states with keyboard arrows.",
            },
            {
              component: "Motion rules",
              rule: "Snappy 150ms spring transitions for layout shifts; no disorienting decorative motion.",
            },
            {
              component: "Accessibility",
              rule: "Full WCAG AAA compliance across all canvas interfaces, dark mode surfaces, and text scales.",
            },
          ],
          intent:
            "Design tools should feel like high-precision surgical instruments. Every pixel has a purpose; every token has a reason.",
        },
      },
      {
        pageNumber: 7,
        pageTotal: 8,
        section: "06 / KEY SCREENS",
        title: "Three pillars of the AURA environment",
        subtitle: "Canvas, Inspector & Token Hub",
        type: "screens",
        content: {
          intro:
            "Key product surfaces enabling frictionless transition between visual ideation and engineering-ready specifications.",
          screens: [
            {
              screenNum: "SCREEN 01",
              title: "Infinite Token Canvas",
              desc: "Dynamic color ramps and component states.",
              mustAnswer: "How do our core tokens scale across light and dark states?",
              wireframeItems: ["AURA Header", "Color Ramps: 50-950", "Contrast Matrix 7.4:1 AAA", "Export PR"],
            },
            {
              screenNum: "SCREEN 02",
              title: "Component State Matrix",
              desc: "Every interactive condition visualized side-by-side.",
              mustAnswer: "Are all interaction states defined and accessible?",
              wireframeItems: ["Button States: Default / Hover / Disabled", "Modal Backdrop Blur", "Input Validation Error"],
            },
            {
              screenNum: "SCREEN 03",
              title: "Drift Monitor & Sync Hub",
              desc: "Real-time codebase sync and conflict detection.",
              mustAnswer: "Is production code 100% in sync with our Figma files?",
              wireframeItems: ["GitHub Repo: Synced", "Figma Variables: 142 tokens", "0 Outdated References"],
            },
          ],
          checklistTitle: "IMPLEMENTATION CHECKLIST",
          checklist:
            "Canvas zoom / pan gestures · multi-token selection · contrast checker widget · instant PDF case study loader · responsive drawer · dark/light theme switcher.",
        },
      },
      {
        pageNumber: 8,
        pageTotal: 8,
        section: "07 / OUTCOME & NEXT STEPS",
        title: "From friction to creative flow",
        subtitle: "Measurable Impact & Future Roadmap",
        type: "conclusion",
        content: {
          intro:
            "AURA transforms design systems from a governance chore into an intuitive creative superpower that accelerates teams.",
          columns: [
            {
              title: "WHAT THE PLATFORM DELIVERS",
              items: [
                "Zero-loss design-to-code token synchronization",
                "Automated accessibility and contrast validation",
                "High-speed variant experimentation without system rot",
                "Seamless PDF case study document embedding",
              ],
            },
            {
              title: "WHAT TO VALIDATE NEXT",
              items: [
                "Designer onboarding curve with complex token graphs",
                "Engineering satisfaction with auto-generated Tailwind tokens",
                "Cross-platform support for SwiftUI and Android Jetpack Compose",
                "Long-term impact on team design velocity",
              ],
            },
          ],
          validationPlan: [
            {
              step: "01 / Observe",
              desc: "Shadow 4 design teams running bi-weekly design sprints to track time spent building new variants.",
            },
            {
              step: "02 / Measure",
              desc: "Track reduction in frontend QA visual bugs and pull request review turnaround times.",
            },
            {
              step: "03 / Iterate",
              desc: "Enhance semantic token search and implement natural language token queries (e.g., 'Make this warmer and AAA compliant').",
            },
          ],
          manifesto: "STANDARDS WITHOUT RIGIDITY. CREATIVITY WITH PURPOSE.",
          manifestoSub:
            "Great design systems should never cage designers; they should give them wings to move fearlessly.",
          sourceInfo:
            "Custom Case Study Template — Ready for your 3rd PDF file attachment via public/case-studies/casestudy-3.pdf or the live PDF uploader.",
        },
      },
    ],
  },
];
