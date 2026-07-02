const projects = [
  {
    slug: "a-home-realty",
    tone: "estate",
    title: "A Home Realty",
    category: "Real estate",
    live: "https://ahomerealty.vercel.app",
    logo: "https://ahomerealty.vercel.app/assets/brand/ahome-logo-gold-dark.svg",
    hero: "https://ahomerealty.vercel.app/assets/video/ahome-brand-film.mp4",
    media: [
      "https://ahomerealty.vercel.app/assets/properties/estate-approach-05.png",
      "https://ahomerealty.vercel.app/assets/properties/aerial-residence-d.png",
      "https://ahomerealty.vercel.app/assets/properties/grand-interior-04.png",
    ],
    headline: "A premium real estate story with trust, pacing, and inquiry clarity.",
    summary: "The design work supports a luxury property brand where the user needs to feel confidence before they contact anyone.",
    story: ["Logo and property presentation lead the experience.", "Visual hierarchy supports trust, price confidence, and discovery.", "The inquiry path is made obvious without making the brand feel cheap."],
    tools: ["Figma", "Notion", "React", "Vite", "Vercel"],
    skills: ["Real estate UX", "Product direction", "Brand application", "Lead journey", "Responsive design"],
  },
  {
    slug: "ypod",
    tone: "hardware",
    title: "YPOD",
    category: "Consumer electronics - hardware brand",
    live: "https://ypod.vercel.app",
    logo: "https://ypod.vercel.app/assets/yema-case-dark.png",
    hero: "https://ypod.vercel.app/assets/videos/yema-pro-floating-dark.mp4",
    media: ["https://ypod.vercel.app/assets/videos/yema-1-floating-gradient.mp4", "https://ypod.vercel.app/assets/fit-study-final.png", "https://ypod.vercel.app/assets/yema-case-dark.png"],
    headline: "Sleep-focused hardware presented like a product people can believe in.",
    summary: "The work frames YPOD as a real consumer electronics brand through product art direction, fit proof, research, and launch-ready storytelling.",
    story: ["Hardware visuals are treated as the first proof point.", "Fit study and product research support the brand promise.", "The experience moves from emotion to product clarity."],
    tools: ["Figma", "Notion", "Photoshop", "React", "Vercel"],
    skills: ["Hardware storytelling", "Creative direction", "Product strategy", "Launch systems", "Research visuals"],
  },
  {
    slug: "ypod-store",
    tone: "store",
    title: "YPOD Store",
    category: "Ecommerce",
    live: "https://ypod-store.vercel.app/shop",
    logo: "https://ypod-store.vercel.app/assets/nobg/yema-lite-in-case-nobg.png",
    hero: "https://ypod-store.vercel.app/assets/nobg/yema-lite-in-case-nobg.png",
    media: ["https://ypod-store.vercel.app/assets/remote/ypod-remote-showcase.png", "https://ypod-store.vercel.app/assets/nobg/kuromi-wrapped-controller-nobg.png", "https://ypod-store.vercel.app/assets/nobg/black-controller-nobg.png"],
    headline: "An ecommerce layer built around product choice and buyer confidence.",
    summary: "The store translates the YPOD product world into browsing, comparison, product-card clarity, and mobile purchase intent.",
    story: ["Product cutouts and product names lead the commerce surface.", "The browsing path is designed for quick choice-making.", "The shop extends the brand without burying the purchase action."],
    tools: ["Figma", "Notion", "Next.js", "React", "Vercel"],
    skills: ["Ecommerce UX", "Product cards", "Shop architecture", "Mobile commerce", "Conversion flow"],
    proofs: [{ label: "Shop walkthrough video", url: "https://x.com/daveayodeji_/status/2069845385393086882/video/1?s=46" }],
  },
  {
    slug: "ypod-backend-management",
    tone: "backend",
    title: "YPOD Backend Management",
    category: "Backend operations",
    live: "https://ypod-backend-management.vercel.app/",
    logo: "https://ypod-store.vercel.app/assets/remote/ypod-remote-showcase.png",
    hero: "https://ypod.vercel.app/assets/remote/ypod-remote-floating.mp4",
    media: ["https://ypod-store.vercel.app/assets/nobg/yema-pro-right-ear-nobg.png", "https://ypod-store.vercel.app/assets/nobg/black-controller-nobg.png", "https://ypod-store.vercel.app/assets/remote/ypod-remote-showcase.png"],
    headline: "The operational layer behind the product, designed to be controlled.",
    summary: "The backend management surface is treated as part of the product system: dashboard structure, product operations, backend handoff, and admin clarity.",
    story: ["Admin workflows need hierarchy, not decoration.", "Backend decisions are surfaced as usable product controls.", "The system supports ecommerce operations and product management."],
    tools: ["Figma", "Notion", "Next.js", "React", "Supabase", "Vercel"],
    skills: ["Admin UX", "Backend systems", "Dashboard design", "Product operations", "Database thinking"],
    proofs: [
      { label: "Backend management video", url: "https://x.com/daveayodeji_/status/2069818800896106503/video/1?s=46" },
      { label: "Custom GLB workflow video", url: "https://x.com/daveayodeji_/status/2069091597401071790/video/1?s=46" },
    ],
  },
  {
    slug: "dealradar-ng",
    tone: "market",
    title: "DealRadar NG",
    category: "Digital marketing - ecommerce",
    live: "https://www.dealradarng.com",
    logo: "https://www.dealradarng.com/brand/main-logo-white.svg",
    hero: "https://www.dealradarng.com/products/amap.jpg",
    media: ["https://www.dealradarng.com/products/monetize-knowledge.jpg", "https://www.dealradarng.com/products/virtual-assistant.jpg", "https://www.dealradarng.com/brand/main-logo-white.svg"],
    headline: "A deal discovery system for attention, campaigns, and local commerce.",
    summary: "The work supports a digital marketing and ecommerce platform where offers, businesses, and discovery have to feel immediate.",
    story: ["The logo and high-contrast deal language create instant recognition.", "Campaign visuals support merchant visibility.", "The structure points users toward action instead of passive browsing."],
    tools: ["Figma", "Notion", "Next.js", "React", "Tailwind CSS", "Vercel"],
    skills: ["Marketplace UX", "Digital marketing", "Campaign structure", "Brand systems", "Conversion design"],
  },
  {
    slug: "naturepacks",
    tone: "impact",
    title: "NaturePacks",
    category: "Sustainability - environmental impact",
    live: "https://www.naturepacks.org",
    logo: "https://www.naturepacks.org/assets/brand/naturepacks-main.svg",
    hero: "https://www.naturepacks.org/assets/newnaturepacks/process/sheet-forming-new.mp4",
    media: ["./assets/media/naturepacks-shirt-proof.jpg", "https://www.naturepacks.org/assets/brandinganddesign.png", "https://www.naturepacks.org/assets/product-bag-front.png"],
    headline: "Sustainability made tangible through product, process, and proof.",
    summary: "NaturePacks needed more than a green promise: the design work connects material process, product form, brand proof, and environmental impact.",
    story: ["The process video proves the material story.", "The shirt proof and brand applications show real-world identity use.", "The product bag makes the environmental promise concrete."],
    tools: ["Figma", "Notion", "Photoshop", "HTML", "CSS", "Vercel"],
    skills: ["Sustainability storytelling", "Brand systems", "Product visuals", "Impact design", "Creative direction"],
    proofs: [{ label: "NaturePacks logo design video", url: "https://x.com/daveayodeji_/status/2065422409939738671/video/1?s=46" }],
  },
];

