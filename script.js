const totalImages = 6; // Update if you add more images

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  for (let i = 1; i <= totalImages; i++) {
    const img = document.getElementById(`img${i}`);
    if (!img) continue;

    const triggerPosition = (i - 1) * windowHeight * 0.8;

    if (scrollTop + windowHeight > triggerPosition) {
      img.style.opacity = 1;
      img.style.transform = 'translateY(0)';
    } else {
      img.style.opacity = 0;
      img.style.transform = 'translateY(50px)';
    }
  }
});

window.onload = () => {
  const container = document.querySelector('.gallery');
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.id = `img${i}`;
    img.src = `${i}.jpg`; // Your images: 1.jpg to 6.jpg in root
    container.appendChild(img);
  }
};
