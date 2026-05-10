const sliders = {
  slides1: 0,
  slides2: 0,
  slides3: 0,
};

function moveSlide(id, direction) {
  const slider = document.getElementById(id);

  if (!slider) return;

  const totalSlides = slider.children.length;

  sliders[id] += direction;

  if (sliders[id] < 0) {
    sliders[id] = totalSlides - 1;
  }

  if (sliders[id] >= totalSlides) {
    sliders[id] = 0;
  }

  slider.style.transform = translateX(`-${sliders[id] * 100}%`);
}