const services = [
  ["Product leadership", "Strategy, prioritisation, product decisions, and what the experience must prove."],
  ["UI / UX design", "Interface systems, screen hierarchy, user flows, responsive behavior, and conversion moments."],
  ["Brand systems", "Logo usage, visual identity, project tone, brand proof, and product storytelling."],
  ["Design handoff", "Figma-ready decisions, Notion planning, developer-ready structure, and implementation clarity."],
  ["Creative direction", "Campaign visuals, product media, launch framing, proof assets, and presentation quality."],
  ["Product websites", "Project-specific pages, live links, case stories, and brand-led web surfaces."],
];

function media(src, alt) {
  return `<div class="media">${src.endsWith(".mp4") ? `<video src="${src}" autoplay muted loop playsinline></video>` : `<img src="${src}" alt="${alt}" loading="lazy">`}</div>`;
}

function mark(project) {
  return `<img src="${project.logo}" alt="${project.title}" loading="lazy" onerror="this.remove()"><span class="logo-fallback">${project.title}</span>`;
}

function home() {
  return `
    <section class="hero">
      <div>
        <img class="hero-logo" src="./assets/brand/yescode-design-main.svg" alt="yesCode Design">
        <p class="eyebrow">Product strategy. UI/UX. Brand systems. Handoff.</p>
        <h1>Product clarity before the build.</h1>
        <p>yesCode Design shapes products before, during, and after build: product leadership, interface design, brand identity, Notion planning, Figma execution, and proof-led storytelling.</p>
        <div class="actions">
          <a class="button" href="#/work">View the work</a>
          <a class="button secondary" href="https://wa.me/2348104190898" target="_blank" rel="noreferrer">Start a design project</a>
        </div>
      </div>
      <div class="design-board" aria-label="Design system board">
        <div class="board-top"><span></span><span></span><span></span></div>
        <article><strong>01</strong><h3>Strategy</h3><p>what the product must prove</p></article>
        <article><strong>02</strong><h3>Interface</h3><p>screens, flow, hierarchy</p></article>
        <article><strong>03</strong><h3>Identity</h3><p>logo, tone, visual behavior</p></article>
        <article><strong>04</strong><h3>Handoff</h3><p>Figma, Notion, build clarity</p></article>
      </div>
    </section>
    <section class="case-dock">${projects.map((p) => `<a href="#/project/${p.slug}" style="--brand-bg:${brandBg(p.tone)}">${mark(p)}<small>open case</small></a>`).join("")}</section>
    ${work("Featured design work")}
    ${servicesView()}
    ${processView()}
  `;
}

