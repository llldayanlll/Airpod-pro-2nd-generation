const totalImages = 6;  // Number of your images

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;

  for (let i = 1; i <= totalImages; i++) {
    const img = document.getElementById(`img${i}`);
    if (!img) continue;

    const imgPosition = (i - 1) * windowHeight * 0.8; // adjust trigger position

    if (scrollTop + windowHeight > imgPosition) {
      img.style.opacity = 1;
      img.style.transform = 'translateY(0)';
    } else {
      img.style.opacity = 0;
      img.style.transform = 'translateY(50px)';
    }
  }
});

// Dynamically create image elements
window.onload = () => {
  const container = document.getElementById('container');
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.id = `img${i}`;
    img.src = `${i}.jpg`;   // load images from root folder
    img.style.opacity = 0;
    img.style.transform = 'translateY(50px)';
    img.style.transition = 'all 0.8s ease-out';
    img.style.width = '80vw';
    img.style.display = 'block';
    img.style.margin = '50px auto';
    container.appendChild(img);
  }
};
