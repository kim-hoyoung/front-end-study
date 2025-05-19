const slides = document.querySelectorAll(".slide");

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

let counter = 0;

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const slideImg = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

const goPrev = () => {
  if (counter === 0) {
    counter = slides.length;
  }
  counter--;
  slideImg();
};

const goNext = () => {
  if (counter === slides.length - 1) {
    counter = -1;
  }
  counter++;
  slideImg();
};

prevBtn.addEventListener("click", goPrev);
nextBtn.addEventListener("click", goNext);