function brandBg(tone) {
  return {
    estate: "#10161e",
    hardware: "#0d1015",
    store: "#17130d",
    backend: "#0e1020",
    market: "#080b09",
    impact: "#08120b",
  }[tone];
}

function work(title = "Work") {
  return `
    <section class="work-shell">
      <div class="section-head">
        <p class="eyebrow">${title}</p>
        <h2>Each case opens into its own world.</h2>
        <p>Every project uses its real mark, real media, direct deployed link, tools, design role, and the story behind the work.</p>
      </div>
      <div class="case-list">
        ${projects.map((p) => `
          <article class="case-card">
            <a class="mark" href="#/project/${p.slug}" style="--brand-bg:${brandBg(p.tone)}">${mark(p)}</a>
            <div class="case-copy">
              <p class="eyebrow">${p.category}</p>
              <h3>${p.title}</h3>
              <p>${p.summary}</p>
              <div class="tag-row">${p.skills.slice(0, 4).map((s) => `<span>${s}</span>`).join("")}</div>
              <div class="case-actions">
                <a class="button" href="#/project/${p.slug}">Open case</a>
                <a class="button secondary" href="${p.live}" target="_blank" rel="noreferrer">Visit deployed site</a>
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
      <div class="section-head"><p class="eyebrow">Services</p><h2>Design, direction, and handoff.</h2></div>
      <div class="services-grid">${services.map(([name, body]) => `<article class="service-card"><h3>${name}</h3><p>${body}</p></article>`).join("")}</div>
    </section>
  `;
}

function processView() {
  return `
    <section class="process">
      <div class="section-head"><p class="eyebrow">Process</p><h2>From product thought to build clarity.</h2></div>
      <div class="process-grid">
        <article class="process-card"><h3>01. Shape</h3><p>Define the user, promise, screens, brand behavior, content, and proof assets.</p></article>
        <article class="process-card"><h3>02. Design</h3><p>Use Figma, Notion, product research, visual systems, and practical UI decisions.</p></article>
        <article class="process-card"><h3>03. Handoff</h3><p>Organize the design so the build knows exactly what to implement and why.</p></article>
      </div>
    </section>
  `;
}

function contact() {
  return `
    <section class="contact">
      <img src="./assets/brand/yescode-design-main.svg" alt="yesCode Design">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Bring the project with the proof.</h2>
        <p>WhatsApp: <a href="https://wa.me/2348104190898" target="_blank" rel="noreferrer">08104190898</a></p>
        <p>X: <a href="https://x.com/yescodedesign?s=21" target="_blank" rel="noreferrer">@yescodedesign</a></p>
      </div>
    </section>
  `;
}

function casePage(project) {
  return `
    <div class="case-page ${project.tone}">
      <section class="case-hero">
        <div>
          <div class="case-identity">${mark(project)}</div>
          <p class="eyebrow">${project.category}</p>
          <h1>${project.headline}</h1>
          <p>${project.summary}</p>
          <div class="tool-row">${project.tools.map((tool) => `<span>${tool}</span>`).join("")}</div>
          <div class="case-actions">
            <a class="button" href="${project.live}" target="_blank" rel="noreferrer">Visit deployed site</a>
            <a class="button secondary" href="#/work">Back to work</a>
          </div>
        </div>
        <div class="case-media">${media(project.hero, project.title)}</div>
      </section>
      <section class="story-layout">
        <article class="story-card">
          <strong>Design story</strong>
          <h3>What the project needed</h3>
          <ul>${project.story.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article class="story-card">
          <strong>Skills applied</strong>
          <h3>Relevant strengths</h3>
          <div class="tag-row">${project.skills.map((skill) => `<span>${skill}</span>`).join("")}</div>
        </article>
      </section>
      <section class="proof-grid">
        ${media(project.media[0], project.title)}
        <div class="proof-stack">${project.media.slice(1).map((src) => media(src, project.title)).join("")}</div>
      </section>
      ${project.proofs ? `<section class="story-layout"><article class="story-card"><strong>External proof</strong><h3>Motion and process links</h3><div class="case-actions">${project.proofs.map((proof) => `<a class="button secondary" href="${proof.url}" target="_blank" rel="noreferrer">${proof.label}</a>`).join("")}</div></article><article class="story-card"><strong>Live surface</strong><h3>${project.live.replace("https://", "")}</h3><p>The deployed project link is always visible so visitors can inspect the actual work.</p></article></section>` : ""}
      <section class="live-panel">
        <div><p class="eyebrow">Deployed project</p><strong>${project.live.replace("https://", "")}</strong></div>
        <a class="button" href="${project.live}" target="_blank" rel="noreferrer">Visit deployed site</a>
      </section>
    </div>
  `;
}

function route() {
  const hash = location.hash || "#/";
  const app = document.querySelector("#app");
  document.body.classList.add("is-loading");
  if (hash.startsWith("#/project/")) {
    const project = projects.find((p) => p.slug === hash.replace("#/project/", ""));
    app.innerHTML = project ? casePage(project) : home();
  } else if (hash === "#/work") app.innerHTML = work("All work");
  else if (hash === "#/services") app.innerHTML = servicesView();
  else if (hash === "#/process") app.innerHTML = processView();
  else if (hash === "#/contact") app.innerHTML = contact();
  else app.innerHTML = home();
  window.scrollTo({ top: 0, behavior: "smooth" });
  wireMedia();
  document.querySelector(".site-header").classList.remove("open");
  setTimeout(() => document.body.classList.remove("is-loading"), 380);
}

function wireMedia() {
  document.querySelectorAll(".media img, .media video").forEach((item) => {
    const done = () => item.closest(".media")?.classList.add("ready");
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
