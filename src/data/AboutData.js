const CEO_IMAGE = new URL("../../public/images/ceo-Imadvertising.jpg", import.meta.url).href;

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1400&q=80&auto=format&fit=crop";

const STORY_POINTS = [
  "LM Advertising is a Prayagraj-based outdoor advertising and branding studio built for local businesses that need clear visibility and dependable execution.",
  "We work across hoardings, glow signs, flex printing, brochures, logo design, brand identity, and campaign support, keeping strategy, design, production, and installation connected.",
  "Our work is practical: understand the market, choose the right placement, prepare readable artwork, print it well, and stay available until the campaign is live.",
];

const SERVICES = [
  "Hoardings and outdoor media planning",
  "Glow signs, flex boards, and wall branding",
  "Large format printing and finishing",
  "Logo, brochure, and brand identity design",
];

const PROCESS_STEPS = [
  {
    title: "Brief",
    description: "We first understand your business, offer, target area, budget, and campaign duration.",
  },
  {
    title: "Plan",
    description: "We suggest media options, design direction, sizes, materials, and a realistic execution timeline.",
  },
  {
    title: "Execute",
    description: "Our team coordinates artwork, printing, placement, installation, and final checks.",
  },
];

const CEO_PROFILE = {
  name: "Mr. Abhishek Arya",
  role: "Founder & CEO, LM Advertising",
  image: CEO_IMAGE,
  message:
    "Advertising works best when it is honest, visible, and useful for the business. At LM Advertising, our focus is to give clients practical ideas, clean execution, and support they can rely on from the first discussion to the final installation.",
};

export { CEO_PROFILE, HERO_IMAGE, PROCESS_STEPS, SERVICES, STORY_POINTS };
