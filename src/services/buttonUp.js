const buttonUp = () => {
  window.addEventListener("scroll", () => {
    let button = document.querySelector(".buttonUp");
    button && button.classList.toggle("scrollButton", window.scrollY > 0);
  });
};

export default buttonUp;
