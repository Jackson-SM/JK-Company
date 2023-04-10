const elementSections = document.querySelectorAll('section > *');
const footers = document.querySelectorAll('footer');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  })
}, {
  rootMargin: "200px",
  threshold: 1
})

elementSections.forEach(element => {
  observer.observe(element)
})

footers.forEach(footer => {
  observer.observe(footer);
})