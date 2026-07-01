import { useMemo, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { ProjectCard } from "./components/ProjectCard";
import { MediaFrame } from "./components/MediaFrame";
import { projects } from "./data/projects";
import { services } from "./data/services";
import designIntro from "./assets/media/yescode-design-intro.mp4";
import ecosystemVideo from "./assets/media/yescode-ecosystem.mp4";

type Page = "home" | "work" | "services" | "process" | "about" | "contact" | `project:${string}`;

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const selected = useMemo(
    () => (page.startsWith("project:") ? projects.find((item) => item.slug === page.slice(8)) : undefined),
    [page],
  );

  const navigate = (next: string) => {
    document.body.classList.add("is-transitioning");
    window.setTimeout(() => {
      setPage(next as Page);
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.setTimeout(() => document.body.classList.remove("is-transitioning"), 320);
    }, 120);
  };

  return (
    <>
      <Navbar page={page} navigate={navigate} />
      {selected ? (
        <ProjectDetail slug={selected.slug} navigate={navigate} />
      ) : page === "work" ? (
        <Work navigate={navigate} />
      ) : page === "services" ? (
        <Services />
      ) : page === "process" ? (
        <Process />
      ) : page === "about" ? (
        <About />
      ) : page === "contact" ? (
        <Contact />
      ) : (
        <Home navigate={navigate} />
      )}
      <ScrollTools />
      <Footer navigate={navigate} />
    </>
  );
}

function Home({ navigate }: { navigate: (page: string) => void }) {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Strategy-led. Design-driven. Build-ready.</span>
          <h1>Design products people actually want to use.</h1>
          <p>
            yesCode Design helps founders shape better products through product leadership, strategy, product design,
            UI/UX, websites, brand systems, creative direction, and development handoff.
          </p>
          <div className="actions">
            <button onClick={() => navigate("work")}>view design work</button>
            <button className="secondary" onClick={() => navigate("contact")}>
              start a design project
            </button>
          </div>
        </div>
        <div className="hero-media">
          <MediaFrame src={designIntro} video />
        </div>
      </section>

      <ProjectIndex navigate={navigate} />

      <section className="strip">
        {["product leadership", "product strategy", "product design", "UI / UX", "brand systems", "creative direction", "handoff"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="section">
        <div className="section-head">
          <span className="eyebrow">featured design work</span>
          <h2>Products are led before they are built.</h2>
        </div>
        <div className="projects-grid">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.slug} project={project} onOpen={(slug) => navigate(`project:${slug}`)} />
          ))}
        </div>
      </section>

      <Leadership />
      <Services compact />
      <Process />
      <SisterBrand />
    </main>
  );
}

function Work({ navigate }: { navigate: (page: string) => void }) {
  return (
    <main className="page">
      <PageHeader eyebrow="work" title="Six design systems, treated as proof." text="The work is organized around product direction, visual systems, interface decisions, and build-ready handoff." />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} onOpen={(slug) => navigate(`project:${slug}`)} />
        ))}
      </div>
    </main>
  );
}

function ProjectDetail({ slug, navigate }: { slug: string; navigate: (page: string) => void }) {
  const project = projects.find((item) => item.slug === slug)!;

  return (
    <main className="page">
      <section className="case-hero">
        <div>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
        <MediaFrame src={project.image} />
      </section>
      <section className="case-grid">
        <div>
          <h2>Role</h2>
          <p>{project.role}</p>
        </div>
        <div>
          <h2>Outcome</h2>
          <p>{project.outcome}</p>
        </div>
        <div>
          <h2>Tools</h2>
          <div className="tool-grid">{project.tools.map((item) => <ToolBadge key={item} name={item} />)}</div>
        </div>
        <div>
          <h2>Skills Applied</h2>
          <ul>{project.skills.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>
      <section className="proof-gallery">
        {project.gallery.map((image) => (
          <MediaFrame key={image} src={image} />
        ))}
      </section>
      {project.proofLinks?.length ? (
        <section className="proof-links">
          {project.proofLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </section>
      ) : null}
      <section className="case-grid">
        <div>
          <h2>Design Scope</h2>
          <ul>{project.sections.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
        <div>
          <h2>Live Surface</h2>
          <p>{project.liveUrl.replace("https://", "")}</p>
        </div>
      </section>
      <div className="case-actions">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">open live project</a>
        <button onClick={() => navigate("work")} className="secondary">back to work</button>
      </div>
    </main>
  );
}

function ToolBadge({ name }: { name: string }) {
  const slug: Record<string, string> = {
    Figma: "figma",
    Notion: "notion",
    Photoshop: "adobephotoshop",
    React: "react",
    "Vite": "vite",
    TypeScript: "typescript",
    CSS: "css3",
    Vercel: "vercel",
    GitHub: "github",
    "Next.js": "nextdotjs",
    "Tailwind CSS": "tailwindcss",
    HTML: "html5",
  };
  const icon = slug[name];
  return (
    <span className="tool-badge">
      {icon ? <img src={`https://cdn.simpleicons.org/${icon}/ffffff`} alt="" /> : null}
      {name}
    </span>
  );
}

function ScrollTools() {
  return (
    <div className="scroll-tools">
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Scroll to top">↑</button>
      <button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })} aria-label="Scroll to bottom">↓</button>
    </div>
  );
}

