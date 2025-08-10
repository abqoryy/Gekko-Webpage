function toggleMenu() {
    const menu = document.querySelector('#menu-icon');
    const navList = document.querySelector('.nav-list');

    menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
    document.documentElement.classList.toggle('no-scroll');

    }

    function closeMenu() {
        menu.classList.remove('bx-x');
        navList.classList.remove('open');
        document.documentElement.classList.remove('no-scroll');
    }

    const navLink = document.querySelectorAll('.nav-list a');

    navLink[0].addEventListener('click', closeMenu);
    navLink[1].addEventListener('click', closeMenu);
    navLink[2].addEventListener('click', closeMenu);
    navLink[3].addEventListener('click', closeMenu);
    navLink[4].addEventListener('click', closeMenu);
}

function updateHeroImg() {
    const heroImgMobile = document.querySelector('.hero-img-container img');

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

export { toggleMenu, updateHeroImg, cardText };
