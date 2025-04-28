function locomotive(){
  (function () {
      const locomotiveScroll = new LocomotiveScroll();
  })();
}
locomotive();


gsap.from("#foot-end h1 span", {
    y:200,
    opacity: 0,
    stagger: 0.1,
    duration: 0.3,
    scrollTrigger: {
      trigger: "#foot-end",
      scroller: "body",
      start: "top 70%",
      end: "top 45%",
    //   markers: true,
      scrub: 3,
    },
  });
