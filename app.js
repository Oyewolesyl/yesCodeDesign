const projects = [
  {
    slug: "a-home-realty",
    tone: "estate",
    title: "a home realty",
    category: "real estate",
    live: "https://ahomerealty.vercel.app",
    logo: "https://ahomerealty.vercel.app/assets/brand/ahome-logo-gold-dark.svg",
    darkLogo: "https://ahomerealty.vercel.app/assets/brand/ahome-logo-gold-dark.svg",
    hero: "https://ahomerealty.vercel.app/assets/properties/estate-approach-05.png",
    card: "https://ahomerealty.vercel.app/assets/properties/grand-interior-04.png",
    proofVideo: "./assets/proofs/ahome-proof.mp4",
    proofAlt: "./assets/proofs/ahome-dark-light-proof.mp4",
    media: ["https://ahomerealty.vercel.app/assets/properties/estate-approach-05.png", "https://ahomerealty.vercel.app/assets/properties/grand-interior-04.png", "https://ahomerealty.vercel.app/assets/properties/aerial-residence-d.png"],
    headline: "premium property trust before inquiry",
    summary: "a real estate experience built around premium property proof, calm navigation, buyer confidence, and a clear path from inspection to inquiry",
    role: "real estate ux, product direction, brand application, lead journey",
    system: "brand trust, property hierarchy, inquiry clarity, responsive presentation",
    tools: ["figma", "notion", "react", "vite", "vercel"],
    story: ["the property imagery carries the emotional proof", "the logo stays premium instead of decorative", "the contact path stays clear without cheapening the brand"],
  },
  {
    slug: "ypod",
    tone: "hardware",
    title: "ypod",
    category: "consumer electronics",
    live: "https://ypod.vercel.app",
    logo: "./assets/projects/ypod/yema-dark.png",
    darkLogo: "./assets/projects/ypod/yema-dark.png",
    hero: "./assets/projects/ypod/yema-dark.png",
    card: "./assets/projects/ypod/yema-dark.png",
    proofVideo: "./assets/proofs/ypod-landing-proof.mp4",
    media: ["./assets/projects/ypod/yema-dark.png", "./assets/proofs/ypod-landing-proof.mp4"],
    detailMedia: ["./assets/projects/ypod/yema-dark.png", "./assets/projects/ypod/remote-customization.mp4", "./assets/proofs/ypod-landing-proof.mp4"],
    headline: "sleep hardware with real product presence",
    summary: "ypod is presented as a hardware brand with clean product hierarchy, launch-ready art direction, and enough visual proof to make the product feel inspectable",
    role: "hardware storytelling, creative direction, product strategy, launch systems",
    system: "brand feel, product media, product proof, launch storytelling",
    tools: ["figma", "notion", "react", "vercel"],
    story: ["product imagery is treated as evidence", "product hierarchy makes the promise feel functional", "the site moves from brand feeling into product clarity"],
  },
  {
    slug: "ypod-store",
    tone: "store",
    title: "ypod store",
    category: "ecommerce web app",
    live: "https://ypod-store.vercel.app/shop",
    logo: "./assets/projects/ypod/yema-dark.png",
    darkLogo: "./assets/projects/ypod/yema-dark.png",
    hero: "./assets/projects/ypod/remote-customization.mp4",
    card: "./assets/projects/ypod/yema-case.png",
    proofVideo: "./assets/proofs/ypod-store-proof.mp4",
    media: ["./assets/projects/ypod/yema-case.png", "./assets/projects/ypod/remote-customization.mp4", "./assets/proofs/ypod-store-proof.mp4"],
    detailMedia: ["./assets/projects/ypod/yema-case.png", "./assets/projects/ypod/remote-customization.mp4", "./assets/proofs/ypod-store-proof.mp4"],
    headline: "a store surface built for product decisions",
    summary: "the commerce web app turns ypod into a browsable product system with visible product choice, mobile purchase intent, and a clearer path toward checkout",
    role: "ecommerce ux, product cards, shop structure, conversion flow",
    system: "product browsing, comparison flow, mobile commerce, purchase confidence",
    tools: ["figma", "notion", "next.js", "react", "vercel"],
    story: ["product cutouts lead the commerce experience", "the layout supports quick comparison", "the shop extends the brand without hiding purchase action"],
    proofs: [{ label: "watch shop proof on x", url: "https://x.com/daveayodeji_/status/2069845385393086882/video/1?s=46" }],
  },
  {
    slug: "ypod-backend-management",
    tone: "backend",
    title: "ypod backend management",
    category: "backend operations",
    live: "https://ypod-backend-management.vercel.app/",
    logo: "./assets/projects/ypod/yema-dark.png",
    darkLogo: "./assets/projects/ypod/yema-dark.png",
    hero: "./assets/proofs/ypod-backend-management-proof.mp4",
    card: "./assets/projects/ypod/backend-management-room.jpeg",
    proofVideo: "./assets/proofs/ypod-backend-management-proof.mp4",
    proofAlt: "./assets/proofs/backend-crypto-transfer-proof.mp4",
    media: ["./assets/projects/ypod/backend-management-room.jpeg", "./assets/proofs/ypod-backend-management-proof.mp4", "./assets/proofs/backend-crypto-transfer-proof.mp4"],
    detailMedia: ["./assets/projects/ypod/backend-management-room.jpeg", "./assets/proofs/ypod-backend-management-proof.mp4", "./assets/proofs/backend-crypto-transfer-proof.mp4"],
    headline: "backend control treated like product",
    summary: "the backend surface turns operations, payment review, dashboard hierarchy, and product control into a visible system the business can actually run",
    role: "admin ux, backend systems, dashboard structure, database thinking",
    system: "supabase, auth, admin control, product operations, payment review",
    tools: ["figma", "notion", "next.js", "react", "supabase", "vercel"],
    story: ["admin flows need hierarchy and fast comprehension", "backend logic becomes visible product control", "the system supports commerce operations after launch"],
    proofs: [
      { label: "watch backend proof on x", url: "https://x.com/daveayodeji_/status/2069818800896106503/video/1?s=46" },
      { label: "watch custom glb proof on x", url: "https://x.com/daveayodeji_/status/2069091597401071790/video/1?s=46" },
    ],
  },
  {
    slug: "dealradar-ng",
    tone: "market",
    title: "dealradar ng",
    category: "digital marketing ecommerce",
    live: "https://www.dealradarng.com",
    logo: "./assets/projects/dealradar/main-logo-light.svg",
    darkLogo: "./assets/projects/dealradar/main-logo-light.svg",
    hero: "./assets/projects/dealradar/banner-dark.png",
    card: "./assets/projects/dealradar/card1minimalgraphicblack.png",
    proofVideo: "./assets/proofs/dealradar-proof.mp4",
    media: ["./assets/projects/dealradar/card1minimalgraphicblack.png", "./assets/projects/dealradar/banner-dark.png", "./assets/proofs/dealradar-proof.mp4"],
    headline: "deal discovery framed for action",
    summary: "dealradar ng uses sharp recognition, campaign structure, merchant visibility, and ecommerce routing so offers can move from attention to action",
    role: "marketplace ux, digital marketing, campaign structure, conversion design",
    system: "merchant visibility, offer discovery, campaign routing, ecommerce action",
    tools: ["figma", "notion", "next.js", "react", "tailwind css", "vercel"],
    story: ["the mark creates quick recognition", "campaign visuals support merchant visibility", "the structure points visitors toward action"],
  },
  {
    slug: "naturepacks",
    tone: "impact",
    title: "naturepacks™",
    category: "sustainability",
    live: "https://www.naturepacks.org",
    logo: "./assets/projects/naturepacks/naturepacks-main.svg",
    darkLogo: "./assets/projects/naturepacks/naturepacks-main.svg",
    hero: "./assets/media/naturepacks-shirt-proof.jpg",
    card: "./assets/media/naturepacks-shirt-proof.jpg",
    proofVideo: "./assets/proofs/naturepacks-landing-proof.mp4",
    proofAlt: "./assets/proofs/naturepacks-founder-proof.mp4",
    media: ["./assets/media/naturepacks-shirt-proof.jpg", "./assets/projects/naturepacks/merch-01.jpeg", "./assets/projects/naturepacks/merch-02.jpeg", "./assets/projects/naturepacks/paper-01.jpeg", "./assets/proofs/naturepacks-landing-proof.mp4"],
    headline: "sustainability made visible with proof",
    summary: "naturepacks™ connects material story, packaging identity, product evidence, and environmental purpose into a brand system visitors can understand quickly",
    role: "sustainability storytelling, brand systems, product visuals, impact design",
    system: "material story, proof assets, product identity, environmental impact",
    tools: ["figma", "notion", "html", "css", "vercel"],
    story: ["merch proves the identity beyond a flat logo", "paper and product assets make the material story tangible", "the design turns environmental promise into visible proof"],
    proofs: [{ label: "watch logo proof on x", url: "https://x.com/daveayodeji_/status/2065422409939738671/video/1?s=46" }],
  },
];

