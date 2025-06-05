// Insert all images automatically from the photos folder
const gallery = document.querySelector('.gallery');
const totalImages = 10; // Change based on number of photos

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `${i}.jpg`; 
  gallery.appendChild(img);
}

// Scroll-triggered reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.gallery img').forEach(img => {
  observer.observe(img);
});
