import { toggleMenu, cardText, updateHeroImg } from './home.mjs';
toggleMenu();
if (window.location.pathname.endsWith("/index.html") || window.location.pathname === "/" || window.location.pathname === "/gekko-website/") {
  updateHeroImg();
  window.addEventListener("resize", updateHeroImg);
  cardText();
}

import { pagesText } from './ability-pages.mjs';
if (window.location.pathname.includes("ability-pages.html")) {
  pagesText();
}