const services = [
  ["product leadership", "strategy, priority, user intent, and what the product must prove"],
  ["interface design", "screen hierarchy, states, responsive behavior, motion, and conversion moments"],
  ["brand systems", "logo usage, tone, proof assets, visual behavior, and project specific storytelling"],
  ["handoff", "figma organization, notion planning, build clarity, and developer ready structure"],
];

const automation = [
  ["planning", "notion holds the product notes, launch decisions, content structure, and what each page must prove"],
  ["interface", "figma shapes the screen hierarchy, brand behavior, responsive expectations, and handoff logic"],
  ["backend", "supabase, auth, storage, dashboards, and admin actions are explained where they matter"],
  ["proof", "deployed urls, local videos, and project media show the work as a living product"],
];

const brandProof = [
  {
    name: "NaturePacks identity system",
    scope: "impact brand / logo variants / merch proof",
    note: "main mark, reverse contrast, shirt proof, merch, material imagery, and live site motion make the sustainability story feel tangible.",
    assets: [
      { src: "./assets/projects/naturepacks/naturepacks-main.svg", label: "main mark" },
      { src: "./assets/projects/naturepacks/naturepacks-white-black.svg", label: "reverse contrast" },
      { src: "./assets/media/naturepacks-shirt-proof.jpg", label: "shirt proof", size: "wide" },
      { src: "./assets/projects/naturepacks/merch-01.jpeg", label: "merch application" },
      { src: "./assets/projects/naturepacks/merch-02.jpeg", label: "secondary merch" },
      { src: "./assets/projects/naturepacks/paper-01.jpeg", label: "material proof" },
      { src: "./assets/proofs/naturepacks-landing-proof.mp4", label: "landing proof", size: "wide" },
    ],
  },
  {
    name: "ypod product identity",
    scope: "hardware brand / floating product assets / commerce proof",
    note: "dark product direction, no-background product media, customization motion, store proof, and launch surface keep the hardware brand inspectable.",
    assets: [
      { src: "./assets/projects/ypod/yema-dark.png", label: "hero product mark", size: "wide" },
      { src: "./assets/projects/ypod/yema-case.png", label: "floating product asset" },
      { src: "./assets/projects/ypod/remote-customization.mp4", label: "customization motion" },
      { src: "./assets/proofs/ypod-landing-proof.mp4", label: "brand site proof", size: "wide" },
      { src: "./assets/proofs/ypod-store-proof.mp4", label: "store proof", size: "wide" },
    ],
  },
  {
    name: "DealRadar campaign system",
    scope: "marketplace brand / ad surfaces / live campaign proof",
    note: "the logo, banner, campaign card, and deployed flow give the marketplace a quick read and a stronger path to action.",
    assets: [
      { src: "./assets/projects/dealradar/main-logo-light.svg", label: "market mark" },
      { src: "./assets/projects/dealradar/banner-dark.png", label: "ad banner", size: "wide" },
      { src: "./assets/projects/dealradar/card1minimalgraphicblack.png", label: "campaign card" },
      { src: "./assets/proofs/dealradar-proof.mp4", label: "live proof", size: "wide" },
    ],
  },
  {
    name: "yesCodeDesign identity",
    scope: "studio system / logo forms / ecosystem motion",
    note: "main lockup, dark lockup, intro motion, and ecosystem proof position the design arm as its own capable product studio.",
    assets: [
      { src: "./assets/brand/yescode-design-main.svg", label: "main lockup", size: "wide" },
      { src: "./assets/brand/yescode-design-dark.svg", label: "dark lockup", size: "wide" },
      { src: "./assets/media/yescode-design-intro.mp4", label: "intro motion", size: "wide" },
      { src: "./assets/media/yescode-ecosystem.mp4", label: "ecosystem proof", size: "wide" },
    ],
  },
  {
    name: "A Home Realty premium mark",
    scope: "real estate brand / logo behavior / property proof",
    note: "premium logo behavior, estate imagery, interior proof, and live dark-light motion keep the property experience calm and trusted.",
    assets: [
      { src: "https://ahomerealty.vercel.app/assets/brand/ahome-logo-gold-dark.svg", label: "gold mark" },
      { src: "https://ahomerealty.vercel.app/assets/properties/estate-approach-05.png", label: "estate mood", size: "wide" },
      { src: "https://ahomerealty.vercel.app/assets/properties/grand-interior-04.png", label: "interior proof" },
      { src: "./assets/proofs/ahome-dark-light-proof.mp4", label: "dark light proof", size: "wide" },
    ],
  },
];