function ProjectIndex({ navigate }: { navigate: (page: string) => void }) {
  return (
    <section className="project-index" aria-label="Live projects">
      {projects.map((project) => (
        <article key={project.slug}>
          <button onClick={() => navigate(`project:${project.slug}`)} aria-label={`${project.title} case`}>
            <img src={project.logo} alt={project.title} />
          </button>
          <a href={project.liveUrl} target="_blank" rel="noreferrer">live</a>
        </article>
      ))}
    </section>
  );
}

function Leadership() {
  return (
    <section className="leadership">
      <MediaFrame src={ecosystemVideo} video />
      <div>
        <span className="eyebrow">product leadership</span>
        <h2>We do not just design interfaces. We help lead the product.</h2>
        <p>
          Good products fail when decisions are not managed. We connect business goals, user needs, design systems,
          technical constraints, implementation planning, QA, launch, and iteration.
        </p>
      </div>
    </section>
  );
}

function Services({ compact = false }: { compact?: boolean }) {
  return (
    <main className={compact ? "section" : "page"}>
      <PageHeader eyebrow="services" title="From product leadership to handoff." text="yesCode Design covers the decisions before development and the design system developers need to build with confidence." />
      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

function Process() {
  const steps = ["understand the business", "understand users", "define product", "prioritise features", "design system", "support build", "launch", "improve"];
  return (
    <main className="section">
      <PageHeader eyebrow="process" title="Every project needs managed decisions." text="Vision, research, product leadership, strategy, design, engineering, testing, launch, iteration, growth." />
      <div className="process-line">{steps.map((step, index) => <span key={step}>{String(index + 1).padStart(2, "0")} {step}</span>)}</div>
    </main>
  );
}

function About() {
  return (
    <main className="page narrow">
      <PageHeader eyebrow="about" title="Product leadership and design within the yesCode ecosystem." text="We help founders shape products before development begins." />
      <p>
        yesCode Design combines product leadership, UX thinking, interface design, brand systems, websites, and
        creative direction into experiences that are ready to build.
      </p>
      <p>
        Good products do not begin with pixels. They begin with understanding people, defining problems, prioritising
        decisions, and designing systems developers can confidently implement.
      </p>
      <p>Design is not the final layer. It is part of the product itself.</p>
    </main>
  );
}

function Contact() {
  return (
    <main className="page contact" id="contact">
      <PageHeader eyebrow="contact" title="Start with the direction." text="Tell us what you need designed, refined, branded, or prepared for build." />
      <div className="contact-actions">
        <a className="mail-link" href="https://wa.me/2348104190898" target="_blank" rel="noreferrer">WhatsApp 08104190898</a>
        <a className="mail-link secondary-link" href="https://x.com/yescodedesign?s=21" target="_blank" rel="noreferrer">X / Twitter</a>
      </div>
      <div className="contact-grid">
        {["Name", "Email", "Brand / Project", "What do you need designed?", "Existing assets?", "Timeline", "Budget range", "Links"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </main>
  );
}

function SisterBrand() {
  return (
    <section className="sister">
      <span className="eyebrow">ecosystem</span>
      <h2>Need the build layer? Visit yesCode.</h2>
      <p>yesCode Design shapes the product. yesCode executes the software engineering, ecommerce, and backend layer.</p>
      <a href="https://yes-code.vercel.app/" target="_blank" rel="noreferrer">open yesCode</a>
    </section>
  );
}

function PageHeader({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}
