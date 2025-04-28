function locomotive() {
  (function () {
    const locomotiveScroll = new LocomotiveScroll();
  })();
}
locomotive();

function vdoanimation() {
  gsap.set(".slidesm", { scale: 5 });
  var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".home",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
  });

  tl.to(
    ".video",
    {
      "--clip": "2.5%",
      ease: Power2,
    },
    "a"
  )
    .to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "a"
    )
    .to(".video", {
      opacity: 0,
      duration: 0,
    })
    .to(
      ".lft",
      {
        xPercent: -2,
        stagger: 0.01,
        ease: Power2,
      },
      "b"
    )
    .to(
      ".ryt",
      {
        xPercent: 2,
        stagger: 0.01,
        ease: Power2,
      },
      "b"
    )
    .to("#nav", {
      opacity: 1,
      backgroundColor: "var(--nav-bg-color)",
    });
}
vdoanimation();

function slides() {
  gsap.to(".slides", {
    scrollTrigger: {
      trigger: ".real",
      start: "top top",
      end: "bottom bottom",
      scrub: 2,
    },
    xPercent: -300,
    ease: Power4,
  });

  document.querySelectorAll(".listelem").forEach(function (el) {
    el.addEventListener("mousemove", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 1,
        x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, dets.clientX),
        ease: Power4,
        duration: 0.5,
      });
    });
    el.addEventListener("mouseleave", function (dets) {
      gsap.to(this.querySelector(".picture"), {
        opacity: 0,
        ease: Power4,
        duration: 0.5,
      });
    });
  });
}
slides();

function textanim() {
  var clutter = "";
  document
    .querySelector(".textpara")
    .textContent.split("")
    .forEach(function (e) {
      if (e === " ") clutter += `<span>&nbsp;</span>`;
      clutter += `<span>${e}</span>`;
    });
  document.querySelector(".textpara").innerHTML = clutter;

  gsap.set(".textpara span", { opacity: 0.1 });
  gsap.to(".textpara span", {
    scrollTrigger: {
      trigger: ".para",
      start: "top 80%",
      end: "bottom 80%",
      // markers:true,
      scrub: 2,
    },
    opacity: 1,
    stagger: 0.3,
    ease: Power4,
  });
}
textanim();

function capanim() {
  gsap.from(".right .capsule-b", {
    scrollTrigger: {
      trigger: ".capsules",
      start: "top 70%",
      end: "bottom bottom",
      scrub: 1,
      // markers:true
    },
    y: 50,
    ease: Power4,
  });
}
capanim();

function bganim() {
  document.querySelectorAll(".section").forEach(function (e) {
    ScrollTrigger.create({
      trigger: e,
      start: "top 50%",
      end: "bottom 50%",
      // markers:true,
      onEnter: function () {
        document.body.setAttribute("theme", e.dataset.color);
        // document.querySelector("nav").style.backgroundColor = e.dataset.color;
      },
      onEnterBack: function () {
        document.body.setAttribute("theme", e.dataset.color);
        // document.querySelector("nav").style.backgroundColor = e.dataset.color;
      },
    });
  });
}
bganim();

function navanim() {
  gsap.to("#nav", {
    // backgroundColor :"black",
    duration: 0.5,
    height: "60px",
    // padding:"0 80px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
}
navanim();

function footer() {
  gsap.from("#foot-end h1 span", {
    y: 200,
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
}
footer();

function boxes() {
  var boxes = document.querySelectorAll(".box");

  boxes.forEach(function (e) {
    gsap.to(e, {
      width: "33rem",
      duration: 0.5,
      backgroundColor: "black",
      color: "#AEDEE0",
      marginLeft: "-1rem",
      marginRight: "1rem",
      scrollTrigger: {
        trigger: e,
        scroller: "body",
        start: "top 60%",
        end: "top 50%",
        //   markers: true,
        scrub: 1,
      },
    });
  });
}
boxes();

function fulltimeline() {
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  tl.to("#loader h3", {
    opacity: 0,
    x: -40,
    stagger: 0.1,
    duration: 0.5,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 1,
  });
  tl.to("#loader", {
    display: "none",
    duration: 1,
  });
}
fulltimeline();