const projectOrder = ["ypod", "naturepacks", "ypod-store", "dealradar-ng", "ypod-backend-management", "a-home-realty"];
const orderedProjects = projectOrder
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter(Boolean);

function isVideo(src) {
  return src.endsWith(".mp4");
}

function media(src, alt, className = "") {
  const content = isVideo(src)
    ? `<video src="${src}" autoplay muted loop playsinline></video>`
    : `<img src="${src}" alt="${alt}" loading="lazy">`;
  return `<figure class="media ${className}">${content}</figure>`;
}

function mark(project, dark = false) {
  return `<img src="${dark ? project.darkLogo : project.logo}" alt="${project.title}" loading="lazy">`;
}

function detailMedia(project) {
  return (project.detailMedia || [project.card || project.hero, project.hero, ...project.media])
    .filter(Boolean)
    .filter((src, index, list) => list.indexOf(src) === index);
}

function projectStrip() {
  return `
    <section class="project-strip">
      ${orderedProjects.map((project) => `
        <a href="#/project/${project.slug}" class="strip-item ${project.tone}">
          ${media(project.card || project.hero, project.title)}
          <span class="strip-logo">${mark(project, true)}</span>
          <span>${project.category}</span>
          <strong>${project.title}</strong>
        </a>
      `).join("")}
    </section>
  `;
}

