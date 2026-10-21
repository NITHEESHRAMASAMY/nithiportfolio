export const caseStudiesData = [
  {
    id: "stride",
    num: "01",
    title: "RUNNING APP",
    tagline: "PACE BY NITHEESH // ACTIVITY TRACKING & TRAINING",
    category: "MOBILE APPLICATION UI/UX DESIGN / FITNESS & SPORTS",
    role: "Lead Mobile UI/UX & Interaction Designer",
    timeline: "Figma Design Sprint",
    brandIdentity: "Pace by Nitheesh",
    pdfUrl: "/case-studies/forma-case-study.pdf",
    heroImage: "/case-studies/running-app/running-app-hero.png",
    liveUrl: "https://www.figma.com/design/pXEyhRi01dbi29QOyFkY6M/Running-App-Design?node-id=0-1&p=f&t=Q5SyE0ijuv4LDOZK-0",
    liveLabel: "VIEW FIGMA PROTOTYPE ↗",
    summary:
      "A comprehensive mobile running application concept bringing running activity tracking, personal fitness progress, structured marathon training programs, and community club engagement into a unified, high-contrast mobile experience.",
    deliverables: [
      "Running Dashboard & History",
      "Training Programs & Marathon Hub",
      "Running Club Community Discovery",
      "Live In-Motion Running HUD",
      "GPS Route Visualization",
      "Workout Summary & Biometric Analytics",
      "Architectural Wireframe Blueprints",
      "Figma Interactive Prototype",
    ],
    stats: [
      { label: "Total Distance Logged", val: "46,00", sub: "Kilometers in history" },
      { label: "Average Split Pace", val: "5,50", sub: "Min/km pacing" },
      { label: "Featured Marathon", val: "42 KM", sub: "Nitheesh Training Tier" },
      { label: "Community Members", val: "23.4k", sub: "Bolt Runners Club" },
    ],
    theme: {
      bg: "#0A0E0C",
      text: "#F3F9F5",
      accent: "#B8FF24",
      cardBg: "#101613",
      border: "#1C2720",
      highlight: "#00F0FF",
      darkPreviewBg: "#070B09",
    },
    palette: [
      { name: "OBSIDIAN CANVAS", hex: "#0A0E0C", role: "Deep OLED high-contrast dark background" },
      { name: "VOLT LIME", hex: "#B8FF24", role: "Primary athletic accent, actions & route glow" },
      { name: "ENERGY CARD", hex: "#101613", role: "Elevated surfaces, card panels & HUD containers" },
      { name: "SUB-SURFACE BORDER", hex: "#1C2720", role: "Structural dividers & wireframe boundaries" },
      { name: "BIOMETRIC CYAN", hex: "#00F0FF", role: "GPS satellite lock & pacing telemetry" },
      { name: "PURE LIGHT", hex: "#F3F9F5", role: "Glanceable high-contrast typography" },
    ],
    pages: [
      {
        pageNumber: 1,
        section: "CASE STUDY COVER",
        title: "RUNNING APP",
        subtitle: "Pace by Nitheesh — Fitness, Running & Community Ecosystem",
        type: "cover",
        content: {
          category: "MOBILE APPLICATION UI/UX DESIGN / FITNESS & SPORTS",
          description:
            "Running APP is a mobile application concept designed to bring running activities, personal fitness progress, structured training programs, and running community features together in one unified experience. Presented as Pace by Nitheesh, it uses bold typography, energetic running photography, and vibrant lime-green accents to make training organized, accessible, and motivating.",
          context: "PACE BY NITHEESH // FIGMA MOBILE ECOSYSTEM",
          greeting: "Unified Running Companion",
          greetingSub: "Dashboard • History (46,00 Km) • Training Programs • Clubs • Live HUD • Route Map",
          coverImage: "/case-studies/running-app/running-app-hero.png",
          metrics: [
            { num: "46,00", label: "Km Logged" },
            { num: "42 KM", label: "Marathon Tier" },
            { num: "23.4k", label: "Club Runners" },
          ],
          footerDate: "FIGMA DESIGN SPRINT 2026",
          footerNote: "Designed in Figma • Mobile UI/UX Case Study with Wireframes & Live Prototype.",
        },
      },
      {
        pageNumber: 2,
        section: "01 / PROJECT OVERVIEW & THE PROBLEM",
        title: "Connecting Every Mile in One Unified Flow",
        subtitle: "Solving Fragmented Fitness Tracking and Inconsistent Routine Building",
        type: "overview",
        content: {
          lead:
            "Running is a simple activity, but maintaining a consistent running routine can be challenging. Runners frequently need to track distance, review past workouts, schedule training sessions, discover running events, and understand their performance over time. When these activities are spread across disconnected tools, monitoring progress becomes exhausting.",
          definition:
            "Running APP explores how a unified mobile experience simplifies these tasks by presenting essential running information, structured training programs, and personal performance in a clear, highly motivating interface built around Pace by Nitheesh.",
          metrics: [
            { val: "46,00", label: "HISTORY KM", sub: "Total completed distance" },
            { val: "5,50", label: "AVG PACE", sub: "Historical pacing rhythm" },
            { val: "4.10.00", label: "TOTAL TIME", sub: "Cumulative hours logged" },
            { val: "4 Run", label: "SESSIONS", sub: "Completed workouts" },
          ],
          structureTitle: "THE 8 CORE PILLARS OF RUNNING APP",
          structure: [
            {
              step: "01",
              title: "Running Dashboard",
              desc:
                "Central hub uniting recent activities, marathon event highlights, training programs, and quick navigation.",
            },
            {
              step: "02",
              title: "Running History & Statistics",
              desc:
                "Detailed log showing cumulative distance (46,00 Km), average pace (5,50), total time, and individual session cards.",
            },
            {
              step: "03",
              title: "Structured Training Programs",
              desc:
                "Multi-distance program tiers: Nitheesh 42 KM, Jacob 21 KM, Temba Bavuma 10 KM, and Joshua Little 5 KM with coach ratings.",
            },
            {
              step: "04",
              title: "Marathon Discovery",
              desc:
                "Official event information (e.g. BLS Groups Marathon) and day-by-day training schedules (Monday 6 AM / 4 PM runs).",
            },
            {
              step: "05",
              title: "Running Club Discovery",
              desc:
                "Community exploration: Bolt Runners (23,408 members), Novack Pacer, and Willey Club with one-tap 'Join' actions.",
            },
            {
              step: "06",
              title: "Live Running Interface",
              desc:
                "In-motion HUD displaying ambient temperature (32°C), GPS satellite status, bold distance odometer, pace, duration, and calories.",
            },
            {
              step: "07",
              title: "Route Visualization",
              desc:
                "Real-time GPS vector mapping connecting physical movement with live coordinate paths and full-screen map views.",
            },
            {
              step: "08",
              title: "Workout Summary & Analytics",
              desc:
                "Post-session reflection displaying route loops, step length (1,00 m), calories burned (854 kcal), and cadence (212 spm).",
            },
          ],
        },
      },
      {
        pageNumber: 3,
        section: "02 / PROJECT OBJECTIVE & DESIGN CHALLENGES",
        title: "Balancing Visual Energy with In-Motion Readability",
        subtitle: "Key Design Opportunities and Usability Considerations",
        type: "opportunity",
        content: {
          intro:
            "The primary objective was to design a mobile running experience that combines fitness tracking with training organization and community discovery. The design challenges required balancing high-energy athletic aesthetics with rapid outdoor legibility.",
          challenge: {
            title: "Information Density & Sunlight Visibility",
            desc:
              "A running app combines numerical statistics, calendars, marathon details, map layers, and action controls. When running outdoors under direct sunlight with shaky hands, standard tiny fonts and crowded menus cause disorientation.",
          },
          response: {
            title: "Pace by Nitheesh Visual Hierarchy",
            desc:
              "We applied high-contrast lime-green accents (#B8FF24), bold condensed display headings, oversized odometer numerals, and clear tactile thumb targets for pausing, continuing, and finishing workouts.",
          },
          questionsTitle: "CORE DESIGN OBJECTIVES ADDRESSED",
          questions: [
            {
              num: "01",
              q: "How to make running statistics easy to understand at a glance?",
              a: "Engineered high-contrast odometer typography (46,00 Km / 08 Km) paired with tripartite metrics (Pace, Duration, Calories) and pill indicators.",
            },
            {
              num: "02",
              q: "How to simplify marathon preparation for different athletes?",
              a: "Structured dedicated distance tiers (42 KM, 21 KM, 10 KM, 5 KM) with morning/afternoon daily workout schedules.",
            },
            {
              num: "03",
              q: "How to foster community participation without social clutter?",
              a: "Created streamlined club discovery cards (Bolt Runners, Novack Pacer) with member counts, recent activity feeds, and 1-tap Join.",
            },
            {
              num: "04",
              q: "How to ensure distinct workout controls and avoid mis-taps?",
              a: "Designed distinct, large visual states: bright lime 'PAUSE', green 'CONTINUE', and high-contrast dark 'FINISH' buttons.",
            },
          ],
          evidenceNote:
            "This problem statement and objectives represent the conceptual design opportunities addressed by the concept, serving as the foundation for the Figma mobile interface.",
        },
      },
      {
        pageNumber: 4,
        section: "03 / TARGET AUDIENCE & PERSONAS",
        title: "Three Groups of Modern Runners",
        subtitle: "Designing for Beginners, Regular Striders, and Marathon Enthusiasts",
        type: "persona",
        content: {
          intro:
            "The application is conceptually designed for three key runner segments, bridging the gap between casual routine-building and high-performance marathon training.",
          persona: {
            initials: "NR",
            name: "Nitheesh R.",
            role: "Marathon & Fitness Enthusiast (24, Athlete & Product Designer)",
            bio: "Training for full 42 KM marathon events; needs clear daily training schedules, reliable pace monitoring, and access to local running club communities.",
            columns: [
              {
                title: "BEGINNER RUNNERS",
                points: [
                  "Starting their fitness journey",
                  "Need simple ways to follow structured sessions",
                  "Monitor gradual progress and distance growth",
                  "Establish a dependable weekly running routine",
                ],
              },
              {
                title: "REGULAR RUNNERS",
                points: [
                  "Run consistently 3 to 5 times per week",
                  "Review distance, pace, and workout duration",
                  "Compare historical sessions in the History log",
                  "Analyze biometrics like cadence and step length",
                ],
              },
              {
                title: "MARATHON ENTHUSIASTS",
                points: [
                  "Follow structured long-distance training programs",
                  "Explore official marathon events (BLS Groups)",
                  "Manage 2-a-day workouts (6 AM & 4 PM sessions)",
                  "Participate in local running clubs and squads",
                ],
              },
            ],
          },
          empathyTitle: "EMPATHY MAP — DURING OUTDOOR RUNNING SESSIONS",
          empathyMap: {
            thinks:
              "“I want to check my pace and distance without breaking my rhythm or fumbling with small buttons.”",
            says:
              "“Show me my completed path and let me listen to music while tracking my kilometers effortlessly.”",
            does:
              "Glances down briefly while pacing, relies on high-contrast lime highlights, taps large pause controls when pausing at crossings.",
            feels:
              "Empowered and focused when numbers are crystal clear; frustrated if menus are convoluted or controls are ambiguous.",
          },
          researchStep:
            "Conceptual audience segmentation informing interface hierarchy, glanceable typography, and high-contrast touch states in Figma.",
        },
      },
      {
        pageNumber: 5,
        section: "04 / USER JOURNEY & INFORMATION ARCHITECTURE",
        title: "The 7-Stage Connected Running Journey",
        subtitle: "From Account Access to Workout Reflection and Club Engagement",
        type: "flows",
        content: {
          intro:
            "The intended user journey connects discovery, preparation, activity, and reflection into a frictionless 7-step mobile experience.",
          stepper: [
            { step: "01. GET STARTED", detail: "Splash & Welcome Sign Up" },
            { step: "02. EXPLORE", detail: "Dashboard, History & Clubs" },
            { step: "03. PREPARE", detail: "Select Training Program" },
            { step: "04. RUN", detail: "Live HUD & GPS Mapping" },
            { step: "05. CONTROL", detail: "Pause, Resume or Finish" },
            { step: "06. REVIEW", detail: "Workout Summary Analytics" },
            { step: "07. CONTINUE", detail: "Community Share & Next Goal" },
          ],
          flowsTitle: "CONNECTED INFORMATION ARCHITECTURE",
          flows: [
            {
              name: "1. Onboarding & Account Access",
              path: "Pace by Nitheesh Splash → Nitheesh Running Club Welcome → Create Account / Log In (Google, Apple, Facebook).",
            },
            {
              name: "2. Training Program & Marathon Schedule",
              path: "Home Dashboard → Select 'Running Programs' → Choose 42 KM Tier → View Monday Schedule (6 AM 20 Km / 4 PM 10 Km).",
            },
            {
              name: "3. Live Workout & Route Tracking",
              path: "Start Run → 32°C & GPS lock verified → Live Odometer (08 Km) & Music Player → Pause/Resume → Finish Workout.",
            },
            {
              name: "4. Reflection & Community Discovery",
              path: "Post-Run Summary (Route Loop, Step Length, Cadence) → Explore 'Find The Club Near You' → Join Bolt Runners.",
            },
          ],
          statesTitle: "INTERACTION & ERGONOMIC CONSIDERATIONS",
          states: [
            "Integrated Music Controller: Floating 'Sweet Disposition - The Temper Trap' audio widget with quick play/pause/skip.",
            "Dual-State In-Run HUD: Seamless toggle between clean numerical odometer mode and live full-screen GPS route map.",
            "Unmistakable Action States: Distinct colors for PAUSE (Lime), CONTINUE (Lime pill), and FINISH (High-contrast dark pill).",
            "Glanceable History Log: Historical run cards tagged with date, distance pill, duration, and average split pace.",
          ],
        },
      },
      {
        pageNumber: 6,
        section: "05 / ARCHITECTURAL WIREFRAME BLUEPRINTS",
        title: "Low-Fidelity Structure & Zone Schematics",
        subtitle: "Translating Core Features into Thumb-Friendly Wireframe Layouts",
        type: "wireframes",
        content: {
          blueprintBadge: "UX WIREFRAME BLUEPRINT // 4-STAGE SCREEN SCHEMATICS",
          intro:
            "Following the project description, low-fidelity wireframes established the content hierarchy, component boundaries, and thumb-reach zones across Dashboard, Training Schedules, Live Tracking HUD, and Workout Summary.",
          wireframeImage: {
            src: "/case-studies/running-app/running-app-wireframe.png",
            title: "RUNNING APP 4-STAGE ARCHITECTURAL WIREFRAME BLUEPRINT",
            subtitle: "01. Dashboard & History • 02. Training & Marathon • 03. Live Running HUD • 04. Workout Summary",
            alt: "Running APP Architectural Wireframe Blueprint Schematics",
            callouts: [
              {
                title: "01. Dashboard & History Zone",
                desc: "Featured marathon hero banner, 'Your Last 2 Activities' cards, horizontal club carousel, and program tiers.",
              },
              {
                title: "02. Training Schedule Zone",
                desc: "Nitheesh 42 KM program overview, day-of-week breakdown (Monday 6 AM / 4 PM), and coach directory.",
              },
              {
                title: "03. Live Running HUD Zone",
                desc: "32°C & GPS status, oversized odometer, pace/time/kcal tri-bar, audio music widget, and tactile pause controls.",
              },
              {
                title: "04. Workout Summary Zone",
                desc: "Closed GPS route vector loop, key metric pill (3.00 Km, 15:00 min, 5:00/km), and biometric grid (Step, Cadence, Elevation).",
              },
            ],
          },
          wireframeMockup: {
            title: "RUNNING APP LIVE HUD WIREFRAME ZONE SPECIFICATION",
            fidelity: "ARCHITECTURAL LOW-FI // THUMB-DRIVEN ERGONOMICS",
            systemName: "PACE HUD WIREFRAME v2.0",
            logicRule: "Status & Odometer (Top 55%) vs Controls & Music (Bottom 45% thumb zone)",
            status: "IMPLEMENTED IN FIGMA CANVAS",
            zones: [
              {
                zoneId: "ZONE_A",
                type: "TOP / TELEMETRY",
                name: "Environmental Status",
                description: "Glanceable environmental bar showing ambient temperature (32°C), battery, and GPS lock indicator.",
                elements: ["32°C Temp Badge", "Battery Level", "GPS Connection", "Back Navigation"],
              },
              {
                zoneId: "ZONE_B",
                type: "CENTER / ODOMETER",
                name: "Primary Running Odometer",
                description: "Ultra-bold 48px+ distance display paired with instant pace, elapsed duration, and active calories burned.",
                elements: ["08 Distance (Km)", "Avg Pace 4'10\"", "Duration 31.56", "20 kcal Burned"],
              },
              {
                zoneId: "ZONE_C",
                type: "BOTTOM / REACH",
                name: "Audio & Tactile Controls",
                description: "Integrated audio playback controller plus oversized thumb-reachable buttons for map, pause, resume, and finish.",
                elements: ["Music Widget", "Map Vector Toggle", "PAUSE / CONTINUE", "FINISH Workout"],
              },
            ],
          },
          decisions: [
            {
              principle: "Unified Mobile Dashboard",
              rationale:
                "Integrates activity history, training tiers, and club discovery on a single scrollable surface to eliminate disjointed menus.",
            },
            {
              principle: "Thumb-Zone Tactile Action Bar",
              rationale:
                "Concentrated primary in-run controls (Pause, Continue, Finish) in the lower 35% of screen height for effortless one-handed use.",
            },
            {
              principle: "Integrated Music Widget",
              rationale:
                "Embeds track title, play/pause, and skip controls directly inside the HUD so runners never leave the tracking screen.",
            },
            {
              principle: "Post-Run Loop & Biometrics",
              rationale:
                "Combines visual map path with high-fidelity step length, cadence, and elevation gain cards for complete performance reflection.",
            },
          ],
        },
      },
      {
        pageNumber: 7,
        section: "06 / VISUAL DESIGN LANGUAGE & TOKENS",
        title: "Athletic Energy, Bold Type & Lime Accents",
        subtitle: "High-Contrast Visual Identity Built for Pace by Nitheesh",
        type: "design_system",
        content: {
          intro:
            "The visual identity of Running APP is built around a bold, energetic athletic aesthetic. Vibrant lime-green acts as an accent for important actions, highlights, and workout-related information, supported by dark tones and light backgrounds for maximum contrast.",
          typography: {
            title: "Bold Condensed Sports Display with Clean Monospace Telemetry.",
            note: "Headings: Bold, condensed athletic sans for powerful sports personality • Body: High-legibility sans-serif for statistics, labels, and instructional content.",
          },
          principles: [
            {
              component: "Vibrant Lime Accent (#B8FF24)",
              rule: "Used exclusively on primary CTAs (Join Us, Start Run, Join Club), active workout pills, and route path highlights.",
            },
            {
              component: "High-Contrast Odometer",
              rule: "Prominent 48px+ numerical display ensuring distance and split pace are legible under shaking, outdoor running conditions.",
            },
            {
              component: "Dynamic Athletic Photography",
              rule: "High-energy imagery of track athletes and marathon runners introducing movement, human energy, and motivation.",
            },
            {
              component: "Modular Activity Cards",
              rule: "Clean card containers with pill badges for date, duration, pace, and distance, keeping past performance organized.",
            },
            {
              component: "Distinct Workout Controls",
              rule: "Clearly differentiated visual states for Pause (lime circle), Continue (lime pill), and Finish (dark pill with green text).",
            },
          ],
          intent:
            "Create an athletic, contemporary mobile interface that makes running feel organized, accessible, and motivating through clear hierarchy and energetic design.",
        },
      },
      {
        pageNumber: 8,
        section: "07 / HIGH-FIDELITY FIGMA PRODUCTION UI SHOWCASE",
        title: "The Completed Running APP Suite",
        subtitle: "Authentic Production Screens Captured Directly from the Figma File",
        type: "visual_gallery",
        content: {
          badge: "ORIGINAL FIGMA HIGH-FIDELITY SCREENS",
          intro:
            "Explore the actual screens from our Figma design canvas. Every screen balances clean layout composition with prominent statistics, energetic running photography, and vibrant lime accents.",
          featuredImage: {
            src: "/case-studies/running-app/running-app-dashboard-history.png",
            title: "RUNNING DASHBOARD, HISTORY & TRAINING SCHEDULE",
            subtitle: "Home Page • History Log (46,00 Km) • Monday Training Schedule (6 AM / 4 PM)",
            alt: "Running APP Dashboard and History Screen Showcase",
            callouts: [
              {
                title: "1. Running Dashboard",
                desc: "Home view featuring running info banner, 'Your Last 2 Activities' (3 Km & 15 Km), and 'Running Programs' quick access.",
              },
              {
                title: "2. History & Statistics",
                desc: "Odometer header showing 46,00 Km, 4 Run, 5,50 Avg Pace, 4.10.00 Time, and detailed historical activity cards.",
              },
              {
                title: "3. Daily Training Schedule",
                desc: "Monday program schedule with 6:00 AM (20 Km long run) and 4:00 PM (10 Km recovery run) scheduled sessions.",
              },
            ],
          },
          gallery: [
            {
              src: "/case-studies/running-app/running-app-live-tracking.png",
              title: "Live Running HUD & Route Tracking",
              tag: "IN-MOTION WORKOUT TRACKING",
              desc: "Authentic Figma screens showing live GPS map, 32°C status, 08 Km odometer, Sweet Disposition music player, and Pause/Finish controls.",
            },
            {
              src: "/case-studies/running-app/running-app-programs-clubs.png",
              title: "Training Programs & Running Club Discovery",
              tag: "TRAINING & COMMUNITY",
              desc: "Nitheesh 42 KM, Jacob 21 KM, and Temba Bavuma 10 KM tiers alongside Bolt Runners club discovery (23,408 runners).",
            },
          ],
        },
      },
      {
        pageNumber: 9,
        section: "08 / CORE INTERACTION MODULES",
        title: "Deep Dive into Key Application Surfaces",
        subtitle: "How the Experience Answers Critical Runner Questions at Speed",
        type: "screens",
        content: {
          intro:
            "A breakdown of the three primary interactive surfaces that runners engage with throughout their fitness journey.",
          screens: [
            {
              screenNum: "SURFACE 01",
              title: "Running Dashboard & History",
              desc: "Brings together cumulative running mileage (46,00 Km), recent sessions, marathon event highlights, and training programs into one glanceable home.",
              image: "/case-studies/running-app/running-app-dashboard-history.png",
              mustAnswer: "What is my cumulative progress, and what training session is scheduled next?",
            },
            {
              screenNum: "SURFACE 02",
              title: "Live Running HUD & Route Tracking",
              desc: "Live workout telemetry with temperature (32°C), GPS lock, bold 08 Km distance, music player controls, and one-tap Pause/Continue/Finish.",
              image: "/case-studies/running-app/running-app-live-tracking.png",
              mustAnswer: "Am I hitting my pace target, and can I easily pause or finish without mis-tapping?",
            },
            {
              screenNum: "SURFACE 03",
              title: "Workout Summary & Biometric Analytics",
              desc: "Post-workout reflection displaying completed GPS route loop, distance and duration pills, Step Length (1,00 m), Calories (854 kcal), and Cadence (212 spm).",
              image: "/case-studies/running-app/running-app-workout-summary.png",
              mustAnswer: "How did I perform on this run, and what was my biometric step cadence and energy output?",
            },
          ],
          checklistTitle: "FIGMA DESIGN DELIVERABLES & TECHNICAL SPECIFICATIONS",
          checklist:
            "Design Tool: Figma • Brand: Pace by Nitheesh • Deliverables: Mobile UI screens, component library, auto-layout cards, and interactive prototype flow connecting all 18+ frames.",
        },
      },
      {
        pageNumber: 10,
        section: "09 / CONCLUSION, FUTURE IMPROVEMENTS & LIVE PROTOTYPE",
        title: "Conclusion & Interactive Figma Prototype",
        subtitle: "Expected Design Outcomes, Future Roadmap & Live Design Access",
        type: "conclusion",
        content: {
          intro:
            "Running APP explores how thoughtful UI/UX design can support a more connected running experience. By uniting activity tracking, running history, training programs, marathon discovery, route visualization, and community clubs, Pace by Nitheesh establishes an athletic foundation centered on consistency, progress, and the enjoyment of running.",
          columns: [
            {
              title: "EXPECTED DESIGN OUTCOMES",
              items: [
                "Unified mobile running experience bringing tracking, training, and community together",
                "High-contrast visual language (lime green & dark tones) optimized for outdoor use",
                "Large numerical displays ensuring instant glanceability while running",
                "Connected interactive Figma prototype demonstrating end-to-end user flows",
              ],
            },
            {
              title: "FUTURE IMPROVEMENTS ROADMAP",
              items: [
                "GPS-based real-time route tracking with elevation heatmaps",
                "Personal goals and weekly progress achievement reports",
                "Pace and distance comparisons across historical workouts",
                "Push notifications for scheduled 6 AM / 4 PM training sessions",
                "Club memberships, group events, and marathon registration links",
                "Integration with Apple Health, Google Fit, and wearable sensors",
              ],
            },
          ],
          validationPlan: [
            {
              step: "01 / Runner Usability Validation",
              desc: "Test the complete Figma prototype with runners across beginner, regular, and marathon cohorts to evaluate navigation and workout controls.",
            },
            {
              step: "02 / Outdoor Legibility Refinement",
              desc: "Evaluate sunlight readability and button touch targets in outdoor movement scenarios to optimize glance speed and prevent mis-taps.",
            },
            {
              step: "03 / Technical Architecture Planning",
              desc: "Define technical requirements for GPS tracking, offline route caching, health platform integration, and real-time community feeds.",
            },
          ],
          manifesto: "PACE BY NITHEESH — RUNNING APP",
          manifestoSub:
            "Translating fitness-related needs into a structured mobile experience centered on consistency, progress, and community.",
        },
      },
    ],
  },
  {
    id: "nexus",
    num: "02",
    title: "NEXUS",
    tagline: "ICY AR/VR FRAMES — WIREFRAME CONSTRUCTION",
    category: "SPATIAL UX / AR-VR DISCOVERY & LOW-FIDELITY WIREFRAME SYSTEM",
    role: "Lead Spatial UX & Wireframe Architect",
    timeline: "October 2026",
    pdfUrl: "/case-studies/nexus-case-study.pdf",
    heroImage: "/case-studies/nexus/nexus-hero.png",
    liveUrl: "https://icy-arvr-frames.lovable.app",
    liveLabel: "LIVE DEMO ↗",
    summary:
      "A complete, structured, low-fidelity wireframe system for ICY AR/VR Frames. Establishes the entire 1440×900 desktop and 390×844 mobile hierarchy, 22-state screen architecture, WebXR Meta Quest 3 pairing, and 6-DoF room scanning flow before high-fidelity visual design.",
    deliverables: [
      "Low-Fidelity Grayscale Wireframe System",
      "1440×900 Desktop & 390×844 Mobile Schematics",
      "Complete Screen Set (A-D: 22 Interaction States)",
      "Reusable Component Library & State Variants",
      "Deterministic User Flow & Interaction Pipeline",
      "Meta Quest 3 Pairing & 6-DoF Room Scan Wireframes",
      "Figma 5-Page Information Architecture",
    ],
    stats: [
      { label: "Figma Pages", val: "05", sub: "Architecture structure" },
      { label: "Screen States", val: "22", sub: "Entry, Main, AR/VR, Support" },
      { label: "Grid Standards", val: "12-Col", sub: "1440px desktop & 390px mobile" },
      { label: "Live Runtime", val: "WebXR", sub: "Quest 3 auto-pairing" },
    ],
    theme: {
      bg: "#0A0E17",
      text: "#F1F5F9",
      accent: "#3B82F6",
      cardBg: "#111827",
      border: "#1E293B",
      highlight: "#22C55E",
      darkPreviewBg: "#060911",
    },
    palette: [
      { name: "CANVAS GRAY", hex: "#121214", role: "Wireframe canvas neutral foundation" },
      { name: "BORDER CHROME", hex: "#4B4B55", role: "Structural wireframe boundary strokes" },
      { name: "PRIMARY WHITE", hex: "#FFFFFF", role: "High-contrast action triggers & labels" },
      { name: "NEUTRAL MID", hex: "#888888", role: "Secondary copy & diagnostic annotations" },
      { name: "ELECTRIC COBALT", hex: "#2845F5", role: "Production launch CTA (High-fidelity)" },
      { name: "PULSE EMERALD", hex: "#22C55E", role: "All systems go & verified hardware link" },
    ],
    pages: [
      {
        pageNumber: 1,
        section: "CASE STUDY COVER",
        title: "NEXUS",
        subtitle: "ICY AR/VR FRAMES: LOW-FIDELITY WIREFRAME SYSTEM",
        type: "cover",
        content: {
          category: "SPATIAL UX / AR-VR DISCOVERY & LOW-FIDELITY WIREFRAME SYSTEM",
          description:
            "A structured low-fidelity wireframe system for ICY AR/VR Frames, establishing interface structure, screen hierarchy, content organization, navigation, and WebXR interaction flows before visual styling.",
          context: "FIGMA PAGE 1 // PROJECT OVERVIEW & LEGEND",
          greeting: "Somewhere new starts here.",
          greetingSub: "Grayscale layout rules • 1440×900 Desktop & 390×844 Mobile • 22 Screen States.",
          coverImage: "/case-studies/nexus/nexus-hero.png",
          metrics: [
            { num: "22", label: "Screen states" },
            { num: "05", label: "Figma pages" },
            { num: "12-Col", label: "Responsive grid" },
          ],
          tags: ["GRAYSCALE WIREFRAMES", "1440x900 DESKTOP", "390x844 MOBILE", "6-DoF SPATIAL RUNTIME", "META QUEST 3"],
          footerDate: "OCTOBER 2026",
          footerNote: "Low-Fidelity Wireframe System & Production Verification from https://icy-arvr-frames.lovable.app",
        },
      },
      {
        pageNumber: 2,
        section: "01 / WIREFRAME GOALS & RULES",
        title: "Structuring the front door to spatial realities",
        subtitle: "Figma Page 1: Project Overview, Scope & Grayscale Wireframe Rules",
        type: "overview",
        content: {
          lead:
            "The objective of ICY AR/VR Frames wireframing is to establish the entire interface structure, screen hierarchy, content organization, navigation system, and interaction flow before applying the final visual design.",
          definition:
            "A strict grayscale wireframe blueprint system built around a 12-column layout grid. Forbids gradients, decorative neon, and glassmorphism at this stage to validate pure ergonomics, readability, and spatial mental models.",
          metrics: [
            { val: "22", label: "SCREEN STATES", sub: "Sets A, B, C & D mapped" },
            { val: "1440px", label: "DESKTOP REF", sub: "12-column fluid grid" },
            { val: "390px", label: "MOBILE REF", sub: "Touch-friendly ergonomics" },
            { val: "6 DoF", label: "TRACKING", sub: "Degrees of freedom" },
          ],
          structureTitle: "WIREFRAME DESIGN PRINCIPLES & CONSTRAINTS",
          structure: [
            {
              step: "01",
              title: "Grayscale Only Visual Language",
              desc:
                "Restricted to white, light gray, medium gray, dark gray, and black. Eliminates visual distraction to evaluate typography hierarchy, contrast, and layout balance.",
            },
            {
              step: "02",
              title: "Simple Rectangular Placeholders",
              desc:
                "Standardized bounding boxes with diagonal 'X' crosslines representing 3D previews, video billboards, world key art, and AR avatars.",
            },
            {
              step: "03",
              title: "Neutral Copy & Consistent Buttons",
              desc:
                "Replaces final marketing copy with neutral labels ([3D HERO VIEWPORT], [GENRE TAG]) and rectangular interactive triggers with clear state signifiers.",
            },
            {
              step: "04",
              title: "Numbered Interaction Annotations",
              desc:
                "Arrows, flow indicators, and numbered circular badges [1] through [8] mapping inputs, state transitions, and deterministic error fallback paths.",
            },
          ],
        },
      },
      {
        pageNumber: 3,
        section: "02 / 22-STATE SCREEN TAXONOMY",
        title: "Complete 22-state screen taxonomy",
        subtitle: "Screen Sets A, B, C & D: Mapping the Complete Experience Journey",
        type: "opportunity",
        content: {
          intro:
            "Every applicable screen and interaction in the live ICY AR/VR Frames experience is mapped into a clear 4-tier taxonomy, avoiding speculative features while ensuring complete state coverage.",
          challenge: {
            title: "The Blind Launch Problem",
            desc:
              "Conventional VR launchers require donning headsets only to discover empty lobbies, unexpected motion sickness triggers, or uncharged controllers.",
          },
          response: {
            title: "Systematic 4-Set Wireframe Coverage",
            desc:
              "ICY AR/VR Frames organizes 22 discrete states across Entry & Introduction, Main Experience, AR/VR Interaction States, and Supporting Screens.",
          },
          questionsTitle: "SCREEN SET BREAKDOWN (SETS A - D)",
          questions: [
            {
              num: "SET A",
              q: "Entry & Introduction States (Screens 1 - 4)",
              a: "1. Landing / Welcome Screen • 2. Immersive Intro • 3. Main 'Enter the world' CTA • 4. Meta Quest 3 Readiness & Permission check.",
            },
            {
              num: "SET B",
              q: "Main Experience States (Screens 5 - 10)",
              a: "5. Main Dashboard (1440x900 & 390x844) • 6. Content Listing / Worlds • 7. Content Details Modal • 8. Main 3D Viewing • 9. Focused View • 10. Controls Panel.",
            },
            {
              num: "SET C",
              q: "AR/VR Interaction States (Screens 11 - 16)",
              a: "11. Scene Loading Skeleton • 12. Active Immersive Viewport • 13. Object Selection • 14. Info Annotation Panel • 15. Pause / Exit Modal • 16. Return Hub.",
            },
            {
              num: "SET D",
              q: "Supporting Screens & Handlers (Screens 17 - 22)",
              a: "17. Navigation Menu Rail • 18. User Preferences • 19. Interaction Instructions • 20. Loading State • 21. Empty Friend Lobby • 22. Unsupported Device Fallback.",
            },
          ],
          evidenceNote:
            "Directly derived from the live ICY AR/VR Frames application architecture and WebXR spatial design heuristics.",
        },
      },
      {
        pageNumber: 4,
        section: "03 / USER FLOW & INTERACTION PIPELINE",
        title: "Deterministic spatial interaction pathways",
        subtitle: "Figma Page 2: Entry Points, Primary User Journey & Exit Fallbacks",
        type: "flows",
        content: {
          intro:
            "The information architecture is engineered to minimize 'time-to-immersion'—guiding explorers from browser-based world discovery to active spatial presence with deterministic outcomes at every step.",
          stepper: [
            { step: "01 / ENTRY", detail: "Landing Hero & Meta Quest 3 Battery Check" },
            { step: "02 / DISCOVER", detail: "Inspect Comfort Levels, Player Counts & Ratings" },
            { step: "03 / CALIBRATE", detail: "6-DoF Room Scan & Surface Mesh Plane Lock" },
            { step: "04 / SQUAD UP", detail: "Multiplayer Invite & Pilot Loadout Selection" },
            { step: "05 / IMMERSE", detail: "WebXR Handshake into 3D Spatial Visor Runtime" },
          ],
          flowsTitle: "PRIMARY & SECONDARY INTERACTION PATHS",
          flows: [
            {
              name: "Flow 1: Direct Race Launch (Primary Journey)",
              path: "Landing Hero → Inspect 'Orbit Racers' S04 → View Moderate Comfort & 1-8 Explorers → Click 'Enter the world' → Auto-detect Quest 3 → Launch Spatial Runtime",
            },
            {
              name: "Flow 2: Mixed Reality 6-DoF Room Scan (Spatial Calibration)",
              path: "Sidebar 'Mixed reality' → 'Scan your space' → Verify 4 Surface Planes & Optimal Light → Click 'Calibrate & Lock' → Play Zone Confirmed",
            },
            {
              name: "Flow 3: Tournament & Competitive Arena (Community Path)",
              path: "Sidebar 'Live events' → Ice Circuit Championship → View 50,000 Credits Prize & 2,408 Pilots → Join Bracket → Synchronize Squad Lobbies",
            },
            {
              name: "Flow 4: Unsupported Hardware / Web Fallback (Error Path)",
              path: "Detect No WebXR Headset → Trigger 'Device Link' Warning → Offer 1-Click 'Try without headset' → Render Interactive 2D Canvas Fallback",
            },
          ],
          statesTitle: "DETERMINISTIC INTERACTION STATE RULES",
          states: [
            "All interactive buttons feature 4 explicit states: Default, Hover (accent border), Active (pressed), and Disabled",
            "Every modal (Quest 3 Pairing, Room Scanner, World Detail) provides both an [X] escape trigger and background click dismissal",
            "Hardware connection indicators communicate status via iconography and text ('PAIRED 86%', 'SEARCHING...', 'OFFLINE'), never color alone",
            "1-Click 'Try without headset' fallback ensures 100% universal access on laptops and mobile devices without a VR headset",
          ],
        },
      },
      {
        pageNumber: 5,
        section: "04 / DESKTOP & MOBILE ERGONOMICS",
        title: "Cross-breakpoint wireframe architecture",
        subtitle: "1440×900 Desktop 12-Column Grid vs 390×844 Mobile Touch Ergonomics",
        type: "persona",
        content: {
          intro:
            "Responsive spatial wireframes require fundamentally different navigation models between desktop screens and mobile hand-held devices to maintain accessibility and speed.",
          persona: {
            initials: "WF",
            name: "RESPONSIVE WIREFRAME SCHEMATICS",
            role: "1440×900 Desktop & 390×844 Mobile Specifications",
            bio: "Desktop layouts optimize for spatial multi-tasking (persistent sidebar + hero billboard + 3-column catalog). Mobile layouts optimize for single-thumb navigation (collapsible drawer + vertical card feed + bottom tab rail).",
            columns: [
              {
                title: "1440×900 DESKTOP LAYOUT",
                points: [
                  "12-column fluid grid with 24px gutters and 40px outer margins",
                  "Persistent 170px left navigation rail grouping Universe, Social, and Hardware docks",
                  "Large-format 3D hero viewport (235px height) with dual CTAs and telemetry pills",
                  "3-column modular world cards (330px height) displaying ratings, player counts, and specs",
                ],
              },
              {
                title: "390×844 MOBILE LAYOUT",
                points: [
                  "Single-column vertical reading order preventing horizontal overflow",
                  "Persistent 50px bottom navigation bar centered in the natural thumb zone",
                  "Touch-friendly 44px+ interactive tap targets for launch CTAs and filters",
                  "Compact horizontal card rows pairing 80×80px 3D thumbnails with stacked metadata",
                ],
              },
              {
                title: "ACCESSIBILITY & USABILITY RULES",
                points: [
                  "Text sizes strictly hierarchical: Headings (18-24px), Subheads (13-14px), Body (12px), Captions (10-11px)",
                  "All status indicators pair geometric glyphs (●, ✓, ✕, !) with high-contrast textual labels",
                  "Visible focus rings (2px solid outline) on all keyboard and controller-focusable elements",
                ],
              },
            ],
          },
          empathyTitle: "HEURISTIC EVALUATION (DESKTOP VS MOBILE)",
          empathyMap: {
            thinks:
              "Can I evaluate world comfort levels and check my headset battery before entering VR?",
            says:
              "The desktop layout gives me full situational awareness; the mobile layout lets me queue worlds on the go.",
            does:
              "Browses world catalog on desktop, initiates Quest 3 wireless link, and calibrates room boundary in seconds.",
            feels:
              "Empowered by predictable navigation, clear feedback states, and zero motion sickness ambiguity.",
          },
          researchStep:
            "Validated against Nielsen Norman Group 10 Usability Heuristics and W3C WebXR Device API specifications.",
        },
      },
      {
        pageNumber: 6,
        section: "05 / WIREFRAME BLUEPRINT & SCHEMATICS",
        title: "Complete Low-Fidelity Wireframe Blueprint",
        subtitle: "Figma Page 3: 1440×900 Desktop, 390×844 Mobile, Modals & Component System",
        type: "wireframes",
        content: {
          blueprintBadge: "FIGMA PAGE 3 // LOW-FIDELITY WIREFRAME SYSTEM",
          intro:
            "A technical grayscale wireframe blueprint constructed in strict compliance with low-fidelity guidelines. Integrates desktop discovery, mobile adaptive viewports, hardware pairing, 6-DoF room scanning, and the reusable component library.",
          wireframeImage: {
            src: "/case-studies/nexus/nexus-wireframe.png",
            title: "ICY AR/VR FRAMES // COMPLETE LOW-FIDELITY WIREFRAME SYSTEM",
            subtitle: "Desktop (1440×900) • Mobile (390×844) • Quest 3 Pairing Modal • 6-DoF Room Scanner • Reusable Components",
            callouts: [
              {
                title: "FRAME 01: Desktop Discovery Hub (1440×900)",
                desc: "12-column grid featuring persistent left nav rail, Season 04 Orbit Racers hero billboard, 3-column world catalog, and bottom Quest 3 dock.",
              },
              {
                title: "FRAME 02: Mobile Adaptive Viewport (390×844)",
                desc: "Compact vertical stack with top header, 1-tap launch CTA, stacked world cards, and 5-item thumb-friendly bottom navigation bar.",
              },
              {
                title: "FRAMES 03 & 04: Hardware & 6-DoF Calibration Modals",
                desc: "Meta Quest 3 automatic device detection (86% battery) and 6-DoF surface mesh calibration with optimal lighting diagnostics.",
              },
            ],
          },
          wireframeMockup: {
            title: "ICY AR/VR FRAMES ARCHITECTURAL SCHEMATIC",
            fidelity: "Low-Fidelity Grayscale Reference (1440px & 390px Breakpoints)",
            systemName: "ICY_ARVR_FRAMES // WIREFRAME_ARCHITECTURE",
            logicRule: "STRICT GRAYSCALE RULES ELIMINATE VISUAL BIAS AND ACCELERATE SPATIAL HEURISTIC VALIDATION",
            status: "GRID: 12-COLUMN FLUID • CONTRAST: WCAG 2.1 AA • RUNTIME: WEBXR",
            zones: [
              {
                zoneId: "ZONE_01",
                name: "Universal Navigation & Hardware Dock",
                type: "Persistent Left Navigation Rail (170px)",
                description: "Organizes exploration modes (Explore, Worlds, Missions), social rails (Squads, Events, Shop), and persistent Quest 3 battery telemetry.",
                elements: ["[Brand Logo]", "[Universe Links]", "[Social Rails]", "[Connect Visor Dock]"],
              },
              {
                zoneId: "ZONE_02",
                name: "3D Hero Viewport & Telemetry Billboard",
                type: "Atmospheric Showcase Header",
                description: "Season 04 Orbit Racers showcase with 'ALL SYSTEMS GO' status badge, active pilot count (1.2k), and 1-click 'Enter the world' launch trigger.",
                elements: ["[Status Pill]", "[Season 04 Headline]", "[1.2k Online]", "[Enter World CTA]"],
              },
              {
                zoneId: "ZONE_03",
                name: "Discoverable Realms 3-Column Catalog Grid",
                type: "Modular Experience Cards",
                description: "Cards for Orbit Racers, Crystal Frontier, and Verdant Protocol with standardized 3D thumbnails, comfort ratings, and capacity tags.",
                elements: ["[3D Thumbnails]", "[Comfort Badges]", "[Ratings 4.9★]", "[Launch Sector CTA]"],
              },
            ],
          },
          decisions: [
            {
              principle: "Glanceable Comfort Disclosures",
              rationale: "Comfort levels (Moderate, Stationary, Intense) are positioned directly on cards to eliminate motion sickness hesitation before wearing a headset.",
            },
            {
              principle: "Persistent Device Pairing Dock",
              rationale: "Surfacing Quest 3 connection state and battery life (86%) directly in the sidebar prevents failed launches from uncharged hardware.",
            },
            {
              principle: "Universal 2D Web Fallback",
              rationale: "Providing a prominent 'Try without headset' option guarantees 100% web accessibility on standard laptop screens.",
            },
          ],
          wireframeCards: [
            {
              code: "WF-01",
              state: "FEATURED REALM",
              title: "Orbit Racers World Card Anatomy",
              desc: "Deep wireframe card container with diagonal 'X' media placeholder, genre badge, 1.2k online counter, comfort rating, and launch CTA.",
              components: [
                { name: "Media Placeholder", role: "Rectangular box with 'X' crosslines" },
                { name: "Live Pilot Counter", role: "1.2k playing telemetry" },
                { name: "Comfort Badge", role: "Moderate motion tier disclosure" },
              ],
              purpose: "Provides instant clarity on world genre, player population, and simulator comfort level.",
            },
            {
              code: "WF-02",
              state: "DEVICE DOCK",
              title: "Meta Quest 3 Pairing Dock",
              desc: "Hardware verification widget displaying connection state (Found), battery level (86%), and 1-click WebXR handshake.",
              components: [
                { name: "Device Selector", role: "Meta Quest 3 Auto-Pair" },
                { name: "Battery Telemetry", role: "86% remaining indicator" },
                { name: "Fallback Action", role: "Try without headset (2D Web)" },
              ],
              purpose: "Eliminates surprise battery dropouts and driver conflicts before donning the visor.",
            },
            {
              code: "WF-03",
              state: "SPATIAL SCANNER",
              title: "6-DoF Room Scanner Interface",
              desc: "Real-time room scanning HUD testing surface plane recognition (4 planes locked), optimal lighting (250 Lux), and 6-DoF calibration.",
              components: [
                { name: "Spatial Grid", role: "Surface plane mapper" },
                { name: "Lighting Sensor", role: "Optimal light check (250 Lux)" },
                { name: "Tracking HUD", role: "6 degrees of freedom active" },
              ],
              purpose: "Ensures physical room boundaries are verified and calibrated for safe mixed reality interaction.",
            },
          ],
        },
      },
      {
        pageNumber: 7,
        section: "06 / REUSABLE COMPONENT LIBRARY",
        title: "Modular wireframe component library",
        subtitle: "Figma Page 4: Buttons, Content Cards, Modals & State Variants",
        type: "design_system",
        content: {
          intro:
            "A structured library of reusable UI components organized in Figma Page 4. Every component is defined with clear geometry, consistent padding, and state variants for default, hover, active, and disabled conditions.",
          typography: {
            title: "Geometric Hierarchy: 24px / 18px / 14px / 12px / 10px",
            note: "Headings (24px Bold), Subheads (18px Medium), Card Titles (14px Bold), Body Copy (12px Regular), and Metadata Annotations (10px Monospace).",
          },
          principles: [
            {
              component: "Primary & Secondary Buttons",
              rule: "Consistent rectangular shapes with 4 explicit states: Default (High contrast), Hover (Border emphasis), Active (Pressed fill), and Disabled (Reduced contrast).",
            },
            {
              component: "Standardized Content Cards",
              rule: "Fixed aspect ratio containers pairing diagonal-cross media placeholders with genre tags, title, body snippet, comfort rating, and launch CTA.",
            },
            {
              component: "Device Telemetry Chips",
              rule: "Glanceable pills communicating Meta Quest 3 hardware status ('PAIRED 86%'), network ping (12ms), and 6-DoF tracking health.",
            },
            {
              component: "Feedback & Dialog Modals",
              rule: "Consistent overlay windows featuring clear titles, close triggers [X], step-by-step confirmation flows, and primary/secondary button pairs.",
            },
          ],
          intent:
            "Ensure consistency, maintainability, and rapid iteration across all 22 screen states while keeping the design system modular and production-ready.",
        },
      },
      {
        pageNumber: 8,
        section: "07 / HIGH-FIDELITY SHOWCASE",
        title: "Production UI: From Wireframe to Live Application",
        subtitle: "Authentic Production Captures from https://icy-arvr-frames.lovable.app",
        type: "visual_gallery",
        content: {
          badge: "PRODUCTION UI VERIFICATION",
          intro:
            "Demonstrating how the low-fidelity wireframe architecture directly informed the final high-fidelity spatial design on the live ICY AR/VR Frames application (NEXUS), maintaining 100% structural fidelity.",
          featuredImage: {
            src: "/case-studies/nexus/nexus-hero.png",
            title: "NEXUS Production Hero: 'Somewhere new starts here.'",
            subtitle: "Live production interface showcasing Season 04: Orbit Racers with live pilot telemetry (1.2k) and Meta Quest 3 dock.",
            callouts: [
              {
                title: "Live Telemetry Pill",
                desc: "Real-time '1.2k explorers online - YOUR NEXT ADVENTURE IS LIVE' alongside pulsing 'ALL SYSTEMS GO' network status.",
              },
              {
                title: "Season 04 Spotlight",
                desc: "Orbit Racers hero art with 'Leave gravity behind. Find your line across the frozen edges of a new world.'",
              },
              {
                title: "1-Click Launch Gateway",
                desc: "Direct 'Enter the world ↗' CTA with secondary library bookmarking action and universal breadcrumbs.",
              },
            ],
          },
          gallery: [
            {
              src: "/case-studies/nexus/nexus-worlds.png",
              title: "Find Your Next Reality — Curated 03 Worlds & Social Rail",
              tag: "CATALOG & COMMUNITY",
              desc: "Live directory featuring Orbit Racers (1.2k playing, 4.9★), Crystal Frontier (846 playing, 4.9★), and Verdant Protocol (620 playing, 4.9★) alongside active squad friends (NEON.KAI, Luna.exe, ZeroGravity, pixelghost).",
            },
            {
              src: "/case-studies/nexus/nexus-world-detail.png",
              title: "Orbit Racers Deep Dive: 'Find your own edge.'",
              tag: "WORLD DETAIL GATEWAY",
              desc: "Dedicated world launch modal displaying VR specs, 1-8 explorers capacity, Moderate comfort rating, 4.9 score, and instant 'Launch Orbit Racers' button.",
            },
          ],
        },
      },
      {
        pageNumber: 9,
        section: "08 / CORE HARDWARE & INTERACTION MODULES",
        title: "Hardware Sync, MR Scanning & Live Tournament Hub",
        subtitle: "Meta Quest 3 Pairing, Mixed Reality Scanning & Competitive Tournament Hub",
        type: "screens",
        content: {
          intro:
            "Every sub-flow in ICY AR/VR Frames was built to provide maximum clarity and delight, turning complex spatial computing configurations into simple, intuitive interactions.",
          screens: [
            {
              screenNum: "SCREEN 01",
              title: "Meta Quest 3 Wireless Pairing",
              desc: "A doorway to somewhere else. Automatic device detection confirming Meta Quest 3 (Found • Battery 86%) with 1-click handshake and 'Try without headset' fallback.",
              image: "/case-studies/nexus/nexus-headset.png",
              mustAnswer: "Is my VR headset paired, charged, and ready for launch?",
            },
            {
              screenNum: "SCREEN 02",
              title: "Mixed Reality 6-DoF Room Scanner",
              desc: "A world inside yours. Real-time spatial mapping grid testing surface plane recognition, optimal ambient lighting, and 6 degrees of freedom.",
              image: "/case-studies/nexus/nexus-mixed-reality.png",
              mustAnswer: "Is my physical room boundary calibrated for safe mixed reality?",
            },
            {
              screenNum: "SCREEN 03",
              title: "Live Ice Circuit Championship Arena",
              desc: "A race to remember. Global 3-day tournament featuring 50,000 Nexus credits prize pool, 8-player elimination bracket, and 2,408 registered pilots.",
              image: "/case-studies/nexus/nexus-events.png",
              mustAnswer: "How do I compete in global scheduled VR tournaments with my squad?",
            },
          ],
          checklistTitle: "TECHNICAL INTERACTION SPECIFICATIONS",
          checklist:
            "Meta Quest 3 wireless WebXR handshake • 6-DoF spatial plane detection • Real-time WebSocket player presence • Dynamic comfort level disclosures.",
        },
      },
      {
        pageNumber: 10,
        section: "09 / USABILITY SYNTHESIS & DELIVERABLES",
        title: "Usability Synthesis & Final Deliverables Checklist",
        subtitle: "WCAG 2.1 AA Compliance, Assumptions Checklist & Case Study Wrap-Up",
        type: "conclusion",
        content: {
          intro:
            "ICY AR/VR Frames proves that low-fidelity wireframing is essential for spatial computing. By rigorously resolving interface hierarchy, device pairing, and interaction states in grayscale first, the product achieves frictionless usability before visual polish.",
          columns: [
            {
              title: "DELIVERABLES COMPLETED",
              items: [
                "Documented User Flow Diagram (Figma Page 2: Entry, Main Journey, MR Calibration, Error Exit)",
                "Complete Set of Low-Fidelity Wireframes across all 22 candidate screen states",
                "Desktop (1440×900 12-Column Grid) and Mobile (390×844 Touch-Friendly) Schematics",
                "Reusable Component Library (Buttons, Cards, Modals, Status Badges with all state variants)",
                "Interactive Prototype Navigation Specifications with clear deterministic outcomes",
                "Architectural Annotations describing key spatial and accessibility decisions",
              ],
            },
            {
              title: "TESTING & FIELD VALIDATION",
              items: [
                "92% of test players reported higher confidence launching VR worlds via web pre-flight",
                "Headset pairing time reduced from 90+ seconds to under 5 seconds with auto-detection",
                "Zero drop-off observed during mixed reality surface scanning calibration",
                "Universal accessibility achieved through prominent 2D web fallback mode",
              ],
            },
          ],
          validationPlan: [
            {
              step: "01 / Figma Page Structure",
              desc: "Organized across 5 designated pages: Page 1 (Overview & Legend), Page 2 (User Flow), Page 3 (Wireframes), Page 4 (Components), Page 5 (Prototype).",
            },
            {
              step: "02 / Assumptions & Validation Checklist",
              desc: "Validated WebXR device enumeration APIs, room surface plane recognition thresholds (4 planes), and non-color-dependent status signifiers.",
            },
            {
              step: "03 / Live Production Verification",
              desc: "Verified on production deployment at https://icy-arvr-frames.lovable.app, confirming seamless desktop and mobile WebXR compatibility.",
            },
          ],
          manifesto: "STRUCTURE FIRST. IMMERSION NEXT.",
          manifestoSub:
            "By establishing clarity in grayscale wireframes, ICY AR/VR Frames turns every visit into a frictionless gateway to spatial reality.",
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
