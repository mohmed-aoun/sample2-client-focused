const carousel = document.querySelector('.carousel');
const cards = Array.from(document.querySelectorAll('.carousel-card'));
const status = document.querySelector('.carousel-status');
const buttons = document.querySelectorAll('[data-direction]');
let currentIndex = 0;

const updateCarousel = (index) => {
  cards.forEach((card, cardIndex) => {
    card.classList.toggle('is-active', cardIndex === index);
  });
  if (status) {
    status.textContent = `Testimonial ${index + 1} of ${cards.length}`;
  }
};

const moveCarousel = (direction) => {
  if (!cards.length) return;
  if (direction === 'next') {
    currentIndex = (currentIndex + 1) % cards.length;
  } else {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  }
  updateCarousel(currentIndex);
};

buttons.forEach((button) => {
  button.addEventListener('click', () => moveCarousel(button.dataset.direction));
});

if (carousel) {
  carousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      moveCarousel('next');
    }
    if (event.key === 'ArrowLeft') {
      moveCarousel('prev');
    }
  });
}

updateCarousel(currentIndex);
