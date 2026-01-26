// Reveal photos on scroll (both up and down)
const cards = document.querySelectorAll('.photo-card');

function checkVisibility() {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    const inView = rect.top < window.innerHeight - 100 && rect.bottom > 100;

    if (inView) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);