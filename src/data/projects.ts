import ahomeLogo from "../assets/proof/ahome-logo.svg";
import ypodHero from "../assets/proof/ypod-hero.png";
import ypodResearch from "../assets/proof/ypod-research.png";
import ypodFitStudy from "../assets/proof/ypod-fit-study.png";
import dealradarBanner from "../assets/proof/dealradar-banner.png";
import dealradarProfile from "../assets/proof/dealradar-profile.png";
import naturepacksBranding from "../assets/proof/naturepacks-branding.png";
import naturepacksProducts from "../assets/proof/naturepacks-products.png";
import naturepacksBag from "../assets/proof/naturepacks-bag.png";

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
    image: ahomeLogo,
    gallery: [ahomeLogo],
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
    image: ypodHero,
    gallery: [ypodHero, ypodResearch, ypodFitStudy],
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
    image: ypodResearch,
    gallery: [ypodResearch, ypodHero, ypodFitStudy],
    outcome: "A store experience that extends the YPOD brand into a practical buying journey.",
    skills: ["Ecommerce UX", "Product cards", "Shop architecture", "Mobile-first design", "Handoff"],
    tools: ["Figma", "Notion", "Next.js", "React", "Vercel", "GitHub"],
    sections: ["Shop grid", "Product decision flow", "Mobile commerce", "Store hierarchy"],
  },
  {
    slug: "dealradar-ng",
    title: "DealRadar NG",
    category: "Digital marketing - ecommerce",
    liveUrl: "https://dealradarng.com",
    summary:
      "Marketplace and digital marketing design for local deal discovery, business promotion, campaign assets, and conversion.",
    role: "Product strategy, marketplace UX, brand asset application, campaign and commerce structure.",
    image: dealradarBanner,
    gallery: [dealradarBanner, dealradarProfile],
    outcome: "A stronger visual and UX system for deal discovery and local business visibility.",
    skills: ["Marketplace UX", "Digital marketing", "Brand systems", "Campaign structure", "Conversion design"],
    tools: ["Figma", "Notion", "Next.js", "React", "Tailwind CSS", "Vercel"],
    sections: ["Deal hierarchy", "Brand banner system", "Merchant visibility", "Action flow"],
  },
  {
    slug: "naturepacks",
    title: "NaturePacks",
    category: "Sustainability - environmental impact",
    liveUrl: "https://naturepacks.org",
    summary:
      "Sustainable packaging design direction for banana fibre paper, environmental impact, product proof, and manufacturing story.",
    role: "Creative direction, web design, sustainability narrative, brand system and product proof presentation.",
    image: naturepacksBranding,
    gallery: [naturepacksBranding, naturepacksProducts, naturepacksBag],
    outcome: "Turned environmental impact and manufacturing ambition into a credible market-facing story.",
    skills: ["Sustainability storytelling", "Creative direction", "Brand systems", "Product visuals", "Impact design"],
    tools: ["Figma", "Notion", "Photoshop", "HTML", "CSS", "Vercel"],
    sections: ["Sustainability story", "Product visuals", "Process narrative", "Impact proof"],
  },
];
