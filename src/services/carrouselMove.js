const carrouselMove = (e) => {
  let slider = document.querySelector(".slider");
  let sliderList = document.querySelector(".slider .list");
  let thumbnail = document.querySelector(".slider .thumbnail");
  let thumbnailItems = document.querySelectorAll(".thumbnail .item");
  let sliderItems = sliderList.querySelectorAll(".item");

  const type = e.target.dataset.type;

  if (type === "next") {
    sliderList.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    slider.classList.add("next");
  } else {
    sliderList.prepend(sliderItems[sliderItems.length - 1]);
    thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1]);
    slider.classList.add("prev");
  }

  slider.addEventListener(
    "animationend",
    function () {
      if (type === "next") {
        slider.classList.remove("next");
      } else {
        slider.classList.remove("prev");
      }
    },
    { once: true }
  ); // Remove the event listener after it's triggered once
};

export default carrouselMove;
