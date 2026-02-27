const heroImage = document.querySelector(".center-image");
const sections = document.querySelectorAll("main section");

// Hero image fades in
heroImage.classList.add("reveal", "reveal-fade");

// Alternate left/right for sections
sections.forEach((section, index) => {
  section.classList.add("reveal");

  if (index % 2 === 0) {
    section.classList.add("reveal-left");
  } else {
    section.classList.add("reveal-right");
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2
  }
);

// Observe everything
observer.observe(heroImage);
sections.forEach(section => observer.observe(section));