(() => {
  const I18N = {
    cs: {
      role: "Grafický designer",

      // NEW: About section
      aboutTitle: "O mně",
      aboutP1: "Jsem grafická designérka se zaměřením na čistý vizuální styl, typografii a praktické výstupy pro tisk i online.",
      aboutP2: "Nejčastěji tvořím tiskoviny, promo vizuály a šablony pro sociální sítě. Ráda pracuji s jednotným systémem, aby šly materiály dlouhodobě snadno rozšiřovat.",
      aboutKicker: "Zaměření",
      aboutLi1: "Tiskoviny a předtisková příprava (DTP, exporty, spady)",
      aboutLi2: "Sociální sítě (posty, bannery, šablony, jednoduchý motion)",
      aboutLi3: "Úprava fotografií (retuš, barevnost, konzistentní look)",

      skillsTitle: "PRACOVNÍ DOVEDNOSTI",
      workTitle: "Ukázky práce",
      workNote: "Klikni na náhled pro detail. Hover = zoom + interaktivní efekt.",
      xpTitle: "Zkušenosti",
      xpNote: "Obráceně chronologicky. Odpovědnosti a rozsah.",
      eduTitle: "Vzdělání",
      contactTitle: "Kontakt",
      phoneLabel: "Telefon",
      emailLabel: "Email",
      linkedinOpen: "Otevřít profil",
      open: "Otevřít"
    },
    en: {
      role: "Graphic designer",

      // NEW: About section
      aboutTitle: "About me",
      aboutP1: "I’m a graphic designer focused on clean visuals, typography, and practical outputs for both print and digital.",
      aboutP2: "Most often I create print materials, promo visuals, and social media templates. I like working with a consistent system so the visuals can scale over time.",
      aboutKicker: "Focus",
      aboutLi1: "Print and prepress preparation (DTP, exports, bleed)",
      aboutLi2: "Social media (posts, banners, templates, simple motion)",
      aboutLi3: "Photo editing (retouching, color, consistent look)",

      skillsTitle: "SKILLS",
      workTitle: "Selected work",
      workNote: "Tap a preview for details. Hover = zoom + interactive effect.",
      xpTitle: "Experience",
      xpNote: "Reverse chronological. Responsibilities and scope.",
      eduTitle: "Education",
      contactTitle: "Contact",
      phoneLabel: "Phone",
      emailLabel: "Email",
      linkedinOpen: "Open profile",
      open: "Open"
    }
  };

  const WORK = {
    w1: {
      cs: {
        kicker: "SOCIAL MEDIA",
        title: "Social Media Post Design",
        long: "Vizuál pro online komunikaci s důrazem na mobilní čitelnost, konzistentní styl a rychlou orientaci. Připraveno tak, aby šlo snadno rozšiřovat do dalších formátů.",
        tags: ["post","story","typografie","kompozice"],
        meta: "Instagram / promo vizuály · 2024",
        desc: "Návrh série příspěvků a formátů pro sociální sítě. Důraz na jasnou hierarchii, čitelnost v mobilu a jednotný styl napříč feedem.",
        bullets: ["Návrh kompozice a typografie","Varianty pro post + story","Exporty a šablony pro opakované použití","Barevná konzistence a retuše"]
      },
      en: {
        kicker: "SOCIAL MEDIA",
        title: "Social Media Post Design",
        long: "Mobile-first visuals with clear hierarchy and a consistent style. Built as a flexible system that can be expanded into additional formats.",
        tags: ["post","story","typography","layout"],
        meta: "Instagram / promo visuals · 2024",
        desc: "A set of posts and formats designed for social media with focus on mobile readability and consistent feed style.",
        bullets: ["Layout and typography design","Post + story variations","Exports and reusable templates","Color consistency and retouching"]
      }
    },
    w2: {
      cs: {
        kicker: "PRINT / BRANDING",
        title: "Fagota – Card / Icon Design",
        long: "Stylizovaná sada motivů pro tisk – čisté tvary, jemný gradient a dobrá čitelnost. Vhodné pro rozšíření do dalších materiálů (plakát, leták, web).",
        tags: ["ikony","tisk","brand","ilustrace"],
        meta: "Ilustrace + tisk · 2024",
        desc: "Ilustrované ikony a hravý vizuální styl pro sadu karet. Minimalistický motiv, pastelové barvy a připravené podklady pro tisk.",
        bullets: ["Hravé ikony a jednoduchá symbolika","Barevná paleta + typografie","Příprava pro tisk (rozměry, bezpečné zóny)","Konzistence napříč sadou"]
      },
      en: {
        kicker: "PRINT / BRANDING",
        title: "Fagota – Card / Icon Design",
        long: "A stylized print set built on clean shapes, soft gradients and strong readability. Ready to expand into more materials (poster, flyer, web).",
        tags: ["icons","print","brand","illustration"],
        meta: "Illustration + print · 2024",
        desc: "Illustrated icons and a playful visual style for a card set with pastel palette and print-ready assets.",
        bullets: ["Playful icons and simple symbolism","Color palette + typography","Print preparation (sizes, safe zones)","Consistency across the set"]
      }
    },
    w3: {
      cs: {
        kicker: "POSTER",
        title: "Fitness Promo Poster",
        long: "Kombinace fotografie, výrazných barev a typografie. Layout navržený tak, aby i při rychlém scrollu zůstal čitelný a zapamatovatelný.",
        tags: ["plakát","promo","layout","foto"],
        meta: "Plakát / promo · 2023",
        desc: "Dynamický promo plakát s důrazem na kontrast, silnou typografii a jasný přenos informací. Připraveno i pro online varianty.",
        bullets: ["Silná headline typografie","Kontrastní zvýraznění klíčových údajů","Formáty pro tisk i online","Rychlá orientace a čitelnost"]
      },
      en: {
        kicker: "POSTER",
        title: "Fitness Promo Poster",
        long: "A mix of photography, accent colors and strong typographic hierarchy. Designed to stay readable and memorable even during fast scrolling.",
        tags: ["poster","promo","layout","photo"],
        meta: "Poster / promo · 2023",
        desc: "A dynamic promo poster focused on contrast, bold typography and clear information hierarchy.",
        bullets: ["Bold headline typography","High-contrast highlight of key info","Print + online formats","Fast readability and orientation"]
      }
    },
    w4: {
      cs: {
        kicker: "LUX / PRINT",
        title: "Laurent Jewellery – Gift Voucher",
        long: "Prémiový vzhled postavený na detailu – typografie, rytmus a citlivé použití linií. Výsledek působí čistě a luxusně bez zbytečné přeplácanosti.",
        tags: ["voucher","lux","typografie","tisk"],
        meta: "Voucher / luxusní design · 2023",
        desc: "Elegantní voucher s důrazem na minimalismus a prémiový dojem. Vhodné pro tisk i digitální použití (email / web).",
        bullets: ["Luxusní typografie a kompozice","Práce s linií a prostorem","Příprava pro tisk (PDF, spady)","Digitální varianta pro web/email"]
      },
      en: {
        kicker: "LUX / PRINT",
        title: "Laurent Jewellery – Gift Voucher",
        long: "A premium look built on detail: typography, rhythm and careful line work. Clean, elegant and intentionally uncluttered.",
        tags: ["voucher","luxury","typography","print"],
        meta: "Voucher / luxury design · 2023",
        desc: "An elegant voucher with a minimalist approach and premium feel, suitable for print and digital use.",
        bullets: ["Luxury typography and composition","Linework and spacing","Print-ready preparation (PDF, bleed)","Digital variant for web/email"]
      }
    }
  };

  const XP = {
    cs: [
      {
        when: "2025–2026",
        role: "Asistentka Copyshopu",
        meta: "Copyshop Tábor",
        bullets: [
          "Design tištěných materiálů a předtisková příprava (sazba, exporty, kontrola dat).",
          "Grafické návrhy tiskovin + příspěvky pro sociální sítě (šablony, posty, bannery).",
          "Komunikace se zákazníky, korektury, příprava podkladů a předání do výroby.",
          "Tisk, kopírování, laminace, potisk textilu, řezání, vazby, bigování apod.",
          "Udržování vizuální konzistence a rychlá práce pod termíny."
        ]
      },
      {
        when: "2023–2024",
        role: "Grafický designer",
        meta: "Little Angel · Tábor",
        bullets: [
          "Editace fotografií produktů pro magazíny a web (retuše, barevnost, exporty).",
          "Tvorba prezentací a vizuálů pro interní i externí komunikaci.",
          "Obsah pro sociální sítě (grafika, jednoduché animace, formáty).",
          "Spolupodílení na tvorbě firemních videí (grafické prvky, titulky, podklady)."
        ]
      },
      {
        when: "2022",
        role: "Grafická podpora",
        meta: "DPD",
        bullets: [
          "Tvorba interních firemních prospektů a jednostránkových materiálů.",
          "Úpravy šablon, sjednocení stylu, příprava pro tisk (PDF, ořez, spadávka).",
          "Spolupráce na drobných grafických požadavcích napříč týmy."
        ]
      }
    ],
    en: [
      {
        when: "2025–2026",
        role: "Copyshop Assistant",
        meta: "Copyshop Tábor",
        bullets: [
          "Print design and prepress preparation (layout, exports, file checks).",
          "Print graphics + social media outputs (templates, posts, banners).",
          "Client communication, proofreading, production-ready handoff.",
          "Printing, copying, lamination, textile printing, cutting, binding and finishing.",
          "Maintaining visual consistency and delivering under deadlines."
        ]
      },
      {
        when: "2023–2024",
        role: "Graphic Designer",
        meta: "Little Angel · Tábor",
        bullets: [
          "Product photo editing for web and print (retouch, color, exports).",
          "Presentations and visuals for internal and external communication.",
          "Social media content (graphics, simple motion variants, formats).",
          "Support on company video production (graphic elements, titles, assets)."
        ]
      },
      {
        when: "2022",
        role: "Graphic Support",
        meta: "DPD",
        bullets: [
          "Internal brochures and one-page print materials.",
          "Template updates, visual unification, print-ready PDFs.",
          "Ad-hoc design requests and quick turnarounds."
        ]
      }
    ]
  };

  const EDU = {
    cs: [
      {
        title: "Pracovník/pracovnice grafického studia (Adobe + CorelDRAW)",
        school: "AbecedaPC",
        type: "Rekvalifikační kurz",
        years: "2024"
      },
      {
        title: "Jihočeská univerzita v Českých Budějovicích",
        school: "Zdravotně sociální fakulta",
        type: "Fyzioterapeut",
        years: "2016 – 2020"
      }
    ],
    en: [
      {
        title: "Graphic Studio Specialist (Adobe + CorelDRAW)",
        school: "AbecedaPC",
        type: "Retraining course",
        years: "2024"
      },
      {
        title: "University of South Bohemia in České Budějovice",
        school: "Faculty of Health and Social Sciences",
        type: "Physiotherapist",
        years: "2016 – 2020"
      }
    ]
  };

  // NEW: Skill icons mapping (label => filename in assets/icons/)
  const SKILL_ICONS = [
    { label: "Adobe Photoshop", file: "photoshop.png" },
    { label: "Adobe Illustrator", file: "illustrator.png" },
    { label: "Adobe InDesign", file: "indesign.png" },
    { label: "Figma", file: "figma.png" },
    { label: "CorelDRAW", file: "coreldraw-icon.png" },
    { label: "Unreal Engine", file: "unreal-engine-icon.png" },
    { label: "Blender", file: "blender-icon.png" },
    { label: "Microsoft Office", file: "office-365-icon.png" }
  ];

  function injectSkillIcons(){
    const map = new Map(SKILL_ICONS.map(x => [x.label.toLowerCase(), x.file]));
    const nodes = Array.from(document.querySelectorAll(".skillLogo"));
    if (nodes.length === 0) return;

    nodes.forEach(btn => {
      // pokud už je uvnitř obrázek, nešahej na to
      if (btn.querySelector("img")) return;

      const label = (btn.dataset.label || btn.getAttribute("aria-label") || "").trim();
      const file = map.get(label.toLowerCase());
      if (!file) return;

      // vyhoď placeholder (IMG rám)
      btn.innerHTML = "";

      const img = document.createElement("img");
      img.src = `assets/icons/${file}`;
      img.alt = "";
      img.loading = "lazy";
      btn.appendChild(img);
    });
  }

  const cursorTip = document.getElementById("cursorTip");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const lightboxMeta = document.getElementById("lightboxMeta");
  const lightboxDesc = document.getElementById("lightboxDesc");
  const lightboxList = document.getElementById("lightboxList");
  const xpList = document.getElementById("xpList");
  const eduList = document.getElementById("eduList");

  function renderEdu(lang){
    if (!eduList) return;
    eduList.innerHTML = "";
    EDU[lang].forEach(item => {
      const row = document.createElement("div");
      row.className = "eduItem";
      const left = document.createElement("div");
      const t = document.createElement("div");
      t.className = "eduTitle";
      t.textContent = item.title;
      const s = document.createElement("div");
      s.className = "eduSchool";
      s.textContent = item.school;
      const ty = document.createElement("div");
      ty.className = "eduType";
      ty.textContent = item.type;
      left.appendChild(t);
      left.appendChild(s);
      left.appendChild(ty);
      const years = document.createElement("div");
      years.className = "eduYears";
      years.textContent = item.years;
      row.appendChild(left);
      row.appendChild(years);
      eduList.appendChild(row);
    });
  }

  function applyLang(lang) {
    document.body.dataset.lang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      if (I18N[lang][key] != null) el.textContent = I18N[lang][key];
    });

    if (cursorTip) cursorTip.textContent = I18N[lang].open;

    document.querySelectorAll("[data-label-cs][data-label-en]").forEach(el => {
      el.dataset.label = lang === "en" ? el.dataset.labelEn : el.dataset.labelCs;
    });

    document.querySelectorAll(".workRow[data-work]").forEach(row => {
      const id = row.dataset.work;
      const data = WORK[id]?.[lang];
      if (!data) return;

      const kicker = row.querySelector(".workKicker");
      const title = row.querySelector(".workH");
      const desc = row.querySelector(".workP");
      const tagsWrap = row.querySelector(".workTags");
      const btn = row.querySelector(".workMedia");
      const img = btn ? btn.querySelector("img") : null;

      if (kicker) kicker.textContent = data.kicker;
      if (title) title.textContent = data.title;
      if (desc) desc.textContent = data.long;

      if (tagsWrap) {
        tagsWrap.innerHTML = "";
        data.tags.forEach(t => {
          const s = document.createElement("span");
          s.className = "tag";
          s.textContent = t;
          tagsWrap.appendChild(s);
        });
      }

      if (btn) {
        btn.dataset.title = data.title;
        btn.dataset.meta = data.meta;
        btn.dataset.desc = data.desc;
        btn.dataset.bullets = data.bullets.join("|");
        btn.setAttribute("aria-label", `${I18N[lang].open}: ${data.title}`);
      }

      if (img) img.alt = data.title;
    });

    if (xpList) {
      xpList.innerHTML = "";
      XP[lang].forEach(item => {
        const card = document.createElement("article");
        card.className = "xpCard reveal";
        card.setAttribute("data-reveal", "");

        const grid = document.createElement("div");
        grid.className = "xpCard__grid";

        const left = document.createElement("div");
        const when = document.createElement("div");
        when.className = "xpWhen";
        when.textContent = item.when;

        const ul = document.createElement("ul");
        ul.className = "xpBullets";
        item.bullets.forEach(b => {
          const li = document.createElement("li");
          li.textContent = b;
          ul.appendChild(li);
        });

        left.appendChild(when);
        left.appendChild(ul);

        const right = document.createElement("div");
        right.className = "xpRight";
        const role = document.createElement("div");
        role.className = "xpRole";
        role.textContent = item.role;
        const meta = document.createElement("div");
        meta.className = "xpMeta";
        meta.textContent = item.meta;

        right.appendChild(role);
        right.appendChild(meta);

        grid.appendChild(left);
        grid.appendChild(right);
        card.appendChild(grid);
        xpList.appendChild(card);
      });
    }

    renderEdu(lang);
    setupReveal();
    localStorage.setItem("lang", lang);

    // NEW: po přepnutí jazyka se může změnit data-label => zkus znovu propsat ikony
    injectSkillIcons();
  }

  function openLightbox(btn) {
    if (!lightbox || !lightboxImg) return;
    
    // ZMĚNA ZDE: Hledám obrázek uvnitř tlačítka
    const smallImg = btn.querySelector("img");
    
    // Pokud tam obrázek je a má zdroj, použiju ho. 
    // Pokud ne, zkusím původní data-img (jako zálohu).
    const src = (smallImg && smallImg.src) ? smallImg.src : (btn.getAttribute("data-img") || "");

    lightboxImg.src = src;
    
    lightboxImg.alt = btn.dataset.title || "";
    if (lightboxTitle) lightboxTitle.textContent = btn.dataset.title || "";
    if (lightboxMeta) lightboxMeta.textContent = btn.dataset.meta || "";
    if (lightboxDesc) lightboxDesc.textContent = btn.dataset.desc || "";
    if (lightboxList) {
      lightboxList.innerHTML = "";
      const parts = (btn.dataset.bullets || "").split("|").map(s => s.trim()).filter(Boolean);
      parts.forEach(t => {
        const li = document.createElement("li");
        li.textContent = t;
        lightboxList.appendChild(li);
      });
    }
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
    document.body.style.overflow = "";
  }

  const orbit = document.querySelector(".orbit");
  const photo = document.querySelector(".orbit__photo");
  const items = Array.from(document.querySelectorAll(".orbit__item"));
  const fillPath = document.querySelector(".orbit__arcFill");
  const basePath = document.querySelector(".orbit__arcBase");

  function setArcProgress(progress){
    if (!fillPath) return;
    const L = Number(fillPath.dataset.len || 0);
    if (!L) return;
    const draw = Math.max(0, Math.min(L, L * progress));
    fillPath.style.strokeDasharray = `${draw} ${L}`;
  }

  function positionItems() {
    if (!orbit || !photo || items.length === 0) return;

    const orbitRect = orbit.getBoundingClientRect();
    const photoRect = photo.getBoundingClientRect();
    const cx = orbitRect.width / 2;
    const cy = orbitRect.height / 2;

    const photoRadius = Math.min(photoRect.width, photoRect.height) / 2;
    const r = photoRadius + Math.max(70, orbitRect.width * 0.13);
    const n = items.length;

    items.forEach((el, i) => {
      const t = (i + 1) / (n + 1);
      const angleDeg = -90 + t * 180;
      const angle = (angleDeg * Math.PI) / 180;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      el.style.left = `${x}px`;
      el.style.top = `${y}px`;
      el.dataset.progress = String(t);
    });

    if (fillPath && basePath){
      const L = basePath.getTotalLength();
      fillPath.style.strokeDasharray = `0 ${L}`;
      fillPath.dataset.len = String(L);
    }
  }

  function setupOrbitHover() {
    items.forEach((el) => {
      const on = () => setArcProgress(parseFloat(el.dataset.progress || "0"));
      const off = () => setArcProgress(0);
      el.addEventListener("mouseenter", on);
      el.addEventListener("focus", on);
      el.addEventListener("mouseleave", off);
      el.addEventListener("blur", off);
    });
  }

  function setupWork() {
    const medias = Array.from(document.querySelectorAll(".workMedia"));
    const canHover = window.matchMedia && window.matchMedia("(hover: hover)").matches;

    medias.forEach(btn => {
      btn.style.setProperty("--mx", "50%");
      btn.style.setProperty("--my", "50%");

      btn.addEventListener("pointermove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width) * 100;
        const y = ((e.clientY - r.top) / r.height) * 100;
        btn.style.setProperty("--mx", `${x}%`);
        btn.style.setProperty("--my", `${y}%`);

        if (cursorTip && canHover) {
          cursorTip.style.left = `${e.clientX + 14}px`;
          cursorTip.style.top = `${e.clientY + 14}px`;
        }
      });

      btn.addEventListener("pointerenter", (e) => {
        if (cursorTip && canHover) {
          cursorTip.classList.add("is-on");
          cursorTip.style.left = `${e.clientX + 14}px`;
          cursorTip.style.top = `${e.clientY + 14}px`;
        }
      });

      btn.addEventListener("pointerleave", () => {
        if (cursorTip) cursorTip.classList.remove("is-on");
      });

      btn.addEventListener("click", () => openLightbox(btn));
    });
  }

  let revealObserver = null;

  function setupReveal() {
    if (revealObserver) revealObserver.disconnect();

    const revealEls = Array.from(document.querySelectorAll("[data-reveal]"));
    const trails = Array.from(document.querySelectorAll("[data-trail]"));

    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target;
        if (el.hasAttribute("data-trail")) {
          if (entry.isIntersecting) el.classList.add("is-drawn");
          else el.classList.remove("is-drawn");
          return;
        }
        if (entry.isIntersecting) el.classList.add("is-in");
        else el.classList.remove("is-in");
      });
    }, { threshold: 0.18 });

    revealEls.forEach(el => revealObserver.observe(el));
    trails.forEach(el => revealObserver.observe(el));
  }

  function setupLangToggle() {
    document.querySelectorAll(".langToggle__btn").forEach(btn => {
      btn.addEventListener("click", () => applyLang(btn.dataset.lang));
    });
  }

  document.addEventListener("click", (e) => {
    const closeEl = e.target.closest("[data-close]");
    if (closeEl) closeLightbox();

    const a = e.target.closest("a[href^='#']");
    if (a) {
      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  positionItems();
  window.addEventListener("resize", positionItems);

  setupOrbitHover();
  setupWork();
  setupLangToggle();

  // NEW: icons on load
  injectSkillIcons();

  const saved = localStorage.getItem("lang");
  applyLang(saved === "en" ? "en" : "cs");
})();

