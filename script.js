window.addEventListener("load", () => {
  gsap.registerPlugin(ScrollTrigger);

  const panels = document.querySelectorAll(".panel");

  panels.forEach((panel, i) => {
    const img = panel.querySelector("img");

    gsap.to(img, {
      opacity: 1,
      scale: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: panel,
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });
  });
});
