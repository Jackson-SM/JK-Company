const elementSections = document.querySelectorAll('section > *');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  })
}, {
  rootMargin: "-100px",
})

elementSections.forEach(element => {
  observer.observe(element)
})