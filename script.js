// Smooth reveal using IntersectionObserver
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
  { threshold: 0.15 }
);

photoCards.forEach(card => observer.observe(card));
