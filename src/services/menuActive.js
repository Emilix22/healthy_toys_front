const menuActive = () => {
  const menu = document.querySelector("nav");
  const brs = document.querySelectorAll(".hambMenu span");

  menu.classList.toggle("activeMenu");
  brs.forEach((child) => {
    child.classList.toggle("animated");
  });
};

export default menuActive;
