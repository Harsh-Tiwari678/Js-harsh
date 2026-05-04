const images = document.querySelectorAll('.lazy-image');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target; // image nikal ke store kar li img variable mein 
      img.classList.add('loaded'); // add class for fade-in effect
      img.src = img.dataset.src; // load real image

      observer.unobserve(img);   // stop observing after load
    }
  });
}, {
  root: null,
  threshold: 0.1
});

images.forEach((img) => {
  observer.observe(img);
});