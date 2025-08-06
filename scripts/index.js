const menu = document.querySelector('#menu-icon');
const navList = document.querySelector('.nav-list');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navList.classList.toggle('open');
  document.documentElement.classList.toggle('no-scroll');
}

const navLink = document.querySelectorAll('.nav-list a');

navLink[0].addEventListener('click', closeMenu);
navLink[1].addEventListener('click', closeMenu);
navLink[2].addEventListener('click', closeMenu);
navLink[3].addEventListener('click', closeMenu);
navLink[4].addEventListener('click', closeMenu);

function closeMenu() {
  menu.classList.remove('bx-x');
  navList.classList.remove('open');
  document.documentElement.classList.remove('no-scroll');
}

const heroImgMobile = document.querySelector('.hero-img-container img');

function updateHeroImg() {
  if (window.innerWidth <= 900) {
    heroImgMobile.src = 'assets/images/gekko-mobile.png';
  } else {
    heroImgMobile.src = 'assets/images/gekko-img.png';
  }
}

function cardText() {
  const wingmanText = "A small, yellow creature that is able to appear around Gekko, Wingman's head bears resemblance to that of an axolotl with a dark gray metallic head-plate. He walks in a bipedal fashion and appears to be the most independent of Gekko's gang, and, as his name suggests, is Gekko’s Wingman.";
  const dizzyText = "Dizzy is a small blue armadillo-like creature which floats when idle. When attacking, she summons a bubble around her and fires a blue plasma-like substance out of her tail. The projectile she shoots has a slimy, sticky texture and is blue.";
  const moshpitText = "Gekko can summon Mosh at will and often wields him much like a grenade weapon. Mosh is similar to a frog egg as a sphere of green slimy liquid with large eyes. When used, he will seemingly make an area with more Moshes inside of it, shortly exploding afterward. ";
  const thrashText = "Thrash, a shark-like creature, originaly living in salt water (as seen in abyss) can be directly controlled by Gekko, but is also sentient when uncontrolled. Hovering and floating slightly above the ground, Thrash also seems to be the most shaky out of the bunch, though much like the other summons, still values Gekko's safety above all else.";

  document.querySelector('.wingman p').innerHTML = wingmanText;
  document.querySelector('.dizzy p').innerHTML = dizzyText;
  document.querySelector('.moshpit p').innerHTML = moshpitText;
  document.querySelector('.thrash p').innerHTML = thrashText;
}

if (window.location.pathname.endsWith("/index.html") || window.location.pathname === "/" || window.location.pathname === "/gekko-website/") {
  updateHeroImg();
  window.addEventListener("resize", updateHeroImg);

  cardText();
}

// for changing text in ability pages
function pagesText() {
  const wingmanParagraph = `
    <p>Wingman is Gekko's primary ability that launches a ground-based creature forward to scan for enemies in a wide cone. If an enemy is detected, Wingman charges toward them and, if close enough, jumps and releases a concussive blast. Wingman can also bounce off walls while scanning, and if the enemy escapes his range, he resumes moving in a straight line.</p>
    <p>Besides combat, Wingman can plant or defuse the spike using Alt Fire. On attack, Gekko can send him to plant the spike at a targeted location; on defense, Wingman can defuse it. He takes the shortest possible path, even jumping over obstacles. Wingman can be destroyed by enemy fire, turning into a globule that Gekko can reclaim to reset the cooldown. If not reclaimed in time, he disappears.</p>
  `;
  const dizzyParagraph = `
    <p>Dizzy is Gekko's Blind ability that launches a projectile which charges briefly before activating. Once active, Dizzy slows down and fires plasma blasts at any enemies in her line of sight within range, potentially hitting multiple targets. The blasts create a splash zone that blinds affected enemies by covering their screen and minimap with plasma, leaving only minimal edge visibility that fades over time.</p>
    <p>Dizzy cannot be avoided by looking away and will expire after a set duration or if destroyed by enemy fire. When she expires, she transforms into a dormant Globule that Gekko can later retrieve.</p>
  `;
  const moshpitParagraph = `
    <P>Mosh Pit is Gekko's Deterrent ability that must be equipped before use. When cast, Gekko throws Mosh as a projectile, or underhand with Alt Fire for a shorter range. Upon hitting a horizontal surface, Mosh duplicates and creates a large circular zone that rapidly expands from the point of impact.</p>
    <p>Any enemy caught in the area begins taking continuous damage immediately. After a short delay, the zone detonates, dealing multiple bursts of damage. Enemies within the large inner radius receive full damage, while those in the smaller outer radius take reduced damage.</p>
  `;
  const thrashParagraph = `
    <p>Thrash is Gekko's Intel ability that he must equip before use. When cast, Gekko takes control of Thrash, steering her along the ground while his body remains stationary and vulnerable. Thrash auto-moves forward, with limited vision and controls for direction and jumping. She can be commanded to lunge forward and explode, detaining any agents in the blast radius including Gekko and his allies  while shifting Gekkos view to third-person during the lunge.</p>
    <p>After the explosion or when her duration ends, Gekko regains control of his body, with his vision radius briefly limited before fully restoring. Thrash expires after her first use each round, whether by detonation, duration, enemy damage, or manual cancel. When she expires, she becomes a dormant Globule that Gekko can reclaim.</p>  
  `;
  
  const params = new URLSearchParams(window.location.search);
  const ability = params.get('ability');

    if (ability === "Wingman") {
      document.querySelector('.ability-pages-title h2').innerHTML = "Wingman";
      document.querySelector('.ability-pages-paragraph p').innerHTML = wingmanParagraph;
      document.querySelector('.ability-pages-img img').src = "../assets/images/wingman-picture.png";
    } else if (ability === "Dizzy") {
      document.querySelector('.ability-pages-title h2').innerHTML = "Dizzy";
      document.querySelector('.ability-pages-paragraph p').innerHTML = dizzyParagraph;
      document.querySelector('.ability-pages-img img').src = "../assets/images/dizzy-picture.png";
    } else if (ability === "Moshpit") {
      document.querySelector('.ability-pages-title h2').innerHTML = "Moshpit";
      document.querySelector('.ability-pages-paragraph p').innerHTML = moshpitParagraph;
      document.querySelector('.ability-pages-img img').src = "../assets/images/moshpit-picture.png";
    } else if (ability === "Thrash") {
      document.querySelector('.ability-pages-title h2').innerHTML = "Thrash";
      document.querySelector('.ability-pages-paragraph p').innerHTML = thrashParagraph;
      document.querySelector('.ability-pages-img img').src = "../assets/images/thrash-picture.png";
    }
  }

  if (window.location.pathname.includes("ability-pages.html")) {
    pagesText();
    
}