function brandShowcase() {
  return `
    <section class="brand-showcase">
      <div class="section-head brand-head">
        <p class="kicker">brand systems</p>
        <h2>identity systems with proof, not decoration</h2>
        <p>each project shows the logo forms, contrast versions, campaign assets, product media, and live proof that make the brand usable before launch.</p>
      </div>
      <div class="brand-system-list">
        ${brandProof.map((group, index) => `
          <article class="brand-system ${index % 2 ? "reverse" : ""}">
            <div class="brand-system-copy">
              <span class="brand-index">${String(index + 1).padStart(2, "0")}</span>
              <p class="kicker">${group.scope}</p>
              <h3>${group.name}</h3>
              <p>${group.note}</p>
            </div>
            <div class="brand-proof-board">
              ${group.assets.map((asset, assetIndex) => `
                <article class="brand-tile ${asset.size || ""}">
                  ${media(asset.src, `${group.name} ${asset.label}`, assetIndex === 0 ? "feature-media" : "")}
                  <span>${asset.label}</span>
                </article>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function phoneProof(project) {
  return `
    <div class="phone-stage">
      <div class="phone-shell">
        <span class="phone-speaker"></span>
        <video src="${project.proofVideo}" autoplay muted loop playsinline></video>
      </div>
      ${project.proofAlt ? `<div class="mini-phone"><video src="${project.proofAlt}" autoplay muted loop playsinline></video></div>` : ""}
    </div>
  `;
}

function home() {
  return `
    <section class="hero">
      <div class="hero-copy">
        <p class="kicker">strategy, interface, identity, handoff</p>
        <h1>design systems people can build from</h1>
        <p>product direction, interface design, brand systems, figma execution, notion planning, and project specific proof for products that need to feel real before launch</p>
        <div class="actions">
          <a class="primary" href="#/work">view the work</a>
          <a class="secondary" href="#/services">see services</a>
          <a class="secondary cta-cross" href="https://yes-code.vercel.app/" target="_blank" rel="noreferrer">visit yescode</a>
        </div>
      </div>
      <div class="hero-board">
        ${["strategy", "interface", "identity", "handoff"].map((item, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><strong>${item}</strong></article>`).join("")}
      </div>
    </section>
    ${projectStrip()}
    ${brandShowcase()}
    ${work("featured design work")}
    ${systemsView()}
    ${servicesView()}
    ${processView()}
  `;
}

function work(title = "work") {
  return `
    <section class="work-shell">
      <div class="section-head">
        <p class="kicker">${title}</p>
        <h2>each case carries its own product proof</h2>
        <p>real marks, live sites, local proof videos, tool context, design role, and product story are organized around what each brand needed to become</p>
      </div>
      <div class="case-flow">
        ${orderedProjects.map((project, index) => `
          <article class="case-line ${project.tone}">
            <div class="case-count">${String(index + 1).padStart(2, "0")}</div>
            <div class="case-media">
              ${media(project.card || project.hero, project.title)}
            </div>
            <div class="case-copy">
              <a class="case-logo" href="#/project/${project.slug}">${mark(project, true)}</a>
              <p class="kicker">${project.category}</p>
              <h3>${project.title}</h3>
              <p>${project.summary}</p>
              <p class="role">${project.role}</p>
              <div class="actions">
                <a class="primary" href="#/project/${project.slug}">open case</a>
                <a class="secondary" href="${project.live}" target="_blank" rel="noreferrer">visit deployed site</a>
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
      <div class="section-head"><p class="kicker">services</p><h2>direction, design, identity, and handoff</h2></div>
      <div class="service-list">${services.map(([name, body]) => `<article><h3>${name}</h3><p>${body}</p></article>`).join("")}</div>
    </section>
  `;
}

function systemsView() {
  return `
    <section class="systems">
      <div class="section-head"><p class="kicker">systems</p><h2>strategy, tools, backend, and proof work together</h2></div>
      <div class="system-flow">${automation.map(([name, body], index) => `
        <article>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <h3>${name}</h3>
          <p>${body}</p>
        </article>
      `).join("")}</div>
    </section>
  `;
}

function processView() {
  return `
    <section class="process">
      <p class="kicker">process</p>
      <div class="process-grid">
        <article><strong>01</strong><h3>understand</h3><p>audience, product, brand, proof assets, and what the experience must make clear</p></article>
        <article><strong>02</strong><h3>compose</h3><p>interface structure, identity behavior, media hierarchy, copy, and live project pathway</p></article>
        <article><strong>03</strong><h3>hand off</h3><p>figma, notion, implementation notes, responsive expectations, and build ready decisions</p></article>
      </div>
    </section>
  `;
}

function contact() {
  return `
    <section class="contact">
      <img src="./assets/brand/yescode-design-main.svg" alt="yescode design">
      <div>
        <p class="kicker">contact</p>
        <h2>bring the product, the assets, and the proof</h2>
        <div class="founders">
          <article>
            <strong>Dave Olaniyan</strong>
            <span>Founder / Design Engineer</span>
            <span>Technical Lead, Product & Design</span>
            <a href="mailto:daveolaniyan@gmail.com">daveolaniyan@gmail.com</a>
          </article>
          <article>
            <strong>Sylvanna Oyewole</strong>
            <span>Founder</span>
            <span>Design Engineer</span>
            <span>Brand, Growth & Partnerships</span>
            <a href="mailto:oyewolesyl@gmail.com">oyewolesyl@gmail.com</a>
          </article>
        </div>
        <form class="intake-form" action="https://formsubmit.co/oyewolesyl@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="new yescode design project overview">
          <input type="hidden" name="_captcha" value="false">
          <input type="hidden" name="_cc" value="daveolaniyan@gmail.com">
          <input type="hidden" name="_template" value="table">
          <label>name<input name="name" type="text" autocomplete="name" required></label>
          <label>email<input name="email" type="email" autocomplete="email" required></label>
          <label>project overview<textarea name="project_overview" rows="5" required></textarea></label>
          <button class="primary" type="submit">send project overview</button>
          <p class="form-status" role="status" aria-live="polite"></p>
        </form>
        <a class="secondary" href="https://x.com/yescodedesign?s=21" target="_blank" rel="noreferrer">open x</a>
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
            <a class="primary" href="${project.live}" target="_blank" rel="noreferrer">visit deployed site</a>
            <a class="secondary" href="#/work">back to work</a>
          </div>
        </div>
        ${phoneProof(project)}
      </section>
      <section class="case-story">
        <article>
          <p class="kicker">story</p>
          <h2>what the work needed to prove</h2>
          <ul>${project.story.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
        <article>
          <p class="kicker">live surface</p>
          <h2>deployed site</h2>
          <p>the deployed project is linked clearly so the work can be inspected directly</p>
          <p class="system-note">${project.system}</p>
          ${project.proofs ? `<div class="proof-links">${project.proofs.map((proof) => `<a class="secondary" href="${proof.url}" target="_blank" rel="noreferrer">${proof.label}</a>`).join("")}</div>` : ""}
        </article>
      </section>
      <section class="proof-wall">
        ${detailMedia(project).map((src, index) => media(src, `${project.title} proof ${index + 1}`, index === 0 ? "hero-media" : "")).join("")}
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
  } else if (hash === "#/work") app.innerHTML = work("all design work");
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
  document.querySelectorAll(".media img, .media video, .phone-shell video, .mini-phone video").forEach((item) => {
    const done = () => item.closest(".media, .phone-shell, .mini-phone")?.classList.add("ready");
    item.addEventListener("load", done);
    item.addEventListener("loadeddata", done);
    item.addEventListener("error", done);
    if (item.complete || item.readyState >= 2) done();
  });
}

document.querySelector(".menu-button").addEventListener("click", () => {
  const header = document.querySelector(".site-header");
  const open = header.classList.toggle("open");
  document.querySelector(".menu-button").setAttribute("aria-expanded", String(open));
});

document.addEventListener("submit", async (event) => {
  const form = event.target.closest(".intake-form");
  if (!form) return;
  event.preventDefault();
  const button = form.querySelector("button[type='submit']");
  const status = form.querySelector(".form-status");
  const data = new FormData(form);
  const endpoint = form.action.replace("https://formsubmit.co/", "https://formsubmit.co/ajax/");
  button.disabled = true;
  button.textContent = "sending...";
  if (status) status.textContent = "";
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    if (!response.ok) throw new Error("send failed");
    form.reset();
    if (status) status.textContent = "sent. we will reply from the founder inbox.";
  } catch (error) {
    if (status) status.textContent = "opening secure send page...";
    HTMLFormElement.prototype.submit.call(form);
    return;
  } finally {
    button.disabled = false;
    button.textContent = "send project overview";
  }
});
document.querySelector("[data-scroll='top']").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
document.querySelector("[data-scroll='bottom']").addEventListener("click", () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" }));
window.addEventListener("hashchange", route);
route();
