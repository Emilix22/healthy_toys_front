const scrollHeader = () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    let nav = document.querySelector("nav");
    header && header.classList.toggle("scrollDown", window.scrollY > 0);
    nav && nav.classList.toggle("navScroll", window.scrollY > 0);
  });
};

export default scrollHeader;
