const projects = [
  {
    slug: "a-home-realty",
    tone: "estate",
    title: "A Home Realty",
    category: "Real estate",
    live: "https://ahomerealty.vercel.app",
    logo: "https://ahomerealty.vercel.app/assets/brand/ahome-logo-gold-dark.svg",
    hero: "https://ahomerealty.vercel.app/assets/properties/estate-approach-05.png",
    media: ["https://ahomerealty.vercel.app/assets/properties/aerial-residence-d.png", "https://ahomerealty.vercel.app/assets/properties/grand-interior-04.png"],
    headline: "A property experience built around trust before contact.",
    summary: "A Home Realty needed a premium real estate interface with calm property hierarchy, clear inquiry paths, and visual confidence.",
    role: "Real estate UX / product direction / brand application / lead journey",
    tools: ["Figma", "Notion", "React", "Vite", "Vercel"],
    story: ["Logo and property presentation lead the experience.", "The page rhythm supports trust and buyer confidence.", "The contact path stays visible without cheapening the brand."],
  },
  {
    slug: "ypod",
    tone: "hardware",
    title: "YPOD",
    category: "Consumer electronics",
    live: "https://ypod.vercel.app",
    logo: "./assets/projects/ypod/yema-dark.png",
    hero: "./assets/projects/ypod/ypro-fit.png",
    media: ["./assets/projects/ypod/yema-dark.png", "./assets/projects/ypod/ypod-reasoning.png"],
    headline: "Sleep hardware presented with product proof.",
    summary: "YPOD is shaped as a real consumer electronics brand through product art direction, fit studies, launch framing, and clear product storytelling.",
    role: "Hardware storytelling / creative direction / product strategy / launch systems",
    tools: ["Figma", "Notion", "Photoshop", "React", "Vercel"],
    story: ["Product imagery is treated as evidence.", "Fit studies make the promise feel functional.", "The site moves from brand feeling to product clarity."],
  },
  {
    slug: "ypod-store",
    tone: "store",
    title: "YPOD Store",
    category: "Ecommerce",
    live: "https://ypod-store.vercel.app/shop",
    logo: "./assets/projects/ypod/yema-case.png",
    hero: "./assets/projects/ypod/yema-case.png",
    media: ["./assets/projects/ypod/yema-dark.png", "./assets/projects/ypod/ypro-fit.png"],
    headline: "A shop surface that keeps the product decision in front.",
    summary: "The ecommerce layer turns YPOD into a browsable product system with clear choice-making, product-card hierarchy, and mobile purchase intent.",
    role: "Ecommerce UX / product cards / shop structure / conversion flow",
    tools: ["Figma", "Notion", "Next.js", "React", "Vercel"],
    story: ["Product cutouts lead the commerce experience.", "The layout supports quick comparison.", "The shop extends the brand without hiding purchase action."],
    proofs: [{ label: "Shop walkthrough", url: "https://x.com/daveayodeji_/status/2069845385393086882/video/1?s=46" }],
  },
  {
    slug: "ypod-backend-management",
    tone: "backend",
    title: "YPOD Backend Management",
    category: "Backend operations",
    live: "https://ypod-backend-management.vercel.app/",
    logo: "./assets/projects/ypod/ypod-reasoning.png",
    hero: "./assets/projects/ypod/remote-customization.mp4",
    media: ["./assets/projects/ypod/ypod-reasoning.png", "./assets/projects/ypod/yema-dark.png"],
    headline: "The admin layer treated as part of the product system.",
    summary: "The backend surface makes product operations, store logic, dashboard hierarchy, and control flows usable instead of hidden.",
    role: "Admin UX / backend systems / dashboard structure / database thinking",
    tools: ["Figma", "Notion", "Next.js", "React", "Supabase", "Vercel"],
    story: ["Admin flows need hierarchy and fast comprehension.", "Backend logic becomes visible product control.", "The system supports ecommerce operations after launch."],
    proofs: [
      { label: "Backend management", url: "https://x.com/daveayodeji_/status/2069818800896106503/video/1?s=46" },
      { label: "Custom GLB workflow", url: "https://x.com/daveayodeji_/status/2069091597401071790/video/1?s=46" },
    ],
  },
  {
    slug: "dealradar-ng",
    tone: "market",
    title: "DealRadar NG",
    category: "Digital marketing / ecommerce",
    live: "https://www.dealradarng.com",
    logo: "./assets/projects/dealradar/main-logo-light.svg",
    hero: "./assets/projects/dealradar/banner-dark.png",
    media: ["./assets/projects/dealradar/banner-dark.png", "./assets/projects/dealradar/main-logo-light.svg"],
    headline: "Deal discovery framed for attention, merchants, and action.",
    summary: "DealRadar NG needs instant recognition, campaign structure, merchant visibility, and a clear route from discovery to ecommerce action.",
    role: "Marketplace UX / digital marketing / campaign structure / conversion design",
    tools: ["Figma", "Notion", "Next.js", "React", "Tailwind CSS", "Vercel"],
    story: ["The mark creates quick recognition.", "Campaign visuals support merchant visibility.", "The structure points visitors toward action."],
  },
  {
    slug: "naturepacks",
    tone: "impact",
    title: "NaturePacks",
    category: "Sustainability",
    live: "https://www.naturepacks.org",
    logo: "./assets/projects/naturepacks/naturepacks-main.svg",
    hero: "./assets/projects/naturepacks/merch-01.jpeg",
    media: ["./assets/projects/naturepacks/merch-02.jpeg", "./assets/projects/naturepacks/paper-01.jpeg", "./assets/projects/naturepacks/naturepacks-white-black.svg"],
    headline: "Sustainability made tangible through product and brand proof.",
    summary: "NaturePacks connects the material story, packaging identity, merch proof, product form, and environmental impact into one believable system.",
    role: "Sustainability storytelling / brand systems / product visuals / impact design",
    tools: ["Figma", "Notion", "Photoshop", "HTML", "CSS", "Vercel"],
    story: ["Merch proves the identity beyond a flat logo.", "Paper and product assets make the material story tangible.", "The design turns environmental promise into visible proof."],
    proofs: [{ label: "Logo design proof", url: "https://x.com/daveayodeji_/status/2065422409939738671/video/1?s=46" }],
  },
];

