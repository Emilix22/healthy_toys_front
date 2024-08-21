const scrollHeader = () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector("header");
    header && header.classList.toggle("scrollDown", window.scrollY > 0);
  });
};

export default scrollHeader;
