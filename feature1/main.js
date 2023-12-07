let tl = gsap.timeline();
setInterval(()=>{
tl.to(".updown",{
    y:"-100%",
    duration:2,
    ease: "back.inOut"
    // ease: "elastic.in"
    // ease: "power3.in"
   
})
tl.to(".updown",{
    y:"0%",
    delay:1,
    duration:2,
    ease: "back.inOut"
    // ease: "power3.in"
})
},6000)