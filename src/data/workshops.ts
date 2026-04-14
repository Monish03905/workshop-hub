export interface ScheduleItem {
  time: string;
  title: string;
  type: "lecture" | "workshop" | "break" | "discussion";
}

export interface Workshop {
  id: string;
  title: string;
  instructor: string;
  instructorBio: string;
  dateRange: string;
  enrolled: number;
  capacity: number;
  category: string;
  description: string;
  longDescription: string;
  price: number;
  isLive: boolean;
  schedule: ScheduleItem[];
  learningOutcomes: string[];
  prerequisites: string[];
}

export const workshops: Workshop[] = [
  {
    id: "w-001",
    title: "Advanced Rhetoric and the Art of Strategic Persuasion",
    instructor: "Dr. Alistair Vance",
    instructorBio: "Professor of Strategic Communication at the Zurich Institute of Applied Linguistics. Author of 'The Geometry of Argument' and former advisor to the European Commission on Public Discourse.",
    dateRange: "OCT 14 — 18",
    enrolled: 42,
    capacity: 50,
    category: "Interactive Seminar",
    description: "A four-week intensive residency focusing on the architectural foundations of influential discourse.",
    longDescription: "This intensive seminar deconstructs the mechanics of persuasive communication through the lens of classical rhetoric and modern cognitive science. Participants will engage with frameworks drawn from Aristotelian logic, behavioural economics, and narrative psychology to construct arguments that resonate at both intellectual and emotional registers. The programme combines theoretical lectures with live practice sessions, peer critique, and one-on-one mentorship.",
    price: 2850,
    isLive: true,
    schedule: [
      { time: "09:00 — 09:30", title: "Opening Ceremony & Orientation", type: "lecture" },
      { time: "09:30 — 11:00", title: "Foundations of Rhetorical Architecture", type: "lecture" },
      { time: "11:00 — 11:30", title: "Intermission", type: "break" },
      { time: "11:30 — 13:00", title: "Practical Workshop: Argument Construction", type: "workshop" },
      { time: "13:00 — 14:00", title: "Luncheon", type: "break" },
      { time: "14:00 — 15:30", title: "Cognitive Frameworks for Persuasion", type: "lecture" },
      { time: "15:30 — 17:00", title: "Group Discussion & Peer Critique", type: "discussion" },
    ],
    learningOutcomes: [
      "Construct multi-layered arguments using classical and modern frameworks",
      "Identify and deploy persuasion techniques appropriate to different audiences",
      "Develop a personal rhetorical style grounded in ethical communication",
      "Analyse and deconstruct complex public discourse with precision",
    ],
    prerequisites: [
      "Prior experience in public speaking or strategic communication",
      "Familiarity with basic logical reasoning concepts",
    ],
  },
  {
    id: "w-002",
    title: "Structural Aesthetics in Modern Urbanism",
    instructor: "Julian Thorne",
    instructorBio: "Award-winning architect and urban theorist. Principal at Thorne & Associates, his work spans three continents with a focus on human-centred metropolitan design.",
    dateRange: "OCT 22 — 24",
    enrolled: 42,
    capacity: 60,
    category: "Design Workshop",
    description: "Explore the intersection of architectural theory and contemporary urban planning methodologies.",
    longDescription: "A rigorous exploration of how structural aesthetics inform the lived experience of urban environments. This workshop bridges theoretical discourse with practical design exercises, examining case studies from Tokyo, Copenhagen, and São Paulo. Participants will develop spatial proposals that balance beauty, function, and social responsibility.",
    price: 1950,
    isLive: false,
    schedule: [
      { time: "09:00 — 10:30", title: "Urban Form and Cultural Context", type: "lecture" },
      { time: "10:30 — 11:00", title: "Intermission", type: "break" },
      { time: "11:00 — 13:00", title: "Studio: Spatial Proposition Development", type: "workshop" },
      { time: "13:00 — 14:00", title: "Luncheon", type: "break" },
      { time: "14:00 — 16:00", title: "Case Study Analysis & Critique", type: "discussion" },
    ],
    learningOutcomes: [
      "Evaluate urban spaces through structural and aesthetic frameworks",
      "Develop spatial proposals integrating form and social function",
      "Apply case study methodologies to contemporary urban challenges",
    ],
    prerequisites: [
      "Background in architecture, design, or urban planning",
    ],
  },
  {
    id: "w-003",
    title: "Philosophical Ethics in Digital Governance",
    instructor: "Dr. Elena Marz",
    instructorBio: "Senior Fellow at the Berlin Centre for Digital Ethics. Her research bridges continental philosophy and technology policy, with publications in Nature and The Atlantic.",
    dateRange: "OCT 28 — 31",
    enrolled: 18,
    capacity: 40,
    category: "Policy Workshop",
    description: "Examine the ethical frameworks shaping digital policy and governance in the modern era.",
    longDescription: "This policy workshop interrogates the philosophical foundations upon which digital governance frameworks are constructed. From data sovereignty to algorithmic accountability, participants will engage with primary texts from political philosophy and apply them to contemporary technological challenges. Includes simulated policy drafting sessions and stakeholder negotiation exercises.",
    price: 2200,
    isLive: false,
    schedule: [
      { time: "09:00 — 10:30", title: "Philosophical Foundations of Governance", type: "lecture" },
      { time: "10:30 — 11:00", title: "Intermission", type: "break" },
      { time: "11:00 — 12:30", title: "Algorithmic Accountability Frameworks", type: "lecture" },
      { time: "12:30 — 13:30", title: "Luncheon", type: "break" },
      { time: "13:30 — 15:00", title: "Policy Drafting Simulation", type: "workshop" },
      { time: "15:00 — 16:30", title: "Stakeholder Negotiation Exercise", type: "discussion" },
    ],
    learningOutcomes: [
      "Apply philosophical ethics to digital policy challenges",
      "Draft governance frameworks for emerging technologies",
      "Navigate multi-stakeholder policy negotiations",
    ],
    prerequisites: [
      "Interest in technology policy or philosophy",
    ],
  },
  {
    id: "w-004",
    title: "The Architecture of Narrative Systems",
    instructor: "Marcus Vane",
    instructorBio: "Narrative strategist and former creative director at Penguin Random House. Marcus has shaped the storytelling frameworks for Fortune 500 brands and international NGOs.",
    dateRange: "NOV 02 — 05",
    enrolled: 65,
    capacity: 80,
    category: "Creative Lab",
    description: "Deconstruct and reconstruct storytelling frameworks for strategic communication.",
    longDescription: "A creative laboratory for those who shape narratives at scale. This intensive deconstructs the systemic architecture behind compelling stories — from brand mythology to institutional communication. Participants will build narrative systems from first principles and test them through collaborative exercises and live audience feedback.",
    price: 1750,
    isLive: false,
    schedule: [
      { time: "09:00 — 10:30", title: "Narrative Systems Theory", type: "lecture" },
      { time: "10:30 — 11:00", title: "Intermission", type: "break" },
      { time: "11:00 — 13:00", title: "Lab: Building Narrative Architectures", type: "workshop" },
      { time: "13:00 — 14:00", title: "Luncheon", type: "break" },
      { time: "14:00 — 16:00", title: "Live Audience Testing & Feedback", type: "discussion" },
    ],
    learningOutcomes: [
      "Design narrative systems for institutional communication",
      "Build and test brand mythologies from first principles",
      "Integrate audience feedback into iterative storytelling",
    ],
    prerequisites: [
      "Experience in communications, branding, or creative writing",
    ],
  },
  {
    id: "w-005",
    title: "Data-Driven Decision Architecture",
    instructor: "Prof. Yuki Tanaka",
    instructorBio: "Chair of Decision Sciences at Keio University. Pioneered the field of interpretive analytics and consults for the Bank of Japan and McKinsey & Company.",
    dateRange: "NOV 10 — 14",
    enrolled: 30,
    capacity: 45,
    category: "Analytics Intensive",
    description: "Master the art of translating complex data landscapes into actionable strategic decisions.",
    longDescription: "This analytics intensive bridges the gap between raw data and strategic clarity. Participants will learn to construct decision architectures that transform complex datasets into coherent action frameworks. The programme combines statistical methodology with interpretive analysis, drawing from both quantitative rigour and qualitative intuition.",
    price: 3100,
    isLive: false,
    schedule: [
      { time: "09:00 — 10:30", title: "Foundations of Decision Architecture", type: "lecture" },
      { time: "10:30 — 11:00", title: "Intermission", type: "break" },
      { time: "11:00 — 13:00", title: "Workshop: Dataset Interpretation Lab", type: "workshop" },
      { time: "13:00 — 14:00", title: "Luncheon", type: "break" },
      { time: "14:00 — 15:30", title: "Strategic Framework Construction", type: "lecture" },
      { time: "15:30 — 17:00", title: "Case Study Review & Discussion", type: "discussion" },
    ],
    learningOutcomes: [
      "Build decision architectures from complex datasets",
      "Apply interpretive analytics to strategic planning",
      "Translate quantitative findings into executive-level recommendations",
    ],
    prerequisites: [
      "Basic understanding of statistics or data analysis",
      "Professional experience in strategy or consulting",
    ],
  },
  {
    id: "w-006",
    title: "The Poetics of Brand Identity",
    instructor: "Camille Dubois",
    instructorBio: "Creative director and brand philosopher. Camille has defined the visual and verbal identities for Hermès, Aesop, and the Serpentine Galleries.",
    dateRange: "NOV 18 — 20",
    enrolled: 55,
    capacity: 55,
    category: "Masterclass",
    description: "Craft resonant brand narratives through the lens of literary and visual poetics.",
    longDescription: "An intimate masterclass for creative leaders seeking to elevate brand identity beyond the functional. Drawing from literary theory, visual poetics, and cultural semiotics, participants will learn to craft brand languages that resonate with intellectual and emotional depth. Limited to 55 participants to ensure meaningful creative exchange.",
    price: 2400,
    isLive: false,
    schedule: [
      { time: "09:00 — 10:30", title: "Poetics and the Brand Imagination", type: "lecture" },
      { time: "10:30 — 11:00", title: "Intermission", type: "break" },
      { time: "11:00 — 13:00", title: "Studio: Crafting Brand Language", type: "workshop" },
      { time: "13:00 — 14:00", title: "Luncheon", type: "break" },
      { time: "14:00 — 16:00", title: "Portfolio Review & Creative Dialogue", type: "discussion" },
    ],
    learningOutcomes: [
      "Develop brand identities grounded in literary and visual poetics",
      "Apply semiotic analysis to brand strategy",
      "Create compelling brand narratives for discerning audiences",
    ],
    prerequisites: [
      "Professional experience in branding, design, or creative direction",
    ],
  },
];
