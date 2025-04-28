function smooth(){
  gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed",
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
smooth()


function mouse1() {
  var page1Cont = document.querySelector("#page1-cont");
  var mouse = document.querySelector("#cursor");

  page1Cont.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.x + "px",
      y: dets.y + "px",
    });
  });

  page1Cont.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
      opacity: 1,
    });
  });

  page1Cont.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
      opacity: 0,
    });
  });
}
mouse1();

 

var abt =document.querySelector("#page6 h1")
abt.addEventListener("mouseenter",function(){
  abt.style.transition="all ease 0.3s"
  abt.style.borderBottom=0
})
abt.addEventListener("mouseleave",function(){
  abt.style.borderBottom= "4px solid black";
    abt.style.transition="all ease 0.3s"
})


function page2a() {
  gsap.from("#page2-top h1", {
    y: 10,
    stagger: 0.2,
    duration: 1,
    opacity: 0.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 70%",
      end: "top 60%",
      // markers:true,
      scrub: 2,
    },
  });
}
page2a();

function page2b() {
  gsap.from("#page2 hr", {
    width: 0,
    stagger: 0.2,
    duration: 1,
    opacity: 0.5,
    scrollTrigger: {
      trigger: "#page2",
      scroller: "#main",
      start: "top 70%",
      end: "top 40%",
      // markers:true,
      scrub: 2,
    },
  });
}
page2b();

function page3top() {
  gsap.from("#page3-top h1", {
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    scrollTrigger: {
      trigger: "#page3-top",
      scroller: "#main",
      start: "top 70%",
      end: "top 65%",
      // markers:true,
      scrub: 2,
    },
  });
}
page3top();

function page3a() {
  gsap.from("#page3b-top h1", {
    y: 10,
    stagger: 0.2,
    duration: 1,
    opacity: 0.5,
    scrollTrigger: {
      trigger: "#page3b",
      scroller: "#main",
      start: "top 70%",
      end: "top 40%",
      // markers:true,
      scrub: 2,
    },
  });
}
page3a();

function page3b() {
  gsap.from("#page3b hr", {
    width: 0,
    stagger: 0.2,
    duration: 1,
    opacity: 0.5,
    scrollTrigger: {
      trigger: "#page3b",
      scroller: "#main",
      start: "top 70%",
      end: "top 40%",
      // markers:true,
      scrub: 2,
    },
  });
}
page3b();

function page4a() {
  gsap.from("#page4b-top h1", {
    y: 30,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: "#page4b",
      scroller: "#main",
      start: "top 70%",
      end: "top 40%",
      // markers:true,
      scrub: 2,
    },
  });
}
page4a();

function page4b() {
  gsap.from("#page4b hr", {
    width: 0,
    stagger: 0.2,
    duration: 1,
    opacity: 0.5,
    scrollTrigger: {
      trigger: "#page4b",
      scroller: "#main",
      start: "top 70%",
      end: "top 40%",
      // markers:true,
      scrub: 2,
    },
  });
}
page4b();

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});

function fulltimeline(){
  var tl = gsap.timeline();

  tl.from("#loader h3", {
    x: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
  });
  tl.to("#loader h3", {
    opacity: 0,
    x: -40,
    stagger: 0.1,
    duration: 0.5,
  });
  tl.to("#loader", {
    opacity: 0,
  });
  tl.from("#page1-cont h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4,
  });
  tl.to("#loader", {
    display: "none",
  });
  gsap.from("#page1-cont h1 span", {
    y: -100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.4,
  });
  
}
fulltimeline()


// gsap.from("#foot-end h1 span", {
//   y:-500,
//   opacity: 0,
//   stagger: 0.1,
//   duration: 0.3,
//   scrollTrigger: {
//     trigger: "#foot-end",
//     scroller: "body",
//     start: "top 70%",
//     end: "top 45%",
//     markers: true,
//     scrub: 3,
//   },
// });

var clutter = "";

document.querySelector("#page2 .elem h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`
    document.querySelector("#page2 .elem h1").innerHTML = clutter;
})

gsap.to("#page2 .elem h1>span",{
    scrollTrigger:{
        trigger: "#page2 .elem h1>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom top",
        scrub:0.5,
    },
    opacity:1,
    stagger:0.2,
    color:"Black"
})

var clutter1 = "";

document.querySelector("#page3b .elem h1").textContent.split("").forEach(function(dets){
    clutter1 += `<span>${dets}</span>`
    document.querySelector("#page3b .elem h1").innerHTML = clutter1;
})

gsap.to("#page3b .elem h1>span",{
    scrollTrigger:{
        trigger: "#page3b .elem h1>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom top",
        scrub:0.5,
    },
    markers:true,
    opacity:1,
    stagger:0.2,
    color:"Black"
})

var clutter = "";

document.querySelector("#page4b .elem h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`
    document.querySelector("#page4b .elem h1").innerHTML = clutter;
})

gsap.to("#page4b .elem h1>span",{
    scrollTrigger:{
        trigger: "#page4b .elem h1>span",
        scroller:"#main",
        start: "top bottom",
        end: "bottom top",
        scrub:0.5,
    },
    opacity:1,
    stagger:0.2,
    color:"Black"
})