const services = [
  ["Product leadership", "Strategy, decisions, user priorities, and what the product must prove."],
  ["UI / UX design", "Screen hierarchy, interface states, user flows, responsive behavior, and conversion moments."],
  ["Brand systems", "Logo usage, tone, visual identity, proof assets, and project-specific storytelling."],
  ["Handoff", "Figma organization, Notion planning, build clarity, and developer-ready structure."],
];

function isVideo(src) {
  return src.endsWith(".mp4");
}

function media(src, alt, className = "") {
  const content = isVideo(src)
    ? `<video src="${src}" autoplay muted loop playsinline></video>`
    : `<img src="${src}" alt="${alt}" loading="lazy">`;
  return `<figure class="media ${className}">${content}</figure>`;
}

function mark(project) {
  return `<img src="${project.logo}" alt="${project.title}" loading="lazy">`;
}

function home() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <img class="hero-logo" src="./assets/brand/yescode-design-main.svg" alt="yesCode Design">
        <p class="kicker">Strategy / interface / identity / handoff</p>
        <h1>Design work people can build from.</h1>
        <p>Product direction, UI/UX, brand systems, Figma execution, Notion planning, and project proof for products that need to feel real before launch.</p>
        <div class="actions">
          <a class="primary" href="#/work">View design work</a>
          <a class="secondary" href="#/services">What I handle</a>
        </div>
      </div>
      <div class="design-proof">
        <video src="./assets/media/yescode-design-intro.mp4" autoplay muted loop playsinline></video>
      </div>
    </section>
    <section class="brand-index">
      ${projects.map((project) => `<a href="#/project/${project.slug}" class="${project.tone}">${mark(project)}<span>${project.category}</span></a>`).join("")}
    </section>
    ${work("Featured design work")}
    ${servicesView()}
    ${processView()}
  `;
}

function work(title = "Work") {
  return `
    <section class="work-shell">
      <div class="section-head">
        <p class="kicker">${title}</p>
        <h2>Each case uses its own brand material.</h2>
        <p>Real logos, deployed links, local project media, tool context, design role, and proof links are organized so the visitor understands the work.</p>
      </div>
      <div class="case-grid">
        ${projects.map((project) => `
          <article class="case-card ${project.tone}">
            <a class="case-mark" href="#/project/${project.slug}">${mark(project)}</a>
            <div>
              <p class="kicker">${project.category}</p>
              <h3>${project.title}</h3>
              <p>${project.summary}</p>
              <p class="role">${project.role}</p>
              <div class="actions">
                <a class="primary" href="#/project/${project.slug}">Open case</a>
                <a class="secondary" href="${project.live}" target="_blank" rel="noreferrer">Visit deployed site</a>
              </div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function servicesView() {
  return `
    <section class="services">
      <div class="section-head"><p class="kicker">Services</p><h2>Direction, design, identity, and handoff.</h2></div>
      <div class="service-list">${services.map(([name, body]) => `<article><h3>${name}</h3><p>${body}</p></article>`).join("")}</div>
    </section>
  `;
}

function processView() {
  return `
    <section class="process">
      <p class="kicker">Process</p>
      <div class="process-grid">
        <article><strong>01</strong><h3>Understand</h3><p>Audience, product, brand, proof assets, and what the experience must make clear.</p></article>
        <article><strong>02</strong><h3>Compose</h3><p>Interface structure, identity behavior, media hierarchy, copy, and live project pathway.</p></article>
        <article><strong>03</strong><h3>Hand off</h3><p>Figma, Notion, implementation notes, responsive expectations, and build-ready decisions.</p></article>
      </div>
    </section>
  `;
}

function contact() {
  return `
    <section class="contact">
      <img src="./assets/brand/yescode-design-main.svg" alt="yesCode Design">
      <div>
        <p class="kicker">Contact</p>
        <h2>Bring the product, the assets, and the proof.</h2>
        <a class="secondary" href="https://x.com/yescodedesign?s=21" target="_blank" rel="noreferrer">Open X</a>
      </div>
    </section>
  `;
}

function casePage(project) {
  return `
    <div class="case-page ${project.tone}">
      <section class="case-hero">
        <div class="case-copy">
          <a class="case-identity" href="${project.live}" target="_blank" rel="noreferrer">${mark(project)}</a>
          <p class="kicker">${project.category}</p>
          <h1>${project.headline}</h1>
          <p>${project.summary}</p>
          <p class="role">${project.role}</p>
          <div class="tool-line">${project.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
          <div class="actions">
            <a class="primary" href="${project.live}" target="_blank" rel="noreferrer">Visit deployed site</a>
            <a class="secondary" href="#/work">Back to work</a>
          </div>
        </div>
        ${media(project.hero, project.title, "hero-media")}
      </section>
      <section class="case-story">
        <article>
          <p class="kicker">Story</p>
          <h2>What the work needed to prove</h2>
          <ul>${project.story.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article>
          <p class="kicker">Live surface</p>
          <h2>${project.live.replace("https://", "")}</h2>
          <p>The deployed project is linked clearly so the work can be inspected directly.</p>
          ${project.proofs ? `<div class="proof-links">${project.proofs.map((proof) => `<a class="secondary" href="${proof.url}" target="_blank" rel="noreferrer">${proof.label}</a>`).join("")}</div>` : ""}
        </article>
      </section>
      <section class="proof-wall">
        ${project.media.map((src, index) => media(src, `${project.title} proof ${index + 1}`)).join("")}
      </section>
    </div>
  `;
}

function route() {
  const hash = location.hash || "#/";
  const app = document.querySelector("#app");
  document.body.classList.add("is-loading");
  if (hash.startsWith("#/project/")) {
    const project = projects.find((item) => item.slug === hash.replace("#/project/", ""));
    app.innerHTML = project ? casePage(project) : home();
  } else if (hash === "#/work") app.innerHTML = work("All design work");
  else if (hash === "#/services") app.innerHTML = servicesView();
  else if (hash === "#/process") app.innerHTML = processView();
  else if (hash === "#/contact") app.innerHTML = contact();
  else app.innerHTML = home();
  window.scrollTo({ top: 0, behavior: "smooth" });
  wireMedia();
  document.querySelector(".site-header").classList.remove("open");
  setTimeout(() => document.body.classList.remove("is-loading"), 340);
}

function wireMedia() {
  document.querySelectorAll(".media img, .media video, .design-proof video").forEach((item) => {
    const done = () => item.closest(".media, .design-proof")?.classList.add("ready");
    item.addEventListener("load", done);
    item.addEventListener("loadeddata", done);
    if (item.complete || item.readyState >= 2) done();
  });
}

document.querySelector(".menu-button").addEventListener("click", () => {
  const header = document.querySelector(".site-header");
  const open = header.classList.toggle("open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", String(open));
});
document.querySelector("[data-scroll='top']").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.querySelector("[data-scroll='bottom']").addEventListener("click", () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
window.addEventListener("hashchange", route);
route();
