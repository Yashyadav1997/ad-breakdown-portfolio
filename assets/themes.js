/* Brand themes. Fonts are free Google Fonts chosen as close stand-ins for each brand's own typeface. */
(function () {
  function T(bg, card, ink, mute, line, accent, hero, heroInk, badge, badgeInk, head, body, extra) {
    var t = { bg: bg, card: card, ink: ink, mute: mute, line: line, accent: accent, hero: hero, heroInk: heroInk, badge: badge, badgeInk: badgeInk, head: head, body: body, radius: "10px", caps: "none", style: "normal" };
    for (var k in extra) t[k] = extra[k];
    return t;
  }
  function F(name, weights, fallback) { return { name: name, weights: weights, fallback: fallback || "sans-serif" }; }
  function mix(base, over) { var t = {}, k; for (k in base) t[k] = base[k]; for (k in over) t[k] = over[k]; return t; }

  var inter = F("Inter", "400;600;700"), oswald = F("Oswald", "500;700"), anton = F("Anton"), nunito = F("Nunito", "400;700;900"),
      nunitoSans = F("Nunito Sans", "400;600;800"), poppins = F("Poppins", "400;600;800"), baloo = F("Baloo 2", "500;700;800"),
      quicksand = F("Quicksand", "500;700"), merri = F("Merriweather", "400;700", "serif"), source = F("Source Sans 3", "400;600;700"),
      workSans = F("Work Sans", "400;600;700"), fredoka = F("Fredoka", "500;700"), lobster = F("Lobster Two", "400;700", "cursive"),
      pacifico = F("Pacifico", "", "cursive"), cormorant = F("Cormorant Garamond", "500;700", "serif"), dmSans = F("DM Sans", "400;500;700");

  var nike = T("#ffffff", "#f5f5f5", "#111111", "#5f5f5f", "#e5e5e5", "#c43f00", "#111111", "#ffffff", "#fa5400", "#111111", anton, inter, { radius: "0px", caps: "uppercase" });
  var apple = T("#fbfbfd", "#ffffff", "#1d1d1f", "#6e6e73", "#d2d2d7", "#0066cc", "#000000", "#f5f5f7", "#1d1d1f", "#ffffff", inter, inter, { radius: "18px" });
  var cadbury = T("#f7f2fb", "#ffffff", "#2a1150", "#6b5a85", "#e2d6ef", "#4b1e8b", "linear-gradient(135deg,#2f0f63,#5b2a9d)", "#ffffff", "#4b1e8b", "#ffd100", lobster, F("Mulish", "400;600;700"), { radius: "16px" });
  var mcd = T("#fffaf0", "#ffffff", "#27251f", "#6f6a5c", "#f1e4c3", "#b81d13", "#da291c", "#ffffff", "#ffc72c", "#27251f", fredoka, nunitoSans, { radius: "16px" });

  var brands = {
    "nike": nike,
    "dove": T("#fdfcfa", "#ffffff", "#1b2f55", "#66728c", "#e8e3da", "#3a5c91", "linear-gradient(180deg,#ffffff,#e9e4dc)", "#1b2f55", "#1b2f55", "#ffffff", cormorant, nunitoSans, { radius: "20px" }),
    "coca-cola": T("#fff8f7", "#ffffff", "#1e1e1e", "#6d5f5f", "#f3dada", "#c9111c", "#e61a27", "#ffffff", "#e61a27", "#ffffff", lobster, workSans, { radius: "14px" }),
    "old-spice": T("#f2f2f2", "#ffffff", "#1d3557", "#58667c", "#d9dde3", "#a82a30", "#1d3557", "#ffffff", "#c1363b", "#ffffff", F("Alfa Slab One", "", "serif"), source, { radius: "4px" }),
    "apple": apple,
    "apple-nature": mix(apple, { accent: "#256b29", hero: "linear-gradient(135deg,#12361c,#2e7d32)", badge: "#2e7d32" }),
    "airbnb": T("#ffffff", "#ffffff", "#222222", "#6a6a6a", "#dddddd", "#c8184a", "linear-gradient(135deg,#e61e4d,#bd1e59)", "#ffffff", "#d70f4c", "#ffffff", dmSans, dmSans, { radius: "16px" }),
    "always": T("#fff6fa", "#ffffff", "#2b2b2b", "#74606a", "#f5d7e4", "#b0245f", "#b0245f", "#ffffff", "#00847f", "#ffffff", poppins, poppins, { radius: "14px" }),
    "red-bull": T("#f4f6fb", "#ffffff", "#001e62", "#56618a", "#d9deed", "#c00936", "linear-gradient(120deg,#001e62 60%,#db0a40)", "#ffffff", "#ffc72c", "#001e62", F("Barlow Condensed", "600;800"), F("Barlow", "400;600;700"), { radius: "4px", caps: "uppercase", style: "italic" }),
    "cadbury": cadbury,
    "volvo": T("#f4f5f6", "#ffffff", "#141f33", "#5d6675", "#d5d8dd", "#1d3557", "linear-gradient(135deg,#0e1a30,#1d3557)", "#ffffff", "#1d3557", "#ffffff", F("Libre Franklin", "500;800"), F("Libre Franklin", "500;800"), { radius: "2px", caps: "uppercase" }),
    "sony": T("#0b0b0d", "#17171b", "#f4f4f5", "#a9a9b2", "#2c2c33", "#ffd400", "#000000", "#ffffff", "#f4f4f5", "#0b0b0d", F("Jost", "500;700"), F("Jost", "500;700"), { radius: "6px", stripe: "linear-gradient(90deg,#ffd400,#ff3b30 50%,#007aff)" }),
    "evian": T("#f3fbff", "#ffffff", "#123a52", "#5a7788", "#d3ecf8", "#00709f", "linear-gradient(180deg,#bfe8fb,#ffffff)", "#00577c", "#e5005b", "#ffffff", quicksand, quicksand, { radius: "22px" }),
    "chipotle": T("#f7efe3", "#fffaf2", "#451400", "#7a5a4a", "#e6d5bf", "#a81612", "#a81612", "#ffffff", "#451400", "#ffffff", oswald, source, { radius: "3px", caps: "uppercase" }),
    "patagonia": T("#f6f5f2", "#ffffff", "#161616", "#64635f", "#dedbd4", "#9a4a12", "linear-gradient(180deg,#2b2350 0%,#7a3b6b 45%,#e0703a 80%,#f2b35b 100%)", "#ffffff", "#000000", "#ffffff", F("Libre Baskerville", "400;700", "serif"), F("Source Serif 4", "400;600;700", "serif"), { radius: "0px" }),
    "gillette": T("#f5f6f8", "#ffffff", "#0a0a0a", "#5e6168", "#d8dbe0", "#0b3fa8", "linear-gradient(135deg,#000000,#0b2d72)", "#ffffff", "#000000", "#ffffff", F("Saira", "500;800"), inter, { radius: "3px", caps: "uppercase" }),
    "heinz": T("#fbf6ee", "#ffffff", "#2b1a14", "#75625a", "#eaddca", "#a8141d", "#c1121f", "#ffffff", "#2b1a14", "#ffffff", F("DM Serif Display", "", "serif"), dmSans, { radius: "6px" }),
    "oreo": T("#f2f7fd", "#ffffff", "#0d1b33", "#576580", "#d6e3f3", "#0057a6", "linear-gradient(135deg,#000000,#0057a6)", "#ffffff", "#000000", "#ffffff", fredoka, nunito, { radius: "24px" }),
    "wendys": T("#fffaf8", "#ffffff", "#2b2b2b", "#6f6464", "#f2dcda", "#be1432", "#e2203d", "#ffffff", "#1f7a8c", "#ffffff", F("Kaushan Script", "", "cursive"), nunito, { radius: "12px" }),
    "spotify": T("#121212", "#1c1c1c", "#ffffff", "#b3b3b3", "#2e2e2e", "#1ed760", "linear-gradient(135deg,#1db954,#f037a5)", "#121212", "#1db954", "#121212", F("Figtree", "400;600;900"), F("Figtree", "400;600;900"), { radius: "12px" }),
    "duolingo": T("#ffffff", "#ffffff", "#3c3c3c", "#6f6f6f", "#e5e5e5", "#367c00", "#58cc02", "#143800", "#1cb0f6", "#06283a", nunito, nunito, { radius: "18px" }),
    "ryanair": T("#f4f6fb", "#ffffff", "#0b1f4d", "#586383", "#d8deee", "#073590", "#073590", "#ffffff", "#f1c933", "#073590", F("Roboto Condensed", "500;800"), F("Roboto", "400;500;700"), { radius: "6px" }),
    "ocean-spray": T("#fdf6f5", "#ffffff", "#1f2a44", "#66697a", "#eed9da", "#a31228", "linear-gradient(135deg,#7d0f20,#b4162d)", "#ffffff", "#1f2a44", "#ffffff", merri, source, {}),
    "mcdonalds": mcd,
    "mcd-travis": mix(mcd, { bg: "#241611", card: "#33211a", ink: "#fbeedc", mute: "#c3ab9a", line: "#4c352b", accent: "#ffc72c", hero: "linear-gradient(135deg,#1a0f0a,#6b3a2a)", heroInk: "#ffc72c" }),
    "mcd-grimace": mix(mcd, { bg: "#f6f0fa", line: "#e3d3ee", accent: "#6a2c91", hero: "#6a2c91", heroInk: "#ffffff" }),
    "burger-king": T("#f5ebdc", "#fdf8ef", "#502314", "#7d5a4b", "#e5d3ba", "#b81f00", "#d62300", "#fff4e3", "#502314", "#f5ebdc", baloo, nunitoSans, { radius: "18px" }),
    "kfc": T("#ffffff", "#f8f4f2", "#1a1a1a", "#645e5c", "#eadfdc", "#c00024", "#e4002b", "#ffffff", "#000000", "#ffffff", oswald, workSans, { radius: "2px", caps: "uppercase" }),
    "tide": T("#fff8f2", "#ffffff", "#0b2a5b", "#586884", "#f3dfcd", "#0057b0", "linear-gradient(135deg,#ff6600,#ff9a1f)", "#0b2a5b", "#0066cc", "#ffffff", F("Fugaz One"), source, {}),
    "amazon": T("#f3f6f8", "#ffffff", "#232f3e", "#5c6b7a", "#d9e1e8", "#006f96", "#232f3e", "#ffffff", "#00a8e1", "#0f1720", F("Open Sans", "400;600;800"), F("Open Sans", "400;600;800"), { radius: "8px" }),
    "barbie": T("#ffeef7", "#ffffff", "#4a0a2c", "#8a4a6c", "#ffc9e3", "#b8106a", "#e0218a", "#ffffff", "#c9187a", "#ffffff", pacifico, poppins, { radius: "22px" }),
    "ikea": T("#ffffff", "#f5f5f5", "#111111", "#5c5c5c", "#dfdfdf", "#0058a3", "#0058a3", "#ffdb00", "#ffdb00", "#003a6c", F("Noto Sans", "400;600;900"), F("Noto Sans", "400;600;900"), { radius: "4px" }),
    "dollar-shave": T("#f6f4ef", "#ffffff", "#1b3a5c", "#5d6d80", "#e0dbd0", "#b92632", "#1b3a5c", "#ffffff", "#c92c39", "#ffffff", F("Archivo Black"), F("Archivo", "400;600;700"), { radius: "6px" }),
    "blendtec": T("#f5f5f5", "#ffffff", "#1c1c1c", "#646464", "#dcdcdc", "#b51f1f", "linear-gradient(135deg,#111111,#d62828)", "#ffffff", "#d62828", "#ffffff", F("Russo One"), source, { radius: "4px" }),
    "liquid-death": T("#0a0a0a", "#161616", "#f2ede1", "#aaa59a", "#2d2b27", "#ff5a4f", "#000000", "#f2ede1", "#f2ede1", "#0a0a0a", F("Pirata One", "", "serif"), F("Special Elite", "", "monospace"), { radius: "0px" }),
    "prime": T("#0c0f1a", "#161b2b", "#ffffff", "#aab3c9", "#29314a", "#00c2ff", "linear-gradient(110deg,#00c2ff,#ffd600 50%,#ff4081)", "#0c0f1a", "#ffd600", "#0c0f1a", anton, inter, { radius: "14px", caps: "uppercase" }),
    "poo-pourri": T("#fdf3f7", "#ffffff", "#3b3b3b", "#7b6a71", "#f1d7e1", "#99456a", "#e8b4c8", "#3b2430", "#3b3b3b", "#ffffff", F("Playfair Display", "500;700", "serif"), F("Lato", "400;700"), { radius: "20px" }),
    "amul": T("#fffdf2", "#ffffff", "#231a10", "#6f6350", "#f4e6ae", "#c20510", "#ffd400", "#a8040e", "#e30613", "#ffffff", baloo, nunito, { radius: "14px" }),
    "fevicol": T("#fffbea", "#ffffff", "#0d2c4a", "#5b6b78", "#f3e3a0", "#005ba6", "#f7c600", "#003f75", "#005ba6", "#ffffff", F("Alfa Slab One", "", "serif"), source, { radius: "6px" }),
    "tata-tea": T("#f4e9d8", "#fcf6ec", "#2b2b2b", "#6e6256", "#e2d0b4", "#8b1d1d", "#8b1d1d", "#fbeed9", "#2f5d3a", "#ffffff", merri, source, { radius: "8px" }),
    "surf-excel": T("#f2f8fd", "#ffffff", "#0b2f55", "#566d85", "#d3e6f5", "#005a9e", "linear-gradient(135deg,#00477d,#0066b3)", "#ffffff", "#e30613", "#ffffff", baloo, nunito, { radius: "18px" }),
    "google": T("#ffffff", "#ffffff", "#202124", "#5f6368", "#dadce0", "#1a62c9", "#f1f3f4", "#202124", "#1a62c9", "#ffffff", F("Outfit", "400;600;700"), F("Roboto", "400;500;700"), { radius: "16px", stripe: "linear-gradient(90deg,#4285f4 25%,#ea4335 0 50%,#fbbc05 0 75%,#34a853 0)" }),
    "cred": T("#0d0d0d", "#161616", "#f5f5f5", "#a3a3a3", "#2a2a2a", "#d9d9d9", "linear-gradient(145deg,#000000,#262626)", "#ffffff", "#e8e8e8", "#0d0d0d", F("Manrope", "400;600;800"), F("Manrope", "400;600;800"), { radius: "0px", caps: "uppercase" }),
    "vicks": T("#f1fafd", "#ffffff", "#0d3447", "#587482", "#d2ebf4", "#00709c", "linear-gradient(135deg,#005f85,#007fae)", "#ffffff", "#17724f", "#ffffff", quicksand, nunitoSans, { radius: "18px" }),
    "airtel": T("#fff7f7", "#ffffff", "#222222", "#6d6262", "#f3dada", "#c40000", "#e40000", "#ffffff", "#e40000", "#ffffff", poppins, poppins, {}),
    "vodafone": T("#ffffff", "#f6f6f6", "#222222", "#626262", "#e6e6e6", "#c40000", "#e60000", "#ffffff", "#222222", "#ffffff", F("Lexend", "400;600;800"), F("Lexend", "400;600;800"), { radius: "6px" }),
    "pepsi": T("#f3f6fc", "#ffffff", "#0a1633", "#566183", "#d6deef", "#004b93", "linear-gradient(120deg,#004b93 55%,#000000)", "#ffffff", "#e32934", "#ffffff", anton, inter, { radius: "10px", caps: "uppercase" }),
    "bud-light": T("#f4f7fc", "#ffffff", "#0b2559", "#586786", "#d7e0f0", "#0b3d91", "#0b3d91", "#ffffff", "#d4af37", "#0b2559", oswald, source, { caps: "uppercase" }),
    "tanishq": T("#fff9ea", "#fffdf6", "#3f1212", "#7c5d4c", "#ecdcae", "#8a6207", "linear-gradient(135deg,#4d1414,#6b1e1e)", "#f5d98b", "#6b1e1e", "#f5d98b", cormorant, F("Lato", "400;700"), { radius: "4px" })
  };

  var reports = {
    "nike-you-cant-stop-us": "nike", "nike-dream-crazy": "nike", "dove-real-beauty-sketches": "dove", "coca-cola-share-a-coke": "coca-cola",
    "old-spice-the-man-your-man-could-smell-like": "old-spice", "apple-shot-on-iphone": "apple", "apple-mother-nature": "apple-nature",
    "airbnb-we-accept": "airbnb", "always-likeagirl": "always", "red-bull-stratos": "red-bull", "cadbury-gorilla": "cadbury",
    "volvo-trucks-epic-split": "volvo", "sony-bravia-balls": "sony", "evian-roller-babies": "evian", "chipotle-back-to-the-start": "chipotle",
    "patagonia-dont-buy-this-jacket": "patagonia", "gillette-the-best-men-can-be": "gillette", "heinz-draw-ketchup": "heinz",
    "oreo-dunk-in-the-dark": "oreo", "wendys-twitter-nuggs-for-carter": "wendys", "spotify-wrapped": "spotify", "duolingo-death-of-duo": "duolingo",
    "ryanair-tiktok": "ryanair", "ocean-spray-cranberry-tiktok": "ocean-spray", "mcdonalds-travis-scott-meal": "mcd-travis",
    "mcdonalds-grimace-shake": "mcd-grimace", "burger-king-moldy-whopper": "burger-king", "kfc-fck-apology": "kfc", "tide-its-a-tide-ad": "tide",
    "amazon-alexa-loses-her-voice": "amazon", "barbie-the-movie-campaign": "barbie", "ikea-bookbook": "ikea",
    "dollar-shave-club-our-blades": "dollar-shave", "blendtec-will-it-blend": "blendtec", "liquid-death-murder-your-thirst": "liquid-death",
    "prime-hydration": "prime", "poo-pourri-girls-dont-poop": "poo-pourri", "amul-topicals": "amul", "cadbury-not-just-a-cadbury-ad": "cadbury",
    "fevicol-ka-mazboot-jod": "fevicol", "tata-tea-jaago-re": "tata-tea", "surf-excel-daag-acche-hain": "surf-excel", "google-reunion": "google",
    "cred-indiranagar-ka-gunda": "cred", "vicks-touch-of-care": "vicks", "airtel-har-ek-friend-zaroori": "airtel", "vodafone-zoozoos": "vodafone",
    "pepsi-live-for-now-kendall-jenner": "pepsi", "bud-light-dylan-mulvaney": "bud-light", "tanishq-ekatvam": "tanishq"
  };

  var loaded = {};
  function loadFont(f) {
    if (loaded[f.name]) return;
    loaded[f.name] = true;
    var l = document.createElement("link");
    l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=" + f.name.replace(/ /g, "+") + (f.weights ? ":wght@" + f.weights : "") + "&display=swap";
    document.head.appendChild(l);
  }
  function stack(f) { return "'" + f.name + "'," + f.fallback; }

  function apply(el, slug) {
    var t = brands[reports[slug]];
    if (!t) return;
    loadFont(t.head);
    loadFont(t.body);
    var vars = {
      bg: t.bg, card: t.card, ink: t.ink, mute: t.mute, line: t.line, accent: t.accent, hero: t.hero, "hero-ink": t.heroInk,
      badge: t.badge, "badge-ink": t.badgeInk, hfont: stack(t.head), bfont: stack(t.body), radius: t.radius, hcase: t.caps,
      hstyle: t.style, h2case: t.head.fallback === "cursive" || t.head.name === "Pirata One" ? "none" : "uppercase",
hweight: t.head.weights ? t.head.weights.split(";").pop() : "400", stripe: t.stripe || "none"
    };
    for (var k in vars) el.style.setProperty("--" + k, vars[k]);
  }

  window.AdThemes = { apply: apply };
  var page = location.pathname.split("/").pop().replace(/\.html$/, "");
  if (reports[page]) apply(document.documentElement, page);
})();
