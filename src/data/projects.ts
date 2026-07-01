import naturepacksShirtProof from "../assets/media/naturepacks-shirt-proof.jpg";

const ahome = "https://ahomerealty.vercel.app/assets";
const ypod = "https://ypod.vercel.app/assets";
const ypodStore = "https://ypod-store.vercel.app/assets";
const dealradar = "https://www.dealradarng.com";
const naturepacks = "https://www.naturepacks.org/assets";

export type Project = {
  slug: string;
  title: string;
  category: string;
  liveUrl: string;
  summary: string;
  role: string;
  image: string;
  gallery: string[];
  outcome: string;
  skills: string[];
  tools: string[];
  sections: string[];
};

export const projects: Project[] = [
  {
    slug: "a-home-realty",
    title: "A Home Realty",
    category: "Real estate",
    liveUrl: "https://ahomerealty.vercel.app",
    summary:
      "Product and web direction for a real estate brand that needs trust, luxury pacing, inquiry clarity, and strong property presentation.",
    role: "Product leadership, website design direction, brand system application, lead journey planning.",
    image: `${ahome}/properties/estate-approach-05.png`,
    gallery: [
      `${ahome}/video/ahome-brand-film.mp4`,
      `${ahome}/properties/aerial-residence-d.png`,
      `${ahome}/properties/grand-interior-04.png`,
    ],
    outcome: "A premium real estate experience shaped around buyer confidence and conversion.",
    skills: ["Product leadership", "Real estate UX", "Brand direction", "Lead journey", "Responsive design"],
    tools: ["Figma", "Notion", "React", "Vite", "Vercel", "GitHub"],
    sections: ["Property hierarchy", "Luxury tone", "Inquiry path", "Brand consistency"],
  },
  {
    slug: "ypod",
    title: "YPOD",
    category: "Consumer electronics - hardware brand",
    liveUrl: "https://ypod.vercel.app",
    summary:
      "Hardware brand direction for sleep-focused audio: product storytelling, research visuals, fit studies, and launch presentation.",
    role: "Product strategy, creative direction, product design, hardware storytelling, campaign-ready visual system.",
    image: `${ypod}/yema-case-dark.png`,
    gallery: [
      `${ypod}/videos/yema-1-floating-gradient.mp4`,
      `${ypod}/videos/yema-pro-floating-dark.mp4`,
      `${ypod}/fit-study-final.png`,
    ],
    outcome: "A sharper consumer electronics identity with product proof and launch structure.",
    skills: ["Product strategy", "Hardware storytelling", "Creative direction", "Visual research", "Launch systems"],
    tools: ["Figma", "Notion", "Photoshop", "React", "Vercel", "GitHub"],
    sections: ["Hero art direction", "Research boards", "Fit study", "Consumer product narrative"],
  },
  {
    slug: "ypod-store",
    title: "YPOD Store",
    category: "Ecommerce",
    liveUrl: "https://ypod-store.vercel.app/shop",
    summary:
      "Ecommerce design for product browsing, shop hierarchy, purchase confidence, and the handoff from brand story to cart.",
    role: "Product leadership, ecommerce UX, product card system, mobile commerce design.",
    image: `${ypodStore}/nobg/yema-lite-in-case-nobg.png`,
    gallery: [
      `${ypodStore}/nobg/yema-lite-in-case-nobg.png`,
      `${ypodStore}/remote/ypod-remote-showcase.png`,
      `${ypodStore}/nobg/kuromi-wrapped-controller-nobg.png`,
    ],
    outcome: "A store experience that extends the YPOD brand into a practical buying journey.",
    skills: ["Ecommerce UX", "Product cards", "Shop architecture", "Mobile-first design", "Handoff"],
    tools: ["Figma", "Notion", "Next.js", "React", "Vercel", "GitHub"],
    sections: ["Shop grid", "Product decision flow", "Mobile commerce", "Store hierarchy"],
  },
  {
    slug: "ypod-backend-management",
    title: "YPOD Backend Management",
    category: "Backend operations",
    liveUrl: "https://ypod-backend-management.vercel.app/",
    summary:
      "Product operations and admin UX for the YPOD backend: the management surface that keeps the store, products, and operational decisions coherent.",
    role: "Product leadership, admin UX, dashboard structure, operations flow, and backend-facing handoff.",
    image: `${ypodStore}/remote/ypod-remote-showcase.png`,
    gallery: [
      `${ypod}/remote/ypod-remote-floating.mp4`,
      `${ypodStore}/nobg/black-controller-nobg.png`,
      `${ypodStore}/nobg/yema-pro-right-ear-nobg.png`,
    ],
    outcome: "Turned the backend layer into a usable management experience instead of a hidden technical surface.",
    skills: ["Admin UX", "Product operations", "Dashboard design", "Ecommerce systems", "Handoff"],
    tools: ["Figma", "Notion", "Next.js", "React", "Vercel", "GitHub"],
    sections: ["Admin information hierarchy", "Product operations", "Management flow", "Backend-facing UX"],
  },
  {
    slug: "dealradar-ng",
    title: "DealRadar NG",
    category: "Digital marketing - ecommerce",
    liveUrl: "https://www.dealradarng.com",
    summary:
      "Marketplace and digital marketing design for local deal discovery, business promotion, campaign assets, and conversion.",
    role: "Product strategy, marketplace UX, brand asset application, campaign and commerce structure.",
    image: `${dealradar}/brand/main-logo-white.svg`,
    gallery: [
      `${dealradar}/products/amap.jpg`,
      `${dealradar}/products/monetize-knowledge.jpg`,
      `${dealradar}/products/virtual-assistant.jpg`,
    ],
    outcome: "A stronger visual and UX system for deal discovery and local business visibility.",
    skills: ["Marketplace UX", "Digital marketing", "Brand systems", "Campaign structure", "Conversion design"],
    tools: ["Figma", "Notion", "Next.js", "React", "Tailwind CSS", "Vercel"],
    sections: ["Deal hierarchy", "Brand banner system", "Merchant visibility", "Action flow"],
  },
  {
    slug: "naturepacks",
    title: "NaturePacks",
    category: "Sustainability - environmental impact",
    liveUrl: "https://www.naturepacks.org",
    summary:
      "Sustainable packaging design direction for banana fibre paper, environmental impact, product proof, and manufacturing story.",
    role: "Creative direction, web design, sustainability narrative, brand system and product proof presentation.",
    image: `${naturepacks}/brandinganddesign.png`,
    gallery: [
      `${naturepacks}/newnaturepacks/process/sheet-forming-new.mp4`,
      naturepacksShirtProof,
      `${naturepacks}/brandinganddesign.png`,
      `${naturepacks}/product-bag-front.png`,
    ],
    outcome: "Turned environmental impact and manufacturing ambition into a credible market-facing story.",
    skills: ["Sustainability storytelling", "Creative direction", "Brand systems", "Product visuals", "Impact design"],
    tools: ["Figma", "Notion", "Photoshop", "HTML", "CSS", "Vercel"],
    sections: ["Sustainability story", "Product visuals", "Process narrative", "Impact proof"],
  },
];
