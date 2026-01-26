// Reveal photo cards on scroll
const photoCards = document.querySelectorAll('.photo-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  },
  { threshold: 0.2 }
);

photoCards.forEach(card => observer.observe(card));
