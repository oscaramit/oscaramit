NodeList.prototype.indexOf = Array.prototype.indexOf;

const scrollBtn = document.querySelector(".scroll-btn");
window.onscroll = () => {
  console.log("hi");
  if (window.scrollY > 1400) {
    scrollBtn.classList.remove("d-none");
  } else {
    scrollBtn.classList.add("d-none");
  }
};
scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

const FAQBTNS = document.querySelectorAll(".FAQ-btn");
const FAQCOL = document.querySelectorAll(".FAQ");
let oldIndex = 0;
let x = 0;
FAQBTNS.forEach((btn) => {
  let newIndex = FAQBTNS.indexOf(btn);
  btn.addEventListener("click", () => {
    switch (newIndex) {
      case 0:
        x = 0;
        break;
      case 1:
        x = 4;
        break;
      case 2:
        x = 11;
        break;
      case 3:
        x = 16;
        break;
      case 4:
        x = 20;
        break;
      case 5:
        x = 26;
        break;
    }
    if (newIndex != oldIndex) {
      FAQCOL[newIndex].classList.remove("d-none");
      FAQCOL[oldIndex].classList.add("d-none");
      FAQBTNS[newIndex].classList.add("btn-focus");
      FAQBTNS[oldIndex].classList.remove("btn-focus");
      oldIndex = newIndex;
    }
  });
});

const ICONS = document.querySelectorAll(".FAQ-ICON");
const CONTENT = document.querySelectorAll(".FAQ-CONTENT");
const FAQBOX = document.querySelectorAll(".FAQ-BOX");

ICONS.forEach((icon) => {
  icon.addEventListener("click", () => {
    let Index = ICONS.indexOf(icon);
    if (icon.classList.contains("fa-plus")) {
      for (let i = 0; i < ICONS.length; i++) {
        ICONS[i].classList.add("fa-plus");
        ICONS[i].classList.remove("fa-minus", "blue");
        CONTENT[i].classList.add("d-none");
        FAQBOX[i].style.background = "rgb(245, 245, 245)";
      }
      icon.classList.add("fa-minus", "blue");
      icon.classList.remove("fa-plus");
      CONTENT[Index].classList.remove("d-none");
      FAQBOX[Index].style.background = "rgb(255, 255, 255)";
    } else {
      icon.classList.remove("fa-minus", "blue");
      icon.classList.add("fa-plus");
      CONTENT[Index].classList.add("d-none");
      FAQBOX[Index].style.background = "rgb(245, 245, 245)";
    }
  });
});
