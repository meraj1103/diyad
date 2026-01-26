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
// Scroll fade-in for cards
const cards = document.querySelectorAll(".card");
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
cards.forEach(card=>observer.observe(card));

// Mouse move parallax for stars
const stars = document.querySelector('.stars');
document.addEventListener('mousemove', e=>{
    const x = (e.clientX/window.innerWidth-0.5)*40;
    const y = (e.clientY/window.innerHeight-0.5)*40;
    stars.style.transform = `translate(${x}px,${y}px)`;
});
