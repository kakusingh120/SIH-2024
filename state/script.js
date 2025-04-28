function locomotive(){
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();
}
locomotive();


Shery.imageEffect("#back", {
  style: 5,
  config:{"a":{"value":2.75,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.1852704927596696},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.07,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.06,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.76,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}} ,
  gooey: true,
});

var elems=document.querySelectorAll(".elem");
elems.forEach(function(elem){
    var h1s=elem.querySelectorAll("h1");
    var index=0;
    var animating=false;
    document.querySelector("#main").addEventListener("click",function(){
        if(!animating){
            animating=true
            gsap.to(h1s[index],{
                top:"-=100%",
                ease: Expo.easeInOut,
                duration:1,
                onComplete:function(){
                    gsap.set(this._targets[0],{top:"100%"});
                    animating=false
                },
            });
            index===h1s.length-1?(index=0):index++;
            gsap.to(h1s[index],{
                top:"-=100%",
                ease: Expo.easeInOut,
                duration:1
            });
        }
        });
})

function textanim(){

    var clutter="";
    document.querySelector(".textpara")
    .textContent.split("")
    .forEach(function(e){
        if(e=== " ") clutter+=`<span>&nbsp;</span>`
        clutter+=`<span>${e}</span>`
    })
    document.querySelector(".textpara").innerHTML = clutter;
    
    gsap.set(".textpara span",{opacity:0.1})
    gsap.to(".textpara span",{
        scrollTrigger:{
            trigger:".para",
            start:"top 80%",
            end:"bottom 80%",
            // markers:true,
            scrub:2
        },
        opacity:1,
        stagger:0.3,
        ease:Power4
    })
    
}
textanim();

function capanim(){

    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end:"bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4
    })
    
}


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

  var boxes = document.querySelectorAll(".box");

  boxes.forEach(function(e) {
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
              scrub: 1
          }
      });
  });
  
  

// JavaScript for image layers transition and section highlighting


function slides(){

    gsap.to(".slides",{
        scrollTrigger:{
            trigger:".real",
            start:"top top",
            end:"bottom bottom",
            scrub:2
        },
        xPercent:-300,
        ease:Power4
    })
    
    document.querySelectorAll(".listelem").forEach(function(el){
         el.addEventListener("mousemove",function(dets){
            gsap.to(this.querySelector(".picture"),{opacity:1,x: gsap.utils.mapRange(0, window.innerWidth, -200 , 200 , dets.clientX),ease:Power4,duration:0.5})
         })
         el.addEventListener("mouseleave",function(dets){
            gsap.to(this.querySelector(".picture"),{opacity:0,ease:Power4,duration:0.5})
         })
    })
    
}
slides();


document.addEventListener('DOMContentLoaded', function () {
    const revealElements = document.querySelectorAll('.reveal-text');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, { threshold: 0.1 }); // Trigger when 10% of the element is in the viewport

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
});

