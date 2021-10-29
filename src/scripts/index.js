(() => {
  const desktopWidth = 1200;
  console.log(window.screen.width);
  if (window.screen.width >= desktopWidth) return;

  const burger = document.querySelector('[data-burger="burger"]');
  const openHeaderMenu = document.querySelector('[data-contact="open"]');
  const headerMenu = document.getElementById("header-menu");
  const headerHero = document.querySelector(".header-hero > .container");

  const openPassportMenu = document.querySelector(
    '[data-contact="passport__open"]'
  );
  const passportMenu = document.getElementById("js-new-passport__contact-us");

  const toggleHeaderFunc = () => {
    headerMenu.classList.toggle("open-menu");
    burger.classList.toggle("is-open");
    headerHero.classList.toggle("visible");
  };
  openHeaderMenu.addEventListener("click", toggleHeaderFunc);
  burger.addEventListener("click", toggleHeaderFunc);

  const togglePassportFunc = () => {
    passportMenu.classList.toggle("passport__open-menu");

    // headerHero.classList.toggle("visible");
  };
  openPassportMenu.addEventListener("click", togglePassportFunc);
})();
