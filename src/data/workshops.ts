export interface Workshop {
  id: string;
  title: string;
  instructor: string;
  dateRange: string;
  enrolled: number;
  capacity: number;
  category: string;
  description: string;
  price: number;
  isLive: boolean;
}

export const workshops: Workshop[] = [
  {
    id: "w-001",
    title: "Advanced Rhetoric and the Art of Strategic Persuasion",
    instructor: "Dr. Alistair Vance",
    dateRange: "OCT 14 — 18",
    enrolled: 42,
    capacity: 50,
    category: "Interactive Seminar",
    description: "A four-week intensive residency focusing on the architectural foundations of influential discourse.",
    price: 2850,
    isLive: true,
  },
  {
    id: "w-002",
    title: "Structural Aesthetics in Modern Urbanism",
    instructor: "Julian Thorne",
    dateRange: "OCT 22 — 24",
    enrolled: 42,
    capacity: 60,
    category: "Design Workshop",
    description: "Explore the intersection of architectural theory and contemporary urban planning methodologies.",
    price: 1950,
    isLive: false,
  },
  {
    id: "w-003",
    title: "Philosophical Ethics in Digital Governance",
    instructor: "Dr. Elena Marz",
    dateRange: "OCT 28 — 31",
    enrolled: 18,
    capacity: 40,
    category: "Policy Workshop",
    description: "Examine the ethical frameworks shaping digital policy and governance in the modern era.",
    price: 2200,
    isLive: false,
  },
  {
    id: "w-004",
    title: "The Architecture of Narrative Systems",
    instructor: "Marcus Vane",
    dateRange: "NOV 02 — 05",
    enrolled: 65,
    capacity: 80,
    category: "Creative Lab",
    description: "Deconstruct and reconstruct storytelling frameworks for strategic communication.",
    price: 1750,
    isLive: false,
  },
  {
    id: "w-005",
    title: "Data-Driven Decision Architecture",
    instructor: "Prof. Yuki Tanaka",
    dateRange: "NOV 10 — 14",
    enrolled: 30,
    capacity: 45,
    category: "Analytics Intensive",
    description: "Master the art of translating complex data landscapes into actionable strategic decisions.",
    price: 3100,
    isLive: false,
  },
  {
    id: "w-006",
    title: "The Poetics of Brand Identity",
    instructor: "Camille Dubois",
    dateRange: "NOV 18 — 20",
    enrolled: 55,
    capacity: 55,
    category: "Masterclass",
    description: "Craft resonant brand narratives through the lens of literary and visual poetics.",
    price: 2400,
    isLive: false,
  },
];
