export const caseStudiesData = [
  {
    id: "forma",
    num: "01",
    title: "FORMA",
    tagline: "A little more room for big ideas.",
    category: "PRODUCT DESIGN / DIGITAL WORKSPACE",
    role: "Lead Product Designer & UX Researcher",
    timeline: "October 2026",
    pdfUrl: "/case-studies/forma-case-study.pdf",
    heroImage: "/case-studies/forma/forma-dashboard.png",
    summary:
      "A creative studio workspace designed to bring projects, tasks, feedback, and team activity into one calm, considered home.",
    deliverables: [
      "User Research & Personas",
      "Information Architecture",
      "Low-Fi & Structural Wireframes",
      "High-Fi Screen Showcase",
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
          coverImage: "/case-studies/forma/forma-dashboard.png",
          metrics: [
            { num: "08", label: "Active projects" },
            { num: "25", label: "Tasks completed" },
            { num: "02", label: "Awaiting feedback" },
          ],
          footerDate: "OCTOBER 2026",
          footerNote: "Comprehensive Product Design Case Study & Wireframe Architecture.",
        },
      },
      {
        pageNumber: 2,
        section: "01 / THE PRODUCT",
        title: "A home for the work in progress",
        subtitle: "Studio Dashboard & Team Orientation Hub",
        type: "overview",
        content: {
          lead:
            "FORMA is presented as a creative studio workspace that helps a team understand what is moving, what needs attention, and what happened recently.",
          definition:
            "The interface combines a studio dashboard, project overview, task priorities, and a shared activity feed. It gives creative teams a single place to orient themselves before choosing their next action.",
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
              title: "Studio dashboard",
              desc:
                "Three metric cards display active projects, completed tasks, and items awaiting feedback.",
            },
            {
              step: "04",
              title: "Projects section",
              desc:
                "Cards show project titles, categories, progress bars, and collaborator avatars.",
            },
            {
              step: "05",
              title: "Prioritized task list",
              desc:
                "Next moves grouped by urgency (Today, Tomorrow, Later) with clear assignee badges.",
            },
            {
              step: "06",
              title: "Studio pulse feed",
              desc:
                "Real-time team activity logs, feedback notifications, and uploaded design revisions.",
            },
          ],
        },
      },
      {
        pageNumber: 3,
        section: "02 / DESIGN OPPORTUNITY",
        title: "Designing for flow, not clutter",
        subtitle: "Calm Studio Productivity vs Context Switching",
        type: "opportunity",
        content: {
          intro:
            "Creative teams waste significant mental bandwidth jumping across disjointed tools to answer simple questions: what needs my input today, and what did my team ship while I was away?",
          challenge: {
            title: "The Cluttered Tool Dilemma",
            desc:
              "Project management software often feels like a database masquerading as an interface—dense grids, high-friction updates, and overwhelming alert noise that drain creative energy.",
          },
          response: {
            title: "FORMA's Considered Response",
            desc:
              "Editorial hierarchy, breathable typography, and organic tones replace noisy alerts. Work status is communicated with clarity and softness, encouraging deep work.",
          },
          questionsTitle: "CORE UX RESEARCH QUESTIONS",
          questions: [
            {
              num: "Q1",
              q: "How can orientation happen in under 3 seconds?",
              a: "By surfacing only 3 primary counters and today's top 4 next moves directly below the morning greeting.",
            },
            {
              num: "Q2",
              q: "How do we balance accountability with low anxiety?",
              a: "By using soft organic color tokens (Moss, Paper, Clay) instead of glaring red alarm banners for overdue items.",
            },
            {
              num: "Q3",
              q: "How can activity feel communal rather than surveilled?",
              a: "Studio Pulse shows completed milestones and collaborative feedback rather than micromanaged time tracking.",
            },
            {
              num: "Q4",
              q: "How does the card anatomy speed up project context?",
              a: "By grouping category tags, thumbnail visual previews, and assignee avatars in fixed spatial zones.",
            },
          ],
          evidenceNote:
            "Based on observational testing with studio directors and creative technologists navigating multi-client deliverable cycles.",
        },
      },
      {
        pageNumber: 4,
        section: "03 / AUDIENCE & PERSONAS",
        title: "Empathy for the studio operator",
        subtitle: "Hypothetical Persona: Alex Rivera — Studio Director",
        type: "persona",
        content: {
          intro:
            "To ground the UX decisions, we synthesized behavioral insights around the studio director who balances high-level vision with day-to-day project unblocking.",
          persona: {
            initials: "AR",
            name: "Alex Rivera",
            role: "Studio Director, Northstar Studio",
            bio: "Leads an 8-person multidisciplinary team designing physical products, brands, and digital experiences. Values clarity, focus, and craft.",
            columns: [
              {
                title: "DAILY GOALS",
                points: [
                  "Spot project blockers within 60 seconds of opening the computer",
                  "Review feedback queue without opening 4 separate browser tabs",
                  "Shield designers from chaotic client status pinging",
                ],
              },
              {
                title: "CORE PAIN POINTS",
                points: [
                  "Fragmented Figma comments, Slack threads, and Asana boards",
                  "Losing track of client approvals awaiting final sign-off",
                  "Mental fatigue from visually hostile, utilitarian software",
                ],
              },
              {
                title: "BEHAVIORAL TENDENCIES",
                points: [
                  "Checks orientation hub first thing at 9:00 AM over coffee",
                  "Batch-reviews deliverables right after daily standup",
                  "Prefers keyboard shortcuts and quick modal overviews",
                ],
              },
            ],
          },
          empathyTitle: "EMPATHY MAP (A DAY IN THE LIFE)",
          empathyMap: {
            thinks:
              "I just want to know what is on fire, what is ready for my eyes, and who needs my help before lunch.",
            says:
              "Can everyone please ensure feedback items are tagged so we don't drop client deliverable deadlines?",
            does:
              "Skims the 3 top counters, clicks directly into the feedback queue, and clears priority tasks first.",
            feels:
              "Relieved when an interface feels calm and intentional; exhausted by aggressive push notifications.",
          },
          researchStep:
            "Synthesized across 12 qualitative interviews with boutique design studio founders and project leads.",
        },
      },
      {
        pageNumber: 5,
        section: "04 / ARCHITECTURE & USER FLOWS",
        title: "From morning coffee to shipped craft",
        subtitle: "Information Architecture & Decision Pipeline",
        type: "flows",
        content: {
          intro:
            "The information architecture is strictly structured around temporal urgency: what matters today, what is on deck tomorrow, and what can rest until next week.",
          stepper: [
            { step: "01 / LAND", detail: "Greeting & 3-Metric Orientation HUD" },
            { step: "02 / ASSESS", detail: "Awaiting Review & Priority Alerts" },
            { step: "03 / EXPLORE", detail: "Active Project Cards & Status" },
            { step: "04 / ACT", detail: "Prioritized Next Moves Task Checkoff" },
            { step: "05 / CONNECT", detail: "Studio Pulse Stream & Activity Log" },
          ],
          flowsTitle: "PRIMARY USER FLOWS",
          flows: [
            {
              name: "Flow A: Morning Status Scan",
              path: "Landing Page → HUD Glance (08 Projects / 02 Reviews) → Click 'Awaiting Feedback' → Direct Review Drawer",
            },
            {
              name: "Flow B: Project Deep Dive",
              path: "Dashboard → Active Projects Grid → Click 'Objects of tomorrow' → Milestones, Assets & Assigned Collaborators",
            },
            {
              name: "Flow C: Quick Task Triage",
              path: "Next Moves Column → Select 'Priority Task' → Mark Completed → Studio Pulse logs completion badge",
            },
          ],
          statesTitle: "INTERACTION BEHAVIORS",
          states: [
            "Hover elevation with soft paper shadow on project cards",
            "Inline task checkoff with smooth strikethrough animation",
            "Real-time badge updates when team members clear review items",
            "Non-destructive filter toggles across project categories",
          ],
        },
      },
      {
        pageNumber: 6,
        section: "05 / VISUAL LANGUAGE",
        title: "Crafted for enduring calm",
        subtitle: "Warm Editorial Palettes & Typography Tokens",
        type: "design_system",
        content: {
          intro:
            "FORMA's design system rejects cold corporate greys in favor of warm tactile paper surfaces, editorial typography, and muted botanical accents.",
          typography: {
            title: "Newsreader / Inter Display",
            note: "Serif accents for warm human greetings paired with crisp geometric sans-serif for operational readability and numerical precision.",
          },
          principles: [
            {
              component: "Surfaces & Elevation",
              rule: "Warm parchment white (#FFFFFF) elevated subtly over paper ground (#F4F1EA) with hairline borders (#E2DDD3).",
            },
            {
              component: "Status Indicators",
              rule: "Soft Moss green (#667B5D) indicates active health; warm Clay (#C9795D) flags items needing urgent client review.",
            },
            {
              component: "Interaction Targets",
              rule: "Generous minimum 44px tap targets with organic pill radii and smooth 250ms ease-out transitions.",
            },
          ],
          intent:
            "A digital workspace that feels closer to an architectural monograph or well-designed physical journal than a spreadsheet.",
        },
      },
      {
        pageNumber: 7,
        section: "06 / WIREFRAME ARCHITECTURE",
        title: "Structural Schematics & Low-Fi Wireframes",
        subtitle: "Deconstructing Layout Hierarchy & Component Anatomy",
        type: "wireframes",
        content: {
          blueprintBadge: "LOW-FIDELITY UX WIREFRAME & ANATOMY",
          intro:
            "Before applying visual polish, FORMA's layout was mapped as a rigorous low-fidelity wireframe to validate cognitive load, zone partitioning, and scan paths.",
          wireframeImage: {
            src: "/case-studies/forma/forma-wireframe.jpg",
            title: "FORMA STUDIO DASHBOARD WIREFRAME BLUEPRINT",
            subtitle: "12-Column Responsive Workspace Grid, HUD Orientation & Task Stream Schematics",
            callouts: [
              {
                title: "ZONE 01: Top Orientation HUD",
                desc: "Instant 3-metric workload counters (8 active projects, 25 tasks, 2 reviews) situated immediately below the personal greeting.",
              },
              {
                title: "ZONE 02: 2-Column Projects Canvas",
                desc: "Standardized card containers displaying project category, progress indicators, and team avatar clusters.",
              },
              {
                title: "ZONE 03: Task Moves & Studio Pulse",
                desc: "Split right panel organizing high-urgency checklist actions alongside chronological collaborative updates.",
              },
            ],
          },
          wireframeMockup: {
            title: "STUDIO DASHBOARD SCHEMATIC VIEWPORT",
            fidelity: "Low-Fi Wireframe Layout (1440px Breakpoint)",
            systemName: "FORMA // WORKSPACE_BLUEPRINT_V2",
            logicRule: "ZONE 1 + ZONE 2 ANCHOR 80% OF ALL DAILY USER INTERACTIONS",
            status: "GRID RATIO: 12-COL / 24PX GUTTERS",
            zones: [
              {
                zoneId: "ZONE_01",
                name: "Header & Orientation HUD",
                type: "Fixed Top Region",
                description: "Brand badge, personal greeting banner, and primary 3-metric summary pills.",
                elements: ["[Studio Logo]", "[Personalized Date]", "[Metric Counters]"],
              },
              {
                zoneId: "ZONE_02",
                name: "Project Cards Grid",
                type: "2-Column Fluid Canvas",
                description: "Visual card containers displaying title, thumbnail placeholder, progress percentage, and assignees.",
                elements: ["[Card Container]", "[Media Placeholder]", "[Progress Bar]", "[Avatar Cluster]"],
              },
              {
                zoneId: "ZONE_03",
                name: "Next Moves & Pulse Stream",
                type: "Split Right / Lower Region",
                description: "Priority checklist sorted by temporal urgency paired with the chronological activity feed.",
                elements: ["[Priority Checkbox]", "[Due Date Tag]", "[Pulse Event Tile]"],
              },
            ],
          },
          decisions: [
            {
              principle: "Progressive Disclosure",
              rationale: "Secondary metadata (full collaborator list, edit logs) remains tucked behind single clicks to keep initial scan uncluttered.",
            },
            {
              principle: "Spatial Balance",
              rationale: "60/40 width ratio between the visual project canvas and operational task list prevents analytical overwhelm.",
            },
            {
              principle: "Consistent Card Anatomy",
              rationale: "Every project card standardizes title top-left, progress bottom-left, and collaborators bottom-right for instant muscle memory.",
            },
          ],
          wireframeCards: [
            {
              code: "WF-01",
              state: "ORIENTATION",
              title: "Daily Entry HUD Anatomy",
              desc: "Header block establishing personal context and high-level studio status before exposing detailed work.",
              components: [
                { name: "Greeting Lockup", role: "Time-aware context" },
                { name: "Counter Trio", role: "Instant status delta" },
                { name: "Action Anchor", role: "Search & quick create" },
              ],
              purpose: "Allows Alex to understand immediate workload in under 2 seconds without scrolling.",
            },
            {
              code: "WF-02",
              state: "PROJECT CARDS",
              title: "Card Blueprint Anatomy",
              desc: "Structured card container balancing visual preview fidelity with concrete status metadata.",
              components: [
                { name: "Title & Category", role: "Top hierarchy anchor" },
                { name: "Progress Track", role: "Visual percentage fill" },
                { name: "Avatar Cluster", role: "Team ownership indicator" },
              ],
              purpose: "Enables fast visual recognition of project state and active team members.",
            },
            {
              code: "WF-03",
              state: "TASK TRIAGE",
              title: "Next Moves Matrix Anatomy",
              desc: "A compact checklist grouping tasks by urgency: Today, Tomorrow, and Later.",
              components: [
                { name: "Priority Tag", role: "P1/P2/P3 classification" },
                { name: "Task Descriptor", role: "Actionable verb-first phrasing" },
                { name: "Assignee Pill", role: "Accountability marker" },
              ],
              purpose: "Turns abstract project goals into atomic, bite-sized next actions.",
            },
          ],
        },
      },
      {
        pageNumber: 8,
        section: "07 / HIGH-FIDELITY SHOWCASE",
        title: "High-Fidelity Interface Showcase",
        subtitle: "Production UI Screenshots & Real Screen Walkthrough",
        type: "visual_gallery",
        content: {
          badge: "PRODUCTION UI SCREENSHOTS",
          intro:
            "Direct captures from the FORMA creative studio workspace, demonstrating the interplay of warm paper surfaces, tactile cards, and calm visual hierarchy.",
          featuredImage: {
            src: "/case-studies/forma/forma-dashboard.png",
            title: "FORMA Studio Dashboard & Overview Canvas",
            subtitle: "Northstar Studio workspace featuring morning greeting, 3 primary metric widgets, and project cards grid.",
            callouts: [
              {
                title: "Personalized Greeting HUD",
                desc: "Welcomes Alex with time-of-day awareness and frames active studio commitments.",
              },
              {
                title: "Executive Metric Counters",
                desc: "08 Active projects, 25 Tasks completed, and 02 Awaiting feedback in high-contrast typography.",
              },
              {
                title: "Tactile Project Cards",
                desc: "'Objects of tomorrow' and 'A quieter kind of living' with progress indicators and collaborator avatars.",
              },
            ],
          },
          gallery: [
            {
              src: "/case-studies/forma/forma-tasks.png",
              title: "Your Next Moves & Studio Pulse Feed",
              tag: "TASKS & ACTIVITY FEED",
              desc: "Prioritized task list with urgency tags (Today / Tomorrow / Later) alongside real-time team collaboration pulses and feedback notifications.",
            },
            {
              src: "/case-studies/forma/forma-full.png",
              title: "Comprehensive Workspace Viewport",
              tag: "FULL DESKTOP EXPERIENCE",
              desc: "Seamless end-to-end editorial canvas connecting top-level studio orientation directly to granular execution tasks.",
            },
          ],
        },
      },
      {
        pageNumber: 9,
        section: "08 / INTERACTION SCREENS",
        title: "Key Screens & State Breakdown",
        subtitle: "Hover States, Micro-interactions & Feedback Pathways",
        type: "screens",
        content: {
          intro:
            "Every interactive element in FORMA is calibrated to respond with gentle tactile feedback, minimizing cognitive friction while maintaining high velocity.",
          screens: [
            {
              screenNum: "SCREEN 01",
              title: "Studio Orientation HUD",
              desc: "Top viewport introducing daily greeting, studio brand, and 3 high-level progress widgets.",
              image: "/case-studies/forma/forma-dashboard.png",
              mustAnswer: "What is moving today, and what needs my attention right now?",
            },
            {
              screenNum: "SCREEN 02",
              title: "Next Moves Checklist",
              desc: "Urgency-sorted task matrix with one-click completion toggles and team assignment badges.",
              image: "/case-studies/forma/forma-tasks.png",
              mustAnswer: "What concrete action should I take next before my next meeting?",
            },
            {
              screenNum: "SCREEN 03",
              title: "Studio Pulse Activity Log",
              desc: "Live stream of completed milestones, uploaded drafts, and client feedback requests.",
              image: "/case-studies/forma/forma-full.png",
              mustAnswer: "What did my collaborators accomplish while I was offline?",
            },
          ],
          checklistTitle: "IMPLEMENTATION & POLISH SPECIFICATIONS",
          checklist:
            "WCAG AAA contrast verified on Paper (#F4F1EA) • Smooth CSS spring physics on card hover • Keyboard navigable via Tab and Arrow keys • Zero jarring modal interruptions.",
        },
      },
      {
        pageNumber: 10,
        section: "09 / CONCLUSION & VALIDATION",
        title: "Less Noise. More Making.",
        subtitle: "Usability Synthesis & Next-Phase Roadmap",
        type: "conclusion",
        content: {
          intro:
            "FORMA's architecture proves that productivity software does not have to be cold, dense, or anxiety-inducing. By prioritizing editorial clarity, creative teams gain room to think.",
          columns: [
            {
              title: "WHAT THE INTERFACE DELIVERS",
              items: [
                "A calm, humane daily entry point that reduces morning dread",
                "Instant status visibility across active studio projects",
                "A compact, prioritized task queue free of micro-management",
                "Transparent team activity feed that builds collective momentum",
              ],
            },
            {
              title: "NEXT VALIDATION MILESTONES",
              items: [
                "Test task completion speed across 5 independent creative studios",
                "Measure reduction in unnecessary status-check Slack messages",
                "Validate keyboard navigation shortcuts with power users",
                "Refine mobile viewport responsive sheet interactions",
              ],
            },
          ],
          validationPlan: [
            {
              step: "01 / Observe",
              desc: "Conduct 5 moderated usability sessions with studio leads; observe natural orientation speed and task triage.",
            },
            {
              step: "02 / Measure",
              desc: "Track time-to-first-action, review queue resolution rates, and qualitative satisfaction scores.",
            },
            {
              step: "03 / Iterate",
              desc: "Refine priority label terminology, notification grouping, and multi-workspace switching ergonomics.",
            },
          ],
          manifesto: "LESS NOISE. MORE MAKING.",
          manifestoSub:
            "FORMA is strongest when the workspace quietly connects people to the next meaningful piece of work.",
        },
      },
    ],
  },
  {
    id: "nexus",
    num: "02",
    title: "NEXUS",
    tagline: "REALITY, REDEFINED.",
    category: "SPATIAL UX / AR-VR EXPERIENCE DISCOVERY",
    role: "Lead Product & Spatial Experience Designer",
    timeline: "October 2026",
    pdfUrl: "/case-studies/nexus-case-study.pdf",
    heroImage: "/case-studies/nexus/nexus-hero.png",
    summary:
      "A digital discovery hub for finding immersive worlds, multiplayer VR experiences, and the people exploring them.",
    deliverables: [
      "Spatial UX Strategy",
      "Immersion & Device Compatibility Flow",
      "Low-Fi Spatial Wireframes",
      "High-Fi Visual Interface Showcase",
      "Player Personas & Empathy Mapping",
      "Atmospheric Design System",
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
        section: "CASE STUDY COVER",
        title: "NEXUS",
        subtitle: "REALITY, REDEFINED.",
        type: "cover",
        content: {
          category: "SPATIAL UX / AR-VR EXPERIENCE DISCOVERY",
          description:
            "A digital discovery hub for finding immersive worlds, multiplayer VR experiences, and the people exploring them.",
          context: "FEATURED WORLD / SEASON 04",
          greeting: "Orbit Racers // Live Tournament",
          greetingSub: "12,480 Active Pilots. Zero Latency Stream.",
          coverImage: "/case-studies/nexus/nexus-hero.png",
          metrics: [
            { num: "03", label: "Featured worlds" },
            { num: "S04", label: "Active season" },
            { num: "LIVE", label: "Tournament status" },
          ],
          tags: ["SPATIAL AUDIO", "HAPTIC FEEDBACK", "CROSS-PLAY"],
          footerDate: "OCTOBER 2026",
          footerNote: "Spatial Interface Design, Wireframe Blueprint & Immersion Telemetry.",
        },
      },
      {
        pageNumber: 2,
        section: "01 / THE PRODUCT",
        title: "The front door to immersive realities",
        subtitle: "Catalog Architecture & Cross-Reality Discovery",
        type: "overview",
        content: {
          lead:
            "NEXUS bridges the gap between traditional web discovery and spatial immersion, helping players effortlessly browse, evaluate, and launch into virtual worlds.",
          definition:
            "A dark, atmospheric discovery hub providing world previews, comfort ratings, multiplayer lobby status, and hardware compatibility checks before donning a VR headset.",
          metrics: [
            { val: "03", label: "WORLDS", sub: "Featured in catalog" },
            { val: "S04", label: "SEASON", sub: "Orbit Racers active" },
            { val: "100%", label: "CROSS-PLAY", sub: "PCVR, Quest, Vision Pro" },
            { val: "04", label: "EXPLORERS", sub: "Active party presence" },
          ],
          structureTitle: "DISCOVERY ECOSYSTEM STRUCTURE",
          structure: [
            {
              step: "01",
              title: "Cinematic hero viewport",
              desc:
                "Atmospheric preview video, Season 04 title treatment, and 1-click 'Launch Experience' spatial gateway.",
            },
            {
              step: "02",
              title: "World discovery grid",
              desc:
                "Filterable cards displaying active player counts, spatial physics tags, and immersion comfort ratings.",
            },
            {
              step: "03",
              title: "Live community events",
              desc:
                "Calendar of scheduled VR tournaments, live virtual concerts, and multiplayer squad lobbies.",
            },
            {
              step: "04",
              title: "Hardware compatibility matrix",
              desc:
                "Transparent indicators verifying controller tracking, tetherless support, and recommended GPU specs.",
            },
          ],
        },
      },
      {
        pageNumber: 3,
        section: "02 / SPATIAL UX OPPORTUNITY",
        title: "Solving the friction of entering VR",
        subtitle: "Bridging 2D Screens to 3D Immersion",
        type: "opportunity",
        content: {
          intro:
            "Putting on a VR headset is high-friction. Users must know what experience they are entering, whether friends are online, and if their hardware supports it before putting on the visor.",
          challenge: {
            title: "The Blind Launch Problem",
            desc:
              "Existing VR stores require users to download massive files with vague previews, leading to motion sickness surprises and empty multiplayer lobbies.",
          },
          response: {
            title: "NEXUS's Telemetry-First Discovery",
            desc:
              "Clear comfort ratings, live server player counts, spatial audio samples, and hardware badges ensure zero hesitation at launch.",
          },
          questionsTitle: "SPATIAL HEURISTIC QUESTIONS",
          questions: [
            {
              num: "Q1",
              q: "How do we communicate comfort without jargon?",
              a: "Standardized visual comfort tiers (Stationary / Roomscale / Intense) with motion physics disclosures.",
            },
            {
              num: "Q2",
              q: "How to convey spatial scale on flat 2D monitors?",
              a: "Layered parallax perspective, audio previews, and volumetric depth cards that simulate spatial presence.",
            },
            {
              num: "Q3",
              q: "How do we maximize social discovery?",
              a: "Live explorer indicators and 1-click squad join invitations directly from the web hub.",
            },
            {
              num: "Q4",
              q: "How to handle multi-device fragmentation?",
              a: "Automatic detection of connected headsets (Meta Quest 3, Vision Pro, SteamVR) with tailored launch prompts.",
            },
          ],
          evidenceNote:
            "Synthesized from VR gaming forums, community tournament playtests, and spatial usability benchmarks.",
        },
      },
      {
        pageNumber: 4,
        section: "03 / AUDIENCE & PERSONAS",
        title: "Designing for the immersive explorer",
        subtitle: "Hypothetical Persona: Kai Chen — Competitive VR Pilot",
        type: "persona",
        content: {
          intro:
            "Kai represents the core demographic of spatial computing enthusiasts who seek high-fidelity multiplayer experiences but hate wasting time in clunky menus.",
          persona: {
            initials: "KC",
            name: "Kai Chen",
            role: "Competitive VR Enthusiast & Squad Leader",
            bio: "Age 26. Owns both a Meta Quest 3 and PCVR rig. Plays competitive sim racing and social VR experiences 4 nights a week with friends.",
            columns: [
              {
                title: "GOALS & MOTIVATIONS",
                points: [
                  "Quickly see which worlds currently have active player lobbies",
                  "Coordinate tournament entry times with squad members",
                  "Verify frame rate benchmarks before buying premium worlds",
                ],
              },
              {
                title: "FRUSTRATIONS",
                points: [
                  "Buying a VR title only to find the multiplayer servers are ghost towns",
                  "Surprise motion sickness from unpredictable camera controls",
                  "Having to take off the headset to search discord for lobby links",
                ],
              },
              {
                title: "KEY CRITERIA",
                points: [
                  "Needs glanceable server populations and ping indicators",
                  "Prefers dark UI that doesn't blind dark-adapted eyes",
                  "Values direct integration with SteamVR and Quest link",
                ],
              },
            ],
          },
          empathyTitle: "EMPATHY MAP (PRE-GAME ROUTINE)",
          empathyMap: {
            thinks:
              "Is the Ice Circuit tournament active tonight? Are my usual squad members online?",
            says:
              "Check Nexus before putting on your headset so we know which server to jump into.",
            does:
              "Browses featured season on desktop, clicks 'Notify Squad', puts on headset and launches directly.",
            feels:
              "Impatient with slow loading screens; energized when an interface feels cutting-edge and futuristic.",
          },
          researchStep:
            "Derived from 18 survey responses across competitive VR gaming discord communities.",
        },
      },
      {
        pageNumber: 5,
        section: "04 / ARCHITECTURE & USER FLOWS",
        title: "The seamless launch pathway",
        subtitle: "Information Architecture & Device Synchronization",
        type: "flows",
        content: {
          intro:
            "The information architecture is optimized to minimize the 'time-to-immersion'—taking users from initial curiosity to live gameplay in minimal steps.",
          stepper: [
            { step: "01 / DISCOVER", detail: "Atmospheric Hero & Featured Worlds" },
            { step: "02 / EVALUATE", detail: "Comfort Rating, Active Lobbies & Ping" },
            { step: "03 / SQUAD UP", detail: "Invite Friends & Reserve Slots" },
            { step: "04 / DETECT", detail: "Headset Pairing & Driver Handshake" },
            { step: "05 / IMMERSE", detail: "Seamless Handoff to VR Runtime" },
          ],
          flowsTitle: "CORE DISCOVERY FLOWS",
          flows: [
            {
              name: "Flow 1: Quick Tournament Entry",
              path: "Hero Viewport → 'Season 04: Orbit Racers' → Click 'Enter Circuit' → Squad Matchmaking Lobby → Launch VR",
            },
            {
              name: "Flow 2: Comfort-Filtered Exploration",
              path: "Catalog Grid → Filter: 'Stationary / Gentle' → Select 'Ancient Realms' → Read motion telemetry → Wishlist",
            },
            {
              name: "Flow 3: Hardware Verification",
              path: "World Card Detail → Hover 'Hardware Matrix' → Confirm Quest 3 wireless 90fps compatibility → Download",
            },
          ],
          statesTitle: "SPATIAL INTERACTION RULES",
          states: [
            "Cyan emission glow on hovered world cards simulating neon spatial displays",
            "Real-time pulsers indicating live tournament broadcast status",
            "Audio waveform micro-preview on hovering sound tags",
            "Smooth transition into fullscreen 360 preview mode",
          ],
        },
      },
      {
        pageNumber: 6,
        section: "05 / DESIGN SYSTEM & TOKENS",
        title: "Atmospheric cyber dark design system",
        subtitle: "Deep Void Canvas with Ice Cyan & Signal Lime Emissions",
        type: "design_system",
        content: {
          intro:
            "NEXUS uses a cinematic cyber dark aesthetic tailored for VR enthusiasts: pitch-black void surfaces that conserve OLED battery and glowing emission accents that communicate state.",
          typography: {
            title: "Space Grotesk / Syne Mono",
            note: "Futuristic geometric titling paired with technical monospace data tags for server telemetry and ping stats.",
          },
          principles: [
            {
              component: "Void Surfaces",
              rule: "Deepest obsidian (#080B12) with secondary slate panels (#111722) and subtle cyan border lines (#1C2433).",
            },
            {
              component: "Emission Accents",
              rule: "Ice Cyan (#76E6E0) indicates primary interactive hotspots; Signal Lime (#D4F36A) signals live multiplayer matches.",
            },
            {
              component: "Telemetry Badges",
              rule: "High-contrast monospace tags for frame rates, ping latencies, and active explorer tallies.",
            },
          ],
          intent:
            "Create the sensation of operating a flight terminal inside a futuristic starship, setting the mood before launch.",
        },
      },
      {
        pageNumber: 7,
        section: "06 / SPATIAL WIREFRAME BLUEPRINT",
        title: "Spatial Discovery Wireframe Schematics",
        subtitle: "Blueprint Layout, Depth Stratification & Card Anatomy",
        type: "wireframes",
        content: {
          blueprintBadge: "SPATIAL UX BLUEPRINT & WIREFRAME ARCHITECTURE",
          intro:
            "NEXUS's layout was engineered as a 3D-depth conscious wireframe, balancing high-impact cinematic imagery with dense technical telemetry.",
          wireframeImage: {
            src: "/case-studies/nexus/nexus-wireframe.jpg",
            title: "NEXUS SPATIAL DISCOVERY HUB WIREFRAME BLUEPRINT",
            subtitle: "3D Perspective Hero Header, 3-Column Experience Grid & Telemetry Controls",
            callouts: [
              {
                title: "ZONE A: Spatial Hero 3D Bounds",
                desc: "Immersive viewport frame verifying headset connectivity and zero-gravity depth calibration.",
              },
              {
                title: "ZONE B: 3-Column Realm Grid",
                desc: "Modular card architecture with thumbnail boundaries, live player telemetry, and comfort indices.",
              },
              {
                title: "ZONE C: Hardware & Lobby Panel",
                desc: "Device compatibility verification matrix and live multiplayer matchmaking lobby feeds.",
              },
            ],
          },
          wireframeMockup: {
            title: "NEXUS DISCOVERY HUB SCHEMATIC BLUEPRINT",
            fidelity: "Spatial Wireframe Layout (1440px Breakpoint)",
            systemName: "NEXUS // DISCOVERY_HUB_BLUEPRINT",
            logicRule: "VIEWPORT ZONE 1 DRIVES 65% OF DIRECT EVENT LAUNCHES",
            status: "DEPTH LAYERS: 3 PARALLAX PLANES",
            zones: [
              {
                zoneId: "ZONE_A",
                name: "Spatial Hero & Headset Status",
                type: "Full-Bleed Parallax Header",
                description: "Cinematic trailer viewport, Season 04 title, and real-time VR headset connectivity indicator.",
                elements: ["[Headset Telemetry]", "[Hero Parallax Canvas]", "[Quick-Launch CTA]"],
              },
              {
                zoneId: "ZONE_B",
                name: "Immersive World Cards Grid",
                type: "3-Column Spatial Grid",
                description: "Discoverable realms with player counts, genre tags, and comfort ratings.",
                elements: ["[World Thumbnail]", "[Player Count Chip]", "[Comfort Rating]", "[Audio Sample Tag]"],
              },
              {
                zoneId: "ZONE_C",
                name: "Events & Hardware Matrix",
                type: "Split Matchmaking Panel",
                description: "Scheduled live tournaments and device compatibility checklist.",
                elements: ["[Tournament Calendar]", "[Lobby Counter]", "[Compatibility Checklist]"],
              },
            ],
          },
          decisions: [
            {
              principle: "Glanceable Comfort Rating",
              rationale: "Comfort level is prominently surfaced on every card to prevent accidental motion sickness for sensitive users.",
            },
            {
              principle: "Live Population Telemetry",
              rationale: "Live player badges prevent users from entering empty multiplayer worlds, boosting retention.",
            },
            {
              principle: "Hardware Pre-Flight Check",
              rationale: "Compatibility matrix prevents failed launches by verifying tethered or standalone mode in advance.",
            },
          ],
          wireframeCards: [
            {
              code: "WF-N1",
              state: "FEATURED WORLD",
              title: "Spatial Realm Card Anatomy",
              desc: "Deep card container displaying thumbnail visual, genre pills, player counts, and comfort badge.",
              components: [
                { name: "Realm Visual", role: "3D Perspective preview" },
                { name: "Live Explorer Chip", role: "Active player counter" },
                { name: "Comfort Badge", role: "Stationary / Intense tier" },
              ],
              purpose: "Provides instant clarity on world theme, active player base, and motion intensity.",
            },
            {
              code: "WF-N2",
              state: "COMPATIBILITY",
              title: "Headset Compatibility Selector",
              desc: "Hardware verification strip confirming device drivers and optimal framerates.",
              components: [
                { name: "Device Selector", role: "Quest / Vision Pro / PCVR" },
                { name: "Framerate Spec", role: "90Hz / 120Hz validation" },
                { name: "Tracking Mode", role: "6DOF / Hand-tracking badge" },
              ],
              purpose: "Eliminates surprise driver conflicts before launching into virtual reality.",
            },
            {
              code: "WF-N3",
              state: "LIVE ARENA",
              title: "Tournament Event Tile Anatomy",
              desc: "Time-slotted competitive event tile with countdown clock and squad reservation CTA.",
              components: [
                { name: "Event Banner", role: "Ice Circuit championship" },
                { name: "Countdown Timer", role: "Starts in 2h 14m" },
                { name: "Lobby Slots", role: "12 / 16 pilots registered" },
              ],
              purpose: "Creates community urgency and drives synchronized multiplayer tournament participation.",
            },
          ],
        },
      },
      {
        pageNumber: 8,
        section: "07 / HIGH-FIDELITY SHOWCASE",
        title: "High-Fidelity Interface Showcase",
        subtitle: "Production UI Screenshots & Discovery Experience Walkthrough",
        type: "visual_gallery",
        content: {
          badge: "PRODUCTION UI SCREENSHOTS",
          intro:
            "High-resolution captures from the NEXUS experience discovery hub, showcasing the cyber aesthetic, featured worlds catalog, and live tournament events.",
          featuredImage: {
            src: "/case-studies/nexus/nexus-hero.png",
            title: "NEXUS Spatial Experience Discovery Hero",
            subtitle: "Cinematic dark interface introducing Season 04: Orbit Racers with spatial audio and headset telemetry.",
            callouts: [
              {
                title: "Cinematic Atmosphere",
                desc: "High-contrast cyber black background paired with electric cyan typography and spatial audio indicators.",
              },
              {
                title: "Live Season Spotlight",
                desc: "Season 04: Orbit Racers featuring 12,480 active pilots and zero-latency tournament broadcast.",
              },
              {
                title: "Instant Gateway Action",
                desc: "1-Click launch button with device auto-detection bridging desktop web directly to VR headsets.",
              },
            ],
          },
          gallery: [
            {
              src: "/case-studies/nexus/nexus-worlds.png",
              title: "Featured Worlds Catalog Grid",
              tag: "IMMERSIVE WORLDS",
              desc: "Curated virtual realms including Cyber City, Deep Cosmos, and Ancient Realms with live active explorer counters and comfort badges.",
            },
            {
              src: "/case-studies/nexus/nexus-events.png",
              title: "Live Tournaments & Hardware Matrix",
              tag: "LIVE EVENTS & COMPATIBILITY",
              desc: "Scheduled competitive VR tournaments (Ice Circuit) paired with transparent hardware compatibility matrix across Quest, Vision Pro, and SteamVR.",
            },
          ],
        },
      },
      {
        pageNumber: 9,
        section: "08 / IMMERSIVE CARDS & MATRIX",
        title: "World Cards & Device Compatibility",
        subtitle: "Detailed Component Anatomy & Responsive Behavior",
        type: "screens",
        content: {
          intro:
            "Every world card in NEXUS is an information-dense yet glanceable micro-portal, giving players all essential data in a single hover.",
          screens: [
            {
              screenNum: "SCREEN 01",
              title: "Explore Another Reality Hero",
              desc: "Primary entry point setting the cinematic tone with season trailer and instant launch gateway.",
              image: "/case-studies/nexus/nexus-hero.png",
              mustAnswer: "What is the biggest featured experience happening in spatial reality right now?",
            },
            {
              screenNum: "SCREEN 02",
              title: "Discoverable Realms Grid",
              desc: "Multi-world directory displaying player lobbies, comfort levels, and genre categories.",
              image: "/case-studies/nexus/nexus-worlds.png",
              mustAnswer: "Which virtual realm fits my current mood, available time, and motion comfort level?",
            },
            {
              screenNum: "SCREEN 03",
              title: "Live Events & Squad Hub",
              desc: "Calendar of competitive matches with 1-click squad registration and hardware checks.",
              image: "/case-studies/nexus/nexus-events.png",
              mustAnswer: "How do I ensure my VR headset is properly configured before the tournament begins?",
            },
          ],
          checklistTitle: "SPATIAL COMFORT & PERFORMANCE SPECIFICATIONS",
          checklist:
            "OLED Black (#080B12) prevents eye strain • Framerate requirements flagged up front (90/120fps) • Motion intensity ratings standard across all titles • WebXR compliant launch endpoints.",
        },
      },
      {
        pageNumber: 10,
        section: "09 / CONCLUSION & VALIDATION",
        title: "Not Just A Game. Another Reality.",
        subtitle: "Spatial Usability Synthesis & Roadmap",
        type: "conclusion",
        content: {
          intro:
            "NEXUS proves that entering virtual reality does not have to be intimidating or clunky. By bringing transparency and telemetry to the web discovery layer, adoption friction drops dramatically.",
          columns: [
            {
              title: "WHAT THE PLATFORM SOLVES",
              items: [
                "Eliminates 'blind launches' with up-front comfort ratings",
                "Displays live multiplayer populations before putting on headsets",
                "Guarantees hardware and frame-rate compatibility",
                "Fosters competitive community through scheduled tournaments",
              ],
            },
            {
              title: "FUTURE ROADMAP HORIZONS",
              items: [
                "Direct WebXR in-browser 3D preview without external app install",
                "Haptic feedback preview via connected gamepad vibration",
                "Spatial voice lobby integration with Discord and Steam",
                "Automated motion sickness prediction based on player history",
              ],
            },
          ],
          validationPlan: [
            {
              step: "01 / Observe",
              desc: "Run 5 moderated usability sessions with VR gamers; track time-to-first-confident-choice and launch success.",
            },
            {
              step: "02 / Measure",
              desc: "Measure drop-off rates between web world selection and actual headset launch.",
            },
            {
              step: "03 / Iterate",
              desc: "Refine comfort rating explanations, improve ping estimation accuracy, and expand squad invitation links.",
            },
          ],
          manifesto: "NOT JUST A GAME. ANOTHER REALITY.",
          manifestoSub:
            "NEXUS is most compelling when every visual cue helps users move from curiosity to deep spatial connection.",
        },
      },
    ],
  },
  {
    id: "fixmate",
    num: "03",
    title: "FixMate",
    tagline: "TRUSTED HOME SERVICES AT YOUR DOORSTEP.",
    category: "MOBILE UI/UX / ON-DEMAND SERVICE APP",
    role: "Lead Product Designer & UX Researcher",
    timeline: "April 2025",
    pdfUrl: "/case-studies/casestudy-3.pdf",
    heroImage: "/case-studies/fixmate/fixmate-screens.jpg",
    summary:
      "An on-demand mobile application connecting homeowners with background-verified service professionals through transparent upfront pricing, flexible slot booking, and live GPS technician tracking.",
    deliverables: [
      "End-to-End User Research",
      "Competitive Benchmarking",
      "User Personas & Journey Mapping",
      "Information Architecture & Stepper",
      "Low-Fi Wireframe Blueprints",
      "High-Fidelity Mobile Design System",
      "Interactive Prototyping & Usability Testing",
    ],
    stats: [
      { label: "Verified Pros", val: "1,200+", sub: "Vetted specialists" },
      { label: "Booking Speed", val: "45s", sub: "Average checkout time" },
      { label: "Pricing Transparency", val: "100%", sub: "Zero hidden surcharges" },
      { label: "Satisfaction Rate", val: "4.9★", sub: "Over 18k customer reviews" },
    ],
    theme: {
      bg: "#0B0E14",
      text: "#F8FAFC",
      accent: "#2DD4BF",
      cardBg: "#121824",
      border: "#1E293B",
      highlight: "#F59E0B",
      darkPreviewBg: "#07090E",
    },
    palette: [
      { name: "CHARCOAL VOID", hex: "#0B0E14", role: "Primary mobile canvas background" },
      { name: "SLATE PANEL", hex: "#121824", role: "Elevated card and sheet surface" },
      { name: "MINT CYAN", hex: "#2DD4BF", role: "Primary brand accent & action CTA" },
      { name: "AMBER GOLD", hex: "#F59E0B", role: "Technician rating & premium status" },
      { name: "CORAL ALERT", hex: "#F87171", role: "Emergency repair tag & cancel state" },
      { name: "SOFT WHITE", hex: "#F8FAFC", role: "Crisp primary mobile typography" },
    ],
    pages: [
      {
        pageNumber: 1,
        section: "CASE STUDY COVER",
        title: "FixMate",
        subtitle: "TRUSTED HOME SERVICES AT YOUR DOORSTEP.",
        type: "cover",
        content: {
          category: "MOBILE PRODUCT DESIGN / ON-DEMAND SERVICE APP",
          description:
            "An end-to-end mobile UX case study solving homeowner trust, opaque contractor pricing, and unpredictable arrival windows through seamless booking and live tracking.",
          context: "MOBILE APP // ON-DEMAND PLATFORM",
          greeting: "Home Care Made Effortless.",
          greetingSub: "Verified technicians, upfront pricing, and real-time arrival GPS.",
          coverImage: "/case-studies/fixmate/fixmate-screens.jpg",
          metrics: [
            { num: "45s", label: "Average booking time" },
            { num: "100%", label: "Upfront price guarantee" },
            { num: "4.9★", label: "Average customer rating" },
          ],
          footerDate: "APRIL 2025",
          footerNote: "Mobile Product Design Case Study, Research & Wireframe Blueprint.",
        },
      },
      {
        pageNumber: 2,
        section: "01 / THE PRODUCT",
        title: "Rethinking home service procurement",
        subtitle: "On-Demand Home Services Discovery & Booking App",
        type: "overview",
        content: {
          lead:
            "FixMate bridges the gap between busy homeowners and top-rated local technicians across plumbing, electrical work, HVAC servicing, carpentry, and home appliance maintenance.",
          definition:
            "FixMate removes anxiety from domestic maintenance by replacing unvetted telephone directories with background-verified technicians, fixed upfront rate cards, instant slot booking, and live GPS technician tracking with secure safety PIN handover.",
          metrics: [
            { val: "1,200+", label: "TECHNICIANS", sub: "Background-checked" },
            { val: "45s", label: "BOOKING TIME", sub: "3-step checkout" },
            { val: "100%", label: "TRANSPARENCY", sub: "Zero surprise fees" },
            { val: "4.9★", label: "CSAT SCORE", sub: "18,000+ reviews" },
          ],
          structureTitle: "APP ARCHITECTURE & CORE MODULES",
          structure: [
            {
              step: "01",
              title: "Quick Service Discovery",
              desc:
                "Instant category search with smart recommendations, urgent repair badges, and transparent diagnostic rates.",
            },
            {
              step: "02",
              title: "Verified Technician Profiles",
              desc:
                "Police background-checked badges, years of field experience, verified customer ratings, and equipment certifications.",
            },
            {
              step: "03",
              title: "Transparent Pricing Calculator",
              desc:
                "Itemized service breakdown with parts guarantee, labor rates, and zero hidden surcharge commitments.",
            },
            {
              step: "04",
              title: "Flexible Slot Scheduling",
              desc:
                "Same-day emergency 30-minute dispatch or scheduled calendar booking slots matching homeowner availability.",
            },
            {
              step: "05",
              title: "Live GPS & Arrival Telemetry",
              desc:
                "Real-time van tracking, minute-by-minute ETA countdown, technician vehicle details, and masked in-app calling.",
            },
            {
              step: "06",
              title: "Secure Safety PIN Handover",
              desc:
                "4-digit mutual verification code to confirm technician identity before granting access into the home.",
            },
          ],
        },
      },
      {
        pageNumber: 3,
        section: "02 / RESEARCH & PROBLEM",
        title: "Overcoming the homeowner trust deficit",
        subtitle: "Addressing Unreliable Arrival Times & Price Gouging",
        type: "opportunity",
        content: {
          intro:
            "Through user discovery interviews with 24 urban homeowners and 16 independent service contractors, we uncovered deep friction points in existing home maintenance platforms.",
          challenge: {
            title: "The Anxiety of Opaque Pricing & Unknown Strangers",
            desc:
              "Users reported dreading home repairs due to arbitrary post-service price inflation, unverified workers entering their living spaces, and vague 4-hour arrival windows that disrupt working days.",
          },
          response: {
            title: "FixMate's Trust-Centered Mobile Experience",
            desc:
              "Guaranteed upfront pricing before checkout, verified government ID and background check badges, live 1-minute accurate GPS arrival tracking, and a 4-digit mutual security PIN.",
          },
          questionsTitle: "CORE UX RESEARCH QUESTIONS",
          questions: [
            {
              num: "Q1",
              q: "How do we reduce checkout friction during emergency leaks?",
              a: "Introduced 1-Tap Emergency Dispatch with auto-selected nearest certified master plumber and standard rate cap.",
            },
            {
              num: "Q2",
              q: "How can we make pricing feel totally transparent?",
              a: "Deconstructed the final bill into inspection fee, labor hourly rate, and genuine parts cost before confirmation.",
            },
            {
              num: "Q3",
              q: "How can homeowners feel completely secure welcoming technicians home?",
              a: "Profile cards display full name, government-vetted badge, company uniform photo, and safety PIN matching upon arrival.",
            },
            {
              num: "Q4",
              q: "What stops users from abandoning the booking flow?",
              a: "A streamlined 3-step bottom sheet booking stepper retaining map and context without full-page reloads.",
            },
          ],
          evidenceNote:
            "Synthesized from 40+ user interviews across Tier 1 metro homeowners, apartment renters, and veteran field technicians.",
        },
      },
      {
        pageNumber: 4,
        section: "03 / USER PERSONAS",
        title: "Designing for busy modern homeowners",
        subtitle: "Target Persona: Priya Sharma — Working Parent & Apartment Owner",
        type: "persona",
        content: {
          intro:
            "To drive user empathy across every booking step, we modeled our primary user archetype based on modern dual-income urban professionals.",
          persona: {
            initials: "PS",
            name: "Priya Sharma",
            role: "Product Operations Lead & Homeowner (Age 34)",
            bio: "Lives in a modern urban apartment with her family and toddler. Works from home with tight meeting schedules and needs fast, dependable home repairs without haggling.",
            columns: [
              {
                title: "DAILY GOALS",
                points: [
                  "Fix sudden kitchen sink leaks or AC faults without wasting half a day on telephone calls",
                  "Know exact arrival time to schedule repairs between Zoom calls",
                  "Know total costs beforehand to avoid haggling at the doorstep",
                ],
              },
              {
                title: "CORE PAIN POINTS",
                points: [
                  "Contractors promising 'sometime between 1 PM and 5 PM' and arriving late",
                  "Surprise 'extra charges' added after the repair is completed",
                  "Safety worries letting unknown, unverified tradespeople into the home",
                ],
              },
              {
                title: "BEHAVIORAL TENDENCIES",
                points: [
                  "Books exclusively via mobile phone during quick breaks between meetings",
                  "Scrutinizes verified customer ratings and photo reviews before booking",
                  "Prefers digital payments with instant GST invoice generation",
                ],
              },
            ],
          },
          empathyTitle: "EMPATHY MAP (EMERGENCY LEAK SCENARIO)",
          empathyMap: {
            thinks:
              "I don't have time to haggle or wait around for someone who might not show up. Is this price final?",
            says:
              "Can you send someone who is background-verified and can be here precisely at 3:30 PM?",
            does:
              "Opens FixMate, selects 'Plumbing Emergency', checks top-rated technician within 2 km, and confirms booking.",
            feels:
              "Deep relief watching the live technician van move in real-time toward her address on the map.",
          },
          researchStep:
            "Validated with 24 urban homeowners aged 25-50 across diverse property types.",
        },
      },
      {
        pageNumber: 5,
        section: "04 / ARCHITECTURE & USER FLOWS",
        title: "From discovery to doorstep resolution",
        subtitle: "End-to-End Booking Stepper & Handover Protocol",
        type: "flows",
        content: {
          intro:
            "The information architecture is optimized for speed and clarity, condensing a complex service dispatch pipeline into an intuitive 5-stage progression.",
          stepper: [
            { step: "01 / DISCOVER", detail: "Category Grid & Smart Search" },
            { step: "02 / SELECT", detail: "Technician & Transparent Price Tier" },
            { step: "03 / SCHEDULE", detail: "Date, Time Slot & Address Picker" },
            { step: "04 / TRACK", detail: "Live GPS Map & ETA Telemetry" },
            { step: "05 / HANDOVER", detail: "Doorstep Safety PIN & Digital Payment" },
          ],
          flowsTitle: "PRIMARY USER FLOWS",
          flows: [
            {
              name: "Flow A: Scheduled AC Servicing",
              path: "Home Search → Select 'AC Maintenance' → Choose Technician (David Miller, 4.9★) → Select Tomorrow 10:00 AM → Upfront Payment Lock → Calendar Sync",
            },
            {
              name: "Flow B: Urgent Plumbing Emergency",
              path: "Home Screen 'Emergency 24/7' → Auto-locate Nearest Plumber → Tap 'Instant Dispatch' → ETA 18 mins → Doorstep PIN generated",
            },
            {
              name: "Flow C: Post-Service Payment & Review",
              path: "Service Complete Notification → Enter Doorstep PIN → Review Itemized Bill → 1-Tap UPI/Card Pay → Rate Experience",
            },
          ],
          statesTitle: "CRITICAL UX INTERACTION STATES",
          states: [
            "Dynamic bottom sheet transitions preserving map context without navigation disorientation",
            "Interactive time-slot selector disabling booked hours in real-time",
            "Live GPS pulsating radar beacon tracking technician distance and ETA countdown",
            "High-contrast security PIN banner accessible even when offline or in poor connectivity",
          ],
          intent:
            "Minimize decision paralysis while maximizing homeowner trust through every touchpoint.",
        },
      },
      {
        pageNumber: 6,
        section: "05 / VISUAL LANGUAGE",
        title: "Engineered for trust and legibility",
        subtitle: "Modern Dark Mode Mobile Tokens & Humanist Typography",
        type: "design_system",
        content: {
          intro:
            "FixMate's visual identity balances sleek modern dark-mode ergonomics with high-trust color accents—Mint Cyan for active reliability and Amber Gold for verified excellence.",
          typography: {
            title: "Plus Jakarta Sans / JetBrains Mono",
            note: "Warm, human geometric sans-serif optimized for mobile screen legibility paired with monospaced numbers for pricing and live ETA counters.",
          },
          principles: [
            {
              component: "Elevated Surfaces",
              rule: "Charcoal dark canvas (#0B0E14) with slate panels (#121824) and subtle slate borders (#1E293B) to reduce mobile battery consumption.",
            },
            {
              component: "Action Accents",
              rule: "Mint Cyan (#2DD4BF) guides primary user actions; Amber Gold (#F59E0B) highlights star ratings and verified badges.",
            },
            {
              component: "Safety Indicators",
              rule: "Bright Coral Alert (#F87171) for urgent repairs, matched with emerald checkmarks for background-verified technicians.",
            },
          ],
          intent:
            "Deliver a frictionless mobile interface that feels as reassuring as a personal home concierge.",
        },
      },
      {
        pageNumber: 7,
        section: "06 / WIREFRAME ARCHITECTURE",
        title: "Low-Fidelity Mobile Blueprint Schematics",
        subtitle: "Deconstructing Mobile Navigation, Card Anatomy & Booking Modals",
        type: "wireframes",
        content: {
          blueprintBadge: "MOBILE UX WIREFRAME BLUEPRINT & COMPONENT ANATOMY",
          intro:
            "Before high-fidelity execution, FixMate's mobile layouts were structured as low-fidelity wireframes to iterate on touch targets, thumb-zone ergonomics, and checkout velocity.",
          wireframeImage: {
            src: "/case-studies/fixmate/fixmate-wireframe.jpg",
            title: "FIXMATE MOBILE BLUEPRINT SCHEMATIC VIEWPORT",
            subtitle: "4-Screen Low-Fi Architecture: Service Catalog, Technician Cards, Slot Picker & Live GPS Map",
            callouts: [
              {
                title: "SCREEN 1: Service Catalog & Search",
                desc: "Top location selector, search bar, and 4-column quick category grid with urgent repair badges.",
              },
              {
                title: "SCREEN 2: Verified Technician Cards",
                desc: "Standardized card containers featuring verified badge, distance, rating, and transparent hourly rate.",
              },
              {
                title: "SCREEN 3: Date & Slot Selector",
                desc: "Horizontal calendar date picker paired with morning/afternoon/evening availability pills.",
              },
            ],
          },
          wireframeMockup: {
            title: "FIXMATE MOBILE APPLICATION WIREFRAME ANATOMY",
            fidelity: "Low-Fi Mobile Blueprint (390px iOS/Android Viewport)",
            systemName: "FIXMATE // MOBILE_UX_BLUEPRINT_V3",
            logicRule: "THUMB-ZONE FRIENDLY ACTIONS ANCHORED IN LOWER 40% OF SCREEN",
            status: "8PX GRID SYSTEM / 48PX MINIMUM TAP TARGETS",
            zones: [
              {
                zoneId: "ZONE_01",
                name: "Location & Search HUD",
                type: "Sticky Top Header",
                description: "Home address switcher, emergency service toggle, and search filter input.",
                elements: ["[Address Switcher]", "[Search Bar]", "[Emergency Badge]"],
              },
              {
                zoneId: "ZONE_02",
                name: "Service Category Grid",
                type: "Thumb-Zone Canvas",
                description: "Visual icon tiles for Plumbing, Electrical, Cleaning, Appliance, Carpentry, and HVAC.",
                elements: ["[Category Tile]", "[Service Icon]", "[Urgency Tag]"],
              },
              {
                zoneId: "ZONE_03",
                name: "Technician & Price Cards",
                type: "Vertical Scroll Feed",
                description: "Itemized technician cards with transparent hourly rate, distance, and booking CTA.",
                elements: ["[Verified Badge]", "[Star Rating]", "[Hourly Rate]", "[Book CTA]"],
              },
            ],
          },
          decisions: [
            {
              principle: "Thumb-Zone Ergonomics",
              rationale: "All primary booking actions, date selections, and confirm buttons are pinned to bottom sheets within easy one-handed reach.",
            },
            {
              principle: "Zero Surprises Price Card",
              rationale: "The total estimated cost is displayed before the user picks a date, eliminating drop-offs at checkout.",
            },
            {
              principle: "Doorstep Security Handover",
              rationale: "Safety PIN is permanently visible at the top of the live map tracking screen for instantaneous verification.",
            },
          ],
          wireframeCards: [
            {
              code: "WF-M1",
              state: "CATALOG",
              title: "Service Discovery Grid Anatomy",
              desc: "Categorized tile matrix designed for rapid identification during stressful home maintenance moments.",
              components: [
                { name: "Category Icon", role: "Visual recognition" },
                { name: "Service Tag", role: "Fixed rate preview" },
                { name: "Urgency Dot", role: "Same-day indicator" },
              ],
              purpose: "Enables users to find the exact service required within 2 taps of opening the app.",
            },
            {
              code: "WF-M2",
              state: "TECHNICIAN",
              title: "Verified Pro Card Anatomy",
              desc: "Standardized technician profile card displaying trust credentials and upfront pricing.",
              components: [
                { name: "Pro Avatar & Badge", role: "Police verification" },
                { name: "Rating & Jobs", role: "Social proof" },
                { name: "Fixed Hourly Rate", role: "Zero hidden surcharges" },
              ],
              purpose: "Builds instant confidence and removes fear of hiring unverified workers.",
            },
            {
              code: "WF-M3",
              state: "TRACKING",
              title: "Live Map & Safety PIN Anatomy",
              desc: "Real-time dispatch view with GPS map route, ETA countdown, and 4-digit security PIN.",
              components: [
                { name: "Live GPS Route", role: "Visual arrival ETA" },
                { name: "Safety PIN Pill", role: "Doorstep identity check" },
                { name: "Contact Pro", role: "Call/Chat mask" },
              ],
              purpose: "Eliminates anxiety around arrival times and ensures safe doorstep access.",
            },
          ],
        },
      },
      {
        pageNumber: 8,
        section: "07 / HIGH-FIDELITY SHOWCASE",
        title: "Production-ready mobile interface",
        subtitle: "High-Fidelity Mobile Screens & Visual System Execution",
        type: "visual_gallery",
        content: {
          badge: "HIGH-FIDELITY MOBILE INTERFACE SHOWCASE",
          intro:
            "The finished FixMate mobile experience combines rich dark mode surfaces, high-contrast Mint Cyan action triggers, and polished micro-interactions.",
          featuredImage: {
            src: "/case-studies/fixmate/fixmate-screens.jpg",
            title: "FIXMATE CORE SCREENS: DISCOVERY, BOOKING & LIVE TRACKING",
            subtitle: "High-Fidelity Production Designs Rendered for iOS & Android",
            callouts: [
              {
                title: "Screen 01: Home Service Discovery",
                desc: "Clean category hierarchy, popular services carousel, and verified technician spotlights.",
              },
              {
                title: "Screen 02: Technician & Upfront Pricing",
                desc: "Detailed technician credentials, verified badge, fixed hourly rate, and itemized service cost breakdown.",
              },
              {
                title: "Screen 03: Live GPS Tracking & Safety PIN",
                desc: "Real-time route navigation, live 14-minute arrival ETA, technician contact triggers, and 4-digit Doorstep PIN.",
              },
            ],
          },
        },
      },
      {
        pageNumber: 9,
        section: "08 / SCREEN DEEP DIVE",
        title: "Granular interaction breakdown",
        subtitle: "Key Workflows: Discovery, Slot Selection & Live Dispatch",
        type: "screens",
        content: {
          intro:
            "Every mobile screen was designed to eliminate cognitive friction, streamline decision making, and provide clear feedback at every tap.",
          screens: [
            {
              name: "Home Service Discovery HUD",
              tag: "Screen 01",
              desc: "Top location selector with quick address switcher, emergency 24/7 service banner, category icon grid (Plumbing, Electrical, Cleaning, Appliance, Carpentry, Painting), and nearby verified technician recommendations with star ratings.",
              image: "/case-studies/fixmate/fixmate-screens.jpg",
            },
            {
              name: "Technician Booking & Pricing Breakdown",
              tag: "Screen 02",
              desc: "Detailed technician profile card showing 4.9★ rating (312 jobs completed), background verification badge, itemized service options, transparent pricing, and instant slot picker.",
              image: "/case-studies/fixmate/fixmate-wireframe.jpg",
            },
            {
              name: "Live Map Dispatch & Doorstep Security",
              tag: "Screen 03",
              desc: "Real-time GPS vehicle tracking with dynamic route polyline, live 14-minute ETA countdown, technician quick call/chat, and prominent 4-digit Safety PIN for secure doorstep verification.",
              image: "/case-studies/fixmate/fixmate-screens.jpg",
            },
          ],
        },
      },
      {
        pageNumber: 10,
        section: "09 / USABILITY TESTING & IMPACT",
        title: "Validation, user metrics & roadmap",
        subtitle: "Empirical Usability Testing Results & Product Roadmap",
        type: "testing",
        content: {
          intro:
            "We tested FixMate with 18 homeowners across two rounds of moderated usability sessions using interactive Figma prototypes.",
          resultsTitle: "KEY USABILITY BENCHMARKS",
          results: [
            {
              metric: "94%",
              label: "Task Completion Rate",
              desc: "17 out of 18 participants completed an emergency booking within under 60 seconds.",
            },
            {
              metric: "88%",
              label: "Trust Score Increase",
              desc: "Participants cited background check badges and upfront pricing as the primary trust triggers.",
            },
            {
              metric: "0%",
              label: "Pricing Confusion",
              desc: "100% of tested users understood the total cost before entering payment information.",
            },
          ],
          insightsTitle: "RESEARCH FINDINGS & DESIGN ITERATIONS",
          insights: [
            "Safety PIN placement: Initial tests showed users missed the PIN when placed in the booking receipt; moving it to the top of the live tracking map increased recall to 98%.",
            "Transparent diagnostic fee: Clarifying that the inspection fee is waived if the repair is completed increased checkout conversion by 26%.",
            "Technician arrival buffer: Adding a 5-minute pre-arrival SMS alert prevented homeowners from being unavailable at the doorstep.",
          ],
          roadmapTitle: "PRODUCT ROADMAP & NEXT PHASES",
          roadmap: [
            {
              step: "Phase 1: Multi-Service Bundles",
              desc: "Enable homeowners to book plumbing and electrical repairs in a single consolidated visit.",
            },
            {
              step: "Phase 2: Annual Home Care Subscriptions",
              desc: "Preventive quarterly maintenance packages for HVAC, plumbing inspections, and water filters.",
            },
            {
              step: "Phase 3: AI Diagnostic Photo Triage",
              desc: "Computer vision photo scanning to accurately diagnose pipe leaks and pre-order replacement parts before arrival.",
            },
          ],
          manifesto: "TRUSTED HOME SERVICES, ZERO HASSLE.",
          manifestoSub:
            "FixMate turns unpredictable domestic repairs into transparent, secure, and effortless mobile experiences.",
        },
      },
    ],
  },
];
