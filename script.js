window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const images = document.querySelectorAll(".slide-img");

  images.forEach((img, i) => {
    gsap.to(img, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: img,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: true,
        pinSpacing: false,
      }
    });
  });
});
